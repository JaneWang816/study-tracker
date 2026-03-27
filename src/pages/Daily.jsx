// src/pages/Daily.jsx
// 每日練習首頁 - 路由：/daily

import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import jsPDF from 'jspdf'
import notoSansTCBase64 from '../utils/notoSansTC'

export default function Daily() {
  const navigate = useNavigate()
  const { user } = useAuth()

  const exportTodayReport = async () => {
    try {
      const today = new Date()
      const year = today.getFullYear()
      const month = String(today.getMonth() + 1).padStart(2, '0')
      const day = String(today.getDate()).padStart(2, '0')
      const todayStr = `${year}-${month}-${day}`

      const { data: sessions, error } = await supabase
        .from('practice_sessions')
        .select('*')
        .eq('user_id', user.id)
        .gte('created_at', `${todayStr}T00:00:00`)
        .lte('created_at', `${todayStr}T23:59:59`)
        .order('created_at', { ascending: true })

      if (error) throw error

      if (!sessions || sessions.length === 0) {
        alert('今天還沒有任何練習記錄喔！')
        return
      }

      const pdf = new jsPDF()
      pdf.addFileToVFS('NotoSansTC.ttf', notoSansTCBase64)
      pdf.addFont('NotoSansTC.ttf', 'NotoSansTC', 'normal')
      pdf.setFont('NotoSansTC')

      pdf.setFontSize(20)
      pdf.text('今日學習成果報告', 105, 20, { align: 'center' })
      pdf.setFontSize(12)
      pdf.text(`日期：${year}/${month}/${day}`, 105, 30, { align: 'center' })
      pdf.text(`學習者：${user.email}`, 105, 38, { align: 'center' })

      const totalQuestions = sessions.reduce((sum, s) => sum + s.total_questions, 0)
      const totalCorrect = sessions.reduce((sum, s) => sum + s.correct_count, 0)
      const avgScore = Math.round(sessions.reduce((sum, s) => sum + s.score, 0) / sessions.length)
      const totalDuration = sessions.reduce((sum, s) => sum + (s.duration || 0), 0)

      pdf.setFontSize(14)
      pdf.text('📊 今日統計', 20, 50)
      pdf.setFontSize(11)
      pdf.text(`練習次數：${sessions.length} 次`, 30, 60)
      pdf.text(`總題數：${totalQuestions} 題`, 30, 68)
      pdf.text(`答對：${totalCorrect} 題`, 30, 76)
      pdf.text(`平均分數：${avgScore} 分`, 30, 84)
      pdf.text(`總時間：${Math.floor(totalDuration / 60)} 分 ${totalDuration % 60} 秒`, 30, 92)

      pdf.setFontSize(14)
      pdf.text('📝 詳細記錄', 20, 108)

      let yPos = 118
      const moduleNames = {
        'arithmetic':        '四則運算',
        'phonics':           '自然發音',
        'multiplication':    '乘法速算',
        'flashcards':        '字卡複習',
        'vocabulary':        '單字練習',
        'quiz:social_20':   '題庫複習｜社會',
        'quiz:science_20':  '題庫複習｜自然',
        'quiz:phonics_20':  '題庫複習｜字音字形',
        'quiz:culture_20':  '題庫複習｜國學常識',
        'quiz':              '題庫複習',   // 舊資料 fallback
      }

      sessions.forEach((session, index) => {
        if (yPos > 270) { pdf.addPage(); yPos = 20 }

        const time = new Date(session.created_at).toLocaleTimeString('zh-TW', { 
          hour: '2-digit', minute: '2-digit' 
        })
        const moduleKey = session.module === 'quiz' && session.topic
          ? `quiz:${session.topic}`
          : session.module
        const moduleName = moduleNames[moduleKey] || session.module

        pdf.setFontSize(11)
        pdf.setFont('NotoSansTC', 'normal')
        pdf.text(`${index + 1}. ${moduleName}`, 20, yPos)
        pdf.text(`${time}`, 170, yPos)
        yPos += 8

        pdf.setFontSize(10)
        pdf.text(`   題數：${session.total_questions}   答對：${session.correct_count}   分數：${session.score}`, 25, yPos)
        if (session.duration) {
          const min = Math.floor(session.duration / 60)
          const sec = session.duration % 60
          pdf.text(`時間：${min}m ${sec}s`, 150, yPos)
        }
        yPos += 10
      })

      if (yPos > 250) { pdf.addPage(); yPos = 20 }
      yPos += 10
      pdf.setFontSize(12)
      pdf.text('🎉 今天辛苦了！繼續保持每日練習的好習慣！', 105, yPos, { align: 'center' })

      pdf.save(`學習成果_${todayStr}.pdf`)
    } catch (error) {
      console.error('匯出失敗:', error)
      alert('匯出失敗，請稍後再試')
    }
  }

  const modules = [
    { id: 'arithmetic',     label: '四則運算', desc: '每日基礎運算練習', icon: '🔢', color: '#FF6B6B', path: '/daily/arithmetic' },
    { id: 'flashcards',     label: '背字卡',   desc: '間隔複習',         icon: '🎴', color: '#F59E0B', path: '/daily/flashcards' },
    { id: 'phonics',        label: '自然發音', desc: '聽音選字練習',     icon: '🔤', color: '#10B981', path: '/daily/phonics' },
    { id: 'multiplication', label: '乘法速算', desc: '25 題挑戰',        icon: '⚡', color: '#8B5CF6', path: '/daily/multiplication' },
    { id: 'vocabulary',     label: '單字練習', desc: '週次單字測驗',     icon: '📝', color: '#0EA5E9', path: '/daily/vocabulary' },
    { id: 'quiz',           label: '題庫複習', desc: '綜合題型練習',     icon: '🧠', color: '#EC4899', path: '/daily/quiz' },
  ]

  return (
    <div className="page-container">
      <header className="page-header">
        <button className="btn-back" onClick={() => navigate('/')}>
          ← 返回
        </button>
        <div className="header-content">
          <h1>⚡ 每日練習</h1>
          <p>保持每日練習，鞏固基礎能力</p>
        </div>
        <button 
          className="btn btn-secondary" 
          onClick={exportTodayReport}
          title="匯出今日所有練習記錄"
        >
          📄 今日成果
        </button>
      </header>

      <main className="main-content">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '16px',
        }}>
          {modules.map(mod => (
            <div
              key={mod.id}
              onClick={() => navigate(mod.path)}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '20px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: 'var(--shadow)',
                borderLeft: `4px solid ${mod.color}`,
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'var(--shadow)'
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                background: mod.color,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                flexShrink: 0
              }}>
                {mod.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', marginBottom: '4px', fontWeight: 600 }}>
                  {mod.label}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-light)' }}>
                  {mod.desc}
                </p>
              </div>
              <div style={{ fontSize: '24px', color: 'var(--text-light)' }}>→</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
