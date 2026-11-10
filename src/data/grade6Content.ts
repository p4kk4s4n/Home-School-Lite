import { Course } from '../types'
import { G6_MATH_COURSE } from './g6/math'
import { G6_SCIENCE_COURSE } from './g6/science'
import { G6_ELA_COURSE } from './g6/ela'
import { G6_SOCIAL_COURSE } from './g6/social'

export { G6_MATH_COURSE, G6_SCIENCE_COURSE, G6_ELA_COURSE, G6_SOCIAL_COURSE }

export const GRADE_6_COURSES: Course[] = [
  G6_MATH_COURSE,
  G6_SCIENCE_COURSE,
  G6_ELA_COURSE,
  G6_SOCIAL_COURSE,
]
