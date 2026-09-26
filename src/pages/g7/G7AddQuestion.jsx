// src/pages/g7/G7AddQuestion.jsx
// 七年級：新增考試錯題
//   • 單題或題組（題組：一段文章／圖片 + 多道子題）
//   • 單選或是非；單選的選項可以是文字或圖片
//   • 新增的題目帶有 exam_source（例如「第一次段考」），對每位使用者一開始就在錯題本中
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import { getG7Subject, G7_EDITOR_IDS } from '../../config/g7'

const SC = 'b77ce8e8-b304-4028-9b7b-d06a619ac85d'   // 單選
const TF = 'd64e039c-19c5-435b-b29f-7aa2a67b0729'   // 是非
const MAX_OPTIONS = 5

const emptyOption = () => ({ text: '', file: null, preview: null })
const emptyQuestion = () => ({
  type: 'single',           // 'single' | 'tf'
  content: '',
  imageFile: null,          // 題目圖片（單題才有；題組的圖放在母題）
  optionMode: 'text',       // 'text' | 'image'
  options: [emptyOption(), emptyOption(), emptyOption(), emptyOption()],
  correct: null,            // 單選：正解索引；是非：0=正確、1=錯誤
  explanation: '',
})
const emptyForm = (keep = {}) => ({
  unitId: keep.unitId || '',
  source: keep.source || '',
  difficulty: keep.difficulty || 'advanced',
  kind: keep.kind || 'single',   // 'single' 單題 | 'group' 題組
  groupContent: '',
  groupImageFile: null,
  question: emptyQuestion(),
  children: [emptyQuestion(), emptyQuestion()],
})

export default function G7AddQuestion() {
  const navigate = useNavigate()
  const { subject } = useParams()
  const meta = getG7Subject(subject)
  const { user } = useAuth()

  const [units, setUnits] = useState([])
  const [form, setForm] = useState(emptyForm())
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState(null)
  const [recent, setRecent] = useState([])
  const [resetKey, setResetKey] = useState(0)    // 儲存後清空所有檔案欄位

  useEffect(() => { if (meta) { loadUnits(); loadRecent() } }, [subject])

  async function loadUnits() {
    const { data: topics } = await supabase.from('topics').select('id, title, order').eq('subject_id', meta.subjectId).order('order')
    const ids = (topics || []).map(t => t.id)
    if (!ids.length) return
    const { data: us } = await supabase.from('units').select('id, title, order, topic_id').in('topic_id', ids).order('order')
    const topicTitle = Object.fromEntries(topics.map(t => [t.id, t.title]))
    const tOrder = Object.fromEntries(topics.map(t => [t.id, t.order]))
    setUnits((us || [])
      .map(u => ({ ...u, topicTitle: topicTitle[u.topic_id] }))
      .sort((a, b) => tOrder[a.topic_id] - tOrder[b.topic_id] || a.order - b.order))
  }

  async function loadRecent() {
    const { data } = await supabase.from('questions')
      .select('id, content, exam_source, unit_id, is_group, created_at')
      .eq('subject_id', meta.subjectId)
      .not('exam_source', 'is', null)
      .is('parent_id', null)                     // 題組只列母題
      .order('created_at', { ascending: false })
      .limit(20)
    setRecent(data || [])
  }

  function showToast(msg, type = 'success') {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3000)
  }

  const set = (field, value) => setForm(f => ({ ...f, [field]: value }))
  const setQuestion = q => setForm(f => ({ ...f, question: q }))
  const setChild = (i, q) => setForm(f => ({ ...f, children: f.children.map((c, j) => j === i ? q : c) }))

  // ── 檢查 ──
  function validateQuestion(q, label) {
    if (!q.content.trim()) return `${label}：請輸入題目`
    if (q.type === 'single') {
      if (q.options.length < 2) return `${label}：至少需要 2 個選項`
      if (q.optionMode === 'text') {
        const t = q.options.map(o => o.text.trim())
        if (t.some(x => !x)) return `${label}：選項不能空白（不需要的選項請刪除）`
        if (new Set(t).size !== t.length) return `${label}：選項不能重複`
      } else if (q.options.some(o => !o.file)) {
        return `${label}：每個選項都要選一張圖片（不需要的選項請刪除）`
      }
    }
    if (q.correct === null) return `${label}：${q.type === 'single' ? '請勾選正確答案' : '請選擇正確或錯誤'}`
    return null
  }

  function validate() {
    if (!form.unitId) return '請選擇單元'
    if (!form.source.trim()) return '請輸入出處（例如：第一次段考）'
    if (form.kind === 'single') return validateQuestion(form.question, '題目')
    if (!form.groupContent.trim() && !form.groupImageFile) return '題組請輸入文章或上傳圖片'
    if (form.children.length === 0) return '題組至少需要 1 道子題'
    for (let i = 0; i < form.children.length; i++) {
      const err = validateQuestion(form.children[i], `子題 ${i + 1}`)
      if (err) return err
    }
    return null
  }

  // ── 儲存 ──
  let seq = 0
  async function upload(file) {
    const ext = (file.name.split('.').pop() || 'jpg').toLowerCase()
    const path = `g7/${subject}/exam/${Date.now()}_${seq++}.${ext}`
    const { error } = await supabase.storage.from('questions').upload(path, file)
    if (error) throw new Error('圖片上傳失敗：' + error.message)
    return supabase.storage.from('questions').getPublicUrl(path).data.publicUrl
  }

  // 一道題目 → 資料列（正解移到第一個，作答頁會打亂）
  async function buildRow(q, withImage) {
    const source = form.source.trim()
    let options, answer, optionImages = null
    if (q.type === 'single') {
      const idx = [q.correct, ...q.options.map((_, i) => i).filter(i => i !== q.correct)]
      if (q.optionMode === 'image') {
        const urls = []
        for (const i of idx) urls.push(await upload(q.options[i].file))
        optionImages = urls
        options = idx.map((_, k) => `圖${k + 1}`)          // 圖片選項的文字只作為內部代號
      } else {
        options = idx.map(i => q.options[i].text.trim())
      }
      answer = '0'
    } else {
      options = ['正確', '錯誤']
      answer = String(q.correct)
    }
    return {
      question_type_id: q.type === 'single' ? SC : TF,
      content: q.content.trim(),
      options,
      answer,
      option_image_urls: optionImages,
      explanation: [q.explanation.trim(), `【出處】${source}`].filter(Boolean).join('\n'),
      image_url: withImage && q.imageFile ? await upload(q.imageFile) : null,
      is_group: false,
    }
  }

  async function handleSave() {
    const err = validate()
    if (err) { showToast(err, 'error'); return }
    setSaving(true)
    try {
      const unit = units.find(u => u.id === form.unitId)
      const base = {
        user_id: user.id, subject_id: meta.subjectId, topic_id: unit.topic_id, unit_id: unit.id,
        difficulty: form.difficulty, exam_source: form.source.trim(),
      }

      if (form.kind === 'single') {
        const row = await buildRow(form.question, true)
        const { error } = await supabase.from('questions').insert({ ...base, ...row, order: 0 })
        if (error) throw new Error(error.message)
      } else {
        const parentId = crypto.randomUUID()
        const { error: pErr } = await supabase.from('questions').insert({
          ...base, id: parentId,
          question_type_id: form.children[0].type === 'single' ? SC : TF,
          content: form.groupContent.trim(),
          image_url: form.groupImageFile ? await upload(form.groupImageFile) : null,
          options: null, answer: null, explanation: null, is_group: true, order: 0,
        })
        if (pErr) throw new Error(pErr.message)
        const rows = []
        for (let i = 0; i < form.children.length; i++) {
          rows.push({ ...base, ...(await buildRow(form.children[i], false)), parent_id: parentId, order: i + 1 })
        }
        const { error: cErr } = await supabase.from('questions').insert(rows)
        if (cErr) {
          await supabase.from('questions').delete().eq('id', parentId)   // 子題失敗就把母題一起撤回
          throw new Error(cErr.message)
        }
      }

      showToast(form.kind === 'group' ? `已新增題組（${form.children.length} 題），並放進錯題本` : '已新增，並放進錯題本')
      setForm(emptyForm({ unitId: form.unitId, source: form.source, difficulty: form.difficulty, kind: form.kind }))
      setResetKey(k => k + 1)
      loadRecent()
    } catch (e) {
      showToast(e.message, 'error')
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(q) {
    const msg = q.is_group ? '確定刪除這個題組（含所有子題）？' : '確定刪除這題？'
    if (!window.confirm(`${msg}\n\n${(q.content || '').slice(0, 40)}`)) return
    if (q.is_group) {
      const { error } = await supabase.from('questions').delete().eq('parent_id', q.id)
      if (error) { showToast('刪除失敗：' + error.message, 'error'); return }
    }
    const { error } = await supabase.from('questions').delete().eq('id', q.id)
    if (error) { showToast('刪除失敗：' + error.message, 'error'); return }
    showToast('已刪除')
    loadRecent()
  }

  // ── 畫面 ──
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
  const c = meta.color

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
        <div key={resetKey} style={{ maxWidth: '640px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
            <Row label="形式">
              <Segmented value={form.kind} color={c} options={[['single', '單題'], ['group', '題組']]} onChange={v => set('kind', v)} />
            </Row>
            <Row label="難度" last>
              <Segmented value={form.difficulty} color={c} options={[['basic', '基礎'], ['advanced', '精熟']]} onChange={v => set('difficulty', v)} />
            </Row>
          </Card>

          {form.kind === 'single' ? (
            <QuestionEditor q={form.question} onChange={setQuestion} color={c} withImage />
          ) : (
            <>
              <Card>
                <Row label="題組文章（所有子題共用）">
                  <textarea value={form.groupContent} onChange={e => set('groupContent', e.target.value)} rows={4}
                    placeholder="輸入題組的文章或說明（只有圖片也可以）" style={{ ...inputStyle, resize: 'vertical' }} />
                </Row>
                <Row label="題組圖片" last>
                  <ImagePicker file={form.groupImageFile} onChange={f => set('groupImageFile', f)} />
                </Row>
              </Card>
              {form.children.map((q, i) => (
                <QuestionEditor key={i} q={q} onChange={nq => setChild(i, nq)} color={c}
                  title={`子題 ${i + 1}`}
                  onRemove={form.children.length > 1 ? () => set('children', form.children.filter((_, j) => j !== i)) : null} />
              ))}
              <button onClick={() => set('children', [...form.children, emptyQuestion()])} style={dashedBtn(c)}>
                ＋ 新增子題
              </button>
            </>
          )}

          <button className="btn btn-primary btn-large" onClick={handleSave} disabled={saving}
            style={{ width: '100%', background: c, borderColor: c }}>
            {saving ? '儲存中⋯' : form.kind === 'group' ? `儲存題組（${form.children.length} 題）` : '儲存題目'}
          </button>

          {recent.length > 0 && (
            <Card>
              <div style={{ ...labelStyle, marginBottom: '12px' }}>最近新增的考試題</div>
              {recent.map(q => (
                <div key={q.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderTop: '1px solid var(--border)' }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {q.is_group && <span style={{ color: c, fontWeight: 700 }}>［題組］</span>}{q.content || '（圖片題組）'}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-light)' }}>{unitTitle[q.unit_id] || ''}．{q.exam_source}</div>
                  </div>
                  <button onClick={() => handleDelete(q)} style={{
                    border: '1px solid #FCA5A5', background: '#FEF2F2', color: '#DC2626',
                    borderRadius: '8px', padding: '4px 10px', fontSize: '13px', cursor: 'pointer', flexShrink: 0,
                  }}>刪除</button>
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

// ── 一道題目的編輯區（單題、子題共用）──
function QuestionEditor({ q, onChange, color, title, withImage, onRemove }) {
  const upd = patch => onChange({ ...q, ...patch })
  const setOpt = (i, patch) => upd({ options: q.options.map((o, j) => j === i ? { ...o, ...patch } : o) })
  const removeOpt = i => {
    let correct = q.correct
    if (correct === i) correct = null
    else if (correct !== null && correct > i) correct -= 1
    upd({ options: q.options.filter((_, j) => j !== i), correct })
  }

  return (
    <Card>
      {title && (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
          <div style={{ flex: 1, fontSize: '15px', fontWeight: 700, color }}>{title}</div>
          {onRemove && <button onClick={onRemove} style={{ border: 'none', background: 'none', color: '#94A3B8', cursor: 'pointer', fontSize: '14px' }}>刪除子題</button>}
        </div>
      )}
      <Row label="題型">
        <Segmented value={q.type} color={color} options={[['single', '單選'], ['tf', '是非']]}
          onChange={v => upd({ type: v, correct: null })} />
      </Row>
      <Row label={q.type === 'single' ? '題目' : '敘述'}>
        <textarea value={q.content} onChange={e => upd({ content: e.target.value })} rows={3}
          placeholder={q.type === 'single' ? '輸入題目內容' : '輸入要判斷對錯的敘述'} style={{ ...inputStyle, resize: 'vertical' }} />
      </Row>
      {withImage && (
        <Row label="題目圖片">
          <ImagePicker file={q.imageFile} onChange={f => upd({ imageFile: f })} />
        </Row>
      )}

      {q.type === 'single' ? (
        <Row label="選項（點左邊圓圈標記正確答案，儲存時會自動打亂）">
          <div style={{ marginBottom: '10px', maxWidth: '240px' }}>
            <Segmented value={q.optionMode} color="#64748B" small
              options={[['text', '文字選項'], ['image', '圖片選項']]} onChange={v => upd({ optionMode: v })} />
          </div>
          {q.options.map((o, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <input type="radio" checked={q.correct === i} onChange={() => upd({ correct: i })}
                style={{ width: '20px', height: '20px', accentColor: '#16A34A', flexShrink: 0 }} />
              {q.optionMode === 'text' ? (
                <input value={o.text} onChange={e => setOpt(i, { text: e.target.value })} placeholder={`選項 ${i + 1}`}
                  style={{ ...inputStyle, borderColor: q.correct === i ? '#16A34A' : 'var(--border)' }} />
              ) : (
                <div style={{ flex: 1, padding: '6px', borderRadius: '8px', border: `1px solid ${q.correct === i ? '#16A34A' : 'var(--border)'}` }}>
                  <ImagePicker file={o.file} onChange={f => setOpt(i, { file: f })} />
                </div>
              )}
              {q.options.length > 2 && (
                <button onClick={() => removeOpt(i)} title="刪除這個選項"
                  style={{ border: 'none', background: 'none', color: '#94A3B8', fontSize: '18px', cursor: 'pointer' }}>✕</button>
              )}
            </div>
          ))}
          {q.options.length < MAX_OPTIONS && (
            <button onClick={() => upd({ options: [...q.options, emptyOption()] })} style={dashedBtn('#94A3B8')}>＋ 新增選項</button>
          )}
        </Row>
      ) : (
        <Row label="答案">
          <Segmented value={q.correct} color="#16A34A" options={[[0, '正確'], [1, '錯誤']]} onChange={v => upd({ correct: v })} />
        </Row>
      )}

      <Row label="解析" last>
        <textarea value={q.explanation} onChange={e => upd({ explanation: e.target.value })} rows={3}
          placeholder={'第一行：為什麼正解是對的\n第二行：容易選錯的選項錯在哪裡\n（出處會自動加在最後一行）'}
          style={{ ...inputStyle, resize: 'vertical' }} />
      </Row>
    </Card>
  )
}

// 選擇圖片並顯示縮圖
function ImagePicker({ file, onChange }) {
  const [preview, setPreview] = useState(null)
  useEffect(() => {
    if (!file) { setPreview(null); return }
    const url = URL.createObjectURL(file)
    setPreview(url)
    return () => URL.revokeObjectURL(url)
  }, [file])
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {preview && <img src={preview} alt="預覽" style={{ height: '56px', maxWidth: '120px', objectFit: 'contain', borderRadius: '6px', border: '1px solid var(--border)' }} />}
      <input type="file" accept="image/*" onChange={e => onChange(e.target.files?.[0] || null)} style={{ fontSize: '13px', minWidth: 0 }} />
    </div>
  )
}

const inputStyle = {
  width: '100%', padding: '10px 12px', border: '1px solid var(--border)', borderRadius: '8px',
  fontSize: '15px', fontFamily: 'inherit', boxSizing: 'border-box', background: 'white',
}
const labelStyle = { fontSize: '14px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }
const dashedBtn = color => ({
  width: '100%', border: `1px dashed ${color}`, background: 'white', borderRadius: '10px',
  padding: '10px', color, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
})

function Card({ children }) {
  return <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '14px', padding: '16px' }}>{children}</div>
}

function Row({ label, children, last }) {
  return (
    <div style={{ marginBottom: last ? 0 : '14px' }}>
      <div style={labelStyle}>{label}</div>
      {children}
    </div>
  )
}

function Segmented({ value, options, onChange, color, small }) {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {options.map(([v, label]) => (
        <button key={String(v)} onClick={() => onChange(v)} style={{
          flex: 1, padding: small ? '6px' : '10px', borderRadius: '8px', fontSize: small ? '13px' : '15px',
          fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
          border: `1px solid ${value === v ? color : 'var(--border)'}`,
          background: value === v ? color : 'white', color: value === v ? 'white' : 'var(--text-light)',
        }}>{label}</button>
      ))}
    </div>
  )
}
