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

export interface QuestionReviewItem {
  fingerprint: string
  principleId: string
  principleTitle: string
  prompt: string
  passage?: string
  studentAnswer: string
  correctAnswer: string
  isCorrect: boolean
  explanation: string
}

export interface AssignmentStep {
  id: string
  type: 'video' | 'reading' | 'practice'
  title: string
  description: string
  estimatedMinutes: number
  url?: string
}

export interface LessonAssignment {
  scopeSummary: string
  steps: AssignmentStep[]
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
  assignment?: LessonAssignment
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
  studentPin: string
  createdAt: string
  updatedAt?: string
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
  reviewItems?: QuestionReviewItem[]
  completedAt: string
}

export type DeviceRole = 'parent' | 'student'

export interface FamilySyncConfig {
  enabled: boolean
  familyCode: string
  syncEndpointUrl: string
  deviceRole: DeviceRole
  boundStudentId?: string
  autoSyncIntervalMin: 0 | 5 | 15
  lastSyncedAt?: string
}

export interface AppSettings {
  id: 'global'
  appId: 'home-school-lite'
  parentPin: string
  masteryThreshold: number
  retryPenaltyPercent: number
  lessonWeight: number
  unitTestWeight: number
  requireAssignmentChecklist: boolean
  autoCheckUpdates: boolean
  updateCheckIntervalMin: 0 | 15 | 60
  autoApplyUpdates: boolean
  lastUpdateCheck?: string
  updatedAt?: string
  deletedStudentIds?: string[]
  familySync?: FamilySyncConfig
}

export interface BackupPayload {
  app: 'home-school-lite'
  schemaVersion: 1
  familyCode?: string
  exportedAt: string
  deletedStudentIds?: string[]
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
