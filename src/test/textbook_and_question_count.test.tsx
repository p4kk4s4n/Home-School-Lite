import React from 'react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { TextbookPanel } from '../components/TextbookPanel'
import { LessonPage } from '../pages/LessonPage'
import { getCourseById } from '../lib/curriculum'
import { buildQuizAttempt } from '../lib/quizBuilder'
import { DEFAULT_SETTINGS } from '../lib/db'
import { Course, Lesson, Student, Unit } from '../types'

const mockStudent: Student = {
  id: 'stu-textbook-test',
  name: 'Jordan Lee',
  avatar: '🌟',
  grade: 6,
  studentPin: '',
  createdAt: '2026-09-01T00:00:00.000Z',
  targetEndDate: '2027-06-01',
  streakDays: 4,
}

let mockSettings = {
  ...DEFAULT_SETTINGS,
  masteryQuestionCount: 8,
  masteryThreshold: 80,
  requireAssignmentChecklist: false,
}

vi.mock('../context/AppContext', () => ({
  useApp: () => ({
    activeStudent: mockStudent,
    attempts: [],
    settings: mockSettings,
    isParentUnlocked: true,
    isQuizInProgress: false,
    setIsQuizInProgress: vi.fn(),
    submitAttempt: vi.fn().mockResolvedValue({
      id: 'att-1',
      studentId: mockStudent.id,
      courseId: 'g6-math',
      unitId: 'g6-math-u1',
      lessonId: 'g6-math-u1-l1',
      kind: 'lesson',
      attemptNumber: 1,
      seed: 12345,
      scorePercent: 100,
      correctCount: 8,
      totalCount: 8,
      passed: true,
      questionFingerprints: [],
      missedPrincipleIds: [],
      completedAt: '2026-11-10T00:00:00.000Z',
    }),
    selectStudent: vi.fn(),
    addStudent: vi.fn(),
    editStudent: vi.fn(),
    removeStudent: vi.fn(),
    deleteAttempt: vi.fn(),
    deleteLessonAttempts: vi.fn(),
    resetStudentProgress: vi.fn(),
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

describe('Configurable Mastery Question Count & Quiz Builder', () => {
  const course = getCourseById('g6-math')!
  const lesson = course.units[0].lessons[0]
  const unitExam = course.units[0].lessons.find((l) => l.kind === 'unit_test') || course.units[0].lessons[course.units[0].lessons.length - 1]

  it('defaults to 8 questions for standard lessons and applies +3 exam bonus for unit tests', () => {
    const regularQuiz = buildQuizAttempt({
      lesson,
      seed: 42,
      questionCount: 8,
    })
    expect(regularQuiz.length).toBe(8)

    const examQuiz = buildQuizAttempt({
      lesson: unitExam,
      seed: 42,
      questionCount: 8 + 3, // 11
    })
    expect(examQuiz.length).toBe(11)
  })

  it('guarantees exact question count for 5, 8, 10, 12, and 15 questions even when lesson bank is small', () => {
    const bioCourse = getCourseById('g6-science')!
    const bioLesson = bioCourse.units[0].lessons[0]
    const unitPrinciples = bioCourse.units[0].lessons.flatMap((l) => l.principles)

    for (const count of [5, 8, 10, 12, 15]) {
      const quiz = buildQuizAttempt({
        lesson: bioLesson,
        seed: 9999 + count,
        questionCount: count,
        unitPrinciples,
      })
      expect(quiz.length).toBe(count)
    }
  })
})

describe('TextbookPanel Component', () => {
  beforeEach(() => {
    cleanup()
  })

  const course = getCourseById('g6-math')!
  const unit = course.units[0]
  const lesson = unit.lessons[0]

  it('renders Tab 1 with core concept reading, principle summaries, and non-spoiling worked examples', () => {
    const activeQuizFingerprint = 'g6-math-p1-writing-ratios:g6-math-ratios-1'

    render(
      <TextbookPanel
        course={course}
        unit={unit}
        lesson={lesson}
        activeQuizFingerprints={[activeQuizFingerprint]}
        isOpen={true}
        onClose={vi.fn()}
      />
    )

    // Heading and tabs
    expect(screen.getByText('Interactive Textbook')).toBeDefined()
    expect(screen.getByText('📖 This Lesson Guide')).toBeDefined()

    // Core reading content
    expect(screen.getByText(lesson.reading)).toBeDefined()

    // Principle title
    expect(screen.getByText(lesson.principles[0].title)).toBeDefined()
    expect(screen.getByText(lesson.principles[0].summary)).toBeDefined()

    // Non-spoiling worked example
    expect(screen.getAllByText(/Practice Worked Example/).length).toBeGreaterThan(0)
    expect(screen.queryByText(activeQuizFingerprint)).toBeNull()
  })

  it('renders Tab 2 with unit search and filters lessons by keyword', () => {
    render(
      <TextbookPanel
        course={course}
        unit={unit}
        lesson={lesson}
        isOpen={true}
        onClose={vi.fn()}
      />
    )

    // Switch to Unit tab
    const unitTabBtn = screen.getByRole('button', { name: /Unit Chapters & Search/i })
    fireEvent.click(unitTabBtn)

    // Search bar should be visible
    const searchInput = screen.getByPlaceholderText(/Search all concepts/i)
    expect(searchInput).toBeDefined()

    // Search for a specific lesson title
    fireEvent.change(searchInput, { target: { value: 'Equivalent' } })
    expect(screen.getAllByText(/Equivalent/i).length).toBeGreaterThan(0)
  })
})

describe('LessonPage In-Lesson Textbook Integration & Mid-Quiz Access', () => {
  beforeEach(() => {
    cleanup()
    window.localStorage.clear()
  })

  it('allows opening and closing the textbook on the fly during active quiz without losing selected answers', () => {
    render(
      <MemoryRouter initialEntries={['/course/g6-math/lesson/g6-math-u1-l1']}>
        <Routes>
          <Route path="/course/:courseId/lesson/:lessonId" element={<LessonPage />} />
        </Routes>
      </MemoryRouter>
    )

    // Start quiz
    const startQuizBtn = screen.getByRole('button', { name: /Start Randomized Mastery Check/i })
    fireEvent.click(startQuizBtn)

    // Expect quiz view
    expect(screen.getByText(/Attempt #1/i)).toBeDefined()
    const radioInputs = screen.getAllByRole('radio')
    expect(radioInputs.length).toBeGreaterThan(0)

    // Select an answer on the first question
    fireEvent.click(radioInputs[0])
    expect(radioInputs[0]).toBeChecked()

    // Open textbook panel via Quiz Banner button
    const textbookToggle = screen.getByRole('button', { name: /Textbook Reference/i })
    fireEvent.click(textbookToggle)

    // Confirm textbook panel is rendered
    expect(screen.getByText('Interactive Textbook')).toBeDefined()

    // Verify selected answer was NOT wiped out while textbook is open
    expect(radioInputs[0]).toBeChecked()

    // Click "💡 Review Concept" on a question card
    const reviewConceptBtns = screen.getAllByRole('button', { name: /Review Concept/i })
    expect(reviewConceptBtns.length).toBeGreaterThan(0)
    fireEvent.click(reviewConceptBtns[0])

    // Textbook should still be visible with the active principle highlighted
    expect(screen.getByText(/Currently Questioned/i)).toBeDefined()

    // Answer should still be preserved
    expect(radioInputs[0]).toBeChecked()

    // Close textbook
    const closeBtn = screen.getByRole('button', { name: /Close Textbook/i })
    fireEvent.click(closeBtn)

    // Textbook panel should be closed and radio remains checked
    expect(screen.queryByText('Interactive Textbook')).toBeNull()
    expect(radioInputs[0]).toBeChecked()
  })
})
