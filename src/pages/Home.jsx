// src/pages/Home.jsx
// 首頁 - 顯示每日練習和 15 週課程

import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { weeks } from '../data'
import { supabase } from '../lib/supabase'
import jsPDF from 'jspdf'
import notoSansTCBase64 from '../utils/notoSansTC'

export default function Home() {
  const navigate = useNavigate()
  const { user, signOut } = useAuth()

  const weekList = Object.values(weeks)

  // 匯出今日學習成果
  const exportTodayReport = async () => {
    try {
      // 取得今日日期 (YYYY-MM-DD)
      const today = new Date()
      const year = today.getFullYear()
      const month = String(today.getMonth() + 1).padStart(2, '0')
      const day = String(today.getDate()).padStart(2, '0')
      const todayStr = `${year}-${month}-${day}`

      // 查詢今日所有練習記錄
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

      // 產生 PDF
      const pdf = new jsPDF()
      pdf.addFileToVFS('NotoSansTC.ttf', notoSansTCBase64)
      pdf.addFont('NotoSansTC.ttf', 'NotoSansTC', 'normal')
      pdf.setFont('NotoSansTC')

      // 標題
      pdf.setFontSize(20)
      pdf.text('今日學習成果報告', 105, 20, { align: 'center' })

      pdf.setFontSize(12)
      pdf.text(`日期：${year}/${month}/${day}`, 105, 30, { align: 'center' })
      pdf.text(`學習者：${user.email}`, 105, 38, { align: 'center' })

      // 統計資料
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

      // 詳細記錄
      pdf.setFontSize(14)
      pdf.text('📝 詳細記錄', 20, 108)

      let yPos = 118
      const moduleNames = {
        'arithmetic': '四則運算',
        'phonics': '自然發音',
        'multiplication': '乘法速算',
        'flashcards': '閃卡複習'
      }

      sessions.forEach((session, index) => {
        // 檢查是否需要換頁
        if (yPos > 270) {
          pdf.addPage()
          yPos = 20
        }

        const time = new Date(session.created_at).toLocaleTimeString('zh-TW', { 
          hour: '2-digit', 
          minute: '2-digit' 
        })
        
        const moduleName = moduleNames[session.module] || session.module
        
        pdf.setFontSize(11)
        pdf.setFont('NotoSansTC', 'normal')
        
        // 練習標題
        pdf.text(`${index + 1}. ${moduleName}`, 20, yPos)
        pdf.text(`${time}`, 170, yPos)
        
        yPos += 8
        
        // 練習結果
        pdf.setFontSize(10)
        pdf.text(`   題數：${session.total_questions}   答對：${session.correct_count}   分數：${session.score}`, 25, yPos)
        
        if (session.duration) {
          const min = Math.floor(session.duration / 60)
          const sec = session.duration % 60
          pdf.text(`時間：${min}m ${sec}s`, 150, yPos)
        }
        
        yPos += 10
      })

      // 結語
      if (yPos > 250) {
        pdf.addPage()
        yPos = 20
      }
      
      yPos += 10
      pdf.setFontSize(12)
      pdf.text('🎉 今天辛苦了！繼續保持每日練習的好習慣！', 105, yPos, { align: 'center' })

      // 儲存 PDF
      pdf.save(`學習成果_${todayStr}.pdf`)
      
    } catch (error) {
      console.error('匯出失敗:', error)
      alert('匯出失敗，請稍後再試')
    }
  }

  return (
    <div className="page-container">
      <header className="page-header">
        <div className="header-content">
          <h1>📚 學期課程</h1>
          <p>歡迎回來，{user?.email}</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            className="btn btn-secondary" 
            onClick={exportTodayReport}
            title="匯出今日所有練習記錄"
          >
            📄 今日成果
          </button>
          <button className="btn btn-outline" onClick={signOut}>
            登出
          </button>
        </div>
      </header>

      <main className="main-content">
        {/* 每日練習區塊 */}
        <section style={{ marginBottom: '40px' }}>
          <h2 className="section-title">⚡ 每日基礎練習</h2>
          <p style={{ color: 'var(--text-light)', fontSize: '14px', marginBottom: '16px' }}>
            保持每日練習，鞏固基礎能力
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '16px',
            marginBottom: '20px'
          }}>
            {/* 四則運算 */}
            <div
              onClick={() => navigate('/daily/arithmetic')}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '20px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: 'var(--shadow)',
                borderLeft: '4px solid #FF6B6B',
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
                background: '#FF6B6B',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                flexShrink: 0
              }}>
                🔢
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', marginBottom: '4px', fontWeight: 600 }}>
                  四則運算
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-light)' }}>
                  每日基礎運算練習
                </p>
              </div>
              <div style={{ fontSize: '24px', color: 'var(--text-light)' }}>→</div>
            </div>

            {/* 字卡複習 */}
            <div
              onClick={() => navigate('/daily/flashcards')}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '20px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: 'var(--shadow)',
                borderLeft: '4px solid #F59E0B',
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
                background: '#F59E0B',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                flexShrink: 0
              }}>
                🎴
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', marginBottom: '4px', fontWeight: 600 }}>
                  背字卡
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-light)' }}>
                  間隔複習
                </p>
              </div>
              <div style={{ fontSize: '24px', color: 'var(--text-light)' }}>→</div>
            </div>

            {/* 自然發音 */}
            <div
              onClick={() => navigate('/daily/phonics')}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '20px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: 'var(--shadow)',
                borderLeft: '4px solid #10B981',
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
                background: '#10B981',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                flexShrink: 0
              }}>
                🔤
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', marginBottom: '4px', fontWeight: 600 }}>
                  自然發音
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-light)' }}>
                  聽音選字練習
                </p>
              </div>
              <div style={{ fontSize: '24px', color: 'var(--text-light)' }}>→</div>
            </div>

            {/* 乘法速算 */}
            <div
              onClick={() => navigate('/daily/multiplication')}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '20px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: 'var(--shadow)',
                borderLeft: '4px solid #8B5CF6',
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
                background: '#8B5CF6',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                flexShrink: 0
              }}>
                ⚡
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', marginBottom: '4px', fontWeight: 600 }}>
                  乘法速算
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-light)' }}>
                  20 題挑戰
                </p>
              </div>
              <div style={{ fontSize: '24px', color: 'var(--text-light)' }}>→</div>
            </div>
          </div>
        </section>

        {/* 本週課程區塊 */}
        <h2 className="section-title">📖 本週課程</h2>
        
        <div className="week-grid">
          {weekList.map((week, index) => (
            <div
              key={week.id}
              className="week-card"
              style={{ '--card-color': week.color }}
              onClick={() => navigate(`/${week.id}`)}
            >
              <div className="week-number">{index + 1}</div>
              <div className="week-info">
                <h3>{week.name}</h3>
                <p>{week.desc}</p>
              </div>
              <div className="week-icon">{week.icon}</div>
            </div>
          ))}
          
          {/* 未開放的週次 */}
          {Array.from({ length: 15 - weekList.length }, (_, i) => (
            <div key={`locked-${i}`} className="week-card locked">
              <div className="week-number">{weekList.length + i + 1}</div>
              <div className="week-info">
                <h3>第{weekList.length + i + 1}週</h3>
                <p>即將開放</p>
              </div>
              <div className="week-icon">🔒</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
