// 四則運算每日練習 - 生成器

// 隨機選擇運算符號
const randomOp = () => {
  const ops = ['+', '-', '×', '÷']
  return ops[Math.floor(Math.random() * ops.length)]
}

// 隨機生成指定位數的數字
const randomNum = (digits) => {
  const min = digits === 1 ? 1 : Math.pow(10, digits - 1)
  const max = Math.pow(10, digits) - 1
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// 簡單題：兩數運算 (1-4位數)
const generateEasy = (difficulty = 'medium') => {
  const digits = { easy: 1, medium: 2, hard: 3, veryHard: 4 }[difficulty] || 2
  const op = randomOp()
  
  let a = randomNum(digits)
  let b = randomNum(digits)
  
  // 處理減法（確保不出現負數）
  if (op === '-') {
    if (b > a) {
      [a, b] = [b, a]
    }
  }
  
  // 處理除法
  if (op === '÷') {
    // 確保除數較小
    b = Math.floor(Math.random() * Math.min(50, a)) + 2
    const quotient = Math.floor(a / b)
    const remainder = a % b
    
    return {
      question: `${a} ÷ ${b}`,
      answer: { quotient, remainder },
      type: 'division',
      displayAnswer: remainder === 0 ? `${quotient}` : `${quotient} ... ${remainder}`,
      level: 'easy'
    }
  }
  
  // 其他運算
  let answer
  switch (op) {
    case '+':
      answer = a + b
      break
    case '-':
      answer = a - b
      break
    case '×':
      answer = a * b
      break
  }
  
  return {
    question: `${a} ${op} ${b}`,
    answer,
    type: 'integer',
    displayAnswer: String(answer),
    level: 'easy'
  }
}

// 中等題：三數運算（含括號，練習先乘除後加減）
const generateMedium = (difficulty = 'medium') => {
  const digits = { easy: 1, medium: 2, hard: 3, veryHard: 4 }[difficulty] || 2
  
  // 隨機決定是否使用括號
  const useParentheses = Math.random() < 0.5
  
  let a = randomNum(digits)
  let b = randomNum(digits)
  let c = randomNum(digits)
  
  let operation1 = randomOp()
  let operation2 = randomOp()
  
  let question, answer
  
  if (useParentheses) {
    // 情況 1: 有括號 (a op1 b) op2 c
    
    // 先計算括號內 (a op1 b)
    let innerResult
    
    if (operation1 === '+') {
      innerResult = a + b
    } else if (operation1 === '-') {
      // 確保括號內不會負數
      if (b > a) [a, b] = [b, a]
      innerResult = a - b
    } else if (operation1 === '×') {
      innerResult = a * b
    } else if (operation1 === '÷') {
      // 除法：調整 b 讓能整除
      b = Math.floor(Math.random() * Math.min(20, a)) + 2
      const tempQuotient = Math.floor(a / b)
      a = tempQuotient * b // 確保整除
      innerResult = tempQuotient
    }
    
    // 再計算 innerResult op2 c
    if (operation2 === '+') {
      answer = innerResult + c
      question = `( ${a} ${operation1} ${b} ) + ${c}`
    } else if (operation2 === '-') {
      // 確保結果不會負數
      if (c > innerResult) {
        // 交換位置
        question = `${c} - ( ${a} ${operation1} ${b} )`
        answer = c - innerResult
      } else {
        question = `( ${a} ${operation1} ${b} ) - ${c}`
        answer = innerResult - c
      }
    } else if (operation2 === '×') {
      answer = innerResult * c
      question = `( ${a} ${operation1} ${b} ) × ${c}`
    } else if (operation2 === '÷') {
      // 除法：調整 c 並返回商和餘數
      c = Math.floor(Math.random() * 20) + 2
      const quotient = Math.floor(innerResult / c)
      const remainder = innerResult % c
      
      return {
        question: `( ${a} ${operation1} ${b} ) ÷ ${c}`,
        answer: { quotient, remainder },
        type: 'division',
        displayAnswer: remainder === 0 ? `${quotient}` : `${quotient} ... ${remainder}`,
        level: 'medium'
      }
    }
    
  } else {
    // 情況 2: 無括號，先乘除後加減
    // 確保至少有一個是乘除，另一個是加減
    
    const hasPriority = Math.random() < 0.5
    
    if (hasPriority) {
      // 第二個運算優先：a op1 (b op2 c)
      operation1 = Math.random() < 0.5 ? '+' : '-'
      operation2 = Math.random() < 0.5 ? '×' : '÷'
      
      // 先算 b op2 c
      let temp
      if (operation2 === '×') {
        temp = b * c
      } else {
        // 除法：確保整除
        c = Math.floor(Math.random() * Math.min(20, b)) + 2
        const tempQuotient = Math.floor(b / c)
        b = tempQuotient * c
        temp = tempQuotient
      }
      
      // 再算 a op1 temp
      if (operation1 === '+') {
        answer = a + temp
      } else {
        // 減法：確保不會負數
        if (temp > a) {
          a = temp + randomNum(digits)
        }
        answer = a - temp
      }
      
      question = `${a} ${operation1} ${b} ${operation2} ${c}`
      
    } else {
      // 第一個運算優先：(a op1 b) op2 c
      operation1 = Math.random() < 0.5 ? '×' : '÷'
      operation2 = Math.random() < 0.5 ? '+' : '-'
      
      // 先算 a op1 b
      let temp
      if (operation1 === '×') {
        temp = a * b
      } else {
        // 除法：確保整除
        b = Math.floor(Math.random() * Math.min(20, a)) + 2
        const tempQuotient = Math.floor(a / b)
        a = tempQuotient * b
        temp = tempQuotient
      }
      
      // 再算 temp op2 c
      if (operation2 === '+') {
        answer = temp + c
      } else {
        // 減法：確保不會負數
        if (c > temp) {
          c = Math.floor(Math.random() * temp) + 1
        }
        answer = temp - c
      }
      
      question = `${a} ${operation1} ${b} ${operation2} ${c}`
    }
  }
  
  return {
    question,
    answer,
    type: 'integer',
    displayAnswer: String(answer),
    level: 'medium'
  }
}

// 困難題：四數以上運算（暫時停用）
const generateHard = (difficulty = 'medium') => {
  // 困難級別暫時停用，改為生成中等題
  return generateMedium(difficulty)
}

// 檢查答案
export const checkAnswer = (question, userAnswer) => {
  if (question.type === 'division') {
    const userQuotient = parseInt(userAnswer.quotient) || 0
    const userRemainder = parseInt(userAnswer.remainder) || 0
    return (
      userQuotient === question.answer.quotient &&
      userRemainder === question.answer.remainder
    )
  } else if (question.type === 'integer') {
    return parseInt(userAnswer) === question.answer
  }
  return false
}

// 主生成器
export const generateQuestion = (level = 'easy', difficulty = 'medium') => {
  switch (level) {
    case 'easy':
      return generateEasy(difficulty)
    case 'medium':
      return generateMedium(difficulty)
    case 'hard':
      return generateHard(difficulty) // 目前會自動轉為中等題
    default:
      return generateEasy(difficulty)
  }
}

// 設定
export const arithmeticConfig = {
  id: 'arithmetic',
  name: '四則運算',
  icon: '🔢',
  color: '#FF6B6B',
  desc: '每日基礎運算練習',
  levels: [
    { id: 'easy', name: '簡單', desc: '兩數運算', icon: '😊' },
    { id: 'medium', name: '中等', desc: '三數運算（含括號）', icon: '🤔' },
    { id: 'hard', name: '困難', desc: '四數以上（開發中）', icon: '😅', disabled: true }
  ],
  difficulties: [
    { id: 'easy', name: '1位數', digits: 1 },
    { id: 'medium', name: '2位數', digits: 2 },
    { id: 'hard', name: '3位數', digits: 3 },
    { id: 'veryHard', name: '4位數', digits: 4 }
  ],
  questionCounts: [10, 20, 30, 50]
}

export default {
  config: arithmeticConfig,
  generateQuestion,
  checkAnswer
}
