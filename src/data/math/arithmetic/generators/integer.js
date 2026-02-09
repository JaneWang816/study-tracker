// 數學 - 四則運算 - 整數生成器
// src/data/math/arithmetic/generators/integer.js

/**
 * 整數加法生成器
 */
function generateAddition(difficulty = 'medium') {
  const max = { easy: 99, medium: 999, hard: 9999 }[difficulty]
  const a = Math.floor(Math.random() * max) + 1
  const b = Math.floor(Math.random() * max) + 1
  
  return {
    question: `${a.toLocaleString()} + ${b.toLocaleString()}`,
    answer: a + b,
    type: 'integer',
    displayAnswer: (a + b).toLocaleString()
  }
}

/**
 * 整數減法生成器
 */
function generateSubtraction(difficulty = 'medium') {
  const max = { easy: 99, medium: 999, hard: 9999 }[difficulty]
  let a = Math.floor(Math.random() * max) + 1
  let b = Math.floor(Math.random() * max) + 1
  
  // 確保 a >= b，避免負數
  if (b > a) [a, b] = [b, a]
  
  return {
    question: `${a.toLocaleString()} - ${b.toLocaleString()}`,
    answer: a - b,
    type: 'integer',
    displayAnswer: (a - b).toLocaleString()
  }
}

/**
 * 整數乘法生成器
 */
function generateMultiplication(difficulty = 'medium') {
  // 乘法的數字範圍要小一些，避免結果太大
  const max = { easy: 9, medium: 99, hard: 999 }[difficulty]
  const a = Math.floor(Math.random() * max) + 1
  const b = Math.floor(Math.random() * 99) + 1  // 第二個乘數不要太大
  
  return {
    question: `${a.toLocaleString()} × ${b.toLocaleString()}`,
    answer: a * b,
    type: 'integer',
    displayAnswer: (a * b).toLocaleString()
  }
}

/**
 * 整數除法生成器
 */
function generateDivision(difficulty = 'medium') {
  const maxQuotient = { easy: 9, medium: 99, hard: 999 }[difficulty]
  const divisor = Math.floor(Math.random() * 50) + 2  // 除數 2-51
  const quotient = Math.floor(Math.random() * maxQuotient) + 1  // 商
  
  // 決定是否有餘數（50% 機率）
  const hasRemainder = Math.random() < 0.5
  
  if (hasRemainder) {
    const remainder = Math.floor(Math.random() * (divisor - 1)) + 1
    const dividend = divisor * quotient + remainder
    
    return {
      question: `${dividend.toLocaleString()} ÷ ${divisor.toLocaleString()}`,
      answer: { quotient, remainder },
      type: 'division',
      displayAnswer: `${quotient} ... ${remainder}`
    }
  } else {
    const dividend = divisor * quotient
    
    return {
      question: `${dividend.toLocaleString()} ÷ ${divisor.toLocaleString()}`,
      answer: { quotient, remainder: 0 },
      type: 'division',
      displayAnswer: `${quotient}`
    }
  }
}

/**
 * 混合運算生成器
 */
function generateMixed(difficulty = 'medium') {
  const types = ['addition', 'subtraction', 'multiplication', 'division']
  const randomType = types[Math.floor(Math.random() * types.length)]
  return generators[randomType](difficulty)
}

/**
 * 統一的生成器介面
 */
export const generators = {
  addition: generateAddition,
  subtraction: generateSubtraction,
  multiplication: generateMultiplication,
  division: generateDivision,
  mixed: generateMixed
}

/**
 * 答案驗證
 */
export function checkAnswer(question, userAnswer) {
  // 除法特殊處理
  if (question.type === 'division') {
    return (
      parseInt(userAnswer.quotient) === question.answer.quotient &&
      parseInt(userAnswer.remainder) === question.answer.remainder
    )
  }
  
  // 一般整數題目
  return parseInt(userAnswer) === question.answer
}

export default {
  generators,
  checkAnswer
}
