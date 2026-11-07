import React, { useMemo, useState } from 'react'
import { useApp } from '../context/AppContext'
import { findLessonInCourse, getCourseById, getCoursesForGrade } from '../lib/curriculum'
import { computeGpaReport } from '../lib/grading'
import { computeCourseProgress } from '../lib/progress'
import {
  createCloudFamilyCircle,
  fetchRemoteFamilyPreview,
  joinFamilyAsParent,
  joinFamilyAsStudent,
} from '../lib/sync'
import { AttemptRecord, Student } from '../types'

export const FamilyPage: React.FC = () => {
  const {
    students,
    activeStudent,
    allAttempts,
    settings,
    isParentUnlocked,
    unlockParent,
    editStudent,
    addStudent,
    updateAppSettings,
    reloadAllData,
    syncingFamily,
    triggerFamilySync,
  } = useApp()

  const [joinCodeInput, setJoinCodeInput] = useState(
    settings.familySync?.familyCode || ''
  )
  const [customUrlInput, setCustomUrlInput] = useState(
    settings.familySync?.syncEndpointUrl &&
      !settings.familySync.syncEndpointUrl.includes('jsonblob.com')
      ? settings.familySync.syncEndpointUrl
      : ''
  )
  const [previewStudents, setPreviewStudents] = useState<Student[]>([])
  const [selectedStudentId, setSelectedStudentId] = useState('')
  const [studentPinInput, setStudentPinInput] = useState('')
  const [parentPinInput, setParentPinInput] = useState('')

  const [newStuName, setNewStuName] = useState('')
  const [newStuGrade, setNewStuGrade] = useState<4 | 6>(4)
  const [newStuPin, setNewStuPin] = useState('1111')

  const [inspectStudentId, setInspectStudentId] = useState<string>(
    activeStudent?.id || students[0]?.id || ''
  )
  const [inspectAttemptId, setInspectAttemptId] = useState<string | null>(null)

  const [busy, setBusy] = useState(false)
  const [statusMsg, setStatusMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const syncCfg = settings.familySync

  // Compute live progress & GPA summary for every student in the family
  const rosterSummaries = useMemo(() => {
    return students.map((stu) => {
      const stuCourses = getCoursesForGrade(stu.grade)
      const stuAttempts = allAttempts.filter((a) => a.studentId === stu.id)
      const courseProgress = stuCourses.map((c) =>
        computeCourseProgress(c, stuAttempts, settings.masteryThreshold)
      )
      const masteredSteps = courseProgress.reduce((acc, p) => acc + p.masteredCount, 0)
      const totalSteps = courseProgress.reduce((acc, p) => acc + p.totalCount, 0)
      const pctComplete =
        totalSteps > 0 ? Math.round((masteredSteps / totalSteps) * 100) : 0
      const gpaReport = computeGpaReport(stuCourses, stuAttempts, settings)

      return {
        student: stu,
        stuAttempts,
        masteredSteps,
        totalSteps,
        pctComplete,
        gpaReport,
      }
    })
  }, [students, allAttempts, settings])

  const inspectedSummary = useMemo(
    () =>
      rosterSummaries.find((r) => r.student.id === inspectStudentId) ??
      rosterSummaries[0] ??
      null,
    [rosterSummaries, inspectStudentId]
  )

  const inspectedAttempt: AttemptRecord | null = useMemo(() => {
    if (!inspectedSummary) return null
    if (inspectAttemptId) {
      return (
        inspectedSummary.stuAttempts.find((a) => a.id === inspectAttemptId) ?? null
      )
    }
    return inspectedSummary.stuAttempts.length > 0
      ? inspectedSummary.stuAttempts[inspectedSummary.stuAttempts.length - 1]
      : null
  }, [inspectedSummary, inspectAttemptId])

  const handleCreateFamily = async () => {
    setBusy(true)
    setErrorMsg('')
    setStatusMsg('')
    try {
      const res = await createCloudFamilyCircle(customUrlInput)
      setJoinCodeInput(res.familyCode)
      await reloadAllData()
      setStatusMsg(
        `Created Family Circle "${res.familyCode}"! Share this code and each student’s 4-digit PIN with their devices.`
      )
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : 'Failed to create cloud Family Circle.'
      )
    } finally {
      setBusy(false)
    }
  }

  const handleLoadRosterForStudentJoin = async () => {
    if (!joinCodeInput.trim()) return
    setBusy(true)
    setErrorMsg('')
    setStatusMsg('')
    try {
      const remote = await fetchRemoteFamilyPreview(joinCodeInput, customUrlInput)
      setPreviewStudents(remote.students)
      if (remote.students.length > 0) {
        setSelectedStudentId(remote.students[0].id)
      }
      setStatusMsg(
        `Found Family Circle with ${remote.students.length} student profile(s). Select your name and enter your Student PIN.`
      )
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : 'Could not load Family Circle.'
      )
    } finally {
      setBusy(false)
    }
  }

  const handleStudentJoinSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!joinCodeInput.trim() || !selectedStudentId || !studentPinInput.trim()) return
    setBusy(true)
    setErrorMsg('')
    setStatusMsg('')
    try {
      const res = await joinFamilyAsStudent({
        familyCode: joinCodeInput,
        studentId: selectedStudentId,
        studentPin: studentPinInput,
        customEndpointUrl: customUrlInput,
      })
      await reloadAllData()
      setStudentPinInput('')
      setStatusMsg(
        `Joined Family Circle "${res.familyCode}" as ${res.student.name} (Grade ${res.student.grade})! Your progress will now sync automatically.`
      )
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to join as student.')
    } finally {
      setBusy(false)
    }
  }

  const handleParentJoinSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!joinCodeInput.trim() || !parentPinInput.trim()) return
    setBusy(true)
    setErrorMsg('')
    setStatusMsg('')
    try {
      const res = await joinFamilyAsParent({
        familyCode: joinCodeInput,
        parentPin: parentPinInput,
        customEndpointUrl: customUrlInput,
      })
      unlockParent(parentPinInput)
      await reloadAllData()
      setParentPinInput('')
      setStatusMsg(
        `Linked Parent Device to Family Circle "${res.familyCode}" (${res.studentsCount} students synced).`
      )
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : 'Failed to link Parent device.'
      )
    } finally {
      setBusy(false)
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
      {errorMsg && (
        <div className="alert alert-danger" role="alert">
          <span>⚠️ {errorMsg}</span>
          <button className="btn-icon" onClick={() => setErrorMsg('')}>
            ✕
          </button>
        </div>
      )}

      {/* TOP BANNER: CURRENT FAMILY SYNC STATUS */}
      <section className="card">
        <div className="section-header">
          <div>
            <span className="course-subject-tag">
              MULTI-DEVICE FAMILY CIRCLE &amp; CLOUD SYNC
            </span>
            <h1>Family Sync &amp; Multi-Student Oversight</h1>
            <p className="muted">
              Keep student progress, quiz reviews, and parent settings synchronized across parent and student devices without requiring parents to sign in on student devices.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
            {syncCfg?.enabled && (
              <span className="badge badge-success">
                Connected: {syncCfg.familyCode} ({syncCfg.deviceRole.toUpperCase()} MODE)
              </span>
            )}
            <button
              type="button"
              className="btn btn-primary btn-sm"
              disabled={!syncCfg?.enabled || syncingFamily}
              onClick={async () => {
                const res = await triggerFamilySync()
                if (res.ok) {
                  setStatusMsg(
                    `Synced Family Circle (${res.mergedStudents ?? students.length} students, ${res.mergedAttempts ?? allAttempts.length} attempts).`
                  )
                } else if (res.error) {
                  setErrorMsg(res.error)
                }
              }}
            >
              {syncingFamily ? 'Syncing...' : '🔄 Sync Now'}
            </button>
          </div>
        </div>

        <div className="settings-grid-2">
          {/* STUDENT DEVICE JOIN CARD (No Parent Sign-In Required!) */}
          <div className="settings-panel">
            <span className="badge badge-primary">For Student Devices</span>
            <h3 style={{ marginTop: '0.5rem' }}>
              Join Family Circle with Family Code + Student PIN
            </h3>
            <p className="muted-sm">
              Students: Enter the Family Join Code from your parent’s screen, pick your name, and enter your 4-digit Student PIN.
            </p>

            <div className="field-label" style={{ marginTop: '0.75rem' }}>
              1. Family Join Code
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="text"
                  className="input"
                  style={{ flex: 1 }}
                  placeholder="e.g., HSL-134901..."
                  value={joinCodeInput}
                  onChange={(e) => setJoinCodeInput(e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-secondary"
                  disabled={busy || !joinCodeInput.trim()}
                  onClick={() => void handleLoadRosterForStudentJoin()}
                >
                  Load Roster
                </button>
              </div>
            </div>

            <form onSubmit={handleStudentJoinSubmit} style={{ marginTop: '0.75rem' }}>
              <label className="field-label">
                2. Select Student Profile
                <select
                  className="input"
                  value={selectedStudentId}
                  onChange={(e) => setSelectedStudentId(e.target.value)}
                  required
                >
                  <option value="">-- Choose Student --</option>
                  {(previewStudents.length > 0 ? previewStudents : students).map(
                    (s) => (
                      <option key={s.id} value={s.id}>
                        {s.avatar} {s.name} (Grade {s.grade})
                      </option>
                    )
                  )}
                </select>
              </label>

              <label className="field-label" style={{ marginTop: '0.65rem' }}>
                3. Enter 4-Digit Student PIN (Default: 1111)
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="password"
                    className="input"
                    style={{ flex: 1 }}
                    placeholder="Student PIN (e.g. 1111)"
                    value={studentPinInput}
                    onChange={(e) => setStudentPinInput(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={busy || !selectedStudentId}
                  >
                    Join as Student
                  </button>
                </div>
              </label>
            </form>
          </div>

          {/* PARENT DEVICE SETUP & LINK CARD */}
          <div className="settings-panel">
            <span className="badge badge-gold">For Parent Devices</span>
            <h3 style={{ marginTop: '0.5rem' }}>
              Create or Link Family Circle (Parent Control)
            </h3>
            <p className="muted-sm">
              Create a zero-setup Cloud Family Circle in one click to get a shareable Family Join Code, or link another parent device using your Parent PIN.
            </p>

            {syncCfg?.enabled && syncCfg.familyCode ? (
              <div className="family-code-display">
                <div>
                  <span className="muted-sm">Active Family Join Code:</span>
                  <strong className="family-code-text">{syncCfg.familyCode}</strong>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    void navigator.clipboard?.writeText(syncCfg.familyCode)
                    setStatusMsg('Copied Family Join Code to clipboard!')
                  }}
                >
                  📋 Copy Code
                </button>
              </div>
            ) : null}

            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginTop: '0.85rem' }}>
              <button
                type="button"
                className="btn btn-primary"
                disabled={busy}
                onClick={() => void handleCreateFamily()}
              >
                ☁️ {syncCfg?.enabled ? 'Create New Family Circle' : 'Create Instant Family Circle'}
              </button>
            </div>

            <hr className="divider" />

            <form onSubmit={handleParentJoinSubmit}>
              <span className="field-label">
                Already have a Family Code? Link as Parent Device:
              </span>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.4rem', flexWrap: 'wrap' }}>
                <input
                  type="text"
                  className="input"
                  style={{ flex: 1, minWidth: '140px' }}
                  placeholder="Family Code (HSL-...)"
                  value={joinCodeInput}
                  onChange={(e) => setJoinCodeInput(e.target.value)}
                />
                <input
                  type="password"
                  className="input"
                  style={{ width: '130px' }}
                  placeholder="Parent PIN (1234)"
                  value={parentPinInput}
                  onChange={(e) => setParentPinInput(e.target.value)}
                />
                <button type="submit" className="btn btn-secondary" disabled={busy}>
                  Link Parent
                </button>
              </div>
            </form>

            <details style={{ marginTop: '0.75rem' }}>
              <summary className="muted-sm" style={{ cursor: 'pointer' }}>
                Advanced: Custom Firebase Realtime DB / REST JSON URL (Optional)
              </summary>
              <div style={{ marginTop: '0.5rem' }}>
                <input
                  type="url"
                  className="input"
                  style={{ width: '100%' }}
                  placeholder="https://your-project-default-rtdb.firebaseio.com/hsl-family.json"
                  value={customUrlInput}
                  onChange={(e) => setCustomUrlInput(e.target.value)}
                />
                <p className="muted-sm">
                  Leave blank to use the built-in zero-setup cloud relay, or paste your own Firebase Realtime Database `.json` URL.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* PARENT MULTI-STUDENT PROGRESS & OVERSIGHT DASHBOARD */}
      <section className="card">
        <div className="section-header">
          <div>
            <span className="course-subject-tag">
              PARENT MULTI-STUDENT PROGRESS &amp; ROSTER OVERSIGHT
            </span>
            <h2>All Students in Family Circle ({students.length})</h2>
            <p className="muted">
              Review every student’s live progress, GPA, Grade Level (4 or 6), and Student PIN across all connected devices.
            </p>
          </div>
          {!isParentUnlocked && (
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <input
                type="password"
                className="input input-sm"
                placeholder="Parent PIN (1234)"
                value={parentPinInput}
                onChange={(e) => setParentPinInput(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  if (!unlockParent(parentPinInput)) {
                    setErrorMsg('Incorrect Parent PIN (Default: 1234)')
                  } else {
                    setParentPinInput('')
                  }
                }}
              >
                🔓 Unlock Parent Edits
              </button>
            </div>
          )}
        </div>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Curriculum Grade</th>
                <th>Student Join PIN</th>
                <th>Overall Progress</th>
                <th>Term GPA</th>
                <th>Total Attempts</th>
                <th>Last Active</th>
                <th>Inspect Work</th>
              </tr>
            </thead>
            <tbody>
              {rosterSummaries.map(
                ({
                  student,
                  stuAttempts,
                  masteredSteps,
                  totalSteps,
                  pctComplete,
                  gpaReport,
                }) => (
                  <tr
                    key={student.id}
                    className={
                      inspectStudentId === student.id ? 'row-highlighted' : ''
                    }
                  >
                    <td>
                      <strong>
                        {student.avatar} {student.name}
                      </strong>
                    </td>
                    <td>
                      {isParentUnlocked ? (
                        <select
                          className="input input-sm"
                          value={student.grade}
                          onChange={(e) =>
                            void editStudent(student.id, {
                              grade: Number(e.target.value) as 4 | 6,
                            })
                          }
                        >
                          <option value={4}>Grade 4 (All 4 Subjects)</option>
                          <option value={6}>Grade 6 (All 4 Subjects)</option>
                        </select>
                      ) : (
                        <span className="badge badge-primary">
                          Grade {student.grade}
                        </span>
                      )}
                    </td>
                    <td>
                      {isParentUnlocked ? (
                        <input
                          type="text"
                          className="input input-sm"
                          style={{ width: '80px' }}
                          value={student.studentPin || '1111'}
                          onChange={(e) =>
                            void editStudent(student.id, {
                              studentPin: e.target.value,
                            })
                          }
                        />
                      ) : (
                        <code>••••</code>
                      )}
                    </td>
                    <td>
                      <strong>{pctComplete}%</strong> ({masteredSteps}/{totalSteps}{' '}
                      steps)
                    </td>
                    <td>
                      <strong>
                        {gpaReport.weightedGpa !== null
                          ? `${gpaReport.weightedGpa.toFixed(2)} (${gpaReport.letter})`
                          : '—'}
                      </strong>
                    </td>
                    <td>{stuAttempts.length}</td>
                    <td className="muted-sm">{student.lastActiveDate || '—'}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => {
                          setInspectStudentId(student.id)
                          setInspectAttemptId(null)
                        }}
                      >
                        🔍 Inspect Attempts
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        {isParentUnlocked && (
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              if (!newStuName.trim()) return
              await addStudent({
                name: newStuName.trim(),
                avatar: '🦊',
                grade: newStuGrade,
                studentPin: newStuPin.trim() || '1111',
              })
              setNewStuName('')
              setStatusMsg('Added student to Family Circle and synced.')
            }}
            style={{
              display: 'flex',
              gap: '0.6rem',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              marginTop: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--border)',
            }}
          >
            <label className="field-label">
              Add Student to Family
              <input
                type="text"
                className="input input-sm"
                placeholder="Student Name"
                value={newStuName}
                onChange={(e) => setNewStuName(e.target.value)}
              />
            </label>
            <label className="field-label">
              Grade
              <select
                className="input input-sm"
                value={newStuGrade}
                onChange={(e) => setNewStuGrade(Number(e.target.value) as 4 | 6)}
              >
                <option value={4}>Grade 4</option>
                <option value={6}>Grade 6</option>
              </select>
            </label>
            <label className="field-label">
              Student PIN
              <input
                type="text"
                className="input input-sm"
                style={{ width: '90px' }}
                value={newStuPin}
                onChange={(e) => setNewStuPin(e.target.value)}
              />
            </label>
            <button type="submit" className="btn btn-primary btn-sm">
              + Add Student
            </button>
          </form>
        )}
      </section>

      {/* DRILL-DOWN STUDENT ATTEMPT & QUESTION REVIEW INSPECTOR */}
      {inspectedSummary && (
        <section className="card">
          <h2>
            Detailed Progress &amp; Quiz Review: {inspectedSummary.student.avatar}{' '}
            {inspectedSummary.student.name} (Grade {inspectedSummary.student.grade})
          </h2>

          {inspectedSummary.stuAttempts.length === 0 ? (
            <p className="muted">
              No quiz attempts recorded yet for {inspectedSummary.student.name}.
            </p>
          ) : (
            <div className="settings-grid-2">
              <div>
                <h3>Completed Quiz Attempts ({inspectedSummary.stuAttempts.length})</h3>
                <div className="student-list">
                  {[...inspectedSummary.stuAttempts].reverse().map((att) => {
                    const course = getCourseById(att.courseId)
                    const foundLesson = course
                      ? findLessonInCourse(course, att.lessonId)
                      : null
                    const isSelected = inspectedAttempt?.id === att.id
                    return (
                      <button
                        key={att.id}
                        type="button"
                        className={`student-row ${isSelected ? 'active' : ''}`}
                        onClick={() => setInspectAttemptId(att.id)}
                      >
                        <div className="student-row-info">
                          <strong>
                            {foundLesson?.lesson.title ?? att.lessonId} (Attempt #
                            {att.attemptNumber})
                          </strong>
                          <span>
                            {course?.title ?? att.courseId} •{' '}
                            {new Date(att.completedAt).toLocaleString()}
                          </span>
                        </div>
                        <span
                          className={`badge ${
                            att.passed ? 'badge-success' : 'badge-warning'
                          }`}
                        >
                          {att.scorePercent}% ({att.correctCount}/{att.totalCount})
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                {inspectedAttempt ? (
                  <>
                    <h3>
                      Question-by-Question Review — Attempt #
                      {inspectedAttempt.attemptNumber} ({inspectedAttempt.scorePercent}
                      %)
                    </h3>
                    {inspectedAttempt.reviewItems &&
                    inspectedAttempt.reviewItems.length > 0 ? (
                      <div className="questions-stack">
                        {inspectedAttempt.reviewItems.map((item, idx) => (
                          <div
                            key={item.fingerprint}
                            className={`review-item ${
                              item.isCorrect ? 'review-correct' : 'review-wrong'
                            }`}
                          >
                            <div className="question-meta">
                              <strong>
                                {item.isCorrect ? '✅ Correct' : '❌ Missed'} — Q
                                {idx + 1}
                              </strong>
                              <span className="std-tag">
                                {item.principleTitle}
                              </span>
                            </div>
                            <p className="question-prompt">{item.prompt}</p>
                            <div className="review-answers">
                              <span>
                                Student Answer:{' '}
                                <strong>{item.studentAnswer}</strong>
                              </span>
                              {!item.isCorrect && (
                                <span>
                                  Correct Answer:{' '}
                                  <strong>{item.correctAnswer}</strong>
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="muted-sm">
                        This attempt was recorded before question-level review snapshots were enabled.
                      </p>
                    )}
                  </>
                ) : null}
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  )
}
