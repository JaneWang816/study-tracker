import { useParams, Link } from 'react-router-dom'
import { getModule, getTopic } from '../data'

export default function TopicHome() {
  const { subject, module, topic } = useParams()
  
  const moduleData = getModule(subject, module)
  const topicData = getTopic(subject, module, topic)

  if (!moduleData || !topicData) {
    return <div className="container">載入中...</div>
  }

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <h1>
            {topicData.icon} {topicData.name}
          </h1>
          <p className="header-subtitle">{topicData.desc}</p>
        </div>
        <Link to={`/${subject}/${module}`} className="btn btn-back">
          ← 返回
        </Link>
      </header>

      <main className="menu-grid">
        {/* 課程內容 */}
        <Link
          to={`/${subject}/${module}/${topic}/lesson`}
          className="menu-card"
        >
          <div className="card-icon">📖</div>
          <h2>課程重點</h2>
          <p>學習 {topicData.name} 的重要概念</p>
        </Link>

        {/* 開始練習 */}
        <Link
          to={`/${subject}/${module}/${topic}/practice`}
          className="menu-card"
        >
          <div className="card-icon">✏️</div>
          <h2>開始練習</h2>
          <p>透過練習題加強理解</p>
        </Link>
      </main>
    </div>
  )
}
