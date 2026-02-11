// src/data/index.js
// 學期課程資料結構 - 15週 x 5天

import week01 from './weeks/week01'
import week02 from './weeks/week02'
import week03 from './weeks/week03'
import week04 from './weeks/week04'
import week05 from './weeks/week05'
import week06 from './weeks/week06'
import week07 from './weeks/week07'
import week08 from './weeks/week08'
import week09 from './weeks/week09'
import week10 from './weeks/week10'
import week11 from './weeks/week11'
import week12 from './weeks/week12'
import week13 from './weeks/week13'
import week14 from './weeks/week14'
import week15 from './weeks/week15'

// 週次顏色配置
const weekColors = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
  '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
  '#F8B500', '#00CEC9', '#E17055', '#74B9FF', '#A29BFE'
]

export const weeks = {
  week01: { id: 'week01', name: '第一週', icon: '1️⃣', color: weekColors[0], desc: '基礎複習', days: week01 },
  week02: { id: 'week02', name: '第二週', icon: '2️⃣', color: weekColors[1], desc: '大地與規律', days: week02 },
  week03: { id: 'week03', name: '第三週', icon: '3️⃣', color: weekColors[2], desc: '', days: week03 },
  week04: { id: 'week04', name: '第四週', icon: '4️⃣', color: weekColors[3], desc: '', days: week04 },
  week05: { id: 'week05', name: '第五週', icon: '5️⃣', color: weekColors[4], desc: '', days: week05 },
  week06: { id: 'week06', name: '第六週', icon: '6️⃣', color: weekColors[5], desc: '', days: week06 },
  week07: { id: 'week07', name: '第七週', icon: '7️⃣', color: weekColors[6], desc: '', days: week07 },
  week08: { id: 'week08', name: '第八週', icon: '8️⃣', color: weekColors[7], desc: '期中複習', days: week08 },
  week09: { id: 'week09', name: '第九週', icon: '9️⃣', color: weekColors[8], desc: '', days: week09 },
  week10: { id: 'week10', name: '第十週', icon: '🔟', color: weekColors[9], desc: '', days: week10 },
  week11: { id: 'week11', name: '第十一週', icon: '1️⃣1️⃣', color: weekColors[10], desc: '', days: week11 },
  week12: { id: 'week12', name: '第十二週', icon: '1️⃣2️⃣', color: weekColors[11], desc: '', days: week12 },
  week13: { id: 'week13', name: '第十三週', icon: '1️⃣3️⃣', color: weekColors[12], desc: '', days: week13 },
  week14: { id: 'week14', name: '第十四週', icon: '1️⃣4️⃣', color: weekColors[13], desc: '', days: week14 },
  week15: { id: 'week15', name: '第十五週', icon: '1️⃣5️⃣', color: weekColors[14], desc: '期末複習', days: week15 },
}

// 取得週資料
export const getWeek = (weekId) => weeks[weekId]

// 取得天資料
export const getDay = (weekId, dayId) => weeks[weekId]?.days?.[dayId]

// 取得單元資料
export const getUnit = (weekId, dayId, unitId) => {
  const day = getDay(weekId, dayId)
  return day?.units?.find(u => u.id === unitId)
}

export default weeks
