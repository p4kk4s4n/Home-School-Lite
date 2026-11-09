import { BackupPayload, ConnectedParentDevice, Student } from '../types'
import {
  exportBackupData,
  getSettings,
  mergeFamilyPayload,
  resetFamilySyncSettings,
  saveSettings,
} from './db'
import { APP_ID } from './storage'

export interface SyncStatusResult {
  ok: boolean
  syncedAt: string
  familyCode: string
  mergedStudents?: number
  mergedAttempts?: number
  error?: string
}

export interface ConnectionTestResult {
  ok: boolean
  status: number
  message: string
}

/**
 * Generates a random 5-digit Family Code, e.g. "HSL-78421".
 */
export function generateRandomFamilyCode(): string {
  const num = Math.floor(10000 + Math.random() * 90000)
  return `HSL-${num}`
}

/**
 * Normalizes user-entered Family Code into a standard format (e.g. "HSL-#####").
 */
export function normalizeFamilyCode(rawCode: string): string {
  const clean = rawCode
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9_-]/g, '')
  if (!clean) return ''
  return clean.startsWith('HSL-') ? clean : `HSL-${clean}`
}

/**
 * Resolves a Family Code and base URL into a concrete HTTPS REST endpoint URL.
 * Supports:
 * 1. Firebase Realtime DB: `https://<proj>-default-rtdb.firebaseio.com` -> `${url}/families/<code\>.json`
 * 2. URL template with `{familyCode}`: `https://example.com/api/{familyCode}` -> replaced
 * 3. Direct JSON endpoint ending in `.json`
 * 4. Generic REST base: `${url.replace(/\/$/, '')}/families/${code}.json`
 */
export function resolveSyncEndpoint(familyCode: string, customEndpointUrl?: string): string {
  const code = normalizeFamilyCode(familyCode)
  if (!code) {
    throw new Error('Family Code is required.')
  }

  const rawUrl = (customEndpointUrl || '').trim()
  if (!rawUrl) {
    throw new Error(
      'Missing Cloud Database URL. Please provide your Firebase Realtime Database URL (e.g. https://your-proj-default-rtdb.firebaseio.com) or custom REST URL.'
    )
  }

  // Handle URL templates like https://api.mycloud.com/store/{familyCode}
  if (rawUrl.includes('{familyCode}')) {
    return rawUrl.replace('{familyCode}', encodeURIComponent(code))
  }

  // Handle Firebase Realtime Database
  if (rawUrl.includes('firebaseio.com')) {
    const base = rawUrl.replace(/\/families.*$/, '').replace(/\/$/, '')
    return `${base}/families/${encodeURIComponent(code)}.json`
  }

  // If already ends in .json with familyCode
  if (rawUrl.endsWith('.json') && rawUrl.includes(code)) {
    return rawUrl
  }

  // Standard generic REST endpoint
  const base = rawUrl.replace(/\/$/, '')
  return `${base}/families/${encodeURIComponent(code)}.json`
}

/**
 * Tests reading and writing to the cloud endpoint to verify connectivity and rules.
 */
export async function testSyncConnection(
  familyCode: string,
  customEndpointUrl: string,
  fetchImpl: typeof fetch = fetch
): Promise<ConnectionTestResult> {
  try {
    const url = resolveSyncEndpoint(familyCode, customEndpointUrl)
    const res = await fetchImpl(url, {
      method: 'GET',
      cache: 'no-store',
      headers: { Accept: 'application/json' },
    })

    if (res.status === 401 || res.status === 403) {
      return {
        ok: false,
        status: res.status,
        message:
          'Access Denied (HTTP 401/403). Check that your Firebase Realtime Database security rules allow read/write.',
      }
    }

    if (res.status === 404) {
      return {
        ok: true,
        status: 404,
        message:
          'Connected! Database is reachable. This Family Circle does not exist yet (click "Create / Initialize Circle" below to create it).',
      }
    }

    if (!res.ok) {
      return {
        ok: false,
        status: res.status,
        message: `Cloud server returned HTTP ${res.status}.`,
      }
    }

    return {
      ok: true,
      status: 200,
      message: 'Connection successful! Cloud database is online and reachable.',
    }
  } catch (err) {
    return {
      ok: false,
      status: 0,
      message:
        err instanceof Error
          ? err.message
          : 'Unable to connect to cloud database (network or CORS error).',
    }
  }
}

/**
 * Creates or initializes a Family Circle under the user's chosen Family Code (e.g. "HSL-#####").
 * Issues a PUT request to the cloud endpoint so the document exists immediately.
 */
export async function createCloudFamilyCircle(options: {
  familyCode: string
  endpointUrl: string
  parentName?: string
  fetchImpl?: typeof fetch
}): Promise<{ familyCode: string; endpointUrl: string }> {
  const {
    familyCode: rawCode,
    endpointUrl: rawUrl,
    parentName,
    fetchImpl = fetch,
  } = options
  const familyCode = normalizeFamilyCode(rawCode)
  if (!familyCode) {
    throw new Error('Please enter a valid Family Code (e.g. HSL-78421).')
  }

  const endpointUrl = resolveSyncEndpoint(familyCode, rawUrl)
  const currentSettings = await getSettings()
  const parentDeviceId =
    currentSettings.familySync?.parentDeviceId ||
    `parent-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`
  const displayName = (parentName || currentSettings.familySync?.parentName || 'Primary Parent').trim()
  const nowIso = new Date().toISOString()

  const parentDevice: ConnectedParentDevice = {
    id: parentDeviceId,
    name: displayName,
    linkedAt: nowIso,
    lastSeenAt: nowIso,
  }

  const existingParents = currentSettings.connectedParents || []
  const updatedParents = [
    ...existingParents.filter((p) => p.id !== parentDeviceId),
    parentDevice,
  ]

  await saveSettings({
    connectedParents: updatedParents,
    familySync: {
      enabled: true,
      familyCode,
      syncEndpointUrl: rawUrl.trim(),
      deviceRole: 'parent',
      parentDeviceId,
      parentName: displayName,
      boundStudentId: undefined,
      autoSyncIntervalMin: 5,
      lastSyncedAt: nowIso,
    },
  })

  const payload = await exportBackupData()
  const body: BackupPayload = {
    ...payload,
    familyCode,
    exportedAt: nowIso,
  }

  const res = await fetchImpl(endpointUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    if (res.status === 401 || res.status === 403) {
      throw new Error(
        'Permission denied (HTTP 401/403). Ensure your Firebase Realtime Database rules allow read and write.'
      )
    }
    throw new Error(`Cloud database returned HTTP ${res.status} when creating Family Circle.`)
  }

  return { familyCode, endpointUrl }
}

/**
 * Fetches the remote Family Circle preview without modifying local state.
 * Used on Student devices to load the roster and select their profile.
 */
export async function fetchRemoteFamilyPreview(
  familyCode: string,
  customEndpointUrl: string,
  fetchImpl: typeof fetch = fetch
): Promise<BackupPayload> {
  const url = resolveSyncEndpoint(familyCode, customEndpointUrl)
  const res = await fetchImpl(url, {
    method: 'GET',
    cache: 'no-store',
    headers: { Accept: 'application/json' },
  })

  if (res.status === 404) {
    throw new Error(
      `Family Circle "${familyCode}" was not found (HTTP 404). Ensure the parent device has clicked "Create / Initialize Circle" first.`
    )
  }

  if (res.status === 401 || res.status === 403) {
    throw new Error(
      'Access Denied (HTTP 401/403). Check your Firebase Realtime Database rules.'
    )
  }

  if (!res.ok) {
    throw new Error(`Cloud database returned HTTP ${res.status}.`)
  }

  const data = (await res.json()) as BackupPayload
  if (!data || data.app !== APP_ID) {
    throw new Error(
      'Remote document is not a valid Home-School-Lite Family Circle.'
    )
  }

  return data
}

/**
 * Joins an existing Family Circle as a Student device using Family Code + Student ID + Student PIN.
 * Parents never need to sign in on student devices.
 */
export async function joinFamilyAsStudent(options: {
  familyCode: string
  studentId: string
  studentPin: string
  customEndpointUrl: string
  fetchImpl?: typeof fetch
}): Promise<{ student: Student; familyCode: string }> {
  const {
    familyCode: rawCode,
    studentId,
    studentPin,
    customEndpointUrl,
    fetchImpl = fetch,
  } = options

  const familyCode = normalizeFamilyCode(rawCode)
  const remote = await fetchRemoteFamilyPreview(familyCode, customEndpointUrl, fetchImpl)
  const targetStudent = remote.students.find((s) => s.id === studentId)
  if (!targetStudent) {
    throw new Error('Selected student profile was not found in this Family Circle.')
  }

  const expectedPin = (targetStudent.studentPin || '1111').trim()
  if (studentPin.trim() !== expectedPin) {
    throw new Error('Incorrect Student PIN for this student profile.')
  }

  // Merge the remote family roster and parent settings into this student device
  await mergeFamilyPayload(remote)

  await saveSettings({
    familySync: {
      enabled: true,
      familyCode,
      syncEndpointUrl: customEndpointUrl.trim(),
      deviceRole: 'student',
      boundStudentId: targetStudent.id,
      autoSyncIntervalMin: 5,
      lastSyncedAt: new Date().toISOString(),
    },
  })

  return { student: targetStudent, familyCode }
}

/**
 * Links a Parent device to an existing Family Circle using the Family Code and Parent PIN.
 */
export async function joinFamilyAsParent(options: {
  familyCode: string
  parentPin: string
  customEndpointUrl: string
  parentName?: string
  fetchImpl?: typeof fetch
}): Promise<{ familyCode: string; studentsCount: number }> {
  const {
    familyCode: rawCode,
    parentPin,
    customEndpointUrl,
    parentName,
    fetchImpl = fetch,
  } = options
  const familyCode = normalizeFamilyCode(rawCode)
  const remote = await fetchRemoteFamilyPreview(familyCode, customEndpointUrl, fetchImpl)

  const expectedParentPin = (remote.settings?.parentPin || '1234').trim()
  if (parentPin.trim() !== expectedParentPin) {
    throw new Error('Incorrect Parent PIN for this Family Circle.')
  }

  const merged = await mergeFamilyPayload(remote)
  const endpointUrl = resolveSyncEndpoint(familyCode, customEndpointUrl)

  const currentLocal = await getSettings()
  const parentDeviceId =
    currentLocal.familySync?.parentDeviceId ||
    `parent-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`
  const displayName = (parentName || currentLocal.familySync?.parentName || 'Parent Device').trim()
  const nowIso = new Date().toISOString()

  const parentDevice: ConnectedParentDevice = {
    id: parentDeviceId,
    name: displayName,
    linkedAt: nowIso,
    lastSeenAt: nowIso,
  }

  const existingParents = currentLocal.connectedParents || []
  const updatedParents = [
    ...existingParents.filter((p) => p.id !== parentDeviceId),
    parentDevice,
  ]

  await saveSettings({
    connectedParents: updatedParents,
    familySync: {
      enabled: true,
      familyCode,
      syncEndpointUrl: customEndpointUrl.trim(),
      deviceRole: 'parent',
      parentDeviceId,
      parentName: displayName,
      boundStudentId: undefined,
      autoSyncIntervalMin: 5,
      lastSyncedAt: nowIso,
    },
  })

  // Push back updated payload with this newly linked parent device
  const updatedPayload = await exportBackupData()
  const body: BackupPayload = {
    ...updatedPayload,
    familyCode,
    exportedAt: nowIso,
  }

  await fetchImpl(endpointUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  }).catch(() => {})

  return {
    familyCode,
    studentsCount: merged.mergedStudents,
  }
}

/**
 * Performs a two-way sync with the cloud database.
 */
export async function syncFamilyCircle(
  fetchImpl: typeof fetch = fetch
): Promise<SyncStatusResult> {
  const settings = await getSettings()
  const syncCfg = settings.familySync
  const nowIso = new Date().toISOString()

  if (!syncCfg || !syncCfg.enabled || !syncCfg.familyCode || !syncCfg.syncEndpointUrl) {
    return {
      ok: false,
      syncedAt: nowIso,
      familyCode: '',
      error: 'Family Sync is not configured on this device.',
    }
  }

  try {
    const endpoint = resolveSyncEndpoint(syncCfg.familyCode, syncCfg.syncEndpointUrl)
    const getRes = await fetchImpl(endpoint, {
      method: 'GET',
      cache: 'no-store',
      headers: { Accept: 'application/json' },
    })

    let mergedStudents = 0
    let mergedAttempts = 0

    if (getRes.ok) {
      const remoteData = (await getRes.json()) as BackupPayload
      if (remoteData && remoteData.app === APP_ID) {
        const res = await mergeFamilyPayload(remoteData)
        mergedStudents = res.mergedStudents
        mergedAttempts = res.mergedAttempts
      }
    }

    // Update this device's lastSeenAt in connectedParents if this is a parent device
    let updatedParents = settings.connectedParents || []
    if (syncCfg.deviceRole === 'parent' && syncCfg.parentDeviceId) {
      updatedParents = updatedParents.map((p) =>
        p.id === syncCfg.parentDeviceId ? { ...p, lastSeenAt: nowIso } : p
      )
    }

    const latestLocal = await exportBackupData()
    if (syncCfg.deviceRole === 'parent' && syncCfg.parentDeviceId) {
      latestLocal.settings.connectedParents = updatedParents
    }

    const putRes = await fetchImpl(endpoint, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(latestLocal),
    })

    if (!putRes.ok) {
      throw new Error(`Cloud push returned HTTP ${putRes.status}`)
    }

    await saveSettings({
      connectedParents: updatedParents,
      familySync: {
        ...syncCfg,
        lastSyncedAt: nowIso,
      },
    })

    return {
      ok: true,
      syncedAt: nowIso,
      familyCode: syncCfg.familyCode,
      mergedStudents,
      mergedAttempts,
    }
  } catch (err) {
    return {
      ok: false,
      syncedAt: nowIso,
      familyCode: syncCfg.familyCode,
      error: err instanceof Error ? err.message : 'Sync network error',
    }
  }
}

/**
 * Pushes the current local state directly to the cloud endpoint via PUT.
 * Unlike two-way sync, this does NOT pull first, ensuring local deletions and
 * tombstones immediately overwrite the cloud document without resurrection.
 */
export async function pushFamilyCircleToCloud(
  customEndpointUrl?: string,
  fetchImpl: typeof fetch = fetch
): Promise<void> {
  const settings = await getSettings()
  const syncCfg = settings.familySync
  if (!syncCfg || !syncCfg.enabled || !syncCfg.familyCode || !syncCfg.syncEndpointUrl) {
    return
  }

  const endpointUrl = resolveSyncEndpoint(
    syncCfg.familyCode,
    customEndpointUrl || syncCfg.syncEndpointUrl
  )
  const payload = await exportBackupData()
  const nowIso = new Date().toISOString()
  const body: BackupPayload = {
    ...payload,
    familyCode: syncCfg.familyCode,
    exportedAt: nowIso,
  }

  const res = await fetchImpl(endpointUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    throw new Error(`Cloud push failed with HTTP ${res.status}`)
  }

  await saveSettings({
    familySync: {
      ...syncCfg,
      lastSyncedAt: nowIso,
    },
  })
}

/**
 * Disconnects and resets Family Sync on this device without erasing local student records.
 */
export async function disconnectFamilySync(): Promise<void> {
  await resetFamilySyncSettings()
}
