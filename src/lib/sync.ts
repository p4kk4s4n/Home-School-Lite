import { BackupPayload, Student } from '../types'
import { exportBackupData, getSettings, mergeFamilyPayload, saveSettings } from './db'
import { APP_ID } from './storage'

const DEFAULT_RELAY_BASE = 'https://jsonblob.com/api/jsonBlob'

export interface SyncStatusResult {
  ok: boolean
  syncedAt: string
  familyCode: string
  mergedStudents?: number
  mergedAttempts?: number
  error?: string
}

/**
 * Resolves a Family Code or custom URL into a concrete HTTPS endpoint URL.
 * - If customEndpointUrl is provided (e.g., Firebase Realtime DB `https://my-proj.firebaseio.com/hsl.json`), uses it.
 * - If familyCode is `HSL-<blobId>`, resolves to `${DEFAULT_RELAY_BASE}/<blobId>`.
 */
export function resolveSyncEndpoint(familyCode: string, customEndpointUrl?: string): string {
  const trimmedCustom = (customEndpointUrl || '').trim()
  if (trimmedCustom) {
    return trimmedCustom
  }
  const cleanCode = familyCode.trim().replace(/^HSL-/i, '')
  if (!cleanCode) {
    throw new Error('Missing Family Join Code.')
  }
  return `${DEFAULT_RELAY_BASE}/${cleanCode}`
}

/**
 * Creates a brand-new Family Circle in the cloud with zero account setup required,
 * returning the shareable Family Join Code (e.g. "HSL-129481029...").
 */
export async function createCloudFamilyCircle(
  customEndpointUrl?: string,
  fetchImpl: typeof fetch = fetch
): Promise<{ familyCode: string; endpointUrl: string }> {
  const payload = await exportBackupData()
  const trimmedCustom = (customEndpointUrl || '').trim()

  if (trimmedCustom) {
    const familyCode = `HSL-CUSTOM-${Math.random().toString(36).slice(2, 6).toUpperCase()}`
    const body: BackupPayload = { ...payload, familyCode }
    const res = await fetchImpl(trimmedCustom, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    })
    if (!res.ok) {
      throw new Error(`Cloud endpoint returned HTTP ${res.status}`)
    }
    await saveSettings({
      familySync: {
        enabled: true,
        familyCode,
        syncEndpointUrl: trimmedCustom,
        deviceRole: 'parent',
        boundStudentId: undefined,
        autoSyncIntervalMin: 5,
        lastSyncedAt: new Date().toISOString(),
      },
    })
    return { familyCode, endpointUrl: trimmedCustom }
  }

  // Zero-setup instant cloud relay via JSONBlob POST
  const response = await fetchImpl(DEFAULT_RELAY_BASE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`Unable to provision cloud relay (HTTP ${response.status}).`)
  }

  const locationHeader =
    response.headers.get('Location') || response.headers.get('location') || ''
  const parts = locationHeader.split('/').filter(Boolean)
  const blobId = parts[parts.length - 1]
  if (!blobId) {
    throw new Error('Cloud relay did not return a document ID.')
  }

  const familyCode = `HSL-${blobId}`
  const endpointUrl = `${DEFAULT_RELAY_BASE}/${blobId}`

  // Update the remote document so it includes its own familyCode
  const updatedPayload: BackupPayload = { ...payload, familyCode }
  await fetchImpl(endpointUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(updatedPayload),
  }).catch(() => {})

  await saveSettings({
    familySync: {
      enabled: true,
      familyCode,
      syncEndpointUrl: endpointUrl,
      deviceRole: 'parent',
      boundStudentId: undefined,
      autoSyncIntervalMin: 5,
      lastSyncedAt: new Date().toISOString(),
    },
  })

  return { familyCode, endpointUrl }
}

/**
 * Fetches the remote Family Circle payload without modifying local state yet
 * (used when a Student device enters a Family Code to pick their student profile and verify their PIN).
 */
export async function fetchRemoteFamilyPreview(
  familyCode: string,
  customEndpointUrl?: string,
  fetchImpl: typeof fetch = fetch
): Promise<BackupPayload> {
  const url = resolveSyncEndpoint(familyCode, customEndpointUrl)
  const res = await fetchImpl(url, {
    method: 'GET',
    cache: 'no-store',
    headers: { Accept: 'application/json' },
  })
  if (!res.ok) {
    throw new Error(`Could not find Family Circle "${familyCode}" (HTTP ${res.status}).`)
  }
  const data = (await res.json()) as BackupPayload
  if (!data || data.app !== APP_ID) {
    throw new Error('Remote document is not a valid Home-School-Lite Family Circle.')
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
  customEndpointUrl?: string
  fetchImpl?: typeof fetch
}): Promise<{ student: Student; familyCode: string }> {
  const {
    familyCode,
    studentId,
    studentPin,
    customEndpointUrl,
    fetchImpl = fetch,
  } = options

  const remote = await fetchRemoteFamilyPreview(familyCode, customEndpointUrl, fetchImpl)
  const targetStudent = remote.students.find((s) => s.id === studentId)
  if (!targetStudent) {
    throw new Error('Selected student was not found in this Family Circle.')
  }

  const expectedPin = (targetStudent.studentPin || '1111').trim()
  if (studentPin.trim() !== expectedPin) {
    throw new Error('Incorrect Student PIN for this student profile.')
  }

  // Merge the remote family data into this student device
  await mergeFamilyPayload(remote)

  const endpointUrl = resolveSyncEndpoint(familyCode, customEndpointUrl)
  const normalizedCode = familyCode.trim().startsWith('HSL-')
    ? familyCode.trim()
    : `HSL-${familyCode.trim()}`

  await saveSettings({
    familySync: {
      enabled: true,
      familyCode: normalizedCode,
      syncEndpointUrl: endpointUrl,
      deviceRole: 'student',
      boundStudentId: targetStudent.id,
      autoSyncIntervalMin: 5,
      lastSyncedAt: new Date().toISOString(),
    },
  })

  return { student: targetStudent, familyCode: normalizedCode }
}

/**
 * Joins an existing Family Circle as a Parent device (requires the Family's Parent PIN).
 */
export async function joinFamilyAsParent(options: {
  familyCode: string
  parentPin: string
  customEndpointUrl?: string
  fetchImpl?: typeof fetch
}): Promise<{ familyCode: string; studentsCount: number }> {
  const { familyCode, parentPin, customEndpointUrl, fetchImpl = fetch } = options
  const remote = await fetchRemoteFamilyPreview(familyCode, customEndpointUrl, fetchImpl)

  const expectedParentPin = (remote.settings?.parentPin || '1234').trim()
  if (parentPin.trim() !== expectedParentPin) {
    throw new Error('Incorrect Parent PIN for this Family Circle.')
  }

  const merged = await mergeFamilyPayload(remote)
  const endpointUrl = resolveSyncEndpoint(familyCode, customEndpointUrl)
  const normalizedCode = familyCode.trim().startsWith('HSL-')
    ? familyCode.trim()
    : `HSL-${familyCode.trim()}`

  await saveSettings({
    familySync: {
      enabled: true,
      familyCode: normalizedCode,
      syncEndpointUrl: endpointUrl,
      deviceRole: 'parent',
      boundStudentId: undefined,
      autoSyncIntervalMin: 5,
      lastSyncedAt: new Date().toISOString(),
    },
  })

  // Push merged state back so any local students/attempts on this parent device are included
  const updatedPayload = await exportBackupData()
  await fetchImpl(endpointUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(updatedPayload),
  }).catch(() => {})

  return {
    familyCode: normalizedCode,
    studentsCount: merged.mergedStudents,
  }
}

/**
 * Performs a two-way conflict-free sync with the configured Family Circle endpoint:
 * 1. GET remote payload
 * 2. Union-merge attempts & last-writer-wins merge students/settings locally
 * 3. PUT the combined payload back to the cloud so all student & parent devices stay in sync.
 */
export async function syncFamilyCircle(
  fetchImpl: typeof fetch = fetch
): Promise<SyncStatusResult> {
  const settings = await getSettings()
  const syncCfg = settings.familySync
  const nowIso = new Date().toISOString()

  if (!syncCfg || !syncCfg.enabled || !syncCfg.familyCode) {
    return {
      ok: false,
      syncedAt: nowIso,
      familyCode: '',
      error: 'Family Sync is not enabled on this device.',
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

    const latestLocal = await exportBackupData()
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
