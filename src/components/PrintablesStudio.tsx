import React, { useMemo, useState } from 'react'
import { Course, Student, TeacherResource, Unit } from '../types'

interface PrintablesStudioProps {
  course: Course
  student: Student | null
  onPrint?: (targetId: string) => void
}

/**
 * Parses markdown text into formatted React nodes.
 * Supports headings (##, ###), pipe tables (|...|), bullet lists (- or *),
 * numbered lists, bold text (**...**), and paragraphs.
 */
export const FormattedMarkdownBlock: React.FC<{ markdown: string }> = ({ markdown }) => {
  const renderedContent = useMemo(() => {
    if (!markdown) return null

    const lines = markdown.split(/\r?\n/)
    const elements: React.ReactNode[] = []
    let inTable = false
    let tableHeaders: string[] = []
    let tableRows: string[][] = []
    let inBulletList = false
    let bulletItems: string[] = []
    let inNumList = false
    let numItems: string[] = []

    const flushTable = (key: number) => {
      if (tableHeaders.length > 0 || tableRows.length > 0) {
        elements.push(
          <div key={`table-${key}`} className="table-responsive" style={{ margin: '0.85rem 0' }}>
            <table className="formatted-md-table">
              {tableHeaders.length > 0 && (
                <thead>
                  <tr>
                    {tableHeaders.map((th, idx) => (
                      <th key={idx}>{parseInlineFormatting(th)}</th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {tableRows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx}>{parseInlineFormatting(cell)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
      inTable = false
      tableHeaders = []
      tableRows = []
    }

    const flushBulletList = (key: number) => {
      if (bulletItems.length > 0) {
        elements.push(
          <ul key={`ul-${key}`} style={{ paddingLeft: '1.4rem', margin: '0.5rem 0 0.85rem', lineHeight: '1.65' }}>
            {bulletItems.map((item, idx) => (
              <li key={idx} style={{ marginBottom: '0.35rem' }}>
                {parseInlineFormatting(item)}
              </li>
            ))}
          </ul>
        )
        bulletItems = []
      }
      inBulletList = false
    }

    const flushNumList = (key: number) => {
      if (numItems.length > 0) {
        elements.push(
          <ol key={`ol-${key}`} style={{ paddingLeft: '1.4rem', margin: '0.5rem 0 0.85rem', lineHeight: '1.65' }}>
            {numItems.map((item, idx) => (
              <li key={idx} style={{ marginBottom: '0.35rem' }}>
                {parseInlineFormatting(item)}
              </li>
            ))}
          </ol>
        )
        numItems = []
      }
      inNumList = false
    }

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()

      // Empty line
      if (!line) {
        if (inTable) flushTable(i)
        if (inBulletList) flushBulletList(i)
        if (inNumList) flushNumList(i)
        continue
      }

      // Pipe table row
      if (line.startsWith('|') && line.endsWith('|')) {
        const cells = line
          .slice(1, -1)
          .split('|')
          .map((c) => c.trim())

        // Separator row e.g. |---|---|
        if (cells.every((c) => /^:?-+:?$/.test(c))) {
          continue
        }

        if (inBulletList) flushBulletList(i)
        if (inNumList) flushNumList(i)

        if (!inTable) {
          inTable = true
          tableHeaders = cells
        } else {
          tableRows.push(cells)
        }
        continue
      } else if (inTable) {
        flushTable(i)
      }

      // Headings
      if (line.startsWith('#### ')) {
        if (inBulletList) flushBulletList(i)
        if (inNumList) flushNumList(i)
        elements.push(
          <h5 key={i} style={{ margin: '0.85rem 0 0.35rem', fontSize: '0.98rem', fontWeight: 700, color: 'var(--primary-bright)' }}>
            {parseInlineFormatting(line.slice(5))}
          </h5>
        )
        continue
      }
      if (line.startsWith('### ')) {
        if (inBulletList) flushBulletList(i)
        if (inNumList) flushNumList(i)
        elements.push(
          <h4 key={i} style={{ margin: '1rem 0 0.45rem', fontSize: '1.08rem', fontWeight: 700, color: 'var(--primary-bright)' }}>
            {parseInlineFormatting(line.slice(4))}
          </h4>
        )
        continue
      }
      if (line.startsWith('## ')) {
        if (inBulletList) flushBulletList(i)
        if (inNumList) flushNumList(i)
        elements.push(
          <h3 key={i} style={{ margin: '1.15rem 0 0.5rem', fontSize: '1.2rem', fontWeight: 700 }}>
            {parseInlineFormatting(line.slice(3))}
          </h3>
        )
        continue
      }
      if (line.startsWith('# ')) {
        if (inBulletList) flushBulletList(i)
        if (inNumList) flushNumList(i)
        elements.push(
          <h2 key={i} style={{ margin: '1.25rem 0 0.6rem', fontSize: '1.35rem', fontWeight: 700 }}>
            {parseInlineFormatting(line.slice(2))}
          </h2>
        )
        continue
      }

      // Bullet list item
      if (line.startsWith('- ') || line.startsWith('* ')) {
        if (inNumList) flushNumList(i)
        inBulletList = true
        bulletItems.push(line.slice(2))
        continue
      }

      // Numbered list item e.g. "1. "
      const numMatch = line.match(/^(\d+)\.\s+(.*)$/)
      if (numMatch) {
        if (inBulletList) flushBulletList(i)
        inNumList = true
        numItems.push(numMatch[2])
        continue
      }

      // Regular paragraph
      if (inBulletList) flushBulletList(i)
      if (inNumList) flushNumList(i)
      elements.push(
        <p key={i} style={{ margin: '0.45rem 0 0.65rem', lineHeight: '1.65' }}>
          {parseInlineFormatting(line)}
        </p>
      )
    }

    if (inTable) flushTable(lines.length)
    if (inBulletList) flushBulletList(lines.length)
    if (inNumList) flushNumList(lines.length)

    return elements
  }, [markdown])

  return <div className="formatted-markdown">{renderedContent}</div>
}

/**
 * Handles inline bold (**text**), italics (*text*), and code (`code`).
 */
function parseInlineFormatting(text: string): React.ReactNode {
  if (!text) return ''

  // Split by inline markdown tokens
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g)

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={index}>{part.slice(1, -1)}</em>
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={index}
          style={{
            background: 'var(--surface-alt)',
            padding: '0.15rem 0.35rem',
            borderRadius: '4px',
            fontSize: '0.86em',
            border: '1px solid var(--border)',
          }}
        >
          {part.slice(1, -1)}
        </code>
      )
    }
    return part
  })
}

function getResourceBadge(kind: TeacherResource['kind']) {
  switch (kind) {
    case 'pacing_guide':
      return { icon: '📅', label: 'Pacing Guide', badgeClass: 'badge-primary' }
    case 'standards_map':
      return { icon: '🧭', label: 'Standards Crosswalk', badgeClass: 'badge-accent' }
    case 'printable':
      return { icon: '📐', label: 'Reference & Formulas', badgeClass: 'badge-success' }
    case 'assessment_rubric':
      return { icon: '📋', label: 'Assessment Rubric', badgeClass: 'badge-warning' }
    case 'discussion_guide':
      return { icon: '💬', label: 'Discussion Guide', badgeClass: 'badge-neutral' }
    default:
      return { icon: '📄', label: 'Curriculum Guide', badgeClass: 'badge-neutral' }
  }
}

export const PrintablesStudio: React.FC<PrintablesStudioProps> = ({ course, student, onPrint }) => {
  const [activeTab, setActiveTab] = useState<'guides' | 'unit_study' | 'templates'>('guides')
  const [selectedUnitId, setSelectedUnitId] = useState<string>('')
  const [selectedTemplate, setSelectedTemplate] = useState<string>('graph_paper')
  const [activePrintId, setActivePrintId] = useState<string>('')

  // Core units for study guide generator
  const coreUnits: Unit[] = useMemo(() => {
    return course.units.filter((u) => u.kind !== 'explore' && u.kind !== 'teacher_resources')
  }, [course])

  const activeStudyUnit: Unit = useMemo(() => {
    if (selectedUnitId) {
      const found = coreUnits.find((u) => u.id === selectedUnitId)
      if (found) return found
    }
    return coreUnits[0] || course.units[0]
  }, [coreUnits, selectedUnitId, course.units])

  // Teacher resources from teacher_resources unit
  const teacherResourceUnit = useMemo(() => {
    return course.units.find((u) => u.kind === 'teacher_resources') ?? null
  }, [course])

  const resources: TeacherResource[] = teacherResourceUnit?.resources || []

  const handlePrintDocument = (elementId: string) => {
    setActivePrintId(elementId)
    if (onPrint) {
      onPrint(elementId)
    }
    setTimeout(() => {
      window.print()
    }, 100)
  }

  return (
    <div className="printables-studio-container">
      {/* STUDIO NAVIGATION TABS */}
      <div className="no-print" style={{ marginBottom: '1.25rem' }}>
        <div className="printables-nav-tabs">
          <button
            type="button"
            className={`printables-nav-tab ${activeTab === 'guides' ? 'active' : ''}`}
            onClick={() => setActiveTab('guides')}
          >
            <span>📚</span>
            <div>
              <strong>Course Guides &amp; Rubrics</strong>
              <small>{resources.length} Formatted Guides</small>
            </div>
          </button>

          <button
            type="button"
            className={`printables-nav-tab ${activeTab === 'unit_study' ? 'active' : ''}`}
            onClick={() => setActiveTab('unit_study')}
          >
            <span>📖</span>
            <div>
              <strong>Unit Study Guide &amp; Cheat Sheet</strong>
              <small>Auto-Compiled Unit Handouts</small>
            </div>
          </button>

          <button
            type="button"
            className={`printables-nav-tab ${activeTab === 'templates' ? 'active' : ''}`}
            onClick={() => setActiveTab('templates')}
          >
            <span>🗂️</span>
            <div>
              <strong>Printable Organizers &amp; Templates</strong>
              <small>Graph Paper, CER, Fridge Checklist</small>
            </div>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: COURSE GUIDES, RUBRICS & STANDARDS MAPS                            */}
      {/* ========================================================================= */}
      {activeTab === 'guides' && (
        <section className="card" id="print-guides-hub">
          <div className="section-header">
            <div>
              <span className="badge badge-warning">FORMATTED CURRICULUM GUIDES</span>
              <h2>{course.title} Pacing, Rubrics &amp; Standards</h2>
              <p className="muted-sm">
                Clean, beautifully formatted curriculum resources with printable Markdown tables, weekly lesson pacing, and state standard crosswalks.
              </p>
            </div>
            <div className="no-print" style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => handlePrintDocument('all-course-guides')}
              >
                🖨️ Print All Guides
              </button>
            </div>
          </div>

          {resources.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center' }} className="muted">
              No additional guide documents defined for this course.
            </div>
          ) : (
            <div className="resource-card-grid" style={{ marginTop: '1.25rem' }}>
              {resources.map((res) => {
                const badge = getResourceBadge(res.kind)
                const docId = `print-doc-${res.id}`

                return (
                  <article
                    key={res.id}
                    id={docId}
                    className={`resource-doc-card ${activePrintId === docId ? 'print-target-active' : ''}`}
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: '10px',
                      padding: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <div style={{ flex: 1, minWidth: '240px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
                          <span style={{ fontSize: '1.2rem' }}>{badge.icon}</span>
                          <span className={`badge ${badge.badgeClass}`}>{badge.label}</span>
                        </div>
                        <h3 style={{ margin: 0, fontSize: '1.15rem' }}>{res.title}</h3>
                        <p className="muted-sm" style={{ margin: '0.25rem 0 0' }}>
                          {res.description}
                        </p>
                      </div>

                      <div className="no-print" style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                        {res.url && (
                          <a
                            href={res.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary btn-sm"
                          >
                            ↗ External Link
                          </a>
                        )}
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                          onClick={() => handlePrintDocument(docId)}
                        >
                          🖨️ Print This Guide
                        </button>
                      </div>
                    </div>

                    {/* FORMATTED DOCUMENT CONTENT */}
                    {res.body && (
                      <div
                        className="resource-doc-body"
                        style={{
                          marginTop: '0.5rem',
                          padding: '1rem 1.15rem',
                          borderRadius: '8px',
                          background: 'var(--surface-alt)',
                          border: '1px solid var(--border)',
                          fontSize: '0.92rem',
                        }}
                      >
                        <FormattedMarkdownBlock markdown={res.body} />
                      </div>
                    )}
                  </article>
                )
              })}
            </div>
          )}
        </section>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: DYNAMIC UNIT STUDY GUIDE & REFERENCE CHEAT SHEET BUILDER          */}
      {/* ========================================================================= */}
      {activeTab === 'unit_study' && (
        <section className="card" id="print-unit-study-guide">
          <div className="section-header">
            <div>
              <span className="badge badge-primary">DYNAMIC STUDY HANDOUT</span>
              <h2>Unit Study Guide &amp; Formula Reference Sheet</h2>
              <p className="muted-sm">
                Auto-compile all lesson summaries, core definitions, and step-by-step problem strategies for any unit into a printable desk reference.
              </p>
            </div>
            <div className="no-print" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <label className="field-label" style={{ margin: 0, minWidth: '220px' }}>
                Select Unit:
                <select
                  className="input"
                  value={activeStudyUnit.id}
                  onChange={(e) => setSelectedUnitId(e.target.value)}
                  style={{ marginTop: '0.25rem' }}
                >
                  {coreUnits.map((u, idx) => (
                    <option key={u.id} value={u.id}>
                      Unit {idx + 1}: {u.title} ({u.lessons.length} Lessons)
                    </option>
                  ))}
                </select>
              </label>

              <div style={{ paddingTop: '1.25rem' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handlePrintDocument('unit-study-sheet-printable')}
                >
                  🖨️ Print Unit Study Guide
                </button>
              </div>
            </div>
          </div>

          {/* PRINTABLE UNIT STUDY SHEET */}
          <div
            id="unit-study-sheet-printable"
            className="printable-sheet-preview"
            style={{
              marginTop: '1.5rem',
              background: '#ffffff',
              color: '#000000',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '1.5rem',
            }}
          >
            {/* SHEET HEADER */}
            <div style={{ borderBottom: '2px solid #000', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {course.title.toUpperCase()} • GRADE {course.grade}
                  </span>
                  <h1 style={{ margin: '0.2rem 0', fontSize: '1.5rem' }}>
                    {activeStudyUnit.title}: Complete Study Guide
                  </h1>
                  <div style={{ fontSize: '0.9rem', color: '#4b5563' }}>
                    Standards Covered: <strong>{activeStudyUnit.standards.join(', ')}</strong> • Total Skills: <strong>{activeStudyUnit.lessons.length}</strong>
                  </div>
                </div>
                <div style={{ textAlign: 'right', fontSize: '0.9rem' }}>
                  <div>Student: <strong>{student?.name || '__________________________'}</strong></div>
                  <div>Date: <strong>____________________</strong></div>
                </div>
              </div>
            </div>

            {/* SECTION 1: KEY PRINCIPLES & FORMULAS GRID */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ borderBottom: '1px solid #cbd5e1', paddingBottom: '0.35rem', marginBottom: '0.75rem', fontSize: '1.1rem' }}>
                🔑 Key Principles, Formulas &amp; Essential Rules
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem' }}>
                {activeStudyUnit.lessons.flatMap((l) => l.principles).map((p) => (
                  <div
                    key={p.id}
                    style={{
                      border: '1px solid #e2e8f0',
                      borderRadius: '6px',
                      padding: '0.65rem 0.85rem',
                      background: '#f8fafc',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                      <strong style={{ fontSize: '0.92rem' }}>{p.title}</strong>
                      <span style={{ fontSize: '0.75rem', background: '#e0e7ff', color: '#3730a3', padding: '0.1rem 0.4rem', borderRadius: '4px', fontWeight: 600 }}>
                        {p.standard}
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#334155', lineHeight: '1.5' }}>
                      {p.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 2: LESSON-BY-LESSON STEP-BY-STEP STRATEGIES */}
            <div>
              <h3 style={{ borderBottom: '1px solid #cbd5e1', paddingBottom: '0.35rem', marginBottom: '0.75rem', fontSize: '1.1rem' }}>
                📋 Lesson Breakdowns &amp; Step-by-Step Problem-Solving Guides
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {activeStudyUnit.lessons.map((lesson, idx) => (
                  <div
                    key={lesson.id}
                    style={{
                      border: '1px solid #e2e8f0',
                      borderRadius: '6px',
                      padding: '0.85rem 1rem',
                      pageBreakInside: 'avoid',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
                      <h4 style={{ margin: 0, fontSize: '1rem' }}>
                        {idx + 1}. {lesson.title}
                      </h4>
                      {lesson.partOf && (
                        <span style={{ fontSize: '0.78rem', color: '#64748b', fontStyle: 'italic' }}>
                          Topic: {lesson.partOf}
                        </span>
                      )}
                    </div>

                    <p style={{ margin: '0 0 0.5rem', fontSize: '0.86rem', color: '#334155', lineHeight: '1.55' }}>
                      {lesson.reading}
                    </p>

                    {lesson.remediation && (
                      <div style={{ background: '#f8fafc', borderLeft: '3px solid #3b82f6', padding: '0.5rem 0.75rem', borderRadius: '4px', marginTop: '0.4rem' }}>
                        <strong style={{ fontSize: '0.82rem', color: '#1e40af', textTransform: 'uppercase' }}>
                          Step-by-Step Method:
                        </strong>
                        <ol style={{ paddingLeft: '1.15rem', margin: '0.25rem 0', fontSize: '0.84rem', lineHeight: '1.5' }}>
                          {lesson.remediation.simpleSteps.map((step, sIdx) => (
                            <li key={sIdx}>{step}</li>
                          ))}
                        </ol>
                        {lesson.remediation.workedExample && (
                          <div style={{ fontSize: '0.82rem', marginTop: '0.3rem', color: '#1f2937' }}>
                            <strong>Worked Example:</strong> {lesson.remediation.workedExample}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: READY-TO-PRINT GRAPHIC ORGANIZERS & PAPER TEMPLATES                */}
      {/* ========================================================================= */}
      {activeTab === 'templates' && (
        <section className="card" id="print-templates-hub">
          <div className="section-header">
            <div>
              <span className="badge badge-accent">PRINTABLE PAPER TEMPLATES</span>
              <h2>Ready-to-Print Homeschool Graphic Organizers</h2>
              <p className="muted-sm">
                Crisp vector coordinate planes, lab report sheets, Cornell notes, Frayer model vocabulary cards, and fridge pacing checklists.
              </p>
            </div>
            <div className="no-print">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handlePrintDocument('active-template-printable')}
              >
                🖨️ Print Active Template
              </button>
            </div>
          </div>

          {/* TEMPLATE PICKER BUTTONS */}
          <div className="no-print" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem', marginBottom: '1.5rem' }}>
            {[
              { id: 'graph_paper', label: '📐 Coordinate Planes & Grid Paper' },
              { id: 'science_cer', label: '🔬 Science CER Lab Report' },
              { id: 'ela_organizer', label: '✍️ ELA Text Evidence & Essay Planner' },
              { id: 'social_source', label: '🏛️ Social Studies Primary Source Sheet' },
              { id: 'fridge_checklist', label: '📅 Weekly Homeschool Fridge Checklist' },
              { id: 'cornell_notes', label: '📝 Cornell Notes Template' },
              { id: 'frayer_model', label: '🔤 Vocabulary Frayer Model (4-Square)' },
            ].map((tmpl) => (
              <button
                key={tmpl.id}
                type="button"
                className={`btn btn-sm ${selectedTemplate === tmpl.id ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setSelectedTemplate(tmpl.id)}
              >
                {tmpl.label}
              </button>
            ))}
          </div>

          {/* TEMPLATE CANVAS CONTAINER */}
          <div
            id="active-template-printable"
            className="printable-sheet-preview"
            style={{
              background: '#ffffff',
              color: '#000000',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '1.75rem',
            }}
          >
            {/* TEMPLATE 1: COORDINATE PLANES & GRAPH PAPER */}
            {selectedTemplate === 'graph_paper' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #000', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                  <div>
                    <h2 style={{ margin: 0, fontSize: '1.35rem' }}>Coordinate Graph Paper &amp; Problem Workspace</h2>
                    <span style={{ fontSize: '0.85rem', color: '#4b5563' }}>Home-School-Lite Mathematics Study Aid</span>
                  </div>
                  <div style={{ textAlign: 'right', fontSize: '0.88rem' }}>
                    <div>Name: _______________________________</div>
                    <div>Date: ____________ Score: __________</div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                  {/* 4-QUADRANT GRID */}
                  <div style={{ border: '1px solid #cbd5e1', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
                    <h4 style={{ margin: '0 0 0.5rem', fontSize: '0.95rem' }}>4-Quadrant Coordinate Plane (-10 to +10)</h4>
                    <svg viewBox="-120 -120 240 240" style={{ width: '100%', maxWidth: '280px', height: 'auto' }}>
                      {/* Grid lines */}
                      {Array.from({ length: 21 }, (_, i) => i * 10 - 100).map((pos) => (
                        <React.Fragment key={pos}>
                          <line x1={pos} y1={-100} x2={pos} y2={100} stroke="#e2e8f0" strokeWidth="0.75" />
                          <line x1={-100} y1={pos} x2={100} y2={pos} stroke="#e2e8f0" strokeWidth="0.75" />
                        </React.Fragment>
                      ))}
                      {/* Main axes */}
                      <line x1={-105} y1={0} x2={105} y2={0} stroke="#0f172a" strokeWidth="1.5" />
                      <line x1={0} y1={-105} x2={0} y2={105} stroke="#0f172a" strokeWidth="1.5" />
                      {/* Arrows */}
                      <polygon points="105,0 100,-3 100,3" fill="#0f172a" />
                      <polygon points="-105,0 -100,-3 -100,3" fill="#0f172a" />
                      <polygon points="0,-105 -3,-100 3,-100" fill="#0f172a" />
                      <polygon points="0,105 -3,100 3,100" fill="#0f172a" />
                      {/* Axis Labels */}
                      <text x="110" y="4" fontSize="8" fontWeight="bold">x</text>
                      <text x="3" y="-108" fontSize="8" fontWeight="bold">y</text>
                      {/* Quadrant Markers */}
                      <text x="45" y="-45" fontSize="11" fill="#94a3b8" fontWeight="bold">Quadrant I</text>
                      <text x="-85" y="-45" fontSize="11" fill="#94a3b8" fontWeight="bold">Quadrant II</text>
                      <text x="-85" y="55" fontSize="11" fill="#94a3b8" fontWeight="bold">Quadrant III</text>
                      <text x="45" y="55" fontSize="11" fill="#94a3b8" fontWeight="bold">Quadrant IV</text>
                    </svg>
                    <div style={{ marginTop: '0.5rem', height: '40px', borderTop: '1px dashed #cbd5e1', paddingTop: '0.25rem', fontSize: '0.8rem', textAlign: 'left', color: '#64748b' }}>
                      Coordinates: (____, ____) • (____, ____) • Slope m = ______
                    </div>
                  </div>

                  {/* 1ST QUADRANT GRID */}
                  <div style={{ border: '1px solid #cbd5e1', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
                    <h4 style={{ margin: '0 0 0.5rem', fontSize: '0.95rem' }}>Quadrant I Positive Scale (0 to 10)</h4>
                    <svg viewBox="-15 -10 130 130" style={{ width: '100%', maxWidth: '280px', height: 'auto' }}>
                      {Array.from({ length: 11 }, (_, i) => i * 10).map((pos) => (
                        <React.Fragment key={pos}>
                          <line x1={pos} y1={0} x2={pos} y2={100} stroke="#e2e8f0" strokeWidth="0.75" />
                          <line x1={0} y1={pos} x2={100} y2={pos} stroke="#e2e8f0" strokeWidth="0.75" />
                          <text x={pos - 2} y="112" fontSize="6" fill="#64748b">{pos / 10}</text>
                          {pos > 0 && <text x="-10" y={102 - pos} fontSize="6" fill="#64748b">{pos / 10}</text>}
                        </React.Fragment>
                      ))}
                      <line x1={0} y1={100} x2={105} y2={100} stroke="#0f172a" strokeWidth="1.5" />
                      <line x1={0} y1={100} x2={0} y2={-5} stroke="#0f172a" strokeWidth="1.5" />
                      <text x="108" y="102" fontSize="7" fontWeight="bold">x</text>
                      <text x="-2" y="-7" fontSize="7" fontWeight="bold">y</text>
                    </svg>
                    <div style={{ marginTop: '0.5rem', height: '40px', borderTop: '1px dashed #cbd5e1', paddingTop: '0.25rem', fontSize: '0.8rem', textAlign: 'left', color: '#64748b' }}>
                      Ratios: y / x = ______ • Unit Rate = ______ per unit
                    </div>
                  </div>
                </div>

                {/* NUMBER LINE & SCRATCH WORKSPACE */}
                <div style={{ marginTop: '1.25rem', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '0.85rem 1rem' }}>
                  <h4 style={{ margin: '0 0 0.5rem', fontSize: '0.92rem' }}>Linear Number Line Reference</h4>
                  <svg viewBox="-110 -15 220 30" style={{ width: '100%', height: '35px' }}>
                    <line x1={-100} y1={0} x2={100} y2={0} stroke="#0f172a" strokeWidth="1.5" />
                    {Array.from({ length: 21 }, (_, i) => i * 10 - 100).map((pos, idx) => (
                      <React.Fragment key={pos}>
                        <line x1={pos} y1={-4} x2={pos} y2={4} stroke="#0f172a" strokeWidth={idx === 10 ? 1.5 : 0.75} />
                        <text x={pos - (idx < 10 ? 4 : 2)} y="14" fontSize="6" fill={idx === 10 ? '#000' : '#64748b'} fontWeight={idx === 10 ? 'bold' : 'normal'}>
                          {idx - 10}
                        </text>
                      </React.Fragment>
                    ))}
                  </svg>
                  <div style={{ minHeight: '120px', borderTop: '1px dashed #cbd5e1', marginTop: '0.75rem', paddingTop: '0.5rem', fontSize: '0.82rem', color: '#94a3b8' }}>
                    Scratch Calculations &amp; Step-by-Step Proofs:
                  </div>
                </div>
              </div>
            )}

            {/* TEMPLATE 2: SCIENCE LAB REPORT & CER WORKSHEET */}
            {selectedTemplate === 'science_cer' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #000', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                  <div>
                    <h2 style={{ margin: 0, fontSize: '1.35rem' }}>Scientific Investigation &amp; CER Lab Report</h2>
                    <span style={{ fontSize: '0.85rem', color: '#4b5563' }}>Claim • Evidence • Scientific Reasoning</span>
                  </div>
                  <div style={{ textAlign: 'right', fontSize: '0.88rem' }}>
                    <div>Investigator: __________________________</div>
                    <div>Date: _________ Lab / Simulation: _________</div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem' }}>
                  <div style={{ border: '1px solid #cbd5e1', padding: '0.65rem', borderRadius: '6px' }}>
                    <strong>1. Testable Question &amp; Phenomenon:</strong>
                    <div style={{ height: '35px' }} />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                    <div style={{ border: '1px solid #cbd5e1', padding: '0.65rem', borderRadius: '6px' }}>
                      <strong>2. Hypothesis (If... then... because...):</strong>
                      <div style={{ height: '55px' }} />
                    </div>
                    <div style={{ border: '1px solid #cbd5e1', padding: '0.65rem', borderRadius: '6px' }}>
                      <strong>3. Variables &amp; Controls:</strong>
                      <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>
                        Independent: _______________ Dependent: _______________ Control: _______________
                      </div>
                    </div>
                  </div>

                  {/* DATA TABLE */}
                  <div style={{ border: '1px solid #cbd5e1', padding: '0.65rem', borderRadius: '6px' }}>
                    <strong>4. Raw Experimental / Simulation Data Table:</strong>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '0.4rem', fontSize: '0.85rem' }}>
                      <thead>
                        <tr style={{ background: '#f1f5f9', borderBottom: '1px solid #cbd5e1' }}>
                          <th style={{ padding: '0.4rem', border: '1px solid #cbd5e1' }}>Trial #</th>
                          <th style={{ padding: '0.4rem', border: '1px solid #cbd5e1' }}>Independent Variable Setting</th>
                          <th style={{ padding: '0.4rem', border: '1px solid #cbd5e1' }}>Measured Outcome / Quantity</th>
                          <th style={{ padding: '0.4rem', border: '1px solid #cbd5e1' }}>Qualitative Observations</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[1, 2, 3, 4].map((t) => (
                          <tr key={t} style={{ height: '26px' }}>
                            <td style={{ border: '1px solid #cbd5e1', textAlign: 'center' }}>Trial {t}</td>
                            <td style={{ border: '1px solid #cbd5e1' }} />
                            <td style={{ border: '1px solid #cbd5e1' }} />
                            <td style={{ border: '1px solid #cbd5e1' }} />
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* CER 3-BOX FRAMEWORK */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    <div style={{ border: '2px solid #3b82f6', borderRadius: '6px', padding: '0.65rem' }}>
                      <strong style={{ color: '#1e40af' }}>📢 CLAIM (1–2 concise sentences answering the testable question):</strong>
                      <div style={{ height: '40px' }} />
                    </div>
                    <div style={{ border: '2px solid #10b981', borderRadius: '6px', padding: '0.65rem' }}>
                      <strong style={{ color: '#047857' }}>📊 EVIDENCE (Specific numerical data, measurements, and observed trends):</strong>
                      <div style={{ height: '55px' }} />
                    </div>
                    <div style={{ border: '2px solid #8b5cf6', borderRadius: '6px', padding: '0.65rem' }}>
                      <strong style={{ color: '#6d28d9' }}>🧠 SCIENTIFIC REASONING (Scientific law, biological/physical rule explaining why the evidence supports your claim):</strong>
                      <div style={{ height: '65px' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TEMPLATE 3: ELA TEXT EVIDENCE & ESSAY PLANNER */}
            {selectedTemplate === 'ela_organizer' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #000', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                  <div>
                    <h2 style={{ margin: 0, fontSize: '1.35rem' }}>Textual Evidence &amp; Argumentative Essay Planner</h2>
                    <span style={{ fontSize: '0.85rem', color: '#4b5563' }}>Claim • Text Citations • Elaboration • Rebuttal</span>
                  </div>
                  <div style={{ textAlign: 'right', fontSize: '0.88rem' }}>
                    <div>Author: __________________________</div>
                    <div>Text / Title: ______________________</div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem' }}>
                  <div style={{ border: '1px solid #cbd5e1', padding: '0.65rem', borderRadius: '6px' }}>
                    <strong>Central Thesis / Argumentative Claim:</strong>
                    <div style={{ height: '40px' }} />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                    {[1, 2, 3].map((num) => (
                      <div key={num} style={{ border: '1px solid #cbd5e1', borderRadius: '6px', padding: '0.65rem' }}>
                        <strong>Quote / Evidence #{num}:</strong>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>"Direct quote with paragraph/page #"</div>
                        <div style={{ height: '60px', borderBottom: '1px dashed #cbd5e1', marginBottom: '0.35rem' }} />
                        <strong>Analysis &amp; Elaboration:</strong>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>How does this prove your claim?</div>
                        <div style={{ height: '60px' }} />
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                    <div style={{ border: '1px solid #cbd5e1', padding: '0.65rem', borderRadius: '6px' }}>
                      <strong>Counterclaim (The opposing argument):</strong>
                      <div style={{ height: '45px' }} />
                    </div>
                    <div style={{ border: '1px solid #cbd5e1', padding: '0.65rem', borderRadius: '6px' }}>
                      <strong>Rebuttal (Why the opposing premise is flawed):</strong>
                      <div style={{ height: '45px' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TEMPLATE 4: SOCIAL STUDIES PRIMARY SOURCE & TIMELINE SHEET */}
            {selectedTemplate === 'social_source' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #000', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                  <div>
                    <h2 style={{ margin: 0, fontSize: '1.35rem' }}>Historical Primary Source Analysis &amp; Timeline</h2>
                    <span style={{ fontSize: '0.85rem', color: '#4b5563' }}>5W+H • Point of View • Geographic Context • Chronology</span>
                  </div>
                  <div style={{ textAlign: 'right', fontSize: '0.88rem' }}>
                    <div>Historian: __________________________</div>
                    <div>Date: _____________________________</div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', fontSize: '0.88rem' }}>
                  <div style={{ border: '1px solid #cbd5e1', padding: '0.65rem', borderRadius: '6px' }}>
                    <strong>1. Document Identification:</strong>
                    <div style={{ marginTop: '0.35rem', lineHeight: '1.8' }}>
                      Title: ____________________________________________<br />
                      Author / Creator: _________________________________<br />
                      Date &amp; Location: ________________________________<br />
                      Type: [ ] Speech [ ] Letter [ ] Law [ ] Artifact [ ] Map
                    </div>
                  </div>

                  <div style={{ border: '1px solid #cbd5e1', padding: '0.65rem', borderRadius: '6px' }}>
                    <strong>2. Author's Point of View &amp; Purpose:</strong>
                    <div style={{ height: '65px', color: '#64748b', fontSize: '0.8rem' }}>
                      Why was this document created? What was the author's bias, perspective, or audience?
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '0.85rem', border: '1px solid #cbd5e1', padding: '0.65rem', borderRadius: '6px', fontSize: '0.88rem' }}>
                  <strong>3. Chronological Event Timeline &amp; Causal Flow:</strong>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem', marginTop: '0.5rem', textAlign: 'center' }}>
                    {[
                      { step: 'Event 1 (Cause)', desc: 'Prior Condition' },
                      { step: 'Event 2 (Catalyst)', desc: 'Immediate Trigger' },
                      { step: 'Event 3 (Action)', desc: 'Core Historical Event' },
                      { step: 'Event 4 (Effect)', desc: 'Short-Term Result' },
                      { step: 'Event 5 (Legacy)', desc: 'Long-Term Impact' },
                    ].map((st, i) => (
                      <div key={i} style={{ flex: 1, border: '1px solid #cbd5e1', borderRadius: '4px', padding: '0.4rem' }}>
                        <strong style={{ fontSize: '0.78rem' }}>{st.step}</strong>
                        <div style={{ height: '65px' }} />
                        <span style={{ fontSize: '0.7rem', color: '#64748b' }}>{st.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TEMPLATE 5: WEEKLY HOMESCHOOL FRIDGE CHECKLIST */}
            {selectedTemplate === 'fridge_checklist' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #000', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                  <div>
                    <h2 style={{ margin: 0, fontSize: '1.35rem' }}>Weekly Homeschool Pacing &amp; Fridge Checklist</h2>
                    <span style={{ fontSize: '0.85rem', color: '#4b5563' }}>Monday through Friday Mastery Goals</span>
                  </div>
                  <div style={{ textAlign: 'right', fontSize: '0.88rem' }}>
                    <div>Student: <strong>{student?.name || '______________________'}</strong></div>
                    <div>Week of: _______________________</div>
                  </div>
                </div>

                <table className="fridge-checklist-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                  <thead>
                    <tr style={{ background: '#f1f5f9', borderBottom: '2px solid #94a3b8' }}>
                      <th style={{ padding: '0.55rem', border: '1px solid #cbd5e1' }}>Subject</th>
                      <th style={{ padding: '0.55rem', border: '1px solid #cbd5e1' }}>Monday</th>
                      <th style={{ padding: '0.55rem', border: '1px solid #cbd5e1' }}>Tuesday</th>
                      <th style={{ padding: '0.55rem', border: '1px solid #cbd5e1' }}>Wednesday</th>
                      <th style={{ padding: '0.55rem', border: '1px solid #cbd5e1' }}>Thursday</th>
                      <th style={{ padding: '0.55rem', border: '1px solid #cbd5e1' }}>Friday Wrap-up</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { icon: '📐', name: 'Mathematics' },
                      { icon: '🔬', name: 'Science & Labs' },
                      { icon: '📚', name: 'Language Arts' },
                      { icon: '🏛️', name: 'Social Studies' },
                      { icon: '🧭', name: 'Enrichment / Explore' },
                    ].map((row) => (
                      <tr key={row.name} style={{ height: '48px' }}>
                        <td style={{ padding: '0.5rem', border: '1px solid #cbd5e1', fontWeight: 600, background: '#f8fafc', whiteSpace: 'nowrap' }}>
                          {row.icon} {row.name}
                        </td>
                        {[1, 2, 3, 4, 5].map((d) => (
                          <td key={d} style={{ border: '1px solid #cbd5e1', padding: '0.35rem', verticalAlign: 'top' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.78rem' }}>
                              <span>[ ]</span>
                              <span>Score: ___%</span>
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px dashed #cbd5e1', fontSize: '0.85rem' }}>
                  <div>Parent Weekly Check-in Signature: __________________________________</div>
                  <div>Weekly Mastery Goal: [ ] 100% Met [ ] Needs Focus</div>
                </div>
              </div>
            )}

            {/* TEMPLATE 6: CORNELL NOTES TEMPLATE */}
            {selectedTemplate === 'cornell_notes' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #000', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                  <div>
                    <h2 style={{ margin: 0, fontSize: '1.35rem' }}>Cornell Note-Taking System</h2>
                    <span style={{ fontSize: '0.85rem', color: '#4b5563' }}>Cues &amp; Questions • Notes &amp; Diagrams • Reflection Summary</span>
                  </div>
                  <div style={{ textAlign: 'right', fontSize: '0.88rem' }}>
                    <div>Student: __________________________</div>
                    <div>Topic: ________________ Date: ______</div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', minHeight: '340px', border: '1px solid #cbd5e1', borderRadius: '6px' }}>
                  {/* LEFT CUE COLUMN */}
                  <div style={{ borderRight: '2px solid #94a3b8', padding: '0.75rem', background: '#f8fafc' }}>
                    <strong style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#475569' }}>
                      Cues &amp; Questions
                    </strong>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', margin: '0.25rem 0 0.5rem' }}>
                      • Key vocab<br />• Study questions<br />• Formula triggers
                    </div>
                  </div>

                  {/* RIGHT NOTES COLUMN */}
                  <div style={{ padding: '0.75rem' }}>
                    <strong style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#475569' }}>
                      Lecture &amp; Reading Notes
                    </strong>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', margin: '0.25rem 0 0.5rem' }}>
                      • Definitions • Worked steps • Examples &amp; diagrams
                    </div>
                  </div>
                </div>

                {/* BOTTOM SUMMARY BLOCK */}
                <div style={{ marginTop: '0.85rem', border: '1px solid #cbd5e1', borderRadius: '6px', padding: '0.75rem' }}>
                  <strong style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#1e40af' }}>
                    Summary (Synthesize big ideas in 2–3 sentences):
                  </strong>
                  <div style={{ height: '65px' }} />
                </div>
              </div>
            )}

            {/* TEMPLATE 7: VOCABULARY FRAYER MODEL (4-SQUARE) */}
            {selectedTemplate === 'frayer_model' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #000', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                  <div>
                    <h2 style={{ margin: 0, fontSize: '1.35rem' }}>Vocabulary Deep-Dive: Frayer Model (4-Square)</h2>
                    <span style={{ fontSize: '0.85rem', color: '#4b5563' }}>Academic Language &amp; Conceptual Mastery</span>
                  </div>
                  <div style={{ textAlign: 'right', fontSize: '0.88rem' }}>
                    <div>Student: __________________________</div>
                    <div>Course: ___________________________</div>
                  </div>
                </div>

                {/* FRAYER GRID */}
                <div style={{ position: 'relative', border: '2px solid #0f172a', borderRadius: '8px', minHeight: '360px' }}>
                  {/* CENTER WORD CIRCLE */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '160px',
                      height: '70px',
                      borderRadius: '8px',
                      background: '#eff6ff',
                      border: '2px solid #3b82f6',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      zIndex: 10,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    }}
                  >
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1e40af', textTransform: 'uppercase' }}>Target Word</span>
                    <strong style={{ fontSize: '1rem', color: '#0f172a' }}>[ Vocabulary Term ]</strong>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '360px' }}>
                    {/* QUADRANT 1: DEFINITION */}
                    <div style={{ borderRight: '1px solid #94a3b8', borderBottom: '1px solid #94a3b8', padding: '0.85rem' }}>
                      <strong style={{ fontSize: '0.9rem', color: '#1e40af' }}>1. Formal Definition (In student's own words):</strong>
                      <div style={{ height: '110px' }} />
                    </div>

                    {/* QUADRANT 2: CHARACTERISTICS / FACTS */}
                    <div style={{ borderBottom: '1px solid #94a3b8', padding: '0.85rem' }}>
                      <strong style={{ fontSize: '0.9rem', color: '#047857' }}>2. Facts &amp; Characteristics:</strong>
                      <div style={{ height: '110px' }} />
                    </div>

                    {/* QUADRANT 3: EXAMPLES */}
                    <div style={{ borderRight: '1px solid #94a3b8', padding: '0.85rem' }}>
                      <strong style={{ fontSize: '0.9rem', color: '#b45309' }}>3. Real-World Examples:</strong>
                      <div style={{ height: '110px' }} />
                    </div>

                    {/* QUADRANT 4: NON-EXAMPLES */}
                    <div style={{ padding: '0.85rem' }}>
                      <strong style={{ fontSize: '0.9rem', color: '#b91c1c' }}>4. Non-Examples / Common Misconceptions:</strong>
                      <div style={{ height: '110px' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  )
}
