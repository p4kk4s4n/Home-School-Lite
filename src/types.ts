export const SUPPORTED_GRADES = [4, 5, 6, 7, 8] as const
export type GradeLevel = (typeof SUPPORTED_GRADES)[number]

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

export interface RemediationLink {
  label: string
  url: string
  kind: 'video' | 'article' | 'practice'
  provider: string
  requiresParentPin?: boolean
}

export interface Remediation {
  simpleSteps: string[]
  workedExample?: string
  links: RemediationLink[]
}

export interface Principle {
  id: string
  title: string
  standard: string
  summary: string
  generatorId?: string
  bank?: QuestionBankItem[]
}

export type LessonKind = 'lesson' | 'lesson_review' | 'unit_test'

export type UnitKind = 'core' | 'explore' | 'teacher_resources'

export type ExploreItemType =
  | 'simulation'
  | 'video'
  | 'experiment'
  | 'project'
  | 'reading'
  | 'game'
  | 'virtual_tour'
  | 'hands_on'

export interface ExploreItem {
  id: string
  title: string
  type: ExploreItemType
  description: string
  url?: string
  estimatedMinutes: number
  materials?: string[]
  steps?: string[]
  reflectionPrompt?: string
  requiresParentPin?: boolean
}

export type TeacherResourceKind =
  | 'pacing_guide'
  | 'answer_key'
  | 'standards_map'
  | 'printable'
  | 'discussion_guide'
  | 'assessment_rubric'
  | 'link'

export interface TeacherResource {
  id: string
  title: string
  kind: TeacherResourceKind
  description: string
  url?: string
  body?: string
}

export interface Lesson {
  id: string
  unitId: string
  title: string
  kind?: LessonKind
  partOf?: string
  isOhioExtension?: boolean
  estimatedMinutes: number
  videoUrl: string
  videoTitle: string
  reading: string
  principles: Principle[]
  questionCount?: number
  assignment?: LessonAssignment
  remediation?: Remediation
}

export interface Unit {
  id: string
  title: string
  standards: string[]
  isOhioExtension?: boolean
  kind?: UnitKind
  exploreItems?: ExploreItem[]
  resources?: TeacherResource[]
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
  kind: LessonKind
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

export interface ConnectedParentDevice {
  id: string
  name: string
  linkedAt: string
  lastSeenAt?: string
}

export interface FamilySyncConfig {
  enabled: boolean
  familyCode: string
  syncEndpointUrl: string
  deviceRole: DeviceRole
  boundStudentId?: string
  parentDeviceId?: string
  parentName?: string
  autoSyncIntervalMin: 0 | 5 | 15
  lastSyncedAt?: string
}

export interface AppSettings {
  id: 'global'
  appId: 'home-school-lite'
  parentPin: string
  masteryThreshold: number
  masteryQuestionCount?: number
  retryPenaltyPercent: number
  lessonWeight: number
  unitTestWeight: number
  requireAssignmentChecklist: boolean
  includeOhioAdjustments?: boolean
  autoCheckUpdates: boolean
  updateCheckIntervalMin: 0 | 15 | 60
  autoApplyUpdates: boolean
  lastUpdateCheck?: string
  updatedAt?: string
  deletedStudentIds?: string[]
  deletedAttemptIds?: string[]
  connectedParents?: ConnectedParentDevice[]
  familySync?: FamilySyncConfig
}

export interface BackupPayload {
  app: 'home-school-lite'
  schemaVersion: 1
  familyCode?: string
  exportedAt: string
  deletedStudentIds?: string[]
  deletedAttemptIds?: string[]
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
