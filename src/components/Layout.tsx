import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { checkAndTriggerDailyReminder } from '../lib/notifications'
import { DisplayTunerModal } from './DisplayTunerModal'
import { StudentPickerModal } from './StudentPickerModal'

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { activeStudent, updateStatus, applyUpdateNow, settings, updateAppSettings } = useApp()
  const [pickerOpen, setPickerOpen] = useState(false)
  const [tunerOpen, setTunerOpen] = useState(false)

  // Apply visual theme, typography scale, workspace max-width, and aspect ratio classes to root html element
  useEffect(() => {
    if (typeof document === 'undefined') return
    const root = document.documentElement

    // 1. Theme
    const theme = settings.colorScheme || 'daylight'
    root.setAttribute('data-theme', theme)

    // 2. Sizing Scale
    const scale = (settings.uiScale ?? 100) / 100
    root.style.setProperty('--ui-scale', String(scale))

    // 3. Workspace Max Width
    const maxWidth = settings.workspaceMaxWidth ?? 1280
    root.style.setProperty('--workspace-max-width', `${maxWidth}px`)

    // 4. Aspect Ratio & Orientation Mode
    const updateAspect = () => {
      const mode = settings.viewportAspectMode || 'auto'
      if (mode === 'auto') {
        const isPortrait =
          window.innerWidth <= 640 || window.innerHeight > window.innerWidth
        root.setAttribute('data-aspect', isPortrait ? 'portrait' : 'landscape')
      } else {
        root.setAttribute('data-aspect', mode)
      }
    }

    updateAspect()
    window.addEventListener('resize', updateAspect)
    window.addEventListener('orientationchange', updateAspect)
    return () => {
      window.removeEventListener('resize', updateAspect)
      window.removeEventListener('orientationchange', updateAspect)
    }
  }, [
    settings.colorScheme,
    settings.uiScale,
    settings.viewportAspectMode,
    settings.workspaceMaxWidth,
  ])

  // Daily learning reminder check
  useEffect(() => {
    if (settings.dailyReminderEnabled) {
      void checkAndTriggerDailyReminder(
        settings.dailyReminderEnabled,
        settings.dailyReminderTime,
        settings.lastDailyReminderDate,
        activeStudent,
        async (todayStr) => {
          await updateAppSettings({ lastDailyReminderDate: todayStr })
        }
      )
    }
  }, [
    settings.dailyReminderEnabled,
    settings.dailyReminderTime,
    settings.lastDailyReminderDate,
    activeStudent,
    updateAppSettings,
  ])

  return (
    <div className="app-shell">
      {updateStatus?.updateAvailable && (
        <div className="update-banner" role="status">
          <div>
            <strong>New Deployed Version Available!</strong>{' '}
            <span>
              Version {updateStatus.remote?.version} ({updateStatus.remote?.commit}) is ready. Your student progress is safely stored locally.
            </span>
          </div>
          <button className="btn btn-accent btn-sm" onClick={() => void applyUpdateNow()}>
            Reload &amp; Update Now
          </button>
        </div>
      )}

      <header className="topbar">
        <div className="topbar-inner">
          <Link to="/" className="brand">
            <span className="brand-icon">🎓</span>
            <div>
              <span className="brand-title">Home-School-Lite</span>
              <span className="brand-sub">Acellus-Style Mastery Academy</span>
            </div>
          </Link>

          <nav className="main-nav" aria-label="Primary Navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/tracker"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Progress &amp; Standards
            </NavLink>
            <NavLink
              to="/grades"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              GPA &amp; Report Card
            </NavLink>
            <NavLink
              to="/family"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Family Sync
            </NavLink>
            <NavLink
              to="/teacher-resources"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Teacher Resources
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Settings
            </NavLink>
          </nav>

          <div className="topbar-actions">
            <button
              type="button"
              className="btn-icon-pill"
              onClick={() => setTunerOpen(true)}
              title="Display, Colors &amp; Sizing Tuner"
              aria-label="Display, Colors &amp; Sizing Tuner"
            >
              <span className="tuner-icon">🎨</span>
              <span className="tuner-text">Aa</span>
            </button>

            {activeStudent && (
              <button
                type="button"
                className="student-pill"
                onClick={() => setPickerOpen(true)}
                title="Switch Student Profile"
              >
                <span className="student-avatar">{activeStudent.avatar}</span>
                <div className="student-pill-text">
                  <span className="student-name">{activeStudent.name}</span>
                  <span className="student-grade-badge">Grade {activeStudent.grade}</span>
                </div>
                <span className="caret">▾</span>
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="main-container">{children}</main>

      <footer className="app-footer">
        <div className="footer-inner">
          <span>
            <strong>Home-School-Lite</strong> v{updateStatus?.currentVersion ?? '1.0.0'} • Isolated PWA ID: <code>/Home-School-Lite/?app=home-school-lite</code>
          </span>
          <span>
            💾 Student data is stored locally in IndexedDB.{' '}
            <Link to="/settings">Export JSON Backup in Settings</Link>
          </span>
        </div>
      </footer>

      <StudentPickerModal open={pickerOpen} onClose={() => setPickerOpen(false)} />
      <DisplayTunerModal open={tunerOpen} onClose={() => setTunerOpen(false)} />
    </div>
  )
}
