import { Course } from '../types'
import { G5_MATH_COURSE } from './g5/math'
import { G5_SCIENCE_COURSE } from './g5/science'
import { G5_ELA_COURSE } from './g5/ela'
import { G5_SOCIAL_COURSE } from './g5/social'

export { G5_MATH_COURSE, G5_SCIENCE_COURSE, G5_ELA_COURSE, G5_SOCIAL_COURSE }

export const GRADE_5_COURSES: Course[] = [
  G5_MATH_COURSE,
  G5_SCIENCE_COURSE,
  G5_ELA_COURSE,
  G5_SOCIAL_COURSE,
]
