import React, { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ParentPinModal } from '../components/ParentPinModal'
import { TextbookPanel } from '../components/TextbookPanel'
import { useApp } from '../context/AppContext'
import {
  findLessonInCourse,
  getCourseById,
  getLessonAssignment,
} from '../lib/curriculum'
import { computeCourseProgress } from '../lib/progress'
import { buildKhanSearchUrl } from '../lib/khanUrlValidator'
import { buildQuizAttempt } from '../lib/quizBuilder'
import { hashString } from '../lib/random'
import { getLessonRemediation, getRemediationTier } from '../lib/remediation'
import {
  getLessonChecklistProgress,
  saveLessonChecklistProgress,
} from '../lib/storage'
import {
  AttemptRecord,
  GeneratedQuestion,
  QuestionReviewItem,
  RemediationLink,
} from '../types'

type PlayerMode = 'study' | 'quiz' | 'results'

export const LessonPage: React.FC = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>()
  const navigate = useNavigate()
  const {
    activeStudent,
    attempts,
    settings,
    isParentUnlocked,
    submitAttempt,
    setIsQuizInProgress,
  } = useApp()

  const includeOhio = settings.includeOhioAdjustments ?? true

  const course = useMemo(
    () => (courseId ? getCourseById(courseId, includeOhio) : undefined),
    [courseId, includeOhio]
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

  const remediation = useMemo(
    () =>
      found && course
        ? getLessonRemediation(found.lesson, course.subject, course.grade)
        : null,
    [found, course]
  )

  const remediationTier = useMemo(
    () => getRemediationTier(priorAttempts, settings.masteryThreshold),
    [priorAttempts, settings.masteryThreshold]
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
  const [pendingPinLink, setPendingPinLink] = useState<RemediationLink | null>(
    null
  )
  const [isTextbookOpen, setIsTextbookOpen] = useState(false)
  const [highlightedPrincipleId, setHighlightedPrincipleId] = useState<string | null>(null)
  const [showKhanHelp, setShowKhanHelp] = useState(false)

  const handleReviewPrinciple = (principleId: string) => {
    setHighlightedPrincipleId(principleId)
    setIsTextbookOpen(true)
  }

  const markFirstActivityStepComplete = () => {
    const firstStep = assignment?.steps[0]
    if (firstStep && !completedStepIds.includes(firstStep.id)) {
      toggleChecklistStep(firstStep.id)
    }
  }

  // Load checklist state & reset view when navigating to a different lesson or student
  useEffect(() => {
    setMode('study')
    setHighlightedPrincipleId(null)
    setShowKhanHelp(false)
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

  if (!course || !found || !activeStudent || !assignment || !remediation) {
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

  const handleRemediationLinkClick = (link: RemediationLink) => {
    if (link.requiresParentPin !== false && !isParentUnlocked) {
      setPendingPinLink(link)
      return
    }
    window.open(link.url, '_blank', 'noopener,noreferrer')
  }

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

  const configuredCount = Math.max(5, settings.masteryQuestionCount ?? 8)
  const expectedQuestionCount = useMemo(() => {
    if (lesson?.questionCount) {
      return lesson.questionCount
    }
    if (lesson?.kind === 'unit_test') {
      return configuredCount + 3 // bonus for unit exams
    }
    if (lesson?.kind === 'lesson_review') {
      return Math.max(configuredCount, 6)
    }
    return configuredCount
  }, [lesson?.questionCount, lesson?.kind, configuredCount])

  const startFreshQuiz = (missedFocus: string[] = []) => {
    if (!canStartQuiz || !lesson) return
    const nextSeed =
      ((Date.now() + (priorAttempts.length + 1) * 7919) ^
        hashString(
          `${lesson.id}-attempt-${priorAttempts.length + 1}-${Math.random()}`
        )) >>>
      0
    const unitPrinciples = (unit.lessons || []).flatMap((l) => l.principles || [])
    const built = buildQuizAttempt({
      lesson,
      seed: nextSeed,
      priorAttempts,
      questionCount: expectedQuestionCount,
      focusPrincipleIds: missedFocus,
      unitPrinciples,
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

  const renderRemediationSupport = (tier: 0 | 1 | 2 | 3) => {
    if (tier === 0) return null
    return (
      <div
        className="settings-panel"
        style={{
          marginTop: '1.25rem',
          borderLeft: '4px solid #f59e0b',
          background: '#fffbeb',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <div>
            <span className="badge badge-warning">
              Step-by-Step Support (Tier {tier} Remediation)
            </span>
            <h3 style={{ margin: '0.35rem 0 0.2rem' }}>
              Let’s Break This Into Smaller Steps
            </h3>
            <p className="muted-sm">
              Designed for focused, low-overwhelm mastery — one rule at a time.
            </p>
          </div>
          {tier >= 3 && (
            <span className="badge badge-exam">
              👨‍👩‍👧 Parent Coaching Recommended (3+ Attempts)
            </span>
          )}
        </div>

        <ol style={{ marginTop: '0.75rem', paddingLeft: '1.25rem', lineHeight: 1.7 }}>
          {remediation.simpleSteps.map((step, i) => (
            <li key={i}>
              <strong>Step {i + 1}:</strong> {step}
            </li>
          ))}
        </ol>

        {remediation.workedExample && (
          <div
            style={{
              marginTop: '0.75rem',
              padding: '0.65rem 0.85rem',
              background: '#ffffff',
              borderRadius: '8px',
              border: '1px solid #fde68a',
            }}
          >
            <strong>Worked Mini-Example:</strong> {remediation.workedExample}
          </div>
        )}

        <div style={{ marginTop: '1rem' }}>
          <h4 style={{ marginBottom: '0.35rem' }}>
            Alternative Simplified Video &amp; Multisensory Sources (Parent PIN Protected)
          </h4>
          <p className="muted-sm" style={{ marginBottom: '0.6rem' }}>
            Need a different way to see or hear this concept? Ask a parent to enter their PIN to open a simplified video search or visual guide:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {remediation.links.map((link) => (
              <button
                key={link.url}
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => handleRemediationLinkClick(link)}
              >
                {!isParentUnlocked && link.requiresParentPin !== false ? '🔒 ' : '🎬 '}
                {link.label} ↗
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-stack">
      <ParentPinModal
        link={pendingPinLink}
        onClose={() => setPendingPinLink(null)}
        onApproved={(approvedLink) => {
          setPendingPinLink(null)
          window.open(approvedLink.url, '_blank', 'noopener,noreferrer')
        }}
      />

      <div className="breadcrumb-row">
        <Link to={`/course/${course.id}`} className="breadcrumb-link">
          ← Back to {course.title}
        </Link>
        <span className="muted-sm">
          {unit.title} • Mastery Threshold: {settings.masteryThreshold}%
        </span>
      </div>

      {isTextbookOpen && (
        <div
          className="textbook-backdrop"
          onClick={() => setIsTextbookOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* FLOATING TEXTBOOK TOGGLE PILL */}
      <button
        type="button"
        className="textbook-floating-pill"
        onClick={() => setIsTextbookOpen((prev) => !prev)}
        aria-label="Toggle Interactive Textbook Side Panel"
      >
        <span>📖</span>
        <span>{isTextbookOpen ? 'Hide Textbook' : 'Textbook'}</span>
      </button>

      <div className={`lesson-workspace-grid ${isTextbookOpen ? 'with-textbook' : ''}`}>
        <div className="lesson-workspace-main">
          <section className="card lesson-header-card">
        <div className="lesson-header-top">
          <div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <span className="course-subject-tag">
                GRADE {course.grade} • {course.subject.toUpperCase()}
              </span>
              {lesson.partOf && (
                <span className="badge badge-primary">
                  Topic: {lesson.partOf}
                </span>
              )}
              {lesson.kind === 'lesson_review' && (
                <span className="badge badge-warning">Topic Mastery Review</span>
              )}
              {lesson.kind === 'unit_test' && (
                <span className="badge badge-exam">Unit Exam</span>
              )}
              {lesson.isOhioExtension && (
                <span className="badge badge-neutral">Ohio State Standard</span>
              )}
            </div>
            <h1 style={{ marginTop: '0.35rem' }}>{lesson.title}</h1>
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
            <button
              type="button"
              className={`mode-tab ${isTextbookOpen ? 'active' : ''}`}
              onClick={() => setIsTextbookOpen((prev) => !prev)}
              title="Open Interactive Textbook Side Panel to review concepts on the fly"
            >
              📖 {isTextbookOpen ? 'Hide Textbook' : 'Textbook Side Panel'}
            </button>
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
              Review the simplified steps and highlighted principle notes below,
              then launch a fresh randomized practice set!
            </div>
          )}

          {remediationTier >= 1 && renderRemediationSupport(remediationTier)}

          {/* EXPLICIT LESSON SCOPE & ASSIGNMENT CHECKLIST */}
          <div className="scope-checklist-box" style={{ marginTop: remediationTier >= 1 ? '1.25rem' : undefined }}>
            <div className="scope-header">
              <div>
                <span className="course-subject-tag">
                  ASSIGNED MICRO-LESSON SCOPE &amp; COMPLETION CHECKLIST
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
                  Targeted External Video / Activity (1 Micro-Segment Only)
                </span>
                <h3>{lesson.videoTitle}</h3>
                <p>
                  Scope Rule: Complete only the single segment for{' '}
                  <strong>
                    {lesson.principles.map((p) => p.title).join(' & ')}
                  </strong>{' '}
                  (do not complete the entire external unit), then return here
                  for your graded Mastery Check.
                </p>
                <div className="video-stage-actions">
                  <a
                    href={lesson.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent"
                    onClick={markFirstActivityStepComplete}
                  >
                    Open Video Lesson in New Tab ↗
                  </a>
                  <a
                    href={buildKhanSearchUrl(
                      lesson.title,
                      lesson.videoTitle,
                      course?.title
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-khan-search"
                    onClick={markFirstActivityStepComplete}
                  >
                    🔍 Search on Khan ↗
                  </a>
                  <button
                    type="button"
                    className="btn btn-khan-help"
                    aria-label="How to use Khan Search fallback"
                    aria-expanded={showKhanHelp}
                    aria-controls={`khan-help-popover-${lesson.id}`}
                    title="How to use Khan Search if a video moved"
                    onClick={() => setShowKhanHelp((prev) => !prev)}
                  >
                    ?
                  </button>
                </div>
                {showKhanHelp && (
                  <div
                    id={`khan-help-popover-${lesson.id}`}
                    className="khan-help-popover"
                    role="region"
                    aria-label="Khan Academy Search fallback guide"
                  >
                    <strong>
                      Quick 3-Step Tip if Khan Academy Shows an &ldquo;Oops&rdquo; Screen:
                    </strong>
                    <ol>
                      <li>
                        Click <strong>Open Video Lesson in New Tab ↗</strong> first to jump straight to the mapped Khan Academy lesson or topic page.
                      </li>
                      <li>
                        If Khan moved or renamed that page, click{' '}
                        <strong>🔍 Search on Khan ↗</strong> to search directly for{' '}
                        <strong>&ldquo;{lesson.videoTitle || lesson.title}&rdquo;</strong>.
                      </li>
                      <li>
                        Open the matching video (▶) or practice exercise, complete only this single micro-topic, and return here for your Mastery Check.
                      </li>
                    </ol>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="reading-section">
            <h2>Core Concept Explanation</h2>
            <p className="reading-body">{lesson.reading}</p>
          </div>

          <div className="principles-section">
            <h3>Taught Principles &amp; Standards in This Segment</h3>
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
                Each attempt generates fresh plain-language questions for this
                segment. Score {settings.masteryThreshold}% or higher to unlock
                the next step.
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
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <button
                type="button"
                className={`btn btn-sm ${isTextbookOpen ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setIsTextbookOpen((prev) => !prev)}
                title="Toggle Interactive Textbook Side Panel"
              >
                📖 {isTextbookOpen ? 'Hide Textbook' : 'Textbook Reference'}
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setMode('study')}
              >
                ← Review Lesson Notes
              </button>
            </div>
          </div>

          {/* LIVE QUIZ PROGRESS TRACKER */}
          {(() => {
            const answeredCount = quizQuestions.filter((q) => (answers[q.fingerprint] ?? '').trim().length > 0).length
            const answeredPct = Math.round((answeredCount / Math.max(1, quizQuestions.length)) * 100)
            return (
              <div className="quiz-progress-tracker" style={{ margin: '1rem 0 0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem', fontSize: '0.88rem' }}>
                  <span>
                    Quiz Completion: <strong>{answeredCount} of {quizQuestions.length}</strong> questions answered ({answeredPct}%)
                  </span>
                  {answeredCount === quizQuestions.length ? (
                    <span className="badge badge-success">All Questions Answered ✓</span>
                  ) : (
                    <span className="badge badge-warning">
                      {quizQuestions.length - answeredCount} Remaining
                    </span>
                  )}
                </div>
                <div className="progress-bar-track">
                  <div
                    className="progress-bar-fill"
                    style={{
                      width: `${answeredPct}%`,
                      backgroundColor: answeredCount === quizQuestions.length ? 'var(--success)' : 'var(--primary-bright)',
                    }}
                  />
                </div>
              </div>
            )
          })()}

          <div className="questions-stack">
            {quizQuestions.map((q, idx) => {
              const selected = answers[q.fingerprint] ?? ''
              return (
                <div key={q.fingerprint} className="question-box">
                  <div className="question-meta">
                    <span className="question-number">
                      Question {idx + 1} of {quizQuestions.length}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span className="std-tag">{q.principleTitle}</span>
                      <button
                        type="button"
                        className="btn-review-concept"
                        onClick={() => handleReviewPrinciple(q.principleId)}
                        title="Review this concept and worked examples in the textbook side panel"
                      >
                        💡 Review Concept
                      </button>
                    </div>
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
                    {latestResult.attemptNumber}. Use the simplified breakdown
                    or alternative video links below, then launch a fresh set of
                    questions.
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
            renderRemediationSupport(
              Math.max(1, remediationTier) as 1 | 2 | 3
            )}

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

        <TextbookPanel
          course={course}
          unit={unit}
          lesson={lesson}
          remediation={remediation}
          activeQuizFingerprints={quizQuestions.map((q) => q.fingerprint)}
          highlightedPrincipleId={highlightedPrincipleId}
          isOpen={isTextbookOpen}
          onClose={() => setIsTextbookOpen(false)}
        />
      </div>
    </div>
  )
}
