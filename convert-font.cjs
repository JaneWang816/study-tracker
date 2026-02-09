const fs = require('fs')

const fontPath = './NotoSansTC-Regular.ttf'

if (!fs.existsSync(fontPath)) {
  console.error('找不到字體檔案！請把 NotoSansTC-Regular.ttf 放到專案根目錄')
  process.exit(1)
}

const fontBuffer = fs.readFileSync(fontPath)
const base64Font = fontBuffer.toString('base64')

const output = `// Noto Sans TC 字體 (Base64)
// 此檔案由 convert-font.js 自動生成
export const notoSansTCBase64 = "${base64Font}"
`

fs.writeFileSync('./src/utils/notoSansTC.js', output)
console.log('✅ 字體轉換完成！已生成 src/utils/notoSansTC.js')