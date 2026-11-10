import { Course } from '../../types'
import { G6_SCIENCE_UNITS } from './science/units'

export const G6_SCIENCE_COURSE: Course = {
  id: 'g6-science',
  subject: 'science',
  grade: 6,
  title: 'Middle School Biology',
  subtitle: 'Cellular Biology, Organism Growth, Ecology, Genetics, and Natural Selection',
  credits: 1.0,
  color: '#10b981',
  icon: '🧬',
  units: G6_SCIENCE_UNITS,
}
