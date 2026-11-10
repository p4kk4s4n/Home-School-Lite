import { describe, expect, it, beforeEach, vi } from 'vitest'
import manifestRaw from '../../public/manifest.webmanifest?raw'
import contentIndex from '../../public/content/index.json'
import {
  ALL_COURSES,
  getCourseById,
  getCoursesForGrade,
  getLessonAssignment,
} from '../lib/curriculum'
import { lintQuestionItem } from '../lib/plainLanguage'
import { getLessonRemediation, getRemediationTier } from '../lib/remediation'
import { MATH_GENERATORS } from '../lib/mathGenerators'
import { createRng } from '../lib/random'
import { SUPPORTED_GRADES } from '../types'
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
  deleteAttempt,
  deleteLessonAttempts,
  deleteStudent,
  exportBackupData,
  getSettings,
  getStudentAttempts,
  getStudentEnrollments,
  getStudents,
  importBackupData,
  mergeFamilyPayload,
  recordQuizAttempt,
  resetDbConnectionForTests,
  resetStudentProgress,
  saveSettings,
  updateStudent,
} from '../lib/db'
import {
  APP_ID,
  APP_SCOPE,
  assertNamespacedKey,
  CACHE_PREFIX,
  getLessonChecklistProgress,
  saveLessonChecklistProgress,
  STORAGE_KEYS,
  STORAGE_PREFIX,
} from '../lib/storage'
import {
  createCloudFamilyCircle,
  disconnectFamilySync,
  generateRandomFamilyCode,
  joinFamilyAsParent,
  joinFamilyAsStudent,
  normalizeFamilyCode,
  pushFamilyCircleToCloud,
  resolveSyncEndpoint,
  testSyncConnection,
} from '../lib/sync'
import { BackupPayload } from '../types'
import {
  checkForAppUpdate,
  cleanAppCachesOnly,
  isNewerRemoteVersion,
} from '../lib/update'

// Ensure public/content/*.json files are emitted and stay synchronized with ALL_COURSES
describe('Content Catalog, Plain-Language Standard, Ohio Opt-Out & Remediation', () => {
  it('validates public/content/index.json and all 20 courses across Grades 4, 5, 6, 7 & 8', () => {
    expect(contentIndex.appId).toBe(APP_ID)
    expect(contentIndex.courses).toHaveLength(20)
    expect(ALL_COURSES).toHaveLength(20)

    for (const grade of SUPPORTED_GRADES) {
      expect(getCoursesForGrade(grade).map((c) => c.subject).sort()).toEqual([
        'ela',
        'math',
        'science',
        'social',
      ])
    }
  })

  it('enforces Plain-Language Standard across all 20 courses (bank questions and math generators)', () => {
    const violations: string[] = []

    for (const course of ALL_COURSES) {
      for (const unit of course.units) {
        for (const lesson of unit.lessons) {
          for (const principle of lesson.principles) {
            if (principle.bank) {
              for (const item of principle.bank) {
                const issues = lintQuestionItem(item)
                if (issues.length > 0) {
                  violations.push(
                    `[${course.id} > ${lesson.id} > ${item.id}] ${issues.map((i) => i.message).join('; ')} (prompt: "${item.prompt}")`
                  )
                }
              }
            }
          }
        }
      }
    }

    for (const [genId, genFn] of Object.entries(MATH_GENERATORS)) {
      for (let i = 1; i <= 30; i++) {
        const rng = createRng(i * 997)
        const generated = genFn(rng, genId, genId)
        const issues = lintQuestionItem(generated)
        if (issues.length > 0) {
          violations.push(
            `[Generator ${genId} sample #${i}] ${issues.map((it) => it.message).join('; ')} (prompt: "${generated.prompt}")`
          )
          break
        }
      }
    }

    expect(violations).toEqual([])

    // Also verify buildQuizAttempt succeeds for every single lesson across all 20 courses
    for (const course of ALL_COURSES) {
      for (const unit of course.units) {
        for (const lesson of unit.lessons) {
          const questions = buildQuizAttempt({
            lesson,
            seed: 12345,
            priorAttempts: [],
            questionCount: lesson.questionCount ?? 5,
          })
          expect(questions.length).toBeGreaterThanOrEqual(4)
        }
      }
    }
  })

  it('supports opting out of Ohio State Curriculum extensions in getCoursesForGrade', () => {
    for (const grade of SUPPORTED_GRADES) {
      const withOhio = getCoursesForGrade(grade, true)
      const withoutOhio = getCoursesForGrade(grade, false)

      const countLessons = (courses: typeof withOhio) =>
        courses.reduce(
          (sum, c) =>
            sum + c.units.reduce((uSum, u) => uSum + u.lessons.length, 0),
          0
        )

      expect(countLessons(withOhio)).toBeGreaterThan(countLessons(withoutOhio))

      for (const course of withoutOhio) {
        for (const unit of course.units) {
          for (const lesson of unit.lessons) {
            expect(lesson.isOhioExtension).toBeFalsy()
          }
        }
      }
    }
  })

  it('computes remediation tiers and requires Parent PIN on external remediation links', () => {
    const course = getCourseById('g5-math')!
    const lesson = course.units[0].lessons[0]
    const remediation = getLessonRemediation(lesson, course.subject, course.grade)

    expect(remediation.simpleSteps.length).toBeGreaterThanOrEqual(2)
    expect(remediation.links.length).toBeGreaterThanOrEqual(2)
    for (const link of remediation.links) {
      expect(link.requiresParentPin).toBe(true)
    }

    expect(getRemediationTier([], 80)).toBe(0)
    const failedOnce = [
      {
        id: 'f1',
        studentId: 's1',
        courseId: course.id,
        unitId: lesson.unitId,
        lessonId: lesson.id,
        kind: 'lesson' as const,
        attemptNumber: 1,
        seed: 1,
        scorePercent: 60,
        correctCount: 3,
        totalCount: 5,
        passed: false,
        questionFingerprints: [],
        missedPrincipleIds: [],
        completedAt: '2026-11-09T00:00:00Z',
      },
    ]
    expect(getRemediationTier(failedOnce, 80)).toBe(1)
    expect(
      getRemediationTier(
        [
          ...failedOnce,
          { ...failedOnce[0], id: 'f2', attemptNumber: 2 },
        ],
        80
      )
    ).toBe(2)
    expect(
      getRemediationTier(
        [
          ...failedOnce,
          { ...failedOnce[0], id: 'f2', attemptNumber: 2 },
          { ...failedOnce[0], id: 'f3', attemptNumber: 3 },
        ],
        80
      )
    ).toBe(3)
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

    // Switch student across Grades 5, 6, 7, and 8 in settings
    for (const targetGrade of [5, 6, 7, 8] as const) {
      const switched = await updateStudent(student.id, { grade: targetGrade })
      expect(switched.grade).toBe(targetGrade)
      expect(getCoursesForGrade(switched.grade).map((c) => c.id).sort()).toEqual([
        `g${targetGrade}-ela`,
        `g${targetGrade}-math`,
        `g${targetGrade}-science`,
        `g${targetGrade}-social`,
      ])
    }

    // Verify getStudents() preserves Grade 8 (does not coerce to 4)
    const reloadedStudents = await getStudents()
    expect(reloadedStudents.find((s) => s.id === student.id)?.grade).toBe(8)

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
  it('enforces unique manifest id, start_url, scope, and PNG raster icons for Android WebAPKs', () => {
    const manifest = JSON.parse(manifestRaw)
    expect(manifest.id).toBe('/Home-School-Lite/?app=home-school-lite')
    expect(manifest.start_url).toBe('/Home-School-Lite/?source=pwa')
    expect(manifest.scope).toBe('/Home-School-Lite/')
    expect(APP_SCOPE).toBe('/Home-School-Lite/')

    // Android WebAPK minting requires 192x192 and 512x512 PNG icons with maskable support
    const pngIcons = manifest.icons.filter((i: any) => i.type === 'image/png')
    expect(pngIcons.length).toBeGreaterThanOrEqual(2)
    expect(pngIcons.some((i: any) => i.sizes === '192x192')).toBe(true)
    expect(pngIcons.some((i: any) => i.sizes === '512x512')).toBe(true)
    expect(pngIcons.some((i: any) => i.purpose === 'maskable')).toBe(true)
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

describe('Quiz Review Snapshot, Lesson Scope Checklist & Multi-Device Family Sync', () => {
  beforeEach(async () => {
    await resetDbConnectionForTests()
  })

  it('preserves frozen question reviewItems on attempt submission so answers never show as (No answer)', async () => {
    const student = await createStudent({ name: 'Maya', avatar: '🌟', grade: 4 })
    const course = getCourseById('g4-math')!
    const lesson = course.units[0].lessons[0]

    // Snapshot quiz before submission
    const frozenQuiz = buildQuizAttempt({
      lesson,
      seed: 777,
      priorAttempts: [],
      questionCount: 5,
    })

    const answersMap: Record<string, string> = {}
    for (const q of frozenQuiz) {
      answersMap[q.fingerprint] = q.answer
    }

    const reviewItems = frozenQuiz.map((q) => ({
      fingerprint: q.fingerprint,
      principleId: q.principleId,
      principleTitle: q.principleTitle,
      prompt: q.prompt,
      studentAnswer: answersMap[q.fingerprint],
      correctAnswer: q.answer,
      isCorrect: true,
      explanation: q.explanation,
    }))

    const savedAttempt = await recordQuizAttempt({
      studentId: student.id,
      courseId: course.id,
      unitId: lesson.unitId,
      lessonId: lesson.id,
      kind: 'lesson',
      seed: 777,
      scorePercent: 100,
      correctCount: 5,
      totalCount: 5,
      passed: true,
      questionFingerprints: frozenQuiz.map((q) => q.fingerprint),
      missedPrincipleIds: [],
      reviewItems,
    })

    expect(savedAttempt.scorePercent).toBe(100)
    expect(savedAttempt.reviewItems).toHaveLength(5)
    for (const item of savedAttempt.reviewItems!) {
      expect(item.studentAnswer).not.toBe('(No answer)')
      expect(item.studentAnswer).toBe(item.correctAnswer)
      expect(item.isCorrect).toBe(true)
    }
  })

  it('provides explicit lesson scope steps and persists student checklist progress', () => {
    const course = getCourseById('g6-science')!
    const lesson = course.units[0].lessons[0]
    const assignment = getLessonAssignment(lesson)

    expect(assignment.steps.length).toBeGreaterThanOrEqual(2)
    expect(assignment.scopeSummary).toContain('Lesson Scope')

    saveLessonChecklistProgress('stu-1', lesson.id, [assignment.steps[0].id])
    expect(getLessonChecklistProgress('stu-1', lesson.id)).toEqual([
      assignment.steps[0].id,
    ])
  })

  it('normalizes custom Family Codes and resolves Firebase Realtime DB endpoints', () => {
    expect(normalizeFamilyCode('p4kk4')).toBe('HSL-P4KK4')
    expect(normalizeFamilyCode('hsl-p4kk4')).toBe('HSL-P4KK4')
    expect(normalizeFamilyCode('HSL-SMITH-2026')).toBe('HSL-SMITH-2026')

    const rtdbUrl = 'https://my-homeschool-default-rtdb.firebaseio.com'
    const endpoint = resolveSyncEndpoint('HSL-P4KK4', rtdbUrl)
    expect(endpoint).toBe(
      'https://my-homeschool-default-rtdb.firebaseio.com/families/HSL-P4KK4.json'
    )
  })

  it('allows initializing custom Family Code via PUT and tests connectivity', async () => {
    await createStudent({ name: 'Sam', avatar: '🚀', grade: 4 })
    let lastUrl = ''
    let lastMethod = ''
    const mockFetch = vi.fn().mockImplementation((url: string, init?: RequestInit) => {
      lastUrl = url
      lastMethod = init?.method || 'GET'
      return Promise.resolve({
        ok: true,
        status: 200,
        json: async () => ({ app: 'home-school-lite', ok: true }),
      })
    })

    const created = await createCloudFamilyCircle({
      familyCode: 'p4kk4',
      endpointUrl: 'https://my-test-rtdb.firebaseio.com',
      fetchImpl: mockFetch as unknown as typeof fetch,
    })
    expect(created.familyCode).toBe('HSL-P4KK4')
    expect(lastMethod).toBe('PUT')
    expect(lastUrl).toBe('https://my-test-rtdb.firebaseio.com/families/HSL-P4KK4.json')

    const testRes = await testSyncConnection(
      'HSL-P4KK4',
      'https://my-test-rtdb.firebaseio.com',
      mockFetch as unknown as typeof fetch
    )
    expect(testRes.ok).toBe(true)

    // Test clean reset / disconnect
    await disconnectFamilySync()
    const settings = await getSettings()
    expect(settings.familySync?.enabled).toBe(false)
    expect(settings.familySync?.familyCode).toBe('')
    expect((await getStudents()).length).toBeGreaterThanOrEqual(1)
  })

  it('generates a randomized 5-digit Family Code matching HSL-##### format', () => {
    const code = generateRandomFamilyCode()
    expect(code).toMatch(/^HSL-\d{5}$/)
    const code2 = generateRandomFamilyCode()
    expect(code2).toMatch(/^HSL-\d{5}$/)
    expect(code).not.toBe(code2)
  })

  it('records tombstone when deleting student and prevents resurrection during sync', async () => {
    const stu1 = await createStudent({ name: 'Alice', avatar: '🚀', grade: 4 })
    const stu2 = await createStudent({ name: 'Bob', avatar: '🦊', grade: 6 })
    let students = await getStudents()
    expect(students.map((s) => s.id)).toContain(stu2.id)

    // Delete stu2
    await deleteStudent(stu2.id)
    students = await getStudents()
    expect(students.map((s) => s.id)).not.toContain(stu2.id)
    const settings = await getSettings()
    expect(settings.deletedStudentIds).toContain(stu2.id)

    // Simulate remote payload still having stu2
    const remotePayload: BackupPayload = {
      app: 'home-school-lite',
      schemaVersion: 1,
      exportedAt: new Date().toISOString(),
      deletedStudentIds: [],
      students: [stu1, stu2],
      enrollments: [],
      attempts: [],
      settings: { ...DEFAULT_SETTINGS, updatedAt: new Date().toISOString() },
    }

    // Merge remote: stu2 should NOT be resurrected because stu2 is tombstoned
    await mergeFamilyPayload(remotePayload)
    const afterMerge = await getStudents()
    expect(afterMerge.map((s) => s.id)).not.toContain(stu2.id)
    expect(afterMerge.map((s) => s.id)).toContain(stu1.id)
  })

  it('pushes local state directly to cloud via PUT without pulling', async () => {
    await saveSettings({
      familySync: {
        enabled: true,
        familyCode: 'HSL-99999',
        syncEndpointUrl: 'https://test-rtdb.firebaseio.com',
        deviceRole: 'parent',
        autoSyncIntervalMin: 5,
      },
    })

    let putMethod = ''
    let putUrl = ''
    let putBody: any = null
    const mockFetch = vi.fn().mockImplementation((url: string, init?: RequestInit) => {
      putUrl = url
      putMethod = init?.method || 'GET'
      putBody = JSON.parse((init?.body as string) || '{}')
      return Promise.resolve({
        ok: true,
        status: 200,
        json: async () => ({ ok: true }),
      })
    })

    await pushFamilyCircleToCloud(undefined, mockFetch as unknown as typeof fetch)
    expect(putMethod).toBe('PUT')
    expect(putUrl).toBe('https://test-rtdb.firebaseio.com/families/HSL-99999.json')
    expect(putBody.app).toBe('home-school-lite')
    expect(putBody.familyCode).toBe('HSL-99999')
  })

  it('allows a student device to join via Family Code + Student PIN and union-merges multi-device attempts', async () => {
    // Device A (Parent) creates two students
    const s1 = await createStudent({
      id: 'stu-alice',
      name: 'Alice',
      avatar: '🦉',
      grade: 4,
      studentPin: '2468',
    })
    const s2 = await createStudent({
      id: 'stu-bob',
      name: 'Bob',
      avatar: '🦊',
      grade: 6,
      studentPin: '1357',
    })

    const parentCloudSnapshot = await exportBackupData()
    parentCloudSnapshot.settings.masteryThreshold = 85
    parentCloudSnapshot.settings.updatedAt = '2026-11-06T22:00:00.000Z'

    // Simulate Student Device B joining with Family Code + Alice's Student PIN (2468)
    await resetDbConnectionForTests()
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => parentCloudSnapshot,
    })

    // Wrong PIN must be rejected
    await expect(
      joinFamilyAsStudent({
        familyCode: 'HSL-DEMO123',
        studentId: s1.id,
        studentPin: '9999',
        customEndpointUrl: 'https://test-rtdb.firebaseio.com',
        fetchImpl: mockFetch as unknown as typeof fetch,
      })
    ).rejects.toThrow(/Incorrect Student PIN/)

    // Correct PIN succeeds and binds device to Alice
    const joined = await joinFamilyAsStudent({
      familyCode: 'HSL-DEMO123',
      studentId: s1.id,
      studentPin: '2468',
      customEndpointUrl: 'https://test-rtdb.firebaseio.com',
      fetchImpl: mockFetch as unknown as typeof fetch,
    })
    expect(joined.student.name).toBe('Alice')

    const localSettings = await getSettings()
    expect(localSettings.masteryThreshold).toBe(85)
    expect(localSettings.familySync?.deviceRole).toBe('student')
    expect(localSettings.familySync?.boundStudentId).toBe(s1.id)

    // Simulate concurrent quiz attempts from Alice and Bob across devices
    const remoteWithBobAttempt = {
      ...parentCloudSnapshot,
      attempts: [
        {
          id: 'att-bob-1',
          studentId: s2.id,
          courseId: 'g6-math',
          unitId: 'g6-math-u1',
          lessonId: 'g6-math-u1-l1',
          kind: 'lesson' as const,
          attemptNumber: 1,
          seed: 99,
          scorePercent: 90,
          correctCount: 5,
          totalCount: 5,
          passed: true,
          questionFingerprints: ['fp-b1'],
          missedPrincipleIds: [],
          completedAt: '2026-11-06T22:05:00.000Z',
        },
      ],
    }

    await recordQuizAttempt({
      studentId: s1.id,
      courseId: 'g4-math',
      unitId: 'g4-math-u1',
      lessonId: 'g4-math-u1-l1',
      kind: 'lesson',
      seed: 55,
      scorePercent: 100,
      correctCount: 5,
      totalCount: 5,
      passed: true,
      questionFingerprints: ['fp-a1'],
      missedPrincipleIds: [],
    })

    const mergeResult = await mergeFamilyPayload(remoteWithBobAttempt)
    expect(mergeResult.mergedStudents).toBeGreaterThanOrEqual(2)
    expect(mergeResult.mergedAttempts).toBe(2)

    const aliceAttempts = await getStudentAttempts(s1.id)
    const bobAttempts = await getStudentAttempts(s2.id)
    expect(aliceAttempts).toHaveLength(1)
    expect(bobAttempts).toHaveLength(1)
    expect((await getStudents()).map((s) => s.name)).toContain('Bob')
  })

  it('allows multiple parent devices to link, validate Parent PIN, and sync connected parent rosters', async () => {
    // 1. Parent 1 initializes circle
    await resetDbConnectionForTests()
    await createStudent({ name: 'Charlie', avatar: '🦁', grade: 5 })

    let cloudData: any = null
    const mockFetch = vi.fn().mockImplementation((url: string, init?: RequestInit) => {
      const method = init?.method || 'GET'
      if (method === 'PUT') {
        cloudData = JSON.parse((init?.body as string) || '{}')
        return Promise.resolve({
          ok: true,
          status: 200,
          json: async () => ({ ok: true }),
        })
      }
      return Promise.resolve({
        ok: true,
        status: 200,
        json: async () => cloudData,
      })
    })

    await createCloudFamilyCircle({
      familyCode: 'HSL-12345',
      endpointUrl: 'https://test-rtdb.firebaseio.com',
      parentName: "Mom's Laptop",
      fetchImpl: mockFetch as unknown as typeof fetch,
    })

    expect(cloudData.settings.connectedParents).toHaveLength(1)
    expect(cloudData.settings.connectedParents[0].name).toBe("Mom's Laptop")

    // 2. Parent 2 tries to link on a fresh device with wrong PIN
    await resetDbConnectionForTests()
    await expect(
      joinFamilyAsParent({
        familyCode: 'HSL-12345',
        parentPin: '9999',
        customEndpointUrl: 'https://test-rtdb.firebaseio.com',
        parentName: "Dad's Phone",
        fetchImpl: mockFetch as unknown as typeof fetch,
      })
    ).rejects.toThrow(/Incorrect Parent PIN/)

    // 3. Parent 2 links with correct PIN (default 1234)
    const linked = await joinFamilyAsParent({
      familyCode: 'HSL-12345',
      parentPin: '1234',
      customEndpointUrl: 'https://test-rtdb.firebaseio.com',
      parentName: "Dad's Phone",
      fetchImpl: mockFetch as unknown as typeof fetch,
    })

    expect(linked.familyCode).toBe('HSL-12345')
    expect(linked.studentsCount).toBeGreaterThanOrEqual(1)

    // Verify cloud has both parent devices registered
    expect(cloudData.settings.connectedParents).toHaveLength(2)
    const parentNames = cloudData.settings.connectedParents.map((p: any) => p.name)
    expect(parentNames).toContain("Mom's Laptop")
    expect(parentNames).toContain("Dad's Phone")

    // Verify local device has full parent access
    const p2Settings = await getSettings()
    expect(p2Settings.familySync?.deviceRole).toBe('parent')
    expect(p2Settings.familySync?.parentName).toBe("Dad's Phone")
    expect((await getStudents()).map((s) => s.name)).toContain('Charlie')
  })

  it('supports parental controls: deleting individual attempts, deleting lesson completions, and resetting student progress', async () => {
    await resetDbConnectionForTests()
    const student = await createStudent({ name: 'Daisy', avatar: '🌸', grade: 4 })

    // Record 3 attempts across 2 lessons
    const a1 = await recordQuizAttempt({
      studentId: student.id,
      courseId: 'g4-math',
      unitId: 'g4-math-u1',
      lessonId: 'g4-math-u1-l1',
      kind: 'lesson',
      seed: 101,
      scorePercent: 60,
      correctCount: 3,
      totalCount: 5,
      passed: false,
      questionFingerprints: ['fp-1'],
      missedPrincipleIds: ['p1'],
    })

    const a2 = await recordQuizAttempt({
      studentId: student.id,
      courseId: 'g4-math',
      unitId: 'g4-math-u1',
      lessonId: 'g4-math-u1-l1',
      kind: 'lesson',
      seed: 102,
      scorePercent: 100,
      correctCount: 5,
      totalCount: 5,
      passed: true,
      questionFingerprints: ['fp-2'],
      missedPrincipleIds: [],
    })

    const a3 = await recordQuizAttempt({
      studentId: student.id,
      courseId: 'g4-math',
      unitId: 'g4-math-u1',
      lessonId: 'g4-math-u1-l2',
      kind: 'lesson',
      seed: 103,
      scorePercent: 80,
      correctCount: 4,
      totalCount: 5,
      passed: true,
      questionFingerprints: ['fp-3'],
      missedPrincipleIds: [],
    })

    let attempts = await getStudentAttempts(student.id)
    expect(attempts).toHaveLength(3)

    // 1. Delete a single attempt (a1)
    await deleteAttempt(a1.id)
    attempts = await getStudentAttempts(student.id)
    expect(attempts).toHaveLength(2)
    expect(attempts.map((a) => a.id)).not.toContain(a1.id)
    let settings = await getSettings()
    expect(settings.deletedAttemptIds).toContain(a1.id)

    // 2. Delete all attempts for a specific lesson (lesson l1)
    const count = await deleteLessonAttempts(student.id, 'g4-math', 'g4-math-u1-l1')
    expect(count).toBe(1) // Only a2 was left for l1
    attempts = await getStudentAttempts(student.id)
    expect(attempts).toHaveLength(1)
    expect(attempts[0].id).toBe(a3.id)
    settings = await getSettings()
    expect(settings.deletedAttemptIds).toContain(a2.id)

    // 3. Reset entire student progress
    const resetCount = await resetStudentProgress(student.id)
    expect(resetCount).toBe(1) // a3 was left
    attempts = await getStudentAttempts(student.id)
    expect(attempts).toHaveLength(0)
    settings = await getSettings()
    expect(settings.deletedAttemptIds).toContain(a3.id)

    // 4. Multi-device sync does NOT resurrect deleted attempts
    const remotePayload: Partial<BackupPayload> = {
      app: APP_ID,
      schemaVersion: 1,
      students: [student],
      attempts: [a1, a2, a3], // Cloud still has old attempts
      deletedAttemptIds: [a1.id],
    }

    const mergeRes = await mergeFamilyPayload(remotePayload)
    // All 3 attempts were tombstoned in local settings (deletedAttemptIds), so none should be resurrected
    expect(mergeRes.mergedAttempts).toBe(0)
    const finalAttempts = await getStudentAttempts(student.id)
    expect(finalAttempts).toHaveLength(0)
  })

  it('validates Grade 6 full course expansion, Explore units isolation, and Teacher Resources', () => {
    const g6Math = getCourseById('g6-math')
    const g6Science = getCourseById('g6-science')
    const g6Ela = getCourseById('g6-ela')
    const g6Social = getCourseById('g6-social')

    expect(g6Math).toBeDefined()
    expect(g6Science).toBeDefined()
    expect(g6Ela).toBeDefined()
    expect(g6Social).toBeDefined()

    // 1. Validate full unit progressions matching Khan scope
    expect(g6Math!.units.length).toBeGreaterThanOrEqual(12)
    expect(g6Science!.units.length).toBeGreaterThanOrEqual(11)
    expect(g6Ela!.units.length).toBeGreaterThanOrEqual(5)
    expect(g6Social!.units.length).toBeGreaterThanOrEqual(6)

    // 2. Validate Explore units exist across all 4 subjects
    const mathExplore = g6Math!.units.find((u) => u.kind === 'explore')
    const sciExplore = g6Science!.units.find((u) => u.kind === 'explore')
    const elaExplore = g6Ela!.units.find((u) => u.kind === 'explore')
    const socExplore = g6Social!.units.find((u) => u.kind === 'explore')

    expect(mathExplore?.exploreItems?.length).toBeGreaterThanOrEqual(4)
    expect(sciExplore?.exploreItems?.length).toBeGreaterThanOrEqual(4)
    expect(elaExplore?.exploreItems?.length).toBeGreaterThanOrEqual(3)
    expect(socExplore?.exploreItems?.length).toBeGreaterThanOrEqual(4)

    // Verify simulations and experiments are present
    const sciTypes = sciExplore!.exploreItems!.map((i) => i.type)
    expect(sciTypes).toContain('simulation')
    expect(sciTypes).toContain('experiment')

    // 3. Verify Explore and Teacher Resource units are excluded from grading and course progress
    const mockProgress = computeCourseProgress(g6Science!, [], 80)
    // Progress items should only contain core lessons, not explore or teacher units
    for (const item of mockProgress.items) {
      expect(item.unit.kind).not.toBe('explore')
      expect(item.unit.kind).not.toBe('teacher_resources')
    }

    const mockGrade = computeCourseGrade(g6Science!, [], DEFAULT_SETTINGS)
    expect(mockGrade.totalLessons).toBe(mockProgress.totalCount)

    // 4. Validate Teacher Resources exist for parents
    const mathTeacher = g6Math!.units.find((u) => u.kind === 'teacher_resources')
    const sciTeacher = g6Science!.units.find((u) => u.kind === 'teacher_resources')
    expect(mathTeacher?.resources?.length).toBeGreaterThanOrEqual(2)
    expect(sciTeacher?.resources?.length).toBeGreaterThanOrEqual(2)
    expect(mathTeacher?.resources?.some((r) => r.kind === 'pacing_guide')).toBe(true)
  })

  it('validates Grade 4 full course expansion, Explore units isolation, and Teacher Resources', () => {
    const g4Math = getCourseById('g4-math')
    const g4Science = getCourseById('g4-science')
    const g4Ela = getCourseById('g4-ela')
    const g4Social = getCourseById('g4-social')

    expect(g4Math).toBeDefined()
    expect(g4Science).toBeDefined()
    expect(g4Ela).toBeDefined()
    expect(g4Social).toBeDefined()

    // 1. Validate full unit progressions matching Khan/standards scope
    expect(g4Math!.units.length).toBeGreaterThanOrEqual(13)
    expect(g4Science!.units.length).toBeGreaterThanOrEqual(9)
    expect(g4Ela!.units.length).toBeGreaterThanOrEqual(8)
    expect(g4Social!.units.length).toBeGreaterThanOrEqual(9)

    // 2. Validate Explore units exist for all 4 subjects
    const mathExplore = g4Math!.units.find((u) => u.kind === 'explore')
    const sciExplore = g4Science!.units.find((u) => u.kind === 'explore')
    const elaExplore = g4Ela!.units.find((u) => u.kind === 'explore')
    const socExplore = g4Social!.units.find((u) => u.kind === 'explore')

    expect(mathExplore?.exploreItems?.length).toBeGreaterThanOrEqual(4)
    expect(sciExplore?.exploreItems?.length).toBeGreaterThanOrEqual(4)
    expect(elaExplore?.exploreItems?.length).toBeGreaterThanOrEqual(3)
    expect(socExplore?.exploreItems?.length).toBeGreaterThanOrEqual(3)

    // Verify simulations and hands_on labs are present
    const sciTypes = sciExplore!.exploreItems!.map((i) => i.type)
    expect(sciTypes).toContain('simulation')
    expect(sciTypes).toContain('hands_on')

    // 3. Verify Explore and Teacher Resource units are excluded from grading and course progress
    const mockProgress = computeCourseProgress(g4Science!, [], 80)
    for (const item of mockProgress.items) {
      expect(item.unit.kind).not.toBe('explore')
      expect(item.unit.kind).not.toBe('teacher_resources')
    }

    const mockGrade = computeCourseGrade(g4Science!, [], DEFAULT_SETTINGS)
    expect(mockGrade.totalLessons).toBe(mockProgress.totalCount)

    // 4. Validate Teacher Resources exist for parents
    const mathTeacher = g4Math!.units.find((u) => u.kind === 'teacher_resources')
    const sciTeacher = g4Science!.units.find((u) => u.kind === 'teacher_resources')
    expect(mathTeacher?.resources?.length).toBeGreaterThanOrEqual(2)
    expect(sciTeacher?.resources?.length).toBeGreaterThanOrEqual(2)
    expect(mathTeacher?.resources?.some((r) => r.kind === 'pacing_guide')).toBe(true)
  })

  it('validates Grade 5 full course expansion, Explore units isolation, and Teacher Resources', () => {
    const g5Math = getCourseById('g5-math')
    const g5Science = getCourseById('g5-science')
    const g5Ela = getCourseById('g5-ela')
    const g5Social = getCourseById('g5-social')

    expect(g5Math).toBeDefined()
    expect(g5Science).toBeDefined()
    expect(g5Ela).toBeDefined()
    expect(g5Social).toBeDefined()

    // 1. Validate full unit progressions matching Khan/standards scope
    expect(g5Math!.units.length).toBeGreaterThanOrEqual(11)
    expect(g5Science!.units.length).toBeGreaterThanOrEqual(8)
    expect(g5Ela!.units.length).toBeGreaterThanOrEqual(7)
    expect(g5Social!.units.length).toBeGreaterThanOrEqual(8)

    // 2. Validate Explore units exist for all 4 subjects
    const mathExplore = g5Math!.units.find((u) => u.kind === 'explore')
    const sciExplore = g5Science!.units.find((u) => u.kind === 'explore')
    const elaExplore = g5Ela!.units.find((u) => u.kind === 'explore')
    const socExplore = g5Social!.units.find((u) => u.kind === 'explore')

    expect(mathExplore?.exploreItems?.length).toBeGreaterThanOrEqual(4)
    expect(sciExplore?.exploreItems?.length).toBeGreaterThanOrEqual(4)
    expect(elaExplore?.exploreItems?.length).toBeGreaterThanOrEqual(3)
    expect(socExplore?.exploreItems?.length).toBeGreaterThanOrEqual(3)

    // 3. Verify Explore and Teacher Resource units are excluded from grading and course progress
    const mockProgress = computeCourseProgress(g5Science!, [], 80)
    for (const item of mockProgress.items) {
      expect(item.unit.kind).not.toBe('explore')
      expect(item.unit.kind).not.toBe('teacher_resources')
    }

    const mockGrade = computeCourseGrade(g5Science!, [], DEFAULT_SETTINGS)
    expect(mockGrade.totalLessons).toBe(mockProgress.totalCount)

    // 4. Validate Teacher Resources exist for parents
    const mathTeacher = g5Math!.units.find((u) => u.kind === 'teacher_resources')
    const sciTeacher = g5Science!.units.find((u) => u.kind === 'teacher_resources')
    expect(mathTeacher?.resources?.length).toBeGreaterThanOrEqual(2)
    expect(sciTeacher?.resources?.length).toBeGreaterThanOrEqual(2)
    expect(mathTeacher?.resources?.some((r) => r.kind === 'pacing_guide')).toBe(true)
  })
})
