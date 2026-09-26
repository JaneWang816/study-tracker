// src/pages/g7/progress.js
// 七年級作答紀錄：題目（questions）全家共用一份，作答紀錄依登入者分開存在 question_progress
import { supabase } from '../../lib/supabase'
import { GRADUATE_STREAK } from '../../config/g7'

const EMPTY = { attempt_count: 0, wrong_count: 0, consecutive_correct: 0, marked_for_review: false, last_attempted_at: null }

// 讀取某位使用者的所有作答紀錄 → Map(question_id → 紀錄)
export async function fetchProgress(userId) {
  const { data, error } = await supabase
    .from('question_progress')
    .select('question_id, attempt_count, wrong_count, consecutive_correct, marked_for_review, last_attempted_at')
    .eq('user_id', userId)
  if (error) console.error('讀取作答紀錄失敗：', error)
  console.info(`[G7] 使用者 ${userId}：讀到 ${data?.length ?? 0} 筆作答紀錄`)
  return new Map((data || []).map(r => [r.question_id, r]))
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

// 在錯題本中：曾答錯，或曾標記「我不確定」，且尚未有把握地連續答對達標
export function isWrong(q) {
  const flagged = (q.wrong_count || 0) > 0 || q.marked_for_review
  return flagged && (q.consecutive_correct || 0) < GRADUATE_STREAK
}
