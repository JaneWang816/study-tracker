// src/data/daily-practice/phonics/config.js
// 自然發音練習設定

export const phonicsConfig = {
  id: 'phonics',
  name: '自然發音',
  icon: '🔤',
  color: '#10B981',
  desc: '聽音選字練習'
}

// 級別定義
export const phonicsLevels = {
  basic: {
    id: 'basic',
    name: '基礎級別',
    icon: '📖',
    color: '#10B981',
    desc: '短母音、長母音',
    categories: [
      { id: 'short-a', name: '短母音 a', sound: '/æ/', example: 'cat' },
      { id: 'short-e', name: '短母音 e', sound: '/ɛ/', example: 'bed' },
      { id: 'short-i', name: '短母音 i', sound: '/ɪ/', example: 'pig' },
      { id: 'short-o', name: '短母音 o', sound: '/ɑ/', example: 'dog' },
      { id: 'short-u', name: '短母音 u', sound: '/ʌ/', example: 'cup' },
      { id: 'long-a', name: '長母音 a_e', sound: '/eɪ/', example: 'cake' },
      { id: 'long-e', name: '長母音 e_e', sound: '/i:/', example: 'these' },
      { id: 'long-i', name: '長母音 i_e', sound: '/aɪ/', example: 'bike' },
      { id: 'long-o', name: '長母音 o_e', sound: '/oʊ/', example: 'home' },
      { id: 'long-u', name: '長母音 u_e', sound: '/ju:/', example: 'cube' },
      { id: 'basic-mixed', name: '✨ 基礎綜合練習', sound: 'All', example: 'mixed', isMixed: true }
    ]
  },
  advanced: {
    id: 'advanced',
    name: '進階級別',
    icon: '📚',
    color: '#F59E0B',
    desc: '雙字母子音、子音組合',
    categories: [
      { id: 'digraph-ch', name: '雙字母 ch', sound: '/tʃ/', example: 'chair' },
      { id: 'digraph-sh', name: '雙字母 sh', sound: '/ʃ/', example: 'ship' },
      { id: 'digraph-th', name: '雙字母 th', sound: '/θ/', example: 'three' },
      { id: 'digraph-wh', name: '雙字母 wh', sound: '/w/', example: 'what' },
      { id: 'digraph-ph', name: '雙字母 ph', sound: '/f/', example: 'phone' },
      { id: 'blend-bl', name: '子音組合 bl/cl/fl/pl', sound: 'bl-', example: 'black' },
      { id: 'blend-br', name: '子音組合 br/cr/dr/fr', sound: 'br-', example: 'brown' },
      { id: 'blend-st', name: '子音組合 st/sp/sn/sm', sound: 'st-', example: 'stop' },
      { id: 'advanced-mixed', name: '✨ 進階綜合練習', sound: 'All', example: 'mixed', isMixed: true }
    ]
  },
  all: {
    id: 'all',
    name: '全部綜合',
    icon: '🎯',
    color: '#8B5CF6',
    desc: '基礎 + 進階混合練習',
    categories: [
      { id: 'all-mixed', name: '✨ 全部綜合練習', sound: 'All Levels', example: 'mixed', isMixed: true }
    ]
  }
}

// 取得級別
export const getLevel = (levelId) => phonicsLevels[levelId]

// 取得分類
export const getCategory = (levelId, categoryId) => {
  const level = phonicsLevels[levelId]
  return level?.categories?.find(c => c.id === categoryId)
}

export default phonicsConfig
