// src/data/weeks/week13/day4.js
// 第13週 - 第四天：我們能做什麼？

// ==========================================
// 練習題生成器 - 改良版(使用洗牌機制)
// ==========================================

import { shuffleArray, shuffleOptions } from '../../utils'

// 【社會】防災與調適練習題庫
const socialQuestions = [
  {
    type: 'options',
    question: '為什麼2019年歐洲熱浪的死亡人數比2003年少很多?',
    options: ['因為2019年溫度比較低', '因為歐洲人習慣高溫了', '因為有了預警系統和準備', '因為醫療技術進步'],
    answer: 2,
    displayAnswer: '因為有了預警系統和準備'
  },
  {
    type: 'options',
    question: '台灣的土石流預警系統如何運作?',
    options: ['靠人工巡視山區', '當雨量達到警戒值自動發送簡訊', '颱風來就一定發警報', '只在白天監測'],
    answer: 1,
    displayAnswer: '當雨量達到警戒值自動發送簡訊'
  },
  {
    type: 'options',
    question: '「海綿城市」的概念是什麼?',
    options: ['城市要像海綿一樣柔軟', '讓城市能吸水、蓄水、排水', '在城市裡種植海綿', '城市建築要防水'],
    answer: 1,
    displayAnswer: '讓城市能吸水、蓄水、排水'
  },
  {
    type: 'options',
    question: '緊急避難包應該準備幾天份的物資?',
    options: ['1天', '2天', '3天', '7天'],
    answer: 2,
    displayAnswer: '3天'
  },
  {
    type: 'options',
    question: '下列哪一項「不是」個人可以做的減碳行動?',
    options: ['節約用電', '搭乘大眾運輸', '減少食物浪費', '控制別人的行為'],
    answer: 3,
    displayAnswer: '控制別人的行為'
  },
  {
    type: 'options',
    question: '氣象預報最重要的價值是什麼?',
    options: ['預測明天下不下雨', '讓你有時間準備', '讓你知道溫度', '提供聊天話題'],
    answer: 1,
    displayAnswer: '讓你有時間準備'
  },
  {
    type: 'options',
    question: '防災公園平常的功能是?',
    options: ['只能當避難所', '休閒空間,災害時作為避難場所', '軍事基地', '停車場'],
    answer: 1,
    displayAnswer: '休閒空間,災害時作為避難場所'
  },
  {
    type: 'options',
    question: '緊急避難包應該放在哪裡?',
    options: ['藏在最隱密的地方', '容易拿取的地方', '車庫', '地下室'],
    answer: 1,
    displayAnswer: '容易拿取的地方'
  },
  {
    type: 'options',
    question: '個人防災準備包括哪些?',
    options: ['只要準備食物', '只要準備錢', '避難包、避難路線、氣象資訊、保險規劃', '什麼都不用準備'],
    answer: 2,
    displayAnswer: '避難包、避難路線、氣象資訊、保險規劃'
  },
  {
    type: 'options',
    question: '荷蘭如何因應海平面上升威脅?',
    options: ['放棄沿海地區', '發展先進水利工程,與水共存', '建造高牆', '遷移到其他國家'],
    answer: 1,
    displayAnswer: '發展先進水利工程,與水共存'
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

// 【數學】防災規劃綜合練習題庫
const mathQuestions = [
  {
    type: 'options',
    question: '某避難所面積5000平方公尺,扣除設施(占25%),每人需2平方公尺,可容納多少人?',
    options: ['1500人', '1875人', '2500人', '3750人'],
    answer: 1,
    displayAnswer: '1875人 (5000×0.75÷2=1875)'
  },
  {
    type: 'options',
    question: '救援物資800箱,要按3:5比例分給A村和B村,A村分到多少箱?',
    options: ['200箱', '300箱', '400箱', '500箱'],
    answer: 1,
    displayAnswer: '300箱 (800×3/8=300)'
  },
  {
    type: 'options',
    question: '某地區有x戶受災,每戶發放3箱物資,共需540箱,x等於多少?',
    options: ['120戶', '150戶', '180戶', '200戶'],
    answer: 2,
    displayAnswer: '180戶 (3x=540, x=180)'
  },
  {
    type: 'options',
    question: '緊急避難包建議準備12公升飲用水(3天份),平均每天每人需要多少公升?',
    options: ['2公升', '3公升', '4公升', '6公升'],
    answer: 2,
    displayAnswer: '4公升 (12÷3=4)'
  },
  {
    type: 'options',
    question: '某家庭4口人,準備3天避難物資,每人每天需2公升水,共需多少公升?',
    options: ['12公升', '18公升', '24公升', '30公升'],
    answer: 2,
    displayAnswer: '24公升 (4×3×2=24)'
  },
  {
    type: 'options',
    question: '某村300戶,準備率80%,實際準備避難包的有多少戶?',
    options: ['200戶', '220戶', '240戶', '260戶'],
    answer: 2,
    displayAnswer: '240戶 (300×0.8=240)'
  },
  {
    type: 'options',
    question: '公園10000平方公尺,扣除道路設施(30%),每人需2平方公尺,可容納多少人?',
    options: ['3000人', '3500人', '4000人', '5000人'],
    answer: 1,
    displayAnswer: '3500人 (10000×0.7÷2=3500)'
  },
  {
    type: 'options',
    question: '600箱物資按受災戶數分配:A村50戶、B村80戶、C村40戶、D村60戶、E村70戶。B村分多少箱?',
    options: ['100箱', '120箱', '150箱', '160箱'],
    answer: 3,
    displayAnswer: '160箱 (600×80/300=160)'
  },
  {
    type: 'options',
    question: '避難所長80公尺,寬50公尺,面積多少平方公尺?',
    options: ['130平方公尺', '4000平方公尺', '8000平方公尺', '16000平方公尺'],
    answer: 1,
    displayAnswer: '4000平方公尺 (80×50=4000)'
  },
  {
    type: 'options',
    question: '某區域需疏散3600人,每輛巴士載60人,需要多少輛巴士?',
    options: ['50輛', '60輛', '70輛', '80輛'],
    answer: 1,
    displayAnswer: '60輛 (3600÷60=60)'
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

// 【科學】氣象預報練習題庫
const scienceQuestions = [
  {
    type: 'options',
    question: '氣象雷達的主要功能是什麼?',
    options: ['測量溫度', '偵測雨滴和雨帶', '觀察太陽', '預測地震'],
    answer: 1,
    displayAnswer: '偵測雨滴和雨帶'
  },
  {
    type: 'options',
    question: '氣象衛星從哪裡觀測地球?',
    options: ['山頂', '飛機上', '太空', '海面'],
    answer: 2,
    displayAnswer: '太空'
  },
  {
    type: 'options',
    question: '數值預報需要用什麼來進行大量計算?',
    options: ['計算機', '手機', '超級電腦', '筆算'],
    answer: 2,
    displayAnswer: '超級電腦'
  },
  {
    type: 'options',
    question: '一般來說,幾天內的天氣預報相對準確?',
    options: ['1天內', '3天內', '10天內', '30天內'],
    answer: 1,
    displayAnswer: '3天內'
  },
  {
    type: 'options',
    question: '為什麼預報越遠越不準確?',
    options: ['因為氣象員偷懶', '因為大氣系統複雜,小誤差會累積放大', '因為電腦不夠快', '因為衛星看不遠'],
    answer: 1,
    displayAnswer: '因為大氣系統複雜,小誤差會累積放大'
  },
  {
    type: 'options',
    question: '台灣氣象觀測網包括哪些?',
    options: ['只有地面測站', '只有衛星', '地面測站、高空觀測、雷達、衛星', '只靠人工觀測'],
    answer: 2,
    displayAnswer: '地面測站、高空觀測、雷達、衛星'
  },
  {
    type: 'options',
    question: '氣象氣球的功能是?',
    options: ['娛樂用途', '升到高空測量大氣狀態', '發射訊號', '驅趕烏雲'],
    answer: 1,
    displayAnswer: '升到高空測量大氣狀態'
  },
  {
    type: 'options',
    question: '地面氣象站測量哪些數據?',
    options: ['只測溫度', '溫度、濕度、風速、風向、雨量、氣壓', '只測雨量', '只測風向'],
    answer: 1,
    displayAnswer: '溫度、濕度、風速、風向、雨量、氣壓'
  },
  {
    type: 'options',
    question: '超過10天的天氣預報準確度如何?',
    options: ['非常準確', '相當準確', '很不確定', '完全準確'],
    answer: 2,
    displayAnswer: '很不確定'
  },
  {
    type: 'options',
    question: '數值預報的原理是?',
    options: ['猜測', '把大氣分成小格子,計算變化', '看雲的形狀', '問神明'],
    answer: 1,
    displayAnswer: '把大氣分成小格子,計算變化'
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
// Day 4 資料
// ==========================================

const day4 = {
  id: 'day4',
  name: '第四天',
  icon: '🛡️',
  color: '#059669',
  title: '我們能做什麼？',

  units: [

    // ==========================================
    // 開場：文學閱讀
    // ==========================================
    {
      id: 'opening',
      name: '開場閱讀',
      icon: '🌍',
      lesson: {
        title: '《當地球發燒的時候》節選（第四章）',
        sections: [
          {
            title: '氣象預報的力量',
            blocks: [
              {
                type: 'text',
                content: '2019年,歐洲又迎來一次熱浪,溫度甚至比2003年更高。但這一次,死亡人數大幅減少。為什麼?'
              },
              {
                type: 'text',
                content: '因為這次,歐洲有了準備。氣象單位提前一週發布高溫警報,政府開放有冷氣的圖書館、體育館讓民眾避暑;社工定期探訪獨居老人,確認他們的狀況;醫院增加急診人力,準備好應對中暑病患。'
              },
              {
                type: 'quote',
                content: '氣象預報最重要的價值,不是告訴你會不會下雨,而是讓你有時間準備。',
                author: '鄭明典'
              },
              {
                type: 'text',
                content: '提前知道極端天氣要來,我們就可以:取消戶外活動、準備防災物資、疏散危險地區的居民、調度醫療資源。'
              },
              {
                type: 'text',
                content: '台灣的氣象預報技術在亞洲名列前茅。中央氣象署的超級電腦,每天處理數百億筆資料,模擬未來一週的天氣變化。颱風路徑預測的準確度,已經從20年前的「可能差200公里」進步到「誤差小於70公里」。'
              },
              {
                type: 'text',
                content: '但是,再精確的預報,如果民眾不重視、不準備,就沒有意義。這就是為什麼,氣象教育和防災演練如此重要。'
              }
            ]
          },
          {
            title: '從危機到轉機',
            blocks: [
              {
                type: 'text',
                content: '面對氣候變遷,我們不能只是被動防禦,更要主動調適。'
              },
              {
                type: 'text',
                content: '荷蘭是一個很好的例子。這個國家有四分之一的土地低於海平面,隨時面臨海水倒灌的威脅。但荷蘭人沒有放棄,反而發展出世界最先進的水利工程和防洪技術,甚至把「與水共存」變成國家特色。'
              },
              {
                type: 'text',
                content: '台灣也在學習調適。莫拉克風災後,政府投入大量資源改善山坡地水土保持,建立土石流預警系統。現在,當雨量達到警戒值,系統會自動發送警報到村長和居民手機,讓他們及時疏散。'
              },
              {
                type: 'text',
                content: '在都市,台北市推動「海綿城市」計畫:讓路面可以吸水、公園能夠滯洪、屋頂可以蓄水。這些設計讓城市在暴雨時不容易淹水,在乾旱時有儲備水源。'
              },
              {
                type: 'text',
                content: '每個人也都可以行動。節約用電(減少火力發電的碳排放)、搭乘大眾運輸(減少汽車廢氣)、減少食物浪費(生產食物需要很多能源)、支持環保政策。這些看似微小的行動,累積起來就是巨大的力量。'
              },
              {
                type: 'quote',
                content: '我們不能阻止地球發燒,但我們可以減緩發燒的速度,也可以學會在發燒的地球上更好地生存。',
                author: '鄭明典'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // ==========================================
    // 單元一：社會 — 防災與調適
    // ==========================================
    {
      id: 'social-disaster-preparedness',
      name: '社會:防災與調適',
      icon: '🌍',
      lesson: {
        title: '台灣的氣候調適',
        sections: [
          {
            title: '台灣的防災系統',
            blocks: [
              {
                type: 'text',
                content: '**中央氣象署**\n提供天氣預報、颱風警報、豪雨特報、高溫警示\n透過電視、廣播、手機、網站多管道發布'
              },
              {
                type: 'text',
                content: '**災害應變中心**\n當颱風、豪雨來襲時,各縣市成立災害應變中心\n整合警察、消防、軍隊、醫療等資源\n協調救災工作'
              },
              {
                type: 'text',
                content: '**土石流預警系統**\n在易發生土石流的山區,裝設雨量監測站\n當雨量達到警戒值,系統自動發送簡訊\n通知村長和居民準備疏散'
              },
              {
                type: 'text',
                content: '**防災公園**\n台北、台中等都市設立防災公園\n平常是休閒空間,災害時作為避難場所和救援據點\n公園內有儲水槽、發電機、通訊設備、醫療站'
              }
            ]
          },
          {
            title: '個人防災準備',
            blocks: [
              {
                type: 'text',
                content: '**緊急避難包**\n準備三天份的飲用水、食物、手電筒、電池、急救用品、重要文件影本、現金\n放在容易拿取的地方'
              },
              {
                type: 'text',
                content: '**避難路線**\n知道住家、學校附近的避難場所在哪裡,如何前往\n與家人約定好緊急集合地點'
              },
              {
                type: 'text',
                content: '**氣象資訊**\n養成習慣,在颱風季、梅雨季關注氣象預報\n下載中央氣象署APP,可以即時收到警報'
              },
              {
                type: 'text',
                content: '**保險規劃**\n了解住宅火險、地震險、颱風險等保障\n氣候災害造成的損失,保險可以減輕經濟負擔'
              }
            ]
          },
          {
            title: '社會調適',
            blocks: [
              {
                type: 'text',
                content: '**海綿城市**:台北市推動的計畫\n讓路面可以吸水\n公園能夠滯洪\n屋頂可以蓄水\n暴雨時不易淹水,乾旱時有儲備水源'
              },
              {
                type: 'text',
                content: '**水土保持**:莫拉克風災後的改善\n加強山坡地水土保持\n建立土石流預警系統\n雨量達警戒值自動發送警報'
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
    // 單元二：數學 — 防災規劃
    // ==========================================
    {
      id: 'math-disaster-planning',
      name: '數學:綜合應用',
      icon: '📊',
      lesson: {
        title: '用數學規劃防災',
        sections: [
          {
            title: '避難容量計算',
            blocks: [
              {
                type: 'text',
                content: '防災公園需要規劃避難空間。\n\n假設:\n• 每人需要2平方公尺的空間\n• 公園10000平方公尺\n• 扣除道路、設施(占30%)\n\n能容納多少人?'
              },
              {
                type: 'text',
                content: '**計算步驟**:\n\n可用空間 = 10000 × (1-0.3)\n         = 10000 × 0.7\n         = 7000平方公尺\n\n容納人數 = 7000 ÷ 2\n         = 3500人'
              }
            ]
          },
          {
            title: '救援物資分配',
            blocks: [
              {
                type: 'text',
                content: '颱風過後,需要分配救援物資。\n\n如果有600箱物資,要分配給5個村莊,按照受災戶數比例分配:\n\n• A村50戶\n• B村80戶\n• C村40戶\n• D村60戶\n• E村70戶\n• 總計300戶'
              },
              {
                type: 'text',
                content: '**計算各村分配**:\n\nA村: 600 × (50÷300) = 600 × 1/6 = 100箱\nB村: 600 × (80÷300) = 600 × 4/15 = 160箱\nC村: 600 × (40÷300) = 600 × 2/15 = 80箱\nD村: 600 × (60÷300) = 600 × 1/5 = 120箱\nE村: 600 × (70÷300) = 600 × 7/30 = 140箱'
              }
            ]
          },
          {
            title: '儲備需求規劃',
            blocks: [
              {
                type: 'text',
                content: '緊急避難包的飲用水規劃:\n\n建議每人每天4公升\n準備3天份\n\n一個4口家庭需要:\n4人 × 3天 × 4公升 = 48公升\n\n約需準備12瓶(每瓶4公升)的水'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 6,
        generator: generateMathQuestion,
        checkAnswer: (question, userAnswer) => {
          if (question.type === 'options') {
            return parseInt(userAnswer) === question.answer
          } else {
            const cleanAnswer = String(userAnswer).trim().replace(/[^\d]/g, '')
            const cleanExpected = String(question.answer).trim().replace(/[^\d]/g, '')
            return cleanAnswer === cleanExpected
          }
        }
      }
    },

    // ==========================================
    // 單元三：科學 — 氣象預報
    // ==========================================
    {
      id: 'science-weather-forecasting',
      name: '科學:氣候預報',
      icon: '🔬',
      lesson: {
        title: '如何預測天氣?',
        sections: [
          {
            title: '氣象觀測',
            blocks: [
              {
                type: 'text',
                content: '氣象預報的第一步是觀測。台灣有完整的氣象觀測網:'
              }
            ]
          },
          {
            title: '地面測站',
            blocks: [
              {
                type: 'text',
                content: '全台有數百個自動氣象站\n\n每小時測量:\n• 溫度\n• 濕度\n• 風速\n• 風向\n• 雨量\n• 氣壓'
              }
            ]
          },
          {
            title: '高空觀測',
            blocks: [
              {
                type: 'text',
                content: '用氣象氣球升到3萬公尺高空\n測量不同高度的大氣狀態\n包括溫度、濕度、風向、風速'
              }
            ]
          },
          {
            title: '氣象雷達',
            blocks: [
              {
                type: 'text',
                content: '發射電磁波,偵測雲層中的雨滴\n可以看到雨帶的移動和強度\n對颱風、豪雨的監測特別重要'
              }
            ]
          },
          {
            title: '氣象衛星',
            blocks: [
              {
                type: 'text',
                content: '從太空拍攝地球\n可以看到:\n• 雲的分布\n• 颱風的結構\n• 大氣環流\n提供全球尺度的觀測'
              }
            ]
          },
          {
            title: '數值預報',
            blocks: [
              {
                type: 'text',
                content: '觀測到數據後,要用超級電腦進行「數值預報」。\n\n**原理**:\n電腦把大氣分成無數個小格子\n在每個格子裡計算空氣的溫度、壓力、濕度如何變化\n然後推算未來的天氣'
              },
              {
                type: 'text',
                content: '這個計算非常複雜:\n• 需要處理數百億筆數據\n• 中央氣象署的超級電腦,每秒可以進行數兆次計算\n• 還是需要好幾個小時才能完成一次預報'
              },
              {
                type: 'text',
                content: '**預報準確度**:\n• 3天內的預報:相對準確\n• 5-7天的預報:有參考價值\n• 超過10天:很不確定\n\n預報越遠,不確定性越大'
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
    // 單元四：語文 — 環境觀察報告
    // ==========================================
    {
      id: 'chinese-writing',
      name: '語文:環境觀察報告',
      icon: '✍️',
      lesson: {
        title: '我的環境觀察筆記',
        sections: [
          {
            title: '寫作引導',
            blocks: [
              {
                type: 'text',
                content: '過去幾週,你已經觀察了周遭環境。現在,讓我們把觀察整理成一份完整的報告。'
              },
              {
                type: 'text',
                content: '**報告架構**(六段式):\n\n1. 標題:簡潔有力,點出主題\n\n2. 觀察對象:你觀察了什麼?\n   (社區綠地、交通排放、能源使用...)\n\n3. 觀察記錄:你看到、聽到、測量到什麼?\n\n4. 分析思考:為什麼會這樣?有什麼問題?\n\n5. 建議方案:個人和社會可以怎麼改善?\n\n6. 結論反思:你學到了什麼?'
              }
            ]
          },
          {
            title: '寫作提示',
            blocks: [
              {
                type: 'text',
                content: '• 使用具體數據(溫度、數量、比例)\n• 加入圖表或照片\n• 連結這週學到的概念(熱島效應、碳排放、調適...)\n• 提出可行的建議,不要只是空談'
              },
              {
                type: 'text',
                content: '**字數建議**: 600-800字'
              },
              {
                type: 'text',
                content: '**範例標題**:\n• 我家社區的熱島效應觀察\n• 上學路上的碳足跡調查\n• 學校能源使用改善建議\n• 社區綠地減少的問題與對策'
              }
            ]
          },
          {
            title: '今天的任務',
            blocks: [
              {
                type: 'text',
                content: '今天請完成報告的前半部:\n• 標題\n• 觀察對象\n• 觀察記錄\n• 分析思考'
              },
              {
                type: 'text',
                content: '明天(Day 5)我們會完成建議方案和結論,並進行修改潤飾,最後產出完整的環境觀察報告。'
              },
              {
                type: 'text',
                content: '記得:好的報告不是華麗的文字,而是真實的觀察、深入的思考、可行的建議。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // ==========================================
    // 收尾：今日回顧
    // ==========================================
    {
      id: 'closing-reflection',
      name: '今日回顧',
      icon: '💭',
      lesson: {
        title: '回顧與反思',
        sections: [
          {
            title: '今天學到了什麼',
            blocks: [
              {
                type: 'text',
                content: '今天的主題是「我們能做什麼」——從被動承受到主動調適。'
              },
              {
                type: 'text',
                content: '**社會方面**:\n我們認識了台灣的防災系統,從中央氣象署的預報、土石流預警、到防災公園的設置。也學會了個人防災準備:避難包、避難路線、氣象資訊、保險規劃。'
              },
              {
                type: 'text',
                content: '**數學方面**:\n我們用數學規劃防災:計算避難容量、分配救援物資、規劃儲備需求。這些計算看似簡單,但在災害現場,每一個數字都關係到人命。'
              },
              {
                type: 'text',
                content: '**科學方面**:\n我們理解了氣象預報的原理,知道預報不是猜測,而是基於觀測和計算的科學推論。也明白為什麼提前知道天氣變化如此重要。'
              },
              {
                type: 'text',
                content: '**語文方面**:\n我們開始整理環境觀察,準備寫成報告。觀察、思考、表達——這是公民參與環境議題的基本能力。'
              },
              {
                type: 'text',
                content: '最重要的是:面對氣候變遷,我們不是無能為力的。每個人都可以行動,每個小行動都有意義。'
              }
            ]
          }
        ]
      },
      practice: null
    }

  ]
}

export default day4
