import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { ALL_COURSES, getCoursesForGrade } from '../lib/curriculum'
import {
  createStudent,
  DEFAULT_SETTINGS,
  deleteStudent,
  ensureEnrollmentsForGrade,
  getAllAttempts,
  getSettings,
  getStudentAttempts,
  getStudents,
  recordQuizAttempt,
  saveSettings,
  updateStudent,
} from '../lib/db'
import { getLocalItem, removeLocalItem, setLocalItem, STORAGE_KEYS } from '../lib/storage'
import { syncFamilyCircle, SyncStatusResult } from '../lib/sync'
import {
  applyAppUpdate,
  checkForAppUpdate,
  getCurrentBuildInfo,
  UpdateCheckResult,
} from '../lib/update'
import { AppSettings, AttemptRecord, Course, GradeLevel, Student } from '../types'

interface AppContextValue {
  loading: boolean
  students: Student[]
  activeStudent: Student | null
  activeCourses: Course[]
  allCourses: Course[]
  attempts: AttemptRecord[]
  allAttempts: AttemptRecord[]
  settings: AppSettings
  isParentUnlocked: boolean
  isQuizInProgress: boolean
  setIsQuizInProgress: (active: boolean) => void
  selectStudent: (studentId: string) => Promise<void>
  addStudent: (input: {
    name: string
    avatar: string
    grade: GradeLevel
    studentPin?: string
    targetEndDate?: string
  }) => Promise<Student>
  editStudent: (
    studentId: string,
    patch: Partial<
      Pick<Student, 'name' | 'avatar' | 'grade' | 'studentPin' | 'targetEndDate'>
    >
  ) => Promise<void>
  removeStudent: (studentId: string) => Promise<void>
  submitAttempt: (
    input: Omit<AttemptRecord, 'id' | 'attemptNumber' | 'completedAt'>
  ) => Promise<AttemptRecord>
  updateAppSettings: (patch: Partial<AppSettings>) => Promise<void>
  unlockParent: (pin: string) => boolean
  lockParent: () => void
  reloadAllData: () => Promise<void>
  // Update checker
  updateStatus: UpdateCheckResult | null
  checkingUpdate: boolean
  triggerUpdateCheck: () => Promise<UpdateCheckResult>
  applyUpdateNow: () => Promise<void>
  // Family cloud sync
  syncingFamily: boolean
  lastSyncResult: SyncStatusResult | null
  triggerFamilySync: () => Promise<SyncStatusResult>
}

const AppContext = createContext<AppContextValue | null>(null)

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [students, setStudents] = useState<Student[]>([])
  const [activeStudentId, setActiveStudentId] = useState<string | null>(() =>
    getLocalItem(STORAGE_KEYS.ACTIVE_STUDENT_ID)
  )
  const [attempts, setAttempts] = useState<AttemptRecord[]>([])
  const [allAttempts, setAllAttempts] = useState<AttemptRecord[]>([])
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS)
  const [isParentUnlocked, setIsParentUnlocked] = useState<boolean>(() => {
    const until = Number(getLocalItem(STORAGE_KEYS.PARENT_UNLOCKED_UNTIL) || '0')
    return until > Date.now()
  })
  const [isQuizInProgress, setIsQuizInProgress] = useState(false)
  const [updateStatus, setUpdateStatus] = useState<UpdateCheckResult | null>(() => {
    const current = getCurrentBuildInfo()
    return {
      updateAvailable: false,
      currentVersion: current.version,
      currentBuildTime: current.buildTime,
      currentCommit: current.commit,
      remote: null,
      checkedAt: new Date().toISOString(),
    }
  })
  const [checkingUpdate, setCheckingUpdate] = useState(false)
  const [syncingFamily, setSyncingFamily] = useState(false)
  const [lastSyncResult, setLastSyncResult] = useState<SyncStatusResult | null>(null)

  const quizInProgressRef = useRef(isQuizInProgress)
  quizInProgressRef.current = isQuizInProgress

  const refreshStateFromDb = useCallback(async () => {
    const [loadedSettings, loadedStudents, loadedAllAttempts] = await Promise.all([
      getSettings(),
      getStudents(),
      getAllAttempts(),
    ])
    setSettings(loadedSettings)
    setAllAttempts(loadedAllAttempts)

    let finalStudents = loadedStudents
    if (finalStudents.length === 0) {
      const starter = await createStudent({
        name: 'Alex Scholar',
        avatar: '🚀',
        grade: 4,
        studentPin: '1111',
      })
      finalStudents = [starter]
    }
    setStudents(finalStudents)

    // If this device is bound to a specific student via Family Sync, lock to that student
    const boundId =
      loadedSettings.familySync?.enabled &&
      loadedSettings.familySync?.deviceRole === 'student'
        ? loadedSettings.familySync.boundStudentId
        : undefined

    const storedId = boundId || getLocalItem(STORAGE_KEYS.ACTIVE_STUDENT_ID)
    const chosen =
      finalStudents.find((s) => s.id === storedId) ?? finalStudents[0] ?? null

    if (chosen) {
      setActiveStudentId(chosen.id)
      setLocalItem(STORAGE_KEYS.ACTIVE_STUDENT_ID, chosen.id)
      await ensureEnrollmentsForGrade(chosen.id, chosen.grade)
      const studentAttempts = await getStudentAttempts(chosen.id)
      setAttempts(studentAttempts)
    } else {
      setActiveStudentId(null)
      setAttempts([])
    }
  }, [])

  const reloadAllData = useCallback(async () => {
    setLoading(true)
    try {
      await refreshStateFromDb()
    } finally {
      setLoading(false)
    }
  }, [refreshStateFromDb])

  useEffect(() => {
    void reloadAllData()
  }, [reloadAllData])

  const triggerFamilySync = useCallback(async (): Promise<SyncStatusResult> => {
    setSyncingFamily(true)
    try {
      const res = await syncFamilyCircle()
      setLastSyncResult(res)
      if (res.ok) {
        await refreshStateFromDb()
      }
      return res
    } finally {
      setSyncingFamily(false)
    }
  }, [refreshStateFromDb])

  const activeStudent = useMemo(
    () => students.find((s) => s.id === activeStudentId) ?? students[0] ?? null,
    [students, activeStudentId]
  )

  const activeCourses = useMemo(
    () => (activeStudent ? getCoursesForGrade(activeStudent.grade) : getCoursesForGrade(4)),
    [activeStudent]
  )

  const selectStudent = useCallback(
    async (studentId: string) => {
      // If bound as a student device without parent unlock, prevent switching to another student
      if (
        settings.familySync?.enabled &&
        settings.familySync.deviceRole === 'student' &&
        settings.familySync.boundStudentId &&
        settings.familySync.boundStudentId !== studentId &&
        !isParentUnlocked
      ) {
        return
      }
      setActiveStudentId(studentId)
      setLocalItem(STORAGE_KEYS.ACTIVE_STUDENT_ID, studentId)
      const all = await getStudents()
      setStudents(all)
      const found = all.find((s) => s.id === studentId)
      if (found) {
        await ensureEnrollmentsForGrade(found.id, found.grade)
        const att = await getStudentAttempts(found.id)
        setAttempts(att)
      }
    },
    [settings.familySync, isParentUnlocked]
  )

  const addStudent = useCallback(
    async (input: {
      name: string
      avatar: string
      grade: GradeLevel
      studentPin?: string
      targetEndDate?: string
    }) => {
      const created = await createStudent(input)
      await refreshStateFromDb()
      setActiveStudentId(created.id)
      setLocalItem(STORAGE_KEYS.ACTIVE_STUDENT_ID, created.id)
      const att = await getStudentAttempts(created.id)
      setAttempts(att)
      if (settings.familySync?.enabled) {
        void triggerFamilySync()
      }
      return created
    },
    [refreshStateFromDb, settings.familySync?.enabled, triggerFamilySync]
  )

  const editStudent = useCallback(
    async (
      studentId: string,
      patch: Partial<
        Pick<Student, 'name' | 'avatar' | 'grade' | 'studentPin' | 'targetEndDate'>
      >
    ) => {
      await updateStudent(studentId, patch)
      await refreshStateFromDb()
      if (settings.familySync?.enabled) {
        void triggerFamilySync()
      }
    },
    [refreshStateFromDb, settings.familySync?.enabled, triggerFamilySync]
  )

  const removeStudent = useCallback(
    async (studentId: string) => {
      await deleteStudent(studentId)
      await refreshStateFromDb()
      if (settings.familySync?.enabled) {
        void triggerFamilySync()
      }
    },
    [refreshStateFromDb, settings.familySync?.enabled, triggerFamilySync]
  )

  const submitAttempt = useCallback(
    async (input: Omit<AttemptRecord, 'id' | 'attemptNumber' | 'completedAt'>) => {
      const record = await recordQuizAttempt(input)
      const [updatedStudents, updatedAttempts, updatedAllAttempts] = await Promise.all([
        getStudents(),
        getStudentAttempts(input.studentId),
        getAllAttempts(),
      ])
      setStudents(updatedStudents)
      setAttempts(updatedAttempts)
      setAllAttempts(updatedAllAttempts)

      if (settings.familySync?.enabled) {
        void triggerFamilySync()
      }
      return record
    },
    [settings.familySync?.enabled, triggerFamilySync]
  )

  const updateAppSettings = useCallback(
    async (patch: Partial<AppSettings>) => {
      const saved = await saveSettings(patch)
      setSettings(saved)
      if (saved.familySync?.enabled) {
        void triggerFamilySync()
      }
    },
    [triggerFamilySync]
  )

  const unlockParent = useCallback(
    (pin: string) => {
      if (pin.trim() === settings.parentPin) {
        setIsParentUnlocked(true)
        setLocalItem(
          STORAGE_KEYS.PARENT_UNLOCKED_UNTIL,
          String(Date.now() + 30 * 60 * 1000)
        )
        return true
      }
      return false
    },
    [settings.parentPin]
  )

  const lockParent = useCallback(() => {
    setIsParentUnlocked(false)
    removeLocalItem(STORAGE_KEYS.PARENT_UNLOCKED_UNTIL)
  }, [])

  const triggerUpdateCheck = useCallback(async () => {
    setCheckingUpdate(true)
    try {
      const res = await checkForAppUpdate()
      setUpdateStatus(res)
      const saved = await saveSettings({
        lastUpdateCheck: res.checkedAt,
        updatedAt: settings.updatedAt,
      })
      setSettings(saved)
      if (res.updateAvailable && saved.autoApplyUpdates && !quizInProgressRef.current) {
        await applyAppUpdate()
      }
      return res
    } finally {
      setCheckingUpdate(false)
    }
  }, [settings.updatedAt])

  const applyUpdateNow = useCallback(async () => {
    await applyAppUpdate()
  }, [])

  // Auto-check for deployed app updates
  useEffect(() => {
    if (!settings.autoCheckUpdates) return

    void triggerUpdateCheck()

    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible' && settings.autoCheckUpdates) {
        void triggerUpdateCheck()
      }
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    let timer: ReturnType<typeof setInterval> | null = null
    if (settings.updateCheckIntervalMin > 0) {
      timer = setInterval(
        () => {
          void triggerUpdateCheck()
        },
        settings.updateCheckIntervalMin * 60 * 1000
      )
    }

    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange)
      if (timer) clearInterval(timer)
    }
  }, [settings.autoCheckUpdates, settings.updateCheckIntervalMin, triggerUpdateCheck])

  // Auto-sync Family Circle across devices on launch, tab focus, and interval
  useEffect(() => {
    const syncCfg = settings.familySync
    if (!syncCfg?.enabled || !syncCfg.familyCode) return

    void triggerFamilySync()

    const onFocusSync = () => {
      if (document.visibilityState === 'visible' && !quizInProgressRef.current) {
        void triggerFamilySync()
      }
    }
    document.addEventListener('visibilitychange', onFocusSync)

    let timer: ReturnType<typeof setInterval> | null = null
    if (syncCfg.autoSyncIntervalMin > 0) {
      timer = setInterval(
        () => {
          if (!quizInProgressRef.current) {
            void triggerFamilySync()
          }
        },
        syncCfg.autoSyncIntervalMin * 60 * 1000
      )
    }

    return () => {
      document.removeEventListener('visibilitychange', onFocusSync)
      if (timer) clearInterval(timer)
    }
  }, [
    settings.familySync?.enabled,
    settings.familySync?.familyCode,
    settings.familySync?.autoSyncIntervalMin,
    triggerFamilySync,
  ])

  const value = useMemo<AppContextValue>(
    () => ({
      loading,
      students,
      activeStudent,
      activeCourses,
      allCourses: ALL_COURSES,
      attempts,
      allAttempts,
      settings,
      isParentUnlocked,
      isQuizInProgress,
      setIsQuizInProgress,
      selectStudent,
      addStudent,
      editStudent,
      removeStudent,
      submitAttempt,
      updateAppSettings,
      unlockParent,
      lockParent,
      reloadAllData,
      updateStatus,
      checkingUpdate,
      triggerUpdateCheck,
      applyUpdateNow,
      syncingFamily,
      lastSyncResult,
      triggerFamilySync,
    }),
    [
      loading,
      students,
      activeStudent,
      activeCourses,
      attempts,
      allAttempts,
      settings,
      isParentUnlocked,
      isQuizInProgress,
      selectStudent,
      addStudent,
      editStudent,
      removeStudent,
      submitAttempt,
      updateAppSettings,
      unlockParent,
      lockParent,
      reloadAllData,
      updateStatus,
      checkingUpdate,
      triggerUpdateCheck,
      applyUpdateNow,
      syncingFamily,
      lastSyncResult,
      triggerFamilySync,
    ]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext)
  if (!ctx) {
    throw new Error('useApp must be used inside <AppProvider>')
  }
  return ctx
}
