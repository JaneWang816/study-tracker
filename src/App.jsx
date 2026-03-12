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

// 每日練習頁面
import DailyArithmetic from './pages/DailyArithmetic'
import DailyArithmeticSession from './pages/DailyArithmeticSession'
import DailyFlashcards from './pages/DailyFlashcards'
import DailyFlashcardsReview from './pages/DailyFlashcardsReview'
import DailyPhonics from './pages/DailyPhonics'
import DailyPhonicsSession from './pages/DailyPhonicsSession'
import DailyMultiplication from './pages/DailyMultiplication'
import DailyVocabulary from './pages/DailyVocabulary'
import DailyVocabularySession from './pages/DailyVocabularySession'
import QuizReview from './pages/QuizReview'
import QuizReviewSession from './pages/QuizReviewSession'
import QuizAdmin from './pages/QuizAdmin'

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
          
          {/* 每日練習 - 四則運算 */}
          <Route path="/daily/arithmetic" element={
            <ProtectedRoute><DailyArithmetic /></ProtectedRoute>
          } />
          
          <Route path="/daily/arithmetic/session" element={
            <ProtectedRoute><DailyArithmeticSession /></ProtectedRoute>
          } />
          
          {/* 每日練習 - 字卡複習 */}
          <Route path="/daily/flashcards" element={
            <ProtectedRoute><DailyFlashcards /></ProtectedRoute>
          } />
          
          <Route path="/daily/flashcards/:deckId/review" element={
            <ProtectedRoute><DailyFlashcardsReview /></ProtectedRoute>
          } />

          {/* 每日練習 - 自然發音 */}
          <Route path="/daily/phonics" element={
            <ProtectedRoute><DailyPhonics /></ProtectedRoute>
          } />
          
          <Route path="/daily/phonics/session" element={
            <ProtectedRoute><DailyPhonicsSession /></ProtectedRoute>
          } />

          {/* 每日練習 - 乘法速算 */}
          <Route path="/daily/multiplication" element={
            <ProtectedRoute><DailyMultiplication /></ProtectedRoute>
          } />

          {/* 每日練習 - 單字練習 */}
          <Route path="/daily/vocabulary" element={
            <ProtectedRoute><DailyVocabulary /></ProtectedRoute>
          } />
          
          <Route path="/daily/vocabulary/:deckId/session" element={
            <ProtectedRoute><DailyVocabularySession /></ProtectedRoute>
          } />

          {/* 每日練習 - 題庫複習 */}
          <Route path="/daily/quiz" element={
            <ProtectedRoute><QuizReview /></ProtectedRoute>
          } />

          <Route path="/daily/quiz/session" element={
            <ProtectedRoute><QuizReviewSession /></ProtectedRoute>
          } />

          {/* 題庫管理 */}
          <Route path="/admin/quiz" element={
            <ProtectedRoute><QuizAdmin /></ProtectedRoute>
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
