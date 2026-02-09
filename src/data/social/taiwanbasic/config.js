// src/data/social/taiwanbasic/config.js

export const difficulties = [
  { id: 'easy', name: '簡單', max: 99 },
  { id: 'medium', name: '中等', max: 999 },
  { id: 'hard', name: '困難', max: 9999 }
]

export const questionCounts = [5, 10, 20]

// 不在這裡定義 topics，移到 index.js 中定義
// 因為 topics 需要引用 lessons，而 lessons 在 index.js 中才 import

export const operations = [
  // 在這裡定義運算類型或題型（如果有需要）
]

export default {
  name: '臺灣基本資料',
  difficulties,
  questionCounts,
  operations
}
