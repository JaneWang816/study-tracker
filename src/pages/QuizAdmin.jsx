import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

const SUBJECTS = [
  { id: 'chinese', label: '國語' },
  { id: 'social',  label: '社會' },
  { id: 'science', label: '自然' }
]

const TYPES = [
  { id: 'pronunciation', label: '字音' },
  { id: 'orthography',   label: '字形' },
  { id: 'idiom',         label: '成語' },
  { id: 'review',        label: '課程複習' },
  { id: 'meaning',       label: '詞義' },
  { id: 'culture',       label: '國學常識' }
]

const EMPTY_FORM = {
  subject: 'chinese',
  type: 'pronunciation',
  week: '',
  question: '',
  options: ['', '', '', ''],  // index 0 = 正確答案
  explanation: ''
}

export default function QuizAdmin() {
  const navigate = useNavigate()
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)
  const [filterSubject, setFilterSubject] = useState('all')
  const [filterType, setFilterType] = useState('all')

  // 編輯 / 新增表單狀態
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [form, setForm] = useState(EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const [formError, setFormError] = useState('')

  // 載入題目
  const fetchQuestions = async () => {
    setLoading(true)
    let query = supabase.from('quiz_questions').select('*').order('created_at', { ascending: false })
    if (filterSubject !== 'all') query = query.eq('subject', filterSubject)
    if (filterType    !== 'all') query = query.eq('type', filterType)
    const { data, error } = await query
    if (!error) setQuestions(data || [])
    setLoading(false)
  }

  useEffect(() => { fetchQuestions() }, [filterSubject, filterType])

  // 開啟新增表單
  const handleNew = () => {
    setEditingId(null)
    setForm(EMPTY_FORM)
    setFormError('')
    setShowForm(true)
  }

  // 開啟編輯表單
  const handleEdit = (q) => {
    const opts = Array.isArray(q.options) ? q.options : JSON.parse(q.options)
    // 正確答案移到 index 0
    const correctIdx = opts.indexOf(q.answer)
    const reordered = correctIdx > 0
      ? [opts[correctIdx], ...opts.filter((_, i) => i !== correctIdx)]
      : [...opts]
    // 補足 4 個選項
    while (reordered.length < 4) reordered.push('')

    setEditingId(q.id)
    setForm({
      subject: q.subject,
      type: q.type,
      week: q.week ?? '',
      question: q.question,
      options: reordered,
      explanation: q.explanation ?? ''
    })
    setFormError('')
    setShowForm(true)
  }

  // 刪除
  const handleDelete = async (id) => {
    if (!window.confirm('確定要刪除這道題目嗎？')) return
    const { error } = await supabase.from('quiz_questions').delete().eq('id', id)
    if (!error) fetchQuestions()
  }

  // 表單欄位更新
  const setField = (key, value) => setForm(prev => ({ ...prev, [key]: value }))
  const setOption = (i, value) => setForm(prev => ({
    ...prev,
    options: prev.options.map((o, idx) => idx === i ? value : o)
  }))

  // 驗證並儲存
  const handleSave = async () => {
    setFormError('')

    // 驗證
    if (!form.question.trim()) return setFormError('請填寫題目')
    const filledOptions = form.options.filter(o => o.trim())
    if (filledOptions.length < 2) return setFormError('至少要有 2 個選項')
    if (!form.options[0].trim()) return setFormError('第一個選項（正確答案）不能為空')
    if (form.type === 'review' && !form.week) return setFormError('課程複習題需要填寫週次')

    setSaving(true)

    const payload = {
      subject: form.subject,
      type: form.type,
      week: form.week ? Number(form.week) : null,
      question: form.question.trim(),
      options: JSON.stringify(form.options.filter(o => o.trim())),
      answer: form.options[0].trim(),
      explanation: form.explanation.trim() || null
    }

    let error
    if (editingId) {
      ;({ error } = await supabase.from('quiz_questions').update(payload).eq('id', editingId))
    } else {
      ;({ error } = await supabase.from('quiz_questions').insert(payload))
    }

    setSaving(false)
    if (error) {
      setFormError(`儲存失敗：${error.message}`)
    } else {
      setShowForm(false)
      fetchQuestions()
    }
  }

  const SUBJECT_LABELS = { chinese: '國語', social: '社會', science: '自然' }
  const TYPE_LABELS = { pronunciation: '字音', orthography: '字形', idiom: '成語', review: '課程複習', meaning: '詞義', culture: '國學常識' }

  return (
    <div className="page-container">
      <div className="page-header">
        <button onClick={() => navigate('/')} className="btn-back">← 返回首頁</button>
        <h1>⚙️ 題庫管理</h1>
      </div>

      {/* 篩選列 */}
      <div className="admin-toolbar">
        <div className="filter-row">
          <select value={filterSubject} onChange={e => setFilterSubject(e.target.value)} className="filter-select">
            <option value="all">全部科目</option>
            {SUBJECTS.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
          </select>
          <select value={filterType} onChange={e => setFilterType(e.target.value)} className="filter-select">
            <option value="all">全部題型</option>
            {TYPES.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
          </select>
          <span className="question-count">共 {questions.length} 題</span>
        </div>
        <button onClick={handleNew} className="btn-primary">＋ 新增題目</button>
      </div>

      {/* 題目列表 */}
      {loading ? (
        <div className="loading">載入中...</div>
      ) : questions.length === 0 ? (
        <div className="empty-state">尚無題目，請點「新增題目」開始建立。</div>
      ) : (
        <div className="admin-question-list">
          {questions.map(q => {
            const opts = Array.isArray(q.options) ? q.options : JSON.parse(q.options)
            return (
              <div key={q.id} className="admin-question-item">
                <div className="admin-question-meta">
                  <span className="tag">{SUBJECT_LABELS[q.subject]}</span>
                  <span className="tag">{TYPE_LABELS[q.type]}</span>
                  {q.week && <span className="tag">W{q.week}</span>}
                </div>
                <div className="admin-question-text">{q.question}</div>
                <div className="admin-options">
                  {opts.map((opt, i) => (
                    <span key={i} className={`admin-option ${opt === q.answer ? 'correct' : ''}`}>
                      {opt === q.answer ? '✓ ' : ''}{opt}
                    </span>
                  ))}
                </div>
                {q.explanation && (
                  <div className="admin-explanation">💡 {q.explanation}</div>
                )}
                <div className="admin-actions">
                  <button onClick={() => handleEdit(q)} className="btn-edit">編輯</button>
                  <button onClick={() => handleDelete(q.id)} className="btn-delete">刪除</button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* 新增 / 編輯表單（Modal） */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>{editingId ? '編輯題目' : '新增題目'}</h2>

            <div className="form-row">
              <div className="form-group">
                <label>科目</label>
                <select value={form.subject} onChange={e => setField('subject', e.target.value)}>
                  {SUBJECTS.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>題型</label>
                <select value={form.type} onChange={e => setField('type', e.target.value)}>
                  {TYPES.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>週次 {form.type !== 'review' ? '（選填）' : '*'}</label>
                <select value={form.week} onChange={e => setField('week', e.target.value)}>
                  <option value="">不綁週次</option>
                  {Array.from({ length: 15 }, (_, i) => i + 1).map(w => (
                    <option key={w} value={w}>W{w}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>題目 *</label>
              <textarea
                value={form.question}
                onChange={e => setField('question', e.target.value)}
                rows={3}
                placeholder="請輸入題目內容"
              />
            </div>

            <div className="form-group">
              <label>選項（第一個為正確答案）*</label>
              {form.options.map((opt, i) => (
                <div key={i} className="option-input-row">
                  <span className={`option-label ${i === 0 ? 'correct' : ''}`}>
                    {i === 0 ? '✓' : String.fromCharCode(65 + i)}
                  </span>
                  <input
                    type="text"
                    value={opt}
                    onChange={e => setOption(i, e.target.value)}
                    placeholder={i === 0 ? '正確答案' : `選項 ${String.fromCharCode(65 + i)}`}
                  />
                </div>
              ))}
            </div>

            <div className="form-group">
              <label>解析（選填）</label>
              <textarea
                value={form.explanation}
                onChange={e => setField('explanation', e.target.value)}
                rows={2}
                placeholder="答錯後顯示的說明（可留空）"
              />
            </div>

            {formError && <div className="form-error">{formError}</div>}

            <div className="modal-actions">
              <button onClick={() => setShowForm(false)} className="btn">取消</button>
              <button onClick={handleSave} disabled={saving} className="btn-primary">
                {saving ? '儲存中...' : '儲存'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
