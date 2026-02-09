// 國語 - 字音辨識 - 多音字生成器
// src/data/chinese/pronunciation/generators/polyphonic.js

import questionBanks from '../questionBanks'

/**
 * 從題庫隨機抽取題目
 * @param {Array} questionPool - 題目池
 * @param {Array} usedIds - 已使用的題目 ID（避免重複）
 * @returns {Object} 題目物件
 */
function getRandomQuestion(questionPool, usedIds = []) {
  // 過濾掉已使用的題目
  const availableQuestions = questionPool.filter(q => !usedIds.includes(q.id))
  
  // 如果沒有可用題目，重新開始
  if (availableQuestions.length === 0) {
    return questionPool[Math.floor(Math.random() * questionPool.length)]
  }
  
  // 隨機選取
  const randomIndex = Math.floor(Math.random() * availableQuestions.length)
  return availableQuestions[randomIndex]
}

/**
 * 多音字生成器
 */
export const generators = {
  polyphonic: (difficulty = 'medium', usedIds = []) => {
    const questionPool = questionBanks.polyphonic[difficulty] || []
    
    if (questionPool.length === 0) {
      throw new Error(`找不到難度為 ${difficulty} 的多音字題目`)
    }
    
    const question = getRandomQuestion(questionPool, usedIds)
    
    return {
      id: question.id,
      question: question.question,
      options: question.options,
      answer: question.answer,
      type: 'polyphonic',
      category: 'polyphonic',
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
  // 選擇題：直接比對
  if (question.options) {
    return userAnswer === question.answer
  }
  
  // 填空題：去除空白後比對
  return userAnswer.trim() === question.answer.trim()
}

export default {
  generators,
  checkAnswer
}
