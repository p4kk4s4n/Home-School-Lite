import React, { useMemo } from 'react'
import { useApp } from '../context/AppContext'
import { computeGpaReport, GRADE_SCALE } from '../lib/grading'

export const GradesPage: React.FC = () => {
  const { activeStudent, activeCourses, allCourses, attempts, settings } = useApp()

  const activeGpaReport = useMemo(
    () => computeGpaReport(activeCourses, attempts, settings),
    [activeCourses, attempts, settings]
  )

  const cumulativeGpaReport = useMemo(
    () => computeGpaReport(allCourses, attempts, settings),
    [allCourses, attempts, settings]
  )

  const otherGradeCoursesWithActivity = useMemo(() => {
    if (!activeStudent) return []
    return cumulativeGpaReport.courses.filter(
      (c) => c.gradeLevel !== activeStudent.grade && c.hasGrades
    )
  }, [cumulativeGpaReport, activeStudent])

  if (!activeStudent) return null

  return (
    <div className="page-stack">
      <section className="card transcript-card">
        <div className="section-header">
          <div>
            <span className="course-subject-tag">OFFICIAL HOMESCHOOL ACADEMIC RECORD</span>
            <h1>{activeStudent.name} — Report Card &amp; GPA Transcript</h1>
            <p className="muted">
              Active Grade Level: <strong>Grade {activeStudent.grade}</strong> • Grading Scale: Standard 90/80/70/60 (+/-) on a 4.0 Credit-Weighted Scale
            </p>
          </div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => window.print()}
          >
            🖨 Print Transcript
          </button>
        </div>

        <div className="gpa-highlight-grid">
          <div className="gpa-box gpa-box-primary">
            <span>Grade {activeStudent.grade} Weighted GPA</span>
            <strong>
              {activeGpaReport.weightedGpa !== null
                ? activeGpaReport.weightedGpa.toFixed(2)
                : '—'}
            </strong>
            <small>Out of 4.00 Scale</small>
          </div>
          <div className="gpa-box">
            <span>Overall Numeric Average</span>
            <strong>
              {activeGpaReport.averagePercent !== null
                ? `${activeGpaReport.averagePercent}%`
                : '—'}
            </strong>
            <small>Letter Equivalent: {activeGpaReport.letter}</small>
          </div>
          <div className="gpa-box">
            <span>Cumulative GPA (All Grades)</span>
            <strong>
              {cumulativeGpaReport.weightedGpa !== null
                ? cumulativeGpaReport.weightedGpa.toFixed(2)
                : '—'}
            </strong>
            <small>
              {cumulativeGpaReport.totalCreditsAttempted.toFixed(1)} credits graded
            </small>
          </div>
          <div className="gpa-box">
            <span>Weighting Formula</span>
            <strong>
              {settings.lessonWeight}% / {settings.unitTestWeight}%
            </strong>
            <small>Lessons vs. Unit Exams</small>
          </div>
        </div>

        <h2 style={{ marginTop: '1.5rem' }}>
          Current Term Courses (Grade {activeStudent.grade})
        </h2>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Course Title</th>
                <th>Credits</th>
                <th>Steps Mastered</th>
                <th>Lesson Avg ({settings.lessonWeight}%)</th>
                <th>Unit Exam Avg ({settings.unitTestWeight}%)</th>
                <th>Course %</th>
                <th>Letter</th>
                <th>GPA Points</th>
              </tr>
            </thead>
            <tbody>
              {activeGpaReport.courses.map((row) => (
                <tr key={row.courseId}>
                  <td>
                    <strong>{row.courseTitle}</strong>
                  </td>
                  <td>{row.credits.toFixed(1)}</td>
                  <td>
                    {row.completedLessons} / {row.totalLessons}
                  </td>
                  <td>
                    {row.lessonAverage !== null ? `${row.lessonAverage}%` : '—'}
                  </td>
                  <td>
                    {row.unitTestAverage !== null ? `${row.unitTestAverage}%` : '—'}
                  </td>
                  <td>
                    <strong>
                      {row.overallPercent !== null ? `${row.overallPercent}%` : '—'}
                    </strong>
                  </td>
                  <td>
                    <span className="badge badge-primary">{row.letter}</span>
                  </td>
                  <td>
                    <strong>{row.hasGrades ? row.gpaPoints.toFixed(1) : '—'}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {otherGradeCoursesWithActivity.length > 0 && (
          <>
            <h2 style={{ marginTop: '1.75rem' }}>
              Archived / Prior Grade Level Coursework (Preserved in Cumulative GPA)
            </h2>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Course Title</th>
                    <th>Grade</th>
                    <th>Credits</th>
                    <th>Steps Mastered</th>
                    <th>Course %</th>
                    <th>Letter</th>
                    <th>GPA Points</th>
                  </tr>
                </thead>
                <tbody>
                  {otherGradeCoursesWithActivity.map((row) => (
                    <tr key={row.courseId}>
                      <td>
                        <strong>{row.courseTitle}</strong>
                      </td>
                      <td>Grade {row.gradeLevel}</td>
                      <td>{row.credits.toFixed(1)}</td>
                      <td>
                        {row.completedLessons} / {row.totalLessons}
                      </td>
                      <td>
                        {row.overallPercent !== null ? `${row.overallPercent}%` : '—'}
                      </td>
                      <td>
                        <span className="badge badge-neutral">{row.letter}</span>
                      </td>
                      <td>{row.gpaPoints.toFixed(1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>

      <section className="card">
        <h2>Standard 4.0 GPA Grading Scale Reference</h2>
        <p className="muted-sm">
          Course GPA is weighted by course credits: <code>GPA = Σ(GPA_Points × Credits) ÷ Σ(Credits)</code>.
        </p>
        <div className="scale-grid">
          {GRADE_SCALE.map((g) => (
            <div key={g.letter} className="scale-chip">
              <strong>{g.letter}</strong>
              <span>≥ {g.min}%</span>
              <small>{g.gpaPoints.toFixed(1)} pts</small>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
