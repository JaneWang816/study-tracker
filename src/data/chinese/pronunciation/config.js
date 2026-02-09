// 國語 - 字音辨識 - 配置檔
// src/data/chinese/pronunciation/config.js

/**
 * 難度設定（語文類型 - 無 max，有 desc）
 */
export const difficulties = [
  { 
    id: 'easy', 
    name: '簡單',
    desc: '常用字、單音字為主'
  },
  { 
    id: 'medium', 
    name: '中等',
    desc: '常見多音字、形似字'
  },
  { 
    id: 'hard', 
    name: '困難',
    desc: '罕見多音字、易錯字、破音字'
  }
]

/**
 * 題數選項
 */
export const questionCounts = [5, 10, 20]

/**
 * 題型分類（使用 categories 而非 operations）
 */
export const categories = [
  { 
    id: 'polyphonic', 
    name: '多音字',
    icon: '🔊',
    desc: '同一個字有多種讀音，如：「樂」可讀ㄌㄜˋ或ㄩㄝˋ'
  },
  { 
    id: 'similar-shape', 
    name: '形似字',
    icon: '👀',
    desc: '字形相似但讀音不同，如：「己」和「已」'
  },
  { 
    id: 'common-errors', 
    name: '易錯字',
    icon: '⚠️',
    desc: '容易讀錯或寫錯的字，如：「糾正」不是「究正」'
  },
  {
    id: 'mixed',
    name: '混合練習',
    icon: '🎯',
    desc: '混合各種題型'
  }
]

export default {
  name: '字音辨識',
  difficulties,
  questionCounts,
  categories  // 注意：這裡是 categories 而非 operations
}
