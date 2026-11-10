import { GRADE_4_COURSES } from '../data/grade4Content'
import { GRADE_5_COURSES } from '../data/grade5Content'
import { GRADE_6_COURSES } from '../data/grade6Content'
import { GRADE_7_COURSES } from '../data/grade7Content'
import { GRADE_8_COURSES } from '../data/grade8Content'
import { Course, GradeLevel, Lesson, LessonAssignment, Unit } from '../types'
import { getLessonRemediation } from './remediation'

export function getLessonAssignment(lesson: Lesson): LessonAssignment {
  if (lesson.assignment) {
    return lesson.assignment
  }

  const standardsList = lesson.principles.map((p) => p.standard).join(', ')
  const principleTitles = lesson.principles.map((p) => p.title).join(' & ')

  if (lesson.kind === 'unit_test' || lesson.kind === 'lesson_review') {
    const label = lesson.kind === 'unit_test' ? 'Unit Exam' : 'Topic Review'
    return {
      scopeSummary: `Scope: ${label} covering ${principleTitles} (${standardsList}). Review the concept summaries below—do NOT complete an entire external unit on Khan Academy before starting this check.`,
      steps: [
        {
          id: `${lesson.id}-step-review`,
          type: 'reading',
          title: `Review Principles: ${principleTitles}`,
          description: `Read the Core Concept Summary and Principle cards on this page (${standardsList}) to refresh rules and key terms.`,
          estimatedMinutes: 4,
        },
        {
          id: `${lesson.id}-step-video`,
          type: 'video',
          title: `Optional Refresher: ${lesson.videoTitle}`,
          description: `If any rule feels rusty, watch ONLY the single introductory video for "${principleTitles}" (1 activity, ~5 min), then return here for your ${label}.`,
          estimatedMinutes: 6,
          url: lesson.videoUrl,
        },
      ],
    }
  }

  const partPrefix = lesson.partOf ? `[${lesson.partOf}] ` : ''

  return {
    scopeSummary: `${partPrefix}Micro-Lesson Scope (~${lesson.estimatedMinutes} min total): Complete ONLY the 3 bite-sized steps below for "${principleTitles}" (${standardsList}), then return to this tab for your randomized Mastery Check.`,
    steps: [
      {
        id: `${lesson.id}-step-1-video`,
        type: 'video',
        title: `Step 1: Watch 1 Short Video — ${lesson.videoTitle}`,
        description: `Open the linked Khan Academy resource and watch the single video matching "${principleTitles}" (${standardsList}). Stop after that 1 video and return here.`,
        estimatedMinutes: Math.max(4, Math.round(lesson.estimatedMinutes * 0.45)),
        url: lesson.videoUrl,
      },
      {
        id: `${lesson.id}-step-2-reading`,
        type: 'reading',
        title: `Step 2: Read Core Concept Notes`,
        description: `Read the Core Concept Explanation on this page and check how each rule applies to ${principleTitles}.`,
        estimatedMinutes: Math.max(3, Math.round(lesson.estimatedMinutes * 0.25)),
      },
      {
        id: `${lesson.id}-step-3-principles`,
        type: 'practice',
        title: `Step 3: Review Principle Cards (${standardsList})`,
        description: `Check each Principle Card below before unlocking the ${lesson.questionCount ?? 5}-question randomized Mastery Check.`,
        estimatedMinutes: Math.max(3, Math.round(lesson.estimatedMinutes * 0.3)),
      },
    ],
  }
}

function enrichCourseAssignments(courses: Course[]): Course[] {
  return courses.map((course) => ({
    ...course,
    units: course.units.map((unit) => ({
      ...unit,
      lessons: (unit.lessons || []).map((lesson) => ({
        ...lesson,
        assignment: getLessonAssignment(lesson),
        remediation: getLessonRemediation(lesson, course.subject, course.grade),
      })),
    })),
  }))
}

export function filterCourseForOhio(course: Course, includeOhio: boolean): Course {
  if (includeOhio) {
    return course
  }
  const filteredUnits: Unit[] = []
  for (const unit of course.units) {
    if (unit.kind === 'explore' || unit.kind === 'teacher_resources') {
      if (!unit.isOhioExtension) {
        filteredUnits.push(unit)
      }
      continue
    }
    const regularLessons = unit.lessons.filter(
      (l) => l.kind === 'lesson' && !l.isOhioExtension
    )
    if (regularLessons.length === 0) {
      continue
    }
    const allowedPrincipleIds = new Set(
      regularLessons.flatMap((l) => l.principles.map((p) => p.id))
    )
    const filteredLessons: Lesson[] = unit.lessons
      .filter((l) => {
        if (l.kind === 'lesson') {
          return !l.isOhioExtension
        }
        return true
      })
      .map((l) => {
        const keptPrinciples = l.principles.filter((p) =>
          allowedPrincipleIds.has(p.id)
        )
        return {
          ...l,
          isOhioExtension: false,
          principles: keptPrinciples.length > 0 ? keptPrinciples : l.principles,
        }
      })
    if (filteredLessons.length > 0) {
      filteredUnits.push({
        ...unit,
        isOhioExtension: false,
        lessons: filteredLessons,
      })
    }
  }
  return {
    ...course,
    units: filteredUnits,
  }
}

export const ALL_COURSES: Course[] = enrichCourseAssignments([
  ...GRADE_4_COURSES,
  ...GRADE_5_COURSES,
  ...GRADE_6_COURSES,
  ...GRADE_7_COURSES,
  ...GRADE_8_COURSES,
])

/**
 * Returns all 4 subject courses (Math, Science, ELA, Social Studies)
 * for the active student's configured grade level.
 */
export function getCoursesForGrade(
  grade: GradeLevel,
  includeOhioAdjustments = true
): Course[] {
  return ALL_COURSES.filter((c) => c.grade === grade).map((c) =>
    filterCourseForOhio(c, includeOhioAdjustments)
  )
}

export function getCourseById(
  courseId: string,
  includeOhioAdjustments = true
): Course | undefined {
  const course = ALL_COURSES.find((c) => c.id === courseId)
  return course ? filterCourseForOhio(course, includeOhioAdjustments) : undefined
}

export function findLessonInCourse(
  course: Course,
  lessonId: string
): { unit: Unit; lesson: Lesson } | null {
  for (const unit of course.units) {
    for (const lesson of unit.lessons) {
      if (lesson.id === lessonId) {
        return { unit, lesson }
      }
    }
  }
  return null
}
