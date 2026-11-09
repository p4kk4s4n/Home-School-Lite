import { QuestionBankItem } from '../types'

export interface PlainLanguageIssue {
  questionId: string
  field: 'prompt' | 'choices' | 'explanation' | 'passage'
  message: string
}

const BANNED_PROMPT_PATTERNS = [
  /which of the following/i,
  /and how does it/i,
  /and why does/i,
  /all of the above/i,
  /none of the above/i,
]

export function countWords(text: string): number {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
}

/**
 * Validates that a question item adheres to the Plain-Language Standard:
 * - Short sentence structure (prompt <= 15 words)
 * - Single question per prompt (at most one '?')
 * - No compound/confusing phrasing ("which of the following", "all of the above", etc.)
 * - Short answer choices (<= 10 words each)
 * - Concise, clear explanation (<= 42 words)
 */
export function lintQuestionItem(
  item: QuestionBankItem,
  maxPromptWords = 15,
  maxChoiceWords = 10,
  maxExplanationWords = 42
): PlainLanguageIssue[] {
  const issues: PlainLanguageIssue[] = []
  const promptWords = countWords(item.prompt)

  if (promptWords > maxPromptWords) {
    issues.push({
      questionId: item.id,
      field: 'prompt',
      message: `Prompt has ${promptWords} words (max ${maxPromptWords}): "${item.prompt}"`,
    })
  }

  const questionMarks = (item.prompt.match(/\?/g) || []).length
  if (questionMarks > 1) {
    issues.push({
      questionId: item.id,
      field: 'prompt',
      message: `Prompt contains ${questionMarks} question marks (max 1): "${item.prompt}"`,
    })
  }

  for (const pat of BANNED_PROMPT_PATTERNS) {
    if (pat.test(item.prompt)) {
      issues.push({
        questionId: item.id,
        field: 'prompt',
        message: `Prompt uses discouraged phrase (${pat}): "${item.prompt}"`,
      })
    }
  }

  for (const choice of item.choices ?? []) {
    const cw = countWords(choice)
    if (cw > maxChoiceWords) {
      issues.push({
        questionId: item.id,
        field: 'choices',
        message: `Choice has ${cw} words (max ${maxChoiceWords}): "${choice}"`,
      })
    }
    if (/all of the above|none of the above/i.test(choice)) {
      issues.push({
        questionId: item.id,
        field: 'choices',
        message: `Choice uses banned phrase: "${choice}"`,
      })
    }
  }

  const expWords = countWords(item.explanation || '')
  if (expWords === 0 || expWords > maxExplanationWords) {
    issues.push({
      questionId: item.id,
      field: 'explanation',
      message: `Explanation has ${expWords} words (max ${maxExplanationWords}): "${item.explanation}"`,
    })
  }

  if (item.passage && countWords(item.passage) > 90) {
    issues.push({
      questionId: item.id,
      field: 'passage',
      message: `Passage has ${countWords(item.passage)} words (max 90).`,
    })
  }

  return issues
}
