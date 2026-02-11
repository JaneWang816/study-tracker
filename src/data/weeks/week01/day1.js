// src/data/weeks/week01/day1.js
// 第1週 - 第一天：我在哪裡？

// ==========================================
// 練習題生成器
// ==========================================

// 【數學】數線與負數練習題庫
const mathQuestions = [
  // 標示位置題
  {
    type: 'options',
    question: '海平面以下 15 公尺，用數線上的數字表示是？',
    options: ['+15', '-15', '15', '0'],
    answer: 1,
    displayAnswer: '-15'
  },
  {
    type: 'options',
    question: '下列哪個數在數線上最靠近 0？',
    options: ['-8', '+3', '-5', '+7'],
    answer: 1,
    displayAnswer: '+3'
  },
  {
    type: 'options',
    question: '-3 和 -7，哪個數比較大？',
    options: ['-7', '-3', '一樣大', '無法比較'],
    answer: 1,
    displayAnswer: '-3'
  },
  {
    type: 'fill',
    question: '數線上，從 -8 移動到 +5，共移動了幾格？',
    answer: '13',
    displayAnswer: '13'
  },
  {
    type: 'fill',
    question: '溫度從 -4°C 上升 9°C，現在是幾度？',
    answer: '5',
    displayAnswer: '5'
  },
  {
    type: 'options',
    question: '潛水員在海平面下 12 公尺（-12），上升 5 公尺後在哪裡？',
    options: ['-17 公尺', '-7 公尺', '+7 公尺', '+17 公尺'],
    answer: 1,
    displayAnswer: '-7 公尺'
  },
  {
    type: 'options',
    question: '下列數字由小到大排列，哪個順序正確？',
    options: ['-1, -3, 0, 2', '-3, -1, 0, 2', '0, -1, -3, 2', '2, 0, -1, -3'],
    answer: 1,
    displayAnswer: '-3, -1, 0, 2'
  },
  {
    type: 'fill',
    question: '在數線上，距離原點 4 格的位置有幾個數？',
    answer: '2',
    displayAnswer: '2（+4 和 -4）'
  },
  {
    type: 'options',
    question: '蘭嶼某海溝深 180 公尺，用有號數表示是？',
    options: ['+180', '-180', '180 公尺深', '0'],
    answer: 1,
    displayAnswer: '-180'
  },
  {
    type: 'fill',
    question: '數線上，-6 在 0 的哪個方向，距離幾格？',
    answer: '左邊6格',
    displayAnswer: '左邊 6 格'
  }
]

const generateMathQuestion = () => {
  return mathQuestions[Math.floor(Math.random() * mathQuestions.length)]
}

// 【社會】方位與經緯線練習題庫
const socialQuestions = [
  {
    type: 'options',
    question: '經線的功能是什麼？',
    options: ['連接東西方向', '連接南北兩極', '標示赤道位置', '表示海拔高度'],
    answer: 1,
    displayAnswer: '連接南北兩極'
  },
  {
    type: 'options',
    question: '赤道的緯度是幾度？',
    options: ['90°N', '45°N', '0°', '23.5°N'],
    answer: 2,
    displayAnswer: '0°'
  },
  {
    type: 'options',
    question: '台灣大約位於東經幾度？',
    options: ['90°E', '105°E', '120°E', '135°E'],
    answer: 2,
    displayAnswer: '120°E'
  },
  {
    type: 'options',
    question: '台灣大約位於北緯幾度？',
    options: ['10°N～15°N', '23°N～25°N', '35°N～40°N', '50°N～55°N'],
    answer: 1,
    displayAnswer: '23°N～25°N'
  },
  {
    type: 'options',
    question: '蘭嶼在台灣本島的哪個方位？',
    options: ['西北方', '東北方', '西南方', '東南方'],
    answer: 3,
    displayAnswer: '東南方'
  },
  {
    type: 'options',
    question: '台灣位於哪個半球？',
    options: ['南半球、西半球', '北半球、東半球', '南半球、東半球', '北半球、西半球'],
    answer: 1,
    displayAnswer: '北半球、東半球'
  },
  {
    type: 'options',
    question: '地球上緯度最高的地方是？',
    options: ['赤道（0°）', '北回歸線（23.5°N）', '北極（90°N）', '本初子午線（0°E）'],
    answer: 2,
    displayAnswer: '北極（90°N）'
  },
  {
    type: 'options',
    question: '古代航海家用哪顆星星辨別北方？',
    options: ['南十字星', '北極星', '織女星', '牛郎星'],
    answer: 1,
    displayAnswer: '北極星'
  },
  {
    type: 'options',
    question: '指北針指向的方向是？',
    options: ['地理南極', '地理北極', '太陽升起的方向', '自己面對的方向'],
    answer: 1,
    displayAnswer: '地理北極'
  },
  {
    type: 'options',
    question: '下列哪項是「緯線」的特徵？',
    options: ['通過南北兩極', '所有緯線長度相同', '平行於赤道', '只有一條'],
    answer: 2,
    displayAnswer: '平行於赤道'
  }
]

const generateSocialQuestion = () => {
  return socialQuestions[Math.floor(Math.random() * socialQuestions.length)]
}

// 【科學】觀察與推測練習題庫
const scienceQuestions = [
  {
    type: 'options',
    question: '「天空出現烏雲」這句話是？',
    options: ['推測', '觀察', '假設', '結論'],
    answer: 1,
    displayAnswer: '觀察'
  },
  {
    type: 'options',
    question: '「今天應該會下雨」這句話是？',
    options: ['觀察', '記錄', '推測', '測量'],
    answer: 2,
    displayAnswer: '推測'
  },
  {
    type: 'options',
    question: '「溫度計顯示 28°C」這句話是？',
    options: ['推測', '假設', '觀察（測量）', '結論'],
    answer: 2,
    displayAnswer: '觀察（測量）'
  },
  {
    type: 'options',
    question: '科學觀察記錄最重要的基本要素，下列哪項不需要？',
    options: ['時間', '地點', '觀察者的喜好', '觀察描述'],
    answer: 2,
    displayAnswer: '觀察者的喜好'
  },
  {
    type: 'options',
    question: '「葉子上有水珠，所以昨晚下雨了」，哪個部分是觀察？',
    options: ['昨晚下雨了', '葉子上有水珠', '兩者都是觀察', '兩者都是推測'],
    answer: 1,
    displayAnswer: '葉子上有水珠'
  },
  {
    type: 'options',
    question: '夏曼的小叔公說「今晚風浪大，不宜出海」，這是基於什麼？',
    options: ['純粹猜測', '長期觀察自然的經驗', '天氣預報', '別人告訴他的'],
    answer: 1,
    displayAnswer: '長期觀察自然的經驗'
  },
  {
    type: 'options',
    question: '下列哪個是「用視覺」進行的觀察？',
    options: ['聞到花香', '聽到海浪聲', '看見飛魚躍出水面', '感覺風很冷'],
    answer: 2,
    displayAnswer: '看見飛魚躍出水面'
  },
  {
    type: 'options',
    question: '寫觀察記錄時，應該優先記錄什麼？',
    options: ['你認為會發生什麼事', '你實際看到、聽到、感受到的', '你希望結果是什麼', '別人的觀察結果'],
    answer: 1,
    displayAnswer: '你實際看到、聽到、感受到的'
  }
]

const generateScienceQuestion = () => {
  return scienceQuestions[Math.floor(Math.random() * scienceQuestions.length)]
}

// ==========================================
// Day 1 資料
// ==========================================

const day1 = {
  id: 'day1',
  name: '第一天',
  icon: '🧭',
  color: '#4A90D9',
  title: '我在哪裡？',

  units: [

    // ==========================================
    // 開場：文學閱讀
    // ==========================================
    {
      id: 'opening',
      name: '開場閱讀',
      icon: '🌊',
      lesson: {
        title: '《大海浮夢／追浪的男人》夏曼‧藍波安',
        sections: [
          {
            title: '閱讀文章',
            blocks: [
              {
                type: 'text',
                content: '請閱讀以下選段，想想看：達悟族人是怎麼認識這個世界的？'
              },
              {
                type: 'quote',
                content: '我成長的小島一到晚上就進入完全是黑的景象，所以我一直以為沒有燈害的成長空間環境，是幸福與幸運最美的圖案，可以任你在這個天然的畫布裡彩繪你夢想中的圖騰。\n\n小叔公是我學齡前在黑夜跟我說故事的人……他喜歡跟我說古早的傳說。\n\n我家族裡的勇士出海，在漆黑的海上持火炬夜航捕撈飛魚時，小叔公經常低聲吟唱他創作的一首歌〈追浪的男人〉，這是一首影響我個人與海洋情感很深的歌……',
                author: '夏曼‧藍波安，《大海浮夢》'
              },
              {
                type: 'quote',
                content: '風浪平靜湛藍的大海\n我的船不怎麼熱愛\n駭浪沖天的巨浪海震\n我欣賞他的野性\n不大不小澎湃的風聲濤波\n是天神的女兒──仙女在歌唱\n請我出海　在海浪的脊椎\n在大海追逐浪頭\n唱著航海家獵魚的歌詞\n等著黑色翅膀的飛魚回家',
                author: '〈追浪的男人〉歌詞'
              }
            ]
          },
          {
            title: '帶著問題開始今天的學習',
            blocks: [
              {
                type: 'text',
                content: '讀完之後，帶著這兩個問題進入今天的課程（不需要現在回答）：\n\n① 小叔公和作者是怎麼認識這個世界的？\n\n② 如果沒有地圖、沒有手機，你怎麼知道自己在哪裡？'
              }
            ]
          }
        ]
      },
      practice: null  // 開場不做練習，直接進入下一單元
    },

    // ==========================================
    // 單元一：數學 — 數線與負數的認識
    // ==========================================
    {
      id: 'math-number-line',
      name: '數學：數線與負數',
      icon: '📐',
      lesson: {
        title: '數線與負數的認識',
        sections: [
          {
            title: '複習：正數數線',
            blocks: [
              {
                type: 'text',
                content: '你已經認識了正數的數線：從 0 開始，往右數字越來越大。\n\n數線有三個重要元素：\n• 原點（0）：基準點，代表「什麼都沒有」\n• 正方向（→）：往右，數字越來越大\n• 刻度：每格代表固定的距離'
              }
            ]
          },
          {
            title: '引入負數：海平面以下怎麼表示？',
            blocks: [
              {
                type: 'text',
                content: '蘭嶼的海域有些地方深達 200 公尺。\n\n如果海平面是 0，水面上 10 公尺是 +10，那海平面「以下」10 公尺該怎麼寫？\n\n答案是：-10\n\n負號「-」代表方向相反——在數線上，0 的「左邊」。'
              },
              {
                type: 'text',
                content: '數線現在長這樣：\n\n← -5  -4  -3  -2  -1  0  +1  +2  +3  +4  +5 →\n\n• 0 的右邊是正數，越大越靠右\n• 0 的左邊是負數，越小越靠左\n• -3 比 -7 大（-3 在 -7 的右邊）'
              }
            ]
          },
          {
            title: '重要觀念：比較負數大小',
            blocks: [
              {
                type: 'text',
                content: '負數的大小比較，跟正數的直覺相反：\n\n-1 > -5（-1 比 -5 大，因為 -1 在數線上更靠近右邊）\n\n口訣：在數線上，越靠右邊的數越大。'
              }
            ]
          },
          {
            title: '計算數線上兩點的距離',
            blocks: [
              {
                type: 'text',
                content: '從 -8 移動到 +5，移動了幾格？\n\n方法：距離 = 終點 - 起點 = 5 - (-8) = 5 + 8 = 13 格\n\n小技巧：如果兩個數一正一負，距離就是把兩個數的絕對值加起來。'
              }
            ]
          },
          {
            title: '跟課文連結',
            blocks: [
              {
                type: 'text',
                content: '〈追浪的男人〉中，達悟族的漁人在黑夜的大海上捕魚。他們怎麼知道自己在哪裡、水深多少？\n\n他們靠的是長期的「身體記憶」——而數學家發明了數線和座標，讓「位置」可以被精確記錄和傳達。\n\n下一個單元，我們就要學地球上的「坐標系統」——經緯線。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateMathQuestion,
        checkAnswer: (question, userAnswer) => {
          if (question.type === 'options') {
            return parseInt(userAnswer) === question.answer
          } else {
            // fill 題：去掉空白後比較
            return String(userAnswer).trim() === String(question.answer).trim()
          }
        }
      }
    },

    // ==========================================
    // 單元二：社會 — 方位與經緯線概念
    // ==========================================
    {
      id: 'social-coordinates',
      name: '社會：方位與經緯線',
      icon: '🌍',
      lesson: {
        title: '方位與經緯線概念',
        sections: [
          {
            title: '從舊知識出發：北極星與指北針',
            blocks: [
              {
                type: 'text',
                content: '你在五年級學過用北極星辨別北方，六年級也學過指北針。\n\n達悟族的漁人也是靠星星在大海上找方向——這和你學過的方法一樣！\n\n但是，指北針只能告訴你「方向」，無法回答：「我在地球上的哪個點？」\n\n所以人類發明了一套更精確的系統——經緯線。'
              }
            ]
          },
          {
            title: '認識緯線',
            blocks: [
              {
                type: 'text',
                content: '緯線（Latitude）：\n• 平行於赤道的橫線\n• 赤道是最大的緯線，緯度 = 0°\n• 往北：北緯（N），最大 90°N（北極）\n• 往南：南緯（S），最大 90°S（南極）\n\n台灣大約在北緯 23°N～25°N 之間。\n北回歸線（23.5°N）剛好穿過台灣中部。'
              }
            ]
          },
          {
            title: '認識經線',
            blocks: [
              {
                type: 'text',
                content: '經線（Longitude）：\n• 連接南北兩極的縱線\n• 本初子午線（通過英國格林威治）= 0°\n• 往東：東經（E），最大 180°E\n• 往西：西經（W），最大 180°W\n\n台灣大約在東經 120°E～122°E 之間。'
              }
            ]
          },
          {
            title: '台灣的位置',
            blocks: [
              {
                type: 'text',
                content: '台灣的座標大約是：\n• 緯度：北緯 23°N～25°N\n• 經度：東經 120°E～122°E\n\n所以台灣位於：北半球 + 東半球\n\n蘭嶼（達悟族的島嶼）在台灣東南方，大約北緯 22°N、東經 121°E。\n\n補充：地圖上的「比例尺」告訴你圖上距離和實際距離的關係，我們在 W4 會仔細學習計算。'
              }
            ]
          },
          {
            title: '經緯線的用途',
            blocks: [
              {
                type: 'text',
                content: '有了經緯線，地球上每一個點都可以用一組數字精確表示。\n\n這就像數學的坐標系——X 軸是經度，Y 軸是緯度。\n\n達悟族用星星和海流定位，是一種「身體的坐標系」。\n現代人用 GPS，背後也是同一套經緯度系統。'
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
    // 單元三：科學 — 什麼是觀察？
    // ==========================================
    {
      id: 'science-observation',
      name: '科學：什麼是觀察？',
      icon: '🔬',
      lesson: {
        title: '觀察記錄的基礎',
        sections: [
          {
            title: '達悟族人的「科學」',
            blocks: [
              {
                type: 'text',
                content: '〈追浪的男人〉中，小叔公知道什麼時候可以出海、什麼時候不行。\n\n他沒有天氣預報，沒有氣象App，但他「知道」。\n\n他怎麼知道的？\n\n靠的是：長期、細緻的「觀察」——觀察海浪、風向、星星、飛魚的行為……\n\n這就是科學的基礎。'
              }
            ]
          },
          {
            title: '觀察 vs 推測',
            blocks: [
              {
                type: 'text',
                content: '觀察（Observation）：\n用感官（眼、耳、鼻、觸、味）直接收集到的資訊。\n\n例：「天空有烏雲」「海浪高度約1公尺」「飛魚跳出水面」\n\n推測（Inference）：\n根據觀察，「解讀」或「預測」的結果。\n\n例：「今天可能會下雨」「魚很多」「今晚可以出海」\n\n關鍵差別：觀察是「你看到/聽到什麼」，推測是「你認為這代表什麼」。'
              }
            ]
          },
          {
            title: '觀察記錄的基本格式',
            blocks: [
              {
                type: 'text',
                content: '一份好的觀察記錄，需要包含：\n\n① 時間：什麼時候觀察的？\n② 地點：在哪裡觀察的？\n③ 對象：觀察什麼？\n④ 描述：具體看到/聽到/感受到什麼？（用客觀的語言）\n\n範例：\n時間：2024年10月13日，晚上8點\n地點：蘭嶼海邊礁岩上\n對象：海浪\n描述：浪高約50公分，規律間隔約10秒一波，聲音低沉'
              }
            ]
          },
          {
            title: '為什麼要區分觀察和推測？',
            blocks: [
              {
                type: 'text',
                content: '科學講求「可重複、可驗證」。\n\n觀察是事實，別人也可以看到相同的東西。\n推測是解讀，不同人可能有不同結論。\n\n好的科學家：先記錄「觀察」，再提出「推測」，最後設計實驗「驗證」推測。\n\n這一整套方法，叫做「科學方法」。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 4,
        generator: generateScienceQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    // ==========================================
    // 單元四：語文 — 詞彙練習
    // ==========================================
    {
      id: 'chinese-vocabulary',
      name: '語文：詞彙練習',
      icon: '✍️',
      lesson: {
        title: '今日詞彙：方位與地理用語',
        sections: [
          {
            title: '今日學習詞彙',
            blocks: [
              {
                type: 'text',
                content: '今天在各科學習中，出現了這些重要詞彙：\n\n【地理類】\n• 經線：連接南北兩極的縱線\n• 緯線：平行於赤道的橫線\n• 方位：東南西北等方向\n• 定位：確認自己在哪個位置\n\n【數學類】\n• 原點：數線上的基準點（0）\n• 基準：作為比較或測量起點的標準\n\n【科學類】\n• 觀察：用感官直接收集資訊\n• 推測：根據觀察進行解讀或預測\n\n【文學類】\n• 航行：駕駛船隻在水上移動\n• 汛期：特定魚類大量出現的季節（如飛魚汛期）'
              }
            ]
          },
          {
            title: '練習說明',
            blocks: [
              {
                type: 'text',
                content: '接下來的練習，測試你對這些詞彙的理解。\n\n同時，請你在閱讀文章中找一找：這些詞彙有沒有在〈追浪的男人〉中出現？用鉛筆圈出來。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: () => {
          const vocabQuestions = [
            {
              type: 'options',
              question: '「經線」是指？',
              options: ['平行於赤道的橫線', '連接南北兩極的縱線', '地圖上的等高線', '海岸的輪廓線'],
              answer: 1,
              displayAnswer: '連接南北兩極的縱線'
            },
            {
              type: 'options',
              question: '「觀察」和「推測」最大的差別是？',
              options: [
                '觀察需要工具，推測不需要',
                '觀察是感官直接收集，推測是解讀',
                '觀察一定正確，推測可能錯誤',
                '觀察比推測更重要'
              ],
              answer: 1,
              displayAnswer: '觀察是感官直接收集，推測是解讀'
            },
            {
              type: 'options',
              question: '「汛期」在文章中是指什麼？',
              options: ['颱風季節', '下大雨的季節', '飛魚大量出現的季節', '捕魚最危險的時期'],
              answer: 2,
              displayAnswer: '飛魚大量出現的季節'
            },
            {
              type: 'options',
              question: '「定位」的意思最接近？',
              options: ['固定某個物體的位置', '確認自己在哪個位置', '替地點命名', '測量距離'],
              answer: 1,
              displayAnswer: '確認自己在哪個位置'
            },
            {
              type: 'options',
              question: '「原點」在數線上代表？',
              options: ['最大的數', '最小的數', '基準點，數值為 0', '數線的起點，只在左邊'],
              answer: 2,
              displayAnswer: '基準點，數值為 0'
            },
            {
              type: 'options',
              question: '下列哪個詞語的用法「不正確」？',
              options: [
                '他用指北針確認方位',
                '這條河的基準水位是海平面',
                '飛魚汛期是達悟族最重要的季節',
                '他觀察說今天一定會下雨'
              ],
              answer: 3,
              displayAnswer: '「觀察說今天一定會下雨」不正確，「今天一定會下雨」是推測，不是觀察'
            }
          ]
          return vocabQuestions[Math.floor(Math.random() * vocabQuestions.length)]
        },
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    // ==========================================
    // 收尾：回應開場問題
    // ==========================================
    {
      id: 'closing-reflection',
      name: '今日回顧',
      icon: '💭',
      lesson: {
        title: '回顧與反思',
        sections: [
          {
            title: '回到開場的問題',
            blocks: [
              {
                type: 'text',
                content: '今天開始時，我們帶著兩個問題進入課程：\n\n① 小叔公和作者是怎麼認識這個世界的？\n② 如果沒有地圖、沒有手機，你怎麼知道自己在哪裡？\n\n現在，用今天學到的概念，試著各寫 2～3 句話回答。\n\n可以用到的概念：觀察、推測、方位、經緯線、數線、負數、基準點……'
              }
            ]
          },
          {
            title: '今日學習小結',
            blocks: [
              {
                type: 'text',
                content: '今天的核心概念是「定位」：\n\n• 數學：數線上用負數延伸定位範圍（海面以下、溫度以下）\n• 社會：地球上用經緯線精確定位每個地點\n• 科學：觀察是所有定位和判斷的基礎\n• 語文：達悟族人用詩歌和故事傳遞對海洋空間的認識\n\n明天，我們會繼續深入——台灣的位置，以及坐標系統。'
              }
            ]
          }
        ]
      },
      practice: null  // 回顧單元不做練習，直接完成今日學習
    }

  ]
}

export default day1
