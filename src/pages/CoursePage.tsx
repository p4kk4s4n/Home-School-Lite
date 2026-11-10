import React, { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ParentPinModal } from '../components/ParentPinModal'
import { useApp } from '../context/AppContext'
import { getCourseById } from '../lib/curriculum'
import { computeCourseGrade, computeLessonEffectiveScore } from '../lib/grading'
import { computeCourseProgress } from '../lib/progress'
import { getLocalItem, setLocalItem } from '../lib/storage'
import { ExploreItem, RemediationLink } from '../types'

function getExploreIcon(type: ExploreItem['type']): string {
  switch (type) {
    case 'simulation':
      return '🔬'
    case 'experiment':
    case 'hands_on':
      return '🧪'
    case 'video':
      return '🎬'
    case 'project':
      return '🛠️'
    case 'game':
      return '🎮'
    case 'virtual_tour':
      return '🏛️'
    case 'reading':
    default:
      return '📖'
  }
}

export const CoursePage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>()
  const { activeStudent, attempts, settings, isParentUnlocked } = useApp()

  const [pendingPinLink, setPendingPinLink] = useState<RemediationLink | null>(null)
  const [completedExploreIds, setCompletedExploreIds] = useState<string[]>([])

  const includeOhio = settings.includeOhioAdjustments ?? true

  const course = useMemo(
    () => (courseId ? getCourseById(courseId, includeOhio) : undefined),
    [courseId, includeOhio]
  )

  const progress = useMemo(() => {
    if (!course) return null
    return computeCourseProgress(course, attempts, settings.masteryThreshold)
  }, [course, attempts, settings.masteryThreshold])

  const gradeSummary = useMemo(() => {
    if (!course) return null
    return computeCourseGrade(course, attempts, settings)
  }, [course, attempts, settings])

  // Load completed explore item IDs from namespaced localStorage safely
  useEffect(() => {
    if (!activeStudent || !course) return
    const key = `explore:${activeStudent.id}:${course.id}`
    const raw = getLocalItem(key)
    if (raw) {
      try {
        const parsed = JSON.parse(raw)
        setCompletedExploreIds(Array.isArray(parsed) ? parsed : [])
      } catch {
        setCompletedExploreIds([])
      }
    } else {
      setCompletedExploreIds([])
    }
  }, [activeStudent?.id, course?.id])

  const toggleExploreDone = (itemId: string) => {
    if (!activeStudent || !course) return
    setCompletedExploreIds((prev) => {
      const safePrev = Array.isArray(prev) ? prev : []
      const next = safePrev.includes(itemId)
        ? safePrev.filter((id) => id !== itemId)
        : [...safePrev, itemId]
      const key = `explore:${activeStudent.id}:${course.id}`
      setLocalItem(key, JSON.stringify(next))
      return next
    })
  }

  const handleExploreLink = (item: ExploreItem) => {
    if (!item.url) return
    if (item.requiresParentPin !== false && !isParentUnlocked) {
      setPendingPinLink({
        label: item.title,
        url: item.url,
        kind: item.type === 'video' ? 'video' : 'practice',
        provider: 'External Resource',
        requiresParentPin: true,
      })
      return
    }
    window.open(item.url, '_blank', 'noopener,noreferrer')
  }

  if (!course || !progress || !gradeSummary) {
    return (
      <div className="card" style={{ maxWidth: '640px', margin: '2rem auto', textAlign: 'center' }}>
        <h2>Course not found</h2>
        <p className="muted" style={{ margin: '0.5rem 0 1.25rem 0' }}>
          The requested course ID could not be loaded or is not enrolled for your student.
        </p>
        <Link to="/" className="btn btn-primary">
          ← Back to Student Dashboard
        </Link>
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
        <Link to="/" className="breadcrumb-link">
          ← Back to Student Dashboard
        </Link>
      </div>

      <section
        className="course-banner-card"
        style={{ borderLeft: `6px solid ${course.color}` }}
      >
        <div className="course-banner-main">
          <span className="course-banner-icon">{course.icon}</span>
          <div>
            <div className="course-banner-meta">
              <span className="course-subject-tag">{course.subject.toUpperCase()}</span>
              <span>•</span>
              <span>Grade {course.grade} Curriculum</span>
              <span>•</span>
              <span>{course.credits} Credits</span>
            </div>
            <h1>{course.title}</h1>
            <p className="muted">{course.subtitle}</p>
          </div>
        </div>

        <div className="course-banner-stats">
          <div className="stat-box">
            <span className="stat-label">Progress</span>
            <strong className="stat-value">{progress.percentComplete}%</strong>
            <span>
              {progress.masteredCount} of {progress.totalCount} Mastered
            </span>
          </div>

          <div className="stat-box">
            <span className="stat-label">Current Course Grade</span>
            <strong className="stat-value" style={{ color: course.color }}>
              {gradeSummary.hasGrades ? gradeSummary.letter : '—'}
            </strong>
            <span>
              {gradeSummary.overallPercent !== null
                ? `${gradeSummary.overallPercent}% Overall`
                : 'No Graded Steps Yet'}
            </span>
            <span>GPA Value: {gradeSummary.hasGrades ? gradeSummary.gpaPoints.toFixed(1) : '—'}</span>
            <span>
              Lessons: {gradeSummary.lessonAverage !== null ? `${gradeSummary.lessonAverage}%` : '—'} • Exams:{' '}
              {gradeSummary.unitTestAverage !== null ? `${gradeSummary.unitTestAverage}%` : '—'}
            </span>
          </div>
        </div>
      </section>

      {course.units.map((unit) => {
        // Teacher Resources unit: Show brief parent portal link
        if (unit.kind === 'teacher_resources') {
          return (
            <section
              key={unit.id}
              className="card unit-card"
              style={{ borderStyle: 'dashed', borderColor: 'var(--border)' }}
            >
              <div className="unit-header">
                <div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <span className="badge badge-neutral">PARENT / TEACHER ONLY</span>
                  </div>
                  <h2>📚 {unit.title}</h2>
                  <p className="muted-sm" style={{ margin: '0.25rem 0 0 0' }}>
                    Pacing guides, answer keys with step-by-step solutions, printable worksheets, and Ohio/National standards crosswalks for this course are located in the Parent Portal.
                  </p>
                </div>
                <Link to="/settings" className="btn btn-secondary btn-sm">
                  Open Teacher Resources →
                </Link>
              </div>
            </section>
          )
        }

        // Explore unit: Ungraded enrichment, simulations, hands-on experiments & videos
        if (unit.kind === 'explore') {
          return (
            <section
              key={unit.id}
              className="card unit-card"
              style={{ borderColor: 'var(--accent)' }}
            >
              <div className="unit-header">
                <div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.35rem' }}>
                    <span className="badge badge-primary">UNGRADED ENRICHMENT</span>
                    <span className="badge badge-success">Always Unlocked</span>
                  </div>
                  <h2>🧭 {unit.title}</h2>
                  <p className="muted-sm" style={{ margin: '0.25rem 0 0 0' }}>
                    Interactive virtual simulations, kitchen experiments, YouTube video deep-dives, and hands-on projects. Complete these anytime to expand knowledge without affecting mastery % or GPA.
                  </p>
                </div>
              </div>

              <div className="student-list" style={{ marginTop: '1rem' }}>
                {(unit.exploreItems || []).map((item) => {
                  const isDone = completedExploreIds.includes(item.id)
                  return (
                    <div
                      key={item.id}
                      className="student-row"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.65rem',
                        padding: '1rem',
                        borderLeft: isDone ? '4px solid var(--success)' : '4px solid var(--accent)',
                        background: isDone ? 'rgba(34, 197, 94, 0.05)' : 'var(--surface-alt)',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          flexWrap: 'wrap',
                          gap: '0.75rem',
                        }}
                      >
                        <div style={{ flex: 1, minWidth: '260px' }}>
                          <div
                            style={{
                              display: 'flex',
                              gap: '0.5rem',
                              alignItems: 'center',
                              flexWrap: 'wrap',
                              marginBottom: '0.25rem',
                            }}
                          >
                            <span style={{ fontSize: '1.25rem' }}>{getExploreIcon(item.type)}</span>
                            <strong style={{ fontSize: '1.05rem' }}>{item.title}</strong>
                            <span className="badge badge-neutral" style={{ textTransform: 'capitalize' }}>
                              {item.type}
                            </span>
                            <span className="muted-sm">⏱ {item.estimatedMinutes} min</span>
                          </div>
                          <p className="muted-sm" style={{ margin: '0.25rem 0 0 0' }}>
                            {item.description}
                          </p>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                          {item.url && (
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              onClick={() => handleExploreLink(item)}
                            >
                              {!isParentUnlocked && item.requiresParentPin !== false ? '🔒 ' : '↗ '}
                              {item.type === 'simulation'
                                ? 'Launch Simulation'
                                : item.type === 'video'
                                ? 'Watch Video'
                                : 'Open Resource'}
                            </button>
                          )}
                          <label
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.4rem',
                              cursor: 'pointer',
                              fontSize: '0.9rem',
                              fontWeight: 600,
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={isDone}
                              onChange={() => toggleExploreDone(item.id)}
                            />
                            <span>{isDone ? 'Completed ✓' : 'Mark Done'}</span>
                          </label>
                        </div>
                      </div>

                      {item.materials && item.materials.length > 0 && (
                        <div
                          style={{
                            background: 'var(--surface)',
                            padding: '0.45rem 0.75rem',
                            borderRadius: '6px',
                            fontSize: '0.85rem',
                            border: '1px solid var(--border)',
                          }}
                        >
                          <strong>📦 Materials Needed:</strong> {item.materials.join(', ')}
                        </div>
                      )}

                      {item.steps && item.steps.length > 0 && (
                        <details style={{ fontSize: '0.88rem' }}>
                          <summary style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--primary-bright)' }}>
                            View Investigation Steps ({item.steps.length} steps)
                          </summary>
                          <ol style={{ paddingLeft: '1.25rem', marginTop: '0.4rem', lineHeight: '1.6' }}>
                            {item.steps.map((step, idx) => (
                              <li key={idx}>{step}</li>
                            ))}
                          </ol>
                        </details>
                      )}

                      {item.reflectionPrompt && (
                        <div
                          style={{
                            fontSize: '0.85rem',
                            fontStyle: 'italic',
                            color: 'var(--muted)',
                            background: 'var(--surface)',
                            padding: '0.4rem 0.75rem',
                            borderRadius: '6px',
                          }}
                        >
                          💭 <strong>Journal / Discussion Prompt:</strong> {item.reflectionPrompt}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </section>
          )
        }

        // Core unit with sequential Acellus-style unlocking
        const unitItems = progress.items.filter((i) => i.unit.id === unit.id)
        return (
          <section key={unit.id} className="card unit-card">
            <div className="unit-header">
              <div>
                <h2>{unit.title}</h2>
                <div className="standards-tags">
                  {(unit.standards || []).map((std) => (
                    <span key={std} className="std-tag">
                      Standard: {std}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lesson-list">
              {unitItems.map((item) => {
                const { lesson, status, attempts: lessonAttempts } = item
                const effectiveScore = computeLessonEffectiveScore(lessonAttempts, settings)
                const isLocked = status === 'locked'

                return (
                  <div
                    key={lesson.id}
                    className={`lesson-row status-${status}`}
                  >
                    <div className="lesson-status-icon">
                      {status === 'mastered' && <span title="Mastered">✅</span>}
                      {status === 'available' && <span title="Ready">▶️</span>}
                      {status === 'in_progress' && <span title="In Progress">🔄</span>}
                      {status === 'locked' && <span title="Locked">🔒</span>}
                    </div>

                    <div className="lesson-row-body">
                      <div className="lesson-title-line">
                        {lesson.partOf && (
                          <span className="badge badge-primary">
                            {lesson.partOf}
                          </span>
                        )}
                        <strong>{lesson.title}</strong>
                        {lesson.kind === 'lesson_review' && (
                          <span className="badge badge-warning">Review Check</span>
                        )}
                        {lesson.kind === 'unit_test' && (
                          <span className="badge badge-exam">Unit Exam</span>
                        )}
                        {lesson.isOhioExtension && (
                          <span className="badge badge-neutral">Ohio Standard</span>
                        )}
                      </div>
                      <div className="lesson-sub-line">
                        <span>⏱ {lesson.estimatedMinutes} min</span>
                        <span>•</span>
                        <span>
                          Principles:{' '}
                          {(lesson.principles || []).map((p) => p.title || p.id).join(', ')}
                        </span>
                      </div>
                    </div>

                    <div className="lesson-row-score">
                      {effectiveScore !== null ? (
                        <>
                          <strong>{effectiveScore}%</strong>
                          <span>
                            {lessonAttempts.length}{' '}
                            {lessonAttempts.length === 1 ? 'attempt' : 'attempts'}
                          </span>
                        </>
                      ) : (
                        <span className="muted-sm">Not attempted</span>
                      )}
                    </div>

                    <div className="lesson-row-action">
                      {isLocked ? (
                        <button className="btn btn-secondary btn-sm" disabled>
                          🔒 Master Prior Step
                        </button>
                      ) : (
                        <Link
                          to={`/course/${course.id}/lesson/${lesson.id}`}
                          className={`btn btn-sm ${
                            status === 'mastered' ? 'btn-secondary' : 'btn-primary'
                          }`}
                        >
                          {status === 'mastered'
                            ? 'Review / Fresh Practice'
                            : status === 'in_progress'
                            ? 'Retry Fresh Questions'
                            : 'Open Lesson'}
                        </Link>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
