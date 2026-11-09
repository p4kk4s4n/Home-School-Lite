import {
  AttemptRecord,
  GradeLevel,
  Lesson,
  Remediation,
  RemediationLink,
  SubjectId,
} from '../types'

/**
 * Computes the remediation tier based on how many failed attempts a student has on a lesson:
 * - Tier 0: Passed or no failed attempts yet
 * - Tier 1: 1 failed attempt -> In-app Simple Steps + Worked Example
 * - Tier 2: 2 failed attempts -> Simplified External Sources (YouTube / Khan / Accessible learning providers, PIN-gated)
 * - Tier 3: 3+ failed attempts -> Parent Alert / 1-on-1 Coaching Flag + Tier 1 & 2 resources
 */
export function getRemediationTier(
  lessonAttempts: AttemptRecord[],
  masteryThreshold: number
): 0 | 1 | 2 | 3 {
  if (!lessonAttempts || lessonAttempts.length === 0) return 0
  const isMastered = lessonAttempts.some(
    (a) => a.passed || a.scorePercent >= masteryThreshold
  )
  if (isMastered) return 0

  const failedCount = lessonAttempts.filter(
    (a) => !a.passed && a.scorePercent < masteryThreshold
  ).length

  if (failedCount <= 0) return 0
  if (failedCount === 1) return 1
  if (failedCount === 2) return 2
  return 3
}

/**
 * Builds secondary learning links (YouTube step-by-step search, Khan Academy search,
 * and subject-specific accessible learning resources) for a lesson.
 * All external search/video remediation links require the Parent Passcode Pop-up (`requiresParentPin: true`).
 */
export function buildRemediationLinks(
  topicTitle: string,
  subject: SubjectId,
  grade: GradeLevel
): RemediationLink[] {
  const cleanTopic = topicTitle
    .replace(/^(Lesson \d+|Segment \d+|Part \d+|Unit \d+ Exam|Review):\s*/i, '')
    .trim()

  const ytQuery = encodeURIComponent(
    `grade ${grade} ${subject} ${cleanTopic} step by step slow for kids`
  )
  const khanQuery = encodeURIComponent(`grade ${grade} ${cleanTopic}`)

  const links: RemediationLink[] = [
    {
      label: `YouTube: "${cleanTopic}" (Slow Step-by-Step Visual Guide)`,
      url: `https://www.youtube.com/results?search_query=${ytQuery}`,
      kind: 'video',
      provider: 'YouTube Guided Search',
      requiresParentPin: true,
    },
    {
      label: `Khan Academy: "${cleanTopic}" Alternate Video & Hints`,
      url: `https://www.khanacademy.org/search?page_search_query=${khanQuery}`,
      kind: 'practice',
      provider: 'Khan Academy',
      requiresParentPin: true,
    },
  ]

  if (subject === 'math') {
    const mathAnticsQuery = encodeURIComponent(`Math Antics ${cleanTopic}`)
    links.push({
      label: `YouTube: Math Antics — ${cleanTopic} (Visual Breakdown)`,
      url: `https://www.youtube.com/results?search_query=${mathAnticsQuery}`,
      kind: 'video',
      provider: 'Math Antics (YouTube)',
      requiresParentPin: true,
    })
  } else if (subject === 'science') {
    const sciQuery = encodeURIComponent(`Crash Course Kids SciShow ${cleanTopic}`)
    links.push({
      label: `YouTube: Visual Science — ${cleanTopic}`,
      url: `https://www.youtube.com/results?search_query=${sciQuery}`,
      kind: 'video',
      provider: 'Visual Science (YouTube)',
      requiresParentPin: true,
    })
  } else if (subject === 'ela') {
    links.push({
      label: 'Reading Rockets: Accessible Reading & Comprehension Strategies',
      url: 'https://www.readingrockets.org/topics/comprehension',
      kind: 'article',
      provider: 'Reading Rockets',
      requiresParentPin: true,
    })
  } else if (subject === 'social') {
    const socQuery = encodeURIComponent(`${cleanTopic} history for kids simple animated`)
    links.push({
      label: `YouTube: Animated History — ${cleanTopic}`,
      url: `https://www.youtube.com/results?search_query=${socQuery}`,
      kind: 'video',
      provider: 'Animated History (YouTube)',
      requiresParentPin: true,
    })
  }

  links.push({
    label: 'Understood.org: Learning Differences & Multisensory Study Tips',
    url: 'https://www.understood.org/',
    kind: 'article',
    provider: 'Understood.org',
    requiresParentPin: true,
  })

  return links
}

/**
 * Guarantees every lesson has a complete Remediation object with bite-sized
 * Simple Steps (<= 12 words each), a Worked Example, and PIN-gated secondary links.
 */
export function getLessonRemediation(
  lesson: Lesson,
  subject: SubjectId,
  grade: GradeLevel
): Remediation {
  const defaultLinks = buildRemediationLinks(
    lesson.partOf || lesson.title,
    subject,
    grade
  )

  if (lesson.remediation) {
    return {
      simpleSteps: lesson.remediation.simpleSteps,
      workedExample: lesson.remediation.workedExample,
      links:
        lesson.remediation.links && lesson.remediation.links.length > 0
          ? lesson.remediation.links.map((l) => ({
              ...l,
              requiresParentPin: l.requiresParentPin ?? true,
            }))
          : defaultLinks,
    }
  }

  const firstPrinciple = lesson.principles[0]
  const simpleSteps: string[] = [
    `Focus on one rule: ${firstPrinciple?.title ?? lesson.title}.`,
    firstPrinciple?.summary ?? 'Read the short concept rule one sentence at a time.',
    'Cross out two choices that do not match the rule.',
    'Check your answer against the key word in the question.',
  ]

  const firstBankItem = firstPrinciple?.bank?.[0]
  const workedExample = firstBankItem
    ? `Example: "${firstBankItem.prompt}" → Answer: ${firstBankItem.answer}. (${firstBankItem.explanation})`
    : `Review the principle summary for "${firstPrinciple?.title ?? lesson.title}" and test one small number at a time.`

  return {
    simpleSteps,
    workedExample,
    links: defaultLinks,
  }
}
