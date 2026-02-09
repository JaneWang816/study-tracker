// 數學 - 四則運算 - 模組整合
// src/data/math/arithmetic/index.js

import config from './config'
import lessons from './lessons'
import generators from './generators'

export default {
  config,
  
  // 主題列表
  topics: [
    {
      id: 'integer',
      name: '整數運算',
      icon: '🔢',
      desc: '整數的加減乘除',
      generators: generators.integer.generators,
      checkAnswer: generators.integer.checkAnswer,
      lessons: lessons.integer
    },
    {
      id: 'decimal',
      name: '小數運算',
      icon: '🔣',
      desc: '小數的加減乘除',
      generators: generators.decimal.generators,
      checkAnswer: generators.decimal.checkAnswer,
      lessons: lessons.decimal
    },
    {
      id: 'fraction',
      name: '分數運算',
      icon: '⅓',
      desc: '分數的加減乘除',
      generators: generators.fraction.generators,
      checkAnswer: generators.fraction.checkAnswer,
      lessons: lessons.fraction
    }
  ],
  
  // 統一的驗證函數
  checkAnswer: (question, userAnswer) => {
    const topic = question.type  // integer, decimal, fraction
    return generators[topic]?.checkAnswer(question, userAnswer)
  }
}
