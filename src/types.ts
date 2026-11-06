export type GradeLevel = 4 | 6

export type SubjectId = 'math' | 'science' | 'ela' | 'social'

export interface QuestionBankItem {
  id: string
  prompt: string
  passage?: string
  type: 'mc' | 'num' | 'tf'
  choices?: string[]
  answer: string
  explanation: string
}

export interface GeneratedQuestion extends QuestionBankItem {
  fingerprint: string
  principleId: string
  principleTitle: string
}

export interface Principle {
  id: string
  title: string
  standard: string
  summary: string
  generatorId?: string
  bank?: QuestionBankItem[]
}

export interface Lesson {
  id: string
  unitId: string
  title: string
  kind?: 'lesson' | 'unit_test'
  estimatedMinutes: number
  videoUrl: string
  videoTitle: string
  reading: string
  principles: Principle[]
  questionCount?: number
}

export interface Unit {
  id: string
  title: string
  standards: string[]
  lessons: Lesson[]
}

export interface Course {
  id: string
  subject: SubjectId
  grade: GradeLevel
  title: string
  subtitle: string
  credits: number
  color: string
  icon: string
  units: Unit[]
}

export interface Student {
  id: string
  name: string
  avatar: string
  grade: GradeLevel
  createdAt: string
  targetEndDate: string
  streakDays: number
  lastActiveDate?: string
}

export interface Enrollment {
  id: string
  studentId: string
  courseId: string
  grade: GradeLevel
  enrolledAt: string
}

export interface AttemptRecord {
  id: string
  studentId: string
  courseId: string
  unitId: string
  lessonId: string
  kind: 'lesson' | 'unit_test'
  attemptNumber: number
  seed: number
  scorePercent: number
  correctCount: number
  totalCount: number
  passed: boolean
  questionFingerprints: string[]
  missedPrincipleIds: string[]
  completedAt: string
}

export interface AppSettings {
  id: 'global'
  appId: 'home-school-lite'
  parentPin: string
  masteryThreshold: number
  retryPenaltyPercent: number
  lessonWeight: number
  unitTestWeight: number
  autoCheckUpdates: boolean
  updateCheckIntervalMin: 0 | 15 | 60
  autoApplyUpdates: boolean
  lastUpdateCheck?: string
}

export interface BackupPayload {
  app: 'home-school-lite'
  schemaVersion: 1
  exportedAt: string
  students: Student[]
  enrollments: Enrollment[]
  attempts: AttemptRecord[]
  settings: AppSettings
}

export interface RemoteVersionInfo {
  appId: string
  version: string
  buildTime: string
  commit: string
}
