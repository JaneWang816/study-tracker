// src/pages/g7/progress.js
// 七年級作答紀錄：題目（questions）全家共用一份，作答紀錄依登入者分開存在 question_progress
// 另有作答日誌 g7_answer_log：每答一題寫一筆，供家長報表使用
import { supabase } from '../../lib/supabase'
import { GRADUATE_STREAK } from '../../config/g7'

const EMPTY = { attempt_count: 0, wrong_count: 0, consecutive_correct: 0, marked_for_review: false, last_attempted_at: null }
const PAGE = 1000

// Supabase 每次查詢最多回傳 1000 列，超過要分頁讀取
// build：每次呼叫都回傳一個新的查詢（需含 order，分頁才會穩定）
export async function fetchAll(build) {
  const rows = []
  for (let from = 0; ; from += PAGE) {
    const { data, error } = await build().range(from, from + PAGE - 1)
    if (error) { console.error('讀取失敗：', error); break }
    rows.push(...data)
    if (data.length < PAGE) break
  }
  return rows
}

// 讀取某位使用者的所有作答紀錄 → Map(question_id → 紀錄)
export async function fetchProgress(userId) {
  const data = await fetchAll(() => supabase
    .from('question_progress')
    .select('question_id, attempt_count, wrong_count, consecutive_correct, marked_for_review, last_attempted_at')
    .eq('user_id', userId)
    .order('question_id'))
  console.info(`[G7] 使用者 ${userId}：讀到 ${data.length} 筆作答紀錄`)
  return new Map(data.map(r => [r.question_id, r]))
}

// 把作答紀錄併入題目；questions 表上的舊統計欄位一律忽略
export function withProgress(questions, progress) {
  return questions.map(q => {
    const p = progress.get(q.id) || EMPTY
    return {
      ...q,
      attempt_count: p.attempt_count,
      wrong_count: p.wrong_count,
      consecutive_correct: p.consecutive_correct,
      marked_for_review: p.marked_for_review,
      last_attempted_at: p.last_attempted_at,
    }
  })
}

// 寫入一筆作答紀錄（有則更新、無則新增）
export async function saveProgress(userId, questionId, next) {
  const { error } = await supabase
    .from('question_progress')
    .upsert({ user_id: userId, question_id: questionId, ...next }, { onConflict: 'user_id,question_id' })
  if (error) console.error('寫入作答紀錄失敗：', error)
}

// 寫入作答日誌（q 必須是作答「前」的狀態，才能判斷是不是新題）
export async function logAnswer(userId, q, { sessionId, mode, isCorrect, isUnsure, chosen }) {
  const { error } = await supabase.from('g7_answer_log').insert({
    user_id: userId,
    question_id: q.id,
    subject_id: q.subject_id,
    unit_id: q.unit_id,
    session_id: sessionId,
    mode,
    is_new: !q.attempt_count,
    is_correct: isCorrect,
    is_unsure: !!isUnsure,
    chosen: chosen ?? null,
  })
  if (error) console.error('寫入作答日誌失敗：', error)
}

// 在錯題本中：曾答錯、曾標記「我不確定」，或是考試錯題（exam_source），且尚未有把握地連續答對達標
export function isWrong(q) {
  const flagged = (q.wrong_count || 0) > 0 || q.marked_for_review || !!q.exam_source
  return flagged && (q.consecutive_correct || 0) < GRADUATE_STREAK
}
