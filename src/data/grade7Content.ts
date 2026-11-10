import { Course } from '../types'
import { G7_MATH_COURSE } from './g7/math'
import { G7_SCIENCE_COURSE } from './g7/science'
import { G7_ELA_COURSE } from './g7/ela'
import { G7_SOCIAL_COURSE } from './g7/social'

export { G7_MATH_COURSE, G7_SCIENCE_COURSE, G7_ELA_COURSE, G7_SOCIAL_COURSE }

export const GRADE_7_COURSES: Course[] = [
  G7_MATH_COURSE,
  G7_SCIENCE_COURSE,
  G7_ELA_COURSE,
  G7_SOCIAL_COURSE,
]
