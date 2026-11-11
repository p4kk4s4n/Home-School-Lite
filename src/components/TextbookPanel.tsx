import React, { useEffect, useMemo, useRef, useState } from 'react'
import { generatePrincipleSamples } from '../lib/worksheetGenerator'
import { Course, GeneratedQuestion, Lesson, Principle, Remediation, Unit } from '../types'

interface TextbookPanelProps {
  course: Course
  unit: Unit
  lesson: Lesson
  remediation?: Remediation | null
  activeQuizFingerprints?: string[]
  highlightedPrincipleId?: string | null
  isOpen: boolean
  onClose: () => void
}

export const TextbookPanel: React.FC<TextbookPanelProps> = ({
  course,
  unit,
  lesson,
  remediation,
  activeQuizFingerprints = [],
  highlightedPrincipleId = null,
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'lesson' | 'unit'>('lesson')
  const [searchQuery, setSearchQuery] = useState('')
  const [sampleSeeds, setSampleSeeds] = useState<Record<string, number>>({})

  const principleRefs = useRef<Record<string, HTMLDivElement | null>>({})

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

  const rollNewSample = (principleId: string) => {
    setSampleSeeds((prev) => ({
      ...prev,
      [principleId]: (prev[principleId] || Date.now()) + 7919,
    }))
  }

  // Pre-generate non-spoiling worked examples for each principle in this lesson
  const workedExamples = useMemo(() => {
    const examples: Record<string, GeneratedQuestion | null> = {}
    const activeSet = new Set(activeQuizFingerprints)

    for (const p of lesson.principles) {
      const seed = sampleSeeds[p.id] || 42
      const candidateSamples = generatePrincipleSamples(p, seed, 6)
      // Filter out any active question in the current student's quiz attempt so answers are never spoiled
      const nonSpoilers = candidateSamples.filter((q) => !activeSet.has(q.fingerprint))
      examples[p.id] = nonSpoilers.length > 0 ? nonSpoilers[0] : null
    }

    return examples
  }, [lesson.principles, activeQuizFingerprints, sampleSeeds])

  // Filter lessons in the unit for Tab 2 search
  const filteredUnitLessons = useMemo(() => {
    if (!searchQuery.trim()) {
      return unit.lessons
    }
    const q = searchQuery.toLowerCase().trim()
    return unit.lessons.filter((l) => {
      const matchesTitle = l.title.toLowerCase().includes(q)
      const matchesReading = l.reading.toLowerCase().includes(q)
      const matchesPrinciples = l.principles.some(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.standard.toLowerCase().includes(q)
      )
      return matchesTitle || matchesReading || matchesPrinciples
    })
  }, [unit.lessons, searchQuery])

  if (!isOpen) return null

  return (
    <aside className="textbook-panel" aria-label="Interactive Course Textbook">
      {/* PANEL HEADER */}
      <div className="textbook-header">
        <div className="textbook-header-info">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.25rem' }}>📖</span>
            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Interactive Textbook</h3>
          </div>
          <p className="muted-sm" style={{ margin: '0.2rem 0 0' }}>
            {course.title} • {unit.title}
          </p>
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
          📚 Unit Chapters &amp; Search ({unit.lessons.length})
        </button>
      </div>

      {/* CONTENT SCROLL CONTAINER */}
      <div className="textbook-body">
        {activeTab === 'lesson' && (
          <div className="textbook-lesson-flow">
            {/* QUICK JUMP CHIPS */}
            {lesson.principles.length > 1 && (
              <div className="textbook-chips-row">
                <span className="muted-sm" style={{ fontSize: '0.78rem', fontWeight: 600 }}>
                  Jump to Principle:
                </span>
                {lesson.principles.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    className={`std-tag ${highlightedPrincipleId === p.id ? 'chip-active' : ''}`}
                    style={{ cursor: 'pointer', border: '1px solid var(--border)' }}
                    onClick={() => {
                      const el = principleRefs.current[p.id]
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
                {lesson.reading}
              </div>
            </div>

            {/* SECTION 2: STEP-BY-STEP BREAKDOWN & WORKED MINI-EXAMPLE */}
            {remediation && (
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
                    {remediation.simpleSteps.map((step, idx) => (
                      <li key={idx} style={{ marginBottom: '0.35rem' }}>
                        {step}
                      </li>
                    ))}
                  </ol>
                  {remediation.workedExample && (
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
                      <strong>Worked Mini-Example:</strong> {remediation.workedExample}
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
                {lesson.principles.map((p) => {
                  const isHighlighted = highlightedPrincipleId === p.id
                  const sample = workedExamples[p.id]

                  return (
                    <div
                      key={p.id}
                      ref={(el) => (principleRefs.current[p.id] = el)}
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
          </div>
        )}

        {activeTab === 'unit' && (
          <div className="textbook-unit-flow">
            {/* SEARCH BAR */}
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="text"
                className="input"
                placeholder="🔍 Search all concepts, terms, or standards..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ fontSize: '0.88rem' }}
              />
              {searchQuery && (
                <p className="muted-sm" style={{ margin: '0.35rem 0 0' }}>
                  Showing {filteredUnitLessons.length} matching lesson(s) in {unit.title}
                </p>
              )}
            </div>

            {/* LESSON ACCORDIONS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {filteredUnitLessons.map((l) => {
                const isCurrent = l.id === lesson.id
                return (
                  <details
                    key={l.id}
                    open={isCurrent || Boolean(searchQuery)}
                    style={{
                      border: isCurrent ? '2px solid var(--primary-bright)' : '1px solid var(--border)',
                      borderRadius: '8px',
                      background: 'var(--surface-alt)',
                      padding: '0.65rem 0.85rem',
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
                      }}
                    >
                      <span>
                        {isCurrent ? '👉 ' : ''}
                        {l.title}
                      </span>
                      {isCurrent && <span className="badge badge-primary">Current Lesson</span>}
                    </summary>

                    <div style={{ marginTop: '0.65rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
                      <p className="reading-body" style={{ fontSize: '0.85rem', padding: '0.65rem', margin: '0 0 0.65rem' }}>
                        {l.reading}
                      </p>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                        {l.principles.map((p) => (
                          <div
                            key={p.id}
                            style={{
                              background: 'var(--surface)',
                              border: '1px solid var(--border)',
                              borderRadius: '6px',
                              padding: '0.5rem 0.65rem',
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <strong style={{ fontSize: '0.84rem' }}>{p.title}</strong>
                              <span className="std-tag" style={{ fontSize: '0.72rem' }}>
                                {p.standard}
                              </span>
                            </div>
                            <p className="muted-sm" style={{ margin: '0.2rem 0 0', fontSize: '0.8rem' }}>
                              {p.summary}
                            </p>
                          </div>
                        ))}
                      </div>
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
