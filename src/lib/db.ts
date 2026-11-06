import { openDB, DBSchema, IDBPDatabase } from 'idb'
import {
  AppSettings,
  AttemptRecord,
  BackupPayload,
  Enrollment,
  GradeLevel,
  Student,
  SubjectId,
} from '../types'
import { APP_ID } from './storage'

export const DB_NAME = 'home-school-lite'
export const DB_VERSION = 1

export const ALL_SUBJECTS: SubjectId[] = ['math', 'science', 'ela', 'social']

export function getCourseIdsForGrade(grade: GradeLevel): string[] {
  return ALL_SUBJECTS.map((sub) => `g${grade}-${sub}`)
}

interface HomeSchoolDB extends DBSchema {
  students: {
    key: string
    value: Student
  }
  enrollments: {
    key: string
    value: Enrollment
    indexes: { 'by-student': string }
  }
  attempts: {
    key: string
    value: AttemptRecord
    indexes: { 'by-student': string; 'by-lesson': string }
  }
  settings: {
    key: string
    value: AppSettings
  }
}

export const DEFAULT_SETTINGS: AppSettings = {
  id: 'global',
  appId: APP_ID,
  parentPin: '1234',
  masteryThreshold: 80,
  retryPenaltyPercent: 0,
  lessonWeight: 60,
  unitTestWeight: 40,
  autoCheckUpdates: true,
  updateCheckIntervalMin: 15,
  autoApplyUpdates: false,
}

let dbPromise: Promise<IDBPDatabase<HomeSchoolDB>> | null = null

export function getDb(): Promise<IDBPDatabase<HomeSchoolDB>> {
  if (!dbPromise) {
    dbPromise = openDB<HomeSchoolDB>(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('students')) {
          db.createObjectStore('students', { keyPath: 'id' })
        }
        if (!db.objectStoreNames.contains('enrollments')) {
          const store = db.createObjectStore('enrollments', { keyPath: 'id' })
          store.createIndex('by-student', 'studentId')
        }
        if (!db.objectStoreNames.contains('attempts')) {
          const store = db.createObjectStore('attempts', { keyPath: 'id' })
          store.createIndex('by-student', 'studentId')
          store.createIndex('by-lesson', 'lessonId')
        }
        if (!db.objectStoreNames.contains('settings')) {
          db.createObjectStore('settings', { keyPath: 'id' })
        }
      },
    })
  }
  return dbPromise
}

export async function resetDbConnectionForTests(): Promise<void> {
  if (dbPromise) {
    const db = await dbPromise
    db.close()
    dbPromise = null
  }
}

export async function getSettings(): Promise<AppSettings> {
  const db = await getDb()
  const existing = await db.get('settings', 'global')
  if (existing) {
    return { ...DEFAULT_SETTINGS, ...existing, id: 'global', appId: APP_ID }
  }
  await db.put('settings', DEFAULT_SETTINGS)
  return DEFAULT_SETTINGS
}

export async function saveSettings(patch: Partial<AppSettings>): Promise<AppSettings> {
  const current = await getSettings()
  const updated: AppSettings = {
    ...current,
    ...patch,
    id: 'global',
    appId: APP_ID,
  }
  const db = await getDb()
  await db.put('settings', updated)
  return updated
}

export async function getStudents(): Promise<Student[]> {
  const db = await getDb()
  const all = await db.getAll('students')
  return all.sort((a, b) => a.createdAt.localeCompare(b.createdAt))
}

export async function ensureEnrollmentsForGrade(
  studentId: string,
  grade: GradeLevel
): Promise<Enrollment[]> {
  const db = await getDb()
  const existing = await db.getAllFromIndex('enrollments', 'by-student', studentId)
  const existingSet = new Set(existing.map((e) => e.courseId))
  const now = new Date().toISOString()

  for (const courseId of getCourseIdsForGrade(grade)) {
    if (!existingSet.has(courseId)) {
      const enrollment: Enrollment = {
        id: `${studentId}:${courseId}`,
        studentId,
        courseId,
        grade,
        enrolledAt: now,
      }
      await db.put('enrollments', enrollment)
      existing.push(enrollment)
    }
  }
  return existing
}

export async function createStudent(input: {
  name: string
  avatar: string
  grade: GradeLevel
  targetEndDate?: string
}): Promise<Student> {
  const db = await getDb()
  const now = new Date()
  const defaultTarget = new Date(now.getTime() + 180 * 86400000).toISOString().slice(0, 10)
  const student: Student = {
    id: `stu-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: input.name.trim(),
    avatar: input.avatar,
    grade: input.grade,
    createdAt: now.toISOString(),
    targetEndDate: input.targetEndDate || defaultTarget,
    streakDays: 1,
    lastActiveDate: now.toISOString().slice(0, 10),
  }
  await db.put('students', student)
  await ensureEnrollmentsForGrade(student.id, student.grade)
  return student
}

export async function updateStudent(
  studentId: string,
  patch: Partial<Pick<Student, 'name' | 'avatar' | 'grade' | 'targetEndDate'>>
): Promise<Student> {
  const db = await getDb()
  const existing = await db.get('students', studentId)
  if (!existing) {
    throw new Error(`Student ${studentId} not found`)
  }
  const updated: Student = {
    ...existing,
    ...patch,
    id: existing.id,
  }
  await db.put('students', updated)
  // Always ensure all 4 courses for the active grade are enrolled while preserving prior grade history
  await ensureEnrollmentsForGrade(updated.id, updated.grade)
  return updated
}

export async function deleteStudent(studentId: string): Promise<void> {
  const db = await getDb()
  await db.delete('students', studentId)
  const enrollments = await db.getAllFromIndex('enrollments', 'by-student', studentId)
  for (const e of enrollments) {
    await db.delete('enrollments', e.id)
  }
  const attempts = await db.getAllFromIndex('attempts', 'by-student', studentId)
  for (const a of attempts) {
    await db.delete('attempts', a.id)
  }
}

export async function getStudentEnrollments(studentId: string): Promise<Enrollment[]> {
  const db = await getDb()
  return db.getAllFromIndex('enrollments', 'by-student', studentId)
}

export async function getStudentAttempts(studentId: string): Promise<AttemptRecord[]> {
  const db = await getDb()
  const list = await db.getAllFromIndex('attempts', 'by-student', studentId)
  return list.sort((a, b) => a.completedAt.localeCompare(b.completedAt))
}

export async function recordQuizAttempt(
  input: Omit<AttemptRecord, 'id' | 'attemptNumber' | 'completedAt'>
): Promise<AttemptRecord> {
  const db = await getDb()
  const existing = await db.getAllFromIndex('attempts', 'by-student', input.studentId)
  const lessonAttempts = existing.filter(
    (a) => a.courseId === input.courseId && a.lessonId === input.lessonId
  )
  const attemptNumber = lessonAttempts.length + 1
  const nowIso = new Date().toISOString()

  const record: AttemptRecord = {
    ...input,
    id: `att-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    attemptNumber,
    completedAt: nowIso,
  }
  await db.put('attempts', record)

  // Update student streak
  const student = await db.get('students', input.studentId)
  if (student) {
    const today = nowIso.slice(0, 10)
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
    let streakDays = student.streakDays || 1
    if (student.lastActiveDate === yesterday) {
      streakDays += 1
    } else if (student.lastActiveDate !== today) {
      streakDays = 1
    }
    await db.put('students', {
      ...student,
      streakDays,
      lastActiveDate: today,
    })
  }

  return record
}

export async function exportBackupData(): Promise<BackupPayload> {
  const db = await getDb()
  const [students, enrollments, attempts, settings] = await Promise.all([
    db.getAll('students'),
    db.getAll('enrollments'),
    db.getAll('attempts'),
    getSettings(),
  ])
  return {
    app: APP_ID,
    schemaVersion: 1,
    exportedAt: new Date().toISOString(),
    students,
    enrollments,
    attempts,
    settings,
  }
}

export async function importBackupData(rawPayload: unknown): Promise<{
  studentsCount: number
  attemptsCount: number
}> {
  if (!rawPayload || typeof rawPayload !== 'object') {
    throw new Error('Invalid backup file: expected JSON object.')
  }
  const payload = rawPayload as Partial<BackupPayload>
  if (payload.app !== APP_ID) {
    throw new Error(
      `Rejected backup file: expected app "${APP_ID}", received "${String(payload.app ?? 'unknown')}".`
    )
  }
  if (!Array.isArray(payload.students) || !Array.isArray(payload.attempts)) {
    throw new Error('Invalid backup structure: missing students or attempts arrays.')
  }

  const db = await getDb()
  const tx = db.transaction(['students', 'enrollments', 'attempts', 'settings'], 'readwrite')

  await Promise.all([
    tx.objectStore('students').clear(),
    tx.objectStore('enrollments').clear(),
    tx.objectStore('attempts').clear(),
  ])

  for (const s of payload.students) {
    const normalizedGrade: GradeLevel = s.grade === 6 ? 6 : 4
    await tx.objectStore('students').put({ ...s, grade: normalizedGrade })
  }
  for (const e of payload.enrollments ?? []) {
    await tx.objectStore('enrollments').put(e)
  }
  for (const a of payload.attempts) {
    await tx.objectStore('attempts').put(a)
  }
  if (payload.settings) {
    await tx.objectStore('settings').put({
      ...DEFAULT_SETTINGS,
      ...payload.settings,
      id: 'global',
      appId: APP_ID,
    })
  }

  await tx.done

  for (const s of payload.students) {
    await ensureEnrollmentsForGrade(s.id, s.grade === 6 ? 6 : 4)
  }

  return {
    studentsCount: payload.students.length,
    attemptsCount: payload.attempts.length,
  }
}
