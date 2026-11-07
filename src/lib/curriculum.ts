import { GRADE_4_COURSES } from '../data/grade4Content'
import { GRADE_6_COURSES } from '../data/grade6Content'
import { Course, GradeLevel, Lesson, LessonAssignment, Unit } from '../types'

export function getLessonAssignment(lesson: Lesson): LessonAssignment {
  if (lesson.assignment) {
    return lesson.assignment
  }

  const standardsList = lesson.principles.map((p) => p.standard).join(', ')
  const principleTitles = lesson.principles.map((p) => p.title).join(' & ')

  if (lesson.kind === 'unit_test') {
    return {
      scopeSummary: `Scope: Unit Exam covering ${principleTitles} (${standardsList}). Review the unit video guide and concept summaries below—do NOT complete an entire external unit on Khan Academy before starting this exam.`,
      steps: [
        {
          id: `${lesson.id}-step-review`,
          type: 'reading',
          title: `Review Unit Principles: ${principleTitles}`,
          description: `Read the Core Concept Summary and Principle cards on this page (${standardsList}) to refresh formulas and key terms.`,
          estimatedMinutes: 5,
        },
        {
          id: `${lesson.id}-step-video`,
          type: 'video',
          title: `Optional Refresher: ${lesson.videoTitle}`,
          description: `If any principle feels rusty, watch ONLY the single introductory video or review article for "${principleTitles}" (1 activity, ~5–8 min), then return here for the exam.`,
          estimatedMinutes: 8,
          url: lesson.videoUrl,
        },
      ],
    }
  }

  return {
    scopeSummary: `Lesson Scope (~${lesson.estimatedMinutes} min total): Complete ONLY the 3 focused steps below for "${principleTitles}" (${standardsList}), then return to this tab for your randomized Mastery Check. Do not complete the entire external unit.`,
    steps: [
      {
        id: `${lesson.id}-step-1-video`,
        type: 'video',
        title: `Step 1: Watch 1 Instructional Video — ${lesson.videoTitle}`,
        description: `Open the linked Khan Academy resource and watch the first instructional video (and optional 4-question practice check) matching "${principleTitles}" (${standardsList}). Stop after that single topic and return here.`,
        estimatedMinutes: Math.max(8, Math.round(lesson.estimatedMinutes * 0.45)),
        url: lesson.videoUrl,
      },
      {
        id: `${lesson.id}-step-2-reading`,
        type: 'reading',
        title: `Step 2: Read Core Concept Notes & Worked Formulas`,
        description: `Study the Core Concept Explanation on this page and verify how each rule applies to ${principleTitles}.`,
        estimatedMinutes: Math.max(5, Math.round(lesson.estimatedMinutes * 0.25)),
      },
      {
        id: `${lesson.id}-step-3-principles`,
        type: 'practice',
        title: `Step 3: Review Principle Cards (${standardsList})`,
        description: `Confirm you can explain each Principle Card below in your own words before unlocking the ${lesson.questionCount ?? 5}-question randomized Mastery Check.`,
        estimatedMinutes: Math.max(5, Math.round(lesson.estimatedMinutes * 0.3)),
      },
    ],
  }
}

function enrichCourseAssignments(courses: Course[]): Course[] {
  return courses.map((course) => ({
    ...course,
    units: course.units.map((unit) => ({
      ...unit,
      lessons: unit.lessons.map((lesson) => ({
        ...lesson,
        assignment: getLessonAssignment(lesson),
      })),
    })),
  }))
}

export const ALL_COURSES: Course[] = enrichCourseAssignments([
  ...GRADE_4_COURSES,
  ...GRADE_6_COURSES,
])

/**
 * Returns all 4 subject courses (Math, Science, ELA, Social Studies)
 * for the active student's configured grade level (4 or 6).
 */
export function getCoursesForGrade(grade: GradeLevel): Course[] {
  return ALL_COURSES.filter((c) => c.grade === grade)
}

export function getCourseById(courseId: string): Course | undefined {
  return ALL_COURSES.find((c) => c.id === courseId)
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
