import React, { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ParentPinModal } from '../components/ParentPinModal'
import { TextbookPanel } from '../components/TextbookPanel'
import { useApp } from '../context/AppContext'
import { getCourseById } from '../lib/curriculum'
import { computeCourseGrade, computeLessonEffectiveScore } from '../lib/grading'
import { computeCourseProgress } from '../lib/progress'
import { getLessonRemediation } from '../lib/remediation'
import { getExploreCompletedProgress, saveExploreCompletedProgress } from '../lib/storage'
import { ExploreItem, Lesson, RemediationLink, Unit } from '../types'

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
  const [collapsedUnitIds, setCollapsedUnitIds] = useState<Record<string, boolean>>({})
  const [unitFilter, setUnitFilter] = useState<'all' | 'in_progress' | 'mastered'>('all')
  const [selectedActivity, setSelectedActivity] = useState<{
    activity: ExploreItem
    lesson: Lesson
    unit: Unit
  } | null>(null)
  const [textbookState, setTextbookState] = useState<{
    isOpen: boolean
    unit: Unit
    lesson: Lesson
    initialTab: 'lesson' | 'unit'
  } | null>(null)

  const openUnitTextbook = (u: Unit) => {
    const firstLesson = u.lessons[0]
    if (!firstLesson) return
    setTextbookState({
      isOpen: true,
      unit: u,
      lesson: firstLesson,
      initialTab: 'unit',
    })
  }

  const openLessonTextbook = (u: Unit, l: Lesson) => {
    setTextbookState({
      isOpen: true,
      unit: u,
      lesson: l,
      initialTab: 'lesson',
    })
  }

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
    setCompletedExploreIds(getExploreCompletedProgress(activeStudent.id, course.id))
  }, [activeStudent?.id, course?.id])

  const toggleExploreDone = (itemId: string) => {
    if (!activeStudent || !course) return
    setCompletedExploreIds((prev) => {
      const safePrev = Array.isArray(prev) ? prev : []
      const next = safePrev.includes(itemId)
        ? safePrev.filter((id) => id !== itemId)
        : [...safePrev, itemId]
      saveExploreCompletedProgress(activeStudent.id, course.id, next)
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

  const unitStats = useMemo(() => {
    if (!course || !progress) return { totalUnits: 0, inProgressUnits: 0, masteredUnits: 0 }
    let inProgressUnits = 0
    let masteredUnits = 0
    const coreUnits = course.units.filter((u) => u.kind === 'core')
    for (const u of coreUnits) {
      const items = progress.items.filter((i) => i.unit.id === u.id)
      const allMastered = items.length > 0 && items.every((i) => i.status === 'mastered')
      const isInProg = items.some((i) => i.status === 'available' || i.status === 'in_progress')
      if (allMastered) masteredUnits++
      if (isInProg) inProgressUnits++
    }
    return {
      totalUnits: course.units.length,
      inProgressUnits,
      masteredUnits,
    }
  }, [course, progress])

  const toggleUnitCollapse = (unitId: string) => {
    setCollapsedUnitIds((prev) => ({
      ...prev,
      [unitId]: !prev[unitId],
    }))
  }

  const handleJumpToCurrentLesson = () => {
    if (progress?.nextLesson) {
      const nextUnit = course?.units.find((u) =>
        u.lessons.some((l) => l.id === progress.nextLesson?.lesson.id)
      )
      if (nextUnit && collapsedUnitIds[nextUnit.id]) {
        setCollapsedUnitIds((prev) => ({ ...prev, [nextUnit.id]: false }))
      }
    }
    setTimeout(() => {
      const el = document.getElementById('current-lesson-target')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        el.classList.add('row-highlighted')
        setTimeout(() => el.classList.remove('row-highlighted'), 2000)
      }
    }, 60)
  }

  const collapseMasteredUnits = () => {
    if (!progress || !course) return
    const nextCollapsed: Record<string, boolean> = { ...collapsedUnitIds }
    for (const u of course.units) {
      if (u.kind === 'core') {
        const items = progress.items.filter((i) => i.unit.id === u.id)
        const allMastered = items.length > 0 && items.every((i) => i.status === 'mastered')
        if (allMastered) {
          nextCollapsed[u.id] = true
        }
      }
    }
    setCollapsedUnitIds(nextCollapsed)
  }

  const expandAllUnits = () => {
    setCollapsedUnitIds({})
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
    <div className={`lesson-workspace-grid ${textbookState?.isOpen ? 'with-textbook' : ''}`}>
      <div className="page-stack">
        <ParentPinModal
          link={pendingPinLink}
          onClose={() => setPendingPinLink(null)}
          onApproved={(approvedLink) => {
            setPendingPinLink(null)
            window.open(approvedLink.url, '_blank', 'noopener,noreferrer')
          }}
        />

        {selectedActivity && (
          <div
            className="modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Hands-on Activity Guide"
            onClick={() => setSelectedActivity(null)}
          >
            <div
              className="modal-card"
              style={{ maxWidth: '640px', width: '92%' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '0.75rem' }}>
                <div>
                  <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                    <span className="badge badge-primary" style={{ textTransform: 'capitalize' }}>
                      {selectedActivity.activity.type}
                    </span>
                    <span className="muted-sm">⏱ {selectedActivity.activity.estimatedMinutes} min</span>
                  </div>
                  <h3 style={{ margin: 0 }}>🧪 {selectedActivity.activity.title}</h3>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setSelectedActivity(null)}
                  aria-label="Close dialog"
                >
                  ✕
                </button>
              </div>

              <p style={{ margin: '0.5rem 0 0.85rem', lineHeight: 1.5, fontSize: '0.92rem' }}>
                {selectedActivity.activity.description}
              </p>

              {selectedActivity.activity.materials && selectedActivity.activity.materials.length > 0 && (
                <div
                  style={{
                    background: 'var(--surface-alt)',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '6px',
                    border: '1px solid var(--border)',
                    marginBottom: '0.85rem',
                    fontSize: '0.88rem',
                  }}
                >
                  <strong>📦 Materials Needed:</strong> {selectedActivity.activity.materials.join(', ')}
                </div>
              )}

              {selectedActivity.activity.steps && selectedActivity.activity.steps.length > 0 && (
                <div style={{ marginBottom: '0.85rem', fontSize: '0.88rem' }}>
                  <strong style={{ color: 'var(--primary-bright)' }}>Investigation Procedure:</strong>
                  <ol style={{ paddingLeft: '1.25rem', marginTop: '0.35rem', lineHeight: 1.6 }}>
                    {selectedActivity.activity.steps.map((s, idx) => (
                      <li key={idx} style={{ marginBottom: '0.35rem' }}>
                        {s}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {selectedActivity.activity.reflectionPrompt && (
                <div
                  style={{
                    fontSize: '0.85rem',
                    fontStyle: 'italic',
                    color: 'var(--muted)',
                    background: 'var(--surface-alt)',
                    padding: '0.55rem 0.85rem',
                    borderRadius: '6px',
                    borderLeft: '4px solid var(--warning)',
                    marginBottom: '1rem',
                  }}
                >
                  💭 <strong>Discussion / Journal Prompt:</strong> {selectedActivity.activity.reflectionPrompt}
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    const u = selectedActivity.unit
                    const l = selectedActivity.lesson
                    setSelectedActivity(null)
                    openLessonTextbook(u, l)
                  }}
                >
                  📖 Open Lesson in Textbook
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => setSelectedActivity(null)}
                >
                  Close Guide
                </button>
              </div>
            </div>
          </div>
        )}

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
            {course.externalCourseLinks && course.externalCourseLinks.length > 0 && (
              <div
                style={{
                  display: 'flex',
                  gap: '0.45rem',
                  flexWrap: 'wrap',
                  marginTop: '0.65rem',
                }}
              >
                {course.externalCourseLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-secondary"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      borderColor: 'var(--accent)',
                      color: 'var(--accent)',
                    }}
                    title={`Open ${link.label} on Khan Academy`}
                  >
                    <span>↗</span>
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            )}
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

      {/* COURSE MAP STREAMLINED NAVIGATION & UNIT FILTER BAR */}
      <section className="card" style={{ padding: '0.85rem 1.15rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span className="muted-sm" style={{ fontWeight: 700, marginRight: '0.2rem' }}>Filter Units:</span>
            <button
              type="button"
              className={`btn btn-sm ${unitFilter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setUnitFilter('all')}
            >
              All Units ({unitStats.totalUnits})
            </button>
            <button
              type="button"
              className={`btn btn-sm ${unitFilter === 'in_progress' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setUnitFilter('in_progress')}
            >
              In Progress ({unitStats.inProgressUnits})
            </button>
            <button
              type="button"
              className={`btn btn-sm ${unitFilter === 'mastered' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setUnitFilter('mastered')}
            >
              Mastered ({unitStats.masteredUnits})
            </button>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {progress.nextLesson && (
              <button
                type="button"
                className="btn btn-accent btn-sm"
                onClick={handleJumpToCurrentLesson}
                title="Scroll smoothly to current next unmastered lesson"
              >
                🎯 Jump to Current Lesson
              </button>
            )}
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={collapseMasteredUnits}
              title="Collapse all 100% mastered units"
            >
              Collapse Mastered
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={expandAllUnits}
              title="Expand all units"
            >
              Expand All
            </button>
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
                <Link to="/teacher-resources" className="btn btn-secondary btn-sm">
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
        const unitMasteredCount = unitItems.filter((i) => i.status === 'mastered').length
        const isUnitMastered = unitItems.length > 0 && unitMasteredCount === unitItems.length
        const isUnitInProgress = unitItems.some((i) => i.status === 'available' || i.status === 'in_progress')
        const isCollapsed = !!collapsedUnitIds[unit.id]

        if (unitFilter === 'mastered' && !isUnitMastered) return null
        if (unitFilter === 'in_progress' && !isUnitInProgress) return null

        return (
          <section key={unit.id} className="card unit-card">
            <div className="unit-header">
              <div
                className="unit-header-clickable"
                onClick={() => toggleUnitCollapse(unit.id)}
                style={{ cursor: 'pointer', flex: 1, minWidth: '240px' }}
                title={isCollapsed ? 'Expand unit lessons' : 'Collapse unit lessons'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="unit-collapse-caret" style={{ fontSize: '1.2rem', userSelect: 'none' }}>
                    {isCollapsed ? '▸' : '▾'}
                  </span>
                  <h2 style={{ margin: 0 }}>{unit.title}</h2>
                  {unit.isSupplemental && (
                    <span
                      className="badge badge-accent"
                      style={{
                        background: 'rgba(234, 179, 8, 0.15)',
                        color: 'var(--accent)',
                        border: '1px solid var(--accent)',
                      }}
                    >
                      🌟 Supplemental • Always Unlocked (Optional)
                    </span>
                  )}
                  <span
                    className={`badge ${
                      isUnitMastered
                        ? 'badge-success'
                        : isUnitInProgress
                        ? 'badge-primary'
                        : 'badge-neutral'
                    }`}
                  >
                    {unitMasteredCount} / {unitItems.length} Mastered
                  </span>
                </div>
                <div className="standards-tags">
                  {(unit.standards || []).map((std) => (
                    <span key={std} className="std-tag">
                      Standard: {std}
                    </span>
                  ))}
                </div>
              </div>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => openUnitTextbook(unit)}
                title={`Open Interactive Textbook for ${unit.title}`}
              >
                📖 Unit Textbook &amp; Search
              </button>
            </div>

            {!isCollapsed && (
              <div className="lesson-list">
                {unitItems.map((item) => {
                  const { lesson, status, attempts: lessonAttempts } = item
                  const effectiveScore = computeLessonEffectiveScore(lessonAttempts, settings)
                  const isLocked = status === 'locked'
                  const isNextLessonTarget = lesson.id === progress.nextLesson?.lesson.id

                  return (
                    <div
                      key={lesson.id}
                      id={isNextLessonTarget ? 'current-lesson-target' : undefined}
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
                        {lesson.isSupplemental && (
                          <span className="badge badge-neutral">Supplemental</span>
                        )}
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
                      {lesson.activity && (
                        <div style={{ marginTop: '0.4rem' }}>
                          <button
                            type="button"
                            className="btn btn-sm btn-secondary"
                            style={{
                              padding: '0.2rem 0.6rem',
                              fontSize: '0.78rem',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              borderColor: 'var(--accent)',
                              color: 'var(--accent)',
                            }}
                            onClick={() => setSelectedActivity({ activity: lesson.activity!, lesson, unit })}
                            title={`Open hands-on inquiry activity: ${lesson.activity.title}`}
                          >
                            <span>🧪</span>
                            <strong>Activity:</strong> {lesson.activity.title}
                          </button>
                        </div>
                      )}
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

                    <div className="lesson-row-action" style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', flexWrap: 'wrap' }}>
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => openLessonTextbook(unit, lesson)}
                        title={`Read Textbook Guide for ${lesson.title}`}
                        style={{ padding: '0.35rem 0.65rem' }}
                      >
                        📖 Guide
                      </button>
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
          )}
        </section>
        )
      })}
      </div>

      {textbookState?.isOpen && (
        <>
          <div
            className="textbook-backdrop"
            onClick={() => setTextbookState(null)}
            aria-hidden="true"
          />
          <TextbookPanel
            course={course}
            unit={textbookState.unit}
            lesson={textbookState.lesson}
            remediation={
              textbookState.lesson.remediation ??
              getLessonRemediation(textbookState.lesson, course.subject, course.grade)
            }
            initialTab={textbookState.initialTab}
            isOpen={textbookState.isOpen}
            onClose={() => setTextbookState(null)}
            onSelectUnit={(newUnit) => {
              setTextbookState((prev) =>
                prev
                  ? {
                      ...prev,
                      unit: newUnit,
                      lesson: newUnit.lessons[0] ?? prev.lesson,
                    }
                  : null
              )
            }}
            onSelectLesson={(newLesson, inUnit) => {
              setTextbookState((prev) =>
                prev
                  ? {
                      ...prev,
                      unit: inUnit,
                      lesson: newLesson,
                      initialTab: 'lesson',
                    }
                  : null
              )
            }}
          />
        </>
      )}
    </div>
  )
}
