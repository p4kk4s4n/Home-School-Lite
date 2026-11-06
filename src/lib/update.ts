import { RemoteVersionInfo } from '../types'
import { APP_ID, APP_SCOPE, CACHE_PREFIX } from './storage'

export interface UpdateCheckResult {
  updateAvailable: boolean
  currentVersion: string
  currentBuildTime: string
  currentCommit: string
  remote: RemoteVersionInfo | null
  checkedAt: string
  error?: string
}

export function getCurrentBuildInfo(): RemoteVersionInfo {
  return {
    appId: APP_ID,
    version: typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '1.0.0',
    buildTime: typeof __BUILD_TIME__ !== 'undefined' ? __BUILD_TIME__ : '',
    commit: typeof __COMMIT_SHA__ !== 'undefined' ? __COMMIT_SHA__ : 'local',
  }
}

export function isNewerRemoteVersion(
  current: RemoteVersionInfo,
  remote: RemoteVersionInfo
): boolean {
  // Strictly ignore any version manifest that doesn't belong to Home-School-Lite
  if (!remote || remote.appId !== APP_ID) {
    return false
  }
  if (remote.version && remote.version !== current.version) {
    return true
  }
  if (
    remote.commit &&
    current.commit &&
    remote.commit !== 'local' &&
    current.commit !== 'local' &&
    remote.commit !== current.commit
  ) {
    return true
  }
  if (
    remote.buildTime &&
    current.buildTime &&
    remote.buildTime !== current.buildTime &&
    Date.parse(remote.buildTime) > Date.parse(current.buildTime)
  ) {
    return true
  }
  return false
}

export async function checkForAppUpdate(
  fetchImpl: typeof fetch = fetch,
  baseUrl: string = import.meta.env.BASE_URL || APP_SCOPE
): Promise<UpdateCheckResult> {
  const current = getCurrentBuildInfo()
  const checkedAt = new Date().toISOString()
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  const url = `${normalizedBase}version.json?t=${Date.now()}`

  try {
    const response = await fetchImpl(url, {
      cache: 'no-store',
      headers: {
        Pragma: 'no-cache',
        'Cache-Control': 'no-cache',
      },
    })
    if (!response.ok) {
      return {
        updateAvailable: false,
        currentVersion: current.version,
        currentBuildTime: current.buildTime,
        currentCommit: current.commit,
        remote: null,
        checkedAt,
        error: `HTTP ${response.status}`,
      }
    }
    const data = (await response.json()) as RemoteVersionInfo
    if (!data || data.appId !== APP_ID) {
      return {
        updateAvailable: false,
        currentVersion: current.version,
        currentBuildTime: current.buildTime,
        currentCommit: current.commit,
        remote: null,
        checkedAt,
        error: 'Foreign appId in version.json ignored',
      }
    }
    const updateAvailable = isNewerRemoteVersion(current, data)
    return {
      updateAvailable,
      currentVersion: current.version,
      currentBuildTime: current.buildTime,
      currentCommit: current.commit,
      remote: data,
      checkedAt,
    }
  } catch (err) {
    return {
      updateAvailable: false,
      currentVersion: current.version,
      currentBuildTime: current.buildTime,
      currentCommit: current.commit,
      remote: null,
      checkedAt,
      error: err instanceof Error ? err.message : 'Network error',
    }
  }
}

/**
 * Deletes ONLY caches belonging to Home-School-Lite (prefixed with "hsl-").
 * Never touches sibling app caches on the same GitHub Pages origin.
 */
export async function cleanAppCachesOnly(
  cacheStorage: CacheStorage | undefined = typeof caches !== 'undefined' ? caches : undefined
): Promise<string[]> {
  if (!cacheStorage) return []
  const allKeys = await cacheStorage.keys()
  const hslKeys = allKeys.filter((k) => k.startsWith(CACHE_PREFIX))
  await Promise.all(hslKeys.map((k) => cacheStorage.delete(k)))
  return hslKeys
}

/**
 * Registers the service worker strictly under /Home-School-Lite/ scope.
 */
export async function registerScopedServiceWorker(): Promise<ServiceWorkerRegistration | null> {
  if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) {
    return null
  }
  try {
    const swUrl = `${APP_SCOPE}sw.js`
    const registration = await navigator.serviceWorker.register(swUrl, {
      scope: APP_SCOPE,
    })
    return registration
  } catch {
    return null
  }
}

/**
 * Applies a newly deployed update by updating only this app's scoped service worker,
 * clearing only hsl-* caches, and reloading the page.
 * Student data in IndexedDB ("home-school-lite") is completely preserved.
 */
export async function applyAppUpdate(
  reloadFn: () => void = () => window.location.reload()
): Promise<void> {
  try {
    if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
      const reg = await navigator.serviceWorker.getRegistration(APP_SCOPE)
      if (reg) {
        try {
          await reg.update()
        } catch {
          // Ignore network update error and proceed with cache flush
        }
        if (reg.waiting) {
          reg.waiting.postMessage({ type: 'SKIP_WAITING' })
        }
      }
    }
    await cleanAppCachesOnly()
  } finally {
    reloadFn()
  }
}
