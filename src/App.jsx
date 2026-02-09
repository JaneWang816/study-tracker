// src/App.jsx
// 主應用程式 - 路由設定

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

// 頁面
import Login from './pages/Login'
import Home from './pages/Home'
import WeekHome from './pages/WeekHome'
import DayHome from './pages/DayHome'
import LearningSession from './pages/LearningSession'
import DayComplete from './pages/DayComplete'

import './App.css'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* 登入頁 */}
          <Route path="/login" element={<Login />} />
          
          {/* 首頁 - 週次選擇 */}
          <Route path="/" element={
            <ProtectedRoute><Home /></ProtectedRoute>
          } />
          
          {/* 週頁面 - 天數選擇 */}
          <Route path="/:weekId" element={
            <ProtectedRoute><WeekHome /></ProtectedRoute>
          } />
          
          {/* 天頁面 - 單元總覽 */}
          <Route path="/:weekId/:dayId" element={
            <ProtectedRoute><DayHome /></ProtectedRoute>
          } />
          
          {/* 學習流程 - 課程 + 練習 */}
          <Route path="/:weekId/:dayId/learn" element={
            <ProtectedRoute><LearningSession /></ProtectedRoute>
          } />
          
          {/* 完成頁 - 當日總結 */}
          <Route path="/:weekId/:dayId/complete" element={
            <ProtectedRoute><DayComplete /></ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
