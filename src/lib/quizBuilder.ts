import { AttemptRecord, GeneratedQuestion, Lesson, Principle } from '../types'
import { MATH_GENERATORS } from './mathGenerators'
import { createRng, shuffle } from './random'

export interface BuildQuizOptions {
  lesson: Lesson
  seed: number
  priorAttempts?: AttemptRecord[]
  questionCount?: number
  focusPrincipleIds?: string[]
}

/**
 * Builds a randomized quiz for a lesson or unit test.
 * Guarantees that retries draw fresh question fingerprints for the same taught principles
 * before falling back to least-recently-seen items if a static bank is exhausted.
 */
export function buildQuizAttempt(options: BuildQuizOptions): GeneratedQuestion[] {
  const {
    lesson,
    seed,
    priorAttempts = [],
    questionCount = lesson.questionCount ?? (lesson.kind === 'unit_test' ? 8 : 5),
    focusPrincipleIds = [],
  } = options

  const rng = createRng(seed)

  // Track how recently each fingerprint was seen (higher index = more recent)
  const seenOrder = new Map<string, number>()
  let tick = 0
  const sortedAttempts = [...priorAttempts].sort((a, b) => a.attemptNumber - b.attemptNumber)
  for (const att of sortedAttempts) {
    for (const fp of att.questionFingerprints) {
      tick++
      seenOrder.set(fp, tick)
    }
  }

  const chosenFingerprints = new Set<string>()
  const result: GeneratedQuestion[] = []

  const principles = lesson.principles
  if (!principles || principles.length === 0) {
    return []
  }

  // Order principles so missed/focus principles are sampled first, then round-robin across all
  const focusSet = new Set(focusPrincipleIds)
  const prioritizedPrinciples: Principle[] = [
    ...shuffle(
      principles.filter((p) => focusSet.has(p.id)),
      rng
    ),
    ...shuffle(
      principles.filter((p) => !focusSet.has(p.id)),
      rng
    ),
  ]

  let pIndex = 0
  let safetyCounter = 0

  while (result.length < questionCount && safetyCounter < questionCount * 20) {
    safetyCounter++
    const principle = prioritizedPrinciples[pIndex % prioritizedPrinciples.length]
    pIndex++

    const question = sampleFromPrinciple(principle, rng, seenOrder, chosenFingerprints)
    if (question) {
      chosenFingerprints.add(question.fingerprint)
      result.push(question)
    }
  }

  return result
}

function sampleFromPrinciple(
  principle: Principle,
  rng: () => number,
  seenOrder: Map<string, number>,
  chosenInCurrentQuiz: Set<string>
): GeneratedQuestion | null {
  const genFn = principle.generatorId ? MATH_GENERATORS[principle.generatorId] : undefined

  // Case 1: Procedural generator (also may have supplementary bank)
  if (genFn) {
    let fallbackCandidate: GeneratedQuestion | null = null
    let fallbackRecency = Number.POSITIVE_INFINITY

    for (let attempt = 0; attempt < 50; attempt++) {
      const q = genFn(rng, principle.id, principle.title)
      if (chosenInCurrentQuiz.has(q.fingerprint)) continue

      if (!seenOrder.has(q.fingerprint)) {
        return q
      }

      const recency = seenOrder.get(q.fingerprint) ?? 0
      if (recency < fallbackRecency) {
        fallbackRecency = recency
        fallbackCandidate = q
      }
    }
    if (fallbackCandidate) return fallbackCandidate
  }

  // Case 2: Question bank
  if (principle.bank && principle.bank.length > 0) {
    const shuffledBank = shuffle(principle.bank, rng)

    // First pass: completely unseen items not already in current quiz
    for (const item of shuffledBank) {
      const fp = `${principle.id}:${item.id}`
      if (!chosenInCurrentQuiz.has(fp) && !seenOrder.has(fp)) {
        return {
          ...item,
          choices: item.choices ? shuffle(item.choices, rng) : undefined,
          fingerprint: fp,
          principleId: principle.id,
          principleTitle: principle.title,
        }
      }
    }

    // Second pass (fallback when bank exhausted): pick least-recently-seen item not in current quiz
    const available = shuffledBank.filter(
      (item) => !chosenInCurrentQuiz.has(`${principle.id}:${item.id}`)
    )
    if (available.length > 0) {
      available.sort((a, b) => {
        const ra = seenOrder.get(`${principle.id}:${a.id}`) ?? 0
        const rb = seenOrder.get(`${principle.id}:${b.id}`) ?? 0
        return ra - rb
      })
      const chosen = available[0]
      return {
        ...chosen,
        choices: chosen.choices ? shuffle(chosen.choices, rng) : undefined,
        fingerprint: `${principle.id}:${chosen.id}`,
        principleId: principle.id,
        principleTitle: principle.title,
      }
    }
  }

  return null
}
