// src/data/daily-practice/multiplication/generators.js
// 乘法速算題目生成器

// ==========================================
// 通用工具函數
// ==========================================

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

// ==========================================
// 乘法速算題目生成器
// ==========================================

// 1. 11×11 乘法表 (1-11 × 1-11)
const generateMultiplication11x11 = () => {
  const a = Math.floor(Math.random() * 11) + 1  // 1-11
  const b = Math.floor(Math.random() * 11) + 1  // 1-11
  return {
    type: 'multiplication',
    question: `${a} × ${b}`,
    answer: a * b,
    displayAnswer: String(a * b)
  }
}

// 2. 兩位數乘法 (10-99 × 1-9)
const generateTwoDigitMultiplication = () => {
  const a = Math.floor(Math.random() * 90) + 10  // 10-99
  const b = Math.floor(Math.random() * 9) + 1    // 1-9
  return {
    type: 'multiplication',
    question: `${a} × ${b}`,
    answer: a * b,
    displayAnswer: String(a * b)
  }
}

// 3. 平方數 (1²-25²)
const generateSquare = () => {
  const n = Math.floor(Math.random() * 25) + 1   // 1-25
  return {
    type: 'square',
    question: `${n}²`,
    answer: n * n,
    displayAnswer: String(n * n)
  }
}

// 4. 25 的倍數 (25 × 1-10)
const generate25Multiple = () => {
  const n = Math.floor(Math.random() * 10) + 1   // 1-10
  return {
    type: 'multiplication',
    question: `25 × ${n}`,
    answer: 25 * n,
    displayAnswer: String(25 * n)
  }
}

// 5. 常見分數轉小數
const fractionToDecimal = [
  { question: '1/2', answer: 0.5, display: '0.5' },
  { question: '1/4', answer: 0.25, display: '0.25' },
  { question: '3/4', answer: 0.75, display: '0.75' },
  { question: '1/5', answer: 0.2, display: '0.2' },
  { question: '2/5', answer: 0.4, display: '0.4' },
  { question: '3/5', answer: 0.6, display: '0.6' },
  { question: '4/5', answer: 0.8, display: '0.8' },
  { question: '1/8', answer: 0.125, display: '0.125' },
  { question: '3/8', answer: 0.375, display: '0.375' },
  { question: '5/8', answer: 0.625, display: '0.625' },
  { question: '7/8', answer: 0.875, display: '0.875' },
  { question: '1/10', answer: 0.1, display: '0.1' },
  { question: '3/10', answer: 0.3, display: '0.3' },
  { question: '7/10', answer: 0.7, display: '0.7' },
  { question: '9/10', answer: 0.9, display: '0.9' }
]

const generateFractionToDecimal = () => {
  const item = fractionToDecimal[Math.floor(Math.random() * fractionToDecimal.length)]
  return {
    type: 'fraction',
    question: item.question,  // 只顯示分數，不加 "= ?"
    answer: item.answer,
    displayAnswer: item.display
  }
}

// 生成 20 題（固定分配）
export const generateQuestions = () => {
  const questions = []
  
  // 11×11 乘法表：10 題
  for (let i = 0; i < 10; i++) {
    questions.push(generateMultiplication11x11())
  }
  
  // 兩位數乘法：3 題
  for (let i = 0; i < 3; i++) {
    questions.push(generateTwoDigitMultiplication())
  }
  
  // 平方數：3 題
  for (let i = 0; i < 3; i++) {
    questions.push(generateSquare())
  }
  
  // 25 的倍數：2 題
  for (let i = 0; i < 2; i++) {
    questions.push(generate25Multiple())
  }
  
  // 分數轉小數：2 題
  for (let i = 0; i < 2; i++) {
    questions.push(generateFractionToDecimal())
  }
  
  // 隨機打亂順序
  return questions.sort(() => Math.random() - 0.5)
}

// 驗證答案
export const checkAnswer = (question, userAnswer) => {
  if (question.type === 'fraction') {
    // 小數比較，容差 0.001
    return Math.abs(parseFloat(userAnswer) - question.answer) < 0.001
  } else {
    // 整數比較
    return parseInt(userAnswer) === question.answer
  }
}

export default {
  generateQuestions,
  checkAnswer
}
