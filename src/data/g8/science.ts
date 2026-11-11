import { Course } from '../../types'
import { G8_SCIENCE_UNITS } from './science/units'

export const G8_SCIENCE_COURSE: Course = {
  id: 'g8-science',
  subject: 'science',
  grade: 8,
  title: 'Middle school physics',
  subtitle: 'Core Physics (Units 1–5) • Supplemental Physics Archive & Ohio Heredity',
  credits: 1.0,
  color: '#059669',
  icon: '⚡',
  externalCourseLinks: [
    {
      label: 'Khan: Middle school physics',
      url: 'https://www.khanacademy.org/science/ms-physics',
    },
    {
      label: 'Khan: Physics library (Archive)',
      url: 'https://www.khanacademy.org/science/physics',
    },
  ],
  units: G8_SCIENCE_UNITS,
}
