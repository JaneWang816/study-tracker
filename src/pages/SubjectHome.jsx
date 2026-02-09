import { useParams, Link } from 'react-router-dom'
import { getSubject } from '../data'

export default function SubjectHome() {
  const { subject } = useParams()
  const subjectData = getSubject(subject)

  if (!subjectData) {
    return <div className="container">找不到科目</div>
  }

  const moduleList = Object.values(subjectData.modules)

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <h1>
            {subjectData.icon} {subjectData.name}
          </h1>
          <p className="header-subtitle">選擇學習單元</p>
        </div>
        <Link to="/" className="btn btn-back">
          ← 返回
        </Link>
      </header>

      <main className="menu-grid">
        {moduleList.map((module) => (
          <Link
            key={module.id}
            to={`/${subject}/${module.id}`}
            className="menu-card"
            style={{ '--card-color': module.color }}
          >
            <div className="card-icon">{module.icon}</div>
            <h2>{module.name}</h2>
            <p>{module.desc}</p>
          </Link>
        ))}
      </main>
    </div>
  )
}
