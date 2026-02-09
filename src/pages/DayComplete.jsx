// src/pages/DayComplete.jsx
// 完成頁面 - 顯示當天學習總結，可匯出 PDF

import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { getWeek, getDay } from '../data'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import notoSansTCBase64 from '../utils/notoSansTC'

export default function DayComplete() {
  const { weekId, dayId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const { user } = useAuth()
  
  const week = getWeek(weekId)
  const day = getDay(weekId, dayId)
  const dayRecord = location.state?.dayRecord || []
  
  if (!week || !day) {
    return (
      <div className="page-container">
        <div className="error-message">
          <h2>找不到課程</h2>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            返回首頁
          </button>
        </div>
      </div>
    )
  }

  // 計算總體統計
  const totalQuestions = dayRecord.reduce((sum, r) => sum + r.totalQuestions, 0)
  const totalCorrect = dayRecord.reduce((sum, r) => sum + r.correctCount, 0)
  const totalLessonTime = dayRecord.reduce((sum, r) => sum + r.lessonDuration, 0)
  const totalPracticeTime = dayRecord.reduce((sum, r) => sum + r.practiceDuration, 0)
  const totalTime = totalLessonTime + totalPracticeTime
  const overallScore = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0

  // 格式化時間
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${String(secs).padStart(2, '0')}`
  }

  // 儲存記錄到資料庫
  const saveToDatabase = async () => {
    if (!user) return

    try {
      const { error } = await supabase.from('practice_sessions').insert({
        user_id: user.id,
        subject: weekId,
        module: dayId,
        topic: 'daily_complete',
        total_questions: totalQuestions,
        correct_count: totalCorrect,
        score: overallScore,
        duration: totalTime
      })
      
      if (error) throw error
      alert('記錄已儲存！')
    } catch (err) {
      console.error('儲存失敗:', err)
      alert('儲存失敗，請稍後再試')
    }
  }

  // 匯出 PDF
  const exportPDF = () => {
    try {
      const doc = new jsPDF()
      
      // 嵌入中文字體
      doc.addFileToVFS('NotoSansTC.ttf', notoSansTCBase64)
      doc.addFont('NotoSansTC.ttf', 'NotoSansTC', 'normal')
      doc.setFont('NotoSansTC')
      
      const now = new Date()
      const dateStr = now.toLocaleDateString('zh-TW').replace(/\//g, '-')
      const timeStr = now.toLocaleTimeString('zh-TW', { hour12: false }).replace(/:/g, '')
      
      // 標題
      doc.setFontSize(24)
      doc.setTextColor(78, 205, 196)
      doc.text('學習追蹤系統', 105, 20, { align: 'center' })
      doc.setFontSize(14)
      doc.setTextColor(100, 100, 100)
      doc.text('每日學習報告', 105, 30, { align: 'center' })
      
      // 分隔線
      doc.setDrawColor(78, 205, 196)
      doc.setLineWidth(0.5)
      doc.line(20, 38, 190, 38)
      
      // 基本資訊表格
      autoTable(doc, {
        startY: 48,
        head: [['項目', '內容']],
        body: [
          ['日期', now.toLocaleString('zh-TW')],
          ['課程', `${week.name} - ${day.name}`],
          ['主題', day.title],
          ['總題數', `${totalQuestions} 題`],
          ['答對', `${totalCorrect} 題`],
          ['答錯', `${totalQuestions - totalCorrect} 題`],
          ['正確率', `${overallScore}%`],
          ['課程時間', formatTime(totalLessonTime)],
          ['練習時間', formatTime(totalPracticeTime)],
          ['總用時', formatTime(totalTime)],
        ],
        theme: 'grid',
        styles: {
          font: 'NotoSansTC',
          fontStyle: 'normal',
        },
        headStyles: {
          fillColor: [78, 205, 196],
          textColor: 255,
          fontStyle: 'normal',
          font: 'NotoSansTC',
        },
        bodyStyles: {
          textColor: [45, 52, 54],
          font: 'NotoSansTC',
        },
        alternateRowStyles: {
          fillColor: [245, 250, 249],
        },
        columnStyles: {
          0: { cellWidth: 40, fontStyle: 'normal' },
          1: { cellWidth: 'auto' },
        },
        margin: { left: 20, right: 20 },
      })
      
      // 各單元詳情
      let finalY = doc.lastAutoTable.finalY + 15
      doc.setFontSize(14)
      doc.setTextColor(102, 126, 234)
      doc.text('各單元成績', 20, finalY)
      
      const unitData = dayRecord.map((record, index) => {
        const unitScore = Math.round((record.correctCount / record.totalQuestions) * 100)
        return [
          (index + 1).toString(),
          record.unitName,
          `${unitScore}%`,
          `${record.correctCount}/${record.totalQuestions}`,
          formatTime(record.lessonDuration),
          formatTime(record.practiceDuration),
        ]
      })
      
      autoTable(doc, {
        startY: finalY + 5,
        head: [['#', '單元', '正確率', '答對', '課程時間', '練習時間']],
        body: unitData,
        theme: 'grid',
        styles: {
          font: 'NotoSansTC',
          fontStyle: 'normal',
          fontSize: 10,
        },
        headStyles: {
          fillColor: [102, 126, 234],
          textColor: 255,
          fontStyle: 'normal',
          font: 'NotoSansTC',
        },
        bodyStyles: {
          textColor: [45, 52, 54],
          font: 'NotoSansTC',
        },
        alternateRowStyles: {
          fillColor: [245, 245, 255],
        },
        columnStyles: {
          0: { cellWidth: 10, halign: 'center' },
          1: { cellWidth: 'auto' },
          2: { cellWidth: 20, halign: 'center' },
          3: { cellWidth: 20, halign: 'center' },
          4: { cellWidth: 25, halign: 'center' },
          5: { cellWidth: 25, halign: 'center' },
        },
        margin: { left: 20, right: 20 },
      })
      
      // 錯題表格
      const allWrongQuestions = dayRecord.flatMap(record => 
        record.wrongQuestions.map(wq => ({
          unitName: record.unitName,
          ...wq
        }))
      )
      
      if (allWrongQuestions.length > 0) {
        finalY = doc.lastAutoTable.finalY + 15
        doc.setFontSize(14)
        doc.setTextColor(231, 76, 60)
        doc.text('錯題回顧', 20, finalY)
        
        autoTable(doc, {
          startY: finalY + 5,
          head: [['#', '單元', '題目', '正確答案']],
          body: allWrongQuestions.map((item, index) => [
            (index + 1).toString(),
            item.unitName,
            item.question,
            item.correctAnswer,
          ]),
          theme: 'grid',
          styles: {
            font: 'NotoSansTC',
            fontStyle: 'normal',
            fontSize: 10,
          },
          headStyles: {
            fillColor: [231, 76, 60],
            textColor: 255,
            fontStyle: 'normal',
            font: 'NotoSansTC',
          },
          bodyStyles: {
            textColor: [45, 52, 54],
            font: 'NotoSansTC',
          },
          alternateRowStyles: {
            fillColor: [255, 245, 245],
          },
          columnStyles: {
            0: { cellWidth: 10, halign: 'center' },
            1: { cellWidth: 30 },
            2: { cellWidth: 'auto' },
            3: { cellWidth: 35, halign: 'center', textColor: [39, 174, 96] },
          },
          margin: { left: 20, right: 20 },
        })
      }
      
      // 成績評語
      let message = ''
      if (overallScore === 100) message = '🎉 太棒了！全部答對！'
      else if (overallScore >= 80) message = '👍 很好！繼續加油！'
      else if (overallScore >= 60) message = '💪 不錯！多練習會更好！'
      else message = '📚 繼續努力！熟能生巧！'
      
      const msgY = doc.lastAutoTable ? doc.lastAutoTable.finalY + 20 : 200
      doc.setFontSize(16)
      doc.setTextColor(78, 205, 196)
      doc.text(message, 105, msgY, { align: 'center' })
      
      // 頁尾
      const pageHeight = doc.internal.pageSize.height
      doc.setFontSize(10)
      doc.setTextColor(150, 150, 150)
      doc.text('由學習追蹤系統生成', 105, pageHeight - 10, { align: 'center' })
      
      // 檔名
      const fileName = `學習報告-${week.name}-${day.name}-${dateStr}.pdf`
      doc.save(fileName)
    } catch (error) {
      console.error('PDF 匯出失敗：', error)
      alert('PDF 匯出失敗，請稍後再試')
    }
  }

  return (
    <div className="page-container complete-page">
      <header className="page-header">
        <div className="header-content center">
          <h1>🎉 今日學習完成！</h1>
          <p>{week.name} - {day.name}</p>
        </div>
      </header>

      <main className="main-content">
        {/* 總體統計 */}
        <div className="summary-card">
          <div className="big-score">
            <div className="score-circle" data-score={overallScore}>
              <span className="score-value">{overallScore}</span>
              <span className="score-unit">%</span>
            </div>
            <div className="score-label">總正確率</div>
          </div>
          
          <div className="summary-stats">
            <div className="stat">
              <span className="stat-icon">✅</span>
              <span className="stat-value">{totalCorrect} / {totalQuestions}</span>
              <span className="stat-label">答對題數</span>
            </div>
            <div className="stat">
              <span className="stat-icon">📖</span>
              <span className="stat-value">{formatTime(totalLessonTime)}</span>
              <span className="stat-label">課程時間</span>
            </div>
            <div className="stat">
              <span className="stat-icon">✏️</span>
              <span className="stat-value">{formatTime(totalPracticeTime)}</span>
              <span className="stat-label">練習時間</span>
            </div>
            <div className="stat">
              <span className="stat-icon">⏱️</span>
              <span className="stat-value">{formatTime(totalTime)}</span>
              <span className="stat-label">總用時</span>
            </div>
          </div>
        </div>

        {/* 各單元詳情 */}
        <div className="unit-details">
          <h2>📚 各單元成績</h2>
          
          <div className="unit-list">
            {dayRecord.map((record, index) => {
              const unitScore = Math.round((record.correctCount / record.totalQuestions) * 100)
              return (
                <div key={record.unitId} className="unit-result-card">
                  <div className="unit-header">
                    <span className="unit-number">{index + 1}</span>
                    <span className="unit-name">{record.unitName}</span>
                    <span className={`unit-score ${unitScore >= 80 ? 'good' : unitScore >= 60 ? 'ok' : 'poor'}`}>
                      {unitScore}%
                    </span>
                  </div>
                  <div className="unit-stats">
                    <span>答對：{record.correctCount}/{record.totalQuestions}</span>
                    <span>課程：{formatTime(record.lessonDuration)}</span>
                    <span>練習：{formatTime(record.practiceDuration)}</span>
                  </div>
                  {record.wrongQuestions.length > 0 && (
                    <div className="unit-wrong">
                      <span className="wrong-count">❌ {record.wrongQuestions.length} 題答錯</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* 操作按鈕 */}
        <div className="complete-actions">
          <button className="btn btn-primary" onClick={exportPDF}>
            📄 匯出 PDF 報告
          </button>
          <button className="btn btn-secondary" onClick={saveToDatabase}>
            💾 儲存學習記錄
          </button>
          <button className="btn btn-outline" onClick={() => navigate(`/${weekId}`)}>
            ← 返回{week.name}
          </button>
          <button className="btn btn-outline" onClick={() => navigate('/')}>
            🏠 返回首頁
          </button>
        </div>
      </main>
    </div>
  )
}
