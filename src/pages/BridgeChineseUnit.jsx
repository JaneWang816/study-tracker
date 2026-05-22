// src/pages/BridgeChineseUnit.jsx
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

const SUBJECT_ID = 'a1000000-0000-0000-0000-000000000002'

const UNIT_META = {
  'a5000000-0000-0000-0000-000000000001': { order: 1, title: '字形辨識', icon: '🔤' },
  'a5000000-0000-0000-0000-000000000002': { order: 2, title: '字音辨識', icon: '🔊' },
  'a5000000-0000-0000-0000-000000000003': { order: 3, title: '字義辨識', icon: '📖' },
  'a5000000-0000-0000-0000-000000000004': { order: 4, title: '形音義綜合', icon: '🗂️' },
  'a5000000-0000-0000-0000-000000000005': { order: 5, title: '語詞運用', icon: '💬' },
  'a5000000-0000-0000-0000-000000000006': { order: 6, title: '成語', icon: '📜' },
  'a5000000-0000-0000-0000-000000000007': { order: 7, title: '語詞成語綜合', icon: '🧩' },
  'a5000000-0000-0000-0000-000000000008': { order: 8, title: '語文常識（一）', icon: '📚' },
  'a5000000-0000-0000-0000-000000000009': { order: 9, title: '語文常識（二）', icon: '🗓️' },
  'a5000000-0000-0000-0000-000000000010': { order: 10, title: '國學常識', icon: '🏛️' },
  'a5000000-0000-0000-0000-000000000011': { order: 11, title: '閱讀理解', icon: '📝' },
}

// ── 第1單元：字形辨識 知識整理 ──────────────────────────────────
const UNIT1_GROUPS = [
  {
    chars: ['斃', '幣', '弊', '獘'],
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
      { char: '蜜', zhuyin: 'ㄇㄧˋ', meaning: '採花液釀成的甜汁／指甜美、幸福的事', example: '蜂「蜜」／甜「蜜」' },
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
      { char: '哀', zhuyin: 'ㄞ', meaning: '悲傷、心裡難過', example: '「哀」傷、悲「哀」' },
      { char: '衰', zhuyin: 'ㄕㄨㄞ', meaning: '由強盛而逐漸弱敗', example: '「衰」弱、「衰」敗' },
    ]
  },
  {
    chars: ['績', '積', '漬', '噴', '蹟'],
    rows: [
      { char: '績', zhuyin: 'ㄐㄧ', meaning: '成效、成果', example: '成「績」、「績」效' },
      { char: '積', zhuyin: 'ㄐㄧ', meaning: '累聚、聚集', example: '累「積」、堆「積」' },
      { char: '蹟', zhuyin: 'ㄐㄧ', meaning: '遺址／事物留下的遺痕', example: '名勝古「蹟」／事「蹟」' },
      { char: '漬', zhuyin: 'ㄗˋ', meaning: '汙點／浸泡', example: '油「漬」、汙「漬」／醃「漬」' },
      { char: '噴', zhuyin: 'ㄆㄣ', meaning: '發出讚美的聲音', example: '「噴噴」稱奇' },
    ]
  },
  {
    chars: ['躁', '燥', '噪'],
    rows: [
      { char: '躁', zhuyin: 'ㄗㄠˋ', meaning: '指心情擾動而不平靜', example: '急「躁」、焦「躁」、心煩氣「躁」' },
      { char: '燥', zhuyin: 'ㄗㄠˋ', meaning: '枯乾、缺乏水分的', example: '乾「燥」、「燥」熱、枯「燥」乏味' },
      { char: '噪', zhuyin: 'ㄗㄠˋ', meaning: '喧鬧、嘈雜', example: '鼓「噪」、「噪」音' },
    ]
  },
  {
    chars: ['慕', '募', '墓', '幕', '暮', '摹'],
    rows: [
      { char: '慕', zhuyin: 'ㄇㄨˋ', meaning: '心中有所悸動、望想', example: '羨「慕」、仰「慕」、愛「慕」' },
      { char: '募', zhuyin: 'ㄇㄨˋ', meaning: '廣求、召集', example: '「募」款、「募」集' },
      { char: '墓', zhuyin: 'ㄇㄨˋ', meaning: '埋葬死者的地方', example: '填「墓」、「墓」地' },
      { char: '幕', zhuyin: 'ㄇㄨˋ', meaning: '通常用來遮蔽空間的布料', example: '帷「幕」、開「幕」' },
      { char: '暮', zhuyin: 'ㄇㄨˋ', meaning: '每一季的第三個月／傍晚', example: '「暮」春／朝思「暮」想' },
      { char: '摹', zhuyin: 'ㄇㄛˊ', meaning: '仿效、模擬', example: '臨「摹」、「摹」寫、描「摹」' },
    ]
  },
  {
    chars: ['瑣', '鎖'],
    rows: [
      { char: '鎖', zhuyin: 'ㄙㄨㄛˇ', meaning: '古時捽在犯人腳踝的刑具／須用鑰匙或密碼打開的金屬器具', example: '枷「鎖」／「鎖」匙' },
      { char: '瑣', zhuyin: 'ㄙㄨㄛˇ', meaning: '細小、細微', example: '「瑣」碎、「瑣」事' },
    ]
  },
  {
    chars: ['坊', '訪', '防', '彷', '妨'],
    rows: [
      { char: '坊', zhuyin: 'ㄈㄤ', meaning: '街巷鄰居──里巷', example: '街「坊」鄰居' },
      { char: '訪', zhuyin: 'ㄈㄤˇ', meaning: '探問、查詢', example: '拜「訪」、採「訪」' },
      { char: '防', zhuyin: 'ㄈㄤˊ', meaning: '守備', example: '「防」備、國「防」' },
      { char: '彷', zhuyin: 'ㄈㄤˇ', meaning: '模仿、學習別人的模樣', example: '模「彷」' },
      { char: '妨', zhuyin: 'ㄈㄤˊ', meaning: '損害、傷害', example: '「妨」害' },
    ]
  },
]

// ── 各單元知識整理元件 ─────────────────────────────────────────
function Unit1Content() {
  return (
    <div>
      <div style={{
        background: '#FFF7ED', border: '1px solid #FED7AA',
        borderRadius: '12px', padding: '14px 18px', marginBottom: '24px',
        fontSize: '14px', color: '#92400E'
      }}>
        💡 形似字容易混淆，建議先看「字義」再記「字形」，理解意思後更不容易寫錯。
      </div>

      {UNIT1_GROUPS.map((group, gi) => (
        <div key={gi} style={{ marginBottom: '28px' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            marginBottom: '10px'
          }}>
            <span style={{
              background: '#EFF6FF', color: '#1D4ED8',
              fontSize: '13px', fontWeight: 700,
              padding: '3px 12px', borderRadius: '20px'
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
                <tr style={{ background: '#F8FAFC' }}>
                  <th style={thStyle}>國字</th>
                  <th style={thStyle}>注音</th>
                  <th style={thStyle}>字義</th>
                  <th style={thStyle}>舉例</th>
                </tr>
              </thead>
              <tbody>
                {group.rows.map((row, ri) => (
                  <tr key={ri} style={{ borderTop: '1px solid #E2E8F0' }}>
                    <td style={{ ...tdStyle, fontWeight: 700, fontSize: '20px', textAlign: 'center', color: '#1E293B' }}>
                      {row.char}
                    </td>
                    <td style={{ ...tdStyle, textAlign: 'center', color: '#7C3AED', fontWeight: 600 }}>
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

const thStyle = {
  padding: '10px 14px', textAlign: 'left',
  fontWeight: 700, fontSize: '13px', color: '#64748B'
}
const tdStyle = {
  padding: '10px 14px', verticalAlign: 'top',
  lineHeight: '1.6', color: '#334155'
}

function ComingSoon({ title }) {
  return (
    <div style={{
      textAlign: 'center', padding: '60px 20px',
      color: 'var(--text-light)'
    }}>
      <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚧</div>
      <p style={{ fontSize: '16px' }}>《{title}》知識整理準備中</p>
    </div>
  )
}

const UNIT_CONTENT = {
  'a5000000-0000-0000-0000-000000000001': <Unit1Content />,
}

// ── 主元件 ────────────────────────────────────────────────────
export default function BridgeChineseUnit() {
  const navigate = useNavigate()
  const { unitId } = useParams()
  const [questionCount, setQuestionCount] = useState(0)
  const meta = UNIT_META[unitId] || { order: '?', title: '未知單元', icon: '📄' }

  useEffect(() => {
    fetchQuestionCount()
  }, [unitId])

  async function fetchQuestionCount() {
    const { count } = await supabase
      .from('questions')
      .select('id', { count: 'exact', head: true })
      .eq('subject_id', SUBJECT_ID)
      .eq('unit_id', unitId)
    setQuestionCount(count || 0)
  }

  const content = UNIT_CONTENT[unitId] || <ComingSoon title={meta.title} />

  return (
    <div className="page-container">
      <header className="page-header">
        <button className="btn-back" onClick={() => navigate('/bridge/chinese')}>← 返回</button>
        <div className="header-content center">
          <h1>{meta.icon} 第{meta.order}單元　{meta.title}</h1>
          <p>知識整理</p>
        </div>
      </header>

      <main className="main-content">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>

          {content}

          {/* 底部：開始練習按鈕 */}
          <div style={{
            marginTop: '32px', paddingTop: '24px',
            borderTop: '1px solid var(--border)',
            display: 'flex', justifyContent: 'center', gap: '16px'
          }}>
            <button
              className="btn btn-outline"
              onClick={() => navigate('/bridge/chinese')}
            >
              ← 返回單元列表
            </button>
            {questionCount > 0 && (
              <button
                className="btn btn-primary"
                onClick={() => navigate(`/bridge/chinese/practice/${unitId}`)}
              >
                開始練習（{questionCount} 題）✏️
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
