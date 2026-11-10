import { Course, GeneratedQuestion, Principle, Unit } from '../types'
import { MATH_GENERATORS } from './mathGenerators'
import { createRng, shuffle } from './random'

/**
 * Generates sample live questions for a specific principle using its procedural
 * generator or fallback bank.
 */
export function generatePrincipleSamples(
  principle: Principle,
  seed = 42,
  count = 3
): GeneratedQuestion[] {
  const rng = createRng(seed)
  const results: GeneratedQuestion[] = []
  const seenFingerprints = new Set<string>()

  // 1. Procedural math generator
  if (principle.generatorId && MATH_GENERATORS[principle.generatorId]) {
    const genFn = MATH_GENERATORS[principle.generatorId]
    let safety = 0
    while (results.length < count && safety < count * 25) {
      safety++
      const q = genFn(rng, principle.id, principle.title)
      if (!seenFingerprints.has(q.fingerprint)) {
        seenFingerprints.add(q.fingerprint)
        results.push(ensureMultipleChoiceChoices(q, rng))
      }
    }
  }

  // 2. Fallback or supplementary bank items
  if (results.length < count && principle.bank && principle.bank.length > 0) {
    const shuffledBank = shuffle([...principle.bank], rng)
    for (const item of shuffledBank) {
      if (results.length >= count) break
      const fp = `${principle.id}:${item.id}`
      if (!seenFingerprints.has(fp)) {
        seenFingerprints.add(fp)
        results.push(
          ensureMultipleChoiceChoices(
            {
              ...item,
              fingerprint: fp,
              principleId: principle.id,
              principleTitle: principle.title,
            },
            rng
          )
        )
      }
    }
  }

  return results
}

/**
 * Ensures a generated question has standard 4-option multiple-choice formatting.
 */
function ensureMultipleChoiceChoices(
  q: GeneratedQuestion,
  rng: () => number
): GeneratedQuestion {
  if (q.choices && q.choices.length >= 2) {
    return q
  }

  // If question doesn't have choices, create sensible numerical or boolean choices
  const ans = q.answer.trim()
  const numAns = Number(ans)
  if (!Number.isNaN(numAns)) {
    const distractors = [numAns - 2, numAns - 1, numAns + 1, numAns + 2]
    const choices = shuffle([ans, ...distractors.slice(0, 3).map(String)], rng)
    return {
      ...q,
      choices,
      type: 'mc',
    }
  }

  return {
    ...q,
    choices: [ans, 'None of the above'],
    type: 'mc',
  }
}

export interface GenerateWorksheetParams {
  course: Course
  unitId?: string
  principleId?: string
  seed: number
  questionCount: number
}

/**
 * Generates a full multiple-choice worksheet from a course, unit, or single principle.
 */
export function generateWorksheet(params: GenerateWorksheetParams): GeneratedQuestion[] {
  const { course, unitId, principleId, seed, questionCount } = params
  const rng = createRng(seed)

  // 1. Gather candidate principles
  let candidatePrinciples: Principle[] = []
  const coreUnits: Unit[] = course.units.filter(
    (u) => u.kind !== 'explore' && u.kind !== 'teacher_resources'
  )

  if (principleId) {
    for (const u of coreUnits) {
      for (const l of u.lessons) {
        for (const p of l.principles) {
          if (p.id === principleId) {
            candidatePrinciples.push(p)
          }
        }
      }
    }
  } else if (unitId && unitId !== 'all') {
    const targetUnit = coreUnits.find((u) => u.id === unitId)
    if (targetUnit) {
      for (const l of targetUnit.lessons) {
        candidatePrinciples.push(...l.principles)
      }
    }
  } else {
    for (const u of coreUnits) {
      for (const l of u.lessons) {
        candidatePrinciples.push(...l.principles)
      }
    }
  }

  if (candidatePrinciples.length === 0) {
    return []
  }

  // Remove duplicates by principle id
  const uniqueMap = new Map<string, Principle>()
  for (const p of candidatePrinciples) {
    if (!uniqueMap.has(p.id)) {
      uniqueMap.set(p.id, p)
    }
  }
  const pool = Array.from(uniqueMap.values())
  const shuffledPool = shuffle(pool, rng)

  const results: GeneratedQuestion[] = []
  const seenFingerprints = new Set<string>()

  let poolIdx = 0
  let safety = 0
  const maxSafety = questionCount * 40

  while (results.length < questionCount && safety < maxSafety) {
    safety++
    const p = shuffledPool[poolIdx % shuffledPool.length]
    poolIdx++

    const samples = generatePrincipleSamples(p, Math.floor(rng() * 1000000), 1)
    if (samples.length > 0) {
      const q = samples[0]
      if (!seenFingerprints.has(q.fingerprint)) {
        seenFingerprints.add(q.fingerprint)
        results.push(q)
      }
    }
  }

  return results
}
