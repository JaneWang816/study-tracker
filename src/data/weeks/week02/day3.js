// src/data/weeks/week02/day3.js
// W2 Day 3：與大地立約

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 數學:質因數分解
// ==========================================
const mathQuestions = [
  // 質因數分解題型
  {
    type: 'options',
    question: '12 的質因數分解是?',
    options: ['2×2×3', '3×4', '2×6', '1×12'],
    answer: 0,
    displayAnswer: '2×2×3'
  },
  {
    type: 'options',
    question: '18 的質因數分解是?',
    options: ['2×3×3', '3×6', '2×9', '1×18'],
    answer: 0,
    displayAnswer: '2×3×3'
  },
  {
    type: 'options',
    question: '20 的質因數分解是?',
    options: ['2×2×5', '4×5', '2×10', '1×20'],
    answer: 0,
    displayAnswer: '2×2×5'
  },
  {
    type: 'options',
    question: '24 的質因數分解是?',
    options: ['2×2×2×3', '3×8', '4×6', '2×12'],
    answer: 0,
    displayAnswer: '2×2×2×3'
  },
  {
    type: 'options',
    question: '28 的質因數分解是?',
    options: ['2×2×7', '4×7', '2×14', '1×28'],
    answer: 0,
    displayAnswer: '2×2×7'
  },
  {
    type: 'options',
    question: '30 的質因數分解是?',
    options: ['2×3×5', '5×6', '3×10', '2×15'],
    answer: 0,
    displayAnswer: '2×3×5'
  },
  {
    type: 'options',
    question: '36 的質因數分解是?',
    options: ['2×2×3×3', '4×9', '6×6', '3×12'],
    answer: 0,
    displayAnswer: '2×2×3×3'
  },
  {
    type: 'options',
    question: '40 的質因數分解是?',
    options: ['2×2×2×5', '5×8', '4×10', '2×20'],
    answer: 0,
    displayAnswer: '2×2×2×5'
  },
  {
    type: 'options',
    question: '45 的質因數分解是?',
    options: ['3×3×5', '5×9', '3×15', '1×45'],
    answer: 0,
    displayAnswer: '3×3×5'
  },
  {
    type: 'options',
    question: '50 的質因數分解是?',
    options: ['2×5×5', '5×10', '2×25', '1×50'],
    answer: 0,
    displayAnswer: '2×5×5'
  },
  // 質數判斷題型
  {
    type: 'options',
    question: '2 是質數嗎?',
    options: ['是質數', '不是質數', '是合數也是質數', '無法判斷'],
    answer: 0,
    displayAnswer: '是質數'
  },
  {
    type: 'options',
    question: '3 是質數嗎?',
    options: ['是質數', '不是質數', '是合數也是質數', '無法判斷'],
    answer: 0,
    displayAnswer: '是質數'
  },
  {
    type: 'options',
    question: '4 是質數嗎?',
    options: ['不是質數', '是質數', '是合數也是質數', '無法判斷'],
    answer: 0,
    displayAnswer: '不是質數'
  },
  {
    type: 'options',
    question: '5 是質數嗎?',
    options: ['是質數', '不是質數', '是合數也是質數', '無法判斷'],
    answer: 0,
    displayAnswer: '是質數'
  },
  {
    type: 'options',
    question: '7 是質數嗎?',
    options: ['是質數', '不是質數', '是合數也是質數', '無法判斷'],
    answer: 0,
    displayAnswer: '是質數'
  },
  {
    type: 'options',
    question: '9 是質數嗎?',
    options: ['不是質數', '是質數', '是合數也是質數', '無法判斷'],
    answer: 0,
    displayAnswer: '不是質數'
  },
  {
    type: 'options',
    question: '11 是質數嗎?',
    options: ['是質數', '不是質數', '是合數也是質數', '無法判斷'],
    answer: 0,
    displayAnswer: '是質數'
  },
  {
    type: 'options',
    question: '15 是質數嗎?',
    options: ['不是質數', '是質數', '是合數也是質數', '無法判斷'],
    answer: 0,
    displayAnswer: '不是質數'
  }
]

const generateMathQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(mathQuestions)
      currentIndex = 0
    }
    const question = shuffledBank[currentIndex]
    currentIndex++
    return shuffleOptions(question)
  }
})()

// ==========================================
// 科學:植物的環境適應
// ==========================================
const scienceQuestions = [
  {
    type: 'options',
    question: '台灣高山植物(如玉山圓柏)為了適應強風,通常長成什麼樣子?',
    options: ['矮小貼地、叢生密集', '高大挺直、葉片寬大', '爬藤攀附、向上生長', '莖部中空、重心高'],
    answer: 0,
    displayAnswer: '矮小貼地、叢生密集'
  },
  {
    type: 'options',
    question: '台灣紅樹林(水筆仔)生長在海邊泥灘,它的根有什麼特殊構造?',
    options: ['氣根裸露在外,幫助呼吸', '根部儲水抵抗乾旱', '根部分泌毒素防禦', '根向上生長收集雨水'],
    answer: 0,
    displayAnswer: '氣根裸露在外,幫助呼吸'
  },
  {
    type: 'options',
    question: '生活在乾燥岩石上的苔蘚,為什麼乾燥時能暫時「死亡」,遇水又復活?',
    options: ['細胞能進入休眠狀態,水分足夠時再恢復活性', '苔蘚沒有葉綠素,不需要水', '苔蘚會從岩石中直接吸收礦物質維生', '苔蘚能儲存大量水分在細胞壁中'],
    answer: 0,
    displayAnswer: '細胞能進入休眠狀態,水分足夠時再恢復活性'
  },
  {
    type: 'options',
    question: '植物的化石記錄告訴我們什麼?',
    options: ['古代植物曾經存在的證據,以及環境變遷的線索', '植物可以變成石頭', '化石是植物的種子', '化石只在海底才找得到'],
    answer: 0,
    displayAnswer: '古代植物曾經存在的證據,以及環境變遷的線索'
  },
  {
    type: 'options',
    question: '食蟲植物(如豬籠草)為什麼演化出能捕捉昆蟲的構造?',
    options: ['生長在缺乏氮素的土壤,以昆蟲補充養分', '昆蟲傷害植物,需要主動防衛', '昆蟲幫助植物傳播種子', '捕蟲是為了保護葉片的光合作用'],
    answer: 0,
    displayAnswer: '生長在缺乏氮素的土壤,以昆蟲補充養分'
  },
  {
    type: 'options',
    question: '台灣低海拔雨林的植物,葉片通常又大又薄,這是為了?',
    options: ['增加光合作用面積,充分利用林下的散射光', '減少水分蒸發', '抵抗強風不容易折斷', '增加重量讓樹枝不搖晃'],
    answer: 0,
    displayAnswer: '增加光合作用面積,充分利用林下的散射光'
  }
]

const generateScienceQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(scienceQuestions)
      currentIndex = 0
    }
    const question = shuffledBank[currentIndex]
    currentIndex++
    return shuffleOptions(question)
  }
})()

// ==========================================
// 閱讀理解:布農族
// ==========================================
const readingQuestions = [
  {
    type: 'options',
    question: '布農族稱百步蛇為「Kavuaz」,這個詞的意思是?',
    options: ['朋友', '祖先', '守護神', '國王'],
    answer: 0,
    displayAnswer: '朋友'
  },
  {
    type: 'options',
    question: '在「百步蛇的復仇」故事中,Qabus 為什麼向母百步蛇借小蛇?',
    options: ['想用蛇的花紋作為編織衣服的參考', '想把蛇養在家裡當寵物', '想把蛇製作成藥材', '想把蛇送給頭目當禮物'],
    answer: 0,
    displayAnswer: '想用蛇的花紋作為編織衣服的參考'
  },
  {
    type: 'options',
    question: '布農族人與百步蛇最後達成了什麼協議?',
    options: ['百步蛇可供布農族織布參考,布農族則須尊敬百步蛇', '布農族每年獻祭給百步蛇', '百步蛇永遠離開布農族領地', '布農族不再編織帶有蛇紋的衣服'],
    answer: 0,
    displayAnswer: '百步蛇可供布農族織布參考,布農族則須尊敬百步蛇'
  },
  {
    type: 'options',
    question: '「百步蛇朋友」故事中,婦女的嬰兒消失後,最後在哪裡找到?',
    options: ['地面的小洞裡,變成了百步蛇', '河邊的石頭下', '樹洞裡由老鷹看管', '被帶去了另一個部落'],
    answer: 0,
    displayAnswer: '地面的小洞裡,變成了百步蛇'
  }
]

const generateReadingQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(readingQuestions)
      currentIndex = 0
    }
    const question = shuffledBank[currentIndex]
    currentIndex++
    return shuffleOptions(question)
  }
})()

export { generateMathQuestion, generateScienceQuestion, generateReadingQuestion }

// ==========================================
// Day 3 主體
// ==========================================
const day3 = {
  id: 'day3',
  name: '第3天',
  icon: '🤝',
  color: '#1B5E20',
  title: '與大地立約',

  units: [
    {
      id: 'w2d3-reading',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '臺灣原住民族與蛇：布農族的故事',
        sections: [
          {
            title: '昨日回顧 × 今日問題',
            blocks: [
              {
                type: 'text',
                content: '前兩天，排灣族和魯凱族的蛇代表著神聖起源。今天的布農族故事截然不同——這是一個關於「失信」和「和解」的故事。今日的問題是：「人和自然之間，可以立下什麼樣的約定？」'
              }
            ]
          },
          {
            title: '今日閱讀：布農族的故事',
            blocks: [
              {
                type: 'subtitle',
                content: '百步蛇的復仇'
              },
              {
                type: 'text',
                content: '布農族村落裡有一位名叫 Qabus 的婦人，上山途中看到小百步蛇身上美麗的花紋，鼓起勇氣向母百步蛇商借小蛇，作為編織衣服紋樣的參考，雙方約定七日後歸還。\n\nQabus 依著小蛇的紋樣，織出美麗的華服，欣羨的鄰人也紛紛來借小蛇，但小百步蛇在輾轉相借之間不幸身亡。七日後，母蛇依約來取小蛇，Qabus 情急謊稱衣物尚未完成，之後母蛇每每取不回小蛇，心想孩子已死，憤而向布農族人復仇。'
              },
              {
                type: 'text',
                content: '一天夜晚，一群百步蛇悄悄潛進布農部落，見人就咬，使部落損失一半以上人口。人蛇因此爭戰許久，直到最後，雙方達成協議：百步蛇願為布農族人織布參考，布農族人則須尊敬百步蛇，結束這場爭鬥。'
              },
              {
                type: 'subtitle',
                content: '百步蛇朋友'
              },
              {
                type: 'text',
                content: '另一個故事說，一位勤勞的婦女將初生嬰兒放在山洞中休息，回來後發現嬰兒消失。在悲傷中，她發現地面有一小洞，洞裡傳來嬰兒的哭聲，洞中有一條美麗的百步蛇，朝著她吐出信子，蛇身上的花紋與襁褓上的花紋如出一轍。\n\n於是布農族人相互勸戒不可傷害百步蛇，稱其為朋友。'
              },
              {
                type: 'text',
                content: '🔍 今日思考：布農族的故事說，因為「失信」而導致災難，最後以「協議」和解。你覺得這個故事想告訴我們什麼道理？'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 4,
        generator: generateReadingQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    {
      id: 'w2d3-science',
      name: '科學',
      icon: '🌿',
      lesson: {
        title: '植物如何「與環境立約」——環境適應',
        sections: [
          {
            title: '適應，是大自然的協議',
            blocks: [
              {
                type: 'text',
                content: '就像布農族與百步蛇達成和平協議，植物也在數百萬年的演化中，與各種環境「達成協議」——演化出最適合當地條件的形態與構造。這個過程叫做「環境適應」。'
              },
              {
                type: 'text',
                content: '台灣地形多樣，從海拔 0 公尺的海岸到 3952 公尺的玉山，短短幾十公里內涵蓋了熱帶到寒帶的植被類型，讓台灣成為全球生物多樣性最豐富的地區之一。'
              }
            ]
          },
          {
            title: '不同環境的植物策略',
            blocks: [
              {
                type: 'text',
                content: '海岸環境（強風、高鹽）：植物演化出厚革質葉片（減少水分蒸散）、矮小密集形態（抵抗強風）。台灣海桐、林投都是典型的海岸植物。'
              },
              {
                type: 'text',
                content: '雨林環境（遮蔭、競爭激烈）：植物演化出寬大薄葉（充分吸收林下散射光）、高大樹幹（搶奪陽光）。台灣低海拔的榕樹用氣根來增加支撐和吸收。'
              },
              {
                type: 'text',
                content: '高山環境（低溫、強風、紫外線強）：植物演化出矮小貼地（降低風阻）、葉片小而厚（保暖）、深色（吸收更多熱能）。玉山圓柏可以活到千年以上。'
              }
            ]
          },
          {
            title: '化石：大地的記憶',
            blocks: [
              {
                type: 'text',
                content: '植物的故事不只存在於活著的植物中，也被大地記錄在化石裡。化石是古代生物的遺體或痕跡，因被泥沙掩埋後礦物質逐漸取代有機物而保存下來。'
              },
              {
                type: 'text',
                content: '植物化石告訴我們：數千萬年前的台灣曾是熱帶海洋，後來地殼隆起形成山脈，植物也隨著環境改變而演化。原住民族的傳說中，洪水退去、山頭露出，正與地質記錄高度吻合——這就是神話與科學的對話。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateScienceQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    {
      id: 'w2d3-math',
      name: '數學',
      icon: '🔢',
      lesson: {
        title: '質因數分解',
        sections: [
          {
            title: '什麼是質數？',
            blocks: [
              {
                type: 'text',
                content: '質數是「只有 1 和自身兩個因數」的自然數。例如：2（1×2）、3（1×3）、5（1×5）、7（1×7）、11、13……\n\n注意：1 不是質數（只有一個因數）；2 是唯一的偶數質數。'
              },
              {
                type: 'text',
                content: '合數是「有兩個以上因數（除了 1 和本身）」的自然數。例如：4 = 2×2、6 = 2×3、12 = 2×2×3……合數都可以分解成質數的乘積。'
              }
            ]
          },
          {
            title: '質因數分解',
            blocks: [
              {
                type: 'text',
                content: '質因數分解就是把一個合數寫成「質數相乘」的形式。就像把大地分解成最基本的岩層一樣，找到數字最底層的「積木」。'
              },
              {
                type: 'text',
                content: '方法：用最小的質數（2、3、5、7……）一直除，直到商為 1。\n\n例：分解 60\n60 ÷ 2 = 30\n30 ÷ 2 = 15\n15 ÷ 3 = 5\n5 ÷ 5 = 1\n∴ 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5'
              }
            ]
          },
          {
            title: '質因數分解的應用',
            blocks: [
              {
                type: 'text',
                content: '有了質因數分解，求最大公因數和最小公倍數就更有系統了：\n\n12 = 2² × 3\n18 = 2 × 3²\n最大公因數：取每個質因數中最小的次方 → 2¹ × 3¹ = 6\n最小公倍數：取每個質因數中最大的次方 → 2² × 3² = 36'
              },
              {
                type: 'text',
                content: '這就像找部落之間的共同規則（公因數）和所有人都同意的最大範圍（公倍數）——質因數分解讓我們看到數字最深層的結構。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateMathQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    {
      id: 'w2d3-review',
      name: '今日回顧',
      icon: '🌿',
      lesson: {
        title: '承諾與規律',
        sections: [
          {
            title: '今天學了什麼？',
            blocks: [
              {
                type: 'text',
                content: '今天的核心概念是「約定與規律」：布農族與百步蛇的故事說明了承諾的重要性；植物的環境適應是大自然與環境長期磨合的結果；質因數分解則讓我們看到數字最基本的組成規律。'
              },
              {
                type: 'text',
                content: '📌 閱讀：布農族因失信導致災難，最終以尊重達成和解，稱百步蛇為「朋友」。\n📌 科學：植物的環境適應是數百萬年演化的結果，台灣從海岸到高山各有獨特的植物策略。化石是大地保存的生命記憶。\n📌 數學：質數只有 1 和本身兩個因數；合數可分解為質數的乘積，這就是質因數分解。'
              },
              {
                type: 'text',
                content: '🔮 明天預告：明天是動筆日！我們會讀邵族和泰雅族的故事，進行本週的數學綜合應用，並做閱讀理解的深度練習。'
              }
            ]
          }
        ]
      },
      practice: null
    }
  ]
}

export default day3
