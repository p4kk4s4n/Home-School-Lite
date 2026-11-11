import React, { useMemo, useState } from 'react'
import { useApp } from '../context/AppContext'
import { findLessonInCourse, getCoursesForGrade } from '../lib/curriculum'
import { exportBackupData, importBackupData } from '../lib/db'
import { APP_ID, APP_SCOPE, CACHE_PREFIX, STORAGE_PREFIX } from '../lib/storage'
import { generatePrincipleSamples, generateWorksheet } from '../lib/worksheetGenerator'
import { GradeLevel, Principle, SUPPORTED_GRADES } from '../types'

export const SettingsPage: React.FC = () => {
  const {
    activeStudent,
    students,
    allAttempts,
    settings,
    isParentUnlocked,
    unlockParent,
    lockParent,
    editStudent,
    removeStudent,
    deleteLessonAttempts,
    resetStudentProgress,
    updateAppSettings,
    reloadAllData,
    updateStatus,
    checkingUpdate,
    triggerUpdateCheck,
    applyUpdateNow,
    canInstallPwa,
    isStandalone,
    promptInstallPwa,
  } = useApp()

  // Top navigation tabs: Settings & Controls vs. Daily Learning Guide vs. Teacher Resources
  const [activeTab, setActiveTab] = useState<'settings' | 'instructions' | 'teacher_resources'>('settings')

  // Progress reset & attempt deletion state
  const [selectedStudentId, setSelectedStudentId] = useState<string>(() => activeStudent?.id ?? '')
  const [selectedCourseId, setSelectedCourseId] = useState<string>('')
  const [teacherCourseId, setTeacherCourseId] = useState<string>('')
  const [teacherUnitFilter, setTeacherUnitFilter] = useState<string>('all')

  const [installPromptMsg, setInstallPromptMsg] = useState('')
  const [pinInput, setPinInput] = useState('')
  const [pinError, setPinError] = useState('')
  const [statusMsg, setStatusMsg] = useState('')
  const [importError, setImportError] = useState('')
  const [newPin, setNewPin] = useState(settings.parentPin)

  // Current student for progress management
  const targetStudent = useMemo(() => {
    return students.find((s) => s.id === selectedStudentId) ?? activeStudent ?? students[0] ?? null
  }, [students, selectedStudentId, activeStudent])

  // Courses available for target student
  const targetCourses = useMemo(() => {
    if (!targetStudent) return []
    return getCoursesForGrade(targetStudent.grade, settings.includeOhioAdjustments ?? true)
  }, [targetStudent, settings.includeOhioAdjustments])

  // Active course for teacher resources
  const activeTeacherCourseId = teacherCourseId || targetCourses[0]?.id || ''
  const activeTeacherCourse = useMemo(() => {
    return targetCourses.find((c) => c.id === activeTeacherCourseId) ?? targetCourses[0] ?? null
  }, [targetCourses, activeTeacherCourseId])

  const teacherCoreUnits = useMemo(() => {
    if (!activeTeacherCourse) return []
    return activeTeacherCourse.units.filter((u) => u.kind !== 'explore' && u.kind !== 'teacher_resources')
  }, [activeTeacherCourse])

  const teacherResourceUnit = useMemo(() => {
    if (!activeTeacherCourse) return null
    return activeTeacherCourse.units.find((u) => u.kind === 'teacher_resources') ?? null
  }, [activeTeacherCourse])

  const totalCoreLessonsInTeacherCourse = useMemo(() => {
    return teacherCoreUnits.reduce((acc, u) => acc + u.lessons.length, 0)
  }, [teacherCoreUnits])

  // Teacher worksheet & test generator studio state
  const [worksheetUnitId, setWorksheetUnitId] = useState<string>('all')
  const [worksheetPrincipleId, setWorksheetPrincipleId] = useState<string>('')
  const [worksheetCount, setWorksheetCount] = useState<number>(5)
  const [worksheetSeed, setWorksheetSeed] = useState<number>(1001)
  const [worksheetMode, setWorksheetMode] = useState<'student' | 'teacher'>('student')
  const [sampleSeeds, setSampleSeeds] = useState<Record<string, number>>({})

  const availableWorksheetPrinciples = useMemo(() => {
    if (!activeTeacherCourse) return []
    const units =
      worksheetUnitId === 'all'
        ? teacherCoreUnits
        : teacherCoreUnits.filter((u) => u.id === worksheetUnitId)
    const list: Principle[] = []
    for (const u of units) {
      for (const l of u.lessons) {
        list.push(...l.principles)
      }
    }
    const map = new Map<string, Principle>()
    for (const p of list) {
      if (!map.has(p.id)) map.set(p.id, p)
    }
    return Array.from(map.values())
  }, [activeTeacherCourse, worksheetUnitId, teacherCoreUnits])

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

  const rerollSampleSeed = (principleId: string) => {
    setSampleSeeds((prev) => ({
      ...prev,
      [principleId]: (prev[principleId] || Date.now()) + 13,
    }))
  }

  // Active course for lesson deletion
  const activeTargetCourseId = selectedCourseId || targetCourses[0]?.id || ''
  const activeTargetCourse = useMemo(() => {
    return targetCourses.find((c) => c.id === activeTargetCourseId) ?? targetCourses[0] ?? null
  }, [targetCourses, activeTargetCourseId])

  // Attempts for target student in active course
  const studentAttemptsInCourse = useMemo(() => {
    if (!targetStudent || !activeTargetCourse) return []
    return allAttempts.filter(
      (a) => a.studentId === targetStudent.id && a.courseId === activeTargetCourse.id
    )
  }, [allAttempts, targetStudent, activeTargetCourse])

  // Group attempts by lesson
  const lessonsWithAttempts = useMemo(() => {
    if (!activeTargetCourse) return []
    const map = new Map<string, typeof studentAttemptsInCourse>()
    for (const att of studentAttemptsInCourse) {
      const bucket = map.get(att.lessonId) ?? []
      bucket.push(att)
      map.set(att.lessonId, bucket)
    }

    return Array.from(map.entries()).map(([lessonId, atts]) => {
      const found = findLessonInCourse(activeTargetCourse, lessonId)
      const bestScore = Math.max(...atts.map((a) => a.scorePercent))
      const hasPassed = atts.some((a) => a.passed)
      return {
        lessonId,
        lessonTitle: found?.lesson.title ?? lessonId,
        kind: found?.lesson.kind,
        attemptsCount: atts.length,
        bestScore,
        hasPassed,
        latestAttemptAt: atts[atts.length - 1]?.completedAt,
      }
    })
  }, [activeTargetCourse, studentAttemptsInCourse])

  // Total attempts for target student
  const totalStudentAttempts = useMemo(() => {
    if (!targetStudent) return 0
    return allAttempts.filter((a) => a.studentId === targetStudent.id).length
  }, [allAttempts, targetStudent])

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault()
    if (unlockParent(pinInput)) {
      setPinInput('')
      setPinError('')
    } else {
      setPinError('Incorrect Parent PIN. (Default PIN is 1234)')
    }
  }

  const handleGradeChange = async (grade: GradeLevel) => {
    if (!activeStudent) return
    await editStudent(activeStudent.id, { grade })
    setStatusMsg(
      `Switched ${activeStudent.name} to Grade ${grade} across all 4 subjects. Any prior grade progress remains safely stored.`
    )
  }

  const handleExport = async () => {
    const payload = await exportBackupData()
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: 'application/json',
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `home-school-lite-backup-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
    setStatusMsg('Exported JSON backup file successfully.')
  }

  const handleImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setImportError('')
    setStatusMsg('')
    try {
      const text = await file.text()
      const parsed = JSON.parse(text)
      const res = await importBackupData(parsed)
      await reloadAllData()
      setStatusMsg(
        `Imported ${res.studentsCount} student(s) and ${res.attemptsCount} quiz attempt(s) successfully.`
      )
    } catch (err) {
      setImportError(err instanceof Error ? err.message : 'Failed to import backup file.')
    } finally {
      e.target.value = ''
    }
  }

  return (
    <div className="page-stack">
      {statusMsg && (
        <div className="alert alert-success" role="status">
          <span>✅ {statusMsg}</span>
          <button className="btn-icon" onClick={() => setStatusMsg('')}>
            ✕
          </button>
        </div>
      )}

      {importError && (
        <div className="alert alert-danger" role="alert">
          <span>⚠️ {importError}</span>
          <button className="btn-icon" onClick={() => setImportError('')}>
            ✕
          </button>
        </div>
      )}

      {/* TOP TABS: SETTINGS VS. DAILY INSTRUCTIONS VS. TEACHER RESOURCES */}
      <div className="mode-tabs" style={{ marginBottom: '1rem' }}>
        <button
          type="button"
          className={`mode-tab ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          ⚙️ Settings &amp; Parental Controls
        </button>
        <button
          type="button"
          className={`mode-tab ${activeTab === 'instructions' ? 'active' : ''}`}
          onClick={() => setActiveTab('instructions')}
        >
          📖 Daily Learning Guide &amp; Instructions
        </button>
        <button
          type="button"
          className={`mode-tab ${activeTab === 'teacher_resources' ? 'active' : ''}`}
          onClick={() => setActiveTab('teacher_resources')}
        >
          📚 Teacher Resources &amp; Pacing
        </button>
      </div>

      {activeTab === 'instructions' ? (
        /* ========================================================================= */
        /* INSTRUCTIONS PAGE: INTENDED STEPS FOR DAILY USE & RECOVERY WORKFLOW       */
        /* ========================================================================= */
        <div className="page-stack">
          {/* HEADER CARD */}
          <section className="card">
            <div className="section-header">
              <div>
                <span className="course-subject-tag">STANDARD OPERATING PROCEDURE</span>
                <h2>Daily Learning Guide &amp; Student Routine</h2>
                <p className="muted">
                  How Home-School-Lite is designed for daily homeschool mastery: bite-sized 8–15 minute micro-lessons, focused Khan Academy study, randomized algorithmic mastery checks, and structured recovery steps.
                </p>
              </div>
              <span className="badge badge-primary">ADHD &amp; Mastery-Friendly</span>
            </div>

            <div className="principles-grid" style={{ marginTop: '1rem' }}>
              <div className="card" style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1.05rem', marginTop: 0 }}>⏱️ Manageable Pacing</h3>
                <p className="muted-sm">
                  Lessons are split into 8–15 minute bite-sized segments to sustain engagement, prevent fatigue, and support neurodiverse learners.
                </p>
              </div>
              <div className="card" style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1.05rem', marginTop: 0 }}>🎯 80% Mastery Benchmark</h3>
                <p className="muted-sm">
                  Students advance only after demonstrating 80%+ mastery on randomized questions, ensuring foundational skills are solid before progressing.
                </p>
              </div>
              <div className="card" style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1.05rem', marginTop: 0 }}>🛡️ Safe Guardrails</h3>
                <p className="muted-sm">
                  External links have strict scope boundaries, and video searches require a Parent PIN so students stay on task without wandering the web.
                </p>
              </div>
            </div>
          </section>

          {/* STEP 1: OPEN LESSON */}
          <section className="card">
            <div className="section-header">
              <div>
                <span className="badge badge-primary">STEP 1</span>
                <h2>Open the Lesson &amp; Inspect Scope</h2>
              </div>
            </div>
            <div className="reading-body">
              <p>
                <strong>From the Dashboard or Course Page:</strong>
              </p>
              <ol style={{ paddingLeft: '1.25rem', lineHeight: '1.7' }}>
                <li>Select the active student and subject (Math, Science, ELA, or Social Studies).</li>
                <li>
                  Click <strong>"Open Lesson"</strong> on the next available lesson in the unit.
                </li>
                <li>
                  <strong>Review the Principle Cards:</strong> Read the core definition, formula card, and vocabulary words shown on the study tab.
                </li>
                <li>
                  <strong>Review the Assignment Checklist:</strong> At the top of the lesson page, look at the checklist steps (e.g. <em>Watch introductory video</em>, <em>Review core concept card</em>).
                </li>
              </ol>
            </div>
          </section>

          {/* STEP 2: KHAN ACADEMY SCOPE */}
          <section className="card">
            <div className="section-header">
              <div>
                <span className="badge badge-warning">STEP 2</span>
                <h2>What to Do in Khan Academy (Strict Scope Boundaries)</h2>
              </div>
            </div>
            <div className="reading-body" style={{ borderLeftColor: 'var(--warning)' }}>
              <p>
                When you click the Khan Academy link on the Assignment Checklist, a new browser tab opens to the exact curated topic.
              </p>
              <div style={{ marginTop: '0.75rem', marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(234, 179, 8, 0.12)', borderRadius: '8px', border: '1px solid var(--warning)' }}>
                <strong>⚠️ CRUCIAL SCOPE LIMIT — DO NOT GET LOST IN KHAN ACADEMY:</strong>
                <ul style={{ paddingLeft: '1.25rem', marginTop: '0.4rem', lineHeight: '1.6' }}>
                  <li><strong>Watch ONLY the single matched video</strong> (~4–7 minutes) or read the single concept summary card.</li>
                  <li><strong>If a practice check is linked:</strong> Solve ONLY the 4-question practice check on that page.</li>
                  <li>
                    <strong>DO NOT:</strong> Complete the entire external unit, do the full course challenge, or browse recommended side videos.
                  </li>
                  <li>
                    <strong>Immediately upon finishing that single video or 4-question check:</strong> Close or minimize Khan Academy and return to Home-School-Lite!
                  </li>
                </ul>
              </div>
              <p className="muted-sm">
                Khan Academy units can take hours. Home-School-Lite uses Khan Academy strictly as a focused micro-lesson primer before testing mastery locally.
              </p>
            </div>
          </section>

          {/* STEP 3: RETURN TO APP FOR MASTERY CHECK */}
          <section className="card">
            <div className="section-header">
              <div>
                <span className="badge badge-success">STEP 3</span>
                <h2>Return to Home-School-Lite for the Randomized Mastery Quiz</h2>
              </div>
            </div>
            <div className="reading-body" style={{ borderLeftColor: 'var(--success)' }}>
              <ol style={{ paddingLeft: '1.25rem', lineHeight: '1.7' }}>
                <li>Return to the Home-School-Lite tab.</li>
                <li>Tick off the checkboxes on the <strong>Assignment Checklist</strong> confirming you finished the reading/video.</li>
                <li>Click <strong>"Start Randomized Mastery Quiz"</strong>.</li>
                <li>
                  Answer the 5 dynamically generated questions.
                  <br />
                  <em className="muted-sm">Note: Questions use algorithmic seed generators so numbers, names, and correct choices change on every attempt—preventing memorization of answer letters.</em>
                </li>
                <li>Click <strong>"Submit Quiz"</strong> to record your attempt.</li>
                <li>
                  <strong>Mastery Passing Threshold: 80% (4 of 5 correct):</strong>
                  <ul style={{ paddingLeft: '1.25rem', marginTop: '0.25rem' }}>
                    <li>
                      <strong>If you score 80% or 100%:</strong> You have mastered this lesson! The lesson badge turns green (✅), streak points are awarded, your score syncs to the Parent Portal, and the next lesson automatically unlocks.
                    </li>
                    <li>
                      <strong>If you score below 80%:</strong> The next lesson remains locked until mastery is attained. Proceed to Step 4 (Recovery Steps).
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          {/* STEP 4: RECOVERY STEPS */}
          <section className="card">
            <div className="section-header">
              <div>
                <span className="badge badge-exam">STEP 4</span>
                <h2>Recovery Steps (When Scoring Below 80%)</h2>
              </div>
            </div>
            <div className="reading-body" style={{ borderLeftColor: 'var(--accent)' }}>
              <p>
                Scoring below 80% is a normal, expected part of learning. Do not repeat the quiz blindly! Follow these structured recovery steps:
              </p>
              <div className="principles-grid" style={{ marginTop: '0.75rem' }}>
                <div className="card" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <h4 style={{ margin: '0 0 0.4rem 0', color: 'var(--primary-bright)' }}>Tier 1: In-App Question Review</h4>
                  <p className="muted-sm">
                    Scroll down to the <strong>Question-by-Question Review</strong> on the results screen. Every missed question displays the correct answer along with a full worked-out step-by-step mathematical or conceptual explanation.
                  </p>
                </div>
                <div className="card" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <h4 style={{ margin: '0 0 0.4rem 0', color: 'var(--accent)' }}>Tier 2: External Educational Links &amp; YouTube</h4>
                  <p className="muted-sm">
                    In the <strong>Remediation &amp; Recovery Resources</strong> section, click the <em>YouTube Step-by-Step Search</em> or vetted resources (e.g. Math Antics, PBS LearningMedia, Understood.org, Crash Course Kids).
                    <br />
                    <strong>Parent PIN Security:</strong> External YouTube queries require the Parent PIN to unlock, ensuring children never navigate into unrestricted video feeds unattended.
                  </p>
                </div>
                <div className="card" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <h4 style={{ margin: '0 0 0.4rem 0', color: 'var(--success)' }}>Tier 3: Parent Coaching via Family Audit</h4>
                  <p className="muted-sm">
                    Parents can open the <strong>Family Sync tab</strong> on their own phone or laptop, tap the student's name, and audit the exact questions and answers missed to provide 3–5 minutes of one-on-one targeted coaching.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* STEP 5: RETURN TO APP AFTER RECOVERY */}
          <section className="card">
            <div className="section-header">
              <div>
                <span className="badge badge-primary">STEP 5</span>
                <h2>What to Do Upon Return to App After Recovery</h2>
              </div>
            </div>
            <div className="reading-body">
              <ol style={{ paddingLeft: '1.25rem', lineHeight: '1.7' }}>
                <li>After watching the 5-minute video explanation or doing 1 sample problem on paper, return to Home-School-Lite.</li>
                <li>
                  Click the <strong>"Retry Fresh Questions"</strong> button on the lesson page.
                </li>
                <li>
                  The quiz engine generates a <strong>completely new set of questions and values</strong> focusing specifically on the principles previously missed.
                </li>
                <li>
                  Take the fresh quiz and score 80%+ to unlock the lesson and proceed!
                </li>
              </ol>
            </div>
          </section>

          {/* PARENT QUICK CONTROLS CHEATSHEET */}
          <section className="card">
            <div className="section-header">
              <div>
                <span className="course-subject-tag">PARENT QUICK REFERENCE</span>
                <h2>Administrative Controls &amp; Progress Management</h2>
              </div>
            </div>
            <div className="reading-body">
              <p>
                All student progress is fully under parent control in the <strong>Settings &amp; Parental Controls</strong> tab:
              </p>
              <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.7' }}>
                <li>
                  <strong>Reset Student Progress:</strong> Start a school year over or clear all attempts for a student back to 0% with one click.
                </li>
                <li>
                  <strong>Delete Individual Lesson Completions:</strong> Erase previous attempts for a single specific lesson so a student can retake it from scratch.
                </li>
                <li>
                  <strong>Adjust Mastery Threshold:</strong> Set passing requirements from 60% up to 100% (default is 80%).
                </li>
                <li>
                  <strong>Ohio Standards Toggle:</strong> Enable or disable Ohio Learning Standards state-specific content (Ohio civics, history, and ecosystems).
                </li>
              </ul>
              <button
                type="button"
                className="btn btn-primary"
                style={{ marginTop: '0.75rem' }}
                onClick={() => setActiveTab('settings')}
              >
                Go to Parental Controls &amp; Settings →
              </button>
            </div>
          </section>
        </div>
      ) : activeTab === 'teacher_resources' ? (
        /* ========================================================================= */
        /* TEACHER RESOURCES TAB (PARENT PIN PROTECTED)                              */
        /* ========================================================================= */
        <div className="page-stack">
          {!isParentUnlocked ? (
            <section className="card pin-gate-card">
              <h2>🔒 Teacher Resources Portal (PIN Protected)</h2>
              <p className="muted">
                Pacing guides, answer keys, printable worksheets, and curriculum rubrics are intended for parents and instructors. Enter your Parent PIN to unlock.{' '}
                <strong>(Default PIN: 1234)</strong>
              </p>
              <form onSubmit={handleUnlock} className="pin-form">
                <input
                  type="password"
                  className="input pin-input"
                  placeholder="Enter PIN (1234)"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  aria-label="Parent PIN"
                />
                <button type="submit" className="btn btn-primary">
                  Unlock Teacher Portal
                </button>
              </form>
              {pinError && <p className="text-danger">{pinError}</p>}
            </section>
          ) : (
            <>
              {/* HEADER & COURSE PICKER */}
              <section className="card">
                <div className="section-header">
                  <div>
                    <span className="course-subject-tag">PARENT EDUCATOR DASHBOARD</span>
                    <h2>Teacher Resources, Pacing Guides &amp; Answer Keys</h2>
                    <p className="muted">
                      Full curriculum maps, answer keys with step-by-step explanations, printable guides, and Ohio/National standards crosswalks.
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

                <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <label className="field-label" style={{ minWidth: '280px', margin: 0 }}>
                    Select Subject / Course:
                    <select
                      className="input"
                      value={activeTeacherCourse?.id ?? ''}
                      onChange={(e) => setTeacherCourseId(e.target.value)}
                      style={{ marginTop: '0.35rem' }}
                    >
                      {targetCourses.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.title} ({c.grade}th Grade)
                        </option>
                      ))}
                    </select>
                  </label>
                  {targetStudent && (
                    <div style={{ fontSize: '0.9rem', color: 'var(--muted)', paddingTop: '1.25rem' }}>
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
                          Micro-lesson + 5-question mastery check
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

                  {/* SECTION 3: CURATED TEACHER RESOURCE UNITS & PRINTABLES */}
                  {teacherResourceUnit && (teacherResourceUnit.resources || []).length > 0 && (
                    <section className="card">
                      <div className="section-header">
                        <div>
                          <span className="badge badge-warning">PRINTABLES &amp; GUIDES</span>
                          <h2>Curriculum Resources &amp; Printable Aids</h2>
                        </div>
                      </div>

                      <div className="student-list" style={{ marginTop: '0.75rem' }}>
                        {(teacherResourceUnit.resources || []).map((res) => (
                          <div
                            key={res.id}
                            className="student-row"
                            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1rem', background: 'var(--surface-alt)' }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                              <div>
                                <strong style={{ fontSize: '1.05rem' }}>{res.title}</strong>
                                <span className="badge badge-neutral" style={{ marginLeft: '0.5rem', textTransform: 'capitalize' }}>
                                  {res.kind.replace('_', ' ')}
                                </span>
                              </div>
                              {res.url && (
                                <a
                                  href={res.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-secondary btn-sm"
                                >
                                  Open External Link ↗
                                </a>
                              )}
                            </div>
                            <p className="muted-sm" style={{ margin: 0 }}>
                              {res.description}
                            </p>
                            {res.body && (
                              <div
                                style={{
                                  background: 'var(--surface)',
                                  padding: '0.75rem 1rem',
                                  borderRadius: '6px',
                                  fontSize: '0.88rem',
                                  lineHeight: '1.6',
                                  whiteSpace: 'pre-wrap',
                                  border: '1px solid var(--border)',
                                  marginTop: '0.4rem',
                                }}
                              >
                                {res.body}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* SECTION 3: ANSWER KEYS WITH STEP-BY-STEP RATIONALES */}
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

                    <div className="student-list" style={{ marginTop: '1rem' }}>
                      {teacherCoreUnits
                        .filter((u) => teacherUnitFilter === 'all' || u.id === teacherUnitFilter)
                        .map((unit) => (
                          <div key={unit.id} style={{ marginBottom: '1.5rem' }}>
                            <h3 style={{ borderBottom: '2px solid var(--border)', paddingBottom: '0.4rem', marginBottom: '0.75rem' }}>
                              {unit.title}
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                              {unit.lessons.map((lesson) => (
                                <details
                                  key={lesson.id}
                                  style={{
                                    background: 'var(--surface-alt)',
                                    padding: '0.75rem 1rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--border)',
                                  }}
                                >
                                  <summary style={{ cursor: 'pointer', fontWeight: 600 }}>
                                    <span>{lesson.title}</span>
                                    <span className="muted-sm" style={{ marginLeft: '0.5rem' }}>
                                      ({lesson.principles.map((p) => p.standard).join(', ')})
                                      {lesson.kind === 'unit_test' && ' • Unit Exam'}
                                    </span>
                                  </summary>

                                  <div style={{ marginTop: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
                                    <p className="muted-sm" style={{ marginBottom: '0.5rem' }}>
                                      <strong>Core Concept:</strong> {lesson.reading}
                                    </p>

                                    {lesson.principles.map((p) => (
                                      <div key={p.id} style={{ marginTop: '0.6rem' }}>
                                        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary-bright)' }}>
                                          Principle: {p.title} ({p.standard})
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
                                                    background: 'var(--surface)',
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
                                          </div>
                                        ) : p.bank && p.bank.length > 0 ? (
                                          <div style={{ marginTop: '0.4rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            {p.bank.slice(0, 3).map((item, idx) => (
                                              <div
                                                key={item.id}
                                                style={{
                                                  background: 'var(--surface)',
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
      ) : (
        /* ========================================================================= */
        /* SETTINGS & PARENTAL CONTROLS TAB                                          */
        /* ========================================================================= */
        <>
          {/* SECTION 1: IN-APP DEPLOYMENT VERSION & AUTO-UPDATE SETTINGS (Always accessible) */}
          <section className="card">
            <div className="section-header">
              <div>
                <span className="course-subject-tag">GITHUB PAGES DEPLOYMENT &amp; VERSION CONTROL</span>
                <h2>In-App Auto-Update &amp; Version Reload Settings</h2>
                <p className="muted">
                  Automatically check <code>https://p4kk4s4n.github.io/Home-School-Lite/version.json</code> for newly deployed GitHub Pages builds and reload cleanly without losing student progress.
                </p>
              </div>
              <span
                className={`badge ${
                  updateStatus?.updateAvailable ? 'badge-warning' : 'badge-success'
                }`}
              >
                {updateStatus?.updateAvailable ? 'Update Available' : 'Up to Date'}
              </span>
            </div>

            <div className="settings-grid-2">
              <div className="settings-panel">
                <label className="toggle-row">
                  <input
                    type="checkbox"
                    checked={settings.autoCheckUpdates}
                    onChange={(e) =>
                      void updateAppSettings({ autoCheckUpdates: e.target.checked })
                    }
                  />
                  <div>
                    <strong>Auto-check for latest deployed versions</strong>
                    <p className="muted-sm">
                      Checks on app launch, when the browser tab regains focus, and on your chosen schedule.
                    </p>
                  </div>
                </label>

                <label className="field-label" style={{ marginTop: '0.85rem' }}>
                  Background Check Frequency
                  <select
                    className="input"
                    value={settings.updateCheckIntervalMin}
                    onChange={(e) =>
                      void updateAppSettings({
                        updateCheckIntervalMin: Number(e.target.value) as 0 | 15 | 60,
                      })
                    }
                    disabled={!settings.autoCheckUpdates}
                  >
                    <option value={0}>On App Launch &amp; Tab Focus Only</option>
                    <option value={15}>Every 15 Minutes (Recommended)</option>
                    <option value={60}>Every 60 Minutes</option>
                  </select>
                </label>

                <label className="toggle-row" style={{ marginTop: '0.85rem' }}>
                  <input
                    type="checkbox"
                    checked={settings.autoApplyUpdates}
                    onChange={(e) =>
                      void updateAppSettings({ autoApplyUpdates: e.target.checked })
                    }
                  />
                  <div>
                    <strong>Auto-reload immediately when a new version is found</strong>
                    <p className="muted-sm">
                      Automatically refreshes the app and caches when no quiz is currently in progress.
                    </p>
                  </div>
                </label>
              </div>

              <div className="settings-panel version-diagnostics">
                <div className="diag-row">
                  <span>Installed Version:</span>
                  <code>
                    v{updateStatus?.currentVersion ?? '1.0.0'} ({updateStatus?.currentCommit ?? 'local'})
                  </code>
                </div>
                <div className="diag-row">
                  <span>Latest Remote Version:</span>
                  <code>
                    {updateStatus?.remote
                      ? `v${updateStatus.remote.version} (${updateStatus.remote.commit})`
                      : 'Same as installed'}
                  </code>
                </div>
                <div className="diag-row">
                  <span>Last Checked:</span>
                  <span>
                    {updateStatus?.checkedAt
                      ? new Date(updateStatus.checkedAt).toLocaleTimeString()
                      : 'Not checked yet'}
                  </span>
                </div>

                <div className="version-actions">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    disabled={checkingUpdate}
                    onClick={async () => {
                      const res = await triggerUpdateCheck()
                      setStatusMsg(
                        res.updateAvailable
                          ? `New version ${res.remote?.version} detected!`
                          : 'Checked remote version.json — you are on the latest deployed build.'
                      )
                    }}
                  >
                    {checkingUpdate ? 'Checking...' : '🔍 Check for Updates Now'}
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => void applyUpdateNow()}
                  >
                    🔄 Reload &amp; Apply Latest Build
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: PARENT PIN GATE FOR CURRICULUM & PROGRESS CONTROLS */}
          {!isParentUnlocked ? (
            <section className="card pin-gate-card">
              <h2>🔒 Parent / Teacher Controls (PIN Protected)</h2>
              <p className="muted">
                Enter your Parent PIN to change {activeStudent?.name ?? 'the student'}’s Grade Level (Grades 4–8), reset student progress, delete individual lesson attempts, adjust the Mastery Threshold (default 80%), or toggle Ohio State Curriculum extensions.{' '}
                <strong>(Default PIN: 1234)</strong>
              </p>
              <form onSubmit={handleUnlock} className="pin-form">
                <input
                  type="password"
                  className="input pin-input"
                  placeholder="Enter PIN (1234)"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  aria-label="Parent PIN"
                />
                <button type="submit" className="btn btn-primary">
                  Unlock Parent Settings
                </button>
              </form>
              {pinError && <p className="text-danger">{pinError}</p>}
            </section>
          ) : (
            <>
              {/* GRADE LEVEL & STUDENT PROFILE */}
              <section className="card">
                <div className="section-header">
                  <div>
                    <span className="course-subject-tag">STUDENT CURRICULUM LEVEL</span>
                    <h2>
                      Logged-In Student Grade Level: {activeStudent?.name} ({activeStudent?.avatar})
                    </h2>
                    <p className="muted">
                      Selecting a Grade Level (Grades 4–8) sets all four subjects (Math, Science, Language Arts, and Social Studies) for {activeStudent?.name}. Switching grades preserves all prior grade progress safely.
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

                {activeStudent && (
                  <div className="settings-grid-2">
                    <div>
                      <span className="field-label">
                        Active Curriculum Grade for {activeStudent.name}
                      </span>
                      <div className="grade-toggle-group">
                        {SUPPORTED_GRADES.map((g) => (
                          <button
                            key={g}
                            type="button"
                            className={`grade-toggle-btn ${
                              activeStudent.grade === g ? 'selected' : ''
                            }`}
                            onClick={() => void handleGradeChange(g)}
                          >
                            <strong>Grade {g} Curriculum</strong>
                            <span>{g}th Grade Math, Science, ELA &amp; Social Studies</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="settings-panel">
                      <label className="field-label">
                        Student Display Name
                        <input
                          type="text"
                          className="input"
                          value={activeStudent.name}
                          onChange={(e) =>
                            void editStudent(activeStudent.id, { name: e.target.value })
                          }
                        />
                      </label>
                      <label className="field-label" style={{ marginTop: '0.75rem' }}>
                        Target School Year Completion Date
                        <input
                          type="date"
                          className="input"
                          value={activeStudent.targetEndDate}
                          onChange={(e) =>
                            void editStudent(activeStudent.id, {
                              targetEndDate: e.target.value,
                            })
                          }
                        />
                      </label>
                      {students.length > 1 && (
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          style={{ marginTop: '0.75rem' }}
                          onClick={async () => {
                            const targetName = activeStudent.name
                            const confirmed = window.confirm(
                              `Are you sure you want to delete ${targetName}?\n\nThis will remove their profile, enrolled courses, and quiz attempts.`
                            )
                            if (!confirmed) return
                            await removeStudent(activeStudent.id)
                            setStatusMsg(`Student "${targetName}" was deleted.`)
                          }}
                        >
                          Delete Profile ({activeStudent.name})
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </section>

              {/* SECTION: STUDENT PROGRESS RESET & LESSON COMPLETION DELETION */}
              <section className="card">
                <div className="section-header">
                  <div>
                    <span className="course-subject-tag">PARENT OVERRIDE &amp; RE-TAKES</span>
                    <h2>Reset Student Progress &amp; Delete Lesson Completions</h2>
                    <p className="muted">
                      Clear all quiz attempts for a student (to repeat a school year) or selectively delete completions for individual lessons so the student can re-take them completely fresh.
                    </p>
                  </div>
                </div>

                {/* STUDENT SELECTOR */}
                {students.length > 1 && (
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label className="field-label">
                      Select Student to Manage:
                      <select
                        className="input"
                        value={targetStudent?.id ?? ''}
                        onChange={(e) => setSelectedStudentId(e.target.value)}
                        style={{ maxWidth: '320px', marginTop: '0.35rem' }}
                      >
                        {students.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.avatar} {s.name} (Grade {s.grade})
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                )}

                {targetStudent && (
                  <div className="settings-grid-2">
                    {/* PANEL A: FULL STUDENT PROGRESS RESET */}
                    <div className="settings-panel">
                      <h3>🔄 Reset Entire Student Progress</h3>
                      <p className="muted-sm">
                        Permanently delete all quiz attempts recorded for <strong>{targetStudent.name}</strong> across all subjects. This resets their course mastery to 0% and tombstones the attempts so they do not return on cloud sync.
                      </p>
                      <div className="diag-row" style={{ marginTop: '0.75rem', marginBottom: '1rem' }}>
                        <span>Total Quiz Attempts:</span>
                        <strong>{totalStudentAttempts} attempt(s) recorded</strong>
                      </div>
                      <button
                        type="button"
                        className="btn btn-danger"
                        disabled={totalStudentAttempts === 0}
                        onClick={async () => {
                          const confirmed = window.confirm(
                            `Are you sure you want to RESET ALL PROGRESS for ${targetStudent.name}?\n\nThis will delete all ${totalStudentAttempts} quiz attempt(s) and set all course mastery back to 0%. This action cannot be undone and will sync across all family devices.`
                          )
                          if (!confirmed) return
                          const count = await resetStudentProgress(targetStudent.id)
                          setStatusMsg(`Successfully reset progress for ${targetStudent.name} (${count} attempts removed).`)
                        }}
                      >
                        {totalStudentAttempts === 0
                          ? `No attempts to reset for ${targetStudent.name}`
                          : `Reset All Progress for ${targetStudent.name}`}
                      </button>
                    </div>

                    {/* PANEL B: DELETE INDIVIDUAL LESSON / MASTERY COMPLETIONS */}
                    <div className="settings-panel">
                      <h3>🗑️ Delete Specific Lesson Completions</h3>
                      <p className="muted-sm">
                        Select a course to view lessons {targetStudent.name} has completed or attempted. Deleting a lesson's attempts resets it to unattempted so they can retry fresh.
                      </p>

                      <label className="field-label" style={{ marginTop: '0.75rem' }}>
                        Subject / Course:
                        <select
                          className="input"
                          value={activeTargetCourse?.id ?? ''}
                          onChange={(e) => setSelectedCourseId(e.target.value)}
                        >
                          {targetCourses.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.title}
                            </option>
                          ))}
                        </select>
                      </label>

                      <div style={{ marginTop: '1rem' }}>
                        <span className="field-label">Attempted Lessons in {activeTargetCourse?.title}:</span>
                        {lessonsWithAttempts.length === 0 ? (
                          <p className="muted-sm" style={{ marginTop: '0.35rem' }}>
                            No quiz attempts recorded in this course yet.
                          </p>
                        ) : (
                          <div className="student-list" style={{ marginTop: '0.5rem', maxHeight: '280px', overflowY: 'auto' }}>
                            {lessonsWithAttempts.map((item) => (
                              <div
                                key={item.lessonId}
                                className="student-row"
                                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.65rem 0.85rem' }}
                              >
                                <div className="student-row-info" style={{ flex: 1, paddingRight: '0.5rem' }}>
                                  <strong>{item.lessonTitle}</strong>
                                  <span className="muted-sm">
                                    {item.attemptsCount} attempt{item.attemptsCount === 1 ? '' : 's'} • Best: {item.bestScore}%
                                    {item.hasPassed && ' • Passed ✅'}
                                  </span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                  <span
                                    className={`badge ${item.hasPassed ? 'badge-success' : 'badge-warning'}`}
                                  >
                                    {item.hasPassed ? 'Mastered' : 'In Progress'}
                                  </span>
                                  <button
                                    type="button"
                                    className="btn btn-danger btn-sm"
                                    title={`Delete all attempts for ${item.lessonTitle}`}
                                    onClick={async () => {
                                      const ok = window.confirm(
                                        `Delete all ${item.attemptsCount} attempt(s) for "${item.lessonTitle}"?\n\nThis will reset the lesson so ${targetStudent.name} can retake it from scratch.`
                                      )
                                      if (!ok) return
                                      const count = await deleteLessonAttempts(
                                        targetStudent.id,
                                        activeTargetCourse!.id,
                                        item.lessonId
                                      )
                                      setStatusMsg(`Deleted ${count} attempt(s) for "${item.lessonTitle}". Lesson is now reset.`)
                                    }}
                                  >
                                    🗑️ Reset
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </section>

              {/* MASTERY THRESHOLD & GPA GRADING POLICY */}
              <section className="card">
                <h2>Mastery Threshold &amp; GPA Grading Policy</h2>
                <div className="settings-grid-2">
                  <div className="settings-panel">
                    <label className="field-label">
                      Mastery Score Threshold: <strong>{settings.masteryThreshold}%</strong> (Default 80%)
                      <input
                        type="range"
                        min={60}
                        max={100}
                        step={5}
                        value={settings.masteryThreshold}
                        onChange={(e) =>
                          void updateAppSettings({
                            masteryThreshold: Number(e.target.value),
                          })
                        }
                      />
                      <span className="muted-sm">
                        Students must score at least {settings.masteryThreshold}% on a randomized quiz to unlock the next lesson.
                      </span>
                    </label>

                    {/* MASTERY QUESTION COUNT TOGGLE */}
                    <div style={{ marginTop: '1.15rem' }}>
                      <span className="field-label">
                        Mastery Quiz Question Count: <strong>{settings.masteryQuestionCount ?? 8} Questions</strong> (Default 8)
                      </span>
                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', margin: '0.4rem 0 0.5rem' }}>
                        {[5, 8, 10, 12, 15].map((count) => {
                          const isSelected = (settings.masteryQuestionCount ?? 8) === count
                          return (
                            <button
                              key={count}
                              type="button"
                              className={`btn btn-sm ${isSelected ? 'btn-primary' : 'btn-secondary'}`}
                              onClick={() => void updateAppSettings({ masteryQuestionCount: count })}
                            >
                              {count} Qs {count === 8 ? '(Default)' : count === 5 ? '(Min)' : ''}
                            </button>
                          )
                        })}
                      </div>
                      <input
                        type="range"
                        min={5}
                        max={15}
                        step={1}
                        value={settings.masteryQuestionCount ?? 8}
                        onChange={(e) =>
                          void updateAppSettings({
                            masteryQuestionCount: Math.max(5, Number(e.target.value)),
                          })
                        }
                      />
                      <div className="muted-sm" style={{ marginTop: '0.3rem', lineHeight: 1.5 }}>
                        Regular Lessons: <strong>{settings.masteryQuestionCount ?? 8} questions</strong> • Unit Exams: <strong>{(settings.masteryQuestionCount ?? 8) + 3} questions</strong> (+3 exam bonus).
                        <br />
                        At {settings.masteryThreshold}% threshold, students must answer{' '}
                        <strong>
                          {Math.ceil((settings.masteryThreshold / 100) * (settings.masteryQuestionCount ?? 8))} of {settings.masteryQuestionCount ?? 8}
                        </strong>{' '}
                        questions correctly to advance.
                      </div>
                    </div>

                    <label className="field-label" style={{ marginTop: '1rem' }}>
                      Retry Penalty per Extra Attempt: <strong>{settings.retryPenaltyPercent}%</strong>
                      <input
                        type="range"
                        min={0}
                        max={10}
                        step={1}
                        value={settings.retryPenaltyPercent}
                        onChange={(e) =>
                          void updateAppSettings({
                            retryPenaltyPercent: Number(e.target.value),
                          })
                        }
                      />
                      <span className="muted-sm">
                        Default 0% keeps randomized retries low-pressure until mastery is achieved.
                      </span>
                    </label>

                    <label className="toggle-row" style={{ marginTop: '1rem' }}>
                      <input
                        type="checkbox"
                        checked={settings.requireAssignmentChecklist}
                        onChange={(e) =>
                          void updateAppSettings({
                            requireAssignmentChecklist: e.target.checked,
                          })
                        }
                      />
                      <div>
                        <strong>Require Lesson Scope Checklist before Mastery Quiz</strong>
                        <p className="muted-sm">
                          Locks the Mastery Check until the student ticks all assigned video/reading steps for that lesson.
                        </p>
                      </div>
                    </label>

                    <label className="toggle-row" style={{ marginTop: '1rem' }}>
                      <input
                        type="checkbox"
                        checked={settings.includeOhioAdjustments ?? true}
                        onChange={(e) => {
                          const nextVal = e.target.checked
                          void updateAppSettings({
                            includeOhioAdjustments: nextVal,
                          })
                          setStatusMsg(
                            nextVal
                              ? 'Ohio State Curriculum Alignment & Extensions enabled across Grades 4–8.'
                              : 'Opted out of Ohio-specific curriculum extensions (showing core national standards only).'
                          )
                        }}
                      />
                      <div>
                        <strong>Include Ohio State Curriculum Alignment &amp; Extensions</strong>
                        <p className="muted-sm">
                          Includes Ohio Learning Standards topics (Ohio history/civics, regional geology/ecosystems, and Ohio math/ELA adjustments). Uncheck to opt out.
                        </p>
                      </div>
                    </label>
                  </div>

                  <div className="settings-panel">
                    <label className="field-label">
                      Regular Lessons Weight (%): <strong>{settings.lessonWeight}%</strong>
                      <input
                        type="number"
                        className="input"
                        min={10}
                        max={90}
                        value={settings.lessonWeight}
                        onChange={(e) => {
                          const lw = Math.max(10, Math.min(90, Number(e.target.value) || 60))
                          void updateAppSettings({
                            lessonWeight: lw,
                            unitTestWeight: 100 - lw,
                          })
                        }}
                      />
                    </label>

                    <label className="field-label" style={{ marginTop: '0.75rem' }}>
                      Unit Exams Weight (%): <strong>{settings.unitTestWeight}%</strong>
                      <input
                        type="number"
                        className="input"
                        value={settings.unitTestWeight}
                        disabled
                      />
                    </label>

                    <div className="pin-change-row" style={{ marginTop: '1rem' }}>
                      <label className="field-label">
                        Parent PIN Code
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <input
                            type="text"
                            className="input"
                            value={newPin}
                            onChange={(e) => setNewPin(e.target.value)}
                          />
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={async () => {
                              if (newPin.trim().length >= 4) {
                                await updateAppSettings({ parentPin: newPin.trim() })
                                setStatusMsg('Updated Parent PIN.')
                              }
                            }}
                          >
                            Save PIN
                          </button>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* SECTION 3: BACKUP EXPORT/IMPORT & MOBILE PWA ISOLATION DIAGNOSTICS */}
          <section className="card">
            <div className="settings-grid-2">
              <div>
                <h2>Backup &amp; Restore Student Data (JSON)</h2>
                <p className="muted-sm">
                  All student profiles, enrollments, and quiz attempts live locally in your browser’s IndexedDB. Export a JSON backup anytime to transfer devices or safeguard records.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                  <button type="button" className="btn btn-primary" onClick={() => void handleExport()}>
                    ⬇ Export Backup JSON
                  </button>
                  <label className="btn btn-secondary" style={{ cursor: 'pointer' }}>
                    ⬆ Import Backup JSON
                    <input
                      type="file"
                      accept="application/json,.json"
                      style={{ display: 'none' }}
                      onChange={(e) => void handleImportFile(e)}
                    />
                  </label>
                </div>
              </div>

              <div className="settings-panel version-diagnostics">
                <h4>Install App &amp; Mobile Shortcut</h4>
                <p className="muted-sm">
                  Add Home-School-Lite directly to your phone or desktop home screen as an independent app.
                </p>

                {isStandalone ? (
                  <div style={{ marginTop: '0.75rem' }}>
                    <span className="badge badge-success">✓ Installed &amp; Running in Standalone Mode</span>
                    <p className="muted-sm" style={{ marginTop: '0.5rem' }}>
                      This app is currently running in full-screen standalone mode with isolated IndexedDB storage.
                    </p>
                  </div>
                ) : (
                  <div style={{ marginTop: '0.75rem' }}>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={async () => {
                        setInstallPromptMsg('')
                        const outcome = await promptInstallPwa()
                        if (outcome === 'accepted') {
                          setStatusMsg('App install accepted! Look for HomeSchool Lite on your home screen.')
                        } else if (outcome === 'dismissed') {
                          setInstallPromptMsg('Install prompt was dismissed.')
                        } else {
                          setInstallPromptMsg(
                            'To install: On Android Chrome, tap the menu (⋮) → "Install app". On iOS Safari, tap the Share button (⎋) → "Add to Home Screen".'
                          )
                        }
                      }}
                    >
                      📲 Install App / Add to Home Screen
                    </button>
                    {installPromptMsg && (
                      <p className="muted-sm" style={{ marginTop: '0.65rem', color: 'var(--accent)' }}>
                        {installPromptMsg}
                      </p>
                    )}
                  </div>
                )}

                <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
                  <span className="muted-sm"><strong>Same-Origin Isolation Identity:</strong></span>
                  <div className="diag-row" style={{ marginTop: '0.35rem' }}>
                    <span>Manifest Unique ID:</span>
                    <code>/Home-School-Lite/?app={APP_ID}</code>
                  </div>
                  <div className="diag-row">
                    <span>PWA &amp; SW Scope:</span>
                    <code>{APP_SCOPE}</code>
                  </div>
                  <div className="diag-row">
                    <span>IndexedDB &amp; Prefixes:</span>
                    <code>
                      db="{APP_ID}" • cache="{CACHE_PREFIX}*" • ls="{STORAGE_PREFIX}*"
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
