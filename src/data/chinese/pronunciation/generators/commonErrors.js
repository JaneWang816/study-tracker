// 國語 - 字音辨識 - 易錯字生成器
// src/data/chinese/pronunciation/generators/commonErrors.js

import questionBanks from '../questionBanks'

/**
 * TODO: 實作易錯字生成器
 * 參考 polyphonic.js 的結構
 */
export const generators = {
  'common-errors': (difficulty = 'medium', usedIds = []) => {
    const questionPool = questionBanks['common-errors'][difficulty] || []
    
    if (questionPool.length === 0) {
      throw new Error(`找不到難度為 ${difficulty} 的易錯字題目`)
    }
    
    // TODO: 實作抽題邏輯
    const availableQuestions = questionPool.filter(q => !usedIds.includes(q.id))
    const questions = availableQuestions.length > 0 ? availableQuestions : questionPool
    const question = questions[Math.floor(Math.random() * questions.length)]
    
    return {
      id: question.id,
      question: question.question,
      options: question.options,
      answer: question.answer,
      type: 'common-errors',
      category: 'common-errors',
      difficulty: difficulty,
      displayAnswer: question.answer,
      explanation: question.explanation,
      keywords: question.keywords
    }
  }
}

/**
 * 答案驗證
 */
export function checkAnswer(question, userAnswer) {
  return userAnswer === question.answer
}

export default {
  generators,
  checkAnswer
}
