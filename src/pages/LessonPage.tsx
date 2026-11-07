import React, { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import {
  findLessonInCourse,
  getCourseById,
  getLessonAssignment,
} from '../lib/curriculum'
import { computeCourseProgress } from '../lib/progress'
import { buildQuizAttempt } from '../lib/quizBuilder'
import { hashString } from '../lib/random'
import {
  getLessonChecklistProgress,
  saveLessonChecklistProgress,
} from '../lib/storage'
import {
  AttemptRecord,
  GeneratedQuestion,
  QuestionReviewItem,
} from '../types'

type PlayerMode = 'study' | 'quiz' | 'results'

export const LessonPage: React.FC = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>()
  const navigate = useNavigate()
  const {
    activeStudent,
    attempts,
    settings,
    submitAttempt,
    setIsQuizInProgress,
  } = useApp()

  const course = useMemo(
    () => (courseId ? getCourseById(courseId) : undefined),
    [courseId]
  )
  const found = useMemo(
    () => (course && lessonId ? findLessonInCourse(course, lessonId) : null),
    [course, lessonId]
  )

  const priorAttempts = useMemo(() => {
    if (!course || !lessonId) return []
    return attempts
      .filter((a) => a.courseId === course.id && a.lessonId === lessonId)
      .sort((a, b) => a.attemptNumber - b.attemptNumber)
  }, [attempts, course, lessonId])

  const lastAttempt =
    priorAttempts.length > 0 ? priorAttempts[priorAttempts.length - 1] : null

  const assignment = useMemo(
    () => (found ? getLessonAssignment(found.lesson) : null),
    [found]
  )

  const [mode, setMode] = useState<PlayerMode>('study')
  const [seed, setSeed] = useState<number>(
    () => Date.now() ^ hashString(lessonId || 'l')
  )
  const [focusPrincipleIds, setFocusPrincipleIds] = useState<string[]>([])
  // Frozen snapshot of the active quiz questions so saving an attempt never mutates the quiz mid-review
  const [quizQuestions, setQuizQuestions] = useState<GeneratedQuestion[]>([])
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [latestResult, setLatestResult] = useState<AttemptRecord | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [completedStepIds, setCompletedStepIds] = useState<string[]>([])

  // Load checklist state & reset view when navigating to a different lesson or student
  useEffect(() => {
    setMode('study')
    setFocusPrincipleIds(
      lastAttempt && !lastAttempt.passed ? lastAttempt.missedPrincipleIds : []
    )
    setQuizQuestions([])
    setAnswers({})
    setLatestResult(null)
    if (activeStudent && lessonId) {
      setCompletedStepIds(getLessonChecklistProgress(activeStudent.id, lessonId))
    } else {
      setCompletedStepIds([])
    }
  }, [lessonId, activeStudent?.id]) // eslint-disable-line react-hooks/exhaustive-deps

  // Track quiz-in-progress so background auto-updates or syncs never interrupt a student mid-quiz
  useEffect(() => {
    setIsQuizInProgress(mode === 'quiz')
    return () => setIsQuizInProgress(false)
  }, [mode, setIsQuizInProgress])

  const progressSummary = useMemo(() => {
    if (!course) return null
    return computeCourseProgress(course, attempts, settings.masteryThreshold)
  }, [course, attempts, settings.masteryThreshold])

  const nextUnlockedLesson = useMemo(() => {
    if (!progressSummary || !lessonId) return null
    const idx = progressSummary.items.findIndex((i) => i.lesson.id === lessonId)
    if (idx >= 0 && idx + 1 < progressSummary.items.length) {
      return progressSummary.items[idx + 1]
    }
    return null
  }, [progressSummary, lessonId])

  if (!course || !found || !activeStudent || !assignment) {
    return (
      <div className="card">
        <h2>Lesson not found</h2>
        <Link to="/" className="btn btn-primary">
          Return to Dashboard
        </Link>
      </div>
    )
  }

  const { unit, lesson } = found

  const toggleChecklistStep = (stepId: string) => {
    setCompletedStepIds((prev) => {
      const exists = prev.includes(stepId)
      const next = exists ? prev.filter((id) => id !== stepId) : [...prev, stepId]
      saveLessonChecklistProgress(activeStudent.id, lesson.id, next)
      return next
    })
  }

  const markAllStepsComplete = () => {
    const allIds = assignment.steps.map((s) => s.id)
    setCompletedStepIds(allIds)
    saveLessonChecklistProgress(activeStudent.id, lesson.id, allIds)
  }

  const allChecklistDone = assignment.steps.every((s) =>
    completedStepIds.includes(s.id)
  )
  const canStartQuiz =
    !settings.requireAssignmentChecklist ||
    allChecklistDone ||
    priorAttempts.length > 0

  const startFreshQuiz = (missedFocus: string[] = []) => {
    if (!canStartQuiz) return
    const nextSeed =
      ((Date.now() + (priorAttempts.length + 1) * 7919) ^
        hashString(
          `${lesson.id}-attempt-${priorAttempts.length + 1}-${Math.random()}`
        )) >>>
      0
    const built = buildQuizAttempt({
      lesson,
      seed: nextSeed,
      priorAttempts,
      focusPrincipleIds: missedFocus,
    })
    setSeed(nextSeed)
    setFocusPrincipleIds(missedFocus)
    setQuizQuestions(built)
    setAnswers({})
    setLatestResult(null)
    setMode('quiz')
  }

  const openOrResumeQuizTab = () => {
    if (!canStartQuiz) return
    // If a quiz is already active and unsubmitted, resume it without wiping answers
    if (quizQuestions.length > 0 && !latestResult) {
      setMode('quiz')
      return
    }
    startFreshQuiz(focusPrincipleIds)
  }

  const allAnswered =
    quizQuestions.length > 0 &&
    quizQuestions.every((q) => Boolean((answers[q.fingerprint] ?? '').trim()))

  const handleSubmitQuiz = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting || quizQuestions.length === 0 || !allAnswered) return
    setSubmitting(true)
    try {
      let correctCount = 0
      const missedPrinciples = new Set<string>()
      const reviewItems: QuestionReviewItem[] = []

      for (const q of quizQuestions) {
        const chosen = (answers[q.fingerprint] ?? '').trim()
        const isCorrect = chosen === q.answer.trim()
        if (isCorrect) {
          correctCount++
        } else {
          missedPrinciples.add(q.principleId)
        }
        reviewItems.push({
          fingerprint: q.fingerprint,
          principleId: q.principleId,
          principleTitle: q.principleTitle,
          prompt: q.prompt,
          passage: q.passage,
          studentAnswer: chosen || '(No answer)',
          correctAnswer: q.answer,
          isCorrect,
          explanation: q.explanation,
        })
      }

      const totalCount = quizQuestions.length
      const scorePercent = Math.round((correctCount / totalCount) * 100)
      const passed = scorePercent >= settings.masteryThreshold

      const record = await submitAttempt({
        studentId: activeStudent.id,
        courseId: course.id,
        unitId: unit.id,
        lessonId: lesson.id,
        kind: lesson.kind ?? 'lesson',
        seed,
        scorePercent,
        correctCount,
        totalCount,
        passed,
        questionFingerprints: quizQuestions.map((q) => q.fingerprint),
        missedPrincipleIds: Array.from(missedPrinciples),
        reviewItems,
      })
      setLatestResult(record)
      setMode('results')
    } finally {
      setSubmitting(false)
    }
  }

  const expectedQuestionCount =
    lesson.questionCount ?? (lesson.kind === 'unit_test' ? 8 : 5)

  return (
    <div className="page-stack">
      <div className="breadcrumb-row">
        <Link to={`/course/${course.id}`} className="breadcrumb-link">
          ← Back to {course.title}
        </Link>
        <span className="muted-sm">
          {unit.title} • Mastery Threshold: {settings.masteryThreshold}%
        </span>
      </div>

      <section className="card lesson-header-card">
        <div className="lesson-header-top">
          <div>
            <span className="course-subject-tag">
              GRADE {course.grade} • {course.subject.toUpperCase()}
            </span>
            <h1>{lesson.title}</h1>
          </div>
          <div className="mode-tabs">
            <button
              type="button"
              className={`mode-tab ${mode === 'study' ? 'active' : ''}`}
              onClick={() => setMode('study')}
            >
              1. Lesson Scope &amp; Study
            </button>
            <button
              type="button"
              className={`mode-tab ${mode === 'quiz' ? 'active' : ''}`}
              disabled={!canStartQuiz}
              title={
                !canStartQuiz
                  ? 'Complete the Lesson Assignment Checklist below to unlock the Mastery Check'
                  : 'Open Randomized Mastery Check'
              }
              onClick={openOrResumeQuizTab}
            >
              {!canStartQuiz ? '🔒 ' : ''}2. Randomized Mastery Check (
              {quizQuestions.length || expectedQuestionCount} Qs)
            </button>
            {latestResult && (
              <button
                type="button"
                className={`mode-tab ${mode === 'results' ? 'active' : ''}`}
                onClick={() => setMode('results')}
              >
                3. Attempt #{latestResult.attemptNumber} Results (
                {latestResult.scorePercent}%)
              </button>
            )}
          </div>
        </div>
      </section>

      {mode === 'study' && (
        <section className="card study-card">
          {lastAttempt && !lastAttempt.passed && (
            <div className="alert alert-warning">
              <strong>Targeted Concept Review before Next Attempt:</strong> On
              Attempt #{lastAttempt.attemptNumber}, you scored{' '}
              {lastAttempt.scorePercent}% (goal: {settings.masteryThreshold}%).
              Review the highlighted principle notes below, then launch a fresh
              randomized practice set!
            </div>
          )}

          {/* EXPLICIT LESSON SCOPE & ASSIGNMENT CHECKLIST */}
          <div className="scope-checklist-box">
            <div className="scope-header">
              <div>
                <span className="course-subject-tag">
                  ASSIGNED LESSON SCOPE &amp; COMPLETION CHECKLIST
                </span>
                <h3>What to Complete Before Starting the Mastery Quiz</h3>
                <p className="muted-sm">{assignment.scopeSummary}</p>
              </div>
              {!allChecklistDone && (
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={markAllStepsComplete}
                >
                  ✓ Mark All Steps Complete
                </button>
              )}
            </div>

            <div className="checklist-steps">
              {assignment.steps.map((step) => {
                const checked = completedStepIds.includes(step.id)
                return (
                  <div
                    key={step.id}
                    className={`checklist-item ${checked ? 'checked' : ''}`}
                  >
                    <label className="checklist-label">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleChecklistStep(step.id)}
                      />
                      <div className="checklist-text">
                        <div className="checklist-title-row">
                          <strong>{step.title}</strong>
                          <span className="badge badge-neutral">
                            ~{step.estimatedMinutes} min
                          </span>
                        </div>
                        <p className="muted-sm">{step.description}</p>
                      </div>
                    </label>
                    {step.url && (
                      <a
                        href={step.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-accent btn-sm"
                        onClick={() => {
                          if (!checked) toggleChecklistStep(step.id)
                        }}
                      >
                        Open Activity ↗
                      </a>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="video-stage">
            <div className="video-stage-visual">
              <div className="video-play-badge">▶</div>
              <div className="video-stage-text">
                <span className="badge badge-glass">
                  Targeted External Video / Activity (1 Lesson Only)
                </span>
                <h3>{lesson.videoTitle}</h3>
                <p>
                  Scope Rule: Watch only the single video/article for{' '}
                  <strong>
                    {lesson.principles.map((p) => p.title).join(' & ')}
                  </strong>{' '}
                  (do not complete the entire external unit), then return here
                  for your graded Mastery Check.
                </p>
                <a
                  href={lesson.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent"
                  onClick={() => {
                    const firstStep = assignment.steps[0]
                    if (firstStep && !completedStepIds.includes(firstStep.id)) {
                      toggleChecklistStep(firstStep.id)
                    }
                  }}
                >
                  Open Video Lesson in New Tab ↗
                </a>
              </div>
            </div>
          </div>

          <div className="reading-section">
            <h2>Core Concept Explanation</h2>
            <p className="reading-body">{lesson.reading}</p>
          </div>

          <div className="principles-section">
            <h3>Taught Principles &amp; Standards in This Lesson</h3>
            <div className="principles-grid">
              {lesson.principles.map((p) => {
                const needsFocus = focusPrincipleIds.includes(p.id)
                return (
                  <div
                    key={p.id}
                    className={`principle-card ${
                      needsFocus ? 'principle-focus' : ''
                    }`}
                  >
                    <div className="principle-top">
                      <span className="std-tag">Standard {p.standard}</span>
                      {needsFocus && (
                        <span className="badge badge-warning">
                          Review Recommended
                        </span>
                      )}
                    </div>
                    <h4>{p.title}</h4>
                    <p>{p.summary}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="study-footer">
            <div>
              <strong>
                {canStartQuiz
                  ? 'Ready to demonstrate mastery!'
                  : `Check off all ${assignment.steps.length} Lesson Scope steps above to unlock the Mastery Quiz`}
              </strong>
              <p className="muted-sm">
                Each attempt generates fresh questions for these principles.
                Score {settings.masteryThreshold}% or higher to unlock the next
                lesson.
              </p>
            </div>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              disabled={!canStartQuiz}
              onClick={openOrResumeQuizTab}
            >
              {!canStartQuiz
                ? `🔒 Complete Scope Checklist (${completedStepIds.length}/${assignment.steps.length})`
                : quizQuestions.length > 0 && !latestResult
                ? 'Resume Active Mastery Check →'
                : `Start Randomized Mastery Check (${expectedQuestionCount} Questions) →`}
            </button>
          </div>
        </section>
      )}

      {mode === 'quiz' && (
        <form onSubmit={handleSubmitQuiz} className="card quiz-card">
          <div className="quiz-banner">
            <div>
              <strong>
                Attempt #{priorAttempts.length + 1} • Seed #
                {seed.toString(16).toUpperCase()}
              </strong>
              <p className="muted-sm">
                Questions are frozen for this attempt and exclude previously
                seen problems. You can review notes and return without losing
                your answers.
              </p>
            </div>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => setMode('study')}
            >
              ← Review Lesson Notes
            </button>
          </div>

          <div className="questions-stack">
            {quizQuestions.map((q, idx) => {
              const selected = answers[q.fingerprint] ?? ''
              return (
                <div key={q.fingerprint} className="question-box">
                  <div className="question-meta">
                    <span className="question-number">
                      Question {idx + 1} of {quizQuestions.length}
                    </span>
                    <span className="std-tag">{q.principleTitle}</span>
                  </div>

                  {q.passage && (
                    <blockquote className="question-passage">
                      {q.passage}
                    </blockquote>
                  )}

                  <p className="question-prompt">{q.prompt}</p>

                  <div className="choices-list">
                    {(q.choices ?? []).map((choice) => {
                      const isChecked = selected === choice
                      return (
                        <label
                          key={choice}
                          className={`choice-option ${
                            isChecked ? 'selected' : ''
                          }`}
                        >
                          <input
                            type="radio"
                            name={q.fingerprint}
                            value={choice}
                            checked={isChecked}
                            onChange={() =>
                              setAnswers((prev) => ({
                                ...prev,
                                [q.fingerprint]: choice,
                              }))
                            }
                          />
                          <span>{choice}</span>
                        </label>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="quiz-submit-bar">
            <span>
              Answered{' '}
              <strong>
                {
                  quizQuestions.filter((q) =>
                    Boolean((answers[q.fingerprint] ?? '').trim())
                  ).length
                }{' '}
                / {quizQuestions.length}
              </strong>{' '}
              questions
            </span>
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              disabled={!allAnswered || submitting}
            >
              {submitting ? 'Grading Attempt...' : 'Submit Mastery Check'}
            </button>
          </div>
        </form>
      )}

      {mode === 'results' && latestResult && (
        <section className="card results-card">
          <div
            className={`results-hero ${
              latestResult.passed ? 'results-pass' : 'results-retry'
            }`}
          >
            <div className="results-score-circle">
              <strong>{latestResult.scorePercent}%</strong>
              <span>
                {latestResult.correctCount}/{latestResult.totalCount} Correct
              </span>
            </div>
            <div className="results-hero-text">
              {latestResult.passed ? (
                <>
                  <span className="badge badge-success">Mastery Achieved!</span>
                  <h2>Congratulations, {activeStudent.name}!</h2>
                  <p>
                    You scored {latestResult.scorePercent}%, meeting the{' '}
                    {settings.masteryThreshold}% mastery threshold on Attempt #
                    {latestResult.attemptNumber}. The next step in{' '}
                    {course.title} is now unlocked!
                  </p>
                </>
              ) : (
                <>
                  <span className="badge badge-warning">
                    Keep Going — Mastery Goal is {settings.masteryThreshold}%
                  </span>
                  <h2>Let’s Review &amp; Try Fresh Questions</h2>
                  <p>
                    You scored {latestResult.scorePercent}% on Attempt #
                    {latestResult.attemptNumber}. Review the explanation for
                    each question below, then launch a new randomized set
                    covering the same principles.
                  </p>
                </>
              )}

              <div className="results-actions">
                {latestResult.passed && nextUnlockedLesson && (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() =>
                      navigate(
                        `/course/${course.id}/lesson/${nextUnlockedLesson.lesson.id}`
                      )
                    }
                  >
                    Continue to Next Step: {nextUnlockedLesson.lesson.title} →
                  </button>
                )}
                <button
                  type="button"
                  className={`btn ${
                    latestResult.passed ? 'btn-secondary' : 'btn-primary'
                  }`}
                  onClick={() => startFreshQuiz(latestResult.missedPrincipleIds)}
                >
                  🔄{' '}
                  {latestResult.passed
                    ? 'Practice Again (New Questions)'
                    : 'Retry with Fresh Randomized Questions'}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setFocusPrincipleIds(latestResult.missedPrincipleIds)
                    setMode('study')
                  }}
                >
                  📖 Review Lesson &amp; Video
                </button>
              </div>
            </div>
          </div>

          {!latestResult.passed &&
            latestResult.missedPrincipleIds.length > 0 && (
              <div className="missed-principles-review">
                <h3>Targeted Concept Re-Teach for Missed Principles</h3>
                <div className="principles-grid">
                  {lesson.principles
                    .filter((p) =>
                      latestResult.missedPrincipleIds.includes(p.id)
                    )
                    .map((p) => (
                      <div
                        key={p.id}
                        className="principle-card principle-focus"
                      >
                        <span className="std-tag">Standard {p.standard}</span>
                        <h4>{p.title}</h4>
                        <p>{p.summary}</p>
                      </div>
                    ))}
                </div>
              </div>
            )}

          <h3>Question-by-Question Worked Review</h3>
          <div className="questions-stack">
            {(latestResult.reviewItems ?? []).map((item, idx) => (
              <div
                key={item.fingerprint}
                className={`review-item ${
                  item.isCorrect ? 'review-correct' : 'review-wrong'
                }`}
              >
                <div className="question-meta">
                  <strong>
                    {item.isCorrect ? '✅ Correct' : '❌ Needs Review'} —
                    Question {idx + 1}
                  </strong>
                  <span className="std-tag">{item.principleTitle}</span>
                </div>
                {item.passage && (
                  <blockquote className="question-passage">
                    {item.passage}
                  </blockquote>
                )}
                <p className="question-prompt">{item.prompt}</p>
                <div className="review-answers">
                  <span>
                    Your Answer: <strong>{item.studentAnswer}</strong>
                  </span>
                  {!item.isCorrect && (
                    <span>
                      Correct Answer: <strong>{item.correctAnswer}</strong>
                    </span>
                  )}
                </div>
                <div className="review-explanation">
                  <strong>Explanation:</strong> {item.explanation}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
