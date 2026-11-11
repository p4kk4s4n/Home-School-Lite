import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { computeGpaReport } from '../lib/grading'
import { computeCourseProgress, computePacing } from '../lib/progress'

export const DashboardPage: React.FC = () => {
  const { activeStudent, activeCourses, attempts, settings } = useApp()

  const progressSummaries = useMemo(
    () =>
      activeCourses.map((course) =>
        computeCourseProgress(course, attempts, settings.masteryThreshold)
      ),
    [activeCourses, attempts, settings.masteryThreshold]
  )

  const gpaReport = useMemo(
    () => computeGpaReport(activeCourses, attempts, settings),
    [activeCourses, attempts, settings]
  )

  const pacing = useMemo(() => {
    if (!activeStudent) return null
    return computePacing(
      progressSummaries,
      activeStudent.createdAt,
      activeStudent.targetEndDate
    )
  }, [progressSummaries, activeStudent])

  const nextOverallLesson = useMemo(() => {
    for (const summary of progressSummaries) {
      if (summary.nextLesson) {
        return {
          course: summary.course,
          lesson: summary.nextLesson.lesson,
        }
      }
    }
    return null
  }, [progressSummaries])

  if (!activeStudent) {
    return null
  }

  return (
    <div className="page-stack">
      <section className="hero-banner">
        <div className="hero-left">
          <div className="hero-avatar">{activeStudent.avatar}</div>
          <div>
            <div className="hero-badges">
              <span className="badge badge-gold">Grade {activeStudent.grade} Scholar</span>
              <span className="badge badge-glass">
                🔥 {activeStudent.streakDays || 1} Day Streak
              </span>
              <span className="badge badge-glass">
                Mastery Goal: {settings.masteryThreshold}%
              </span>
            </div>
            <h1>Welcome back, {activeStudent.name}!</h1>
            <p className="hero-sub">
              Complete video lessons and randomized mastery checks in Math, Science, Language Arts, and Social Studies.
            </p>
            {nextOverallLesson && (
              <div className="hero-resume-row" style={{ marginTop: '0.85rem' }}>
                <Link
                  to={`/course/${nextOverallLesson.course.id}/lesson/${nextOverallLesson.lesson.id}`}
                  className="btn btn-accent hero-resume-btn"
                  style={{ textDecoration: 'none', fontWeight: 800 }}
                >
                  ▶️ Resume Next Lesson: {nextOverallLesson.lesson.title} ({nextOverallLesson.course.subject.toUpperCase()})
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="hero-stats-grid">
          <div className="stat-tile">
            <span className="stat-label">Term GPA (4.0 Scale)</span>
            <strong className="stat-value">
              {gpaReport.weightedGpa !== null ? gpaReport.weightedGpa.toFixed(2) : '—'}
            </strong>
            <span className="stat-meta">
              {gpaReport.averagePercent !== null
                ? `${gpaReport.averagePercent}% (${gpaReport.letter})`
                : 'Complete a lesson to start'}
            </span>
          </div>

          <div className="stat-tile">
            <span className="stat-label">Grade {activeStudent.grade} Progress</span>
            <strong className="stat-value">
              {pacing
                ? `${Math.round((pacing.masteredLessons / Math.max(1, pacing.totalLessons)) * 100)}%`
                : '0%'}
            </strong>
            <span className="stat-meta">
              {pacing
                ? `${pacing.masteredLessons} of ${pacing.totalLessons} lessons mastered`
                : '0 lessons'}
            </span>
          </div>

          <div className="stat-tile">
            <span className="stat-label">Pacing Status</span>
            <strong className="stat-value stat-value-sm">
              {pacing?.statusLabel ?? 'On Track'}
            </strong>
            <span className="stat-meta">
              Target: {pacing?.recommendedPerWeek ?? 0} lessons/wk
            </span>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-header">
          <div>
            <h2>Today’s Mastery Queue (Grade {activeStudent.grade})</h2>
            <p className="muted">
              Acellus-style daily workflow: watch the concept lesson, then pass the randomized quiz at {settings.masteryThreshold}%+ to unlock the next step.
            </p>
          </div>
          <Link to="/settings" className="btn btn-secondary btn-sm">
            Change Grade ({activeStudent.grade}) in Settings
          </Link>
        </div>

        <div className="course-grid">
          {progressSummaries.map((summary) => {
            const { course, masteredCount, totalCount, percentComplete, nextLesson } = summary
            const gradeSummary = gpaReport.courses.find((c) => c.courseId === course.id)

            return (
              <div key={course.id} className="course-card">
                <div
                  className="course-card-top"
                  style={{ borderTop: `5px solid ${course.color}` }}
                >
                  <div className="course-icon" style={{ backgroundColor: course.color }}>
                    {course.icon}
                  </div>
                  <div className="course-head-text">
                    <span className="course-subject-tag">
                      GRADE {course.grade} • {course.subject.toUpperCase()}
                    </span>
                    <h3>{course.title}</h3>
                    <p>{course.subtitle}</p>
                  </div>
                </div>

                <div className="course-metrics">
                  <div className="progress-row">
                    <span>
                      Mastery: <strong>{masteredCount}</strong> / {totalCount} steps
                    </span>
                    <strong>{percentComplete}%</strong>
                  </div>
                  <div className="progress-bar-track">
                    <div
                      className="progress-bar-fill"
                      style={{
                        width: `${percentComplete}%`,
                        backgroundColor: course.color,
                      }}
                    />
                  </div>

                  <div className="grade-mini-row">
                    <span>
                      Course Grade:{' '}
                      <strong>
                        {gradeSummary?.hasGrades
                          ? `${gradeSummary.overallPercent}% (${gradeSummary.letter})`
                          : 'No grade yet'}
                      </strong>
                    </span>
                    <span>
                      GPA Pts:{' '}
                      <strong>
                        {gradeSummary?.hasGrades
                          ? gradeSummary.gpaPoints.toFixed(1)
                          : '—'}
                      </strong>
                    </span>
                  </div>
                </div>

                <div className="next-up-box">
                  {nextLesson ? (
                    <>
                      <div className="next-up-label">
                        {nextLesson.status === 'in_progress'
                          ? '🔄 Retry Randomized Practice:'
                          : '▶ Next Unlocked Step:'}
                      </div>
                      <div className="next-up-title">{nextLesson.lesson.title}</div>
                      <div className="next-up-meta">
                        {nextLesson.unit.title} • {nextLesson.lesson.estimatedMinutes} min
                      </div>
                    </>
                  ) : (
                    <div className="course-complete-banner">
                      🏆 All lessons &amp; exams mastered in this course!
                    </div>
                  )}
                </div>

                <div className="course-card-actions">
                  {nextLesson && (
                    <Link
                      to={`/course/${course.id}/lesson/${nextLesson.lesson.id}`}
                      className="btn btn-primary"
                    >
                      {nextLesson.status === 'in_progress'
                        ? 'Resume Mastery Practice'
                        : 'Start Lesson'}
                    </Link>
                  )}
                  <Link
                    to={`/course/${course.id}`}
                    className="btn btn-secondary"
                  >
                    Course Map
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
