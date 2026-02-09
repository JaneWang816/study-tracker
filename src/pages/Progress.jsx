import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../contexts/AuthContext'
import { getSubject, getModule, getTopic } from '../data'

export default function Progress() {
  const { user } = useAuth()
  const [sessions, setSessions] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all') // all, math, chinese

  useEffect(() => {
    if (user) {
      loadSessions()
    }
  }, [user])

  async function loadSessions() {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('practice_sessions')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(50)

      if (error) throw error
      setSessions(data || [])
    } catch (error) {
      console.error('載入記錄失敗：', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredSessions = sessions.filter(session => {
    if (filter === 'all') return true
    return session.subject === filter
  })

  const stats = {
    total: sessions.length,
    math: sessions.filter(s => s.subject === 'math').length,
    chinese: sessions.filter(s => s.subject === 'chinese').length,
    avgScore: sessions.length > 0
      ? Math.round(sessions.reduce((sum, s) => sum + s.score, 0) / sessions.length)
      : 0
  }

  function formatDate(dateString) {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now - date)
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) {
      const diffHours = Math.floor(diffTime / (1000 * 60 * 60))
      if (diffHours === 0) {
        const diffMinutes = Math.floor(diffTime / (1000 * 60))
        return `${diffMinutes} 分鐘前`
      }
      return `${diffHours} 小時前`
    } else if (diffDays === 1) {
      return '昨天'
    } else if (diffDays < 7) {
      return `${diffDays} 天前`
    } else {
      return date.toLocaleDateString('zh-TW')
    }
  }

  function getSessionInfo(session) {
    const subjectData = getSubject(session.subject)
    const moduleData = getModule(session.subject, session.module)
    const topicData = getTopic(session.subject, session.module, session.topic)

    return {
      subjectName: subjectData?.name || session.subject,
      subjectIcon: subjectData?.icon || '📚',
      moduleName: moduleData?.name || session.module,
      topicName: topicData?.name || session.topic
    }
  }

  if (loading) {
    return (
      <div className="container">
        <div className="loading">載入中...</div>
      </div>
    )
  }

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <h1>📊 學習記錄</h1>
          <p className="header-subtitle">追蹤你的學習進度</p>
        </div>
        <Link to="/" className="btn btn-back">
          ← 返回首頁
        </Link>
      </header>

      {/* 統計卡片 */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📝</div>
          <div className="stat-content">
            <div className="stat-value">{stats.total}</div>
            <div className="stat-label">總練習次數</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-content">
            <div className="stat-value">{stats.avgScore}%</div>
            <div className="stat-label">平均正確率</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🔢</div>
          <div className="stat-content">
            <div className="stat-value">{stats.math}</div>
            <div className="stat-label">數學練習</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📖</div>
          <div className="stat-content">
            <div className="stat-value">{stats.chinese}</div>
            <div className="stat-label">國語練習</div>
          </div>
        </div>
      </div>

      {/* 篩選按鈕 */}
      <div className="filter-tabs">
        <button
          className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          全部 ({sessions.length})
        </button>
        <button
          className={`filter-tab ${filter === 'math' ? 'active' : ''}`}
          onClick={() => setFilter('math')}
        >
          🔢 數學 ({stats.math})
        </button>
        <button
          className={`filter-tab ${filter === 'chinese' ? 'active' : ''}`}
          onClick={() => setFilter('chinese')}
        >
          📖 國語 ({stats.chinese})
        </button>
      </div>

      {/* 記錄列表 */}
      <div className="sessions-list">
        {filteredSessions.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📝</div>
            <p>還沒有練習記錄</p>
            <Link to="/" className="btn btn-primary">
              開始練習
            </Link>
          </div>
        ) : (
          filteredSessions.map((session) => {
            const info = getSessionInfo(session)
            const scoreColor = 
              session.score >= 80 ? '#00D2A0' :
              session.score >= 60 ? '#FFA502' : '#FF6B6B'

            return (
              <div key={session.id} className="session-card">
                <div className="session-header">
                  <div className="session-subject">
                    <span className="subject-icon">{info.subjectIcon}</span>
                    <span className="subject-name">{info.subjectName}</span>
                  </div>
                  <div className="session-time">{formatDate(session.created_at)}</div>
                </div>

                <div className="session-body">
                  <div className="session-info">
                    <div className="session-path">
                      {info.moduleName} → {info.topicName}
                    </div>
                    <div className="session-details">
                      <span>📝 {session.total_questions} 題</span>
                      <span>✓ {session.correct_count} 正確</span>
                      {session.duration && (
                        <span>⏱️ {Math.floor(session.duration / 60)} 分鐘</span>
                      )}
                    </div>
                  </div>

                  <div className="session-score" style={{ '--score-color': scoreColor }}>
                    <div className="score-circle">
                      <div className="score-value">{session.score}%</div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>

      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .stat-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }

        .stat-icon {
          font-size: 32px;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
        }

        .stat-content {
          flex: 1;
        }

        .stat-value {
          font-size: 32px;
          font-weight: bold;
          color: #2D3436;
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 14px;
          color: #636E72;
        }

        .filter-tabs {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
          padding: 8px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }

        .filter-tab {
          flex: 1;
          padding: 12px 24px;
          border: none;
          background: transparent;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          color: #636E72;
          cursor: pointer;
          transition: all 0.2s;
        }

        .filter-tab:hover {
          background: #F8F9FA;
        }

        .filter-tab.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .sessions-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .session-card {
          background: white;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: all 0.2s;
        }

        .session-card:hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.12);
          transform: translateY(-2px);
        }

        .session-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .session-subject {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .subject-icon {
          font-size: 24px;
        }

        .subject-name {
          font-size: 18px;
          font-weight: 600;
          color: #2D3436;
        }

        .session-time {
          font-size: 14px;
          color: #636E72;
        }

        .session-body {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .session-info {
          flex: 1;
        }

        .session-path {
          font-size: 16px;
          font-weight: 600;
          color: #2D3436;
          margin-bottom: 8px;
        }

        .session-details {
          display: flex;
          gap: 16px;
          font-size: 14px;
          color: #636E72;
        }

        .session-score {
          flex-shrink: 0;
        }

        .score-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: var(--score-color);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .score-value {
          font-size: 24px;
          font-weight: bold;
          color: white;
        }

        .empty-state {
          text-align: center;
          padding: 80px 20px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }

        .empty-icon {
          font-size: 64px;
          margin-bottom: 16px;
        }

        .empty-state p {
          font-size: 18px;
          color: #636E72;
          margin-bottom: 24px;
        }
      `}</style>
    </div>
  )
}
