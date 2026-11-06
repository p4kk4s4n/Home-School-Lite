import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { getCoursesForGrade, ALL_COURSES } from '../lib/curriculum'
import {
  createStudent,
  DEFAULT_SETTINGS,
  deleteStudent,
  ensureEnrollmentsForGrade,
  getSettings,
  getStudentAttempts,
  getStudents,
  recordQuizAttempt,
  saveSettings,
  updateStudent,
} from '../lib/db'
import { getLocalItem, removeLocalItem, setLocalItem, STORAGE_KEYS } from '../lib/storage'
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
  settings: AppSettings
  isParentUnlocked: boolean
  isQuizInProgress: boolean
  setIsQuizInProgress: (active: boolean) => void
  selectStudent: (studentId: string) => Promise<void>
  addStudent: (input: {
    name: string
    avatar: string
    grade: GradeLevel
    targetEndDate?: string
  }) => Promise<Student>
  editStudent: (
    studentId: string,
    patch: Partial<Pick<Student, 'name' | 'avatar' | 'grade' | 'targetEndDate'>>
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
}

const AppContext = createContext<AppContextValue | null>(null)

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [students, setStudents] = useState<Student[]>([])
  const [activeStudentId, setActiveStudentId] = useState<string | null>(() =>
    getLocalItem(STORAGE_KEYS.ACTIVE_STUDENT_ID)
  )
  const [attempts, setAttempts] = useState<AttemptRecord[]>([])
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
  const quizInProgressRef = useRef(isQuizInProgress)
  quizInProgressRef.current = isQuizInProgress

  const reloadAllData = useCallback(async () => {
    setLoading(true)
    try {
      const [loadedSettings, loadedStudents] = await Promise.all([
        getSettings(),
        getStudents(),
      ])
      setSettings(loadedSettings)

      let finalStudents = loadedStudents
      if (finalStudents.length === 0) {
        // Seed a default starter student so first-time visitors can explore right away
        const starter = await createStudent({
          name: 'Alex Scholar',
          avatar: '🚀',
          grade: 4,
        })
        finalStudents = [starter]
      }

      setStudents(finalStudents)

      const storedId = getLocalItem(STORAGE_KEYS.ACTIVE_STUDENT_ID)
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
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void reloadAllData()
  }, [reloadAllData])

  const activeStudent = useMemo(
    () => students.find((s) => s.id === activeStudentId) ?? students[0] ?? null,
    [students, activeStudentId]
  )

  const activeCourses = useMemo(
    () => (activeStudent ? getCoursesForGrade(activeStudent.grade) : getCoursesForGrade(4)),
    [activeStudent]
  )

  const selectStudent = useCallback(async (studentId: string) => {
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
  }, [])

  const addStudent = useCallback(
    async (input: {
      name: string
      avatar: string
      grade: GradeLevel
      targetEndDate?: string
    }) => {
      const created = await createStudent(input)
      const all = await getStudents()
      setStudents(all)
      setActiveStudentId(created.id)
      setLocalItem(STORAGE_KEYS.ACTIVE_STUDENT_ID, created.id)
      const att = await getStudentAttempts(created.id)
      setAttempts(att)
      return created
    },
    []
  )

  const editStudent = useCallback(
    async (
      studentId: string,
      patch: Partial<Pick<Student, 'name' | 'avatar' | 'grade' | 'targetEndDate'>>
    ) => {
      await updateStudent(studentId, patch)
      const all = await getStudents()
      setStudents(all)
      if (studentId === activeStudentId) {
        const att = await getStudentAttempts(studentId)
        setAttempts(att)
      }
    },
    [activeStudentId]
  )

  const removeStudent = useCallback(
    async (studentId: string) => {
      await deleteStudent(studentId)
      await reloadAllData()
    },
    [reloadAllData]
  )

  const submitAttempt = useCallback(
    async (input: Omit<AttemptRecord, 'id' | 'attemptNumber' | 'completedAt'>) => {
      const record = await recordQuizAttempt(input)
      const [updatedStudents, updatedAttempts] = await Promise.all([
        getStudents(),
        getStudentAttempts(input.studentId),
      ])
      setStudents(updatedStudents)
      setAttempts(updatedAttempts)
      return record
    },
    []
  )

  const updateAppSettings = useCallback(async (patch: Partial<AppSettings>) => {
    const saved = await saveSettings(patch)
    setSettings(saved)
  }, [])

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
      const saved = await saveSettings({ lastUpdateCheck: res.checkedAt })
      setSettings(saved)
      if (res.updateAvailable && saved.autoApplyUpdates && !quizInProgressRef.current) {
        await applyAppUpdate()
      }
      return res
    } finally {
      setCheckingUpdate(false)
    }
  }, [])

  const applyUpdateNow = useCallback(async () => {
    await applyAppUpdate()
  }, [])

  // Auto-check for updates on launch, interval, and tab focus
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

  const value = useMemo<AppContextValue>(
    () => ({
      loading,
      students,
      activeStudent,
      activeCourses,
      allCourses: ALL_COURSES,
      attempts,
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
    }),
    [
      loading,
      students,
      activeStudent,
      activeCourses,
      attempts,
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
