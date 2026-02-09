// 數學 - 四則運算 - 分數生成器
// src/data/math/arithmetic/generators/fraction.js

/**
 * 最大公因數（輾轉相除法）
 */
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b)
}

/**
 * 約分（化簡分數）
 */
function simplifyFraction(numerator, denominator) {
  const g = gcd(Math.abs(numerator), Math.abs(denominator))
  return {
    num: numerator / g,
    den: denominator / g
  }
}

/**
 * TODO: 實作分數加法生成器
 */
function generateAddition(difficulty = 'medium') {
  const maxDen = { easy: 10, medium: 15, hard: 20 }[difficulty]
  
  const den1 = Math.floor(Math.random() * maxDen) + 2
  const den2 = Math.floor(Math.random() * maxDen) + 2
  const num1 = Math.floor(Math.random() * (den1 - 1)) + 1
  const num2 = Math.floor(Math.random() * (den2 - 1)) + 1
  
  // 計算結果
  const commonDen = den1 * den2
  const resultNum = num1 * den2 + num2 * den1
  const simplified = simplifyFraction(resultNum, commonDen)
  
  return {
    question: `${num1}/${den1} + ${num2}/${den2}`,
    answer: simplified,
    type: 'fraction',
    displayAnswer: `${simplified.num}/${simplified.den}`
  }
}

/**
 * TODO: 實作分數減法生成器
 */
function generateSubtraction(difficulty = 'medium') {
  // TODO: 實作邏輯（類似加法，但要確保結果為正）
  const maxDen = { easy: 10, medium: 15, hard: 20 }[difficulty]
  
  const den1 = Math.floor(Math.random() * maxDen) + 2
  const den2 = Math.floor(Math.random() * maxDen) + 2
  const num1 = Math.floor(Math.random() * (den1 - 1)) + 2
  const num2 = Math.floor(Math.random() * (den2 - 1)) + 1
  
  const commonDen = den1 * den2
  const resultNum = num1 * den2 - num2 * den1
  
  if (resultNum <= 0) {
    return generateSubtraction(difficulty)  // 重新生成
  }
  
  const simplified = simplifyFraction(resultNum, commonDen)
  
  return {
    question: `${num1}/${den1} - ${num2}/${den2}`,
    answer: simplified,
    type: 'fraction',
    displayAnswer: `${simplified.num}/${simplified.den}`
  }
}

/**
 * TODO: 實作分數乘法生成器
 */
function generateMultiplication(difficulty = 'medium') {
  // TODO: 實作邏輯
  const maxDen = { easy: 10, medium: 15, hard: 20 }[difficulty]
  
  const den1 = Math.floor(Math.random() * maxDen) + 2
  const den2 = Math.floor(Math.random() * maxDen) + 2
  const num1 = Math.floor(Math.random() * (den1 - 1)) + 1
  const num2 = Math.floor(Math.random() * (den2 - 1)) + 1
  
  const resultNum = num1 * num2
  const resultDen = den1 * den2
  const simplified = simplifyFraction(resultNum, resultDen)
  
  return {
    question: `${num1}/${den1} × ${num2}/${den2}`,
    answer: simplified,
    type: 'fraction',
    displayAnswer: `${simplified.num}/${simplified.den}`
  }
}

/**
 * TODO: 實作分數除法生成器
 */
function generateDivision(difficulty = 'medium') {
  // TODO: 實作邏輯（除法 = 乘以倒數）
  const maxDen = { easy: 10, medium: 15, hard: 20 }[difficulty]
  
  const den1 = Math.floor(Math.random() * maxDen) + 2
  const den2 = Math.floor(Math.random() * maxDen) + 2
  const num1 = Math.floor(Math.random() * (den1 - 1)) + 1
  const num2 = Math.floor(Math.random() * (den2 - 1)) + 1
  
  // 除法 = 乘以倒數
  const resultNum = num1 * den2
  const resultDen = den1 * num2
  const simplified = simplifyFraction(resultNum, resultDen)
  
  return {
    question: `${num1}/${den1} ÷ ${num2}/${den2}`,
    answer: simplified,
    type: 'fraction',
    displayAnswer: `${simplified.num}/${simplified.den}`
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
  // 分數答案驗證：先約分再比較
  const g = gcd(
    Math.abs(parseInt(userAnswer.num)), 
    Math.abs(parseInt(userAnswer.den))
  )
  
  const userSimplified = {
    num: parseInt(userAnswer.num) / g,
    den: parseInt(userAnswer.den) / g
  }
  
  return (
    userSimplified.num === question.answer.num &&
    userSimplified.den === question.answer.den
  )
}

export default {
  generators,
  checkAnswer
}
