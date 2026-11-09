import React, { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { getCourseById } from '../lib/curriculum'
import { computeCourseGrade, computeLessonEffectiveScore } from '../lib/grading'
import { computeCourseProgress } from '../lib/progress'

export const CoursePage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>()
  const { attempts, settings } = useApp()

  const includeOhio = settings.includeOhioAdjustments ?? true

  const course = useMemo(
    () => (courseId ? getCourseById(courseId, includeOhio) : undefined),
    [courseId, includeOhio]
  )

  const progress = useMemo(() => {
    if (!course) return null
    return computeCourseProgress(course, attempts, settings.masteryThreshold)
  }, [course, attempts, settings.masteryThreshold])

  const gradeSummary = useMemo(() => {
    if (!course) return null
    return computeCourseGrade(course, attempts, settings)
  }, [course, attempts, settings])

  if (!course || !progress || !gradeSummary) {
    return (
      <div className="card">
        <h2>Course not found</h2>
        <Link to="/" className="btn btn-primary">
          Back to Dashboard
        </Link>
      </div>
    )
  }

  return (
    <div className="page-stack">
      <div className="breadcrumb-row">
        <Link to="/" className="breadcrumb-link">
          ← Back to Student Dashboard
        </Link>
      </div>

      <section
        className="course-banner-card"
        style={{ borderLeft: `6px solid ${course.color}` }}
      >
        <div className="course-banner-main">
          <span className="course-subject-tag">
            GRADE {course.grade} • {course.subject.toUpperCase()} • {course.credits.toFixed(1)} CREDIT
          </span>
          <h1>{course.title}</h1>
          <p className="muted">{course.subtitle}</p>
          <div className="progress-bar-track" style={{ marginTop: '0.75rem' }}>
            <div
              className="progress-bar-fill"
              style={{
                width: `${progress.percentComplete}%`,
                backgroundColor: course.color,
              }}
            />
          </div>
          <div className="progress-row" style={{ marginTop: '0.35rem' }}>
            <span>
              <strong>{progress.masteredCount}</strong> of {progress.totalCount} steps mastered ({progress.percentComplete}%)
            </span>
            <span>Mastery Required: {settings.masteryThreshold}%</span>
          </div>
        </div>

        <div className="course-grade-box">
          <div className="course-grade-letter">{gradeSummary.letter}</div>
          <div className="course-grade-details">
            <strong>
              {gradeSummary.overallPercent !== null
                ? `${gradeSummary.overallPercent}% Overall`
                : 'No Graded Steps Yet'}
            </strong>
            <span>GPA Value: {gradeSummary.hasGrades ? gradeSummary.gpaPoints.toFixed(1) : '—'}</span>
            <span>
              Lessons: {gradeSummary.lessonAverage !== null ? `${gradeSummary.lessonAverage}%` : '—'} • Exams:{' '}
              {gradeSummary.unitTestAverage !== null ? `${gradeSummary.unitTestAverage}%` : '—'}
            </span>
          </div>
        </div>
      </section>

      {course.units.map((unit) => {
        const unitItems = progress.items.filter((i) => i.unit.id === unit.id)
        return (
          <section key={unit.id} className="card unit-card">
            <div className="unit-header">
              <div>
                <h2>{unit.title}</h2>
                <div className="standards-tags">
                  {unit.standards.map((std) => (
                    <span key={std} className="std-tag">
                      Standard: {std}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lesson-list">
              {unitItems.map((item) => {
                const { lesson, status, attempts: lessonAttempts } = item
                const effectiveScore = computeLessonEffectiveScore(lessonAttempts, settings)
                const isLocked = status === 'locked'

                return (
                  <div
                    key={lesson.id}
                    className={`lesson-row status-${status}`}
                  >
                    <div className="lesson-status-icon">
                      {status === 'mastered' && <span title="Mastered">✅</span>}
                      {status === 'available' && <span title="Ready">▶️</span>}
                      {status === 'in_progress' && <span title="In Progress">🔄</span>}
                      {status === 'locked' && <span title="Locked">🔒</span>}
                    </div>

                    <div className="lesson-row-body">
                      <div className="lesson-title-line">
                        {lesson.partOf && (
                          <span className="badge badge-primary">
                            {lesson.partOf}
                          </span>
                        )}
                        <strong>{lesson.title}</strong>
                        {lesson.kind === 'lesson_review' && (
                          <span className="badge badge-warning">Review Check</span>
                        )}
                        {lesson.kind === 'unit_test' && (
                          <span className="badge badge-exam">Unit Exam</span>
                        )}
                        {lesson.isOhioExtension && (
                          <span className="badge badge-neutral">Ohio Standard</span>
                        )}
                      </div>
                      <div className="lesson-sub-line">
                        <span>⏱ {lesson.estimatedMinutes} min</span>
                        <span>•</span>
                        <span>
                          Principles:{' '}
                          {lesson.principles.map((p) => p.title).join(', ')}
                        </span>
                      </div>
                    </div>

                    <div className="lesson-row-score">
                      {effectiveScore !== null ? (
                        <>
                          <strong>{effectiveScore}%</strong>
                          <span>
                            {lessonAttempts.length}{' '}
                            {lessonAttempts.length === 1 ? 'attempt' : 'attempts'}
                          </span>
                        </>
                      ) : (
                        <span className="muted-sm">Not attempted</span>
                      )}
                    </div>

                    <div className="lesson-row-action">
                      {isLocked ? (
                        <button className="btn btn-secondary btn-sm" disabled>
                          🔒 Master Prior Step
                        </button>
                      ) : (
                        <Link
                          to={`/course/${course.id}/lesson/${lesson.id}`}
                          className={`btn btn-sm ${
                            status === 'mastered' ? 'btn-secondary' : 'btn-primary'
                          }`}
                        >
                          {status === 'mastered'
                            ? 'Review / Fresh Practice'
                            : status === 'in_progress'
                            ? 'Retry Fresh Questions'
                            : 'Open Lesson'}
                        </Link>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
