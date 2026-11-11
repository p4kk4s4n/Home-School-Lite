import React from 'react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { CoursePage } from '../pages/CoursePage'
import { ErrorBoundary } from '../components/ErrorBoundary'
import { ALL_COURSES } from '../lib/curriculum'
import { DEFAULT_SETTINGS } from '../lib/db'
import { getExploreCompletedProgress, STORAGE_KEYS } from '../lib/storage'
import { Student } from '../types'

const mockStudent: Student = {
  id: 'stu-test-all-courses',
  name: 'Alex Rivera',
  avatar: '🚀',
  grade: 6,
  studentPin: '',
  createdAt: '2026-09-01T00:00:00.000Z',
  targetEndDate: '2027-06-01',
  streakDays: 3,
}

vi.mock('../context/AppContext', () => ({
  useApp: () => ({
    activeStudent: mockStudent,
    attempts: [],
    settings: {
      ...DEFAULT_SETTINGS,
      includeOhioAdjustments: true,
      masteryThreshold: 80,
    },
    isParentUnlocked: false,
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
    unlockParent: vi.fn(),
    lockParent: vi.fn(),
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

describe('CoursePage - Course Map for All Grades and Subjects', () => {
  beforeEach(() => {
    cleanup()
    window.localStorage.clear()
  })

  it('renders all 20 courses across Grades 4-8 with 0 storage isolation violations or error boundary triggers', () => {
    expect(ALL_COURSES.length).toBe(20)

    for (const course of ALL_COURSES) {
      const { unmount } = render(
        <MemoryRouter initialEntries={[`/course/${course.id}`]}>
          <ErrorBoundary fallbackTitle="Course Map Error">
            <Routes>
              <Route path="/course/:courseId" element={<CoursePage />} />
            </Routes>
          </ErrorBoundary>
        </MemoryRouter>
      )

      // Ensure error boundary was not triggered
      expect(screen.queryByText('Course Map Error')).toBeNull()
      expect(screen.queryByText(/Storage isolation violation/)).toBeNull()

      // Ensure course banner renders with title
      expect(screen.getByRole('heading', { level: 1, name: course.title })).toBeDefined()

      // Ensure units are rendered
      expect(course.units.length).toBeGreaterThanOrEqual(5)

      // Verify Explore unit exists
      const exploreUnit = course.units.find((u) => u.kind === 'explore')
      expect(exploreUnit).toBeDefined()

      // Verify Teacher Resources unit exists
      const teacherUnit = course.units.find((u) => u.kind === 'teacher_resources')
      expect(teacherUnit).toBeDefined()

      unmount()
    }
  })

  it('safely handles explore completion checkboxes using namespaced storage for Grade 6 Science', () => {
    render(
      <MemoryRouter initialEntries={['/course/g6-science']}>
        <ErrorBoundary fallbackTitle="Course Map Error">
          <Routes>
            <Route path="/course/:courseId" element={<CoursePage />} />
          </Routes>
        </ErrorBoundary>
      </MemoryRouter>
    )

    // Verify error boundary did not trigger
    expect(screen.queryByText('Course Map Error')).toBeNull()

    // Find the first "Mark Done" checkbox in the explore unit
    const markDoneCheckboxes = screen.getAllByRole('checkbox')
    expect(markDoneCheckboxes.length).toBeGreaterThan(0)

    const firstCheckbox = markDoneCheckboxes[0]
    expect(firstCheckbox).not.toBeChecked()

    // Click checkbox to complete explore item
    fireEvent.click(firstCheckbox)
    expect(firstCheckbox).toBeChecked()

    // Verify storage has properly namespaced hsl:explore key
    const completed = getExploreCompletedProgress(mockStudent.id, 'g6-science')
    expect(completed.length).toBe(1)

    const rawStorageKey = `${STORAGE_KEYS.EXPLORE_PREFIX}${mockStudent.id}:g6-science`
    expect(rawStorageKey.startsWith('hsl:explore:')).toBe(true)
    expect(window.localStorage.getItem(rawStorageKey)).toBe(JSON.stringify(completed))
  })

  it('safely handles explore completion checkboxes for Grade 6 Math (148 skills course)', () => {
    render(
      <MemoryRouter initialEntries={['/course/g6-math']}>
        <ErrorBoundary fallbackTitle="Course Map Error">
          <Routes>
            <Route path="/course/:courseId" element={<CoursePage />} />
          </Routes>
        </ErrorBoundary>
      </MemoryRouter>
    )

    // Verify error boundary did not trigger
    expect(screen.queryByText('Course Map Error')).toBeNull()

    // Ensure Grade 6 Math banner renders
    expect(screen.getByRole('heading', { level: 1, name: 'Grade 6 Mathematics' })).toBeDefined()

    // Find explore checkboxes and click one
    const markDoneCheckboxes = screen.getAllByRole('checkbox')
    expect(markDoneCheckboxes.length).toBeGreaterThan(0)

    fireEvent.click(markDoneCheckboxes[0])
    const completed = getExploreCompletedProgress(mockStudent.id, 'g6-math')
    expect(completed.length).toBe(1)
  })
})
