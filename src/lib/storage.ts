export const STORAGE_PREFIX = 'hsl:'
export const APP_ID = 'home-school-lite' as const
export const APP_SCOPE = '/Home-School-Lite/' as const
export const CACHE_PREFIX = 'hsl-' as const

export const STORAGE_KEYS = {
  ACTIVE_STUDENT_ID: 'hsl:activeStudentId',
  PARENT_UNLOCKED_UNTIL: 'hsl:parentUnlockedUntil',
  DISMISSED_VERSION: 'hsl:dismissedVersion',
  CHECKLIST_PREFIX: 'hsl:checklist:',
  EXPLORE_PREFIX: 'hsl:explore:',
  DISPLAY_PREFS: 'hsl:displayPrefs',
  REMINDER_CONFIG: 'hsl:reminderConfig',
} as const

export function assertNamespacedKey(key: string): void {
  if (!key.startsWith(STORAGE_PREFIX)) {
    throw new Error(`Storage isolation violation: key "${key}" must start with "${STORAGE_PREFIX}"`)
  }
}

/**
 * Ensures any key is strictly scoped with the `hsl:` prefix.
 * If an un-prefixed key is passed, auto-prefixes it to guarantee isolation
 * without crashing the UI.
 */
function resolveSafeKey(key: string): string {
  if (key.startsWith(STORAGE_PREFIX)) return key
  return `${STORAGE_PREFIX}${key}`
}

export function getLocalItem(key: string): string | null {
  const safeKey = resolveSafeKey(key)
  try {
    const val = window.localStorage.getItem(safeKey)
    if (val !== null) return val
    // If an un-prefixed legacy key is present, migrate it to the namespaced key
    if (safeKey !== key) {
      const legacyVal = window.localStorage.getItem(key)
      if (legacyVal !== null) {
        window.localStorage.setItem(safeKey, legacyVal)
        window.localStorage.removeItem(key)
        return legacyVal
      }
    }
    return null
  } catch {
    return null
  }
}

export function setLocalItem(key: string, value: string): void {
  const safeKey = resolveSafeKey(key)
  try {
    window.localStorage.setItem(safeKey, value)
  } catch {
    // Ignore storage quota errors
  }
}

export function removeLocalItem(key: string): void {
  const safeKey = resolveSafeKey(key)
  try {
    window.localStorage.removeItem(safeKey)
    if (safeKey !== key) {
      window.localStorage.removeItem(key)
    }
  } catch {
    // Ignore
  }
}

export function getLessonChecklistProgress(studentId: string, lessonId: string): string[] {
  const key = `${STORAGE_KEYS.CHECKLIST_PREFIX}${studentId}:${lessonId}`
  const raw = getLocalItem(key)
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveLessonChecklistProgress(
  studentId: string,
  lessonId: string,
  completedStepIds: string[]
): void {
  const key = `${STORAGE_KEYS.CHECKLIST_PREFIX}${studentId}:${lessonId}`
  setLocalItem(key, JSON.stringify(Array.from(new Set(completedStepIds))))
}

export function getExploreCompletedProgress(studentId: string, courseId: string): string[] {
  const key = `${STORAGE_KEYS.EXPLORE_PREFIX}${studentId}:${courseId}`
  let raw: string | null = null
  try {
    raw = getLocalItem(key)
  } catch {
    raw = null
  }
  // Seamless migration for legacy un-prefixed key if present
  if (!raw) {
    try {
      const legacyKey = `explore:${studentId}:${courseId}`
      const legacyRaw = window.localStorage.getItem(legacyKey)
      if (legacyRaw) {
        raw = legacyRaw
        setLocalItem(key, legacyRaw)
        window.localStorage.removeItem(legacyKey)
      }
    } catch {
      // Ignore
    }
  }
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveExploreCompletedProgress(
  studentId: string,
  courseId: string,
  completedExploreIds: string[]
): void {
  const key = `${STORAGE_KEYS.EXPLORE_PREFIX}${studentId}:${courseId}`
  setLocalItem(key, JSON.stringify(Array.from(new Set(completedExploreIds))))
}
