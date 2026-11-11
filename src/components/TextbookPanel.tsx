import React, { useEffect, useMemo, useRef, useState } from 'react'
import { getLessonRemediation } from '../lib/remediation'
import { generatePrincipleSamples } from '../lib/worksheetGenerator'
import { Course, GeneratedQuestion, Lesson, Principle, Remediation, Unit } from '../types'

export interface TextbookPanelProps {
  course: Course
  unit: Unit
  lesson: Lesson
  remediation?: Remediation | null
  activeQuizFingerprints?: string[]
  highlightedPrincipleId?: string | null
  initialTab?: 'lesson' | 'unit'
  isOpen: boolean
  onClose: () => void
  onSelectUnit?: (unit: Unit) => void
  onSelectLesson?: (lesson: Lesson, unit: Unit) => void
}

export const TextbookPanel: React.FC<TextbookPanelProps> = ({
  course,
  unit,
  lesson,
  remediation,
  activeQuizFingerprints = [],
  highlightedPrincipleId = null,
  initialTab,
  isOpen,
  onClose,
  onSelectUnit,
  onSelectLesson,
}) => {
  const [activeTab, setActiveTab] = useState<'lesson' | 'unit'>(initialTab ?? 'lesson')
  const [searchQuery, setSearchQuery] = useState('')
  const [sampleSeeds, setSampleSeeds] = useState<Record<string, number>>({})
  const [currentUnitId, setCurrentUnitId] = useState(unit.id)
  const [currentLessonId, setCurrentLessonId] = useState(lesson.id)

  const principleRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const tab2PrincipleRefs = useRef<Record<string, HTMLDivElement | null>>({})

  // Keep internal selection synced when props update
  useEffect(() => {
    setCurrentUnitId(unit.id)
  }, [unit.id])

  useEffect(() => {
    setCurrentLessonId(lesson.id)
  }, [lesson.id])

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab)
    }
  }, [initialTab])

  // Automatically scroll to and highlight principle when highlightedPrincipleId changes
  useEffect(() => {
    if (highlightedPrincipleId && isOpen) {
      setActiveTab('lesson')
      const targetEl = principleRefs.current[highlightedPrincipleId]
      if (targetEl && typeof targetEl.scrollIntoView === 'function') {
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
      }
    }
  }, [highlightedPrincipleId, isOpen])

  // Core units for switcher
  const coreUnits = useMemo(() => {
    return course.units.filter((u) => u.kind !== 'explore' && u.kind !== 'teacher_resources')
  }, [course.units])

  const currentUnit = useMemo(() => {
    return course.units.find((u) => u.id === currentUnitId) ?? unit
  }, [course.units, currentUnitId, unit])

  const currentLesson = useMemo(() => {
    return (
      currentUnit.lessons.find((l) => l.id === currentLessonId) ??
      currentUnit.lessons[0] ??
      lesson
    )
  }, [currentUnit.lessons, currentLessonId, lesson])

  const currentRemediation = useMemo(() => {
    if (currentLesson.id === lesson.id && remediation) {
      return remediation
    }
    return currentLesson.remediation ?? getLessonRemediation(currentLesson, course.subject, course.grade)
  }, [currentLesson, lesson.id, remediation, course.subject, course.grade])

  const rollNewSample = (principleId: string) => {
    setSampleSeeds((prev) => ({
      ...prev,
      [principleId]: (prev[principleId] || Date.now()) + 7919,
    }))
  }

  // Pre-generate non-spoiling worked examples for each principle across all lessons in current unit
  const workedExamples = useMemo(() => {
    const examples: Record<string, GeneratedQuestion | null> = {}
    const activeSet = new Set(activeQuizFingerprints)

    for (const l of currentUnit.lessons) {
      for (const p of l.principles) {
        const seed = sampleSeeds[p.id] || 42
        const candidateSamples = generatePrincipleSamples(p, seed, 6)
        // Filter out any active question in the current student's quiz attempt so answers are never spoiled
        const nonSpoilers = candidateSamples.filter((q) => !activeSet.has(q.fingerprint))
        examples[p.id] = nonSpoilers.length > 0 ? nonSpoilers[0] : null
      }
    }

    return examples
  }, [currentUnit.lessons, activeQuizFingerprints, sampleSeeds])

  // Filter lessons in the unit for Tab 2 search
  const filteredUnitLessons = useMemo(() => {
    if (!searchQuery.trim()) {
      return currentUnit.lessons
    }
    const q = searchQuery.toLowerCase().trim()
    return currentUnit.lessons.filter((l) => {
      const rem = l.remediation ?? getLessonRemediation(l, course.subject, course.grade)
      const matchesTitle = l.title.toLowerCase().includes(q)
      const matchesReading = l.reading.toLowerCase().includes(q)
      const matchesSteps = rem.simpleSteps.some((step) => step.toLowerCase().includes(q))
      const matchesWorked = rem.workedExample ? rem.workedExample.toLowerCase().includes(q) : false
      const matchesPrinciples = l.principles.some(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.standard.toLowerCase().includes(q)
      )
      const matchesActivity = Boolean(
        l.activity &&
          (l.activity.title.toLowerCase().includes(q) ||
            l.activity.description.toLowerCase().includes(q) ||
            l.activity.steps?.some((s) => s.toLowerCase().includes(q)) ||
            l.activity.materials?.some((m) => m.toLowerCase().includes(q)))
      )
      return (
        matchesTitle ||
        matchesReading ||
        matchesSteps ||
        matchesWorked ||
        matchesPrinciples ||
        matchesActivity
      )
    })
  }, [currentUnit.lessons, searchQuery, course.subject, course.grade])

  if (!isOpen) return null

  // Reusable renderer for a full lesson guide (identical in Tab 1 and Tab 2 accordion)
  const renderLessonGuide = (targetLesson: Lesson, rem: Remediation | null, isTab1: boolean) => {
    const targetRefs = isTab1 ? principleRefs : tab2PrincipleRefs

    return (
      <div className="textbook-lesson-flow">
        {/* QUICK JUMP CHIPS */}
        {targetLesson.principles.length > 1 && (
          <div className="textbook-chips-row">
            <span className="muted-sm" style={{ fontSize: '0.78rem', fontWeight: 600 }}>
              Jump to Principle:
            </span>
            {targetLesson.principles.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`std-tag ${isTab1 && highlightedPrincipleId === p.id ? 'chip-active' : ''}`}
                style={{ cursor: 'pointer', border: '1px solid var(--border)' }}
                onClick={() => {
                  const el = targetRefs.current[p.id]
                  if (typeof el?.scrollIntoView === 'function') {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  }
                }}
              >
                {p.title}
              </button>
            ))}
          </div>
        )}

        {/* SECTION 1: CORE CONCEPT READING */}
        <div className="textbook-section">
          <h4 className="textbook-section-title">
            <span>📚</span> Core Concept Explanation
          </h4>
          <div className="reading-body" style={{ fontSize: '0.92rem', padding: '0.85rem' }}>
            {targetLesson.reading}
          </div>
        </div>

        {/* SECTION 2: STEP-BY-STEP BREAKDOWN & WORKED MINI-EXAMPLE */}
        {rem && (
          <div className="textbook-section">
            <h4 className="textbook-section-title">
              <span>🎯</span> Step-by-Step Rule Guide
            </h4>
            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '0.85rem',
              }}
            >
              <ol style={{ paddingLeft: '1.2rem', margin: 0, lineHeight: 1.6, fontSize: '0.88rem' }}>
                {rem.simpleSteps.map((step, idx) => (
                  <li key={idx} style={{ marginBottom: '0.35rem' }}>
                    {step}
                  </li>
                ))}
              </ol>
              {rem.workedExample && (
                <div
                  style={{
                    marginTop: '0.65rem',
                    padding: '0.55rem 0.75rem',
                    background: 'rgba(59, 130, 246, 0.08)',
                    borderLeft: '3px solid var(--primary-bright)',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                  }}
                >
                  <strong>Worked Mini-Example:</strong> {rem.workedExample}
                </div>
              )}
            </div>
          </div>
        )}

        {/* SECTION 3: PRINCIPLE REFERENCE CARDS WITH NON-SPOILING WORKED EXAMPLES */}
        <div className="textbook-section">
          <h4 className="textbook-section-title">
            <span>💡</span> Key Principles &amp; Worked Examples
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {targetLesson.principles.map((p) => {
              const isHighlighted = isTab1 && highlightedPrincipleId === p.id
              const sample = workedExamples[p.id]

              return (
                <div
                  key={p.id}
                  ref={(el) => (targetRefs.current[p.id] = el)}
                  className={`principle-card ${isHighlighted ? 'principle-focus' : ''}`}
                  style={{
                    padding: '0.85rem',
                    transition: 'all 0.3s ease',
                    boxShadow: isHighlighted ? '0 0 0 2px var(--warning)' : undefined,
                  }}
                >
                  <div className="principle-top">
                    <span className="std-tag">Standard {p.standard}</span>
                    {isHighlighted && (
                      <span className="badge badge-warning">Currently Questioned</span>
                    )}
                  </div>
                  <h4 style={{ margin: '0.3rem 0 0.2rem', fontSize: '0.98rem' }}>{p.title}</h4>
                  <p className="muted-sm" style={{ margin: '0 0 0.6rem', fontSize: '0.86rem' }}>
                    {p.summary}
                  </p>

                  {/* WORKED SAMPLE PROBLEM */}
                  {sample && (
                    <div
                      style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: '6px',
                        padding: '0.7rem',
                        marginTop: '0.5rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '0.35rem',
                          flexWrap: 'wrap',
                          gap: '0.35rem',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            color: 'var(--primary-bright)',
                          }}
                        >
                          Practice Worked Example (Non-Spoiling)
                        </span>
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          style={{ padding: '0.15rem 0.45rem', fontSize: '0.75rem' }}
                          onClick={() => rollNewSample(p.id)}
                          title="Generate fresh sample numbers"
                        >
                          🎲 Fresh Example
                        </button>
                      </div>
                      <p style={{ margin: '0.2rem 0 0.45rem', fontSize: '0.86rem', fontWeight: 600 }}>
                        {sample.prompt}
                      </p>

                      {sample.choices && sample.choices.length > 0 && (
                        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', margin: '0.35rem 0' }}>
                          {sample.choices.map((c, cIdx) => {
                            const letter = String.fromCharCode(65 + cIdx)
                            const isCorrect = c === sample.answer
                            return (
                              <span
                                key={cIdx}
                                style={{
                                  padding: '0.15rem 0.45rem',
                                  borderRadius: '4px',
                                  fontSize: '0.78rem',
                                  border: isCorrect ? '1px solid var(--success)' : '1px solid var(--border)',
                                  background: isCorrect ? 'rgba(34, 197, 94, 0.12)' : 'var(--surface-alt)',
                                  fontWeight: isCorrect ? 600 : 400,
                                }}
                              >
                                ({letter}) {c} {isCorrect && '✓'}
                              </span>
                            )
                          })}
                        </div>
                      )}

                      <div
                        style={{
                          marginTop: '0.4rem',
                          padding: '0.45rem 0.6rem',
                          background: 'rgba(34, 197, 94, 0.08)',
                          borderRadius: '4px',
                          fontSize: '0.82rem',
                        }}
                      >
                        <span style={{ color: 'var(--success)', fontWeight: 700 }}>
                          Answer: {sample.answer}
                        </span>
                        <div className="muted-sm" style={{ marginTop: '0.15rem', lineHeight: 1.5 }}>
                          <strong>Solution:</strong> {sample.explanation}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* SECTION 4: HANDS-ON SUPPLEMENTAL INQUIRY ACTIVITY */}
        {targetLesson.activity && (
          <div className="textbook-section" style={{ marginTop: '1.25rem' }}>
            <h4 className="textbook-section-title">
              <span>🧪</span> Hands-on Activity: {targetLesson.activity.title}
            </h4>
            <div
              className="card"
              style={{
                background: 'var(--surface-alt)',
                borderLeft: '4px solid var(--accent)',
                padding: '0.85rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '0.45rem', alignItems: 'center', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                  <span className="badge badge-primary" style={{ textTransform: 'capitalize' }}>
                    {targetLesson.activity.type}
                  </span>
                  <span className="muted-sm">⏱ {targetLesson.activity.estimatedMinutes} min</span>
                </div>
                <p style={{ margin: 0, fontSize: '0.88rem', lineHeight: 1.5 }}>
                  {targetLesson.activity.description}
                </p>
              </div>

              {targetLesson.activity.materials && targetLesson.activity.materials.length > 0 && (
                <div
                  style={{
                    background: 'var(--surface)',
                    padding: '0.45rem 0.65rem',
                    borderRadius: '6px',
                    fontSize: '0.83rem',
                    border: '1px solid var(--border)',
                  }}
                >
                  <strong>📦 Materials Needed:</strong> {targetLesson.activity.materials.join(', ')}
                </div>
              )}

              {targetLesson.activity.steps && targetLesson.activity.steps.length > 0 && (
                <div style={{ fontSize: '0.86rem' }}>
                  <strong style={{ color: 'var(--primary-bright)' }}>Investigation Steps:</strong>
                  <ol style={{ paddingLeft: '1.25rem', margin: '0.35rem 0 0', lineHeight: 1.6 }}>
                    {targetLesson.activity.steps.map((step, idx) => (
                      <li key={idx} style={{ marginBottom: '0.25rem' }}>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {targetLesson.activity.reflectionPrompt && (
                <div
                  style={{
                    fontSize: '0.83rem',
                    fontStyle: 'italic',
                    color: 'var(--muted)',
                    background: 'var(--surface)',
                    padding: '0.45rem 0.65rem',
                    borderRadius: '6px',
                    borderLeft: '3px solid var(--warning)',
                  }}
                >
                  💭 <strong>Discussion / Journal Prompt:</strong> {targetLesson.activity.reflectionPrompt}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <aside className="textbook-panel" aria-label="Interactive Course Textbook">
      {/* PANEL HEADER */}
      <div className="textbook-header">
        <div className="textbook-header-info" style={{ flex: 1, minWidth: 0, marginRight: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.25rem' }}>📖</span>
            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Interactive Textbook</h3>
          </div>
          <div style={{ marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
            <span className="muted-sm" style={{ fontSize: '0.8rem', fontWeight: 600 }}>Unit:</span>
            <select
              className="input"
              style={{
                fontSize: '0.82rem',
                padding: '0.2rem 0.5rem',
                height: 'auto',
                maxWidth: '240px',
                borderRadius: '6px',
              }}
              value={currentUnit.id}
              onChange={(e) => {
                const selected = coreUnits.find((u) => u.id === e.target.value)
                if (selected) {
                  setCurrentUnitId(selected.id)
                  if (selected.lessons[0]) {
                    setCurrentLessonId(selected.lessons[0].id)
                  }
                  onSelectUnit?.(selected)
                }
              }}
              aria-label="Select Unit in Textbook"
            >
              {coreUnits.map((u, idx) => (
                <option key={u.id} value={u.id}>
                  Unit {idx + 1}: {u.title}
                </option>
              ))}
            </select>
            {(() => {
              const khanUrl = currentUnit.lessons?.find((l) => l.videoUrl?.includes('khanacademy.org'))?.videoUrl
              if (!khanUrl) return null
              return (
                <a
                  href={khanUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{
                    fontSize: '0.78rem',
                    padding: '0.2rem 0.45rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    color: 'var(--accent)',
                  }}
                  title="Open this unit on Khan Academy"
                >
                  <span>↗ Khan Unit</span>
                </a>
              )
            })()}
          </div>
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={onClose}
          aria-label="Close Textbook"
        >
          ✕ Close
        </button>
      </div>

      {/* TABS */}
      <div className="textbook-tabs">
        <button
          type="button"
          className={`textbook-tab ${activeTab === 'lesson' ? 'active' : ''}`}
          onClick={() => setActiveTab('lesson')}
        >
          📖 This Lesson Guide
        </button>
        <button
          type="button"
          className={`textbook-tab ${activeTab === 'unit' ? 'active' : ''}`}
          onClick={() => setActiveTab('unit')}
        >
          📚 Unit Chapters &amp; Search ({currentUnit.lessons.length})
        </button>
      </div>

      {/* CONTENT SCROLL CONTAINER */}
      <div className="textbook-body">
        {activeTab === 'lesson' && renderLessonGuide(currentLesson, currentRemediation, true)}

        {activeTab === 'unit' && (
          <div className="textbook-unit-flow">
            {/* SEARCH BAR */}
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="text"
                className="input"
                placeholder="🔍 Search all concepts, terms, rules, or standards in this unit..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ fontSize: '0.88rem' }}
              />
              {searchQuery && (
                <p className="muted-sm" style={{ margin: '0.35rem 0 0' }}>
                  Showing {filteredUnitLessons.length} matching lesson(s) in {currentUnit.title}
                </p>
              )}
            </div>

            {/* LESSON ACCORDIONS - FULLY FLESHED OUT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {filteredUnitLessons.map((l) => {
                const isCurrent = l.id === currentLesson.id
                const rem = l.remediation ?? getLessonRemediation(l, course.subject, course.grade)
                return (
                  <details
                    key={l.id}
                    open={isCurrent || Boolean(searchQuery)}
                    style={{
                      border: isCurrent ? '2px solid var(--primary-bright)' : '1px solid var(--border)',
                      borderRadius: '8px',
                      background: 'var(--surface-alt)',
                      padding: '0.75rem 0.85rem',
                    }}
                  >
                    <summary
                      style={{
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: '0.92rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.5rem',
                        flexWrap: 'wrap',
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <span>{isCurrent ? '👉 ' : '📖 '}</span>
                        <strong>{l.title}</strong>
                        {l.kind === 'unit_test' && <span className="badge badge-exam">Unit Exam</span>}
                      </span>
                      <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                        {isCurrent && <span className="badge badge-primary">Current Lesson</span>}
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          style={{ fontSize: '0.75rem', padding: '0.15rem 0.45rem' }}
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            setCurrentLessonId(l.id)
                            setActiveTab('lesson')
                            onSelectLesson?.(l, currentUnit)
                          }}
                          title="Focus on this lesson as primary guide"
                        >
                          Focus Guide →
                        </button>
                      </div>
                    </summary>

                    <div style={{ marginTop: '0.75rem', paddingTop: '0.65rem', borderTop: '1px solid var(--border)' }}>
                      {renderLessonGuide(l, rem, false)}
                    </div>
                  </details>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}
