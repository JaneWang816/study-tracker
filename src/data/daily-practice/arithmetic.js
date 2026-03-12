// 四則運算每日練習 - 生成器
// 固定 20 題結構：
//   題 1–3   : 1位整數加減
//   題 4–6   : 2位整數加減
//   題 7–9   : 整數1位小數加減
//   題 10–12 : 整數2位小數加減
//   題 13–20 : 2位整數四則運算（至少3個數字，可含一層括號）

// ── 工具 ────────────────────────────────────────────────

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// 四捨五入到指定小數位，避免浮點誤差
const roundTo = (n, dec) => Math.round(n * Math.pow(10, dec)) / Math.pow(10, dec)

// ── 類型1：1位整數加減 ───────────────────────────────────

const generate1DigitAddSub = () => {
  const a = rand(1, 9)
  const b = rand(1, 9)
  const useAdd = Math.random() < 0.5

  if (useAdd) {
    return {
      question: `${a} + ${b}`,
      answer: a + b,
      type: 'decimal',
      displayAnswer: String(a + b)
    }
  } else {
    const big = Math.max(a, b)
    const small = Math.min(a, b)
    return {
      question: `${big} - ${small}`,
      answer: big - small,
      type: 'decimal',
      displayAnswer: String(big - small)
    }
  }
}

// ── 類型2：2位整數加減 ───────────────────────────────────

const generate2DigitAddSub = () => {
  const a = rand(10, 99)
  const b = rand(10, 99)
  const useAdd = Math.random() < 0.5

  if (useAdd) {
    return {
      question: `${a} + ${b}`,
      answer: a + b,
      type: 'decimal',
      displayAnswer: String(a + b)
    }
  } else {
    const big = Math.max(a, b)
    const small = Math.min(a, b)
    return {
      question: `${big} - ${small}`,
      answer: big - small,
      type: 'decimal',
      displayAnswer: String(big - small)
    }
  }
}

// ── 類型3：整數1位小數加減 ──────────────────────────────

const generate1DecimalAddSub = () => {
  // 整數部分1–2位，小數1位
  const intA = rand(1, 99)
  const decA = rand(1, 9)
  const intB = rand(1, 99)
  const decB = rand(1, 9)

  const a = parseFloat(`${intA}.${decA}`)
  const b = parseFloat(`${intB}.${decB}`)
  const useAdd = Math.random() < 0.5

  if (useAdd) {
    const ans = roundTo(a + b, 1)
    return {
      question: `${a} + ${b}`,
      answer: ans,
      type: 'decimal',
      displayAnswer: ans.toFixed(ans % 1 === 0 ? 0 : 1)
    }
  } else {
    const big = a >= b ? a : b
    const small = a >= b ? b : a
    const ans = roundTo(big - small, 1)
    return {
      question: `${big} - ${small}`,
      answer: ans,
      type: 'decimal',
      displayAnswer: ans.toFixed(ans % 1 === 0 ? 0 : 1)
    }
  }
}

// ── 類型4：整數2位小數加減 ──────────────────────────────

const generate2DecimalAddSub = () => {
  // 整數部分1–2位，小數2位（末位不為0）
  const makeNum = () => {
    const intPart = rand(1, 99)
    const dec1 = rand(1, 9)
    const dec2 = rand(1, 9)
    return parseFloat(`${intPart}.${dec1}${dec2}`)
  }

  const a = makeNum()
  const b = makeNum()
  const useAdd = Math.random() < 0.5

  const fmt = (n) => {
    const r = roundTo(n, 2)
    // 顯示時保留有效小數位
    if (r % 1 === 0) return r.toFixed(0)
    if (roundTo(r * 10, 0) % 10 === 0) return r.toFixed(1)
    return r.toFixed(2)
  }

  if (useAdd) {
    const ans = roundTo(a + b, 2)
    return {
      question: `${a} + ${b}`,
      answer: ans,
      type: 'decimal',
      displayAnswer: fmt(ans)
    }
  } else {
    const big = a >= b ? a : b
    const small = a >= b ? b : a
    const ans = roundTo(big - small, 2)
    return {
      question: `${big} - ${small}`,
      answer: ans,
      type: 'decimal',
      displayAnswer: fmt(ans)
    }
  }
}

// ── 類型5：2位整數四則運算（至少3數，可含一層括號）────────

const generate4Ops = () => {
  const useParentheses = Math.random() < 0.5

  // 安全取得 a÷b 整除的配對
  const safeDivPair = (maxA = 99) => {
    const b = rand(2, 9)
    const q = rand(1, Math.floor(maxA / b))
    return { a: b * q, b, result: q }
  }

  if (useParentheses) {
    return generateWith1Bracket()
  } else {
    return generateNoBracket()
  }
}

// 無括號：a op1 b op2 c（遵守運算順序）
const generateNoBracket = () => {
  // 策略：先決定兩個運算子，確保結果為整數且非負
  const opType = rand(1, 4)

  let a, b, c, question, answer

  if (opType === 1) {
    // + 和 +
    a = rand(10, 99); b = rand(10, 99); c = rand(10, 99)
    answer = a + b + c
    question = `${a} + ${b} + ${c}`

  } else if (opType === 2) {
    // + 和 -（或 - 和 +）
    a = rand(10, 99); b = rand(10, 99); c = rand(10, 99)
    // 確保結果非負
    if (Math.random() < 0.5) {
      // a + b - c，確保 a+b >= c
      const sum = a + b
      c = rand(1, sum - 1)
      answer = sum - c
      question = `${a} + ${b} - ${c}`
    } else {
      // a - b + c，確保 a >= b
      const big = Math.max(a, b); const small = Math.min(a, b)
      a = big; b = small
      answer = a - b + c
      question = `${a} - ${b} + ${c}`
    }

  } else if (opType === 3) {
    // × 和 +（或 + 和 ×）先乘後加
    a = rand(10, 20); b = rand(2, 9); c = rand(10, 50)
    if (Math.random() < 0.5) {
      answer = a * b + c
      question = `${a} × ${b} + ${c}`
    } else {
      answer = c + a * b
      question = `${c} + ${a} × ${b}`
    }

  } else {
    // × 和 -（或 - 和 ×）
    a = rand(10, 20); b = rand(2, 9); c = rand(10, 50)
    const prod = a * b
    if (Math.random() < 0.5) {
      // a × b - c，確保 prod >= c
      c = rand(1, Math.min(c, prod - 1))
      answer = prod - c
      question = `${a} × ${b} - ${c}`
    } else {
      // c - a × b，確保 c >= prod
      const newC = prod + rand(1, 50)
      answer = newC - prod
      question = `${newC} - ${a} × ${b}`
    }
  }

  return {
    question,
    answer,
    type: 'decimal',
    displayAnswer: String(answer)
  }
}

// 有一層括號：(a op1 b) op2 c  或  c op2 (a op1 b)
const generateWith1Bracket = () => {
  const innerOp = ['+', '-', '×', '÷'][rand(0, 3)]
  const outerOp = ['+', '-', '×'][rand(0, 2)] // 外層不做÷避免複雜度過高

  let a, b, innerResult, c, question, answer

  // 計算括號內
  if (innerOp === '+') {
    a = rand(10, 50); b = rand(10, 50)
    innerResult = a + b

  } else if (innerOp === '-') {
    a = rand(20, 99); b = rand(10, a - 1)
    innerResult = a - b

  } else if (innerOp === '×') {
    a = rand(10, 20); b = rand(2, 9)
    innerResult = a * b

  } else {
    // ÷ 確保整除
    b = rand(2, 9); a = b * rand(2, 15)
    innerResult = a / b
  }

  // 計算括號外
  if (outerOp === '+') {
    c = rand(10, 99)
    answer = innerResult + c
    // 括號可在左或右
    if (Math.random() < 0.5) {
      question = `( ${a} ${innerOp} ${b} ) + ${c}`
    } else {
      question = `${c} + ( ${a} ${innerOp} ${b} )`
    }

  } else if (outerOp === '-') {
    // 兩種情況：result - c 或 c - result，確保非負
    if (Math.random() < 0.5 && innerResult > 1) {
      c = rand(1, innerResult - 1)
      answer = innerResult - c
      question = `( ${a} ${innerOp} ${b} ) - ${c}`
    } else {
      c = innerResult + rand(1, 99)
      answer = c - innerResult
      question = `${c} - ( ${a} ${innerOp} ${b} )`
    }

  } else {
    // ×
    c = rand(2, 9)
    answer = innerResult * c
    if (Math.random() < 0.5) {
      question = `( ${a} ${innerOp} ${b} ) × ${c}`
    } else {
      question = `${c} × ( ${a} ${innerOp} ${b} )`
    }
  }

  return {
    question,
    answer,
    type: 'decimal',
    displayAnswer: String(answer)
  }
}

// ── checkAnswer ──────────────────────────────────────────

export const checkAnswer = (question, userAnswer) => {
  if (question.type === 'division') {
    // 舊格式相容（目前不再產生，但保留以防萬一）
    const userQuotient = parseInt(userAnswer.quotient) || 0
    const userRemainder = parseInt(userAnswer.remainder) || 0
    return (
      userQuotient === question.answer.quotient &&
      userRemainder === question.answer.remainder
    )
  } else if (question.type === 'decimal') {
    const parsed = parseFloat(userAnswer)
    if (isNaN(parsed)) return false
    return roundTo(parsed, 2) === roundTo(question.answer, 2)
  }
  return false
}

// ── 主生成器（按 index 決定類型）────────────────────────

export const generateQuestion = (index) => {
  if (index < 3)       return generate1DigitAddSub()    // 題 1–3
  if (index < 6)       return generate2DigitAddSub()    // 題 4–6
  if (index < 9)       return generate1DecimalAddSub()  // 題 7–9
  if (index < 12)      return generate2DecimalAddSub()  // 題 10–12
  return generate4Ops()                                  // 題 13–20
}

// ── 設定（給 DailyArithmetic.jsx 顯示用）────────────────

export const arithmeticConfig = {
  id: 'arithmetic',
  name: '四則運算',
  icon: '🔢',
  color: '#FF6B6B',
  desc: '每日基礎運算練習，固定 20 題',
  breakdown: [
    { label: '1位整數加減', count: 3 },
    { label: '2位整數加減', count: 3 },
    { label: '整數＋1位小數加減', count: 3 },
    { label: '整數＋2位小數加減', count: 3 },
    { label: '2位整數四則運算（含括號）', count: 8 }
  ]
}

export default {
  config: arithmeticConfig,
  generateQuestion,
  checkAnswer
}
