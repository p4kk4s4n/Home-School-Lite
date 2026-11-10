import { AppSettings, AttemptRecord, Course } from '../types'

export interface LetterGradeInfo {
  letter: string
  gpaPoints: number
}

export interface CourseGradeSummary {
  courseId: string
  courseTitle: string
  subject: Course['subject']
  gradeLevel: Course['grade']
  credits: number
  hasGrades: boolean
  lessonAverage: number | null
  unitTestAverage: number | null
  overallPercent: number | null
  letter: string
  gpaPoints: number
  completedLessons: number
  totalLessons: number
}

export interface GpaReport {
  courses: CourseGradeSummary[]
  weightedGpa: number | null
  averagePercent: number | null
  letter: string
  totalCreditsAttempted: number
  totalCreditsCompleted: number
}

export const GRADE_SCALE: { min: number; letter: string; gpaPoints: number }[] = [
  { min: 93, letter: 'A', gpaPoints: 4.0 },
  { min: 90, letter: 'A-', gpaPoints: 3.7 },
  { min: 87, letter: 'B+', gpaPoints: 3.3 },
  { min: 83, letter: 'B', gpaPoints: 3.0 },
  { min: 80, letter: 'B-', gpaPoints: 2.7 },
  { min: 77, letter: 'C+', gpaPoints: 2.3 },
  { min: 73, letter: 'C', gpaPoints: 2.0 },
  { min: 70, letter: 'C-', gpaPoints: 1.7 },
  { min: 67, letter: 'D+', gpaPoints: 1.3 },
  { min: 63, letter: 'D', gpaPoints: 1.0 },
  { min: 60, letter: 'D-', gpaPoints: 0.7 },
  { min: 0, letter: 'F', gpaPoints: 0.0 },
]

export function percentToLetterAndGpa(percent: number): LetterGradeInfo {
  const clamped = Math.max(0, Math.min(100, percent))
  for (const row of GRADE_SCALE) {
    if (clamped >= row.min) {
      return { letter: row.letter, gpaPoints: row.gpaPoints }
    }
  }
  return { letter: 'F', gpaPoints: 0.0 }
}

/**
 * Computes the effective score for a single lesson/unit_test across its attempts.
 * By default, the mastery attempt's score counts (with an optional penalty per retry).
 * If not yet mastered, uses the highest attempt score so far.
 */
export function computeLessonEffectiveScore(
  lessonAttempts: AttemptRecord[],
  settings: Pick<AppSettings, 'masteryThreshold' | 'retryPenaltyPercent'>
): number | null {
  if (!lessonAttempts || lessonAttempts.length === 0) return null

  const validAttempts = lessonAttempts.filter(
    (a) => typeof a.scorePercent === 'number' && !Number.isNaN(a.scorePercent)
  )
  if (validAttempts.length === 0) return null

  const sorted = [...validAttempts].sort((a, b) => a.attemptNumber - b.attemptNumber)
  const masteryAttempt = sorted.find(
    (a) => a.passed || a.scorePercent >= settings.masteryThreshold
  )

  if (masteryAttempt) {
    const extraRetries = Math.max(0, masteryAttempt.attemptNumber - 1)
    const penalty = extraRetries * (settings.retryPenaltyPercent || 0)
    const penalized = masteryAttempt.scorePercent - penalty
    const finalScore = Math.max(settings.masteryThreshold, Math.min(100, Number(penalized.toFixed(2))))
    return Number.isNaN(finalScore) ? null : finalScore
  }

  const scores = sorted.map((a) => a.scorePercent)
  const best = Math.max(...scores)
  return Number.isNaN(best) ? null : Number(best.toFixed(2))
}

export function computeCourseGrade(
  course: Course,
  studentAttempts: AttemptRecord[],
  settings: Pick<AppSettings, 'masteryThreshold' | 'retryPenaltyPercent' | 'lessonWeight' | 'unitTestWeight'>
): CourseGradeSummary {
  const courseAttempts = studentAttempts.filter((a) => a.courseId === course.id)
  const lessonScores: number[] = []
  const unitTestScores: number[] = []

  let totalLessons = 0
  let completedLessons = 0

  for (const unit of course.units) {
    if (unit.kind === 'explore' || unit.kind === 'teacher_resources') {
      continue
    }
    for (const lesson of unit.lessons) {
      totalLessons++
      const attempts = courseAttempts.filter((a) => a.lessonId === lesson.id)
      const isMastered = attempts.some(
        (a) => a.passed || a.scorePercent >= settings.masteryThreshold
      )
      if (isMastered) {
        completedLessons++
      }
      const score = computeLessonEffectiveScore(attempts, settings)
      if (score !== null) {
        if (lesson.kind === 'unit_test') {
          unitTestScores.push(score)
        } else {
          lessonScores.push(score)
        }
      }
    }
  }

  const lessonAverage =
    lessonScores.length > 0
      ? Number((lessonScores.reduce((a, b) => a + b, 0) / lessonScores.length).toFixed(2))
      : null

  const unitTestAverage =
    unitTestScores.length > 0
      ? Number((unitTestScores.reduce((a, b) => a + b, 0) / unitTestScores.length).toFixed(2))
      : null

  let overallPercent: number | null = null
  const lw = settings.lessonWeight ?? 60
  const uw = settings.unitTestWeight ?? 40

  if (lessonAverage !== null && unitTestAverage !== null) {
    const totalWeight = lw + uw || 100
    overallPercent = Number(
      ((lessonAverage * lw + unitTestAverage * uw) / totalWeight).toFixed(2)
    )
  } else if (lessonAverage !== null) {
    overallPercent = lessonAverage
  } else if (unitTestAverage !== null) {
    overallPercent = unitTestAverage
  }

  if (overallPercent === null) {
    return {
      courseId: course.id,
      courseTitle: course.title,
      subject: course.subject,
      gradeLevel: course.grade,
      credits: course.credits,
      hasGrades: false,
      lessonAverage: null,
      unitTestAverage: null,
      overallPercent: null,
      letter: '—',
      gpaPoints: 0,
      completedLessons,
      totalLessons,
    }
  }

  const { letter, gpaPoints } = percentToLetterAndGpa(overallPercent)
  return {
    courseId: course.id,
    courseTitle: course.title,
    subject: course.subject,
    gradeLevel: course.grade,
    credits: course.credits,
    hasGrades: true,
    lessonAverage,
    unitTestAverage,
    overallPercent,
    letter,
    gpaPoints,
    completedLessons,
    totalLessons,
  }
}

export function computeGpaReport(
  courses: Course[],
  studentAttempts: AttemptRecord[],
  settings: Pick<AppSettings, 'masteryThreshold' | 'retryPenaltyPercent' | 'lessonWeight' | 'unitTestWeight'>
): GpaReport {
  const summaries = courses.map((c) => computeCourseGrade(c, studentAttempts, settings))
  const graded = summaries.filter((s) => s.hasGrades && s.overallPercent !== null)

  let totalCreditsAttempted = 0
  let totalCreditsCompleted = 0
  let weightedPointsSum = 0
  let weightedPercentSum = 0

  for (const s of summaries) {
    if (s.totalLessons > 0 && s.completedLessons === s.totalLessons) {
      totalCreditsCompleted += s.credits
    }
  }

  for (const g of graded) {
    totalCreditsAttempted += g.credits
    weightedPointsSum += g.gpaPoints * g.credits
    weightedPercentSum += (g.overallPercent ?? 0) * g.credits
  }

  if (graded.length === 0 || totalCreditsAttempted === 0) {
    return {
      courses: summaries,
      weightedGpa: null,
      averagePercent: null,
      letter: '—',
      totalCreditsAttempted: 0,
      totalCreditsCompleted,
    }
  }

  const weightedGpa = Number((weightedPointsSum / totalCreditsAttempted).toFixed(2))
  const averagePercent = Number((weightedPercentSum / totalCreditsAttempted).toFixed(2))
  const { letter } = percentToLetterAndGpa(averagePercent)

  return {
    courses: summaries,
    weightedGpa,
    averagePercent,
    letter,
    totalCreditsAttempted,
    totalCreditsCompleted,
  }
}
