// src/data/daily-practice/vocabulary/generators.js
// 單字練習題目生成器

// 打亂陣列
const shuffleArray = (array) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// 生成干擾選項
const generateOptions = (correctAnswer, allCards, field) => {
  // 從所有卡片中隨機選 3 個不同的選項
  const others = shuffleArray(allCards)
    .filter(card => card[field] !== correctAnswer)
    .slice(0, 3)
    .map(card => card[field])
  
  // 加入正確答案並打亂
  const options = shuffleArray([correctAnswer, ...others])
  
  // 找出正確答案的新位置
  const answerIndex = options.indexOf(correctAnswer)
  
  return { options, answerIndex }
}

// 生成 20 題練習
export const generateQuestions = (allCards) => {
  if (allCards.length < 20) {
    return null // 字卡數量不足
  }
  
  const questions = []
  
  // 先篩選出有例句且例句包含該單字的卡片
  const cardsWithValidNote = allCards.filter(card => 
    card.note && card.note.trim() && card.note.includes(card.back)
  )
  
  // 從有例句的卡片中隨機選 10 張做克漏字
  const clozeCards = shuffleArray(cardsWithValidNote).slice(0, 10)
  
  // 從所有卡片中隨機選 10 張做中→外和外→中（避免與克漏字重複）
  const clozeCardIds = new Set(clozeCards.map(c => c.id))
  const otherCards = shuffleArray(
    allCards.filter(card => !clozeCardIds.has(card.id))
  ).slice(0, 10)
  
  // 前 5 題：看中文選外文
  for (let i = 0; i < 5; i++) {
    const card = otherCards[i]
    const { options, answerIndex } = generateOptions(card.back, allCards, 'back')
    
    questions.push({
      type: 'front-to-back',
      question: card.front,
      options,
      answer: answerIndex,
      correctAnswer: card.back
    })
  }
  
  // 中間 5 題：看外文選中文
  for (let i = 5; i < 10; i++) {
    const card = otherCards[i]
    const { options, answerIndex } = generateOptions(card.front, allCards, 'front')
    
    questions.push({
      type: 'back-to-front',
      question: card.back,
      options,
      answer: answerIndex,
      correctAnswer: card.front
    })
  }
  
  // 後 10 題：克漏字
  for (let i = 0; i < 10; i++) {
    const card = clozeCards[i]
    
    // 如果沒有足夠的克漏字卡片，用其他卡片補充
    if (!card) {
      const extraCard = otherCards[i] || shuffleArray(allCards)[0]
      const { options, answerIndex } = generateOptions(extraCard.back, allCards, 'back')
      
      questions.push({
        type: 'front-to-back',
        question: extraCard.front,
        options,
        answer: answerIndex,
        correctAnswer: extraCard.back
      })
      continue
    }
    
    const { options, answerIndex } = generateOptions(card.back, allCards, 'back')
    
    // 將例句中的單字替換成 ______
    const clozeQuestion = card.note.replace(
      new RegExp(card.back, 'gi'), 
      '______'
    )
    
    questions.push({
      type: 'cloze',
      question: clozeQuestion,
      hint: card.note2 || card.front,  // 優先使用 note2（句子解釋），沒有則用 front
      options,
      answer: answerIndex,
      correctAnswer: card.back
    })
  }
  
  return questions
}

// 驗證答案
export const checkAnswer = (question, userAnswer) => {
  return userAnswer === question.answer
}

export default {
  generateQuestions,
  checkAnswer
}
