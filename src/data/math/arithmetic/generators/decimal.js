// 數學 - 四則運算 - 小數生成器
// src/data/math/arithmetic/generators/decimal.js

/**
 * TODO: 實作小數加法生成器
 * 參考 integer.js 的結構
 */
function generateAddition(difficulty = 'medium') {
  const max = { easy: 10, medium: 100, hard: 1000 }[difficulty]
  const a = parseFloat((Math.random() * max).toFixed(2))
  const b = parseFloat((Math.random() * max).toFixed(2))
  
  return {
    question: `${a} + ${b}`,
    answer: parseFloat((a + b).toFixed(2)),
    type: 'decimal',
    displayAnswer: (a + b).toFixed(2)
  }
}

/**
 * TODO: 實作小數減法生成器
 */
function generateSubtraction(difficulty = 'medium') {
  const max = { easy: 10, medium: 100, hard: 1000 }[difficulty]
  let a = parseFloat((Math.random() * max).toFixed(2))
  let b = parseFloat((Math.random() * max).toFixed(2))
  
  if (b > a) [a, b] = [b, a]
  
  return {
    question: `${a} - ${b}`,
    answer: parseFloat((a - b).toFixed(2)),
    type: 'decimal',
    displayAnswer: (a - b).toFixed(2)
  }
}

/**
 * TODO: 實作小數乘法生成器
 */
function generateMultiplication(difficulty = 'medium') {
  // TODO: 實作邏輯
  const max = { easy: 10, medium: 50, hard: 100 }[difficulty]
  const a = parseFloat((Math.random() * max).toFixed(1))
  const b = parseFloat((Math.random() * 10).toFixed(1))
  
  return {
    question: `${a} × ${b}`,
    answer: parseFloat((a * b).toFixed(2)),
    type: 'decimal',
    displayAnswer: (a * b).toFixed(2)
  }
}

/**
 * TODO: 實作小數除法生成器
 */
function generateDivision(difficulty = 'medium') {
  // TODO: 實作邏輯
  const divisor = parseFloat((Math.random() * 9 + 1).toFixed(1))
  const quotient = parseFloat((Math.random() * 50).toFixed(1))
  const dividend = parseFloat((divisor * quotient).toFixed(2))
  
  return {
    question: `${dividend} ÷ ${divisor}`,
    answer: parseFloat((dividend / divisor).toFixed(2)),
    type: 'decimal',
    displayAnswer: (dividend / divisor).toFixed(2)
  }
}

/**
 * 混合運算
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
  // 小數比較允許誤差
  return Math.abs(parseFloat(userAnswer) - question.answer) < 0.001
}

export default {
  generators,
  checkAnswer
}
