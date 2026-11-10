import { Course } from '../../types'
import { G8_SCIENCE_UNITS } from './science/units'

export const G8_SCIENCE_COURSE: Course = {
  id: 'g8-science',
  subject: 'science',
  grade: 8,
  title: 'Grade 8 Integrated Science',
  subtitle: 'Forces, Motion & Fields, Plate Tectonics, Earth’s Interior & Heredity',
  credits: 1.0,
  color: '#059669',
  icon: '⚡',
  units: G8_SCIENCE_UNITS,
}
