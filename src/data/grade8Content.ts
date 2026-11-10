import { Course } from '../types'
import { G8_MATH_COURSE } from './g8/math'
import { G8_SCIENCE_COURSE } from './g8/science'
import { G8_ELA_COURSE } from './g8/ela'
import { G8_SOCIAL_COURSE } from './g8/social'

export { G8_MATH_COURSE, G8_SCIENCE_COURSE, G8_ELA_COURSE, G8_SOCIAL_COURSE }

export const GRADE_8_COURSES: Course[] = [
  G8_MATH_COURSE,
  G8_SCIENCE_COURSE,
  G8_ELA_COURSE,
  G8_SOCIAL_COURSE,
]
