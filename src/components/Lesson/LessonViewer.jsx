// src/components/Lesson/LessonViewer.jsx
import { useState } from 'react'

export default function LessonViewer({ lessons }) {
  if (!lessons || !lessons.sections) {
    return (
      <div className="lesson-error">
        <p>找不到課程內容</p>
      </div>
    )
  }

  return (
    <div className="lesson-content">
      {/* 課程標題 */}
      {lessons.title && (
        <h2 className="lesson-title">{lessons.title}</h2>
      )}

      {/* 章節內容 */}
      {lessons.sections.map((section, index) => (
        <div key={index} className="lesson-section">
          <h3 className="section-title">
            📚 {section.title}
          </h3>
          <div className="section-content">
            {section.content.split('\n').map((line, i) => (
              line.trim() && <p key={i}>{line.trim()}</p>
            ))}
          </div>
        </div>
      ))}

      {/* 例題（如果有的話） */}
      {lessons.examples && lessons.examples.length > 0 && (
        <div className="lesson-examples">
          <h3 className="examples-title">📝 例題練習</h3>
          {lessons.examples.map((example, index) => (
            <div key={index} className="example-item">
              <div className="example-question">
                <strong>例題 {index + 1}：</strong>
                {example.question}
              </div>
              <div className="example-answer">
                <strong>解答：</strong>
                {example.answer}
              </div>
              {example.explanation && (
                <div className="example-explanation">
                  <strong>說明：</strong>
                  {example.explanation}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
