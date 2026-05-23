// src/pages/bridge/chinese/BridgeChineseUnit.jsx
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect, Suspense, lazy } from 'react'
import { supabase } from '../../../lib/supabase'

const SUBJECT_ID = 'a1000000-0000-0000-0000-000000000002'

const UNIT_META = {
  'a5000000-0000-0000-0000-000000000001': { order: 1,  title: '字形辨識',       icon: '🔤' },
  'a5000000-0000-0000-0000-000000000002': { order: 2,  title: '字音辨識',       icon: '🔊' },
  'a5000000-0000-0000-0000-000000000003': { order: 3,  title: '字義辨識',       icon: '📖' },
  'a5000000-0000-0000-0000-000000000004': { order: 4,  title: '形音義綜合',     icon: '🗂️' },
  'a5000000-0000-0000-0000-000000000005': { order: 5,  title: '語詞運用',       icon: '💬' },
  'a5000000-0000-0000-0000-000000000006': { order: 6,  title: '成語',           icon: '📜' },
  'a5000000-0000-0000-0000-000000000007': { order: 7,  title: '語詞成語綜合',   icon: '🧩' },
  'a5000000-0000-0000-0000-000000000008': { order: 8,  title: '語文常識（一）', icon: '📚' },
  'a5000000-0000-0000-0000-000000000009': { order: 9,  title: '語文常識（二）', icon: '🗓️' },
  'a5000000-0000-0000-0000-000000000010': { order: 10, title: '國學常識',       icon: '🏛️' },
  'a5000000-0000-0000-0000-000000000011': { order: 11, title: '閱讀理解',       icon: '📝' },
}

// 單元 UUID → 對應的 unit 檔案編號
const UNIT_ORDER_MAP = {
  'a5000000-0000-0000-0000-000000000001': '01',
  'a5000000-0000-0000-0000-000000000002': '02',
  'a5000000-0000-0000-0000-000000000003': '03',
  'a5000000-0000-0000-0000-000000000004': '04',
  'a5000000-0000-0000-0000-000000000005': '05',
  'a5000000-0000-0000-0000-000000000006': '06',
  'a5000000-0000-0000-0000-000000000007': '07',
  'a5000000-0000-0000-0000-000000000008': '08',
  'a5000000-0000-0000-0000-000000000009': '09',
  'a5000000-0000-0000-0000-000000000010': '10',
  'a5000000-0000-0000-0000-000000000011': '11',
}

// lazy import：只在點進該單元時才載入對應檔案
const unitComponents = {
  '01': lazy(() => import('./units/ChineseUnit01')),
  '02': lazy(() => import('./units/ChineseUnit02')),
  '03': lazy(() => import('./units/ChineseUnit03')),
  '04': lazy(() => import('./units/ChineseUnit04')),
  '05': lazy(() => import('./units/ChineseUnit05')),
  '06': lazy(() => import('./units/ChineseUnit06')),
  '07': lazy(() => import('./units/ChineseUnit07')),
  '08': lazy(() => import('./units/ChineseUnit08')),
  '09': lazy(() => import('./units/ChineseUnit09')),
  '10': lazy(() => import('./units/ChineseUnit10')),
  '11': lazy(() => import('./units/ChineseUnit11')),
}

function LoadingContent() {
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-light)' }}>
      載入中⋯
    </div>
  )
}

export default function BridgeChineseUnit() {
  const navigate = useNavigate()
  const { unitId } = useParams()
  const [questionCount, setQuestionCount] = useState(0)

  const meta = UNIT_META[unitId] || { order: '?', title: '未知單元', icon: '📄' }
  const unitNum = UNIT_ORDER_MAP[unitId]
  const UnitContent = unitNum ? unitComponents[unitNum] : null

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

          <Suspense fallback={<LoadingContent />}>
            {UnitContent ? <UnitContent /> : <LoadingContent />}
          </Suspense>

          {/* 底部按鈕 */}
          <div style={{
            marginTop: '32px', paddingTop: '24px',
            borderTop: '1px solid var(--border)',
            display: 'flex', justifyContent: 'center', gap: '16px'
          }}>
            <button className="btn btn-outline" onClick={() => navigate('/bridge/chinese')}>
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
