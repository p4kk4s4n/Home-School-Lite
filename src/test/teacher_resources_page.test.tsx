import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Layout } from '../components/Layout'
import { DEFAULT_SETTINGS } from '../lib/db'
import { CoursePage } from '../pages/CoursePage'
import { SettingsPage } from '../pages/SettingsPage'
import { TeacherResourcesPage } from '../pages/TeacherResourcesPage'
import { Student } from '../types'

const mockStudent: Student = {
  id: 'stu-test-teacher',
  name: 'Sammy Miller',
  grade: 6,
  avatar: '🔬',
  studentPin: '',
  createdAt: '2026-09-01T00:00:00.000Z',
  targetEndDate: '2027-06-15',
  streakDays: 4,
}

let isUnlockedState = false

const unlockParentMock = vi.fn((pin: string) => {
  if (pin === '1234') {
    isUnlockedState = true
    return true
  }
  return false
})

const lockParentMock = vi.fn(() => {
  isUnlockedState = false
})

vi.mock('../context/AppContext', () => ({
  useApp: () => ({
    activeStudent: mockStudent,
    students: [mockStudent],
    attempts: [],
    allAttempts: [],
    settings: {
      ...DEFAULT_SETTINGS,
      parentPin: '1234',
      includeOhioAdjustments: true,
      masteryThreshold: 80,
    },
    isParentUnlocked: isUnlockedState,
    isQuizInProgress: false,
    setIsQuizInProgress: vi.fn(),
    selectStudent: vi.fn(),
    addStudent: vi.fn(),
    editStudent: vi.fn(),
    removeStudent: vi.fn(),
    deleteAttempt: vi.fn(),
    deleteLessonAttempts: vi.fn(),
    resetStudentProgress: vi.fn(),
    submitAttempt: vi.fn(),
    updateAppSettings: vi.fn(),
    unlockParent: unlockParentMock,
    lockParent: lockParentMock,
    reloadAllData: vi.fn(),
    updateStatus: null,
    checkingUpdate: false,
    triggerUpdateCheck: vi.fn(),
    applyUpdateNow: vi.fn(),
    syncingFamily: false,
    lastSyncResult: null,
    triggerFamilySync: vi.fn(),
    canInstallPwa: false,
    isStandalone: false,
    promptInstallPwa: vi.fn(),
  }),
}))

describe('Teacher Resources Navigation & Dedicated Page', () => {
  beforeEach(() => {
    cleanup()
    window.localStorage.clear()
    isUnlockedState = false
    vi.clearAllMocks()
  })

  afterEach(() => {
    cleanup()
  })

  it('renders the dedicated "Teacher Resources" link in primary navigation (Layout)', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Layout>
          <div>Dashboard Child Content</div>
        </Layout>
      </MemoryRouter>
    )

    // Check main navigation links
    const teacherNav = screen.getByRole('link', { name: /Teacher Resources/i })
    expect(teacherNav).toBeDefined()
    expect(teacherNav.getAttribute('href')).toBe('/teacher-resources')

    // Verify other main links exist alongside it
    expect(screen.getByRole('link', { name: /^Dashboard$/i })).toBeDefined()
    expect(screen.getByRole('link', { name: /^Progress & Standards$/i })).toBeDefined()
    expect(screen.getByRole('link', { name: /^GPA & Report Card$/i })).toBeDefined()
    expect(screen.getByRole('link', { name: /^Family Sync$/i })).toBeDefined()
    expect(screen.getByRole('link', { name: /^Settings$/i })).toBeDefined()
  })

  it('displays PIN gate when locked on /teacher-resources and unlocks with correct PIN', () => {
    const { rerender } = render(
      <MemoryRouter initialEntries={['/teacher-resources']}>
        <TeacherResourcesPage />
      </MemoryRouter>
    )

    // Gate screen shown
    expect(screen.getByText(/Teacher Resources Portal \(PIN Protected\)/i)).toBeDefined()
    expect(screen.getByRole('button', { name: /Unlock Teacher Portal/i })).toBeDefined()

    // Incorrect PIN
    const pinInput = screen.getByPlaceholderText(/Enter PIN/i)
    fireEvent.change(pinInput, { target: { value: '9999' } })
    fireEvent.click(screen.getByRole('button', { name: /Unlock Teacher Portal/i }))

    expect(unlockParentMock).toHaveBeenCalledWith('9999')
    expect(screen.getByText(/Incorrect Parent PIN/i)).toBeDefined()

    // Correct PIN
    fireEvent.change(pinInput, { target: { value: '1234' } })
    fireEvent.click(screen.getByRole('button', { name: /Unlock Teacher Portal/i }))

    expect(unlockParentMock).toHaveBeenCalledWith('1234')
    expect(isUnlockedState).toBe(true)

    // Rerender as unlocked
    rerender(
      <MemoryRouter initialEntries={['/teacher-resources']}>
        <TeacherResourcesPage />
      </MemoryRouter>
    )

    // Verify unlocked dashboard elements
    expect(screen.getAllByText(/Teacher Resources, Pacing Guides & Answer Keys/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/36-Week Pacing Guide/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Printable Multiple-Choice Worksheet & Quiz Generator/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Course Guides & Rubrics/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Lesson Answer Keys & Worked Solutions/i).length).toBeGreaterThan(0)
  })

  it('verifies SettingsPage now only has 2 top mode tabs and provides a direct link to Teacher Resources', () => {
    render(
      <MemoryRouter initialEntries={['/settings']}>
        <SettingsPage />
      </MemoryRouter>
    )

    // Should have Settings and Daily Instructions mode tabs
    expect(screen.getByRole('button', { name: /Settings & Parental Controls/i })).toBeDefined()
    expect(screen.getByRole('button', { name: /Daily Learning Guide & Instructions/i })).toBeDefined()

    // The old mode-tab button for Teacher Resources should NOT exist in SettingsPage
    expect(screen.queryByRole('button', { name: /Teacher Resources & Pacing/i })).toBeNull()

    // Instead, a direct link to the new dedicated tab should exist
    const teacherTabLink = screen.getByRole('link', { name: /Open Teacher Resources Tab →/i })
    expect(teacherTabLink).toBeDefined()
    expect(teacherTabLink.getAttribute('href')).toBe('/teacher-resources')
  })

  it('verifies CoursePage links directly to /teacher-resources', () => {
    render(
      <MemoryRouter initialEntries={['/course/g6-math']}>
        <Routes>
          <Route path="/course/:courseId" element={<CoursePage />} />
        </Routes>
      </MemoryRouter>
    )

    const teacherPortalLink = screen.getByRole('link', { name: /Open Teacher Resources →/i })
    expect(teacherPortalLink).toBeDefined()
    expect(teacherPortalLink.getAttribute('href')).toBe('/teacher-resources')
  })
})
