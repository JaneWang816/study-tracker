// src/pages/g7/G7AddQuestion.jsx
// 七年級：新增考試錯題（文字格式，單選／是非）
// 新增的題目帶有 exam_source（例如「第一次段考」），對每位使用者一開始就在錯題本中
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import { getG7Subject, G7_EDITOR_IDS } from '../../config/g7'

const SC = 'b77ce8e8-b304-4028-9b7b-d06a619ac85d'   // 單選
const TF = 'd64e039c-19c5-435b-b29f-7aa2a67b0729'   // 是非

const emptyForm = (keep = {}) => ({
  unitId: keep.unitId || '',
  source: keep.source || '',
  type: 'single',
  content: '',
  options: ['', '', '', ''],
  correct: null,          // 單選：正解的索引；是非：0=正確、1=錯誤
  explanation: '',
  difficulty: 'advanced',
  imageFile: null,
})

export default function G7AddQuestion() {
  const navigate = useNavigate()
  const { subject } = useParams()
  const meta = getG7Subject(subject)
  const { user } = useAuth()

  const [units, setUnits] = useState([])       // [{ id, title, topic_id, topicTitle }]
  const [form, setForm] = useState(emptyForm())
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState(null)
  const [recent, setRecent] = useState([])
  const [fileKey, setFileKey] = useState(0)    // 用來清空檔案欄位

  useEffect(() => { if (meta) { loadUnits(); loadRecent() } }, [subject])

  async function loadUnits() {
    const { data: topics } = await supabase.from('topics').select('id, title, order').eq('subject_id', meta.subjectId).order('order')
    const ids = (topics || []).map(t => t.id)
    if (!ids.length) return
    const { data: us } = await supabase.from('units').select('id, title, order, topic_id').in('topic_id', ids).order('order')
    const topicTitle = Object.fromEntries(topics.map(t => [t.id, t.title]))
    const order = Object.fromEntries(topics.map(t => [t.id, t.order]))
    setUnits((us || [])
      .map(u => ({ ...u, topicTitle: topicTitle[u.topic_id] }))
      .sort((a, b) => order[a.topic_id] - order[b.topic_id] || a.order - b.order))
  }

  async function loadRecent() {
    const { data } = await supabase.from('questions')
      .select('id, content, exam_source, unit_id, created_at')
      .eq('subject_id', meta.subjectId)
      .not('exam_source', 'is', null)
      .order('created_at', { ascending: false })
      .limit(20)
    setRecent(data || [])
  }

  function showToast(msg, type = 'success') {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3000)
  }

  function set(field, value) { setForm(f => ({ ...f, [field]: value })) }

  function setOption(i, value) {
    setForm(f => ({ ...f, options: f.options.map((o, j) => j === i ? value : o) }))
  }

  function removeOption(i) {
    setForm(f => {
      const options = f.options.filter((_, j) => j !== i)
      let correct = f.correct
      if (correct === i) correct = null
      else if (correct !== null && correct > i) correct -= 1
      return { ...f, options, correct }
    })
  }

  function validate() {
    if (!form.unitId) return '請選擇單元'
    if (!form.source.trim()) return '請輸入出處（例如：第一次段考）'
    if (!form.content.trim()) return '請輸入題目'
    if (form.type === 'single') {
      const filled = form.options.map(o => o.trim())
      if (filled.some(o => !o)) return '選項不能空白（不需要的選項請刪除）'
      if (filled.length < 2) return '至少需要 2 個選項'
      if (new Set(filled).size !== filled.length) return '選項不能重複'
    }
    if (form.correct === null) return form.type === 'single' ? '請勾選正確答案' : '請選擇這個敘述是正確還是錯誤'
    return null
  }

  async function uploadImage(file) {
    const ext = file.name.split('.').pop().toLowerCase()
    const path = `g7/${subject}/exam/${Date.now()}.${ext}`
    const { error } = await supabase.storage.from('questions').upload(path, file)
    if (error) throw new Error('圖片上傳失敗：' + error.message)
    return supabase.storage.from('questions').getPublicUrl(path).data.publicUrl
  }

  async function handleSave() {
    const err = validate()
    if (err) { showToast(err, 'error'); return }
    setSaving(true)
    try {
      const unit = units.find(u => u.id === form.unitId)
      const imageUrl = form.imageFile ? await uploadImage(form.imageFile) : null

      // 單選：正解移到第一個（作答頁會打亂），answer 一律 "0"
      let options, answer
      if (form.type === 'single') {
        const opts = form.options.map(o => o.trim())
        options = [opts[form.correct], ...opts.filter((_, i) => i !== form.correct)]
        answer = '0'
      } else {
        options = ['正確', '錯誤']
        answer = String(form.correct)
      }

      const source = form.source.trim()
      const expl = form.explanation.trim()
      const explanation = [expl, `【出處】${source}`].filter(Boolean).join('\n')

      const { error } = await supabase.from('questions').insert({
        user_id: user.id,
        subject_id: meta.subjectId,
        topic_id: unit.topic_id,
        unit_id: unit.id,
        question_type_id: form.type === 'single' ? SC : TF,
        content: form.content.trim(),
        options,
        answer,
        explanation,
        image_url: imageUrl,
        difficulty: form.difficulty,
        order: 0,
        is_group: false,
        exam_source: source,
      })
      if (error) throw new Error(error.message)

      showToast('已新增，並放進錯題本')
      setForm(emptyForm({ unitId: form.unitId, source: form.source }))   // 保留單元與出處，方便連續輸入
      setFileKey(k => k + 1)
      loadRecent()
    } catch (e) {
      showToast(e.message, 'error')
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(q) {
    if (!window.confirm(`確定刪除這題？\n\n${q.content.slice(0, 40)}`)) return
    const { error } = await supabase.from('questions').delete().eq('id', q.id)
    if (error) { showToast('刪除失敗：' + error.message, 'error'); return }
    showToast('已刪除')
    loadRecent()
  }

  if (!meta || !user) return null
  if (!G7_EDITOR_IDS.includes(user.id)) {
    return (
      <div className="page-container">
        <main className="main-content" style={{ textAlign: 'center', paddingTop: '80px' }}>
          <p style={{ marginBottom: '24px' }}>只有管理者可以新增題目</p>
          <button className="btn btn-primary" onClick={() => navigate(`/g7/${subject}`)}>回到單元列表</button>
        </main>
      </div>
    )
  }

  const unitTitle = Object.fromEntries(units.map(u => [u.id, u.title]))

  return (
    <div className="page-container">
      <header className="page-header">
        <button className="btn-back" onClick={() => navigate(`/g7/${subject}`)}>← 返回</button>
        <div className="header-content center">
          <h1>➕ 新增考試題</h1>
          <p>七年級{meta.label}．新增後會直接放進錯題本</p>
        </div>
      </header>

      <main className="main-content">
        <div style={{ maxWidth: '640px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Card>
            <Row label="單元">
              <select value={form.unitId} onChange={e => set('unitId', e.target.value)} style={inputStyle}>
                <option value="">請選擇單元</option>
                {units.map(u => <option key={u.id} value={u.id}>{u.topicTitle}．{u.title}</option>)}
              </select>
            </Row>
            <Row label="出處">
              <input value={form.source} onChange={e => set('source', e.target.value)}
                placeholder="例如：第一次段考、第3週小考" style={inputStyle} />
            </Row>
            <Row label="題型">
              <Segmented value={form.type} color={meta.color}
                options={[['single', '單選'], ['tf', '是非']]}
                onChange={v => setForm(f => ({ ...f, type: v, correct: null }))} />
            </Row>
            <Row label="難度">
              <Segmented value={form.difficulty} color={meta.color}
                options={[['basic', '基礎'], ['advanced', '精熟']]}
                onChange={v => set('difficulty', v)} />
            </Row>
          </Card>

          <Card>
            <Row label={form.type === 'single' ? '題目' : '敘述'}>
              <textarea value={form.content} onChange={e => set('content', e.target.value)} rows={4}
                placeholder={form.type === 'single' ? '輸入題目內容' : '輸入要判斷對錯的敘述'} style={{ ...inputStyle, resize: 'vertical' }} />
            </Row>
            <Row label="圖片">
              <input key={fileKey} type="file" accept="image/*"
                onChange={e => set('imageFile', e.target.files?.[0] || null)} style={{ fontSize: '14px' }} />
            </Row>
          </Card>

          <Card>
            {form.type === 'single' ? (
              <>
                <div style={labelStyle}>選項（點左邊圓圈標記正確答案，儲存時會自動打亂）</div>
                {form.options.map((opt, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <input type="radio" name="correct" checked={form.correct === i} onChange={() => set('correct', i)}
                      style={{ width: '20px', height: '20px', accentColor: '#16A34A', flexShrink: 0 }} />
                    <input value={opt} onChange={e => setOption(i, e.target.value)} placeholder={`選項 ${i + 1}`}
                      style={{ ...inputStyle, borderColor: form.correct === i ? '#16A34A' : 'var(--border)' }} />
                    {form.options.length > 2 && (
                      <button onClick={() => removeOption(i)} title="刪除這個選項"
                        style={{ border: 'none', background: 'none', color: '#94A3B8', fontSize: '18px', cursor: 'pointer' }}>✕</button>
                    )}
                  </div>
                ))}
                {form.options.length < 5 && (
                  <button onClick={() => set('options', [...form.options, ''])}
                    style={{ border: '1px dashed var(--border)', background: 'none', borderRadius: '8px', padding: '6px 12px', color: 'var(--text-light)', cursor: 'pointer' }}>
                    ＋ 新增選項
                  </button>
                )}
              </>
            ) : (
              <Row label="答案">
                <Segmented value={form.correct} color="#16A34A"
                  options={[[0, '正確'], [1, '錯誤']]} onChange={v => set('correct', v)} />
              </Row>
            )}
          </Card>

          <Card>
            <Row label="解析">
              <textarea value={form.explanation} onChange={e => set('explanation', e.target.value)} rows={4}
                placeholder={'第一行：為什麼正解是對的\n第二行：容易選錯的選項錯在哪裡\n（出處會自動加在最後一行）'}
                style={{ ...inputStyle, resize: 'vertical' }} />
            </Row>
          </Card>

          <button className="btn btn-primary btn-large" onClick={handleSave} disabled={saving}
            style={{ width: '100%', background: meta.color, borderColor: meta.color }}>
            {saving ? '儲存中⋯' : '儲存題目'}
          </button>

          {recent.length > 0 && (
            <Card>
              <div style={{ ...labelStyle, marginBottom: '12px' }}>最近新增的考試題</div>
              {recent.map(q => (
                <div key={q.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderTop: '1px solid var(--border)' }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{q.content}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-light)' }}>{unitTitle[q.unit_id] || ''}．{q.exam_source}</div>
                  </div>
                  <button onClick={() => handleDelete(q)}
                    style={{ border: '1px solid #FCA5A5', background: '#FEF2F2', color: '#DC2626', borderRadius: '8px', padding: '4px 10px', fontSize: '13px', cursor: 'pointer', flexShrink: 0 }}>
                    刪除
                  </button>
                </div>
              ))}
            </Card>
          )}
        </div>
      </main>

      {toast && (
        <div style={{
          position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
          background: toast.type === 'error' ? '#DC2626' : '#16A34A', color: 'white',
          padding: '12px 24px', borderRadius: '12px', fontWeight: 600, boxShadow: 'var(--shadow-lg)', zIndex: 100,
        }}>{toast.msg}</div>
      )}
    </div>
  )
}

const inputStyle = {
  width: '100%', padding: '10px 12px', border: '1px solid var(--border)', borderRadius: '8px',
  fontSize: '15px', fontFamily: 'inherit', boxSizing: 'border-box', background: 'white',
}
const labelStyle = { fontSize: '14px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }

function Card({ children }) {
  return <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '14px', padding: '16px' }}>{children}</div>
}

function Row({ label, children }) {
  return (
    <div style={{ marginBottom: '12px' }}>
      <div style={labelStyle}>{label}</div>
      {children}
    </div>
  )
}

function Segmented({ value, options, onChange, color }) {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {options.map(([v, label]) => (
        <button key={String(v)} onClick={() => onChange(v)} style={{
          flex: 1, padding: '10px', borderRadius: '8px', fontSize: '15px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
          border: `1px solid ${value === v ? color : 'var(--border)'}`,
          background: value === v ? color : 'white', color: value === v ? 'white' : 'var(--text-light)',
        }}>{label}</button>
      ))}
    </div>
  )
}
