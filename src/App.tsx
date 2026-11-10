import React from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Layout } from './components/Layout'
import { AppProvider, useApp } from './context/AppContext'
import { CoursePage } from './pages/CoursePage'
import { DashboardPage } from './pages/DashboardPage'
import { FamilyPage } from './pages/FamilyPage'
import { GradesPage } from './pages/GradesPage'
import { LessonPage } from './pages/LessonPage'
import { SettingsPage } from './pages/SettingsPage'
import { TrackerPage } from './pages/TrackerPage'

const AppRoutes: React.FC = () => {
  const { loading } = useApp()

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner" />
        <p>Loading Home-School-Lite Mastery Academy...</p>
      </div>
    )
  }

  return (
    <ErrorBoundary fallbackTitle="Application View Error">
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route
            path="/course/:courseId"
            element={
              <ErrorBoundary fallbackTitle="Course Map Error">
                <CoursePage />
              </ErrorBoundary>
            }
          />
          <Route
            path="/course/:courseId/lesson/:lessonId"
            element={
              <ErrorBoundary fallbackTitle="Lesson View Error">
                <LessonPage />
              </ErrorBoundary>
            }
          />
          <Route path="/tracker" element={<TrackerPage />} />
          <Route path="/grades" element={<GradesPage />} />
          <Route path="/family" element={<FamilyPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </ErrorBoundary>
  )
}

export const App: React.FC = () => {
  return (
    <HashRouter>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </HashRouter>
  )
}

export default App
