import { Course } from '../../types'
import { G7_SCIENCE_UNITS } from './science/units'

export const G7_SCIENCE_COURSE: Course = {
  id: 'g7-science',
  subject: 'science',
  grade: 7,
  title: 'Grade 7 Science',
  subtitle: 'Middle School Earth and Space Science & Middle School Chemistry',
  credits: 1.0,
  color: '#059669',
  icon: '🧪',
  units: G7_SCIENCE_UNITS,
}
