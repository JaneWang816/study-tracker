// src/data/daily-practice/multiplication/generators.js
// 乘法速算題目生成器

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

// 5. 單位換算
const randVal = (integers, decimals) => {
  const pool = Math.random() < 0.5 ? integers : decimals
  return pool[Math.floor(Math.random() * pool.length)]
}

const unitGroups = [
  // ── 長度 ──────────────────────────────────────────────
  {
    hint: '1 km = 1000 m = 100000 cm = 1000000 mm',
    conversions: [
      () => { const v = randVal([1,2,3,4,5,10], [1.5,2.5,3.5,0.5]); return { from: v, fromUnit: 'km', to: v * 1000, toUnit: 'm' } },
      () => { const v = randVal([1000,2000,3000,5000], [1500,2500,500]); return { from: v, fromUnit: 'm', to: v / 1000, toUnit: 'km' } },
      () => { const v = randVal([1,2,3,5,10], [0.5,1.5,2.5]); return { from: v, fromUnit: 'm', to: v * 100, toUnit: 'cm' } },
      () => { const v = randVal([100,200,300,500], [50,150,250]); return { from: v, fromUnit: 'cm', to: v / 100, toUnit: 'm' } },
      () => { const v = randVal([1,2,5,10,20], [0.5,1.5,2.5]); return { from: v, fromUnit: 'cm', to: v * 10, toUnit: 'mm' } },
      () => { const v = randVal([10,20,50,100], [5,15,25]); return { from: v, fromUnit: 'mm', to: v / 10, toUnit: 'cm' } },
      () => { const v = randVal([1,2,3], [0.5,1.5,2.5]); return { from: v, fromUnit: 'km', to: v * 100000, toUnit: 'cm' } },
    ]
  },
  // ── 重量 ──────────────────────────────────────────────
  {
    hint: '1 t = 1000 kg、1 kg = 1000 g',
    conversions: [
      () => { const v = randVal([1,2,3,5], [0.5,1.5,2.5]); return { from: v, fromUnit: 'kg', to: v * 1000, toUnit: 'g' } },
      () => { const v = randVal([1000,2000,5000], [500,1500,2500]); return { from: v, fromUnit: 'g', to: v / 1000, toUnit: 'kg' } },
      () => { const v = randVal([1,2,3,5], [0.5,1.5,2.5]); return { from: v, fromUnit: 't', to: v * 1000, toUnit: 'kg' } },
      () => { const v = randVal([1000,2000,5000], [500,1500]); return { from: v, fromUnit: 'kg', to: v / 1000, toUnit: 't' } },
    ]
  },
  // ── 容積 ──────────────────────────────────────────────
  {
    hint: '1 L = 1000 mL',
    conversions: [
      () => { const v = randVal([1,2,3,5], [0.5,1.5,2.5]); return { from: v, fromUnit: 'L', to: v * 1000, toUnit: 'mL' } },
      () => { const v = randVal([1000,2000,5000], [500,1500,2500]); return { from: v, fromUnit: 'mL', to: v / 1000, toUnit: 'L' } },
    ]
  },
  // ── 體積 ──────────────────────────────────────────────
  {
    hint: '1 m³ = 1000000 cm³',
    conversions: [
      () => { const v = randVal([1,2,3], [0.5,1.5,2.5]); return { from: v, fromUnit: 'm³', to: v * 1000000, toUnit: 'cm³' } },
      () => { const v = randVal([1000000,2000000], [500000,1500000]); return { from: v, fromUnit: 'cm³', to: v / 1000000, toUnit: 'm³' } },
    ]
  },
  // ── 面積 ──────────────────────────────────────────────
  {
    hint: '1 km² = 100 ha = 10000 a = 1000000 m²\n1 m² = 10000 cm²',
    conversions: [
      () => { const v = randVal([1,2,3,5], [0.5,1.5,2.5]); return { from: v, fromUnit: 'm²', to: v * 10000, toUnit: 'cm²' } },
      () => { const v = randVal([10000,20000,50000], [5000,15000]); return { from: v, fromUnit: 'cm²', to: v / 10000, toUnit: 'm²' } },
      () => { const v = randVal([1,2,3,5], [0.5,1.5,2.5]); return { from: v, fromUnit: 'km²', to: v * 100, toUnit: 'ha' } },
      () => { const v = randVal([1,2,5,10], [0.5,1.5,2.5]); return { from: v, fromUnit: 'ha', to: v * 100, toUnit: 'a' } },
      () => { const v = randVal([1,2,3,5], [0.5,1.5,2.5]); return { from: v, fromUnit: 'km²', to: v * 1000000, toUnit: 'm²' } },
    ]
  },
  // ── 時間 ──────────────────────────────────────────────
  {
    hint: '1 日 = 24 時、1 時 = 60 分、1 分 = 60 秒',
    conversions: [
      () => { const v = randVal([1,2,3,5,10], [0.5,1.5,2.5]); return { from: v, fromUnit: '分', to: v * 60, toUnit: '秒' } },
      () => { const v = randVal([60,120,180,300], [30,90,150]); return { from: v, fromUnit: '秒', to: v / 60, toUnit: '分' } },
      () => { const v = randVal([1,2,3,6,12], [0.5,1.5,2.5]); return { from: v, fromUnit: '時', to: v * 60, toUnit: '分' } },
      () => { const v = randVal([60,120,180,360], [30,90,150]); return { from: v, fromUnit: '分', to: v / 60, toUnit: '時' } },
      () => { const v = randVal([1,2,3,7], [0.5,1.5,2.5]); return { from: v, fromUnit: '日', to: v * 24, toUnit: '時' } },
    ]
  },
]

const fmtNum = (n) => parseFloat(n.toFixed(2)).toString()

const generateUnitConversion = () => {
  const group = unitGroups[Math.floor(Math.random() * unitGroups.length)]
  const conv = group.conversions[Math.floor(Math.random() * group.conversions.length)]
  const { from, fromUnit, to, toUnit } = conv()
  const toDisplay = fmtNum(to)
  return {
    type: 'unit',
    hint: group.hint,
    question: `${fmtNum(from)} ${fromUnit} = ? ${toUnit}`,
    answer: parseFloat(toDisplay),
    displayAnswer: `${toDisplay} ${toUnit}`,
  }
}

// 6. 常見分數轉小數
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

// 生成 25 題（固定分配）
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

  // 單位換算：5 題
  for (let i = 0; i < 5; i++) {
    questions.push(generateUnitConversion())
  }
  
  // 隨機打亂順序
  return questions.sort(() => Math.random() - 0.5)
}

// 驗證答案
export const checkAnswer = (question, userAnswer) => {
  const parsed = parseFloat(userAnswer)
  if (isNaN(parsed)) return false
  if (question.type === 'fraction' || question.type === 'unit') {
    // 小數比較，容差 0.01
    return Math.abs(parsed - question.answer) < 0.01
  } else {
    return parseInt(userAnswer) === question.answer
  }
}

export default {
  generateQuestions,
  checkAnswer
}
