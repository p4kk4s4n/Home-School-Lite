import React, { useState } from 'react'
import { useApp } from '../context/AppContext'
import { GradeLevel } from '../types'

const AVATARS = ['🚀', '🦉', '🦊', '🐬', '🌟', '🔬', '🎨', '⚡']

interface Props {
  open: boolean
  onClose: () => void
}

export const StudentPickerModal: React.FC<Props> = ({ open, onClose }) => {
  const { students, activeStudent, selectStudent, addStudent } = useApp()
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('🦉')
  const [grade, setGrade] = useState<GradeLevel>(4)
  const [creating, setCreating] = useState(false)

  if (!open) return null

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return
    setCreating(true)
    try {
      await addStudent({ name: name.trim(), avatar, grade })
      setName('')
      onClose()
    } finally {
      setCreating(false)
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Switch or Add Student Profile</h3>
          <button className="btn-icon" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="student-list">
          {students.map((stu) => {
            const isActive = stu.id === activeStudent?.id
            return (
              <button
                key={stu.id}
                type="button"
                className={`student-row ${isActive ? 'active' : ''}`}
                onClick={async () => {
                  await selectStudent(stu.id)
                  onClose()
                }}
              >
                <span className="student-avatar-lg">{stu.avatar}</span>
                <div className="student-row-info">
                  <strong>{stu.name}</strong>
                  <span>
                    Grade {stu.grade} Curriculum • 🔥 {stu.streakDays || 1} day streak
                  </span>
                </div>
                {isActive && <span className="badge badge-primary">Active</span>}
              </button>
            )
          })}
        </div>

        <hr className="divider" />

        <form onSubmit={handleCreate} className="create-student-form">
          <h4>Create New Student Profile</h4>
          <p className="muted-sm">
            Grade level sets all 4 subjects (Math, Science, ELA, Social Studies) for this student and can be changed anytime in Settings.
          </p>

          <label className="field-label">
            Student Name
            <input
              type="text"
              className="input"
              placeholder="e.g., Jordan Taylor"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <div className="field-label">
            Choose Avatar
            <div className="avatar-grid">
              {AVATARS.map((a) => (
                <button
                  key={a}
                  type="button"
                  className={`avatar-choice ${avatar === a ? 'selected' : ''}`}
                  onClick={() => setAvatar(a)}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          <div className="field-label">
            Starting Curriculum Grade Level
            <div className="grade-toggle-group">
              <button
                type="button"
                className={`grade-toggle-btn ${grade === 4 ? 'selected' : ''}`}
                onClick={() => setGrade(4)}
              >
                <strong>Grade 4</strong>
                <span>4th Grade Core (4 Subjects)</span>
              </button>
              <button
                type="button"
                className={`grade-toggle-btn ${grade === 6 ? 'selected' : ''}`}
                onClick={() => setGrade(6)}
              >
                <strong>Grade 6</strong>
                <span>6th Grade Core (4 Subjects)</span>
              </button>
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={creating || !name.trim()}>
              {creating ? 'Creating...' : '+ Create Student'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
