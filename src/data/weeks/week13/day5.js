// src/data/weeks/week13/day5.js
// 第13週 - 第五天：我們的未來選擇

// ==========================================
// 練習題生成器 - 改良版(使用洗牌機制)
// ==========================================

import { shuffleArray, shuffleOptions } from '../../utils'

// 【社會】氣候難民與永續發展練習題庫
const socialQuestions = [
  {
    type: 'options',
    question: '「氣候難民」是指什麼?',
    options: ['因為戰爭逃難的人', '因為氣候變遷被迫離開家園的人', '在難民營工作的氣象專家', '研究氣候的科學家'],
    answer: 1,
    displayAnswer: '因為氣候變遷被迫離開家園的人'
  },
  {
    type: 'options',
    question: '吐瓦魯面臨什麼威脅?',
    options: ['火山爆發', '地震頻繁', '海平面上升,國土被淹沒', '沙漠化'],
    answer: 2,
    displayAnswer: '海平面上升,國土被淹沒'
  },
  {
    type: 'options',
    question: '聯合國估計,到2050年可能有多少氣候難民?',
    options: ['數百萬人', '數千萬人', '數億到10億人', '全人類'],
    answer: 2,
    displayAnswer: '數億到10億人'
  },
  {
    type: 'options',
    question: '台灣在氣候變遷中的角色是什麼?',
    options: ['只是受害者', '只是排放大國', '既是排放者也是受害者,都有責任', '與台灣無關'],
    answer: 2,
    displayAnswer: '既是排放者也是受害者,都有責任'
  },
  {
    type: 'options',
    question: '聯合國永續發展目標第13項是什麼?',
    options: ['消除貧窮', '氣候行動', '教育品質', '性別平等'],
    answer: 1,
    displayAnswer: '氣候行動'
  },
  {
    type: 'options',
    question: '吐瓦魯的最高點海拔是多少?',
    options: ['4.5公尺', '10公尺', '50公尺', '100公尺'],
    answer: 0,
    displayAnswer: '4.5公尺'
  },
  {
    type: 'options',
    question: '台灣面臨氣候變遷的威脅包括?',
    options: ['只有颱風', '強颱、豪雨、乾旱、海平面上升', '只有乾旱', '沒有威脅'],
    answer: 1,
    displayAnswer: '強颱、豪雨、乾旱、海平面上升'
  },
  {
    type: 'options',
    question: '台灣2050年的氣候目標是?',
    options: ['減排30%', '減排50%', '淨零排放', '維持現狀'],
    answer: 2,
    displayAnswer: '淨零排放'
  },
  {
    type: 'options',
    question: '「減緩」和「調適」的差別是?',
    options: ['沒有差別', '減緩是減少排放,調適是因應衝擊', '減緩比較重要', '調適比較重要'],
    answer: 1,
    displayAnswer: '減緩是減少排放,調適是因應衝擊'
  },
  {
    type: 'options',
    question: '下列哪個「不是」台灣西部沿海面臨的問題?',
    options: ['地層下陷', '海平面上升', '火山爆發', '雙重威脅'],
    answer: 2,
    displayAnswer: '火山爆發'
  }
]

const generateSocialQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(socialQuestions)
      currentIndex = 0
    }
    
    const question = shuffledBank[currentIndex]
    currentIndex++
    
    return shuffleOptions(question)
  }
})()

// 【數學】跨週綜合練習題庫
const mathQuestions = [
  {
    type: 'options',
    question: '北極冰層融化,海平面從基準0上升了8公分,用有號數表示是?',
    options: ['-8公分', '+8公分', '8公分', '0公分'],
    answer: 1,
    displayAnswer: '+8公分'
  },
  {
    type: 'options',
    question: '某國承諾2030年減排50%。如果2020年排放200億噸,2030年目標是多少?',
    options: ['50億噸', '100億噸', '150億噸', '200億噸'],
    answer: 1,
    displayAnswer: '100億噸 (200×0.5=100)'
  },
  {
    type: 'options',
    question: '台灣面積約36000平方公里,森林覆蓋率60%,森林面積約多少平方公里?',
    options: ['18000', '21600', '24000', '30000'],
    answer: 1,
    displayAnswer: '21600平方公里 (36000×0.6=21600)'
  },
  {
    type: 'options',
    question: '某城市綠覆蓋率從15%提升到25%,增加了幾個百分點?',
    options: ['5個百分點', '10個百分點', '15個百分點', '25個百分點'],
    answer: 1,
    displayAnswer: '10個百分點 (25-15=10)'
  },
  {
    type: 'options',
    question: '某地區100戶家庭,每戶每月節電30度,一年共節電多少萬度?',
    options: ['3萬度', '3.6萬度', '36萬度', '360萬度'],
    answer: 1,
    displayAnswer: '3.6萬度 (100×30×12=36000度=3.6萬度)'
  },
  {
    type: 'options',
    question: '全球平均溫度升高1.1°C,預計2030年可能升高1.5°C,還會再升高多少?',
    options: ['0.3°C', '0.4°C', '0.5°C', '2.6°C'],
    answer: 1,
    displayAnswer: '0.4°C (1.5-1.1=0.4)'
  },
  {
    type: 'options',
    question: '冰川以每年50公尺的速度後退,10年後退多少公尺?',
    options: ['50公尺', '100公尺', '500公尺', '1000公尺'],
    answer: 2,
    displayAnswer: '500公尺 (50×10=500)'
  },
  {
    type: 'options',
    question: '某國2020年碳排放10億噸,每年減少8%,2021年排放量是多少?',
    options: ['8億噸', '9.2億噸', '9.8億噸', '10.8億噸'],
    answer: 1,
    displayAnswer: '9.2億噸 (10×0.92=9.2)'
  },
  {
    type: 'options',
    question: '避難所長50公尺,寬30公尺,面積多少平方公尺?',
    options: ['80平方公尺', '150平方公尺', '1500平方公尺', '15000平方公尺'],
    answer: 2,
    displayAnswer: '1500平方公尺 (50×30=1500)'
  },
  {
    type: 'options',
    question: '某市4年內綠地從500公頃增加到700公頃,平均每年增加多少公頃?',
    options: ['25公頃', '50公頃', '75公頃', '100公頃'],
    answer: 1,
    displayAnswer: '50公頃 ((700-500)÷4=50)'
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
    
    if (question.type === 'options') {
      return shuffleOptions(question)
    }
    return { ...question }
  }
})()

// 【科學】能源轉型練習題庫
const scienceQuestions = [
  {
    type: 'options',
    question: '台灣目前電力來源中,占比最大的是什麼?',
    options: ['核能', '火力發電', '太陽能', '風力發電'],
    answer: 1,
    displayAnswer: '火力發電'
  },
  {
    type: 'options',
    question: '為什麼台灣適合發展離岸風電?',
    options: ['因為沒有土地', '因為台灣海峽風力資源豐富', '因為比較便宜', '因為其他國家都在做'],
    answer: 1,
    displayAnswer: '因為台灣海峽風力資源豐富'
  },
  {
    type: 'options',
    question: '台灣計畫在哪一年禁售燃油汽車?',
    options: ['2030年', '2040年', '2050年', '2060年'],
    answer: 2,
    displayAnswer: '2050年'
  },
  {
    type: 'options',
    question: '「循環經濟」的概念是什麼?',
    options: ['經濟要循環流動', '減少資源浪費,物品重複利用', '錢要一直花一直賺', '經濟成長要持續'],
    answer: 1,
    displayAnswer: '減少資源浪費,物品重複利用'
  },
  {
    type: 'options',
    question: '再生能源面臨的主要挑戰是什麼?',
    options: ['太貴', '不環保', '發電不穩定,需要儲能技術', '會產生噪音'],
    answer: 2,
    displayAnswer: '發電不穩定,需要儲能技術'
  },
  {
    type: 'options',
    question: '台灣目前火力發電約占多少比例?',
    options: ['50%', '60%', '70%', '80%'],
    answer: 3,
    displayAnswer: '80%'
  },
  {
    type: 'options',
    question: '台灣2050淨零路徑包括哪些轉型?',
    options: ['只有能源轉型', '能源、產業、運輸、生活四大轉型', '只有運輸轉型', '只有產業轉型'],
    answer: 1,
    displayAnswer: '能源、產業、運輸、生活四大轉型'
  },
  {
    type: 'options',
    question: '屋頂太陽能的優點是?',
    options: ['不佔用土地', '發電量最大', '不需要陽光', '最便宜'],
    answer: 0,
    displayAnswer: '不佔用土地'
  },
  {
    type: 'options',
    question: '台灣計畫何時禁售燃油機車?',
    options: ['2030年', '2040年', '2050年', '2060年'],
    answer: 1,
    displayAnswer: '2040年'
  },
  {
    type: 'options',
    question: '碳捕捉技術的功能是?',
    options: ['發電', '捕捉工廠排放的CO₂', '種植物', '製造氧氣'],
    answer: 1,
    displayAnswer: '捕捉工廠排放的CO₂'
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

// 【語文】詞彙總複習練習題庫
const vocabQuestions = [
  {
    type: 'options',
    question: '「溫室效應」是指什麼?',
    options: ['溫室裡很熱的現象', '大氣中溫室氣體保留熱能的現象', '種植蔬菜的技術', '玻璃反射陽光'],
    answer: 1,
    displayAnswer: '大氣中溫室氣體保留熱能的現象'
  },
  {
    type: 'options',
    question: '「淨零排放」的意思是?',
    options: ['完全不排放', '排放與吸收達到平衡', '只排放一點點', '排放後清理乾淨'],
    answer: 1,
    displayAnswer: '排放與吸收達到平衡'
  },
  {
    type: 'options',
    question: '「熱島效應」主要發生在哪裡?',
    options: ['島嶼', '都市中心', '熱帶地區', '溫室'],
    answer: 1,
    displayAnswer: '都市中心'
  },
  {
    type: 'options',
    question: '「調適」在氣候變遷中的意思是?',
    options: ['適應並因應氣候變化', '調整溫度', '適應生活', '調查問題'],
    answer: 0,
    displayAnswer: '適應並因應氣候變化'
  },
  {
    type: 'options',
    question: '「再生能源」包括哪些?',
    options: ['煤炭、石油', '太陽能、風力', '核能', '天然氣'],
    answer: 1,
    displayAnswer: '太陽能、風力'
  },
  {
    type: 'options',
    question: '「循環經濟」強調什麼概念?',
    options: ['經濟要成長', '資源重複利用,減少浪費', '金錢循環', '經濟循環'],
    answer: 1,
    displayAnswer: '資源重複利用,減少浪費'
  },
  {
    type: 'options',
    question: '「早期預警」的重要性是什麼?',
    options: ['讓人早點起床', '提前知道危險,有時間準備', '早點發現敵人', '提早上班'],
    answer: 1,
    displayAnswer: '提前知道危險,有時間準備'
  },
  {
    type: 'options',
    question: '「韌性」在氣候變遷中是指什麼?',
    options: ['身體很強壯', '能夠承受衝擊並快速恢復的能力', '不怕熱', '不怕冷'],
    answer: 1,
    displayAnswer: '能夠承受衝擊並快速恢復的能力'
  }
]

const generateVocabQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(vocabQuestions)
      currentIndex = 0
    }
    
    const question = shuffledBank[currentIndex]
    currentIndex++
    
    return shuffleOptions(question)
  }
})()

// ==========================================
// Day 5 資料
// ==========================================

const day5 = {
  id: 'day5',
  name: '第五天',
  icon: '🌍',
  color: '#2563EB',
  title: '我們的未來選擇',

  units: [

    // ==========================================
    // 開場：文學閱讀
    // ==========================================
    {
      id: 'opening',
      name: '開場閱讀',
      icon: '🌍',
      lesson: {
        title: '《當地球發燒的時候》節選（第五章）',
        sections: [
          {
            title: '沒有家園的人們',
            blocks: [
              {
                type: 'text',
                content: '吐瓦魯,一個你可能從未聽過的小島國。這個位於太平洋上的國家,由9個環礁組成,總面積只有26平方公里,大約是台北市大安區的兩倍大。全國人口1萬1千人,還不到台灣一個小鄉鎮的人口。'
              },
              {
                type: 'text',
                content: '但吐瓦魯正在消失。這個國家的最高點,海拔只有4.5公尺。隨著海平面上升,每次大潮來襲,海水就會淹沒土地、侵蝕海岸、污染淡水。居民的家園一點一點地被海水吞噬。'
              },
              {
                type: 'quote',
                content: '我們沒有製造氣候危機,但我們卻是第一批受害者。我們的人民將成為氣候難民,我們的文化將消失在海水之下。',
                author: '吐瓦魯總理'
              },
              {
                type: 'text',
                content: '什麼是氣候難民?就是因為氣候變遷——海平面上升、乾旱、洪水、極端高溫——而被迫離開家園的人。聯合國估計,到2050年,全球可能有數億人到10億人成為氣候難民。'
              },
              {
                type: 'text',
                content: '這不只是吐瓦魯的問題。孟加拉的低窪地區、印度的海岸城市、非洲的乾旱地帶、南美的洪水區,都面臨同樣的威脅。當這些地方變得無法居住,人們會往哪裡去?'
              }
            ]
          },
          {
            title: '台灣的角色',
            blocks: [
              {
                type: 'text',
                content: '台灣雖然不是聯合國會員國,但我們仍然是地球村的一員,也有責任面對氣候變遷。'
              },
              {
                type: 'text',
                content: '作為一個已開發的工業國家,台灣的人均碳排放量其實不低,在全球排名前30名。我們使用的電力,有80%來自火力發電;我們的製造業,特別是半導體、石化產業,排放大量溫室氣體。'
              },
              {
                type: 'text',
                content: '但另一方面,台灣也是氣候變遷的受害者。我們面臨強颱、豪雨、乾旱的威脅;我們的沿海地區,也會受到海平面上升的影響。'
              },
              {
                type: 'text',
                content: '所以,台灣必須做兩件事:減緩(減少排放)和調適(因應衝擊)。'
              },
              {
                type: 'text',
                content: '**減緩**:台灣承諾2050年達到淨零排放。這需要:\n• 能源轉型(增加太陽能、風力發電)\n• 產業轉型(發展綠色製造)\n• 交通轉型(推動電動車)\n• 生活轉型(節能減碳)'
              },
              {
                type: 'text',
                content: '**調適**:\n• 強化防災系統\n• 改善水資源管理\n• 保護海岸線\n• 協助農業因應氣候變化'
              },
              {
                type: 'quote',
                content: '氣候變遷是這一代人類面臨的最大挑戰。我們不能把問題留給下一代,因為留給他們的時間已經不多了。',
                author: '鄭明典'
              }
            ]
          },
          {
            title: '你們的未來',
            blocks: [
              {
                type: 'text',
                content: '現在的小學生,2050年時會是30多歲,正值人生的黃金時期。那時候的世界,會是什麼樣子?'
              },
              {
                type: 'text',
                content: '**如果我們成功守住1.5°C**:\n氣候雖然變化,但還在可控範圍。極端氣候仍會發生,但頻率不會太高。海平面上升緩慢,沿海城市有時間調適。大部分生態系統得以保存。人類學會了與暖化的地球共存。'
              },
              {
                type: 'text',
                content: '**如果我們失敗,升溫超過2°C或3°C**:\n極端氣候成為常態。許多沿海城市被迫放棄。生態系統崩潰,物種大量滅絕。糧食生產不穩定,水資源短缺。氣候難民引發國際衝突。'
              },
              {
                type: 'text',
                content: '選擇哪個未來?不是由政治人物、科學家或企業家決定,而是由每一個人的行動決定。你們這一代,將親身經歷這個選擇的結果。'
              },
              {
                type: 'text',
                content: '所以,從今天開始行動吧。節約能源、愛護環境、關心公共政策、支持綠色產業。也許一個人的力量很小,但當數百萬、數十億人一起行動,就能改變世界。'
              },
              {
                type: 'text',
                content: '地球的未來,在你們手中。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // ==========================================
    // 單元一：社會 — 永續發展
    // ==========================================
    {
      id: 'social-sustainable-development',
      name: '社會:永續發展',
      icon: '🌍',
      lesson: {
        title: '氣候難民與永續發展',
        sections: [
          {
            title: '氣候難民問題',
            blocks: [
              {
                type: 'text',
                content: '**氣候難民的定義**:\n因為氣候變遷導致的環境惡化(海平面上升、乾旱、洪水、極端高溫等),而被迫離開原居地的人。'
              },
              {
                type: 'text',
                content: '**面臨威脅的地區**:\n\n• 小島國:吐瓦魯、馬爾地夫、吉里巴斯等,面臨國土被淹沒\n\n• 沿海低窪地:孟加拉、荷蘭、越南湄公河三角洲\n\n• 乾旱地區:非洲薩赫爾地帶、中東部分地區\n\n• 冰川融化區:喜馬拉雅山區、安地斯山區'
              },
              {
                type: 'text',
                content: '**台灣的沿海風險**:\n西部沿海地區,特別是雲林、嘉義、台南的海岸,面臨地層下陷加上海平面上升的雙重威脅。雖然不至於像吐瓦魯那麼嚴重,但仍需要長期規劃和因應。'
              }
            ]
          },
          {
            title: '聯合國永續發展目標SDGs',
            blocks: [
              {
                type: 'text',
                content: '聯合國提出17項永續發展目標(SDGs),其中第13項就是「氣候行動」。這些目標提醒我們:環境、經濟、社會是相互關聯的。'
              },
              {
                type: 'text',
                content: '與氣候變遷相關的SDGs:\n\n• SDG 7: 可負擔的潔淨能源\n• SDG 11: 永續城市與社區\n• SDG 12: 負責任的消費與生產\n• SDG 13: 氣候行動\n• SDG 14: 保育海洋生態\n• SDG 15: 保育陸域生態'
              },
              {
                type: 'text',
                content: '台灣雖然不是聯合國會員,但政府和民間都在推動SDGs:\n\n• 發展再生能源(SDG 7)\n• 推動循環經濟(SDG 12)\n• 保護海洋(SDG 14)'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateSocialQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    // ==========================================
    // 單元二：數學 — 跨週綜合
    // ==========================================
    {
      id: 'math-comprehensive-review',
      name: '數學:跨週綜合',
      icon: '📊',
      lesson: {
        title: 'W1-W12數學總複習',
        sections: [
          {
            title: '氣候變遷情境題',
            blocks: [
              {
                type: 'text',
                content: '這週我們複習了W1-W12的數學概念,現在用氣候變遷主題,做最後的綜合練習。'
              },
              {
                type: 'text',
                content: '這些題目整合了:\n\n• W1: 數線與負數\n• W2-W3: 分數、小數、比例\n• W4-W6: 面積、體積、比例尺\n• W7-W8: 速率、百分比\n• W9-W10: 統計圖表\n• W11-W12: 代數與解題'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 10,
        generator: generateMathQuestion,
        checkAnswer: (question, userAnswer) => {
          if (question.type === 'options') {
            return parseInt(userAnswer) === question.answer
          } else {
            const cleanAnswer = String(userAnswer).trim().replace(/[^\d.+-]/g, '')
            const cleanExpected = String(question.answer).trim().replace(/[^\d.+-]/g, '')
            return cleanAnswer === cleanExpected
          }
        }
      }
    },

    // ==========================================
    // 單元三：科學 — 能源轉型
    // ==========================================
    {
      id: 'science-energy-transition',
      name: '科學:能源轉型',
      icon: '🔬',
      lesson: {
        title: '台灣2050淨零路徑',
        sections: [
          {
            title: '台灣的能源現況',
            blocks: [
              {
                type: 'text',
                content: '台灣目前的電力來源:\n\n• 火力發電(煤炭、天然氣): 約80%\n• 核能: 約8%\n• 再生能源(太陽能、風力、水力): 約6%\n• 其他: 約6%'
              },
              {
                type: 'text',
                content: '火力發電是碳排放的主要來源。要達到2050淨零目標,台灣必須大幅減少火力發電,增加再生能源。'
              }
            ]
          },
          {
            title: '台灣2050淨零路徑',
            blocks: [
              {
                type: 'text',
                content: '**能源轉型**:\n\n• 大幅發展離岸風電(台灣海峽風力資源豐富)\n• 推動屋頂太陽能(利用建築物屋頂)\n• 發展儲能技術(解決再生能源不穩定問題)\n• 研究氫能(未來可能的清潔能源)'
              },
              {
                type: 'text',
                content: '**產業轉型**:\n\n• 製造業提高能源效率\n• 發展循環經濟(減少資源浪費)\n• 推動碳捕捉技術(捕捉工廠排放的CO₂)'
              },
              {
                type: 'text',
                content: '**運輸轉型**:\n\n• 2040年禁售燃油機車\n• 2050年禁售燃油汽車\n• 發展大眾運輸系統'
              },
              {
                type: 'text',
                content: '**生活轉型**:\n\n• 推廣節能家電\n• 綠建築標準\n• 減少食物浪費'
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

    // ==========================================
    // 單元四：語文 — 完成報告與詞彙複習
    // ==========================================
    {
      id: 'chinese-writing-completion',
      name: '語文:完成報告',
      icon: '✍️',
      lesson: {
        title: '完成環境觀察報告',
        sections: [
          {
            title: '完稿指引',
            blocks: [
              {
                type: 'text',
                content: '今天請完成報告的後半部:\n\n• 建議方案:針對你觀察到的問題,提出具體、可行的改善建議\n\n• 結論反思:你學到了什麼?對環境議題有什麼新的認識?'
              },
              {
                type: 'text',
                content: '**建議方案的重點**:\n\n• 分成「個人層面」和「社會層面」\n• 具體說明怎麼做,不要只是空談\n• 參考這週學到的概念(節能、減碳、調適...)\n• 評估可行性,不要提出不切實際的建議'
              },
              {
                type: 'text',
                content: '**結論反思的重點**:\n\n• 你的觀察改變了什麼想法?\n• 你願意採取哪些行動?\n• 你對未來有什麼期許?'
              }
            ]
          },
          {
            title: '修改潤飾',
            blocks: [
              {
                type: 'text',
                content: '完成初稿後,請檢查:\n\n✓ 是否有錯字?\n✓ 句子是否通順?\n✓ 數據是否正確?\n✓ 邏輯是否清楚?\n✓ 有沒有加入圖表或照片?'
              },
              {
                type: 'text',
                content: '也可以請同學、家人幫忙看看,給你一些回饋意見。好的報告是修改出來的!'
              }
            ]
          },
          {
            title: '詞彙總複習',
            blocks: [
              {
                type: 'text',
                content: '這週我們學了很多新詞彙,請複習以下重點:\n\n**氣候相關**:\n全球暖化、氣候變遷、溫室效應、溫室氣體、二氧化碳、化石燃料、淨零排放、碳循環'
              },
              {
                type: 'text',
                content: '**天氣現象**:\n熱島效應、熱浪、極端氣候、聖嬰現象、異常值'
              },
              {
                type: 'text',
                content: '**應對策略**:\n氣候難民、調適、韌性、早期預警、防災、永續發展、再生能源、能源轉型、循環經濟'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 8,
        generator: generateVocabQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    // ==========================================
    // 單元五：藝術欣賞
    // ==========================================
    {
      id: 'arts-appreciation',
      name: '藝術欣賞',
      icon: '🎨',
      lesson: {
        title: '氣候變遷的藝術表達',
        sections: [
          {
            title: '影像作品',
            blocks: [
              {
                type: 'text',
                content: '**紀錄片推薦**:\n\n• 《洪水來臨前》(Before the Flood, 2016):李奧納多主持,記錄全球各地氣候變遷現場\n\n• 《追逐珊瑚》(Chasing Coral, 2017):記錄珊瑚白化的悲劇\n\n• 《我們的星球》(Our Planet, 2019):Netflix原創,展現地球生態之美與危機'
              },
              {
                type: 'text',
                content: '這些作品不只是記錄,更是呼籲。透過鏡頭,讓我們看見氣候變遷不是抽象的數字,而是真實的生命、真實的家園。'
              }
            ]
          },
          {
            title: '音樂與詩歌',
            blocks: [
              {
                type: 'text',
                content: '**歌曲推薦**:\n\n• Michael Jackson - Earth Song (地球之歌)\n• Jack Johnson - The 3 R\'s (環保三原則:Reduce, Reuse, Recycle)'
              },
              {
                type: 'text',
                content: '**台灣環境詩歌**:\n\n• 吳晟《甜蜜的負荷》:對土地的深情\n• 向陽《春回鳳凰山》:921震災後的重生希望\n• 劉克襄的自然書寫:用文字記錄台灣山林'
              },
              {
                type: 'text',
                content: '藝術讓科學有了溫度,讓數據有了情感。當我們被感動,才會真正想要改變。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // ==========================================
    // 收尾：本週總結
    // ==========================================
    {
      id: 'closing-weekly-summary',
      name: '本週總結',
      icon: '💭',
      lesson: {
        title: 'W13: 變遷與挑戰 - 完整回顧',
        sections: [
          {
            title: '五天學習歷程',
            blocks: [
              {
                type: 'text',
                content: '**Day 1: 地球為什麼發燒?**\n我們理解了全球暖化的科學證據,知道《巴黎氣候協定》1.5°C目標的由來,學會用數學解讀氣候數據,掌握溫室效應的原理。'
              },
              {
                type: 'text',
                content: '**Day 2: 台灣哪裡特別熱?**\n我們把焦點拉回台灣,認識都市熱島效應,學會計算綠覆蓋率,理解熱傳遞原理,思考如何讓城市降溫。'
              },
              {
                type: 'text',
                content: '**Day 3: 極端天氣是什麼?**\n我們看到2003年歐洲熱浪的教訓,認識台灣的極端氣候案例,學會分析氣候數據,理解聖嬰現象的影響。'
              },
              {
                type: 'text',
                content: '**Day 4: 我們能做什麼?**\n我們認識台灣的防災系統,學會個人防災準備,用數學規劃防災需求,理解氣象預報原理,開始撰寫環境觀察報告。'
              },
              {
                type: 'text',
                content: '**Day 5: 我們的未來選擇**\n我們面對氣候難民的嚴肅議題,理解台灣的角色和責任,複習所有數學概念,認識能源轉型路徑,完成環境觀察報告,透過藝術作品感受環境之美。'
              }
            ]
          },
          {
            title: '核心領悟',
            blocks: [
              {
                type: 'text',
                content: '經過一週的學習,我們應該領悟到:'
              },
              {
                type: 'text',
                content: '1. **氣候變遷是真實的**\n這不是遙遠的未來,而是正在發生的現在。科學數據、極端天氣、冰川融化,都是確鑿的證據。'
              },
              {
                type: 'text',
                content: '2. **我們都有責任**\n無論是排放大國還是小島國家,無論是政府還是個人,我們都是地球村的一員,都有責任面對這個挑戰。'
              },
              {
                type: 'text',
                content: '3. **我們並非無能為力**\n從國際協定到在地行動,從政府政策到個人選擇,每一個層級都可以採取行動。關鍵是:現在就開始。'
              },
              {
                type: 'text',
                content: '4. **準備比預測更重要**\n我們無法完全預測氣候如何變化,但我們可以準備好應對各種可能。防災系統、調適策略、韌性社會,都是我們的保護傘。'
              },
              {
                type: 'text',
                content: '5. **未來在我們手中**\n你們這一代,將親身經歷氣候變遷的關鍵時期。選擇哪個未來,取決於現在的行動。'
              }
            ]
          },
          {
            title: '繼續行動',
            blocks: [
              {
                type: 'text',
                content: '這週的學習結束了,但行動才剛開始。你可以:'
              },
              {
                type: 'text',
                content: '• 養成節能習慣:隨手關燈、拔插頭、適當使用冷氣\n\n• 選擇綠色交通:走路、騎腳踏車、搭大眾運輸\n\n• 減少浪費:購物前想清楚、用完再買、物品重複使用\n\n• 關心環境議題:閱讀新聞、參與討論、支持環保政策\n\n• 影響他人:跟家人朋友分享你學到的知識'
              },
              {
                type: 'quote',
                content: '我們不能阻止地球發燒,但我們可以減緩發燒的速度,也可以學會在發燒的地球上更好地生存。',
                author: '鄭明典'
              },
              {
                type: 'text',
                content: '地球的未來,在你們手中。'
              }
            ]
          }
        ]
      },
      practice: null
    }

  ]
}

export default day5
