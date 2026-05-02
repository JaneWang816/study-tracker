// src/pages/BridgeAdmin.jsx
// 銜接課程題目管理介面

import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

const USER_ID = '0c4ec0e9-872f-4e18-ae17-c95894bd820c'

// 題型（排除填充與問答）
const QUESTION_TYPES = [
  { id: 'b77ce8e8-b304-4028-9b7b-d06a619ac85d', name: 'single_choice', label: '單選題' },
  { id: 'd64e039c-19c5-435b-b29f-7aa2a67b0729', name: 'true_false',    label: '是非題' },
  { id: 'f2f599de-ce0a-4ee0-938e-f4abd6ed9f2b', name: 'multiple_choice', label: '複選題' },
]

const TRUE_FALSE_OPTIONS = ['是', '非']

function emptyForm() {
  return {
    subjectId: '',
    unitId: '',
    typeId: QUESTION_TYPES[0].id,
    typeName: QUESTION_TYPES[0].name,
    isGroup: false,
    content: '',
    imageFile: null,
    imagePreview: null,
    options: ['', '', '', ''],
    answer: null,      // single_choice: number | true_false: number | multiple_choice: number[]
    difficulty: 'basic',
    // 題組子題
    children: [],
  }
}

function emptyChild() {
  return {
    typeId: QUESTION_TYPES[0].id,
    typeName: QUESTION_TYPES[0].name,
    content: '',
    options: ['', '', '', ''],
    answer: null,
    difficulty: 'basic',
  }
}

export default function BridgeAdmin() {
  const navigate = useNavigate()
  const [subjects, setSubjects] = useState([])
  const [units, setUnits] = useState([])
  const [form, setForm] = useState(emptyForm())
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState(null)
  const fileRef = useRef()

  useEffect(() => { fetchSubjects() }, [])
  useEffect(() => {
    if (form.subjectId) fetchUnits(form.subjectId)
    else setUnits([])
  }, [form.subjectId])

  async function fetchSubjects() {
    const { data } = await supabase
      .from('subjects').select('id, title')
      .eq('user_id', USER_ID)
      .ilike('title', '銜接%')
      .order('title')
    setSubjects(data || [])
  }

  async function fetchUnits(subjectId) {
    const { data } = await supabase
      .from('units').select('id, title, order')
      .eq('user_id', USER_ID)
      .in('topic_id',
        (await supabase.from('topics').select('id').eq('subject_id', subjectId)).data?.map(t => t.id) || []
      )
      .order('order')
    setUnits(data || [])
  }

  function setField(key, val) {
    setForm(f => ({ ...f, [key]: val }))
  }

  function setOption(idx, val) {
    setForm(f => {
      const opts = [...f.options]
      opts[idx] = val
      return { ...f, options: opts }
    })
  }

  function setChildField(ci, key, val) {
    setForm(f => {
      const children = f.children.map((c, i) => i === ci ? { ...c, [key]: val } : c)
      return { ...f, children }
    })
  }

  function setChildOption(ci, oi, val) {
    setForm(f => {
      const children = f.children.map((c, i) => {
        if (i !== ci) return c
        const opts = [...c.options]
        opts[oi] = val
        return { ...c, options: opts }
      })
      return { ...f, children }
    })
  }

  function addChild() {
    setForm(f => ({ ...f, children: [...f.children, emptyChild()] }))
  }

  function removeChild(ci) {
    setForm(f => ({ ...f, children: f.children.filter((_, i) => i !== ci) }))
  }

  function handleTypeChange(typeId) {
    const t = QUESTION_TYPES.find(t => t.id === typeId)
    setForm(f => ({ ...f, typeId, typeName: t.name, answer: null }))
  }

  function handleChildTypeChange(ci, typeId) {
    const t = QUESTION_TYPES.find(t => t.id === typeId)
    setChildField(ci, 'typeId', typeId)
    setChildField(ci, 'typeName', t.name)
    setChildField(ci, 'answer', null)
  }

  function handleMultiAnswer(idx) {
    setForm(f => {
      const cur = Array.isArray(f.answer) ? f.answer : []
      const next = cur.includes(idx) ? cur.filter(i => i !== idx) : [...cur, idx].sort()
      return { ...f, answer: next }
    })
  }

  function handleChildMultiAnswer(ci, idx) {
    setForm(f => {
      const children = f.children.map((c, i) => {
        if (i !== ci) return c
        const cur = Array.isArray(c.answer) ? c.answer : []
        const next = cur.includes(idx) ? cur.filter(x => x !== idx) : [...cur, idx].sort()
        return { ...c, answer: next }
      })
      return { ...f, children }
    })
  }

  async function handleImageUpload(file) {
    if (!file) return null
    const ext = file.name.split('.').pop()
    const path = `bridge/${Date.now()}.${ext}`
    const { error } = await supabase.storage.from('questions').upload(path, file)
    if (error) { showToast('圖片上傳失敗：' + error.message, 'error'); return null }
    const { data } = supabase.storage.from('questions').getPublicUrl(path)
    return data.publicUrl
  }

  function validate() {
    if (!form.subjectId) return '請選擇科目'
    if (!form.unitId) return '請選擇單元'
    if (!form.content.trim()) return '請輸入題目內容'
    if (form.isGroup) {
      if (form.children.length === 0) return '題組至少需要一道子題'
      for (let i = 0; i < form.children.length; i++) {
        const c = form.children[i]
        if (!c.content.trim()) return `子題 ${i + 1} 內容不能為空`
        const err = validateAnswerSection(c.typeName, c.options, c.answer, `子題 ${i + 1}`)
        if (err) return err
      }
    } else {
      const err = validateAnswerSection(form.typeName, form.options, form.answer, '題目')
      if (err) return err
    }
    return null
  }

  function validateAnswerSection(typeName, options, answer, label) {
    if (typeName === 'true_false') {
      if (answer === null) return `${label} 請選擇答案`
    } else if (typeName === 'single_choice') {
      const filled = options.filter(o => o.trim())
      if (filled.length < 2) return `${label} 至少需要2個選項`
      if (answer === null) return `${label} 請選擇正確答案`
    } else if (typeName === 'multiple_choice') {
      const filled = options.filter(o => o.trim())
      if (filled.length < 2) return `${label} 至少需要2個選項`
      if (!Array.isArray(answer) || answer.length === 0) return `${label} 請選擇至少一個正確答案`
    }
    return null
  }

  async function handleSave() {
    const err = validate()
    if (err) { showToast(err, 'error'); return }
    setSaving(true)

    try {
      // 上傳圖片
      let imageUrl = null
      if (form.imageFile) {
        imageUrl = await handleImageUpload(form.imageFile)
        if (!imageUrl) { setSaving(false); return }
      }

      const baseRow = {
        user_id: USER_ID,
        subject_id: form.subjectId,
        unit_id: form.unitId,
        difficulty: form.difficulty,
      }

      if (form.isGroup) {
        // 建母題
        const parentId = crypto.randomUUID()
        await supabase.from('questions').insert({
          ...baseRow,
          id: parentId,
          question_type_id: form.children[0]?.typeId || QUESTION_TYPES[0].id,
          content: form.content,
          image_url: imageUrl,
          is_group: true,
          options: null,
          answer: null,
          order: 0,
        })
        // 建子題
        for (let i = 0; i < form.children.length; i++) {
          const c = form.children[i]
          const opts = buildOptions(c.typeName, c.options)
          const ans = buildAnswer(c.typeName, c.answer)
          await supabase.from('questions').insert({
            ...baseRow,
            question_type_id: c.typeId,
            content: c.content,
            options: opts,
            answer: ans,
            is_group: false,
            parent_id: parentId,
            order: i + 1,
          })
        }
      } else {
        const opts = buildOptions(form.typeName, form.options)
        const ans = buildAnswer(form.typeName, form.answer)
        await supabase.from('questions').insert({
          ...baseRow,
          question_type_id: form.typeId,
          content: form.content,
          image_url: imageUrl,
          options: opts,
          answer: ans,
          is_group: false,
          order: 0,
        })
      }

      showToast('儲存成功！', 'success')
      setForm(emptyForm())
    } catch (e) {
      showToast('儲存失敗：' + e.message, 'error')
    }
    setSaving(false)
  }

  function buildOptions(typeName, options) {
    if (typeName === 'true_false') return TRUE_FALSE_OPTIONS
    return options.filter(o => o.trim())
  }

  function buildAnswer(typeName, answer) {
    if (typeName === 'multiple_choice') return answer  // 陣列
    return String(answer)  // "0", "1", etc.
  }

  function showToast(msg, type) {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3000)
  }

  const isTF = form.typeName === 'true_false'
  const isMulti = form.typeName === 'multiple_choice'

  return (
    <div className="page-container">
      <header className="page-header">
        <button className="btn-back" onClick={() => navigate('/bridge')}>← 返回</button>
        <div className="header-content center">
          <h1>🛠️ 題目管理</h1>
          <p>新增銜接課程題目</p>
        </div>
      </header>

      {/* Toast */}
      {toast && (
        <div style={{
          position: 'fixed', top: '80px', left: '50%', transform: 'translateX(-50%)',
          background: toast.type === 'success' ? '#16A34A' : '#DC2626',
          color: 'white', padding: '12px 28px', borderRadius: '12px',
          fontSize: '15px', fontWeight: 600, zIndex: 999, boxShadow: 'var(--shadow-lg)'
        }}>
          {toast.type === 'success' ? '✅ ' : '❌ '}{toast.msg}
        </div>
      )}

      <main className="main-content">
        <div style={{ maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* 科目 + 單元 */}
          <Section title="基本設定">
            <Row label="科目">
              <select className="admin-select" value={form.subjectId} onChange={e => { setField('subjectId', e.target.value); setField('unitId', '') }}>
                <option value="">請選擇科目</option>
                {subjects.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
              </select>
            </Row>
            <Row label="單元">
              <select className="admin-select" value={form.unitId} onChange={e => setField('unitId', e.target.value)} disabled={!form.subjectId}>
                <option value="">請選擇單元</option>
                {units.map(u => <option key={u.id} value={u.id}>{u.title}</option>)}
              </select>
            </Row>
            <Row label="難度">
              <div style={{ display: 'flex', gap: '12px' }}>
                {['basic', 'advanced'].map(d => (
                  <label key={d} style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                    <input type="radio" name="difficulty" value={d} checked={form.difficulty === d} onChange={() => setField('difficulty', d)} />
                    {d === 'basic' ? '基礎' : '進階'}
                  </label>
                ))}
              </div>
            </Row>
            <Row label="類型">
              <div style={{ display: 'flex', gap: '12px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                  <input type="radio" name="isGroup" checked={!form.isGroup} onChange={() => setField('isGroup', false)} />
                  單題
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                  <input type="radio" name="isGroup" checked={form.isGroup} onChange={() => setField('isGroup', true)} />
                  題組
                </label>
              </div>
            </Row>
          </Section>

          {/* 題目內容 */}
          <Section title={form.isGroup ? '題組說明（母題）' : '題目內容'}>
            <textarea
              placeholder={form.isGroup ? '輸入題組的情境說明或共同素材⋯' : '輸入題目內容⋯'}
              value={form.content}
              onChange={e => setField('content', e.target.value)}
              style={{
                width: '100%', minHeight: '100px', padding: '12px',
                border: '2px solid var(--border)', borderRadius: '10px',
                fontSize: '15px', resize: 'vertical', outline: 'none',
                fontFamily: 'inherit'
              }}
            />
            {/* 圖片上傳 */}
            <div style={{ marginTop: '12px' }}>
              <button
                type="button"
                onClick={() => fileRef.current.click()}
                style={{
                  padding: '8px 16px', border: '2px dashed var(--border)',
                  borderRadius: '8px', background: 'white', cursor: 'pointer',
                  fontSize: '13px', color: 'var(--text-light)'
                }}
              >
                📎 {form.imageFile ? form.imageFile.name : '上傳圖片（選填）'}
              </button>
              <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }}
                onChange={e => {
                  const file = e.target.files[0]
                  if (!file) return
                  setField('imageFile', file)
                  setField('imagePreview', URL.createObjectURL(file))
                }}
              />
              {form.imagePreview && (
                <div style={{ marginTop: '10px', position: 'relative', display: 'inline-block' }}>
                  <img src={form.imagePreview} alt="preview" style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '8px' }} />
                  <button onClick={() => { setField('imageFile', null); setField('imagePreview', null) }}
                    style={{ position: 'absolute', top: '4px', right: '4px', background: '#DC2626', color: 'white', border: 'none', borderRadius: '50%', width: '24px', height: '24px', cursor: 'pointer', fontSize: '14px' }}>
                    ×
                  </button>
                </div>
              )}
            </div>
          </Section>

          {/* 單題：題型 + 選項 + 答案 */}
          {!form.isGroup && (
            <Section title="題型與答案">
              <Row label="題型">
                <select className="admin-select" value={form.typeId} onChange={e => handleTypeChange(e.target.value)}>
                  {QUESTION_TYPES.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
                </select>
              </Row>
              <OptionsAndAnswer
                typeName={form.typeName}
                options={form.options}
                answer={form.answer}
                onOptionChange={(i, v) => setOption(i, v)}
                onAnswerChange={idx => {
                  if (isMulti) handleMultiAnswer(idx)
                  else setField('answer', idx)
                }}
              />
            </Section>
          )}

          {/* 題組子題 */}
          {form.isGroup && (
            <Section title="子題">
              {form.children.length === 0 && (
                <p style={{ color: 'var(--text-light)', fontSize: '14px', textAlign: 'center', padding: '16px 0' }}>
                  尚未新增子題
                </p>
              )}
              {form.children.map((child, ci) => (
                <div key={ci} style={{
                  border: '2px solid var(--border)', borderRadius: '12px',
                  padding: '16px', marginBottom: '16px', position: 'relative'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontWeight: 700, color: 'var(--primary)' }}>子題 {ci + 1}</span>
                    <button onClick={() => removeChild(ci)}
                      style={{ background: 'none', border: 'none', color: '#DC2626', cursor: 'pointer', fontSize: '18px' }}>×</button>
                  </div>
                  <Row label="題型">
                    <select className="admin-select" value={child.typeId} onChange={e => handleChildTypeChange(ci, e.target.value)}>
                      {QUESTION_TYPES.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
                    </select>
                  </Row>
                  <div style={{ margin: '10px 0' }}>
                    <textarea
                      placeholder="輸入子題內容⋯"
                      value={child.content}
                      onChange={e => setChildField(ci, 'content', e.target.value)}
                      style={{
                        width: '100%', minHeight: '80px', padding: '10px',
                        border: '2px solid var(--border)', borderRadius: '8px',
                        fontSize: '14px', resize: 'vertical', outline: 'none', fontFamily: 'inherit'
                      }}
                    />
                  </div>
                  <OptionsAndAnswer
                    typeName={child.typeName}
                    options={child.options}
                    answer={child.answer}
                    onOptionChange={(oi, v) => setChildOption(ci, oi, v)}
                    onAnswerChange={idx => {
                      if (child.typeName === 'multiple_choice') handleChildMultiAnswer(ci, idx)
                      else setChildField(ci, 'answer', idx)
                    }}
                  />
                  <Row label="難度">
                    <div style={{ display: 'flex', gap: '12px' }}>
                      {['basic', 'advanced'].map(d => (
                        <label key={d} style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                          <input type="radio" name={`child_diff_${ci}`} value={d} checked={child.difficulty === d} onChange={() => setChildField(ci, 'difficulty', d)} />
                          {d === 'basic' ? '基礎' : '進階'}
                        </label>
                      ))}
                    </div>
                  </Row>
                </div>
              ))}
              <button
                onClick={addChild}
                style={{
                  width: '100%', padding: '12px', border: '2px dashed #2563EB',
                  borderRadius: '10px', background: '#EFF6FF', color: '#2563EB',
                  cursor: 'pointer', fontSize: '15px', fontWeight: 600
                }}
              >
                ＋ 新增子題
              </button>
            </Section>
          )}

          {/* 儲存 */}
          <button
            onClick={handleSave}
            disabled={saving}
            style={{
              width: '100%', padding: '16px', fontSize: '17px', fontWeight: 700,
              background: saving ? '#94A3B8' : 'linear-gradient(135deg, #2563EB, #1D4ED8)',
              color: 'white', border: 'none', borderRadius: '14px',
              cursor: saving ? 'not-allowed' : 'pointer',
              boxShadow: '0 4px 12px rgba(37,99,235,0.3)', marginBottom: '40px'
            }}
          >
            {saving ? '儲存中⋯' : '💾 儲存題目'}
          </button>
        </div>
      </main>

      <style>{`
        .admin-select {
          padding: 10px 14px; border: 2px solid var(--border);
          border-radius: 8px; font-size: 14px; background: white;
          outline: none; cursor: pointer; min-width: 200px;
        }
        .admin-select:focus { border-color: var(--primary); }
      `}</style>
    </div>
  )
}

// ── 子元件 ──────────────────────────────────────────

function Section({ title, children }) {
  return (
    <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: 'var(--shadow)' }}>
      <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--primary)', marginBottom: '16px' }}>{title}</h3>
      {children}
    </div>
  )
}

function Row({ label, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '14px' }}>
      <span style={{ fontSize: '14px', color: 'var(--text-light)', width: '48px', flexShrink: 0, paddingTop: '10px' }}>{label}</span>
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  )
}

function OptionsAndAnswer({ typeName, options, answer, onOptionChange, onAnswerChange }) {
  if (typeName === 'true_false') {
    return (
      <Row label="答案">
        <div style={{ display: 'flex', gap: '12px' }}>
          {['是', '非'].map((opt, idx) => (
            <button key={idx} onClick={() => onAnswerChange(idx)}
              style={{
                padding: '10px 28px', borderRadius: '10px', border: '2px solid',
                borderColor: answer === idx ? '#16A34A' : 'var(--border)',
                background: answer === idx ? '#ECFDF5' : 'white',
                color: answer === idx ? '#16A34A' : 'var(--text-dark)',
                fontWeight: 600, cursor: 'pointer', fontSize: '15px'
              }}>
              {opt}
            </button>
          ))}
        </div>
      </Row>
    )
  }

  const isMulti = typeName === 'multiple_choice'
  const filledOptions = options.map((o, i) => ({ text: o, idx: i })).filter(o => o.text.trim())

  return (
    <>
      <Row label="選項">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {options.map((opt, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                width: '24px', height: '24px', borderRadius: '50%', background: 'var(--primary)',
                color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '12px', fontWeight: 700, flexShrink: 0
              }}>{idx + 1}</span>
              <input
                type="text"
                value={opt}
                onChange={e => onOptionChange(idx, e.target.value)}
                placeholder={`選項 ${idx + 1}${idx >= 2 ? '（選填）' : ''}`}
                style={{
                  flex: 1, padding: '8px 12px', border: '2px solid var(--border)',
                  borderRadius: '8px', fontSize: '14px', outline: 'none'
                }}
              />
            </div>
          ))}
        </div>
      </Row>
      {filledOptions.length >= 2 && (
        <Row label="答案">
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {filledOptions.map(({ text, idx }) => {
              const selected = isMulti
                ? Array.isArray(answer) && answer.includes(idx)
                : answer === idx
              return (
                <button key={idx} onClick={() => onAnswerChange(idx)}
                  style={{
                    padding: '8px 16px', borderRadius: '8px', border: '2px solid',
                    borderColor: selected ? '#16A34A' : 'var(--border)',
                    background: selected ? '#ECFDF5' : 'white',
                    color: selected ? '#16A34A' : 'var(--text-dark)',
                    fontWeight: selected ? 700 : 400,
                    cursor: 'pointer', fontSize: '14px'
                  }}>
                  {idx + 1}. {text}
                </button>
              )
            })}
          </div>
          {isMulti && <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '6px' }}>可選多個正確答案</p>}
        </Row>
      )}
    </>
  )
}
