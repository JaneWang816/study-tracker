import { useParams, Link } from 'react-router-dom'
import { getSubject, getModule } from '../data'

export default function ModuleHome() {
  const { subject, module } = useParams()
  
  const subjectData = getSubject(subject)
  const moduleData = getModule(subject, module)

  if (!subjectData || !moduleData) {
    return <div className="container">載入中...</div>
  }

  const topics = moduleData.topics || []

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <h1>
            {moduleData.icon} {moduleData.name}
          </h1>
          <p className="header-subtitle">{moduleData.desc}</p>
        </div>
        <Link to={`/${subject}`} className="btn btn-back">
          ← 返回
        </Link>
      </header>

      <main className="menu-grid">
        {topics.map((topic) => (
          <Link
            key={topic.id}
            to={`/${subject}/${module}/${topic.id}`}
            className="menu-card"
          >
            <div className="card-icon">{topic.icon}</div>
            <h2>{topic.name}</h2>
            <p>{topic.desc}</p>
          </Link>
        ))}
      </main>
    </div>
  )
}
