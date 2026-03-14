import { useNavigate } from 'react-router-dom'

const BREAKDOWN = [
  { subject: 'social',   types: ['review'],                       count: 4, label: '社會',    icon: '🌏' },
  { subject: 'science',  types: ['review'],                       count: 4, label: '自然',    icon: '🔬' },
  { subject: 'chinese',  types: ['pronunciation', 'orthography'], count: 4, label: '字音字形', icon: '📝' },
  { subject: 'chinese',  types: ['meaning'],                      count: 4, label: '詞義',    icon: '💬' },
  { subject: 'chinese',  types: ['idiom'],                        count: 4, label: '成語',    icon: '📖' },
  { subject: 'chinese',  types: ['culture'],                      count: 5, label: '國學常識', icon: '📜' },
]

export default function QuizReview() {
  const navigate = useNavigate()

  return (
    <div className="page-container">
      <div className="page-header">
        <button onClick={() => navigate('/')} className="btn-back">← 返回首頁</button>
        <h1><span className="icon">🧠</span> 題庫複習</h1>
        <p className="page-desc">從已學內容隨機出題，固定 25 題</p>
      </div>

      <div className="practice-setup">
        <div className="setup-section">
          <h3>今日題型</h3>
          <div className="breakdown-list">
            {BREAKDOWN.map((item, i) => (
              <div key={i} className="breakdown-item">
                <span className="breakdown-icon">{item.icon}</span>
                <span className="breakdown-label">{item.label}</span>
                <span className="breakdown-count">{item.count} 題</span>
              </div>
            ))}
            <div className="breakdown-item breakdown-total">
              <span className="breakdown-icon">　</span>
              <span className="breakdown-label">合計</span>
              <span className="breakdown-count">25 題</span>
            </div>
          </div>
        </div>

        <button className="btn-start" onClick={() => navigate('/daily/quiz/session')}>
          開始複習
        </button>
      </div>
    </div>
  )
}
