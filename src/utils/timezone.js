// 台灣時區工具函數 (UTC+8)

/**
 * 取得台灣時間的 ISO 字串
 * @returns {string} ISO 格式時間字串
 */
export const getTaiwanISOString = () => {
  const now = new Date()
  const taiwanOffset = 8 * 60 // UTC+8 的分鐘數
  const localOffset = now.getTimezoneOffset() // 本地時區偏移（分鐘，西邊為正）
  const taiwanTime = new Date(now.getTime() + (taiwanOffset + localOffset) * 60 * 1000)
  return taiwanTime.toISOString()
}

/**
 * 取得台灣時間的日期字串 YYYY-MM-DD
 * @returns {string} 日期字串
 */
export const getTaiwanDateString = () => {
  const now = new Date()
  const taiwanOffset = 8 * 60
  const localOffset = now.getTimezoneOffset()
  const taiwanTime = new Date(now.getTime() + (taiwanOffset + localOffset) * 60 * 1000)
  const year = taiwanTime.getFullYear()
  const month = String(taiwanTime.getMonth() + 1).padStart(2, '0')
  const day = String(taiwanTime.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

/**
 * 取得台灣時間的 Date 物件
 * @returns {Date} 調整為台灣時間的 Date 物件
 */
export const getTaiwanDate = () => {
  const now = new Date()
  const taiwanOffset = 8 * 60
  const localOffset = now.getTimezoneOffset()
  return new Date(now.getTime() + (taiwanOffset + localOffset) * 60 * 1000)
}

/**
 * 取得台灣時間的格式化字串
 * @returns {string} 格式：YYYY/MM/DD HH:mm:ss
 */
export const getTaiwanFormattedString = () => {
  const taiwanTime = getTaiwanDate()
  const year = taiwanTime.getFullYear()
  const month = String(taiwanTime.getMonth() + 1).padStart(2, '0')
  const day = String(taiwanTime.getDate()).padStart(2, '0')
  const hour = String(taiwanTime.getHours()).padStart(2, '0')
  const minute = String(taiwanTime.getMinutes()).padStart(2, '0')
  const second = String(taiwanTime.getSeconds()).padStart(2, '0')
  return `${year}/${month}/${day} ${hour}:${minute}:${second}`
}
