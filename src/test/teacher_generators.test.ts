import { describe, it, expect } from 'vitest'
import { ALL_COURSES, getCourseById } from '../lib/curriculum'
import { generatePrincipleSamples, generateWorksheet } from '../lib/worksheetGenerator'

describe('Teacher Resources Algorithmic Generators & Worksheets', () => {
  it('generates multiple-choice samples for principles with generatorId', () => {
    const g6Math = getCourseById('g6-math')
    expect(g6Math).toBeDefined()

    let testedGenerators = 0
    for (const unit of g6Math!.units) {
      for (const lesson of unit.lessons) {
        for (const principle of lesson.principles) {
          if (principle.generatorId) {
            const samples = generatePrincipleSamples(principle, 42, 3)
            expect(samples.length).toBeGreaterThan(0)
            for (const sample of samples) {
              expect(sample.prompt).toBeTruthy()
              expect(sample.answer).toBeTruthy()
              expect(sample.choices).toBeDefined()
              expect(sample.choices!.length).toBeGreaterThanOrEqual(2)
              expect(sample.choices).toContain(sample.answer)
              expect(sample.explanation).toBeTruthy()
            }
            testedGenerators++
          }
        }
      }
    }

    expect(testedGenerators).toBeGreaterThan(5)
  })

  it('generates full printable worksheets with multiple choice options', () => {
    for (const courseId of ['g4-math', 'g5-math', 'g6-math', 'g7-math', 'g8-math']) {
      const course = getCourseById(courseId)!
      expect(course).toBeDefined()

      const worksheet = generateWorksheet({
        course,
        seed: 12345,
        questionCount: 10,
      })

      expect(worksheet.length).toBe(10)
      for (const q of worksheet) {
        expect(q.prompt).toBeTruthy()
        expect(q.answer).toBeTruthy()
        expect(q.choices).toBeDefined()
        expect(q.choices!.length).toBeGreaterThanOrEqual(2)
        expect(q.choices).toContain(q.answer)
        expect(q.explanation).toBeTruthy()
      }
    }
  })

  it('generates unit-scoped worksheets correctly', () => {
    const g6Math = getCourseById('g6-math')!
    const u1 = g6Math.units[0]

    const worksheet = generateWorksheet({
      course: g6Math,
      unitId: u1.id,
      seed: 999,
      questionCount: 5,
    })

    expect(worksheet.length).toBe(5)
    for (const q of worksheet) {
      expect(q.prompt).toBeTruthy()
      expect(q.choices).toBeDefined()
    }
  })
})
