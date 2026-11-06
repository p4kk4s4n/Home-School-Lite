# Home-School-Lite | Mastery Academy

An Acellus-inspired, offline-capable homeschooling Progressive Web App (PWA) for **Grade 4** and **Grade 6** across **Mathematics, Science, Language Arts (ELA), and Social Studies**.

- **Target Repository:** `https://github.com/p4kk4s4n/Home-School-Lite`
- **Live GitHub Pages Path:** `https://p4kk4s4n.github.io/Home-School-Lite/`

---

## Key Features

1. **Acellus-Style Sequential Mastery Workflow**
   - Each lesson provides a structured instructional video resource, core concept reading, and standards-tagged principles (`Common Core`, `NGSS`, `C3 Framework`).
   - Students must score at or above the configurable **Mastery Threshold** (default **80%**) to unlock the next lesson in sequence.
2. **Non-Repetitive Randomized Retry Engine**
   - **Mathematics** uses seeded procedural generators (`src/lib/mathGenerators.ts`) that create fresh numbers, worked-out solutions, and error-based distractors on every attempt.
   - **Science, Language Arts & Social Studies** draw from deep per-principle question banks with shuffled choices and fingerprint tracking (`src/lib/quizBuilder.ts`) so retries never repeat previously seen questions until a bank is exhausted.
   - If a student scores below mastery, missed principles are highlighted for review before launching a fresh randomized quiz.
3. **Single Per-Student Grade Level Setting (Grade 4 or Grade 6)**
   - Configured once for the logged-in student (at profile creation or in **Settings** behind the Parent PIN, default `1234`).
   - All four subjects (**Math, Science, Language Arts, Social Studies**) automatically follow that grade setting.
   - Switching between Grade 4 and Grade 6 preserves all prior grade progress and grades in IndexedDB (`home-school-lite`) so switching back restores them.
4. **Progress & Curriculum Scope-and-Sequence Tracker**
   - Tracks overall completion percentage, target completion date pacing (lessons/week), and a filterable **Standards Mastery Checklist**.
5. **Standard 4.0 GPA Grading & Printable Transcript**
   - Uses the standard 90/80/70/60 `+/-` letter grade scale (`A = 4.0`, `A- = 3.7`, `B+ = 3.3`, etc.) weighted by course credits and configurable Lesson vs. Unit Exam weights.
6. **In-App Auto-Update Checker & Reload**
   - Every build emits `dist/version.json` (`{ appId: "home-school-lite", version, buildTime, commit }`).
   - In **Settings → In-App Auto-Update & Version Reload Settings**, you can toggle auto-checking, choose the polling interval (`On Launch`, `15 min`, `60 min`), toggle auto-reload (which safely waits if a quiz is in progress), or manually click **Check for Updates Now** / **Reload & Apply Latest Build**.
7. **Mobile PWA Unique ID & Same-Origin Isolation**
   - Explicitly isolated for `p4kk4s4n.github.io` so it can be installed alongside other GitHub Pages apps on the same mobile device without collision:
     - `manifest.webmanifest` `"id"`: `"/Home-School-Lite/?app=home-school-lite"`
     - `"start_url"`: `"/Home-School-Lite/?source=pwa"`
     - `"scope"`: `"/Home-School-Lite/"`
     - Service Worker registered strictly at `/Home-School-Lite/sw.js` with `scope: "/Home-School-Lite/"`
     - Cache Storage keys strictly prefixed with `hsl-` (cleanup never touches sibling app caches)
     - IndexedDB database named `home-school-lite` and `localStorage` keys prefixed with `hsl:`

---

## Development & Deployment

```bash
npm install
npm test          # Runs Vitest unit & isolation suite
npm run dev       # Starts local dev server at http://localhost:5173/Home-School-Lite/
npm run build     # Builds production bundle + dist/version.json
```

### Enabling GitHub Pages
1. Push this repository to `https://github.com/p4kk4s4n/Home-School-Lite`.
2. In GitHub, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. Every push to `main` (or `master`) automatically runs tests, builds `dist/` with an updated `version.json`, and deploys to `https://p4kk4s4n.github.io/Home-School-Lite/`.
