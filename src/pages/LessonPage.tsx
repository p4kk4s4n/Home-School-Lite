import React, { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { findLessonInCourse, getCourseById } from '../lib/curriculum'
import { computeCourseProgress } from '../lib/progress'
import { buildQuizAttempt } from '../lib/quizBuilder'
import { hashString } from '../lib/random'
import { AttemptRecord, GeneratedQuestion } from '../types'

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

  const course = useMemo(() => (courseId ? getCourseById(courseId) : undefined), [courseId])
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

  const lastAttempt = priorAttempts.length > 0 ? priorAttempts[priorAttempts.length - 1] : null

  const [mode, setMode] = useState<PlayerMode>('study')
  const [seed, setSeed] = useState<number>(() => Date.now() ^ hashString(lessonId || 'l'))
  const [focusPrincipleIds, setFocusPrincipleIds] = useState<string[]>([])
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [latestResult, setLatestResult] = useState<AttemptRecord | null>(null)
  const [submitting, setSubmitting] = useState(false)

  // Reset state when navigating between lessons
  useEffect(() => {
    setMode('study')
    setSeed(Date.now() ^ hashString(`${lessonId}-${priorAttempts.length}`))
    setFocusPrincipleIds(lastAttempt && !lastAttempt.passed ? lastAttempt.missedPrincipleIds : [])
    setAnswers({})
    setLatestResult(null)
  }, [lessonId]) // eslint-disable-line react-hooks/exhaustive-deps

  // Track quiz-in-progress so auto-updates never interrupt a student mid-quiz
  useEffect(() => {
    setIsQuizInProgress(mode === 'quiz')
    return () => setIsQuizInProgress(false)
  }, [mode, setIsQuizInProgress])

  const questions: GeneratedQuestion[] = useMemo(() => {
    if (!found) return []
    return buildQuizAttempt({
      lesson: found.lesson,
      seed,
      priorAttempts,
      focusPrincipleIds,
    })
  }, [found, seed, priorAttempts, focusPrincipleIds])

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

  if (!course || !found || !activeStudent) {
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

  const startFreshQuiz = (missedFocus: string[] = []) => {
    // Generate a guaranteed new seed so every retry produces fresh numbers/questions
    const nextSeed =
      (Date.now() + (priorAttempts.length + 1) * 7919) ^
      hashString(`${lesson.id}-attempt-${priorAttempts.length + 1}-${Math.random()}`)
    setSeed(nextSeed >>> 0)
    setFocusPrincipleIds(missedFocus)
    setAnswers({})
    setLatestResult(null)
    setMode('quiz')
  }

  const handleSubmitQuiz = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting || questions.length === 0) return
    setSubmitting(true)
    try {
      let correctCount = 0
      const missedPrinciples = new Set<string>()
      for (const q of questions) {
        const chosen = (answers[q.fingerprint] ?? '').trim()
        if (chosen === q.answer.trim()) {
          correctCount++
        } else {
          missedPrinciples.add(q.principleId)
        }
      }
      const totalCount = questions.length
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
        questionFingerprints: questions.map((q) => q.fingerprint),
        missedPrincipleIds: Array.from(missedPrinciples),
      })
      setLatestResult(record)
      setMode('results')
    } finally {
      setSubmitting(false)
    }
  }

  const allAnswered =
    questions.length > 0 && questions.every((q) => Boolean(answers[q.fingerprint]))

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
              1. Video &amp; Concept Lesson
            </button>
            <button
              type="button"
              className={`mode-tab ${mode === 'quiz' ? 'active' : ''}`}
              onClick={() => startFreshQuiz(focusPrincipleIds)}
            >
              2. Randomized Mastery Check ({questions.length} Qs)
            </button>
            {latestResult && (
              <button
                type="button"
                className={`mode-tab ${mode === 'results' ? 'active' : ''}`}
                onClick={() => setMode('results')}
              >
                3. Attempt #{latestResult.attemptNumber} Results ({latestResult.scorePercent}%)
              </button>
            )}
          </div>
        </div>
      </section>

      {mode === 'study' && (
        <section className="card study-card">
          {lastAttempt && !lastAttempt.passed && (
            <div className="alert alert-warning">
              <strong>Targeted Concept Review before Next Attempt:</strong> On Attempt #
              {lastAttempt.attemptNumber}, you scored {lastAttempt.scorePercent}% (goal:{' '}
              {settings.masteryThreshold}%). Review the highlighted principle notes below, then launch a fresh randomized practice set!
            </div>
          )}

          <div className="video-stage">
            <div className="video-stage-visual">
              <div className="video-play-badge">▶</div>
              <div className="video-stage-text">
                <span className="badge badge-glass">Instructional Video Resource</span>
                <h3>{lesson.videoTitle}</h3>
                <p>
                  Watch the video lesson on Khan Academy, then review the key principles and examples below before starting your mastery check.
                </p>
                <a
                  href={lesson.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent"
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
                    className={`principle-card ${needsFocus ? 'principle-focus' : ''}`}
                  >
                    <div className="principle-top">
                      <span className="std-tag">Standard {p.standard}</span>
                      {needsFocus && (
                        <span className="badge badge-warning">Review Recommended</span>
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
              <strong>Ready to demonstrate mastery?</strong>
              <p className="muted-sm">
                Each attempt generates fresh questions for these principles. Score{' '}
                {settings.masteryThreshold}% or higher to unlock the next lesson.
              </p>
            </div>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => startFreshQuiz(focusPrincipleIds)}
            >
              Start Randomized Mastery Check ({questions.length} Questions) →
            </button>
          </div>
        </section>
      )}

      {mode === 'quiz' && (
        <form onSubmit={handleSubmitQuiz} className="card quiz-card">
          <div className="quiz-banner">
            <div>
              <strong>
                Attempt #{priorAttempts.length + 1} • Seed #{seed.toString(16).toUpperCase()}
              </strong>
              <p className="muted-sm">
                Questions are freshly randomized for the taught principles and exclude previously seen problems.
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
            {questions.map((q, idx) => {
              const selected = answers[q.fingerprint] ?? ''
              return (
                <div key={q.fingerprint} className="question-box">
                  <div className="question-meta">
                    <span className="question-number">Question {idx + 1} of {questions.length}</span>
                    <span className="std-tag">{q.principleTitle}</span>
                  </div>

                  {q.passage && (
                    <blockquote className="question-passage">{q.passage}</blockquote>
                  )}

                  <p className="question-prompt">{q.prompt}</p>

                  <div className="choices-list">
                    {(q.choices ?? []).map((choice) => {
                      const isChecked = selected === choice
                      return (
                        <label
                          key={choice}
                          className={`choice-option ${isChecked ? 'selected' : ''}`}
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
                {Object.keys(answers).length} / {questions.length}
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
                    {latestResult.attemptNumber}. The next step in {course.title} is now unlocked!
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
                    {latestResult.attemptNumber}. Review the explanation for each question below, then launch a new randomized set covering the same principles.
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
                  🔄 {latestResult.passed ? 'Practice Again (New Questions)' : 'Retry with Fresh Randomized Questions'}
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

          {!latestResult.passed && latestResult.missedPrincipleIds.length > 0 && (
            <div className="missed-principles-review">
              <h3>Targeted Concept Re-Teach for Missed Principles</h3>
              <div className="principles-grid">
                {lesson.principles
                  .filter((p) => latestResult.missedPrincipleIds.includes(p.id))
                  .map((p) => (
                    <div key={p.id} className="principle-card principle-focus">
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
            {questions.map((q, idx) => {
              const studentAnswer = answers[q.fingerprint] ?? '(No answer)'
              const isCorrect = studentAnswer.trim() === q.answer.trim()
              return (
                <div
                  key={q.fingerprint}
                  className={`review-item ${isCorrect ? 'review-correct' : 'review-wrong'}`}
                >
                  <div className="question-meta">
                    <strong>
                      {isCorrect ? '✅ Correct' : '❌ Needs Review'} — Question {idx + 1}
                    </strong>
                    <span className="std-tag">{q.principleTitle}</span>
                  </div>
                  <p className="question-prompt">{q.prompt}</p>
                  <div className="review-answers">
                    <span>
                      Your Answer: <strong>{studentAnswer}</strong>
                    </span>
                    {!isCorrect && (
                      <span>
                        Correct Answer: <strong>{q.answer}</strong>
                      </span>
                    )}
                  </div>
                  <div className="review-explanation">
                    <strong>Explanation:</strong> {q.explanation}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}
    </div>
  )
}
