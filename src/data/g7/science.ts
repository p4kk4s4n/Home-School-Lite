import { Course } from '../../types'
import { G7_SCIENCE_UNITS } from './science/units'

export const G7_SCIENCE_COURSE: Course = {
  id: 'g7-science',
  subject: 'science',
  grade: 7,
  title: 'Middle school Earth and space science || Middle school chemistry',
  subtitle: 'Semester 1: Earth & Space Science (Units 1–5) • Semester 2: Chemistry (Units 6–9)',
  credits: 1.0,
  color: '#059669',
  icon: '🧪',
  externalCourseLinks: [
    {
      label: 'Khan: Middle school Earth & space science',
      url: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science',
    },
    {
      label: 'Khan: Middle school chemistry',
      url: 'https://www.khanacademy.org/science/ms-chemistry',
    },
  ],
  units: G7_SCIENCE_UNITS,
}
