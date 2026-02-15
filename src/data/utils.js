// src/data/utils.js
// 共用工具函數 - 題庫洗牌機制

/**
 * 陣列洗牌函數 (Fisher-Yates shuffle)
 * @param {Array} array - 要洗牌的陣列
 * @returns {Array} - 洗牌後的新陣列
 */
export const shuffleArray = (array) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

/**
 * 選擇題選項洗牌
 * 保持正確答案的追蹤
 * @param {Object} question - 題目物件 {question, options, answer}
 * @returns {Object} - 洗牌後的題目物件
 */
export const shuffleOptions = (question) => {
  if (!question.options || question.type !== 'options') {
    return question
  }
  
  // 記錄原本正確答案的內容
  const correctAnswer = question.options[question.answer]
  
  // 洗牌選項
  const shuffledOptions = shuffleArray(question.options)
  
  // 找到正確答案在新位置的索引
  const newAnswerIndex = shuffledOptions.indexOf(correctAnswer)
  
  return {
    ...question,
    options: shuffledOptions,
    answer: newAnswerIndex,
    displayAnswer: correctAnswer // 保持正確答案文字不變
  }
}

/**
 * 從題庫中不重複抽取題目
 * @param {Array} questionBank - 題庫陣列
 * @param {number} count - 要抽取的題目數量
 * @returns {Array} - 抽取並洗牌後的題目陣列
 */
export const drawQuestions = (questionBank, count) => {
  // 如果要求的題目數量大於題庫,就重複題庫
  let availableQuestions = [...questionBank]
  
  if (count > questionBank.length) {
    const repeats = Math.ceil(count / questionBank.length)
    availableQuestions = []
    for (let i = 0; i < repeats; i++) {
      availableQuestions.push(...questionBank)
    }
  }
  
  // 洗牌整個題庫
  const shuffled = shuffleArray(availableQuestions)
  
  // 取前N題
  return shuffled.slice(0, count).map(q => {
    // 如果是選擇題,同時洗牌選項
    if (q.options) {
      return shuffleOptions(q)
    }
    return { ...q }
  })
}

/**
 * 創建使用閉包的題庫生成器
 * @param {Array} questionBank - 題庫陣列
 * @returns {Function} - 生成器函數
 */
export const createQuestionGenerator = (questionBank) => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    // 如果題庫用完,重新洗牌
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(questionBank)
      currentIndex = 0
    }
    
    // 取出一題
    const question = shuffledBank[currentIndex]
    currentIndex++
    
    // 如果是選擇題,洗牌選項;否則直接返回
    if (question.type === 'options') {
      return shuffleOptions(question)
    }
    return { ...question }
  }
}
