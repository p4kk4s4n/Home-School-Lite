import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import {
  computeCourseProgress,
  computePacing,
  computeStandardsChecklist,
} from '../lib/progress'
import { SubjectId } from '../types'

export const TrackerPage: React.FC = () => {
  const { activeStudent, activeCourses, attempts, settings } = useApp()
  const [subjectFilter, setSubjectFilter] = useState<'all' | SubjectId>('all')
  const [statusFilter, setStatusFilter] = useState<'all' | 'mastered' | 'pending'>('all')

  const summaries = useMemo(
    () =>
      activeCourses.map((c) =>
        computeCourseProgress(c, attempts, settings.masteryThreshold)
      ),
    [activeCourses, attempts, settings.masteryThreshold]
  )

  const pacing = useMemo(() => {
    if (!activeStudent) return null
    return computePacing(
      summaries,
      activeStudent.createdAt,
      activeStudent.targetEndDate
    )
  }, [summaries, activeStudent])

  const standardsList = useMemo(
    () => computeStandardsChecklist(summaries),
    [summaries]
  )

  const filteredStandards = useMemo(() => {
    return standardsList.filter((item) => {
      if (subjectFilter !== 'all' && item.subject !== subjectFilter) return false
      if (statusFilter === 'mastered' && !item.mastered) return false
      if (statusFilter === 'pending' && item.mastered) return false
      return true
    })
  }, [standardsList, subjectFilter, statusFilter])

  if (!activeStudent || !pacing) return null

  return (
    <div className="page-stack">
      <section className="card">
        <div className="section-header">
          <div>
            <span className="course-subject-tag">
              GRADE {activeStudent.grade} CURRICULUM &amp; PACING TRACKER
            </span>
            <h1>Progress &amp; Standards Scope-and-Sequence</h1>
            <p className="muted">
              Track {activeStudent.name}’s completion pace across all four Grade {activeStudent.grade} subjects and verify standards mastery.
            </p>
          </div>
          <div className="badge badge-primary">{pacing.statusLabel}</div>
        </div>

        <div className="tracker-kpi-grid">
          <div className="kpi-card">
            <span>Total Steps Mastered</span>
            <strong>
              {pacing.masteredLessons} / {pacing.totalLessons}
            </strong>
            <small>
              {Math.round(
                (pacing.masteredLessons / Math.max(1, pacing.totalLessons)) * 100
              )}
              % of Grade {activeStudent.grade} curriculum
            </small>
          </div>
          <div className="kpi-card">
            <span>Remaining Lessons</span>
            <strong>{pacing.remainingLessons}</strong>
            <small>Across Math, Science, ELA &amp; Social Studies</small>
          </div>
          <div className="kpi-card">
            <span>Target Completion Date</span>
            <strong>{activeStudent.targetEndDate}</strong>
            <small>{pacing.daysRemaining} calendar days remaining</small>
          </div>
          <div className="kpi-card">
            <span>Recommended Weekly Pace</span>
            <strong>{pacing.recommendedPerWeek} steps/wk</strong>
            <small>To finish by target end date</small>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Subject-by-Subject Curriculum Progress (Grade {activeStudent.grade})</h2>
        <div className="tracker-subject-list">
          {summaries.map((s) => (
            <div key={s.course.id} className="tracker-subject-row">
              <div className="tracker-subject-info">
                <div className="tracker-subject-title">
                  <span
                    className="subject-dot"
                    style={{ backgroundColor: s.course.color }}
                  />
                  <strong>{s.course.title}</strong>
                  <span className="muted-sm">
                    ({s.masteredCount}/{s.totalCount} steps mastered)
                  </span>
                </div>
                <div className="progress-bar-track">
                  <div
                    className="progress-bar-fill"
                    style={{
                      width: `${s.percentComplete}%`,
                      backgroundColor: s.course.color,
                    }}
                  />
                </div>
              </div>
              <div className="tracker-subject-pct">
                <strong>{s.percentComplete}%</strong>
              </div>
              <Link
                to={`/course/${s.course.id}`}
                className="btn btn-secondary btn-sm"
              >
                View Units
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <div className="section-header">
          <div>
            <h2>Standards Scope &amp; Sequence Checklist</h2>
            <p className="muted-sm">
              Aligned with Common Core (Math/ELA), NGSS (Science), and C3 Framework (Social Studies) for Grade {activeStudent.grade}.
            </p>
          </div>
          <div className="filter-bar">
            <select
              className="input input-sm"
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value as 'all' | SubjectId)}
              aria-label="Filter by subject"
            >
              <option value="all">All 4 Subjects</option>
              <option value="math">Mathematics</option>
              <option value="science">Science</option>
              <option value="ela">Language Arts</option>
              <option value="social">Social Studies</option>
            </select>
            <select
              className="input input-sm"
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value as 'all' | 'mastered' | 'pending')
              }
              aria-label="Filter by mastery status"
            >
              <option value="all">All Standards ({standardsList.length})</option>
              <option value="mastered">
                Mastered ({standardsList.filter((i) => i.mastered).length})
              </option>
              <option value="pending">
                Remaining ({standardsList.filter((i) => !i.mastered).length})
              </option>
            </select>
          </div>
        </div>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Status</th>
                <th>Standard Code</th>
                <th>Course</th>
                <th>Principle / Concept</th>
                <th>Lesson / Exam</th>
              </tr>
            </thead>
            <tbody>
              {filteredStandards.map((item, idx) => (
                <tr key={`${item.standard}-${item.lessonTitle}-${idx}`}>
                  <td>
                    {item.mastered ? (
                      <span className="badge badge-success">Mastered ✓</span>
                    ) : (
                      <span className="badge badge-neutral">In Queue</span>
                    )}
                  </td>
                  <td>
                    <code>{item.standard}</code>
                  </td>
                  <td>{item.courseTitle}</td>
                  <td>
                    <strong>{item.principleTitle}</strong>
                  </td>
                  <td className="muted-sm">{item.lessonTitle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
