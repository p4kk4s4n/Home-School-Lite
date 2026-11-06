import { GRADE_4_COURSES } from '../data/grade4Content'
import { GRADE_6_COURSES } from '../data/grade6Content'
import { Course, GradeLevel, Lesson, Unit } from '../types'

export const ALL_COURSES: Course[] = [...GRADE_4_COURSES, ...GRADE_6_COURSES]

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
