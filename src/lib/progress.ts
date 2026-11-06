import { AttemptRecord, Course, Lesson, Unit } from '../types'

export type LessonStatus = 'locked' | 'available' | 'in_progress' | 'mastered'

export interface LessonProgressItem {
  courseId: string
  unit: Unit
  lesson: Lesson
  status: LessonStatus
  attempts: AttemptRecord[]
  bestScore: number | null
  lastScore: number | null
  masteredAt?: string
}

export interface CourseProgressSummary {
  course: Course
  items: LessonProgressItem[]
  masteredCount: number
  totalCount: number
  percentComplete: number
  nextLesson: LessonProgressItem | null
}

export interface PacingStatus {
  totalLessons: number
  masteredLessons: number
  remainingLessons: number
  daysRemaining: number
  recommendedPerWeek: number
  statusLabel: 'On Track' | 'Ahead of Pace' | 'Needs Focus'
}

export interface StandardMasteryItem {
  standard: string
  subject: Course['subject']
  courseTitle: string
  unitTitle: string
  lessonTitle: string
  principleTitle: string
  mastered: boolean
}

/**
 * Computes sequential Acellus-style lesson unlock statuses for a course.
 * Lesson 1 is immediately available; each subsequent lesson unlocks once the previous lesson is mastered.
 */
export function computeCourseProgress(
  course: Course,
  studentAttempts: AttemptRecord[],
  masteryThreshold: number
): CourseProgressSummary {
  const courseAttempts = studentAttempts.filter((a) => a.courseId === course.id)
  const items: LessonProgressItem[] = []
  let previousMastered = true
  let masteredCount = 0

  for (const unit of course.units) {
    for (const lesson of unit.lessons) {
      const attempts = courseAttempts
        .filter((a) => a.lessonId === lesson.id)
        .sort((a, b) => a.attemptNumber - b.attemptNumber)

      const masteryAttempt = attempts.find(
        (a) => a.passed || a.scorePercent >= masteryThreshold
      )
      const isMastered = Boolean(masteryAttempt)
      const bestScore =
        attempts.length > 0 ? Math.max(...attempts.map((a) => a.scorePercent)) : null
      const lastScore =
        attempts.length > 0 ? attempts[attempts.length - 1].scorePercent : null

      let status: LessonStatus
      if (isMastered) {
        status = 'mastered'
        masteredCount++
      } else if (previousMastered) {
        status = attempts.length > 0 ? 'in_progress' : 'available'
      } else {
        status = 'locked'
      }

      items.push({
        courseId: course.id,
        unit,
        lesson,
        status,
        attempts,
        bestScore,
        lastScore,
        masteredAt: masteryAttempt?.completedAt,
      })

      previousMastered = isMastered
    }
  }

  const totalCount = items.length
  const percentComplete =
    totalCount > 0 ? Math.round((masteredCount / totalCount) * 100) : 0
  const nextLesson =
    items.find((i) => i.status === 'in_progress' || i.status === 'available') ?? null

  return {
    course,
    items,
    masteredCount,
    totalCount,
    percentComplete,
    nextLesson,
  }
}

export function computePacing(
  summaries: CourseProgressSummary[],
  createdAtIso: string,
  targetEndDateIso: string,
  now: Date = new Date()
): PacingStatus {
  const totalLessons = summaries.reduce((acc, s) => acc + s.totalCount, 0)
  const masteredLessons = summaries.reduce((acc, s) => acc + s.masteredCount, 0)
  const remainingLessons = Math.max(0, totalLessons - masteredLessons)

  const targetDate = new Date(targetEndDateIso)
  const startDate = new Date(createdAtIso)
  const msPerDay = 86400000
  const daysRemaining = Math.max(
    1,
    Math.ceil((targetDate.getTime() - now.getTime()) / msPerDay)
  )
  const weeksRemaining = Math.max(1 / 7, daysRemaining / 7)
  const recommendedPerWeek = Number((remainingLessons / weeksRemaining).toFixed(1))

  const totalSpanMs = Math.max(msPerDay, targetDate.getTime() - startDate.getTime())
  const elapsedMs = Math.max(0, now.getTime() - startDate.getTime())
  const expectedFraction = Math.min(1, elapsedMs / totalSpanMs)
  const actualFraction = totalLessons > 0 ? masteredLessons / totalLessons : 0

  let statusLabel: PacingStatus['statusLabel'] = 'On Track'
  if (actualFraction >= expectedFraction + 0.08) {
    statusLabel = 'Ahead of Pace'
  } else if (actualFraction + 0.1 < expectedFraction) {
    statusLabel = 'Needs Focus'
  }

  return {
    totalLessons,
    masteredLessons,
    remainingLessons,
    daysRemaining,
    recommendedPerWeek,
    statusLabel,
  }
}

export function computeStandardsChecklist(
  summaries: CourseProgressSummary[]
): StandardMasteryItem[] {
  const list: StandardMasteryItem[] = []
  for (const summary of summaries) {
    for (const item of summary.items) {
      for (const principle of item.lesson.principles) {
        list.push({
          standard: principle.standard,
          subject: summary.course.subject,
          courseTitle: summary.course.title,
          unitTitle: item.unit.title,
          lessonTitle: item.lesson.title,
          principleTitle: principle.title,
          mastered: item.status === 'mastered',
        })
      }
    }
  }
  return list
}
