import { describe, expect, it, beforeEach, vi } from 'vitest'
import manifestRaw from '../../public/manifest.webmanifest?raw'
import contentIndex from '../../public/content/index.json'
import { ALL_COURSES, getCourseById, getCoursesForGrade } from '../lib/curriculum'
import {
  computeCourseGrade,
  computeGpaReport,
  computeLessonEffectiveScore,
  percentToLetterAndGpa,
} from '../lib/grading'
import { computeCourseProgress, computePacing } from '../lib/progress'
import { buildQuizAttempt } from '../lib/quizBuilder'
import {
  createStudent,
  DEFAULT_SETTINGS,
  exportBackupData,
  getStudentAttempts,
  getStudentEnrollments,
  importBackupData,
  recordQuizAttempt,
  resetDbConnectionForTests,
  updateStudent,
} from '../lib/db'
import {
  APP_ID,
  APP_SCOPE,
  assertNamespacedKey,
  CACHE_PREFIX,
  STORAGE_KEYS,
  STORAGE_PREFIX,
} from '../lib/storage'
import {
  checkForAppUpdate,
  cleanAppCachesOnly,
  isNewerRemoteVersion,
} from '../lib/update'

// Ensure public/content/*.json files are emitted and stay synchronized with ALL_COURSES
describe('Content Catalog & JSON Emission', () => {
  it('validates public/content/index.json and grade4/grade6 subject courses', () => {
    expect(contentIndex.appId).toBe(APP_ID)
    expect(contentIndex.courses).toHaveLength(ALL_COURSES.length)

    expect(getCoursesForGrade(4).map((c) => c.subject).sort()).toEqual([
      'ela',
      'math',
      'science',
      'social',
    ])
    expect(getCoursesForGrade(6).map((c) => c.subject).sort()).toEqual([
      'ela',
      'math',
      'science',
      'social',
    ])
  })
})

describe('Randomized Mastery Quiz Builder (No Repetitive Re-Dos)', () => {
  it('generates fresh, non-repeating Math questions across retries for the same principle', () => {
    const mathCourse = getCourseById('g4-math')!
    const lesson = mathCourse.units[1].lessons[0] // 2-digit multiplication

    const attempt1Questions = buildQuizAttempt({
      lesson,
      seed: 101,
      priorAttempts: [],
      questionCount: 5,
    })
    expect(attempt1Questions).toHaveLength(5)

    const fakeAttempt1 = {
      id: 'a1',
      studentId: 's1',
      courseId: mathCourse.id,
      unitId: lesson.unitId,
      lessonId: lesson.id,
      kind: 'lesson' as const,
      attemptNumber: 1,
      seed: 101,
      scorePercent: 60,
      correctCount: 3,
      totalCount: 5,
      passed: false,
      questionFingerprints: attempt1Questions.map((q) => q.fingerprint),
      missedPrincipleIds: [lesson.principles[0].id],
      completedAt: new Date().toISOString(),
    }

    const attempt2Questions = buildQuizAttempt({
      lesson,
      seed: 202,
      priorAttempts: [fakeAttempt1],
      questionCount: 5,
    })
    expect(attempt2Questions).toHaveLength(5)

    const seenInAttempt1 = new Set(fakeAttempt1.questionFingerprints)
    for (const q of attempt2Questions) {
      expect(seenInAttempt1.has(q.fingerprint)).toBe(false)
    }
  })

  it('draws unseen bank questions on retries and falls back gracefully when bank is exhausted', () => {
    const sciCourse = getCourseById('g6-science')!
    const lesson = sciCourse.units[0].lessons[0] // 8-item bank

    const a1 = buildQuizAttempt({
      lesson,
      seed: 111,
      priorAttempts: [],
      questionCount: 4,
    })
    const prior1 = {
      id: 'att1',
      studentId: 's1',
      courseId: sciCourse.id,
      unitId: lesson.unitId,
      lessonId: lesson.id,
      kind: 'lesson' as const,
      attemptNumber: 1,
      seed: 111,
      scorePercent: 50,
      correctCount: 2,
      totalCount: 4,
      passed: false,
      questionFingerprints: a1.map((q) => q.fingerprint),
      missedPrincipleIds: [lesson.principles[0].id],
      completedAt: new Date().toISOString(),
    }

    // Attempt 2 should pick the remaining 4 unseen questions from the 8-item bank
    const a2 = buildQuizAttempt({
      lesson,
      seed: 222,
      priorAttempts: [prior1],
      questionCount: 4,
    })
    const set1 = new Set(prior1.questionFingerprints)
    for (const q of a2) {
      expect(set1.has(q.fingerprint)).toBe(false)
    }

    // Attempt 3 (after all 8 have been seen) should still build 4 valid questions using least-recently-seen fallback
    const prior2 = {
      ...prior1,
      id: 'att2',
      attemptNumber: 2,
      questionFingerprints: a2.map((q) => q.fingerprint),
    }
    const a3 = buildQuizAttempt({
      lesson,
      seed: 333,
      priorAttempts: [prior1, prior2],
      questionCount: 4,
    })
    expect(a3).toHaveLength(4)
  })
})

describe('Standard +/- Grading Scale & Weighted 4.0 GPA System', () => {
  it('maps boundary percentages to standard +/- letters and 4.0 GPA points', () => {
    expect(percentToLetterAndGpa(95)).toEqual({ letter: 'A', gpaPoints: 4.0 })
    expect(percentToLetterAndGpa(90)).toEqual({ letter: 'A-', gpaPoints: 3.7 })
    expect(percentToLetterAndGpa(89.99)).toEqual({ letter: 'B+', gpaPoints: 3.3 })
    expect(percentToLetterAndGpa(83)).toEqual({ letter: 'B', gpaPoints: 3.0 })
    expect(percentToLetterAndGpa(80)).toEqual({ letter: 'B-', gpaPoints: 2.7 })
    expect(percentToLetterAndGpa(75)).toEqual({ letter: 'C', gpaPoints: 2.0 })
    expect(percentToLetterAndGpa(65)).toEqual({ letter: 'D', gpaPoints: 1.0 })
    expect(percentToLetterAndGpa(59.5)).toEqual({ letter: 'F', gpaPoints: 0.0 })
  })

  it('computes lesson effective score and credit-weighted GPA across courses', () => {
    const math = getCourseById('g4-math')!
    const sci = getCourseById('g4-science')!

    const attempts = [
      {
        id: '1',
        studentId: 'stu1',
        courseId: math.id,
        unitId: math.units[0].id,
        lessonId: math.units[0].lessons[0].id,
        kind: 'lesson' as const,
        attemptNumber: 1,
        seed: 1,
        scorePercent: 60,
        correctCount: 3,
        totalCount: 5,
        passed: false,
        questionFingerprints: [],
        missedPrincipleIds: [],
        completedAt: '2026-11-01T10:00:00Z',
      },
      {
        id: '2',
        studentId: 'stu1',
        courseId: math.id,
        unitId: math.units[0].id,
        lessonId: math.units[0].lessons[0].id,
        kind: 'lesson' as const,
        attemptNumber: 2,
        seed: 2,
        scorePercent: 95,
        correctCount: 5,
        totalCount: 5,
        passed: true,
        questionFingerprints: [],
        missedPrincipleIds: [],
        completedAt: '2026-11-01T10:10:00Z',
      },
      {
        id: '3',
        studentId: 'stu1',
        courseId: sci.id,
        unitId: sci.units[0].id,
        lessonId: sci.units[0].lessons[0].id,
        kind: 'lesson' as const,
        attemptNumber: 1,
        seed: 3,
        scorePercent: 85,
        correctCount: 4,
        totalCount: 5,
        passed: true,
        questionFingerprints: [],
        missedPrincipleIds: [],
        completedAt: '2026-11-01T11:00:00Z',
      },
    ]

    const lessonScore = computeLessonEffectiveScore(
      attempts.filter((a) => a.courseId === math.id),
      { masteryThreshold: 80, retryPenaltyPercent: 0 }
    )
    expect(lessonScore).toBe(95)

    const mathGrade = computeCourseGrade(math, attempts, DEFAULT_SETTINGS)
    expect(mathGrade.overallPercent).toBe(95)
    expect(mathGrade.letter).toBe('A')
    expect(mathGrade.gpaPoints).toBe(4.0)

    const report = computeGpaReport([math, sci], attempts, DEFAULT_SETTINGS)
    // Math = 95% (A, 4.0), Science = 85% (B, 3.0) => Weighted GPA = 3.50
    expect(report.weightedGpa).toBe(3.5)
    expect(report.averagePercent).toBe(90)
    expect(report.letter).toBe('A-')
  })
})

describe('Sequential Unlock Progress, Student Grade Switching & Backup Round-Trip', () => {
  beforeEach(async () => {
    await resetDbConnectionForTests()
  })

  it('unlocks lessons sequentially upon reaching mastery threshold', () => {
    const course = getCourseById('g6-math')!
    const l1 = course.units[0].lessons[0]
    const l2 = course.units[0].lessons[1]

    // Initially, Lesson 1 is available and Lesson 2 is locked
    const initial = computeCourseProgress(course, [], 80)
    expect(initial.items[0].status).toBe('available')
    expect(initial.items[1].status).toBe('locked')

    // Below mastery (60%): Lesson 1 becomes in_progress, Lesson 2 stays locked
    const failedAttempt = [
      {
        id: 'a1',
        studentId: 's1',
        courseId: course.id,
        unitId: course.units[0].id,
        lessonId: l1.id,
        kind: 'lesson' as const,
        attemptNumber: 1,
        seed: 1,
        scorePercent: 60,
        correctCount: 3,
        totalCount: 5,
        passed: false,
        questionFingerprints: [],
        missedPrincipleIds: [],
        completedAt: '2026-11-01T00:00:00Z',
      },
    ]
    const mid = computeCourseProgress(course, failedAttempt, 80)
    expect(mid.items[0].status).toBe('in_progress')
    expect(mid.items[1].status).toBe('locked')

    // Mastery achieved (80%): Lesson 1 is mastered and Lesson 2 unlocks!
    const passedAttempt = [
      ...failedAttempt,
      {
        ...failedAttempt[0],
        id: 'a2',
        attemptNumber: 2,
        scorePercent: 80,
        passed: true,
      },
    ]
    const unlocked = computeCourseProgress(course, passedAttempt, 80)
    expect(unlocked.items[0].status).toBe('mastered')
    expect(unlocked.items[1].lesson.id).toBe(l2.id)
    expect(unlocked.items[1].status).toBe('available')

    const pacing = computePacing(
      [unlocked],
      '2026-10-01T00:00:00Z',
      '2027-05-01T00:00:00Z'
    )
    expect(pacing.masteredLessons).toBe(1)
  })

  it('enrolls all 4 subjects for the student grade and preserves prior grade data when switching between Grade 4 and Grade 6', async () => {
    const student = await createStudent({
      name: 'Taylor',
      avatar: '🚀',
      grade: 4,
    })

    const g4Enrollments = await getStudentEnrollments(student.id)
    expect(g4Enrollments.map((e) => e.courseId).sort()).toEqual([
      'g4-ela',
      'g4-math',
      'g4-science',
      'g4-social',
    ])

    // Record a Grade 4 Math attempt
    await recordQuizAttempt({
      studentId: student.id,
      courseId: 'g4-math',
      unitId: 'g4-math-u1',
      lessonId: 'g4-math-u1-l1',
      kind: 'lesson',
      seed: 42,
      scorePercent: 100,
      correctCount: 5,
      totalCount: 5,
      passed: true,
      questionFingerprints: ['fp1'],
      missedPrincipleIds: [],
    })

    // Switch student to Grade 6 in settings
    const switched = await updateStudent(student.id, { grade: 6 })
    expect(switched.grade).toBe(6)
    expect(getCoursesForGrade(switched.grade).map((c) => c.id).sort()).toEqual([
      'g6-ela',
      'g6-math',
      'g6-science',
      'g6-social',
    ])

    // Switch back to Grade 4 and verify the Grade 4 attempt is still intact
    await updateStudent(student.id, { grade: 4 })
    const preservedAttempts = await getStudentAttempts(student.id)
    expect(preservedAttempts).toHaveLength(1)
    expect(preservedAttempts[0].courseId).toBe('g4-math')
    expect(preservedAttempts[0].scorePercent).toBe(100)
  })

  it('exports and imports backup JSON and rejects foreign app backup files', async () => {
    await createStudent({ name: 'Sam', avatar: '🦉', grade: 6 })
    const exported = await exportBackupData()
    expect(exported.app).toBe('home-school-lite')

    const imported = await importBackupData(exported)
    expect(imported.studentsCount).toBeGreaterThanOrEqual(1)

    await expect(
      importBackupData({ app: 'other-github-pages-app', students: [], attempts: [] })
    ).rejects.toThrow(/Rejected backup file/)
  })
})

describe('Unique Mobile PWA Identity, Same-Origin Isolation & Auto-Update Checker', () => {
  it('enforces unique manifest id, start_url, and scope under /Home-School-Lite/', () => {
    const manifest = JSON.parse(manifestRaw)
    expect(manifest.id).toBe('/Home-School-Lite/?app=home-school-lite')
    expect(manifest.start_url).toBe('/Home-School-Lite/?source=pwa')
    expect(manifest.scope).toBe('/Home-School-Lite/')
    expect(APP_SCOPE).toBe('/Home-School-Lite/')
  })

  it('enforces hsl: prefix on all localStorage keys', () => {
    for (const key of Object.values(STORAGE_KEYS)) {
      expect(key.startsWith(STORAGE_PREFIX)).toBe(true)
      expect(() => assertNamespacedKey(key)).not.toThrow()
    }
    expect(() => assertNamespacedKey('settings')).toThrow(/Storage isolation violation/)
  })

  it('cleans ONLY hsl-* caches and never deletes sibling app caches on the same origin', async () => {
    const existingCaches = new Set([
      'hsl-v0.9.0-runtime',
      'hsl-old-assets',
      'sibling-app-cache-v1',
      'workbox-precache-v2-https://p4kk4s4n.github.io/Other-App/',
    ])

    const fakeCacheStorage = {
      keys: async () => Array.from(existingCaches),
      delete: async (key: string) => existingCaches.delete(key),
    } as unknown as CacheStorage

    const deleted = await cleanAppCachesOnly(fakeCacheStorage)
    expect(deleted.sort()).toEqual(['hsl-old-assets', 'hsl-v0.9.0-runtime'])
    expect(existingCaches.has('sibling-app-cache-v1')).toBe(true)
    expect(
      existingCaches.has('workbox-precache-v2-https://p4kk4s4n.github.io/Other-App/')
    ).toBe(true)
    expect(CACHE_PREFIX).toBe('hsl-')
  })

  it('detects newer remote versions and ignores version.json from any foreign appId', async () => {
    const current = {
      appId: 'home-school-lite',
      version: '1.0.0',
      buildTime: '2026-11-06T12:00:00.000Z',
      commit: 'abc1234',
    }

    expect(
      isNewerRemoteVersion(current, {
        appId: 'home-school-lite',
        version: '1.1.0',
        buildTime: '2026-11-06T13:00:00.000Z',
        commit: 'def5678',
      })
    ).toBe(true)

    // Foreign appId must be ignored even if version number looks higher
    expect(
      isNewerRemoteVersion(current, {
        appId: 'another-p4kk4s4n-app',
        version: '9.9.9',
        buildTime: '2026-11-06T15:00:00.000Z',
        commit: 'fff9999',
      })
    ).toBe(false)

    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        appId: 'home-school-lite',
        version: '2.0.0',
        buildTime: '2026-12-01T00:00:00.000Z',
        commit: 'new9999',
      }),
    })

    const res = await checkForAppUpdate(
      mockFetch as unknown as typeof fetch,
      '/Home-School-Lite/'
    )
    expect(res.updateAvailable).toBe(true)
    expect(res.remote?.version).toBe('2.0.0')
  })
})
