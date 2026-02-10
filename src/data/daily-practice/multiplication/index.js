// src/data/daily-practice/multiplication/index.js
import { generateQuestions, checkAnswer } from './generators'

export const multiplicationConfig = {
  id: 'multiplication',
  name: '乘法速算',
  icon: '⚡',
  color: '#8B5CF6',
  desc: '九九乘法表、平方數、速算技巧'
}

export {
  generateQuestions,
  checkAnswer
}

export default multiplicationConfig
