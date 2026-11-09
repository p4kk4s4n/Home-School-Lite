import React, { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { findLessonInCourse, getCourseById, getCoursesForGrade } from '../lib/curriculum'
import { computeGpaReport } from '../lib/grading'
import { computeCourseProgress } from '../lib/progress'
import {
  createCloudFamilyCircle,
  disconnectFamilySync,
  fetchRemoteFamilyPreview,
  generateRandomFamilyCode,
  joinFamilyAsParent,
  joinFamilyAsStudent,
  normalizeFamilyCode,
  syncFamilyCircle,
  testSyncConnection,
} from '../lib/sync'
import { AttemptRecord, GradeLevel, Student, SUPPORTED_GRADES } from '../types'

type ActiveTab = 'parent' | 'student' | 'guide'

export const FamilyPage: React.FC = () => {
  const [searchParams] = useSearchParams()
  const {
    students,
    activeStudent,
    allAttempts,
    settings,
    isParentUnlocked,
    unlockParent,
    editStudent,
    addStudent,
    removeStudent,
    reloadAllData,
    syncingFamily,
    triggerFamilySync,
  } = useApp()

  const syncCfg = settings.familySync

  // Determine initial tab from query params or current device role
  const [activeTab, setActiveTab] = useState<ActiveTab>(() => {
    const roleParam = searchParams.get('role')
    if (roleParam === 'student') return 'student'
    if (roleParam === 'guide') return 'guide'
    if (syncCfg?.enabled && syncCfg.deviceRole === 'student') return 'student'
    return 'parent'
  })

  // Inputs
  const [familyCodeInput, setFamilyCodeInput] = useState(() => {
    return searchParams.get('code') || syncCfg?.familyCode || generateRandomFamilyCode()
  })

  const [dbUrlInput, setDbUrlInput] = useState(() => {
    return searchParams.get('url') || syncCfg?.syncEndpointUrl || ''
  })

  // Student join state
  const [previewStudents, setPreviewStudents] = useState<Student[]>([])
  const [selectedStudentId, setSelectedStudentId] = useState('')
  const [studentPinInput, setStudentPinInput] = useState('')

  // Parent login / link state
  const [parentPinInput, setParentPinInput] = useState('')

  // New student form
  const [newStuName, setNewStuName] = useState('')
  const [newStuGrade, setNewStuGrade] = useState<GradeLevel>(4)
  const [newStuPin, setNewStuPin] = useState('1111')

  // Attempt review inspector
  const [inspectStudentId, setInspectStudentId] = useState<string>(
    activeStudent?.id || students[0]?.id || ''
  )
  const [inspectAttemptId, setInspectAttemptId] = useState<string | null>(null)

  // Status & feedback
  const [busy, setBusy] = useState(false)
  const [statusMsg, setStatusMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const codeParam = searchParams.get('code')
    if (codeParam) setFamilyCodeInput(codeParam)
    const urlParam = searchParams.get('url')
    if (urlParam) setDbUrlInput(urlParam)
  }, [searchParams])

  // Summaries of all students for the Parent oversight view
  const rosterSummaries = useMemo(() => {
    const includeOhio = settings.includeOhioAdjustments ?? true
    return students.map((stu) => {
      const stuCourses = getCoursesForGrade(stu.grade, includeOhio)
      const stuAttempts = allAttempts.filter((a) => a.studentId === stu.id)
      const courseProgress = stuCourses.map((c) =>
        computeCourseProgress(c, stuAttempts, settings.masteryThreshold)
      )
      const masteredSteps = courseProgress.reduce((acc, p) => acc + p.masteredCount, 0)
      const totalSteps = courseProgress.reduce((acc, p) => acc + p.totalCount, 0)
      const pctComplete =
        totalSteps > 0 ? Math.round((masteredSteps / totalSteps) * 100) : 0
      const gpaReport = computeGpaReport(stuCourses, stuAttempts, settings)

      let needsCoachingCount = 0
      for (const cp of courseProgress) {
        for (const item of cp.items) {
          if (item.status !== 'mastered' && item.attempts.length >= 3) {
            needsCoachingCount++
          }
        }
      }

      return {
        student: stu,
        stuAttempts,
        masteredSteps,
        totalSteps,
        pctComplete,
        gpaReport,
        needsCoachingCount,
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

  // Generate shareable student invite link
  const studentInviteLink = useMemo(() => {
    if (!syncCfg?.familyCode) return ''
    const base = window.location.origin + window.location.pathname
    const params = new URLSearchParams()
    params.set('role', 'student')
    params.set('code', syncCfg.familyCode)
    if (syncCfg.syncEndpointUrl) {
      params.set('url', syncCfg.syncEndpointUrl)
    }
    return `${base}#/family?${params.toString()}`
  }, [syncCfg])

  // --- ACTIONS ---

  const handleTestConnection = async () => {
    if (!dbUrlInput.trim()) {
      setErrorMsg('Please enter your Cloud Database URL before testing.')
      return
    }
    setBusy(true)
    setErrorMsg('')
    setStatusMsg('')
    try {
      const res = await testSyncConnection(familyCodeInput, dbUrlInput)
      if (res.ok) {
        setStatusMsg(`✅ ${res.message}`)
      } else {
        setErrorMsg(`❌ ${res.message}`)
      }
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Connection test failed.')
    } finally {
      setBusy(false)
    }
  }

  const handleInitializeFamilyCircle = async () => {
    const cleanCode = normalizeFamilyCode(familyCodeInput)
    if (!cleanCode) {
      setErrorMsg('Please enter a valid Family Code (e.g. HSL-78421).')
      return
    }
    if (!dbUrlInput.trim()) {
      setErrorMsg(
        'Please enter your Cloud Database URL (e.g. your Firebase Realtime DB URL). See the "How-To Guide" tab for 90-second setup instructions.'
      )
      return
    }

    setBusy(true)
    setErrorMsg('')
    setStatusMsg('')
    try {
      const res = await createCloudFamilyCircle({
        familyCode: cleanCode,
        endpointUrl: dbUrlInput.trim(),
      })
      await reloadAllData()
      setStatusMsg(
        `Family Circle "${res.familyCode}" initialized and saved to cloud! Now set your Student PINs below and share the code with student devices.`
      )
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Failed to create Family Circle in cloud.'
      )
    } finally {
      setBusy(false)
    }
  }

  const handleForcePushToCloud = async () => {
    setBusy(true)
    setErrorMsg('')
    setStatusMsg('')
    try {
      await createCloudFamilyCircle({
        familyCode: syncCfg?.familyCode || familyCodeInput,
        endpointUrl: syncCfg?.syncEndpointUrl || dbUrlInput,
      })
      setStatusMsg('Force-pushed local student roster and records to cloud successfully!')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Cloud push failed.')
    } finally {
      setBusy(false)
    }
  }

  const handleDisconnect = async () => {
    if (
      !window.confirm(
        'Disconnect Family Sync on this device? Your local student records and scores will NOT be deleted.'
      )
    ) {
      return
    }
    setBusy(true)
    try {
      await disconnectFamilySync()
      await reloadAllData()
      setStatusMsg('Disconnected from Family Sync. App is now in standalone local mode.')
    } finally {
      setBusy(false)
    }
  }

  const handleFindFamilyRoster = async () => {
    const cleanCode = normalizeFamilyCode(familyCodeInput)
    if (!cleanCode) {
      setErrorMsg('Please enter your Family Code.')
      return
    }
    if (!dbUrlInput.trim()) {
      setErrorMsg('Please enter or verify the Cloud Database URL.')
      return
    }

    setBusy(true)
    setErrorMsg('')
    setStatusMsg('')
    try {
      const remote = await fetchRemoteFamilyPreview(cleanCode, dbUrlInput)
      setPreviewStudents(remote.students)
      if (remote.students.length > 0) {
        setSelectedStudentId(remote.students[0].id)
      }
      setStatusMsg(
        `Found Family Circle "${cleanCode}" with ${remote.students.length} student profile(s). Choose your name and enter your 4-digit Student PIN.`
      )
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Family Circle not found.')
    } finally {
      setBusy(false)
    }
  }

  const handleStudentJoinSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!familyCodeInput.trim() || !selectedStudentId || !studentPinInput.trim()) return
    setBusy(true)
    setErrorMsg('')
    setStatusMsg('')
    try {
      const res = await joinFamilyAsStudent({
        familyCode: familyCodeInput,
        studentId: selectedStudentId,
        studentPin: studentPinInput,
        customEndpointUrl: dbUrlInput,
      })
      await reloadAllData()
      setStudentPinInput('')
      setStatusMsg(
        `Joined Family Circle "${res.familyCode}" as ${res.student.name} (Grade ${res.student.grade})! Your progress now syncs automatically.`
      )
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to join as student.')
    } finally {
      setBusy(false)
    }
  }

  const handleParentLinkSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!familyCodeInput.trim() || !parentPinInput.trim() || !dbUrlInput.trim()) return
    setBusy(true)
    setErrorMsg('')
    setStatusMsg('')
    try {
      const res = await joinFamilyAsParent({
        familyCode: familyCodeInput,
        parentPin: parentPinInput,
        customEndpointUrl: dbUrlInput,
      })
      unlockParent(parentPinInput)
      await reloadAllData()
      setParentPinInput('')
      setStatusMsg(
        `Linked this device as Parent to Family Circle "${res.familyCode}" (${res.studentsCount} students synced).`
      )
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to link Parent device.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="page-stack">
      {statusMsg && (
        <div className="alert alert-success" role="status">
          <span>{statusMsg}</span>
          <button className="btn-icon" onClick={() => setStatusMsg('')}>
            ✕
          </button>
        </div>
      )}
      {errorMsg && (
        <div className="alert alert-danger" role="alert">
          <span>{errorMsg}</span>
          <button className="btn-icon" onClick={() => setErrorMsg('')}>
            ✕
          </button>
        </div>
      )}

      {/* TOP ROLE TABS */}
      <section className="card" style={{ paddingBottom: '0.75rem' }}>
        <div className="section-header" style={{ marginBottom: '0.75rem' }}>
          <div>
            <span className="course-subject-tag">
              MULTI-DEVICE FAMILY CIRCLE &amp; CLOUD SYNC
            </span>
            <h1>Family Sync &amp; Multi-Student Oversight</h1>
            <p className="muted">
              Connect parent and student devices so progress, quiz reviews, and settings stay in sync without requiring parents to log in on children’s devices.
            </p>
          </div>
          {syncCfg?.enabled && (
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <span className="badge badge-success">
                🟢 {syncCfg.familyCode} ({syncCfg.deviceRole.toUpperCase()} DEVICE)
              </span>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                disabled={syncingFamily}
                onClick={async () => {
                  const res = await triggerFamilySync()
                  if (res.ok) {
                    setStatusMsg(
                      `Synced Family Circle successfully (${res.mergedStudents ?? students.length} students, ${res.mergedAttempts ?? allAttempts.length} attempts).`
                    )
                  } else if (res.error) {
                    setErrorMsg(res.error)
                  }
                }}
              >
                {syncingFamily ? 'Syncing...' : '🔄 Sync Now'}
              </button>
            </div>
          )}
        </div>

        <div className="mode-tabs" style={{ marginTop: '0.5rem' }}>
          <button
            type="button"
            className={`mode-tab ${activeTab === 'parent' ? 'active' : ''}`}
            onClick={() => setActiveTab('parent')}
          >
            👨‍👩‍👧 Parent Device (Admin &amp; Oversight)
          </button>
          <button
            type="button"
            className={`mode-tab ${activeTab === 'student' ? 'active' : ''}`}
            onClick={() => setActiveTab('student')}
          >
            🎒 Student Device (Connect &amp; Learn)
          </button>
          <button
            type="button"
            className={`mode-tab ${activeTab === 'guide' ? 'active' : ''}`}
            onClick={() => setActiveTab('guide')}
          >
            ❓ How-To Guide &amp; Troubleshooting
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* TAB 1: PARENT DEVICE MODE                                                 */}
      {/* ========================================================================= */}
      {activeTab === 'parent' && (
        <>
          {/* STEP 1: INITIALIZE OR MANAGE CIRCLE */}
          <section className="card">
            <div className="section-header">
              <div>
                <span className="course-subject-tag">STEP 1: CLOUD SETUP</span>
                <h2>Configure &amp; Initialize Family Circle</h2>
                <p className="muted-sm">
                  Choose a unique Family Code and provide your Firebase Realtime Database URL (free Google cloud storage).
                </p>
              </div>
              {syncCfg?.enabled && (
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={handleDisconnect}
                  disabled={busy}
                >
                  Disconnect &amp; Reset Sync
                </button>
              )}
            </div>

            <div className="settings-grid-2">
              <div className="settings-panel">
                <label className="field-label">
                  1. Your Family Code (Randomized 5-Digit Code e.g. HSL-#####)
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                    <input
                      type="text"
                      className="input"
                      placeholder="e.g., HSL-78421"
                      value={familyCodeInput}
                      onChange={(e) => setFamilyCodeInput(e.target.value)}
                    />
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      style={{ whiteSpace: 'nowrap' }}
                      onClick={() => setFamilyCodeInput(generateRandomFamilyCode())}
                      title="Generate new random 5-digit Family Code"
                    >
                      🎲 New Code
                    </button>
                  </div>
                  <span className="muted-sm">
                    This is the code your children will type into their devices to find your family circle.
                  </span>
                </label>

                <label className="field-label" style={{ marginTop: '0.85rem' }}>
                  2. Cloud Database URL (Firebase Realtime DB or custom REST)
                  <input
                    type="url"
                    className="input"
                    placeholder="https://your-proj-default-rtdb.firebaseio.com"
                    value={dbUrlInput}
                    onChange={(e) => setDbUrlInput(e.target.value)}
                  />
                  <span className="muted-sm">
                    Need a free URL? See the <strong>How-To Guide tab</strong> for 90-second setup steps (free forever on Google Spark tier).
                  </span>
                </label>

                <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleTestConnection}
                    disabled={busy || !dbUrlInput.trim()}
                  >
                    🔌 Test Cloud Connection
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleInitializeFamilyCircle}
                    disabled={busy || !dbUrlInput.trim() || !familyCodeInput.trim()}
                  >
                    ☁️ Create / Initialize Circle
                  </button>
                </div>
              </div>

              <div className="settings-panel">
                {syncCfg?.enabled && syncCfg.familyCode ? (
                  <>
                    <span className="badge badge-success">Circle Active &amp; Ready</span>
                    <h3 style={{ margin: '0.4rem 0 0.2rem' }}>Share with Students</h3>
                    <div className="family-code-display">
                      <div>
                        <span className="muted-sm">Family Join Code:</span>
                        <strong className="family-code-text">{syncCfg.familyCode}</strong>
                      </div>
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => {
                          void navigator.clipboard?.writeText(syncCfg.familyCode)
                          setStatusMsg('Copied Family Code to clipboard!')
                        }}
                      >
                        📋 Copy Code
                      </button>
                    </div>

                    <div style={{ marginTop: '0.85rem' }}>
                      <span className="muted-sm">1-Click Student Invite Link:</span>
                      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                        <input
                          type="text"
                          className="input input-sm"
                          style={{ flex: 1 }}
                          readOnly
                          value={studentInviteLink}
                        />
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          onClick={() => {
                            void navigator.clipboard?.writeText(studentInviteLink)
                            setStatusMsg('Copied Student Invite Link to clipboard!')
                          }}
                        >
                          📋 Copy Link
                        </button>
                      </div>
                      <span className="muted-sm">
                        Send this link via text or email to open directly on the child’s device with the code filled in!
                      </span>
                    </div>

                    <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        disabled={busy}
                        onClick={handleForcePushToCloud}
                      >
                        ⬆ Force Push Roster to Cloud
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h4>Link Another Existing Parent Device</h4>
                    <p className="muted-sm">
                      If you already created a Family Circle on another computer/phone, enter the code and your Parent PIN to link this device.
                    </p>
                    <form onSubmit={handleParentLinkSubmit} style={{ marginTop: '0.75rem' }}>
                      <label className="field-label">
                        Parent PIN
                        <input
                          type="password"
                          className="input"
                          placeholder="Parent PIN (default: 1234)"
                          value={parentPinInput}
                          onChange={(e) => setParentPinInput(e.target.value)}
                        />
                      </label>
                      <button
                        type="submit"
                        className="btn btn-secondary"
                        style={{ marginTop: '0.75rem' }}
                        disabled={busy || !familyCodeInput.trim() || !parentPinInput.trim() || !dbUrlInput.trim()}
                      >
                        Link Existing Circle
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </section>

          {/* STEP 2: ROSTER & STUDENT PIN MANAGEMENT */}
          <section className="card">
            <div className="section-header">
              <div>
                <span className="course-subject-tag">STEP 2: ROSTER &amp; STUDENT PINS</span>
                <h2>Family Roster ({students.length} Students)</h2>
                <p className="muted">
                  Each student needs a Grade level and a 4-digit Student PIN. Students enter their PIN to connect their device without needing the parent PIN.
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
                    <th>Grade Level</th>
                    <th>Student Join PIN</th>
                    <th>Overall Progress</th>
                    <th>Term GPA</th>
                    <th>Total Attempts</th>
                    <th>Last Active</th>
                    <th>Inspect Work</th>
                    {isParentUnlocked && <th>Actions</th>}
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
                      needsCoachingCount,
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
                          {needsCoachingCount > 0 && (
                            <span
                              className="badge badge-warning"
                              style={{ marginLeft: '0.4rem' }}
                              title="3+ non-mastery attempts on a lesson segment"
                            >
                              ⚠️ Needs Help ({needsCoachingCount})
                            </span>
                          )}
                        </td>
                        <td>
                          {isParentUnlocked ? (
                            <select
                              className="input input-sm"
                              value={student.grade}
                              onChange={(e) =>
                                void editStudent(student.id, {
                                  grade: Number(e.target.value) as GradeLevel,
                                })
                              }
                            >
                              {SUPPORTED_GRADES.map((g) => (
                                <option key={g} value={g}>
                                  Grade {g} (All 4 Subjects)
                                </option>
                              ))}
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
                              style={{ width: '80px', fontWeight: 'bold' }}
                              value={student.studentPin || '1111'}
                              onChange={(e) =>
                                void editStudent(student.id, {
                                  studentPin: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <code>{student.studentPin || '1111'}</code>
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
                            🔍 Inspect Quizzes
                          </button>
                        </td>
                        {isParentUnlocked && (
                          <td>
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                              title={`Delete ${student.name} from roster`}
                              onClick={async () => {
                                const confirmed = window.confirm(
                                  `Are you sure you want to delete ${student.name}?\n\nThis will remove their profile, enrolled courses, and quiz attempts from this family circle.`
                                )
                                if (!confirmed) return
                                await removeStudent(student.id)
                                if (inspectStudentId === student.id) {
                                  const remaining = students.filter((s) => s.id !== student.id)
                                  setInspectStudentId(remaining[0]?.id || '')
                                  setInspectAttemptId(null)
                                }
                                setStatusMsg(`Student "${student.name}" was removed from the family circle.`)
                              }}
                            >
                              🗑 Delete
                            </button>
                          </td>
                        )}
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
                  setStatusMsg(`Added ${newStuName.trim()} to family roster and synced.`)
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
                  Add Student to Roster
                  <input
                    type="text"
                    className="input input-sm"
                    placeholder="Child's Name"
                    value={newStuName}
                    onChange={(e) => setNewStuName(e.target.value)}
                  />
                </label>
                <label className="field-label">
                  Grade
                  <select
                    className="input input-sm"
                    value={newStuGrade}
                    onChange={(e) => setNewStuGrade(Number(e.target.value) as GradeLevel)}
                  >
                    {SUPPORTED_GRADES.map((g) => (
                      <option key={g} value={g}>
                        Grade {g}
                      </option>
                    ))}
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

          {/* STEP 3: DRILL-DOWN ATTEMPT & QUESTION INSPECTOR */}
          {inspectedSummary && (
            <section className="card">
              <div className="section-header">
                <div>
                  <span className="course-subject-tag">LIVE OVERSIGHT &amp; AUDIT</span>
                  <h2>
                    Quiz History: {inspectedSummary.student.avatar}{' '}
                    {inspectedSummary.student.name} (Grade {inspectedSummary.student.grade})
                  </h2>
                </div>
              </div>

              {inspectedSummary.stuAttempts.length === 0 ? (
                <p className="muted">
                  No quiz attempts recorded yet for {inspectedSummary.student.name}. Once they take quizzes on their device, their attempts will appear here.
                </p>
              ) : (
                <div className="settings-grid-2">
                  <div>
                    <h3>Completed Quizzes ({inspectedSummary.stuAttempts.length})</h3>
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
                                <div className="review-explanation">
                                  <strong>Explanation:</strong> {item.explanation}
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
        </>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: STUDENT DEVICE MODE                                                */}
      {/* ========================================================================= */}
      {activeTab === 'student' && (
        <section className="card" style={{ maxWidth: '640px', margin: '0 auto' }}>
          {syncCfg?.enabled && syncCfg.deviceRole === 'student' && activeStudent ? (
            <div>
              <span className="badge badge-success">Connected Student Device</span>
              <h2 style={{ marginTop: '0.5rem' }}>
                Welcome, {activeStudent.avatar} {activeStudent.name}!
              </h2>
              <p className="muted">
                This device is connected to Family Circle <strong>{syncCfg.familyCode}</strong> for <strong>Grade {activeStudent.grade}</strong>. All quizzes you finish are automatically saved and shared with your parent.
              </p>
              <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={syncingFamily}
                  onClick={async () => {
                    const res = await triggerFamilySync()
                    if (res.ok) setStatusMsg('Synced progress with parent successfully!')
                  }}
                >
                  {syncingFamily ? 'Syncing...' : '🔄 Sync Progress Now'}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleDisconnect}
                >
                  Disconnect This Device
                </button>
              </div>
            </div>
          ) : (
            <div>
              <span className="badge badge-primary">Student Device Setup</span>
              <h2 style={{ marginTop: '0.5rem' }}>Connect to Your Family Circle</h2>
              <p className="muted-sm">
                Enter your Family Code from your parent, choose your name, and enter your 4-digit Student PIN. Parents do NOT need to sign in here!
              </p>

              <div style={{ marginTop: '1rem' }}>
                <label className="field-label">
                  1. Family Join Code
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input
                      type="text"
                      className="input"
                      style={{ flex: 1, textTransform: 'uppercase', fontWeight: 'bold' }}
                      placeholder="e.g. HSL-78421"
                      value={familyCodeInput}
                      onChange={(e) => setFamilyCodeInput(e.target.value)}
                    />
                    <button
                      type="button"
                      className="btn btn-secondary"
                      disabled={busy || !familyCodeInput.trim()}
                      onClick={handleFindFamilyRoster}
                    >
                      Find Family
                    </button>
                  </div>
                </label>

                <details style={{ marginTop: '0.65rem' }}>
                  <summary className="muted-sm" style={{ cursor: 'pointer' }}>
                    Database URL (auto-filled if using invite link)
                  </summary>
                  <input
                    type="url"
                    className="input input-sm"
                    style={{ width: '100%', marginTop: '0.35rem' }}
                    placeholder="https://your-proj-default-rtdb.firebaseio.com"
                    value={dbUrlInput}
                    onChange={(e) => setDbUrlInput(e.target.value)}
                  />
                </details>
              </div>

              {previewStudents.length > 0 && (
                <form onSubmit={handleStudentJoinSubmit} style={{ marginTop: '1.25rem' }}>
                  <label className="field-label">
                    2. Select Your Name
                    <select
                      className="input"
                      value={selectedStudentId}
                      onChange={(e) => setSelectedStudentId(e.target.value)}
                      required
                    >
                      {previewStudents.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.avatar} {s.name} (Grade {s.grade})
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="field-label" style={{ marginTop: '0.75rem' }}>
                    3. Your 4-Digit Student PIN
                    <input
                      type="password"
                      className="input"
                      placeholder="4-digit PIN (ask your parent)"
                      value={studentPinInput}
                      onChange={(e) => setStudentPinInput(e.target.value)}
                      required
                    />
                  </label>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ width: '100%', marginTop: '1.25rem' }}
                    disabled={busy || !selectedStudentId || !studentPinInput.trim()}
                  >
                    🚀 Connect &amp; Start Learning
                  </button>
                </form>
              )}
            </div>
          )}
        </section>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: HOW-TO GUIDE & TROUBLESHOOTING                                     */}
      {/* ========================================================================= */}
      {activeTab === 'guide' && (
        <section className="card">
          <h2>Family Circle Setup &amp; Troubleshooting Guide</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
            <div className="settings-panel">
              <h3 style={{ marginTop: 0 }}>1. The Correct Order of Steps</h3>
              <ol style={{ paddingLeft: '1.25rem', lineHeight: '1.8' }}>
                <li>
                  <strong>On the Parent Device:</strong> Open Family Sync &rarr; Parent Device. Choose your Family Code (e.g. <code>HSL-78421</code>), paste your Firebase Realtime DB URL, and click <strong>Create / Initialize Circle</strong>.
                </li>
                <li>
                  <strong>Set Student PINs:</strong> In the Family Roster table, ensure each child has their Grade Level (4 or 6) and 4-digit PIN (default is <code>1111</code>, or customize it).
                </li>
                <li>
                  <strong>On the Student Device:</strong> Open Family Sync &rarr; Student Device (or click the Share Link). Enter <code>HSL-78421</code>, click <strong>Find Family</strong>, pick their name, and enter their Student PIN.
                </li>
                <li>
                  <strong>Done!</strong> Quizzes completed by the student automatically sync to the parent oversight dashboard.
                </li>
              </ol>
            </div>

            <div className="settings-panel">
              <h3 style={{ marginTop: 0 }}>2. Why did the "HTTP 404" error happen?</h3>
              <p className="muted-sm">
                In the earlier version, typing a code like <code>HSL-78421</code> attempted to fetch a cloud document that had not been initialized yet. Because no document existed at that key, the server returned <strong>HTTP 404 (Not Found)</strong>.
              </p>
              <p className="muted-sm">
                <strong>The solution:</strong> On the Parent device, clicking <strong>"Create / Initialize Circle"</strong> now writes the document immediately via HTTP PUT so it is guaranteed to exist when the student connects!
              </p>
            </div>

            <div className="settings-panel">
              <h3 style={{ marginTop: 0 }}>3. Free Firebase Realtime DB in 90 Seconds</h3>
              <p className="muted-sm">
                Google Firebase Realtime Database provides free, reliable, CORS-enabled cloud storage for your family with zero credit card required:
              </p>
              <ol style={{ paddingLeft: '1.25rem', lineHeight: '1.8' }}>
                <li>Go to <a href="https://console.firebase.google.com" target="_blank" rel="noopener noreferrer">console.firebase.google.com</a> and click <strong>Add project</strong> (e.g. "homeschool").</li>
                <li>In the left sidebar, click <strong>Build &rarr; Realtime Database</strong>, then click <strong>Create Database</strong>.</li>
                <li>Select a location (e.g. United States) and when prompted for Security Rules, choose <strong>Start in test mode</strong> (or allow read/write under <code>/families</code>).</li>
                <li>Copy the Database URL displayed at the top (e.g. <code>https://my-homeschool-default-rtdb.firebaseio.com</code>).</li>
                <li>Paste that URL into the <strong>Cloud Database URL</strong> field in Home-School-Lite!</li>
              </ol>
            </div>

            <div className="settings-panel">
              <h3 style={{ marginTop: 0 }}>4. How to Reset / Recover</h3>
              <p className="muted-sm">
                If anything gets confused or you want a fresh start, simply click <strong>"Disconnect &amp; Reset Sync"</strong> on the Parent tab. This returns your device to clean standalone mode without deleting your local student records.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
