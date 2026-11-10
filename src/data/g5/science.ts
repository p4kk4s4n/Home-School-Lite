import { Course } from '../../types'
import { G5_SCIENCE_UNITS } from './science/units'

export const G5_SCIENCE_COURSE: Course = {
  id: 'g5-science',
  subject: 'science',
  grade: 5,
  title: 'Grade 5 Science',
  subtitle: 'Matter Properties, Photosynthesis, Ecosystems, Earth Systems, and Space Science',
  credits: 1.0,
  color: '#059669',
  icon: '🔬',
  units: G5_SCIENCE_UNITS,
}
