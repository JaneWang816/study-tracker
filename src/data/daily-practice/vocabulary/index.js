// src/data/daily-practice/vocabulary/index.js
import { generateQuestions, checkAnswer } from './generators'

export const vocabularyConfig = {
  id: 'vocabulary',
  name: '單字練習',
  icon: '📝',
  color: '#06B6D4',
  desc: '看中文選外文、看外文選中文、克漏字'
}

export {
  generateQuestions,
  checkAnswer
}

export default vocabularyConfig
