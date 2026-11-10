import { Course } from '../../types'
import { G4_SCIENCE_UNITS } from './science/units'

export const G4_SCIENCE_COURSE: Course = {
  id: 'g4-science',
  subject: 'science',
  grade: 4,
  title: 'Grade 4 Science',
  subtitle: 'Energy, Waves, Earth History, Plant & Animal Structures & Ohio Geology',
  credits: 1.0,
  color: '#059669',
  icon: '⚡',
  units: G4_SCIENCE_UNITS,
}
