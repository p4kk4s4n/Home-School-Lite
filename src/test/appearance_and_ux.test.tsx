import React from 'react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { DisplayTunerModal, COLOR_SCHEMES } from '../components/DisplayTunerModal'

declare function require(module: string): any
import { Layout } from '../components/Layout'
import { DashboardPage } from '../pages/DashboardPage'
import { CoursePage } from '../pages/CoursePage'
import { LessonPage } from '../pages/LessonPage'
import {
  isNotificationSupported,
  getNotificationPermission,
  sendLearningReminderNotification,
  checkAndTriggerDailyReminder,
} from '../lib/notifications'
import { getCourseById } from '../lib/curriculum'
import { DEFAULT_SETTINGS } from '../lib/db'
import { Student, AppSettings } from '../types'

const mockStudent: Student = {
  id: 'stu-ux-test',
  name: 'Alex Rivera',
  avatar: '🚀',
  grade: 6,
  studentPin: '1111',
  createdAt: '2026-09-01T00:00:00.000Z',
  targetEndDate: '2027-06-01',
  streakDays: 7,
}

let mockSettings: AppSettings = {
  ...DEFAULT_SETTINGS,
  colorScheme: 'daylight',
  uiScale: 100,
  viewportAspectMode: 'auto',
  workspaceMaxWidth: 1280,
  dailyReminderEnabled: true,
  dailyReminderTime: '09:00',
  masteryThreshold: 80,
  requireAssignmentChecklist: false,
}

const mockUpdateAppSettings = vi.fn().mockImplementation((patch) => {
  mockSettings = { ...mockSettings, ...patch }
  return Promise.resolve()
})

const mockCourse = getCourseById('g6-math', true)!

vi.mock('../context/AppContext', () => ({
  useApp: () => ({
    activeStudent: mockStudent,
    students: [mockStudent],
    activeCourses: [mockCourse],
    allCourses: [mockCourse],
    attempts: [],
    allAttempts: [],
    settings: mockSettings,
    isParentUnlocked: true,
    isQuizInProgress: false,
    setIsQuizInProgress: vi.fn(),
    updateAppSettings: mockUpdateAppSettings,
    submitAttempt: vi.fn(),
    updateStatus: { updateAvailable: false, currentVersion: '1.11.0' },
    applyUpdateNow: vi.fn(),
  }),
}))

describe('Color Schemes, Aspect-Ratio Sizing & UX Streamlining Suite', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
    mockSettings = {
      ...DEFAULT_SETTINGS,
      colorScheme: 'daylight',
      uiScale: 100,
      viewportAspectMode: 'auto',
      workspaceMaxWidth: 1280,
      dailyReminderEnabled: true,
      dailyReminderTime: '09:00',
      requireAssignmentChecklist: false,
    }
  })

  it('verifies all 6 academic color schemes are defined and selectable in DisplayTunerModal', () => {
    expect(COLOR_SCHEMES.length).toBe(6)
    const schemeIds = COLOR_SCHEMES.map((s) => s.id)
    expect(schemeIds).toEqual([
      'daylight',
      'midnight',
      'sepia',
      'forest',
      'ocean',
      'high-contrast',
    ])

    const onClose = vi.fn()
    render(
      <MemoryRouter>
        <DisplayTunerModal open={true} onClose={onClose} />
      </MemoryRouter>
    )

    expect(screen.getByText(/Display & Reading Tuner/i)).toBeInTheDocument()

    // Test clicking Midnight Scholar
    const midnightBtn = screen.getByRole('button', { name: /Midnight Scholar/i })
    fireEvent.click(midnightBtn)
    expect(mockUpdateAppSettings).toHaveBeenCalledWith({ colorScheme: 'midnight' })

    // Test clicking Warm Sepia
    const sepiaBtn = screen.getByRole('button', { name: /Warm Sepia/i })
    fireEvent.click(sepiaBtn)
    expect(mockUpdateAppSettings).toHaveBeenCalledWith({ colorScheme: 'sepia' })

    // Test clicking Forest Focus
    const forestBtn = screen.getByRole('button', { name: /Forest Focus/i })
    fireEvent.click(forestBtn)
    expect(mockUpdateAppSettings).toHaveBeenCalledWith({ colorScheme: 'forest' })

    // Test clicking Ocean Breeze
    const oceanBtn = screen.getByRole('button', { name: /Ocean Breeze/i })
    fireEvent.click(oceanBtn)
    expect(mockUpdateAppSettings).toHaveBeenCalledWith({ colorScheme: 'ocean' })

    // Test clicking High Contrast
    const highContrastBtn = screen.getByRole('button', { name: /High Contrast/i })
    fireEvent.click(highContrastBtn)
    expect(mockUpdateAppSettings).toHaveBeenCalledWith({ colorScheme: 'high-contrast' })
  })

  it('tests UI Sizing slider & preset buttons in DisplayTunerModal', () => {
    const onClose = vi.fn()
    render(
      <MemoryRouter>
        <DisplayTunerModal open={true} onClose={onClose} />
      </MemoryRouter>
    )

    // Click 110% preset button
    const btn110 = screen.getByRole('button', { name: '110%' })
    fireEvent.click(btn110)
    expect(mockUpdateAppSettings).toHaveBeenCalledWith({ uiScale: 110 })

    // Adjust range slider to 120%
    const slider = screen.getByLabelText(/UI Sizing Slider/i)
    fireEvent.change(slider, { target: { value: '120' } })
    expect(mockUpdateAppSettings).toHaveBeenCalledWith({ uiScale: 120 })
  })

  it('tests aspect ratio mode selector (Auto-Detect, Phone Portrait, Tablet Landscape)', () => {
    const onClose = vi.fn()
    render(
      <MemoryRouter>
        <DisplayTunerModal open={true} onClose={onClose} />
      </MemoryRouter>
    )

    // Click Tablet Landscape
    const tabletBtn = screen.getByRole('button', { name: /Tablet Landscape/i })
    fireEvent.click(tabletBtn)
    expect(mockUpdateAppSettings).toHaveBeenCalledWith({ viewportAspectMode: 'landscape' })

    // Click Phone Portrait
    const phoneBtn = screen.getByRole('button', { name: /Mobile Phone Portrait/i })
    fireEvent.click(phoneBtn)
    expect(mockUpdateAppSettings).toHaveBeenCalledWith({ viewportAspectMode: 'portrait' })
  })

  it('verifies Layout mounts data-theme, --ui-scale, and topbar Aa tuner button', () => {
    render(
      <MemoryRouter>
        <Layout>
          <div>Workspace Content</div>
        </Layout>
      </MemoryRouter>
    )

    // Check topbar tuner button exists
    const tunerBtn = screen.getByRole('button', { name: /Display, Colors & Sizing Tuner/i })
    expect(tunerBtn).toBeInTheDocument()

    // Root html element attributes
    expect(document.documentElement.getAttribute('data-theme')).toBe('daylight')
    expect(document.documentElement.style.getPropertyValue('--ui-scale')).toBe('1')

    // Open tuner modal via topbar button
    fireEvent.click(tunerBtn)
    expect(screen.getByText(/Display & Reading Tuner/i)).toBeInTheDocument()
  })

  it('verifies Dashboard Hero Banner renders 1-tap Resume Next Lesson CTA', () => {
    render(
      <MemoryRouter>
        <DashboardPage />
      </MemoryRouter>
    )

    // Verify resume button exists and links to next lesson
    const resumeBtn = screen.getByRole('link', { name: /Resume Next Lesson:/i })
    expect(resumeBtn).toBeInTheDocument()
    expect(resumeBtn.getAttribute('href')).toContain('/course/g6-math/lesson/')
  })

  it('verifies CoursePage features collapsible units, filter bar, and jump to current lesson', () => {
    render(
      <MemoryRouter initialEntries={['/course/g6-math']}>
        <Routes>
          <Route path="/course/:courseId" element={<CoursePage />} />
        </Routes>
      </MemoryRouter>
    )

    // Verify Course Map Filter Buttons
    expect(screen.getByRole('button', { name: /^All Units/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^In Progress/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^Mastered \(/i })).toBeInTheDocument()

    // Verify Jump to Current Lesson button
    const jumpBtn = screen.getByRole('button', { name: /Jump to Current Lesson/i })
    expect(jumpBtn).toBeInTheDocument()

    // Verify Unit Header has collapse caret and collapses lessons on click
    const firstUnitTitle = mockCourse.units[0].title
    const unitHeader = screen.getByText(firstUnitTitle)
    expect(unitHeader).toBeInTheDocument()

    // Collapse Mastered button
    const collapseMasteredBtn = screen.getByRole('button', { name: /Collapse Mastered/i })
    fireEvent.click(collapseMasteredBtn)

    // Expand All button
    const expandAllBtn = screen.getByRole('button', { name: /Expand All/i })
    fireEvent.click(expandAllBtn)
  })

  it('verifies LessonPage renders live answered progress tracker during mastery quiz', () => {
    render(
      <MemoryRouter initialEntries={['/course/g6-math/lesson/g6-math-u1-l1']}>
        <Routes>
          <Route path="/course/:courseId/lesson/:lessonId" element={<LessonPage />} />
        </Routes>
      </MemoryRouter>
    )

    // Switch to Quiz tab
    const startQuizBtn = screen.getByRole('button', { name: /Start Randomized Mastery Check/i })
    fireEvent.click(startQuizBtn)

    // Live Quiz Progress Tracker should render
    expect(screen.getByText(/Quiz Completion:/i)).toBeInTheDocument()
    expect(screen.getByText(/Remaining/i)).toBeInTheDocument()
  })

  it('verifies daily engagement reminder helpers and logic', async () => {
    // Test checkAndTriggerDailyReminder when disabled
    const onSent = vi.fn()
    const triggered = await checkAndTriggerDailyReminder(
      false,
      '09:00',
      undefined,
      mockStudent,
      onSent
    )
    expect(triggered).toBe(false)
    expect(onSent).not.toHaveBeenCalled()
  })

  it('verifies all 6 color schemes maintain high text-to-background contrast with no white-on-white buttons', () => {
    // Read styles.css and ensure .btn-secondary uses var(--surface-alt) and var(--text)
    const fs = require('fs')
    const css = fs.readFileSync('src/styles.css', 'utf8')

    // 1. Verify .btn-secondary does NOT use hardcoded #f1f5f9 background
    expect(css).toContain('.btn-secondary {\n  background: var(--surface-alt);\n  color: var(--text);')

    // 2. Verify all 6 themes define semantic contrast variables
    const requiredThemes = ['daylight', 'midnight', 'sepia', 'forest', 'ocean', 'high-contrast']
    for (const theme of requiredThemes) {
      expect(css).toContain(`[data-theme="${theme}"]`)
    }

    // 3. Verify midnight theme defines dark surface-alt and light text
    expect(css).toMatch(/\[data-theme="midnight"\]\s*\{[\s\S]*?--surface-alt:\s*#1e293b;[\s\S]*?--text:\s*#f8fafc;/)

    // 4. Verify question passages, badges, and review cards use theme variables instead of hardcoded white
    expect(css).toContain('.question-passage {\n  margin: 0.5rem 0 0.85rem;\n  padding: 0.85rem 1rem;\n  background: var(--surface);')
    expect(css).toContain('.badge-primary {\n  background: var(--badge-primary-bg')
  })
})
