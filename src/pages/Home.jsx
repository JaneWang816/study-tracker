// src/pages/Home.jsx
// 首頁 - 顯示每日練習和 15 週課程

import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { weeks } from '../data'
import { supabase } from '../lib/supabase'
import jsPDF from 'jspdf'
import notoSansTCBase64 from '../utils/notoSansTC'

// 取得台灣時間的日期字串 YYYY-MM-DD
const getTaiwanDateString = () => {
  const now = new Date()
  const taiwanOffset = 8 * 60
  const localOffset = now.getTimezoneOffset()
  const taiwanTime = new Date(now.getTime() + (taiwanOffset + localOffset) * 60 * 1000)
  const year = taiwanTime.getFullYear()
  const month = String(taiwanTime.getMonth() + 1).padStart(2, '0')
  const day = String(taiwanTime.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export default function Home() {
  const navigate = useNavigate()
  const { user, signOut } = useAuth()

  const weekList = Object.values(weeks)

  // 匯出今日學習成果（依練習項目分組）
  const exportTodayReport = async () => {
    try {
      // 取得今日日期 (台灣時間)
      const todayStr = getTaiwanDateString()
      const [year, month, day] = todayStr.split('-')

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

      // 模組名稱與顏色配置
      const moduleConfig = {
        'arithmetic': { name: '四則運算', icon: '🔢', color: [255, 107, 107] },
        'flashcards': { name: '字卡複習', icon: '🎴', color: [245, 158, 11] },
        'phonics': { name: '自然發音', icon: '🔤', color: [16, 185, 129] },
        'multiplication': { name: '乘法速算', icon: '⚡', color: [139, 92, 246] }
      }

      // 依模組分組
      const groupedSessions = {}
      sessions.forEach(session => {
        const module = session.module
        if (!groupedSessions[module]) {
          groupedSessions[module] = []
        }
        groupedSessions[module].push(session)
      })

      // 產生 PDF
      const pdf = new jsPDF()
      pdf.addFileToVFS('NotoSansTC.ttf', notoSansTCBase64)
      pdf.addFont('NotoSansTC.ttf', 'NotoSansTC', 'normal')
      pdf.setFont('NotoSansTC')

      // 標題
      pdf.setFontSize(22)
      pdf.setTextColor(50, 50, 50)
      pdf.text('今日學習成果報告', 105, 22, { align: 'center' })

      pdf.setFontSize(11)
      pdf.setTextColor(120, 120, 120)
      pdf.text(`日期：${year}/${month}/${day}`, 105, 32, { align: 'center' })
      pdf.text(`學習者：${user.email}`, 105, 40, { align: 'center' })

      // 分隔線
      pdf.setDrawColor(200, 200, 200)
      pdf.setLineWidth(0.5)
      pdf.line(20, 46, 190, 46)

      // 今日統計摘要
      const totalQuestions = sessions.reduce((sum, s) => sum + s.total_questions, 0)
      const totalCorrect = sessions.reduce((sum, s) => sum + s.correct_count, 0)
      const avgScore = Math.round(sessions.reduce((sum, s) => sum + s.score, 0) / sessions.length)
      const totalDuration = sessions.reduce((sum, s) => sum + (s.duration || 0), 0)

      pdf.setFontSize(14)
      pdf.setTextColor(50, 50, 50)
      pdf.text('📊 今日統計', 20, 56)

      // 統計卡片區域 - 5 個卡片橫排
      const statsY = 64
      const cardWidth = 32
      const cardGap = 4
      const startX = 20
      const totalMin = Math.floor(totalDuration / 60)
      const totalSec = totalDuration % 60

      // 繪製統計卡片（包含總時間）
      const statsData = [
        { label: '練習次數', value: `${sessions.length} 次`, color: [102, 126, 234] },
        { label: '總題數', value: `${totalQuestions} 題`, color: [16, 185, 129] },
        { label: '答對', value: `${totalCorrect} 題`, color: [34, 197, 94] },
        { label: '平均分數', value: `${avgScore} 分`, color: [245, 158, 11] },
        { label: '總時間', value: `${totalMin}m ${totalSec}s`, color: [139, 92, 246] }
      ]

      statsData.forEach((stat, index) => {
        const x = startX + (cardWidth + cardGap) * index
        
        // 卡片背景
        pdf.setFillColor(248, 249, 250)
        pdf.roundedRect(x, statsY, cardWidth, 22, 3, 3, 'F')
        
        // 數值
        pdf.setFontSize(12)
        pdf.setTextColor(...stat.color)
        pdf.text(stat.value, x + cardWidth / 2, statsY + 10, { align: 'center' })
        
        // 標籤
        pdf.setFontSize(8)
        pdf.setTextColor(120, 120, 120)
        pdf.text(stat.label, x + cardWidth / 2, statsY + 18, { align: 'center' })
      })

      // 分隔線
      pdf.setDrawColor(220, 220, 220)
      pdf.line(20, 92, 190, 92)

      // 分組詳細記錄
      pdf.setFontSize(14)
      pdf.setTextColor(50, 50, 50)
      pdf.text('📝 分項練習記錄', 20, 102)

      let yPos = 112

      // 遍歷每個模組分組
      const moduleOrder = ['arithmetic', 'flashcards', 'phonics', 'multiplication']
      
      moduleOrder.forEach(moduleKey => {
        const moduleSessions = groupedSessions[moduleKey]
        if (!moduleSessions || moduleSessions.length === 0) return

        const config = moduleConfig[moduleKey] || { name: moduleKey, icon: '📚', color: [100, 100, 100] }

        // 檢查是否需要換頁
        if (yPos > 250) {
          pdf.addPage()
          yPos = 20
        }

        // 模組標題區塊
        pdf.setFillColor(...config.color)
        pdf.roundedRect(20, yPos, 170, 10, 2, 2, 'F')
        
        pdf.setFontSize(11)
        pdf.setTextColor(255, 255, 255)
        
        // 計算該模組的統計
        const moduleTotal = moduleSessions.reduce((sum, s) => sum + s.total_questions, 0)
        const moduleCorrect = moduleSessions.reduce((sum, s) => sum + s.correct_count, 0)
        const moduleAvg = Math.round(moduleSessions.reduce((sum, s) => sum + s.score, 0) / moduleSessions.length)
        
        pdf.text(`${config.icon} ${config.name}`, 25, yPos + 7)
        pdf.text(`共 ${moduleSessions.length} 次 | ${moduleTotal} 題 | 平均 ${moduleAvg} 分`, 190, yPos + 7, { align: 'right' })
        
        yPos += 14

        // 該模組的各次練習記錄
        moduleSessions.forEach((session, index) => {
          // 檢查是否需要換頁
          if (yPos > 275) {
            pdf.addPage()
            yPos = 20
          }

          const time = new Date(session.created_at).toLocaleTimeString('zh-TW', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false
          })

          // 練習記錄行
          pdf.setFontSize(10)
          pdf.setTextColor(80, 80, 80)
          
          // 序號與時間
          pdf.text(`  ${index + 1}.`, 22, yPos)
          pdf.text(`${time}`, 32, yPos)
          
          // 題數與正確數
          pdf.text(`${session.total_questions} 題`, 60, yPos)
          
          // 正確率顏色
          if (session.score >= 80) {
            pdf.setTextColor(34, 197, 94) // 綠色
          } else if (session.score >= 60) {
            pdf.setTextColor(245, 158, 11) // 橙色
          } else {
            pdf.setTextColor(239, 68, 68) // 紅色
          }
          pdf.text(`${session.correct_count} 對`, 85, yPos)
          pdf.text(`${session.score} 分`, 115, yPos)
          
          // 時間
          pdf.setTextColor(150, 150, 150)
          if (session.duration && session.duration > 0) {
            const min = Math.floor(session.duration / 60)
            const sec = session.duration % 60
            pdf.text(`${min}m ${sec}s`, 145, yPos)
          } else {
            pdf.text('-', 145, yPos)
          }

          yPos += 7
        })

        yPos += 6 // 模組之間的間距
      })

      // 結語
      if (yPos > 260) {
        pdf.addPage()
        yPos = 20
      }

      yPos += 8
      pdf.setDrawColor(200, 200, 200)
      pdf.line(20, yPos, 190, yPos)
      
      yPos += 12
      pdf.setFontSize(12)
      pdf.setTextColor(102, 126, 234)
      pdf.text('🎉 今天辛苦了！繼續保持每日練習的好習慣！', 105, yPos, { align: 'center' })

      // 頁尾
      const pageCount = pdf.internal.getNumberOfPages()
      for (let i = 1; i <= pageCount; i++) {
        pdf.setPage(i)
        pdf.setFontSize(8)
        pdf.setTextColor(180, 180, 180)
        pdf.text(`第 ${i} / ${pageCount} 頁`, 105, 290, { align: 'center' })
      }

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
                  字卡複習
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
