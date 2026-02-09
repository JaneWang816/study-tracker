// 數學 - 四則運算 - 配置檔
// src/data/math/arithmetic/config.js

/**
 * 難度設定（數學類型 - 有 max）
 */
export const difficulties = [
  { 
    id: 'easy', 
    name: '簡單',
    max: 99,
    desc: '2位數以內'
  },
  { 
    id: 'medium', 
    name: '中等',
    max: 999,
    desc: '3位數以內'
  },
  { 
    id: 'hard', 
    name: '困難',
    max: 9999,
    desc: '4位數以內'
  }
]

/**
 * 題數選項
 */
export const questionCounts = [5, 10, 20]

/**
 * 運算類型
 */
export const operations = [
  { 
    id: 'addition', 
    name: '加法', 
    symbol: '+',
    desc: '兩數相加'
  },
  { 
    id: 'subtraction', 
    name: '減法', 
    symbol: '-',
    desc: '兩數相減'
  },
  { 
    id: 'multiplication', 
    name: '乘法', 
    symbol: '×',
    desc: '兩數相乘'
  },
  { 
    id: 'division', 
    name: '除法', 
    symbol: '÷',
    desc: '兩數相除'
  },
  {
    id: 'mixed',
    name: '混合運算',
    symbol: '+-×÷',
    desc: '隨機四則運算'
  }
]

export default {
  name: '四則運算',
  difficulties,
  questionCounts,
  operations
}
