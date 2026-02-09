// src/data/social/taiwanbasic/index.js
import config from './config'
import lessons from './lessons'

const taiwanbasic = {
  config,
  
  // 手動建立 topics，並連結正確的 lessons
  topics: [
    {
      id: 'basicdata',
      name: '基本資料',
      icon: '📑',
      desc: '臺灣地理的基本資料',
      generators: {},
      lessons: lessons.basicdata  // ← 關鍵：連結到實際的課程內容
    },
    { id: 'latitude', 
      name: '經緯度', 
      icon: '🗺️',
      desc: '認識經線和緯線',
      generators: {},
      lessons: lessons.latitude 
    },    
  ],
  
  checkAnswer: (question, userAnswer) => {
    // 根據題目類型驗證答案
    if (typeof userAnswer === 'string' && typeof question.answer === 'string') {
      return userAnswer.trim().toLowerCase() === question.answer.trim().toLowerCase()
    }
    return userAnswer === question.answer
  }
}

export default taiwanbasic
