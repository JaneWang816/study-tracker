// src/pages/g7/fill.js
// 七年級填充題（fill_in_blank）共用工具：作答頁與家長報表都會用到
//
// 資料格式：
//   options = null
//   answer  = 每一格的可接受答案陣列，例：[["uncle"]]、[["How"],["old"]]、[["Thanks","Thank you"]]
//   題幹用 ___ 標出空格（只是顯示用，格數以 answer 為準）

export const FILL = '5a088857-2e94-49af-acc7-fce1a12e9e07'

export const isFill = q => q?.question_type_id === FILL

// answer 欄位可能是 jsonb（已解析）或字串
export function parseBlanks(answer) {
  let v = answer
  for (let i = 0; i < 2 && typeof v === 'string'; i++) {
    try { v = JSON.parse(v) } catch { break }
  }
  if (!Array.isArray(v)) return null
  return v.map(b => (Array.isArray(b) ? b : [b]).map(String))
}

// 比對前的整理：全形轉半形、彎引號轉直引號、壓縮空白、去掉句尾標點
function clean(s) {
  return String(s ?? '')
    .normalize('NFKC')
    .replace(/[‘’ʼ`´]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[.!?。！？]+$/, '')
}

// 單格判定：不分大小寫；caseOk 表示大小寫也完全一致
export function checkBlank(accepted, typed) {
  const t = clean(typed)
  const hit = accepted.find(a => clean(a).toLowerCase() === t.toLowerCase())
  return { ok: !!hit, caseOk: !!hit && accepted.some(a => clean(a) === t) }
}

export function checkFill(blanks, typed) {
  const res = blanks.map((acc, i) => checkBlank(acc, typed[i]))
  return { ok: res.every(r => r.ok), caseOk: res.every(r => r.caseOk), perBlank: res }
}

// 顯示用：每格取第一個答案，多格以「／」分隔
export const fillAnswerText = blanks => blanks.map(b => b[0]).join('／')
