import { Course } from '../types'
import { G4_MATH_COURSE } from './g4/math'
import { G4_SCIENCE_COURSE } from './g4/science'
import { G4_ELA_COURSE } from './g4/ela'
import { G4_SOCIAL_COURSE } from './g4/social'

export { G4_MATH_COURSE, G4_SCIENCE_COURSE, G4_ELA_COURSE, G4_SOCIAL_COURSE }

export const GRADE_4_COURSES: Course[] = [
  G4_MATH_COURSE,
  G4_SCIENCE_COURSE,
  G4_ELA_COURSE,
  G4_SOCIAL_COURSE,
]
