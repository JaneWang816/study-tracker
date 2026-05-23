// src/pages/bridge/chinese/units/ChineseUnit01.jsx
// 第1單元：字形辨識 — 知識整理

const GROUPS = [
  {
    chars: ['斃', '幣', '弊'],
    rows: [
      { char: '斃', zhuyin: 'ㄅㄧˋ', meaning: '指「死亡」', example: '坐以待「斃」、槍「斃」' },
      { char: '幣', zhuyin: 'ㄅㄧˋ', meaning: '錢，用來交易的媒介', example: '錢「幣」、銀「幣」' },
      { char: '弊', zhuyin: 'ㄅㄧˋ', meaning: '非法的情事', example: '作「弊」、「弊」端、工程舞「弊」' },
    ]
  },
  {
    chars: ['締', '諦'],
    rows: [
      { char: '締', zhuyin: 'ㄉㄧˋ', meaning: '結合、訂立／禁止、制止', example: '「締」結、「締」約／取「締」' },
      { char: '諦', zhuyin: 'ㄉㄧˋ', meaning: '道理、義理／仔細、詳細', example: '真「諦」／「諦」聽' },
    ]
  },
  {
    chars: ['密', '蜜'],
    rows: [
      { char: '密', zhuyin: 'ㄇㄧˋ', meaning: '不應洩露的事情', example: '祕「密」、保「密」、守「密」' },
      { char: '蜜', zhuyin: 'ㄇㄧˋ', meaning: '採花液釀成的甜汁／甜美、幸福的事', example: '蜂「蜜」／甜「蜜」' },
    ]
  },
  {
    chars: ['揠', '堰', '偃'],
    rows: [
      { char: '揠', zhuyin: 'ㄧㄚˋ', meaning: '拉、拔', example: '「揠」苗助長' },
      { char: '堰', zhuyin: 'ㄧㄢˋ', meaning: '攔水的土堤', example: '都江「堰」' },
      { char: '偃', zhuyin: 'ㄧㄢˇ', meaning: '仆倒、倒伏', example: '風行草「偃」、「偃」旗息鼓' },
    ]
  },
  {
    chars: ['衷', '哀', '衰'],
    rows: [
      { char: '衷', zhuyin: 'ㄓㄨㄥ', meaning: '內心', example: '「衷」心、由「衷」' },
      { char: '哀', zhuyin: 'ㄞ',     meaning: '悲傷、心裡難過', example: '「哀」傷、悲「哀」' },
      { char: '衰', zhuyin: 'ㄕㄨㄞ', meaning: '由強盛而逐漸弱敗', example: '「衰」弱、「衰」敗' },
    ]
  },
  {
    chars: ['績', '積', '蹟', '漬', '噴'],
    rows: [
      { char: '績', zhuyin: 'ㄐㄧˋ', meaning: '成效、成果', example: '成「績」、「績」效' },
      { char: '積', zhuyin: 'ㄐㄧ',  meaning: '累聚、聚集', example: '累「積」、堆「積」' },
      { char: '蹟', zhuyin: 'ㄐㄧˋ', meaning: '遺址／事物留下的遺痕', example: '名勝古「蹟」／事「蹟」' },
      { char: '漬', zhuyin: 'ㄗˋ',   meaning: '汙點／浸泡', example: '油「漬」、汙「漬」／醃「漬」' },
      { char: '噴', zhuyin: 'ㄆㄣ',  meaning: '發出讚美的聲音（狀聲詞）', example: '「噴噴」稱奇' },
    ]
  },
  {
    chars: ['躁', '燥', '噪'],
    rows: [
      { char: '躁', zhuyin: 'ㄗㄠˋ', meaning: '心情擾動而不平靜', example: '急「躁」、焦「躁」、心煩氣「躁」' },
      { char: '燥', zhuyin: 'ㄗㄠˋ', meaning: '枯乾、缺乏水分', example: '乾「燥」、「燥」熱、枯「燥」乏味' },
      { char: '噪', zhuyin: 'ㄗㄠˋ', meaning: '喧鬧、嘈雜', example: '鼓「噪」、「噪」音' },
    ]
  },
  {
    chars: ['慕', '募', '墓', '幕', '暮', '摹'],
    rows: [
      { char: '慕', zhuyin: 'ㄇㄨˋ', meaning: '心中有所悸動、望想', example: '羨「慕」、仰「慕」、愛「慕」' },
      { char: '募', zhuyin: 'ㄇㄨˋ', meaning: '廣求、召集', example: '「募」款、「募」集' },
      { char: '墓', zhuyin: 'ㄇㄨˋ', meaning: '埋葬死者的地方', example: '填「墓」、「墓」地' },
      { char: '幕', zhuyin: 'ㄇㄨˋ', meaning: '遮蔽空間的布料', example: '帷「幕」、開「幕」' },
      { char: '暮', zhuyin: 'ㄇㄨˋ', meaning: '每季第三個月／傍晚', example: '「暮」春／朝思「暮」想' },
      { char: '摹', zhuyin: 'ㄇㄨˊ', meaning: '仿效、模擬', example: '臨「摹」、「摹」寫、描「摹」' },
    ]
  },
  {
    chars: ['瑣', '鎖'],
    rows: [
      { char: '鎖', zhuyin: 'ㄙㄨㄛˇ', meaning: '古時捽在犯人腳踝的刑具／金屬鎖具', example: '枷「鎖」／「鎖」匙' },
      { char: '瑣', zhuyin: 'ㄙㄨㄛˇ', meaning: '細小、細微', example: '「瑣」碎、「瑣」事' },
    ]
  },
  {
    chars: ['坊', '訪', '防', '彷', '妨'],
    rows: [
      { char: '坊', zhuyin: 'ㄈㄤ',  meaning: '街巷、里巷', example: '街「坊」鄰居' },
      { char: '訪', zhuyin: 'ㄈㄤˇ', meaning: '探問、查詢', example: '拜「訪」、採「訪」' },
      { char: '防', zhuyin: 'ㄈㄤˊ', meaning: '守備、防衛', example: '「防」備、國「防」' },
      { char: '彷', zhuyin: 'ㄈㄤˇ', meaning: '模仿、學習別人的樣子', example: '模「彷」' },
      { char: '妨', zhuyin: 'ㄈㄤˊ', meaning: '損害、傷害', example: '「妨」害' },
    ]
  },
]

const thStyle = {
  padding: '10px 14px', textAlign: 'left',
  fontWeight: 700, fontSize: '13px', color: '#64748B',
  background: '#F8FAFC'
}
const tdStyle = {
  padding: '10px 14px', verticalAlign: 'top',
  lineHeight: '1.6', color: '#334155',
  borderTop: '1px solid #E2E8F0'
}

export default function ChineseUnit01() {
  return (
    <div>
      <div style={{
        background: '#FFF7ED', border: '1px solid #FED7AA',
        borderRadius: '12px', padding: '14px 18px', marginBottom: '24px',
        fontSize: '14px', color: '#92400E', lineHeight: '1.7'
      }}>
        💡 形似字容易混淆，建議先看「字義」再記「字形」，理解意思後更不容易寫錯。
      </div>

      {GROUPS.map((group, gi) => (
        <div key={gi} style={{ marginBottom: '28px' }}>
          <div style={{ marginBottom: '10px' }}>
            <span style={{
              background: '#EFF6FF', color: '#1D4ED8',
              fontSize: '13px', fontWeight: 700,
              padding: '3px 14px', borderRadius: '20px'
            }}>
              《{group.chars.join('、')}》
            </span>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%', borderCollapse: 'collapse',
              fontSize: '14px', background: 'white',
              border: '1px solid #E2E8F0', borderRadius: '10px',
              overflow: 'hidden'
            }}>
              <thead>
                <tr>
                  <th style={thStyle}>國字</th>
                  <th style={thStyle}>注音</th>
                  <th style={thStyle}>字義</th>
                  <th style={thStyle}>舉例</th>
                </tr>
              </thead>
              <tbody>
                {group.rows.map((row, ri) => (
                  <tr key={ri}>
                    <td style={{ ...tdStyle, fontWeight: 700, fontSize: '22px', textAlign: 'center', color: '#1E293B' }}>
                      {row.char}
                    </td>
                    <td style={{ ...tdStyle, textAlign: 'center', color: '#7C3AED', fontWeight: 600, whiteSpace: 'nowrap' }}>
                      {row.zhuyin}
                    </td>
                    <td style={tdStyle}>{row.meaning}</td>
                    <td style={{ ...tdStyle, color: '#475569' }}>{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  )
}
