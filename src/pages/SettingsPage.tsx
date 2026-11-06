import React, { useState } from 'react'
import { useApp } from '../context/AppContext'
import { exportBackupData, importBackupData } from '../lib/db'
import { APP_ID, APP_SCOPE, CACHE_PREFIX, STORAGE_PREFIX } from '../lib/storage'
import { GradeLevel } from '../types'

export const SettingsPage: React.FC = () => {
  const {
    activeStudent,
    students,
    settings,
    isParentUnlocked,
    unlockParent,
    lockParent,
    editStudent,
    removeStudent,
    updateAppSettings,
    reloadAllData,
    updateStatus,
    checkingUpdate,
    triggerUpdateCheck,
    applyUpdateNow,
  } = useApp()

  const [pinInput, setPinInput] = useState('')
  const [pinError, setPinError] = useState('')
  const [statusMsg, setStatusMsg] = useState('')
  const [importError, setImportError] = useState('')
  const [newPin, setNewPin] = useState(settings.parentPin)

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

      {/* SECTION 2: PARENT PIN GATE FOR CURRICULUM & GRADING CONTROLS */}
      {!isParentUnlocked ? (
        <section className="card pin-gate-card">
          <h2>🔒 Parent / Teacher Controls (PIN Protected)</h2>
          <p className="muted">
            Enter your Parent PIN to change {activeStudent?.name ?? 'the student'}’s Grade Level (Grade 4 or Grade 6), adjust the Mastery Threshold (default 80%), or modify GPA weights.{' '}
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
          <section className="card">
            <div className="section-header">
              <div>
                <span className="course-subject-tag">STUDENT CURRICULUM LEVEL</span>
                <h2>
                  Logged-In Student Grade Level: {activeStudent?.name} ({activeStudent?.avatar})
                </h2>
                <p className="muted">
                  Selecting Grade 4 or Grade 6 sets all four subjects (Math, Science, Language Arts, and Social Studies) for {activeStudent?.name}. Switching grades preserves all prior grade progress and grades.
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
                    <button
                      type="button"
                      className={`grade-toggle-btn ${
                        activeStudent.grade === 4 ? 'selected' : ''
                      }`}
                      onClick={() => void handleGradeChange(4)}
                    >
                      <strong>Grade 4 Curriculum</strong>
                      <span>4th Grade Math, Science, ELA &amp; Social Studies</span>
                    </button>
                    <button
                      type="button"
                      className={`grade-toggle-btn ${
                        activeStudent.grade === 6 ? 'selected' : ''
                      }`}
                      onClick={() => void handleGradeChange(6)}
                    >
                      <strong>Grade 6 Curriculum</strong>
                      <span>6th Grade Math, Science, ELA &amp; Social Studies</span>
                    </button>
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
                      onClick={() => void removeStudent(activeStudent.id)}
                    >
                      Delete Profile ({activeStudent.name})
                    </button>
                  )}
                </div>
              </div>
            )}
          </section>

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
            <h4>Mobile Install &amp; Same-Origin Isolation Identity</h4>
            <p className="muted-sm">
              Configured so installing this PWA from <code>p4kk4s4n.github.io</code> never collides with or blocks any sibling app on the same domain:
            </p>
            <div className="diag-row">
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
      </section>
    </div>
  )
}
