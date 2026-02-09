// 國語科目
// src/data/chinese/index.js

import pronunciation from './pronunciation'

export const chineseModules = {
  pronunciation: {
    id: 'pronunciation',
    name: '字音辨識',
    icon: '🔊',
    color: '#4ECDC4',
    desc: '多音字、形似字、易錯字的讀音辨識',
    ...pronunciation
  }
  // TODO: 新增其他國語模組（字形、成語、修辭等）
}

export default chineseModules
