import React, { useMemo, useState } from 'react'
import { PrintablesStudio } from '../components/PrintablesStudio'
import { useApp } from '../context/AppContext'
import { getCoursesForGrade } from '../lib/curriculum'
import { generatePrincipleSamples, generateWorksheet } from '../lib/worksheetGenerator'

export const TeacherResourcesPage: React.FC = () => {
  const {
    students,
    activeStudent,
    isParentUnlocked,
    unlockParent,
    lockParent,
    settings,
  } = useApp()

  // Student and course selection
  const [selectedStudentId, setSelectedStudentId] = useState<string>(() => activeStudent?.id ?? '')
  const [selectedCourseId, setSelectedCourseId] = useState<string>('')
  const [teacherUnitFilter, setTeacherUnitFilter] = useState<string>('all')
  const [sampleSeeds, setSampleSeeds] = useState<Record<string, number>>({})

  const rerollSampleSeed = (principleId: string) => {
    setSampleSeeds((prev) => ({
      ...prev,
      [principleId]: (prev[principleId] || Date.now()) + 17,
    }))
  }

  // Worksheet generator state
  const [worksheetUnitId, setWorksheetUnitId] = useState<string>('all')
  const [worksheetPrincipleId, setWorksheetPrincipleId] = useState<string>('')
  const [worksheetCount, setWorksheetCount] = useState<number>(10)
  const [worksheetSeed, setWorksheetSeed] = useState<number>(42)
  const [worksheetMode, setWorksheetMode] = useState<'student' | 'teacher'>('student')

  // PIN gate state
  const [pinInput, setPinInput] = useState('')
  const [pinError, setPinError] = useState('')

  // Target student for resources
  const targetStudent = useMemo(() => {
    return students.find((s) => s.id === selectedStudentId) ?? activeStudent ?? students[0] ?? null
  }, [students, selectedStudentId, activeStudent])

  // Courses available for target student's grade
  const targetCourses = useMemo(() => {
    if (!targetStudent) return []
    return getCoursesForGrade(targetStudent.grade, settings.includeOhioAdjustments ?? true)
  }, [targetStudent, settings.includeOhioAdjustments])

  // Active course
  const activeTeacherCourse = useMemo(() => {
    if (selectedCourseId) {
      return targetCourses.find((c) => c.id === selectedCourseId) ?? targetCourses[0] ?? null
    }
    return targetCourses[0] ?? null
  }, [selectedCourseId, targetCourses])

  // Core units for active course
  const teacherCoreUnits = useMemo(() => {
    if (!activeTeacherCourse) return []
    return activeTeacherCourse.units.filter((u) => u.kind !== 'explore' && u.kind !== 'teacher_resources')
  }, [activeTeacherCourse])

  const totalCoreLessonsInTeacherCourse = useMemo(() => {
    return teacherCoreUnits.reduce((acc, u) => acc + u.lessons.length, 0)
  }, [teacherCoreUnits])

  // Available principles for worksheet generator
  const availableWorksheetPrinciples = useMemo(() => {
    if (!activeTeacherCourse) return []
    const units =
      worksheetUnitId === 'all'
        ? teacherCoreUnits
        : teacherCoreUnits.filter((u) => u.id === worksheetUnitId)
    return units.flatMap((u) => u.lessons.flatMap((l) => l.principles))
  }, [activeTeacherCourse, teacherCoreUnits, worksheetUnitId])

  // Generated worksheet questions
  const generatedWorksheetQuestions = useMemo(() => {
    if (!activeTeacherCourse) return []
    return generateWorksheet({
      course: activeTeacherCourse,
      unitId: worksheetUnitId,
      principleId: worksheetPrincipleId || undefined,
      seed: worksheetSeed,
      questionCount: worksheetCount,
    })
  }, [activeTeacherCourse, worksheetUnitId, worksheetPrincipleId, worksheetSeed, worksheetCount])

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault()
    if (unlockParent(pinInput)) {
      setPinInput('')
      setPinError('')
    } else {
      setPinError('Incorrect Parent PIN. (Default PIN is 1234)')
    }
  }

  return (
    <div className="page-stack">
      {!isParentUnlocked ? (
        <section className="card pin-gate-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🔒</span>
            <div>
              <h2 style={{ margin: 0 }}>Teacher Resources Portal (PIN Protected)</h2>
              <span className="badge badge-accent" style={{ marginTop: '0.25rem' }}>Parent &amp; Educator Access Only</span>
            </div>
          </div>
          <p className="muted">
            Pacing guides, answer keys with step-by-step solutions, printable study guides, and Ohio/National standards crosswalks are protected to keep quizzes fair and student progress honest. Enter your Parent PIN to unlock.{' '}
            <strong>(Default PIN: 1234)</strong>
          </p>
          <form onSubmit={handleUnlock} className="pin-form" style={{ marginTop: '1.25rem' }}>
            <input
              type="password"
              className="input pin-input"
              placeholder="Enter PIN (1234)"
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value)}
              aria-label="Parent PIN"
              autoFocus
            />
            <button type="submit" className="btn btn-primary">
              Unlock Teacher Portal
            </button>
          </form>
          {pinError && <p className="text-danger" style={{ marginTop: '0.75rem' }}>{pinError}</p>}
        </section>
      ) : (
        <>
          {/* HEADER & COURSE / STUDENT PICKER */}
          <section className="card">
            <div className="section-header">
              <div>
                <span className="course-subject-tag">PARENT EDUCATOR DASHBOARD</span>
                <h2>📚 Teacher Resources, Pacing Guides &amp; Answer Keys</h2>
                <p className="muted">
                  Full curriculum pacing guides, step-by-step answer keys, algorithmic paper worksheet generator, and ready-to-print homeschool templates.
                </p>
              </div>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={lockParent}
              >
                🔒 Lock Parent Portal
              </button>
            </div>

            <div style={{ marginTop: '1.25rem', display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
              {students.length > 1 && (
                <label className="field-label" style={{ minWidth: '220px', margin: 0 }}>
                  Active Student:
                  <select
                    className="input"
                    value={selectedStudentId}
                    onChange={(e) => {
                      setSelectedStudentId(e.target.value)
                      setSelectedCourseId('')
                      setWorksheetUnitId('all')
                      setWorksheetPrincipleId('')
                    }}
                    style={{ marginTop: '0.35rem' }}
                  >
                    {students.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} (Grade {s.grade})
                      </option>
                    ))}
                  </select>
                </label>
              )}

              <label className="field-label" style={{ minWidth: '280px', margin: 0 }}>
                Select Subject / Course:
                <select
                  className="input"
                  value={activeTeacherCourse?.id ?? ''}
                  onChange={(e) => {
                    setSelectedCourseId(e.target.value)
                    setWorksheetUnitId('all')
                    setWorksheetPrincipleId('')
                  }}
                  style={{ marginTop: '0.35rem' }}
                >
                  {targetCourses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title} (Grade {c.grade})
                    </option>
                  ))}
                </select>
              </label>

              {targetStudent && (
                <div style={{ fontSize: '0.9rem', color: 'var(--muted)', paddingTop: students.length > 1 ? '1.25rem' : '0' }}>
                  Viewing resources for: <strong>{targetStudent.name}</strong> (Grade {targetStudent.grade})
                </div>
              )}
            </div>
          </section>

          {activeTeacherCourse && (
            <>
              {/* SECTION 1: COURSE PACING & TIMELINE */}
              <section className="card">
                <div className="section-header">
                  <div>
                    <span className="badge badge-primary">PACING CALCULATOR</span>
                    <h2>36-Week Pacing Guide: {activeTeacherCourse.title}</h2>
                    <p className="muted-sm">
                      Total Core Units: <strong>{teacherCoreUnits.length}</strong> • Total Core Lessons &amp; Checks: <strong>{totalCoreLessonsInTeacherCourse}</strong>
                    </p>
                  </div>
                </div>

                <div className="principles-grid" style={{ marginTop: '0.75rem' }}>
                  <div className="card" style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)' }}>
                    <span className="stat-label">Target School Year End</span>
                    <strong style={{ fontSize: '1.25rem', color: 'var(--primary-bright)' }}>
                      {targetStudent?.targetEndDate ? new Date(targetStudent.targetEndDate).toLocaleDateString() : 'June 15'}
                    </strong>
                    <p className="muted-sm" style={{ marginTop: '0.25rem' }}>
                      Configured in student settings
                    </p>
                  </div>
                  <div className="card" style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)' }}>
                    <span className="stat-label">Recommended Pace</span>
                    <strong style={{ fontSize: '1.25rem', color: 'var(--success)' }}>
                      ~{Math.max(1, Math.round(totalCoreLessonsInTeacherCourse / 36 * 10) / 10)} Lessons / Week
                    </strong>
                    <p className="muted-sm" style={{ marginTop: '0.25rem' }}>
                      Keeps student on track for complete mastery
                    </p>
                  </div>
                  <div className="card" style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)' }}>
                    <span className="stat-label">Daily Study Time</span>
                    <strong style={{ fontSize: '1.25rem', color: 'var(--accent)' }}>
                      10–15 Minutes / Day
                    </strong>
                    <p className="muted-sm" style={{ marginTop: '0.25rem' }}>
                      Micro-lesson + mastery check
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: '1.25rem', overflowX: 'auto' }}>
                  <table className="student-list" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                    <thead>
                      <tr style={{ textAlign: 'left', borderBottom: '2px solid var(--border)' }}>
                        <th style={{ padding: '0.5rem' }}>Unit</th>
                        <th style={{ padding: '0.5rem' }}>Title</th>
                        <th style={{ padding: '0.5rem' }}>Lessons</th>
                        <th style={{ padding: '0.5rem' }}>Standards Covered</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teacherCoreUnits.map((u, idx) => (
                        <tr key={u.id} style={{ borderBottom: '1px solid var(--border)' }}>
                          <td style={{ padding: '0.5rem', fontWeight: 600 }}>Unit {idx + 1}</td>
                          <td style={{ padding: '0.5rem' }}>{u.title}</td>
                          <td style={{ padding: '0.5rem' }}>{u.lessons.length} lessons</td>
                          <td style={{ padding: '0.5rem' }}>
                            <span className="muted-sm">{u.standards.join(', ')}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECTION 2: INTERACTIVE WORKSHEET & QUIZ GENERATOR STUDIO */}
              <section className="card">
                <div className="section-header">
                  <div>
                    <span className="badge badge-accent">ALGORITHMIC TEST STUDIO</span>
                    <h2>📝 Printable Multiple-Choice Worksheet &amp; Quiz Generator</h2>
                    <p className="muted-sm">
                      Generate custom multiple-choice paper practice worksheets and teacher answer keys powered by the algorithmic math &amp; curriculum question generators.
                    </p>
                  </div>
                  <div className="no-print" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => window.print()}
                    >
                      🖨️ Print / Save PDF
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => setWorksheetSeed((prev) => prev + 1)}
                    >
                      🎲 Regenerate Numbers
                    </button>
                  </div>
                </div>

                <div className="no-print" style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <label className="field-label" style={{ minWidth: '200px', margin: 0 }}>
                    Scope / Unit:
                    <select
                      className="input"
                      value={worksheetUnitId}
                      onChange={(e) => {
                        setWorksheetUnitId(e.target.value)
                        setWorksheetPrincipleId('')
                      }}
                      style={{ marginTop: '0.35rem' }}
                    >
                      <option value="all">All Units (Entire Course)</option>
                      {teacherCoreUnits.map((u) => (
                        <option key={u.id} value={u.id}>
                          {u.title}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="field-label" style={{ minWidth: '220px', margin: 0 }}>
                    Target Skill / Principle:
                    <select
                      className="input"
                      value={worksheetPrincipleId}
                      onChange={(e) => setWorksheetPrincipleId(e.target.value)}
                      style={{ marginTop: '0.35rem' }}
                    >
                      <option value="">All Skills in Selected Scope ({availableWorksheetPrinciples.length})</option>
                      {availableWorksheetPrinciples.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.title} ({p.standard})
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="field-label" style={{ minWidth: '130px', margin: 0 }}>
                    Question Count:
                    <select
                      className="input"
                      value={worksheetCount}
                      onChange={(e) => setWorksheetCount(Number(e.target.value))}
                      style={{ marginTop: '0.35rem' }}
                    >
                      <option value={5}>5 Questions</option>
                      <option value={10}>10 Questions</option>
                      <option value={15}>15 Questions</option>
                      <option value={20}>20 Questions</option>
                    </select>
                  </label>

                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '1.25rem' }}>
                    <button
                      type="button"
                      className={`btn btn-sm ${worksheetMode === 'student' ? 'btn-primary' : 'btn-secondary'}`}
                      onClick={() => setWorksheetMode('student')}
                    >
                      📄 Student Test (Answers Hidden)
                    </button>
                    <button
                      type="button"
                      className={`btn btn-sm ${worksheetMode === 'teacher' ? 'btn-accent' : 'btn-secondary'}`}
                      onClick={() => setWorksheetMode('teacher')}
                    >
                      🔑 Teacher Key (With Solutions)
                    </button>
                  </div>
                </div>

                {/* PRINTABLE WORKSHEET VIEW */}
                <div className="worksheet-container" style={{ marginTop: '1.5rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem' }}>
                  <div className="worksheet-header-block" style={{ borderBottom: '2px solid var(--border)', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                      <div>
                        <h2 style={{ margin: 0, fontSize: '1.35rem' }}>{activeTeacherCourse.title} Practice Assessment</h2>
                        <div className="muted-sm" style={{ marginTop: '0.2rem' }}>
                          Grade {activeTeacherCourse.grade} • {worksheetUnitId === 'all' ? 'Comprehensive Assessment' : teacherCoreUnits.find((u) => u.id === worksheetUnitId)?.title}
                          {worksheetPrincipleId && ` • Focus: ${availableWorksheetPrinciples.find((p) => p.id === worksheetPrincipleId)?.title}`}
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span className={`badge ${worksheetMode === 'teacher' ? 'badge-exam' : 'badge-neutral'}`}>
                          {worksheetMode === 'teacher' ? 'TEACHER ANSWER KEY (DO NOT DISTRIBUTE)' : 'STUDENT PRACTICE TEST'}
                        </span>
                        <div className="muted-sm" style={{ marginTop: '0.25rem' }}>
                          Seed #{worksheetSeed} • {generatedWorksheetQuestions.length} Questions
                        </div>
                      </div>
                    </div>

                    <div className="worksheet-meta-lines" style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', fontSize: '0.95rem' }}>
                      <div>Student Name: __________________________________</div>
                      <div>Date: ____________________</div>
                      <div>Score: ________ / {generatedWorksheetQuestions.length}</div>
                    </div>
                  </div>

                  {generatedWorksheetQuestions.length === 0 ? (
                    <div style={{ padding: '2rem', textAlign: 'center' }} className="muted">
                      No questions generated for this selection. Try selecting "All Skills in Selected Scope" or clicking Regenerate Numbers.
                    </div>
                  ) : (
                    <div className="worksheet-questions-list">
                      {generatedWorksheetQuestions.map((q, idx) => (
                        <div key={`${q.fingerprint}-${idx}`} className="worksheet-q-item" style={{ padding: '1.25rem 0', borderBottom: '1px dashed var(--border)' }}>
                          <div className="worksheet-q-prompt" style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                            <span>{idx + 1}. </span>
                            <span>{q.prompt}</span>
                          </div>

                          {q.passage && (
                            <div style={{ background: 'var(--surface-alt)', padding: '0.75rem 1rem', borderRadius: '6px', margin: '0.5rem 0', fontStyle: 'italic', fontSize: '0.9rem' }}>
                              {q.passage}
                            </div>
                          )}

                          <div className="worksheet-choices-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.6rem', marginTop: '0.75rem' }}>
                            {(q.choices || [q.answer, 'Option B', 'Option C', 'Option D']).map((choice, cIdx) => {
                              const letter = String.fromCharCode(65 + cIdx)
                              const isCorrect = choice === q.answer
                              const highlight = worksheetMode === 'teacher' && isCorrect

                              return (
                                <div
                                  key={cIdx}
                                  className="worksheet-choice"
                                  style={{
                                    padding: '0.6rem 0.85rem',
                                    borderRadius: '6px',
                                    border: highlight ? '2px solid var(--success)' : '1px solid var(--border)',
                                    background: highlight ? 'rgba(34, 197, 94, 0.12)' : 'var(--surface-alt)',
                                    fontWeight: highlight ? 700 : 400,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontSize: '0.95rem',
                                  }}
                                >
                                  <span style={{ fontWeight: 700, width: '22px' }}>({letter})</span>
                                  <span>{choice}</span>
                                  {highlight && <span style={{ marginLeft: 'auto', color: 'var(--success)' }}>✓</span>}
                                </div>
                              )
                            })}
                          </div>

                          {worksheetMode === 'teacher' && (
                            <div style={{ marginTop: '0.75rem', padding: '0.6rem 0.85rem', borderRadius: '6px', background: 'var(--surface-alt)', borderLeft: '4px solid var(--accent)', fontSize: '0.88rem' }}>
                              <div><strong>Standard:</strong> {q.principleTitle} ({q.principleId})</div>
                              <div style={{ marginTop: '0.2rem' }}><strong>Step-by-step Solution:</strong> {q.explanation}</div>
                            </div>
                          )}

                          {worksheetMode === 'student' && (
                            <div className="worksheet-workspace" style={{ marginTop: '0.75rem', height: '65px', border: '1px dashed var(--border)', borderRadius: '6px', padding: '0.4rem 0.6rem', fontSize: '0.75rem', color: 'var(--muted)' }}>
                              Workspace / Scratch Work:
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>

              {/* SECTION 3: PRINTABLES & GUIDES STUDIO */}
              <PrintablesStudio
                course={activeTeacherCourse}
                student={targetStudent}
              />

              {/* SECTION 4: ANSWER KEYS WITH STEP-BY-STEP RATIONALES */}
              <section className="card">
                <div className="section-header">
                  <div>
                    <span className="badge badge-success">ANSWER KEYS</span>
                    <h2>Lesson Answer Keys &amp; Worked Solutions</h2>
                    <p className="muted-sm">
                      Sample questions, correct solutions, and full pedagogical explanations for every lesson and exam in this course.
                    </p>
                  </div>

                  <div>
                    <select
                      className="input"
                      value={teacherUnitFilter}
                      onChange={(e) => setTeacherUnitFilter(e.target.value)}
                      style={{ maxWidth: '240px' }}
                    >
                      <option value="all">All Units ({teacherCoreUnits.length})</option>
                      {teacherCoreUnits.map((u) => (
                        <option key={u.id} value={u.id}>
                          {u.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {teacherCoreUnits
                    .filter((u) => teacherUnitFilter === 'all' || u.id === teacherUnitFilter)
                    .map((unit) => (
                      <div
                        key={unit.id}
                        style={{
                          border: '1px solid var(--border)',
                          borderRadius: '8px',
                          padding: '1rem',
                          background: 'var(--surface)',
                        }}
                      >
                        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>
                          {unit.title}
                        </h3>
                        <p className="muted-sm" style={{ margin: '0 0 1rem 0' }}>
                          Standards: <strong>{unit.standards.join(', ')}</strong> • {unit.lessons.length} Lessons &amp; Checkpoints
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          {unit.lessons.map((lesson) => (
                            <details
                              key={lesson.id}
                              style={{
                                background: 'var(--surface-alt)',
                                borderRadius: '6px',
                                border: '1px solid var(--border)',
                                padding: '0.65rem 0.85rem',
                              }}
                            >
                              <summary style={{ cursor: 'pointer', fontWeight: 600, fontSize: '0.95rem' }}>
                                {lesson.title} {lesson.kind === 'unit_test' && '🏆 (Unit Exam)'}
                              </summary>
                              <div style={{ marginTop: '0.75rem', fontSize: '0.88rem' }}>
                                <p style={{ margin: '0 0 0.5rem 0' }}>{lesson.reading}</p>

                                {lesson.principles.map((p) => (
                                  <div
                                    key={p.id}
                                    style={{
                                      marginTop: '0.6rem',
                                      padding: '0.6rem',
                                      borderLeft: '3px solid var(--primary-bright)',
                                      background: 'var(--surface)',
                                      borderRadius: '0 4px 4px 0',
                                    }}
                                  >
                                    <div style={{ fontWeight: 600 }}>
                                      {p.title} <span className="muted-sm">({p.standard})</span>
                                    </div>
                                    <div className="muted-sm" style={{ marginTop: '0.2rem' }}>
                                      {p.summary}
                                    </div>

                                    {p.generatorId ? (
                                      <div style={{ marginTop: '0.5rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                                          <div style={{ fontSize: '0.82rem', color: 'var(--primary-bright)', fontWeight: 600 }}>
                                            ⚡ Procedural Generator: <code>{p.generatorId}</code>
                                          </div>
                                          <button
                                            type="button"
                                            className="btn btn-secondary btn-sm"
                                            style={{ fontSize: '0.78rem', padding: '0.2rem 0.5rem' }}
                                            onClick={() => rerollSampleSeed(p.id)}
                                          >
                                            🎲 Roll Fresh Numbers
                                          </button>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                          {generatePrincipleSamples(p, sampleSeeds[p.id] || 42, 3).map((item, idx) => (
                                            <div
                                              key={item.id}
                                              style={{
                                                background: 'var(--surface-alt)',
                                                padding: '0.6rem 0.85rem',
                                                borderRadius: '6px',
                                                fontSize: '0.85rem',
                                                border: '1px solid var(--border)',
                                              }}
                                            >
                                              <div><strong>Sample Q{idx + 1}:</strong> {item.prompt}</div>
                                              {item.choices && item.choices.length > 0 && (
                                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '0.35rem 0' }}>
                                                  {item.choices.map((choice, cIdx) => {
                                                    const letter = String.fromCharCode(65 + cIdx)
                                                    const isCorrect = choice === item.answer
                                                    return (
                                                      <span
                                                        key={cIdx}
                                                        style={{
                                                          padding: '0.2rem 0.5rem',
                                                          borderRadius: '4px',
                                                          fontSize: '0.8rem',
                                                          border: isCorrect ? '1px solid var(--success)' : '1px solid var(--border)',
                                                          background: isCorrect ? 'rgba(34, 197, 94, 0.12)' : 'var(--surface)',
                                                          fontWeight: isCorrect ? 600 : 400,
                                                        }}
                                                      >
                                                        ({letter}) {choice} {isCorrect && '✓'}
                                                      </span>
                                                    )
                                                  })}
                                                </div>
                                              )}
                                              <div style={{ color: 'var(--success)', marginTop: '0.2rem' }}>
                                                <strong>Correct Answer:</strong> {item.answer}
                                              </div>
                                              <div className="muted-sm" style={{ marginTop: '0.2rem' }}>
                                                <strong>Step-by-step Solution:</strong> {item.explanation}
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    ) : p.bank && p.bank.length > 0 ? (
                                      <div style={{ marginTop: '0.4rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        {p.bank.slice(0, 3).map((item, idx) => (
                                          <div
                                            key={item.id}
                                            style={{
                                              background: 'var(--surface-alt)',
                                              padding: '0.6rem 0.85rem',
                                              borderRadius: '6px',
                                              fontSize: '0.85rem',
                                              border: '1px solid var(--border)',
                                            }}
                                          >
                                            <div><strong>Q{idx + 1}:</strong> {item.prompt}</div>
                                            {item.choices && item.choices.length > 0 && (
                                              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '0.35rem 0' }}>
                                                {item.choices.map((choice, cIdx) => {
                                                  const letter = String.fromCharCode(65 + cIdx)
                                                  const isCorrect = choice === item.answer
                                                  return (
                                                    <span
                                                      key={cIdx}
                                                      style={{
                                                        padding: '0.2rem 0.5rem',
                                                        borderRadius: '4px',
                                                        fontSize: '0.8rem',
                                                        border: isCorrect ? '1px solid var(--success)' : '1px solid var(--border)',
                                                        background: isCorrect ? 'rgba(34, 197, 94, 0.12)' : 'var(--surface-alt)',
                                                        fontWeight: isCorrect ? 600 : 400,
                                                      }}
                                                    >
                                                      ({letter}) {choice} {isCorrect && '✓'}
                                                    </span>
                                                  )
                                                })}
                                              </div>
                                            )}
                                            <div style={{ color: 'var(--success)', marginTop: '0.2rem' }}>
                                              <strong>Correct Answer:</strong> {item.answer}
                                            </div>
                                            <div className="muted-sm" style={{ marginTop: '0.2rem' }}>
                                              <strong>Step-by-step Solution:</strong> {item.explanation}
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    ) : null}
                                  </div>
                                ))}
                              </div>
                            </details>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </section>
            </>
          )}
        </>
      )}
    </div>
  )
}
