// 國語 - 字音辨識 - 題庫（整合所有主題）
// src/data/chinese/pronunciation/questionBanks.js

/**
 * 多音字題庫
 */
export const polyphonicBank = {
  easy: [
    {
      id: 'poly_e_01',
      question: '「樂」在「快樂」中的讀音是？',
      options: ['ㄌㄜˋ', 'ㄩㄝˋ', 'ㄌㄚˋ', 'ㄧㄠˋ'],
      answer: 'ㄌㄜˋ',
      explanation: '「樂」在表示「快樂、歡樂」時讀「ㄌㄜˋ」，在「音樂」中才讀「ㄩㄝˋ」。',
      keywords: ['樂', '多音字', '情緒']
    },
    {
      id: 'poly_e_02',
      question: '「樂」在「音樂」中的讀音是？',
      options: ['ㄌㄜˋ', 'ㄩㄝˋ', 'ㄌㄚˋ', 'ㄧㄠˋ'],
      answer: 'ㄩㄝˋ',
      explanation: '「樂」在「音樂、樂器」等與音樂相關的詞語中讀「ㄩㄝˋ」。',
      keywords: ['樂', '多音字', '音樂']
    },
    {
      id: 'poly_e_03',
      question: '「長」在「長短」中的讀音是？',
      options: ['ㄔㄤˊ', 'ㄓㄤˇ', 'ㄔㄤˇ', 'ㄓㄤˊ'],
      answer: 'ㄔㄤˊ',
      explanation: '「長」表示「長度」時讀「ㄔㄤˊ」，當「班長」讀「ㄓㄤˇ」。',
      keywords: ['長', '多音字', '長度']
    },
    {
      id: 'poly_e_04',
      question: '「長」在「班長」中的讀音是？',
      options: ['ㄔㄤˊ', 'ㄓㄤˇ', 'ㄔㄤˇ', 'ㄓㄤˊ'],
      answer: 'ㄓㄤˇ',
      explanation: '「長」表示「領導者」時讀「ㄓㄤˇ」，如班長、校長、隊長。',
      keywords: ['長', '多音字', '職稱']
    },
    {
      id: 'poly_e_05',
      question: '「得」在「得到」中的讀音是？',
      options: ['ㄉㄜˊ', 'ㄉㄟˇ', 'ㄉㄜˋ', 'ㄉㄞˇ'],
      answer: 'ㄉㄜˊ',
      explanation: '「得」表示「獲得」時讀「ㄉㄜˊ」，表示「得意」時讀「ㄉㄟˇ」。',
      keywords: ['得', '多音字', '獲得']
    },
    {
      id: 'poly_e_06',
      question: '「重」在「重要」中的讀音是？',
      options: ['ㄓㄨㄥˋ', 'ㄔㄨㄥˊ', 'ㄓㄨㄥˇ', 'ㄔㄨㄥˋ'],
      answer: 'ㄓㄨㄥˋ',
      explanation: '「重」表示「重要、嚴重」時讀「ㄓㄨㄥˋ」。',
      keywords: ['重', '多音字', '程度']
    },
    {
      id: 'poly_e_07',
      question: '「重」在「重複」中的讀音是？',
      options: ['ㄓㄨㄥˋ', 'ㄔㄨㄥˊ', 'ㄓㄨㄥˇ', 'ㄔㄨㄥˋ'],
      answer: 'ㄔㄨㄥˊ',
      explanation: '「重」表示「再一次」時讀「ㄔㄨㄥˊ」，如重複、重新。',
      keywords: ['重', '多音字', '重複']
    },
    {
      id: 'poly_e_08',
      question: '「數」在「數學」中的讀音是？',
      options: ['ㄕㄨˋ', 'ㄕㄨˇ', 'ㄕㄨㄛˋ', 'ㄕㄡˋ'],
      answer: 'ㄕㄨˋ',
      explanation: '「數」在「數學、數字」中讀「ㄕㄨˋ」。',
      keywords: ['數', '多音字', '數學']
    },
    {
      id: 'poly_e_09',
      question: '「數」在「數一數」中的讀音是？',
      options: ['ㄕㄨˋ', 'ㄕㄨˇ', 'ㄕㄨㄛˋ', 'ㄕㄡˋ'],
      answer: 'ㄕㄨˇ',
      explanation: '「數」表示「計算」的動作時讀「ㄕㄨˇ」。',
      keywords: ['數', '多音字', '計算']
    },
    {
      id: 'poly_e_10',
      question: '「好」在「好人」中的讀音是？',
      options: ['ㄏㄠˇ', 'ㄏㄠˋ', 'ㄏㄠ', 'ㄏㄜˇ'],
      answer: 'ㄏㄠˇ',
      explanation: '「好」表示「良好、善良」時讀「ㄏㄠˇ」。',
      keywords: ['好', '多音字', '善良']
    },
    {
      id: 'poly_e_11',
      question: '「便」在「方便」中的讀音是？',
      options: ['ㄅㄧㄢˋ', 'ㄆㄧㄢˊ', 'ㄅㄧㄢˇ', 'ㄆㄧㄢˋ'],
      answer: 'ㄅㄧㄢˋ',
      explanation: '「便」表示「方便、便利」時讀「ㄅㄧㄢˋ」。',
      keywords: ['便', '多音字', '方便']
    },
    {
      id: 'poly_e_12',
      question: '「便」在「便宜」中的讀音是？',
      options: ['ㄅㄧㄢˋ', 'ㄆㄧㄢˊ', 'ㄅㄧㄢˇ', 'ㄆㄧㄢˋ'],
      answer: 'ㄆㄧㄢˊ',
      explanation: '「便」在「便宜」中讀「ㄆㄧㄢˊ」，這是特殊讀音。',
      keywords: ['便', '多音字', '價格']
    },
    {
      id: 'poly_e_13',
      question: '「調」在「調整」中的讀音是？',
      options: ['ㄊㄧㄠˊ', 'ㄉㄧㄠˋ', 'ㄊㄧㄠˋ', 'ㄉㄧㄠˊ'],
      answer: 'ㄊㄧㄠˊ',
      explanation: '「調」表示「調整、調查」等動詞時讀「ㄊㄧㄠˊ」。',
      keywords: ['調', '多音字', '動詞']
    },
    {
      id: 'poly_e_14',
      question: '「調」在「腔調」中的讀音是？',
      options: ['ㄊㄧㄠˊ', 'ㄉㄧㄠˋ', 'ㄊㄧㄠˋ', 'ㄉㄧㄠˊ'],
      answer: 'ㄉㄧㄠˋ',
      explanation: '「調」表示「音調、腔調」等名詞時讀「ㄉㄧㄠˋ」。',
      keywords: ['調', '多音字', '名詞']
    },
    {
      id: 'poly_e_15',
      question: '「興」在「高興」中的讀音是？',
      options: ['ㄒㄧㄥ', 'ㄒㄧㄥˋ', 'ㄒㄧㄥˇ', 'ㄒㄧㄥˊ'],
      answer: 'ㄒㄧㄥˋ',
      explanation: '「興」表示「興奮、高興」時讀「ㄒㄧㄥˋ」。',
      keywords: ['興', '多音字', '情緒']
    }
  ],
  
  medium: [
    {
      id: 'poly_m_01',
      question: '「便」在「方便」中的讀音是？',
      options: ['ㄅㄧㄢˋ', 'ㄆㄧㄢˊ', 'ㄅㄧㄢˇ', 'ㄆㄧㄢˋ'],
      answer: 'ㄅㄧㄢˋ',
      explanation: '「便」表示「方便、便利」時讀「ㄅㄧㄢˋ」。',
      keywords: ['便', '多音字', '方便']
    },
    {
      id: 'poly_m_02',
      question: '「便」在「便宜」中的讀音是？',
      options: ['ㄅㄧㄢˋ', 'ㄆㄧㄢˊ', 'ㄅㄧㄢˇ', 'ㄆㄧㄢˋ'],
      answer: 'ㄆㄧㄢˊ',
      explanation: '「便」在「便宜」中讀「ㄆㄧㄢˊ」，這是特殊讀音。',
      keywords: ['便', '多音字', '價格']
    },
    {
      id: 'poly_m_03',
      question: '「調」在「調整」中的讀音是？',
      options: ['ㄊㄧㄠˊ', 'ㄉㄧㄠˋ', 'ㄊㄧㄠˋ', 'ㄉㄧㄠˊ'],
      answer: 'ㄊㄧㄠˊ',
      explanation: '「調」表示「調整、調查」等動詞時讀「ㄊㄧㄠˊ」。',
      keywords: ['調', '多音字', '動詞']
    },
    {
      id: 'poly_m_04',
      question: '「調」在「腔調」中的讀音是？',
      options: ['ㄊㄧㄠˊ', 'ㄉㄧㄠˋ', 'ㄊㄧㄠˋ', 'ㄉㄧㄠˊ'],
      answer: 'ㄉㄧㄠˋ',
      explanation: '「調」表示「音調、腔調」等名詞時讀「ㄉㄧㄠˋ」。',
      keywords: ['調', '多音字', '名詞']
    },
    {
      id: 'poly_m_05',
      question: '「興」在「高興」中的讀音是？',
      options: ['ㄒㄧㄥ', 'ㄒㄧㄥˋ', 'ㄒㄧㄥˇ', 'ㄒㄧㄥˊ'],
      answer: 'ㄒㄧㄥˋ',
      explanation: '「興」表示「興奮、高興」時讀「ㄒㄧㄥˋ」。',
      keywords: ['興', '多音字', '情緒']
    }
  ],
  
  hard: [
    {
      id: 'poly_h_01',
      question: '「哄」在「哄堂大笑」中的讀音是？',
      options: ['ㄏㄨㄥ', 'ㄏㄨㄥˇ', 'ㄏㄨㄥˋ', 'ㄏㄨㄥˊ'],
      answer: 'ㄏㄨㄥ',
      explanation: '「哄」在「哄堂大笑」中讀第一聲「ㄏㄨㄥ」，表示眾人一起大笑的樣子。',
      keywords: ['哄', '多音字', '成語']
    },
    {
      id: 'poly_h_02',
      question: '「哄」在「哄騙」中的讀音是？',
      options: ['ㄏㄨㄥ', 'ㄏㄨㄥˇ', 'ㄏㄨㄥˋ', 'ㄏㄨㄥˊ'],
      answer: 'ㄏㄨㄥˇ',
      explanation: '「哄」在「哄騙、起哄」中讀第三聲「ㄏㄨㄥˇ」。',
      keywords: ['哄', '多音字', '欺騙']
    },
    {
      id: 'poly_h_03',
      question: '「哄」在「哄小孩」中的讀音是？',
      options: ['ㄏㄨㄥ', 'ㄏㄨㄥˇ', 'ㄏㄨㄥˋ', 'ㄏㄨㄥˊ'],
      answer: 'ㄏㄨㄥˋ',
      explanation: '「哄」在「哄小孩」中讀第四聲「ㄏㄨㄥˋ」，表示用好話安撫。',
      keywords: ['哄', '多音字', '安撫']
    }
  ]
}

/**
 * 形似字題庫
 * TODO: 由用戶自行補充
 */
export const similarShapeBank = {
  easy: [
    {
      id: 'sim_e_01',
      question: '「自（　）」表示「自己」的正確用字是？',
      options: ['己', '已', '巳', '戊'],
      answer: '己',
      explanation: '「己」表示自己，「已」表示已經，「巳」是地支之一。',
      keywords: ['己已巳', '形似字']
    }
    // TODO: 補充更多題目
  ],
  medium: [],
  hard: []
}

/**
 * 易錯字題庫
 * TODO: 由用戶自行補充
 */
export const commonErrorsBank = {
  easy: [
    {
      id: 'err_e_01',
      question: '「糾正」的正確寫法是哪一個？',
      options: ['糾正', '究正', '糺正', '鳩正'],
      answer: '糾正',
      explanation: '正確寫法是「糾正」，「糾」有糾察、糾正的意思。',
      keywords: ['糾正', '易錯字']
    }
    // TODO: 補充更多題目
  ],
  medium: [],
  hard: []
}

// 統一匯出
export default {
  polyphonic: polyphonicBank,
  'similar-shape': similarShapeBank,
  'common-errors': commonErrorsBank
}
