// src/config/g7.js
// 七年級複習：唯一需要手寫的設定
// 單元清單不寫在這裡，一律從資料庫 topics → units 讀取

// 每回合題數上限（減少 3C 時間）
export const SESSION_SIZE = 10

// 錯題畢業門檻：連續答對幾次移出錯題本
export const GRADUATE_STREAK = 3

export const G7_SUBJECTS = [
  { key: 'chinese',   label: '國文', icon: '📝', color: '#DC2626', bg: '#FEF2F2', subjectId: '71000000-0000-0000-0000-000000000001', available: false },
  { key: 'english',   label: '英文', icon: '🔤', color: '#7C3AED', bg: '#F5F3FF', subjectId: '71000000-0000-0000-0000-000000000002', available: false },
  { key: 'math',      label: '數學', icon: '🔢', color: '#2563EB', bg: '#EFF6FF', subjectId: '71000000-0000-0000-0000-000000000003', available: false },
  { key: 'geography', label: '地理', icon: '🌏', color: '#059669', bg: '#ECFDF5', subjectId: '71000000-0000-0000-0000-000000000004', available: false },
  { key: 'history',   label: '歷史', icon: '🏛️', color: '#D97706', bg: '#FFFBEB', subjectId: '71000000-0000-0000-0000-000000000005', available: false },
  { key: 'civics',    label: '公民', icon: '⚖️', color: '#0891B2', bg: '#ECFEFF', subjectId: '71000000-0000-0000-0000-000000000006', available: false },
  { key: 'bio',       label: '生物', icon: '🌿', color: '#16A34A', bg: '#F0FDF4', subjectId: '71000000-0000-0000-0000-000000000007', available: true  },
]

export function getG7Subject(key) {
  return G7_SUBJECTS.find(s => s.key === key) || null
}

export const LEVELS = {
  basic:    { label: '基礎', color: '#2563EB', bg: '#EFF6FF' },
  advanced: { label: '精熟', color: '#7C3AED', bg: '#FAF5FF' },
}
