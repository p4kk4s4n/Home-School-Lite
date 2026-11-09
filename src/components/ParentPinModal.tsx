import React, { useState } from 'react'
import { useApp } from '../context/AppContext'
import { RemediationLink } from '../types'

interface ParentPinModalProps {
  link: RemediationLink | null
  onClose: () => void
  onApproved: (link: RemediationLink) => void
}

export const ParentPinModal: React.FC<ParentPinModalProps> = ({
  link,
  onClose,
  onApproved,
}) => {
  const { unlockParent, settings } = useApp()
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')

  if (!link) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (unlockParent(pin.trim())) {
      setPin('')
      setError('')
      onApproved(link)
    } else {
      setError(`Incorrect Parent PIN. (Default PIN is ${settings.parentPin || '1234'})`)
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="parent-pin-modal-title"
      >
        <div className="modal-header">
          <h3 id="parent-pin-modal-title">🔒 Parent Passcode Required</h3>
          <button
            type="button"
            className="btn-icon"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <p className="muted-sm" style={{ marginTop: '0.25rem' }}>
          External video searches and secondary learning resources require parent approval before opening in a new tab.
        </p>

        <div
          className="settings-panel"
          style={{ marginTop: '0.75rem', marginBottom: '0.75rem' }}
        >
          <span className="badge badge-primary">{link.provider}</span>
          <strong style={{ display: 'block', marginTop: '0.35rem' }}>
            {link.label}
          </strong>
          <code
            style={{
              display: 'block',
              marginTop: '0.25rem',
              fontSize: '0.75rem',
              wordBreak: 'break-all',
            }}
          >
            {link.url}
          </code>
        </div>

        <form onSubmit={handleSubmit}>
          <label className="field-label">
            Enter 4-Digit Parent PIN to Open Resource
            <input
              type="password"
              className="input"
              placeholder="Parent PIN (default 1234)"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              autoFocus
              required
            />
          </label>
          {error && (
            <p className="text-danger" style={{ marginTop: '0.4rem' }}>
              {error}
            </p>
          )}

          <div className="modal-actions" style={{ marginTop: '1rem' }}>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              🔓 Unlock &amp; Open Link ↗
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
