import { useParams, Link } from 'react-router-dom'
import { getSubject, getModule, getTopic, getLesson } from '../data'
import LessonViewer from '../components/Lesson/LessonViewer'

export default function Lesson() {
  const { subject, module, topic } = useParams()
  
  const subjectData = getSubject(subject)
  const moduleData = getModule(subject, module)
  const topicData = getTopic(subject, module, topic)
  const lessonData = getLesson(subject, module, topic)

  if (!subjectData || !moduleData || !topicData || !lessonData) {
    return (
      <div className="container">
        <div className="error-message">找不到課程內容</div>
        <Link to={`/${subject}/${module}/${topic}`} className="btn btn-primary">
          返回
        </Link>
      </div>
    )
  }

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <h1>
            📖 {topicData.name} - 課程重點
          </h1>
        </div>
        <Link to={`/${subject}/${module}/${topic}`} className="btn btn-back">
          ← 返回
        </Link>
      </header>

      <main className="lesson-container">
        <LessonViewer lessons={lessonData} />
      </main>

      <footer className="lesson-footer">
        <Link 
          to={`/${subject}/${module}/${topic}/practice`} 
          className="btn btn-primary btn-large"
        >
          開始練習 →
        </Link>
      </footer>
    </div>
  )
}
