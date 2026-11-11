import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { StudentPickerModal } from './StudentPickerModal'

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { activeStudent, updateStatus, applyUpdateNow } = useApp()
  const [pickerOpen, setPickerOpen] = useState(false)

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
    </div>
  )
}
