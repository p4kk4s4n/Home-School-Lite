export const STORAGE_PREFIX = 'hsl:'
export const APP_ID = 'home-school-lite' as const
export const APP_SCOPE = '/Home-School-Lite/' as const
export const CACHE_PREFIX = 'hsl-' as const

export const STORAGE_KEYS = {
  ACTIVE_STUDENT_ID: 'hsl:activeStudentId',
  PARENT_UNLOCKED_UNTIL: 'hsl:parentUnlockedUntil',
  DISMISSED_VERSION: 'hsl:dismissedVersion',
  CHECKLIST_PREFIX: 'hsl:checklist:',
} as const

export function assertNamespacedKey(key: string): void {
  if (!key.startsWith(STORAGE_PREFIX)) {
    throw new Error(`Storage isolation violation: key "${key}" must start with "${STORAGE_PREFIX}"`)
  }
}

export function getLocalItem(key: string): string | null {
  assertNamespacedKey(key)
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

export function setLocalItem(key: string, value: string): void {
  assertNamespacedKey(key)
  try {
    window.localStorage.setItem(key, value)
  } catch {
    // Ignore storage quota errors
  }
}

export function removeLocalItem(key: string): void {
  assertNamespacedKey(key)
  try {
    window.localStorage.removeItem(key)
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
