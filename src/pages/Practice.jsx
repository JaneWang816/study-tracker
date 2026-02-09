import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getModule, getTopic, getTypes } from '../data'

export default function Practice() {
  const { subject, module, topic } = useParams()
  const navigate = useNavigate()
  
  const moduleData = getModule(subject, module)
  const topicData = getTopic(subject, module, topic)
  const types = getTypes(subject, module)
  const config = moduleData?.config

  const [questionCount, setQuestionCount] = useState(10)
  const [difficulty, setDifficulty] = useState('medium')
  const [selectedType, setSelectedType] = useState(types[0]?.id || '')

  if (!moduleData || !topicData || !config) {
    return <div className="container">載入中...</div>
  }

  const handleStart = () => {
    const params = new URLSearchParams({
      count: questionCount,
      difficulty: difficulty,
      type: selectedType
    })
    navigate(`/${subject}/${module}/${topic}/practice/session?${params}`)
  }

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <h1>{topicData.icon} {topicData.name} - 練習設定</h1>
          <p className="header-subtitle">設定你的練習參數</p>
        </div>
        <Link to={`/${subject}/${module}/${topic}`} className="btn btn-back">
          ← 返回
        </Link>
      </header>

      <div className="practice-settings">
        {/* 題數選擇 */}
        <section className="setting-section">
          <div className="section-header">
            <div className="section-icon">📝</div>
            <div>
              <h2 className="section-title">題數</h2>
              <p className="section-desc">選擇練習的題目數量</p>
            </div>
          </div>
          
          <div className="option-grid">
            {config.questionCounts.map((count) => (
              <button
                key={count}
                className={`option-card ${questionCount === count ? 'active' : ''}`}
                onClick={() => setQuestionCount(count)}
              >
                <div className="option-value">{count}</div>
                <div className="option-label">題</div>
              </button>
            ))}
            <button
              className={`option-card ${questionCount === 30 ? 'active' : ''}`}
              onClick={() => setQuestionCount(30)}
            >
              <div className="option-value">30</div>
              <div className="option-label">題</div>
            </button>
          </div>
        </section>

        {/* 難度選擇 */}
        <section className="setting-section">
          <div className="section-header">
            <div className="section-icon">🎯</div>
            <div>
              <h2 className="section-title">難度</h2>
              <p className="section-desc">選擇適合你的難度等級</p>
            </div>
          </div>
          
          <div className="difficulty-grid">
            {config.difficulties.map((diff) => (
              <button
                key={diff.id}
                className={`difficulty-card ${difficulty === diff.id ? 'active' : ''} difficulty-${diff.id}`}
                onClick={() => setDifficulty(diff.id)}
              >
                <div className="difficulty-name">{diff.name}</div>
                {diff.max && (
                  <div className="difficulty-range">範圍：{diff.max.toLocaleString()}</div>
                )}
                {diff.desc && (
                  <div className="difficulty-desc">{diff.desc}</div>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* 題型/運算選擇 */}
        <section className="setting-section">
          <div className="section-header">
            <div className="section-icon">
              {config.operations ? '➕' : '📖'}
            </div>
            <div>
              <h2 className="section-title">
                {config.operations ? '運算類型' : '題型'}
              </h2>
              <p className="section-desc">
                {config.operations ? '選擇要練習的運算' : '選擇要練習的題型'}
              </p>
            </div>
          </div>
          
          <div className="type-grid">
            {types.map((type) => (
              <button
                key={type.id}
                className={`type-card ${selectedType === type.id ? 'active' : ''}`}
                onClick={() => setSelectedType(type.id)}
              >
                <div className="type-icon">
                  {type.icon || type.symbol}
                </div>
                <div className="type-name">{type.name}</div>
                {type.desc && (
                  <div className="type-desc">{type.desc}</div>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* 開始按鈕 */}
        <div className="start-section">
          <div className="summary-card">
            <div className="summary-item">
              <span className="summary-label">題數</span>
              <span className="summary-value">{questionCount} 題</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">難度</span>
              <span className="summary-value">
                {config.difficulties.find(d => d.id === difficulty)?.name}
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-label">
                {config.operations ? '運算' : '題型'}
              </span>
              <span className="summary-value">
                {types.find(t => t.id === selectedType)?.name}
              </span>
            </div>
          </div>
          
          <button className="btn-start" onClick={handleStart}>
            <span className="btn-icon">🚀</span>
            <span>開始練習</span>
          </button>
        </div>
      </div>

      <style>{`
        .practice-settings {
          max-width: 800px;
          margin: 0 auto;
        }

        .setting-section {
          background: white;
          border-radius: 20px;
          padding: 32px;
          margin-bottom: 24px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .section-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
        }

        .section-icon {
          font-size: 32px;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 16px;
          flex-shrink: 0;
        }

        .section-title {
          font-size: 24px;
          font-weight: 700;
          color: #2D3436;
          margin: 0 0 4px 0;
        }

        .section-desc {
          font-size: 14px;
          color: #636E72;
          margin: 0;
        }

        /* 題數選擇 */
        .option-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 16px;
        }

        .option-card {
          background: #F8F9FA;
          border: 3px solid transparent;
          border-radius: 16px;
          padding: 24px 16px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .option-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }

        .option-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }

        .option-card.active {
          border-color: #667eea;
          box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
        }

        .option-card.active::before {
          opacity: 0.1;
        }

        .option-value {
          font-size: 36px;
          font-weight: 800;
          color: #2D3436;
          position: relative;
          z-index: 1;
        }

        .option-label {
          font-size: 14px;
          color: #636E72;
          margin-top: 4px;
          position: relative;
          z-index: 1;
        }

        /* 難度選擇 */
        .difficulty-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
        }

        .difficulty-card {
          background: #F8F9FA;
          border: 3px solid transparent;
          border-radius: 16px;
          padding: 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .difficulty-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }

        .difficulty-card.active {
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        }

        .difficulty-card.difficulty-easy {
          border-color: #00D2A0;
        }

        .difficulty-card.difficulty-easy.active {
          background: linear-gradient(135deg, #00D2A0 0%, #00B890 100%);
          color: white;
        }

        .difficulty-card.difficulty-medium {
          border-color: #FFA502;
        }

        .difficulty-card.difficulty-medium.active {
          background: linear-gradient(135deg, #FFA502 0%, #FF8C00 100%);
          color: white;
        }

        .difficulty-card.difficulty-hard {
          border-color: #FF6B6B;
        }

        .difficulty-card.difficulty-hard.active {
          background: linear-gradient(135deg, #FF6B6B 0%, #EE5A5A 100%);
          color: white;
        }

        .difficulty-name {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .difficulty-range, .difficulty-desc {
          font-size: 13px;
          opacity: 0.9;
        }

        .difficulty-card.active .difficulty-range,
        .difficulty-card.active .difficulty-desc {
          opacity: 1;
        }

        /* 題型/運算選擇 */
        .type-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 16px;
        }

        .type-card {
          background: #F8F9FA;
          border: 3px solid transparent;
          border-radius: 16px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .type-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }

        .type-card.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-color: #667eea;
          box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
        }

        .type-icon {
          font-size: 32px;
          margin-bottom: 8px;
        }

        .type-name {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .type-desc {
          font-size: 12px;
          opacity: 0.8;
          line-height: 1.4;
        }

        /* 開始區域 */
        .start-section {
          background: white;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .summary-card {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
          margin-bottom: 24px;
          padding: 20px;
          background: #F8F9FA;
          border-radius: 16px;
        }

        .summary-item {
          text-align: center;
        }

        .summary-label {
          display: block;
          font-size: 13px;
          color: #636E72;
          margin-bottom: 8px;
        }

        .summary-value {
          display: block;
          font-size: 20px;
          font-weight: 700;
          color: #2D3436;
        }

        .btn-start {
          width: 100%;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 16px;
          font-size: 20px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
        }

        .btn-start:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(102, 126, 234, 0.5);
        }

        .btn-start:active {
          transform: translateY(0);
        }

        .btn-icon {
          font-size: 24px;
        }

        /* 響應式設計 */
        @media (max-width: 768px) {
          .setting-section {
            padding: 24px 20px;
          }

          .option-grid,
          .difficulty-grid,
          .type-grid {
            grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
          }

          .section-icon {
            width: 48px;
            height: 48px;
            font-size: 24px;
          }

          .section-title {
            font-size: 20px;
          }

          .option-value {
            font-size: 28px;
          }

          .summary-card {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `}</style>
    </div>
  )
}
