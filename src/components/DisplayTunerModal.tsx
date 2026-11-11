import React from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { ColorSchemeId, ViewportAspectMode } from '../types'

export const COLOR_SCHEMES: {
  id: ColorSchemeId
  name: string
  description: string
  preview: { bg: string; surface: string; primary: string; accent: string }
}[] = [
  {
    id: 'daylight',
    name: 'Academy Daylight',
    description: 'Crisp, clean daylight academic theme (Default)',
    preview: { bg: '#f1f5f9', surface: '#ffffff', primary: '#1e3a8a', accent: '#f59e0b' },
  },
  {
    id: 'midnight',
    name: 'Midnight Scholar',
    description: 'Deep dark theme for night study & low-light focus',
    preview: { bg: '#090d16', surface: '#111827', primary: '#3b82f6', accent: '#fbbf24' },
  },
  {
    id: 'sepia',
    name: 'Warm Sepia',
    description: 'Gentle book paper palette to eliminate screen glare',
    preview: { bg: '#f6ecdb', surface: '#fdf8f0', primary: '#854d0e', accent: '#d97706' },
  },
  {
    id: 'forest',
    name: 'Forest Focus',
    description: 'Calm sage and earthy greens for ADHD tranquility',
    preview: { bg: '#eff5f1', surface: '#ffffff', primary: '#1e4d2b', accent: '#d97706' },
  },
  {
    id: 'ocean',
    name: 'Ocean Breeze',
    description: 'Vibrant coastal blues for invigorating study',
    preview: { bg: '#eef6fb', surface: '#ffffff', primary: '#0369a1', accent: '#f97316' },
  },
  {
    id: 'high-contrast',
    name: 'High Contrast',
    description: 'Maximum black-and-white contrast for accessibility',
    preview: { bg: '#000000', surface: '#0a0a0a', primary: '#00e5ff', accent: '#facc15' },
  },
]

interface DisplayTunerModalProps {
  open: boolean
  onClose: () => void
}

export const DisplayTunerModal: React.FC<DisplayTunerModalProps> = ({ open, onClose }) => {
  const { settings, updateAppSettings } = useApp()

  if (!open) return null

  const currentTheme = settings.colorScheme || 'daylight'
  const currentScale = settings.uiScale ?? 100
  const currentAspect = settings.viewportAspectMode || 'auto'

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Display & Appearance Settings">
      <div className="modal-card display-tuner-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <span>🎨</span> Display &amp; Reading Tuner
            </h3>
            <p className="muted-sm" style={{ margin: '0.2rem 0 0' }}>
              Adjust themes and sizing for tablet landscape vs. mobile portrait.
            </p>
          </div>
          <button type="button" className="btn-icon" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        {/* SECTION 1: COLOR SCHEMES */}
        <div style={{ marginBottom: '1.25rem' }}>
          <span className="field-label" style={{ marginBottom: '0.5rem' }}>
            Color Scheme Theme
          </span>
          <div className="theme-options-grid">
            {COLOR_SCHEMES.map((t) => {
              const isSelected = currentTheme === t.id
              return (
                <button
                  key={t.id}
                  type="button"
                  className={`theme-card-btn ${isSelected ? 'selected' : ''}`}
                  onClick={() => void updateAppSettings({ colorScheme: t.id })}
                >
                  <div className="theme-swatch-row">
                    <span style={{ backgroundColor: t.preview.bg }} title="Background" />
                    <span style={{ backgroundColor: t.preview.surface }} title="Surface" />
                    <span style={{ backgroundColor: t.preview.primary }} title="Primary" />
                    <span style={{ backgroundColor: t.preview.accent }} title="Accent" />
                  </div>
                  <strong>{t.name}</strong>
                  <span className="muted-sm" style={{ fontSize: '0.72rem' }}>
                    {t.description}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <hr className="divider" />

        {/* SECTION 2: UI SIZING SLIDER */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
            <span className="field-label">
              Text &amp; UI Sizing Scale
            </span>
            <span className="badge badge-primary">{currentScale}%</span>
          </div>

          <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
            {[85, 95, 100, 110, 120, 125].map((s) => (
              <button
                key={s}
                type="button"
                className={`btn btn-sm ${currentScale === s ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => void updateAppSettings({ uiScale: s })}
              >
                {s}% {s === 100 ? '(Default)' : ''}
              </button>
            ))}
          </div>

          <input
            type="range"
            min={85}
            max={125}
            step={5}
            value={currentScale}
            onChange={(e) => void updateAppSettings({ uiScale: Number(e.target.value) })}
            aria-label="UI Sizing Slider"
          />

          <div className="sample-scale-preview" style={{ marginTop: '0.65rem' }}>
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 700 }}>
              Live Legibility Preview:
            </span>
            <p style={{ margin: '0.25rem 0 0', fontWeight: 600 }}>
              Solve for x: 3x + 12 = 45 • Reading text scales proportionally.
            </p>
          </div>
        </div>

        <hr className="divider" />

        {/* SECTION 3: ASPECT RATIO / DEVICE LAYOUT */}
        <div style={{ marginBottom: '1.25rem' }}>
          <span className="field-label" style={{ marginBottom: '0.45rem' }}>
            Aspect Ratio &amp; Layout Mode
          </span>
          <div className="aspect-options-grid">
            <button
              type="button"
              className={`aspect-option-btn ${currentAspect === 'auto' ? 'selected' : ''}`}
              onClick={() => void updateAppSettings({ viewportAspectMode: 'auto' })}
            >
              <span className="aspect-icon">🔄</span>
              <div>
                <strong>Auto-Detect</strong>
                <p className="muted-sm">Adapts automatically when rotating device</p>
              </div>
            </button>

            <button
              type="button"
              className={`aspect-option-btn ${currentAspect === 'portrait' ? 'selected' : ''}`}
              onClick={() => void updateAppSettings({ viewportAspectMode: 'portrait' })}
            >
              <span className="aspect-icon">📱</span>
              <div>
                <strong>Mobile Phone Portrait</strong>
                <p className="muted-sm">Compact header, single-column reading</p>
              </div>
            </button>

            <button
              type="button"
              className={`aspect-option-btn ${currentAspect === 'landscape' ? 'selected' : ''}`}
              onClick={() => void updateAppSettings({ viewportAspectMode: 'landscape' })}
            >
              <span className="aspect-icon">💻</span>
              <div>
                <strong>Tablet Landscape</strong>
                <p className="muted-sm">Side-by-side textbook split view (&gt;= 768px)</p>
              </div>
            </button>
          </div>
        </div>

        <div className="modal-actions" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/settings" onClick={onClose} style={{ fontSize: '0.85rem', fontWeight: 600 }}>
            Open Full Settings &amp; Notifications →
          </Link>
          <button type="button" className="btn btn-primary" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  )
}
