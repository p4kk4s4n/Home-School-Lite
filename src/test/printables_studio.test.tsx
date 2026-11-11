import React from 'react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { FormattedMarkdownBlock, PrintablesStudio } from '../components/PrintablesStudio'
import { getCourseById } from '../lib/curriculum'
import { Student } from '../types'

const mockStudent: Student = {
  id: 'stu-printables-test',
  name: 'Morgan Davis',
  avatar: '🚀',
  grade: 6,
  studentPin: '',
  createdAt: '2026-09-01T00:00:00.000Z',
  targetEndDate: '2027-06-15',
  streakDays: 5,
}

describe('FormattedMarkdownBlock Component', () => {
  beforeEach(() => {
    cleanup()
  })

  it('renders markdown headings, bold text, bullet lists, and numbered lists into HTML', () => {
    const markdown = `## Main Section Header
### Subsection Title
This is **bold concept text** and normal text.
- First bullet item
- Second bullet item
1. First step in procedure
2. Second step in procedure`

    render(<FormattedMarkdownBlock markdown={markdown} />)

    expect(screen.getByRole('heading', { level: 3, name: 'Main Section Header' })).toBeDefined()
    expect(screen.getByRole('heading', { level: 4, name: 'Subsection Title' })).toBeDefined()
    expect(screen.getByText('bold concept text')).toBeDefined()
    expect(screen.getByText('First bullet item')).toBeDefined()
    expect(screen.getByText('Second bullet item')).toBeDefined()
    expect(screen.getByText('First step in procedure')).toBeDefined()
    expect(screen.getByText('Second step in procedure')).toBeDefined()
  })

  it('renders markdown pipe tables into a real HTML table with headers and data rows', () => {
    const tableMarkdown = `### Standards Alignment Table
| Unit | Ohio Standard | Core Scientific Concept |
|---|---|---|
| Unit 1 | OH.6.LS.1 | Cells and fundamental units of life |
| Unit 2 | OH.6.LS.2 | Organism growth and reproduction |`

    render(<FormattedMarkdownBlock markdown={tableMarkdown} />)

    expect(screen.getByRole('table')).toBeDefined()
    expect(screen.getByText('Ohio Standard')).toBeDefined()
    expect(screen.getByText('Core Scientific Concept')).toBeDefined()
    expect(screen.getByText('Unit 1')).toBeDefined()
    expect(screen.getByText('Cells and fundamental units of life')).toBeDefined()
    expect(screen.getByText('Unit 2')).toBeDefined()
  })
})

describe('PrintablesStudio Component', () => {
  beforeEach(() => {
    cleanup()
  })

  const course = getCourseById('g6-math')!

  it('renders Tab 1: Course Guides & Rubrics with formatted bodies and print buttons', () => {
    render(<PrintablesStudio course={course} student={mockStudent} />)

    // Studio tab headers
    expect(screen.getByText(/Course Guides & Rubrics/i)).toBeDefined()
    expect(screen.getByText(/Unit Study Guide & Cheat Sheet/i)).toBeDefined()
    expect(screen.getByText(/Printable Organizers & Templates/i)).toBeDefined()

    // Resource documents
    expect(screen.getByText(/36-Week Grade 6 Mathematics Pacing & Scope/i)).toBeDefined()
    expect(screen.getByText(/Common Core & Ohio Math Standards Crosswalk/i)).toBeDefined()
    expect(screen.getByText(/Printable Graph Paper & Formula Cheat Sheet/i)).toBeDefined()

    // 1-Click Print buttons
    const printButtons = screen.getAllByRole('button', { name: /Print This Guide/i })
    expect(printButtons.length).toBeGreaterThanOrEqual(3)
  })

  it('renders Tab 2: Dynamic Unit Study Guide & Cheat Sheet Builder', () => {
    render(<PrintablesStudio course={course} student={mockStudent} />)

    // Switch to Tab 2
    const studyTabBtn = screen.getByRole('button', { name: /Unit Study Guide & Cheat Sheet/i })
    fireEvent.click(studyTabBtn)

    // Verify Unit Selector and Print Button
    expect(screen.getByText(/Unit Study Guide & Formula Reference Sheet/i)).toBeDefined()
    expect(screen.getByRole('button', { name: /Print Unit Study Guide/i })).toBeDefined()

    // Verify auto-compiled content for Unit 1: Ratios
    expect(screen.getByText(/Unit 1: Ratios: Complete Study Guide/i)).toBeDefined()
    expect(screen.getByText(/Key Principles, Formulas & Essential Rules/i)).toBeDefined()
    expect(screen.getByText(/Lesson Breakdowns & Step-by-Step Problem-Solving Guides/i)).toBeDefined()
    expect(screen.getByText('Morgan Davis')).toBeDefined()
  })

  it('renders Tab 3: All 7 Ready-to-Print Homeschool Graphic Organizers & Templates', () => {
    render(<PrintablesStudio course={course} student={mockStudent} />)

    // Switch to Tab 3
    const templatesTabBtn = screen.getByRole('button', { name: /Printable Organizers & Templates/i })
    fireEvent.click(templatesTabBtn)

    // Verify template 1: Graph paper (default)
    expect(screen.getByText(/Coordinate Graph Paper & Problem Workspace/i)).toBeDefined()
    expect(screen.getByText(/4-Quadrant Coordinate Plane/i)).toBeDefined()

    // Switch to template 2: Science CER
    const cerBtn = screen.getByRole('button', { name: /Science CER/i })
    fireEvent.click(cerBtn)
    expect(screen.getByText(/Scientific Investigation & CER Lab Report/i)).toBeDefined()
    expect(screen.getByText(/📢 CLAIM/i)).toBeDefined()
    expect(screen.getByText(/📊 EVIDENCE/i)).toBeDefined()
    expect(screen.getByText(/🧠 SCIENTIFIC REASONING/i)).toBeDefined()

    // Switch to template 3: ELA Essay Planner
    const elaBtn = screen.getByRole('button', { name: /ELA Text Evidence/i })
    fireEvent.click(elaBtn)
    expect(screen.getByText(/Textual Evidence & Argumentative Essay Planner/i)).toBeDefined()
    expect(screen.getByText(/Central Thesis \/ Argumentative Claim/i)).toBeDefined()

    // Switch to template 4: Social Studies Primary Source
    const socBtn = screen.getByRole('button', { name: /Social Studies Primary Source/i })
    fireEvent.click(socBtn)
    expect(screen.getByText(/Historical Primary Source Analysis & Timeline/i)).toBeDefined()
    expect(screen.getByText(/Author's Point of View & Purpose/i)).toBeDefined()

    // Switch to template 5: Fridge Checklist
    const fridgeBtn = screen.getByRole('button', { name: /Weekly Homeschool Fridge Checklist/i })
    fireEvent.click(fridgeBtn)
    expect(screen.getByText(/Weekly Homeschool Pacing & Fridge Checklist/i)).toBeDefined()
    expect(screen.getByText(/Parent Weekly Check-in Signature/i)).toBeDefined()

    // Switch to template 6: Cornell Notes
    const cornellBtn = screen.getByRole('button', { name: /Cornell Notes/i })
    fireEvent.click(cornellBtn)
    expect(screen.getByText(/Cornell Note-Taking System/i)).toBeDefined()
    expect(screen.getAllByText(/Cues & Questions/i).length).toBeGreaterThan(0)

    // Switch to template 7: Frayer Model
    const frayerBtn = screen.getByRole('button', { name: /Frayer Model/i })
    fireEvent.click(frayerBtn)
    expect(screen.getByText(/Vocabulary Deep-Dive: Frayer Model/i)).toBeDefined()
    expect(screen.getByText(/1. Formal Definition/i)).toBeDefined()
    expect(screen.getByText(/2. Facts & Characteristics/i)).toBeDefined()
    expect(screen.getByText(/3. Real-World Examples/i)).toBeDefined()
    expect(screen.getByText(/4. Non-Examples/i)).toBeDefined()
  })
})
