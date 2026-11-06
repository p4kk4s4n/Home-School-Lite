import React from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AppProvider, useApp } from './context/AppContext'
import { CoursePage } from './pages/CoursePage'
import { DashboardPage } from './pages/DashboardPage'
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
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/course/:courseId" element={<CoursePage />} />
        <Route path="/course/:courseId/lesson/:lessonId" element={<LessonPage />} />
        <Route path="/tracker" element={<TrackerPage />} />
        <Route path="/grades" element={<GradesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
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
