// 國語 - 字音辨識 - 模組整合
// src/data/chinese/pronunciation/index.js

import config from './config'
import lessons from './lessons'
import generators from './generators'

export default {
  config,
  
  // 主題列表
  topics: [
    {
      id: 'polyphonic',
      name: '多音字',
      icon: '🔊',
      desc: '同一個字有多種讀音',
      generators: generators.polyphonic.generators,
      checkAnswer: generators.polyphonic.checkAnswer,
      lessons: lessons.polyphonic
    },
    {
      id: 'similar-shape',
      name: '形似字',
      icon: '👀',
      desc: '字形相似但讀音不同',
      generators: generators['similar-shape'].generators,
      checkAnswer: generators['similar-shape'].checkAnswer,
      lessons: lessons['similar-shape']
    },
    {
      id: 'common-errors',
      name: '易錯字',
      icon: '⚠️',
      desc: '容易讀錯或寫錯的字',
      generators: generators['common-errors'].generators,
      checkAnswer: generators['common-errors'].checkAnswer,
      lessons: lessons['common-errors']
    }
  ],
  
  // 統一的驗證函數
  checkAnswer: (question, userAnswer) => {
    const category = question.category
    return generators[category]?.checkAnswer(question, userAnswer)
  }
}
