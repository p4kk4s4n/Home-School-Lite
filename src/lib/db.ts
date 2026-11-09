import { openDB, DBSchema, IDBPDatabase } from 'idb'
import {
  AppSettings,
  AttemptRecord,
  BackupPayload,
  ConnectedParentDevice,
  Enrollment,
  GradeLevel,
  Student,
  SubjectId,
} from '../types'
import { APP_ID } from './storage'

export const DB_NAME = 'home-school-lite'
export const DB_VERSION = 1

export const ALL_SUBJECTS: SubjectId[] = ['math', 'science', 'ela', 'social']

export function normalizeGrade(raw: unknown): GradeLevel {
  const n = Number(raw)
  if (n === 4 || n === 5 || n === 6 || n === 7 || n === 8) {
    return n
  }
  return 4
}

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
  requireAssignmentChecklist: true,
  includeOhioAdjustments: true,
  autoCheckUpdates: true,
  updateCheckIntervalMin: 15,
  autoApplyUpdates: false,
  updatedAt: '2026-01-01T00:00:00.000Z',
  deletedStudentIds: [],
  familySync: {
    enabled: false,
    familyCode: '',
    syncEndpointUrl: '',
    deviceRole: 'parent',
    autoSyncIntervalMin: 5,
  },
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

export async function resetFamilySyncSettings(): Promise<AppSettings> {
  const current = await getSettings()
  const updated: AppSettings = {
    ...current,
    familySync: {
      enabled: false,
      familyCode: '',
      syncEndpointUrl: '',
      deviceRole: 'parent',
      boundStudentId: undefined,
      autoSyncIntervalMin: 5,
      lastSyncedAt: undefined,
    },
    updatedAt: new Date().toISOString(),
  }
  const db = await getDb()
  await db.put('settings', updated)
  return updated
}

export async function resetDbConnectionForTests(): Promise<void> {
  const db = await getDb()
  const tx = db.transaction(['students', 'enrollments', 'attempts', 'settings'], 'readwrite')
  await Promise.all([
    tx.objectStore('students').clear(),
    tx.objectStore('enrollments').clear(),
    tx.objectStore('attempts').clear(),
    tx.objectStore('settings').clear(),
  ])
  await tx.done
}

export async function getSettings(): Promise<AppSettings> {
  const db = await getDb()
  const existing = await db.get('settings', 'global')
  if (existing) {
    return {
      ...DEFAULT_SETTINGS,
      ...existing,
      deletedStudentIds: existing.deletedStudentIds ?? [],
      familySync: {
        ...DEFAULT_SETTINGS.familySync!,
        ...(existing.familySync ?? {}),
      },
      id: 'global',
      appId: APP_ID,
    }
  }
  await db.put('settings', DEFAULT_SETTINGS)
  return DEFAULT_SETTINGS
}

export async function saveSettings(patch: Partial<AppSettings>): Promise<AppSettings> {
  const current = await getSettings()
  const updated: AppSettings = {
    ...current,
    ...patch,
    deletedStudentIds: patch.deletedStudentIds ?? current.deletedStudentIds ?? [],
    familySync: patch.familySync
      ? { ...current.familySync!, ...patch.familySync }
      : current.familySync,
    updatedAt: patch.updatedAt ?? new Date().toISOString(),
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
  return all
    .map((s) => ({
      ...s,
      grade: normalizeGrade(s.grade),
      studentPin: s.studentPin || '1111',
      updatedAt: s.updatedAt || s.createdAt,
    }))
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
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
  id?: string
  name: string
  avatar: string
  grade: GradeLevel
  studentPin?: string
  targetEndDate?: string
}): Promise<Student> {
  const db = await getDb()
  const now = new Date()
  const nowIso = now.toISOString()
  const defaultTarget = new Date(now.getTime() + 180 * 86400000).toISOString().slice(0, 10)
  const student: Student = {
    id: input.id || `stu-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: input.name.trim(),
    avatar: input.avatar,
    grade: input.grade,
    studentPin: (input.studentPin || '1111').trim(),
    createdAt: nowIso,
    updatedAt: nowIso,
    targetEndDate: input.targetEndDate || defaultTarget,
    streakDays: 1,
    lastActiveDate: nowIso.slice(0, 10),
  }
  await db.put('students', student)
  await ensureEnrollmentsForGrade(student.id, student.grade)
  return student
}

export async function updateStudent(
  studentId: string,
  patch: Partial<Pick<Student, 'name' | 'avatar' | 'grade' | 'studentPin' | 'targetEndDate'>>
): Promise<Student> {
  const db = await getDb()
  const existing = await db.get('students', studentId)
  if (!existing) {
    throw new Error(`Student ${studentId} not found`)
  }
  const updated: Student = {
    ...existing,
    ...patch,
    studentPin: patch.studentPin ?? existing.studentPin ?? '1111',
    updatedAt: new Date().toISOString(),
    id: existing.id,
  }
  await db.put('students', updated)
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

  // Tombstone studentId in settings to prevent resurrection during cloud sync
  const settings = await getSettings()
  const deletedSet = new Set(settings.deletedStudentIds || [])
  deletedSet.add(studentId)
  await saveSettings({
    deletedStudentIds: Array.from(deletedSet),
    updatedAt: new Date().toISOString(),
  })
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

export async function getAllAttempts(): Promise<AttemptRecord[]> {
  const db = await getDb()
  const list = await db.getAll('attempts')
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
    getStudents(),
    db.getAll('enrollments'),
    db.getAll('attempts'),
    getSettings(),
  ])
  return {
    app: APP_ID,
    schemaVersion: 1,
    familyCode: settings.familySync?.familyCode || undefined,
    exportedAt: new Date().toISOString(),
    deletedStudentIds: settings.deletedStudentIds || [],
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
    const normalizedGrade: GradeLevel = normalizeGrade(s.grade)
    await tx.objectStore('students').put({
      ...s,
      grade: normalizedGrade,
      studentPin: s.studentPin || '1111',
      updatedAt: s.updatedAt || s.createdAt,
    })
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
    await ensureEnrollmentsForGrade(s.id, normalizeGrade(s.grade))
  }

  return {
    studentsCount: payload.students.length,
    attemptsCount: payload.attempts.length,
  }
}

/**
 * Conflict-free union & last-writer-wins merge for multi-device Family Sync.
 * - Attempts are immutable events merged by union (no student attempt is ever lost).
 * - Students are merged by id using updatedAt last-writer-wins for profile/grade, while keeping max streak and latest activity date.
 * - Settings take parent-controlled policy fields from whichever copy has the newer updatedAt, while preserving this device's local deviceRole and boundStudentId.
 */
export async function mergeFamilyPayload(rawRemote: unknown): Promise<{
  mergedStudents: number
  mergedAttempts: number
}> {
  if (!rawRemote || typeof rawRemote !== 'object') {
    throw new Error('Invalid remote sync payload.')
  }
  const remote = rawRemote as Partial<BackupPayload>
  if (remote.app !== APP_ID) {
    throw new Error(`Rejected remote payload: foreign app "${String(remote.app)}".`)
  }

  const db = await getDb()
  const [localStudents, localEnrollments, localAttempts, localSettings] = await Promise.all([
    getStudents(),
    db.getAll('enrollments'),
    db.getAll('attempts'),
    getSettings(),
  ])

  // Collect all tombstoned (deleted) student IDs to prevent resurrection
  const allDeletedIds = new Set<string>([
    ...(localSettings.deletedStudentIds || []),
    ...(remote.deletedStudentIds || []),
    ...(remote.settings?.deletedStudentIds || []),
  ])

  // 1. Merge Students (by id, last-writer-wins on updatedAt, max streakDays, excluding deleted)
  const studentMap = new Map<string, Student>()
  for (const s of localStudents) {
    if (!allDeletedIds.has(s.id)) {
      studentMap.set(s.id, s)
    }
  }
  for (const r of remote.students ?? []) {
    if (allDeletedIds.has(r.id)) {
      continue
    }
    const normalizedGrade: GradeLevel = normalizeGrade(r.grade)
    const incoming: Student = {
      ...r,
      grade: normalizedGrade,
      studentPin: r.studentPin || '1111',
      updatedAt: r.updatedAt || r.createdAt,
    }
    const existing = studentMap.get(incoming.id)
    if (!existing) {
      studentMap.set(incoming.id, incoming)
    } else {
      const existingTime = Date.parse(existing.updatedAt || existing.createdAt || '0')
      const incomingTime = Date.parse(incoming.updatedAt || incoming.createdAt || '0')
      const winner = incomingTime >= existingTime ? incoming : existing
      const lastActive =
        (incoming.lastActiveDate || '') >= (existing.lastActiveDate || '')
          ? incoming.lastActiveDate
          : existing.lastActiveDate
      studentMap.set(incoming.id, {
        ...winner,
        streakDays: Math.max(existing.streakDays || 1, incoming.streakDays || 1),
        lastActiveDate: lastActive,
      })
    }
  }

  // 2. Merge Attempts (immutable union by id, excluding deleted students)
  const attemptMap = new Map<string, AttemptRecord>()
  for (const a of localAttempts) {
    if (!allDeletedIds.has(a.studentId)) {
      attemptMap.set(a.id, a)
    }
  }
  for (const a of remote.attempts ?? []) {
    if (allDeletedIds.has(a.studentId)) {
      continue
    }
    const prev = attemptMap.get(a.id)
    if (!prev || (!prev.reviewItems && a.reviewItems)) {
      attemptMap.set(a.id, a)
    }
  }

  // Normalize attemptNumbers per (studentId, courseId, lessonId) in chronological order
  const groupedAttempts = new Map<string, AttemptRecord[]>()
  for (const att of attemptMap.values()) {
    const key = `${att.studentId}::${att.courseId}::${att.lessonId}`
    const bucket = groupedAttempts.get(key) ?? []
    bucket.push(att)
    groupedAttempts.set(key, bucket)
  }
  const normalizedAttempts: AttemptRecord[] = []
  for (const bucket of groupedAttempts.values()) {
    bucket.sort((a, b) => a.completedAt.localeCompare(b.completedAt))
    bucket.forEach((item, idx) => {
      normalizedAttempts.push({
        ...item,
        attemptNumber: idx + 1,
      })
    })
  }

  // 3. Merge Enrollments (union by id, excluding deleted students)
  const enrollmentMap = new Map<string, Enrollment>()
  for (const e of localEnrollments) {
    if (!allDeletedIds.has(e.studentId)) {
      enrollmentMap.set(e.id, e)
    }
  }
  for (const e of remote.enrollments ?? []) {
    if (allDeletedIds.has(e.studentId)) {
      continue
    }
    enrollmentMap.set(e.id, e)
  }

  // 4. Merge Settings & Connected Parents (union connectedParents by id, preserving latest lastSeenAt)
  const parentDeviceMap = new Map<string, ConnectedParentDevice>()
  for (const p of localSettings.connectedParents ?? []) {
    parentDeviceMap.set(p.id, p)
  }
  for (const p of remote.settings?.connectedParents ?? []) {
    const existing = parentDeviceMap.get(p.id)
    if (!existing) {
      parentDeviceMap.set(p.id, p)
    } else {
      const existingSeen = existing.lastSeenAt || existing.linkedAt
      const incomingSeen = p.lastSeenAt || p.linkedAt
      parentDeviceMap.set(p.id, {
        ...existing,
        name: p.name || existing.name,
        lastSeenAt: incomingSeen >= existingSeen ? p.lastSeenAt : existing.lastSeenAt,
      })
    }
  }
  const mergedConnectedParents = Array.from(parentDeviceMap.values())

  let mergedSettings: AppSettings = {
    ...localSettings,
    deletedStudentIds: Array.from(allDeletedIds),
    connectedParents: mergedConnectedParents,
  }
  if (remote.settings) {
    const localTime = Date.parse(localSettings.updatedAt || '0')
    const remoteTime = Date.parse(remote.settings.updatedAt || '0')
    if (remoteTime >= localTime) {
      mergedSettings = {
        ...localSettings,
        parentPin: remote.settings.parentPin ?? localSettings.parentPin,
        masteryThreshold: remote.settings.masteryThreshold ?? localSettings.masteryThreshold,
        retryPenaltyPercent:
          remote.settings.retryPenaltyPercent ?? localSettings.retryPenaltyPercent,
        lessonWeight: remote.settings.lessonWeight ?? localSettings.lessonWeight,
        unitTestWeight: remote.settings.unitTestWeight ?? localSettings.unitTestWeight,
        requireAssignmentChecklist:
          remote.settings.requireAssignmentChecklist ??
          localSettings.requireAssignmentChecklist,
        includeOhioAdjustments:
          remote.settings.includeOhioAdjustments ??
          localSettings.includeOhioAdjustments ??
          true,
        deletedStudentIds: Array.from(allDeletedIds),
        connectedParents: mergedConnectedParents,
        updatedAt: remote.settings.updatedAt,
        familySync: {
          ...localSettings.familySync!,
          lastSyncedAt: new Date().toISOString(),
        },
      }
    } else {
      mergedSettings = {
        ...localSettings,
        deletedStudentIds: Array.from(allDeletedIds),
        connectedParents: mergedConnectedParents,
        familySync: {
          ...localSettings.familySync!,
          lastSyncedAt: new Date().toISOString(),
        },
      }
    }
  }

  const tx = db.transaction(['students', 'enrollments', 'attempts', 'settings'], 'readwrite')
  // Explicitly purge any deleted student IDs from local object stores
  for (const delId of allDeletedIds) {
    await tx.objectStore('students').delete(delId)
  }
  for (const s of studentMap.values()) {
    await tx.objectStore('students').put(s)
  }
  for (const e of enrollmentMap.values()) {
    await tx.objectStore('enrollments').put(e)
  }
  for (const a of normalizedAttempts) {
    await tx.objectStore('attempts').put(a)
  }
  await tx.objectStore('settings').put(mergedSettings)
  await tx.done

  for (const s of studentMap.values()) {
    await ensureEnrollmentsForGrade(s.id, s.grade)
  }

  return {
    mergedStudents: studentMap.size,
    mergedAttempts: normalizedAttempts.length,
  }
}
