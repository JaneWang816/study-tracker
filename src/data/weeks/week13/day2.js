// src/data/weeks/week13/day2.js
// 第13週 - 第二天：台灣哪裡特別熱？

// ==========================================
// 練習題生成器 - 改良版(使用洗牌機制)
// ==========================================

import { shuffleArray, shuffleOptions } from '../../utils'

// 【社會】都市熱島效應練習題庫
const socialQuestions = [
  {
    type: 'options',
    question: '台北熱島效應特別明顯的主要原因是什麼?',
    options: ['人口最多', '緯度最低', '是盆地地形,熱空氣不易散出', '最靠近海邊'],
    answer: 2,
    displayAnswer: '是盆地地形,熱空氣不易散出'
  },
  {
    type: 'options',
    question: '為什麼高雄、台南的都市熱島效應比台北不明顯?',
    options: ['人口比較少', '建築物比較矮', '靠近海邊,海風可以調節', '綠地比較多'],
    answer: 2,
    displayAnswer: '靠近海邊,海風可以調節'
  },
  {
    type: 'options',
    question: '花東縱谷夏天特別熱的原因是什麼?',
    options: ['人口密集', '海岸山脈擋住海風', '工廠很多', '土地都是柏油路'],
    answer: 1,
    displayAnswer: '海岸山脈擋住海風'
  },
  {
    type: 'options',
    question: '下列哪一項「不是」都市熱島的主要熱源?',
    options: ['冷氣機排放的熱風', '汽機車引擎產生的熱', '太陽能板發電', '柏油路面蓄積的熱'],
    answer: 2,
    displayAnswer: '太陽能板發電'
  },
  {
    type: 'options',
    question: '增加都市綠地可以降溫,主要是因為植物能夠做什麼?',
    options: ['吸收二氧化碳', '遮陰和蒸散水分', '產生氧氣', '美化環境'],
    answer: 1,
    displayAnswer: '遮陰和蒸散水分'
  },
  {
    type: 'options',
    question: '都市「人造表面」的共同特性是?',
    options: ['吸熱快、散熱慢、蓄熱能力強', '吸熱慢、散熱快', '不吸熱也不散熱', '只在白天吸熱'],
    answer: 0,
    displayAnswer: '吸熱快、散熱慢、蓄熱能力強'
  },
  {
    type: 'options',
    question: '100年前的台北,大部分土地是什麼?',
    options: ['農田、池塘和樹林', '高樓大廈', '柏油路', '工廠'],
    answer: 0,
    displayAnswer: '農田、池塘和樹林'
  },
  {
    type: 'options',
    question: '夏天中午,柏油路面溫度可以達到多少度?',
    options: ['30-40度', '40-50度', '60-70度', '80-90度'],
    answer: 2,
    displayAnswer: '60-70度'
  },
  {
    type: 'options',
    question: '台中也有明顯熱島效應,主要原因是?',
    options: ['也是盆地地形', '人口最多', '工廠最多', '最靠近海邊'],
    answer: 0,
    displayAnswer: '也是盆地地形'
  },
  {
    type: 'options',
    question: '改善都市熱島效應的方法,下列何者「最不可行」?',
    options: ['增加綠地面積', '建築物塗白色塗料', '拆除所有建築物', '保留河岸綠帶'],
    answer: 2,
    displayAnswer: '拆除所有建築物'
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

// 【數學】綠覆蓋率與統計練習題庫
const mathQuestions = [
  {
    type: 'options',
    question: '某社區總面積是20000平方公尺,其中綠地面積是6000平方公尺,綠覆蓋率是多少?',
    options: ['20%', '30%', '40%', '60%'],
    answer: 1,
    displayAnswer: '30%'
  },
  {
    type: 'options',
    question: '如果要讓上題的社區綠覆蓋率提高到40%,需要再增加多少平方公尺的綠地?',
    options: ['1000平方公尺', '2000平方公尺', '3000平方公尺', '4000平方公尺'],
    answer: 1,
    displayAnswer: '2000平方公尺'
  },
  {
    type: 'options',
    question: '某市區連續5天最高溫分別是:36°C, 38°C, 37°C, 39°C, 35°C,平均最高溫是多少?',
    options: ['36°C', '37°C', '38°C', '39°C'],
    answer: 1,
    displayAnswer: '37°C'
  },
  {
    type: 'options',
    question: '市中心某週平均溫度37°C,郊區34°C,溫差多少?',
    options: ['1°C', '2°C', '3°C', '4°C'],
    answer: 2,
    displayAnswer: '3°C'
  },
  {
    type: 'options',
    question: '研究顯示綠覆蓋率每增加10%可降溫0.5°C。如果某區域綠覆蓋率從20%提高到35%,預計可降溫多少?',
    options: ['0.5°C', '0.75°C', '1.0°C', '1.5°C'],
    answer: 1,
    displayAnswer: '0.75°C'
  },
  {
    type: 'options',
    question: '地圖比例尺是1:100000,在地圖上某公園長3公分,實際長度是多少公尺?',
    options: ['300公尺', '3000公尺', '30000公尺', '300000公尺'],
    answer: 1,
    displayAnswer: '3000公尺'
  },
  {
    type: 'options',
    question: '某區域總面積15000平方公尺,綠地4500平方公尺,綠覆蓋率是?',
    options: ['20%', '25%', '30%', '35%'],
    answer: 2,
    displayAnswer: '30%'
  },
  {
    type: 'options',
    question: '某地一週最高溫:35°C, 36°C, 38°C, 37°C, 39°C, 36°C, 35°C,中位數是?',
    options: ['35°C', '36°C', '37°C', '38°C'],
    answer: 1,
    displayAnswer: '36°C'
  },
  {
    type: 'options',
    question: '台北市大安區總面積11.4平方公里,綠地2.3平方公里,綠覆蓋率約是?',
    options: ['15%', '20%', '25%', '30%'],
    answer: 1,
    displayAnswer: '20%'
  },
  {
    type: 'options',
    question: '某公園在比例尺1:50000的地圖上面積是4平方公分,實際面積約多少平方公尺?',
    options: ['10000', '100000', '1000000', '10000000'],
    answer: 1,
    displayAnswer: '100000'
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

// 【科學】熱傳遞與城市降溫練習題庫
const scienceQuestions = [
  {
    type: 'options',
    question: '為什麼黑色柏油路比白色水泥地更容易變熱?',
    options: ['因為黑色材料的熱容量比較大', '因為黑色吸收更多太陽輻射', '因為黑色材料的密度比較高', '因為黑色材料比較平滑'],
    answer: 1,
    displayAnswer: '因為黑色吸收更多太陽輻射'
  },
  {
    type: 'options',
    question: '植物如何幫助降溫?',
    options: ['植物會吸收二氧化碳', '植物進行光合作用和蒸散水分,吸收熱能', '植物會產生氧氣', '植物的顏色是綠色'],
    answer: 1,
    displayAnswer: '植物進行光合作用和蒸散水分,吸收熱能'
  },
  {
    type: 'options',
    question: '城市晚上為什麼還是很熱?下列哪一項「不是」主要原因?',
    options: ['建築物白天吸收的熱能還在慢慢釋放', '冷氣機向外排放廢熱', '太陽還在照射', '高樓阻擋風,空氣對流不良'],
    answer: 2,
    displayAnswer: '太陽還在照射'
  },
  {
    type: 'options',
    question: '下列哪一種方法「無法」有效降低都市溫度?',
    options: ['在屋頂塗上白色塗料', '多種植物增加綠地', '把所有建築物都漆成黑色', '保留河岸綠帶讓空氣流通'],
    answer: 2,
    displayAnswer: '把所有建築物都漆成黑色'
  },
  {
    type: 'options',
    question: '「蒸發冷卻」的原理是什麼?',
    options: ['水蒸發時會吸收周圍的熱能', '水蒸發時會放出熱能', '水蒸氣比空氣冷', '水能反射陽光'],
    answer: 0,
    displayAnswer: '水蒸發時會吸收周圍的熱能'
  },
  {
    type: 'options',
    question: '太陽的熱能主要透過哪種方式傳到地球?',
    options: ['傳導', '對流', '輻射', '蒸發'],
    answer: 2,
    displayAnswer: '輻射'
  },
  {
    type: 'options',
    question: '你光腳踩在燙的柏油路上,熱能透過什麼方式進入你的腳?',
    options: ['傳導', '對流', '輻射', '蒸發'],
    answer: 0,
    displayAnswer: '傳導'
  },
  {
    type: 'options',
    question: '熱空氣上升、冷空氣下降,是哪種熱傳遞方式?',
    options: ['傳導', '對流', '輻射', '蒸發'],
    answer: 1,
    displayAnswer: '對流'
  },
  {
    type: 'options',
    question: '下列哪個「不是」城市的主要廢熱來源?',
    options: ['冷氣機排放熱風', '汽機車引擎', '植物光合作用', '人體散熱'],
    answer: 2,
    displayAnswer: '植物光合作用'
  },
  {
    type: 'options',
    question: '為什麼水池、噴泉可以幫助降溫?',
    options: ['水會反射陽光', '水蒸發時吸收熱能', '水的顏色是藍色', '水會產生氧氣'],
    answer: 1,
    displayAnswer: '水蒸發時吸收熱能'
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
// Day 2 資料
// ==========================================

const day2 = {
  id: 'day2',
  name: '第二天',
  icon: '🏙️',
  color: '#F59E0B',
  title: '台灣哪裡特別熱？',

  units: [

    // ==========================================
    // 開場：文學閱讀
    // ==========================================
    {
      id: 'opening',
      name: '開場閱讀',
      icon: '🌍',
      lesson: {
        title: '《當地球發燒的時候》節選（第二章）',
        sections: [
          {
            title: '台北的熱島',
            blocks: [
              {
                type: 'text',
                content: '2023年7月24日下午2點,台北市測得攝氏39.7度高溫,創下126年來紀錄。但同一時間,淡水測得的溫度只有36度,相差了3.7度。為什麼同樣在大台北地區,溫度差這麼多?'
              },
              {
                type: 'text',
                content: '鄭明典打開電腦,調出一張台北地區的溫度分布圖。圖上用不同顏色標示各地溫度:淡水河口是涼爽的綠色和藍色,但台北盆地中心,卻是炙熱的紅色和橙色。這張圖看起來,就像一個在藍綠海洋中的火紅島嶼。'
              },
              {
                type: 'quote',
                content: '這就是『熱島效應』。當我們畫出溫度的等溫線,會發現都市中心特別熱的區域,形狀就像一座島嶼,所以氣象學上稱為熱島。',
                author: '鄭明典'
              },
              {
                type: 'text',
                content: '熱島效應在台北特別明顯,不只是因為台北是都會區,更因為台北是個盆地。四周的山就像一圈高牆,把盆地圍起來。白天,太陽曬熱了建築物、柏油路、水泥地,到了晚上,這些熱能散不出去,就繼續烤著盆地裡的空氣。'
              }
            ]
          },
          {
            title: '開場思考',
            blocks: [
              {
                type: 'text',
                content: '今天帶著這兩個問題開始學習:\n\n① 為什麼都市比鄉村熱?熱島效應是怎麼形成的?\n② 台灣哪些地方的熱島效應特別明顯?為什麼?'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // ==========================================
    // 單元一：社會 — 都市熱島效應
    // ==========================================
    {
      id: 'social-urban-heat',
      name: '社會:都市化與熱島',
      icon: '🌍',
      lesson: {
        title: '城市為什麼越來越熱?',
        sections: [
          {
            title: '都市熱島的形成',
            blocks: [
              {
                type: 'text',
                content: '想像100年前的台北。那時候,台北還沒有高樓大廈,沒有柏油路,沒有密集的車流。大部分土地是農田、池塘和樹林。\n\n當太陽照射時:\n• 植物會進行光合作用、蒸散水分,帶走熱能\n• 池塘的水會蒸發,也能降溫\n• 泥土地吸熱慢,晚上降溫也快'
              }
            ]
          },
          {
            title: '人造表面的問題',
            blocks: [
              {
                type: 'text',
                content: '但現在的台北,大部分土地都被「人造表面」覆蓋:水泥、柏油、鋼筋、玻璃。\n\n這些材料有個共同特性:\n• 吸熱快\n• 散熱慢\n• 蓄熱能力強\n\n夏天中午,柏油路面溫度可以達到60-70度!'
              }
            ]
          },
          {
            title: '都市的廢熱來源',
            blocks: [
              {
                type: 'text',
                content: '除了地表材料,都市還有很多「廢熱來源」:\n\n• 冷氣機向外排放熱風\n• 汽車、機車引擎產生熱\n• 工廠運轉產生熱\n• 甚至人體本身也在散熱\n\n這些熱能累積在都市空間裡,讓都市比郊區更熱。'
              }
            ]
          },
          {
            title: '台灣哪裡特別熱?',
            blocks: [
              {
                type: 'text',
                content: '**台北、台中**:盆地地形\n• 四周被山圍住\n• 熱空氣無法散出\n• 熱島效應特別明顯\n\n**花東縱谷**:山脈阻擋\n• 海岸山脈擋住東邊海風\n• 中央山脈擋住西邊氣流\n• 夏天悶熱\n\n**高雄、台南**:海風調節\n• 靠近海邊\n• 海風可以帶走熱氣\n• 熱島效應較不明顯'
              }
            ]
          },
          {
            title: '降溫策略',
            blocks: [
              {
                type: 'text',
                content: '如何改善都市熱島效應?\n\n• 增加綠地:植物遮陰、蒸散降溫\n• 白色塗料:反射陽光,減少吸熱\n• 屋頂綠化:隔熱、降溫\n• 保留河岸綠帶:讓空氣流通\n• 減少廢熱排放:節能減碳'
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
    // 單元二：數學 — 綠覆蓋率與統計
    // ==========================================
    {
      id: 'math-green-coverage',
      name: '數學:面積與統計',
      icon: '📊',
      lesson: {
        title: '用數學分析熱島效應',
        sections: [
          {
            title: '綠覆蓋率的計算',
            blocks: [
              {
                type: 'text',
                content: '要改善熱島效應,增加綠地是重要方法。那麼,如何計算一個地區的「綠覆蓋率」呢?\n\n**綠覆蓋率 = 綠地面積 ÷ 總面積 × 100%**'
              }
            ]
          },
          {
            title: '實際案例',
            blocks: [
              {
                type: 'text',
                content: '例如:台北市大安區\n\n• 總面積約11.4平方公里\n• 公園、綠地、行道樹等綠地面積約2.3平方公里\n\n綠覆蓋率 = 2.3 ÷ 11.4 × 100%\n         = 0.202 × 100%\n         ≈ 20.2%'
              }
            ]
          },
          {
            title: '提升綠覆蓋率',
            blocks: [
              {
                type: 'text',
                content: '如果要提升綠覆蓋率,需要增加多少綠地?\n\n情境:某社區總面積20000平方公尺,現有綠地6000平方公尺(30%),要提升到40%。\n\n目標綠地 = 20000 × 40% = 8000平方公尺\n需增加 = 8000 - 6000 = 2000平方公尺'
              }
            ]
          },
          {
            title: '溫度統計',
            blocks: [
              {
                type: 'text',
                content: '比較都市與郊區的溫度,需要用到統計:\n\n**平均數**:\n連續5天最高溫:36°C, 38°C, 37°C, 39°C, 35°C\n平均 = (36+38+37+39+35) ÷ 5 = 185 ÷ 5 = 37°C\n\n**溫差**:\n市中心37°C,郊區34°C\n溫差 = 37 - 34 = 3°C'
              }
            ]
          },
          {
            title: '比例尺應用',
            blocks: [
              {
                type: 'text',
                content: '都市規劃時需要用到比例尺:\n\n地圖比例尺1:100000\n地圖上某公園長3公分\n\n實際長度 = 3 × 100000 = 300000公分 = 3000公尺'
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
            return String(userAnswer).trim() === String(question.answer).trim()
          }
        }
      }
    },

    // ==========================================
    // 單元三：科學 — 熱的傳遞
    // ==========================================
    {
      id: 'science-heat-transfer',
      name: '科學:熱的傳遞',
      icon: '🔬',
      lesson: {
        title: '為什麼城市這麼熱?',
        sections: [
          {
            title: '回顧:三種熱傳遞方式',
            blocks: [
              {
                type: 'text',
                content: '在W4我們學過熱的三種傳遞方式:傳導、對流、輻射。現在讓我們用這些知識,來理解城市為什麼這麼熱。'
              }
            ]
          },
          {
            title: '輻射:太陽的熱如何到達地球',
            blocks: [
              {
                type: 'text',
                content: '**輻射**:太陽以電磁波的形式,把能量輻射到地球。\n\n特性:\n• 不需要介質\n• 可以在真空中傳播\n• 光速傳播(8分鐘到達地球)\n\n城市應用:\n• 深色表面(柏油路)吸收更多輻射\n• 淺色表面(白色塗料)反射更多輻射'
              }
            ]
          },
          {
            title: '傳導:接觸傳熱',
            blocks: [
              {
                type: 'text',
                content: '**傳導**:當物體接觸時,熱能從高溫處傳到低溫處。\n\n例子:\n• 你光腳踩在燙的柏油路上,熱能就透過傳導進入你的腳\n• 建築物的牆壁吸收熱能,再傳導到室內\n\n城市問題:\n• 水泥、柏油是良好的熱傳導材料\n• 白天吸熱,晚上慢慢傳導釋放'
              }
            ]
          },
          {
            title: '對流:空氣流動帶走熱',
            blocks: [
              {
                type: 'text',
                content: '**對流**:流體(液體或氣體)因為密度差異而流動,帶動熱能移動。\n\n原理:\n• 熱空氣密度小,會上升\n• 冷空氣密度大,會下降\n• 形成循環流動\n\n城市問題:\n• 高樓大廈阻擋風\n• 空氣對流不良\n• 熱能無法散出'
              }
            ]
          },
          {
            title: '蒸發冷卻:植物的降溫功能',
            blocks: [
              {
                type: 'text',
                content: '**蒸發冷卻**:水蒸發時會吸收周圍的熱能。\n\n植物的作用:\n• 光合作用需要能量(吸收熱)\n• 蒸散水分(蒸發冷卻)\n• 遮陰(減少地面吸熱)\n\n這就是為什麼增加綠地可以降溫!'
              }
            ]
          },
          {
            title: '城市降溫的科學方法',
            blocks: [
              {
                type: 'text',
                content: '綜合應用三種熱傳遞原理:\n\n① 減少吸熱(輻射):白色塗料反射陽光\n② 加速散熱(對流):保留風廊,讓空氣流通\n③ 蒸發降溫:增加綠地、水池、噴泉\n④ 減少熱源:節能減碳,減少廢熱排放'
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
    // 單元四：語文 — 詞彙練習
    // ==========================================
    {
      id: 'chinese-vocabulary',
      name: '語文:詞彙練習',
      icon: '✍️',
      lesson: {
        title: '今日詞彙:都市與氣候用語',
        sections: [
          {
            title: '今日學習詞彙',
            blocks: [
              {
                type: 'text',
                content: '今天在各科學習中,出現了這些重要詞彙:\n\n【地理類】\n• 熱島效應:都市中心特別熱的區域,形狀像島嶼\n• 盆地地形:四周被山圍住的低窪地形\n• 綠覆蓋率:綠地面積佔總面積的百分比\n• 等溫線:溫度相同的點連成的線\n\n【科學類】\n• 傳導:接觸傳熱\n• 對流:流體流動帶動熱能\n• 輻射:電磁波傳遞能量\n• 蒸散:植物蒸發水分散熱\n• 蒸發冷卻:水蒸發時吸收熱能\n\n【數學類】\n• 綠覆蓋率:綠地面積÷總面積×100%\n• 平均數:總和÷個數\n• 溫差:高溫-低溫'
              }
            ]
          },
          {
            title: '練習說明',
            blocks: [
              {
                type: 'text',
                content: '接下來的練習,測試你對這些詞彙的理解。\n\n請注意區分:\n• 傳導、對流、輻射(三種熱傳遞方式)\n• 熱島效應(現象) vs 都市化(原因)\n• 綠覆蓋率(百分比) vs 綠地面積(面積單位)'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 4,
        generator: () => {
          const vocabQuestions = [
            {
              type: 'options',
              question: '「熱島效應」中的「島」是什麼意思?',
              options: ['都市中心特別熱的區域,形狀像島嶼', '真的有一座島很熱', '熱帶島嶼', '海島型氣候'],
              answer: 0,
              displayAnswer: '都市中心特別熱的區域,形狀像島嶼'
            },
            {
              type: 'options',
              question: '「蒸散」是指?',
              options: ['植物蒸發水分散熱', '水變成冰', '空氣擴散', '熱能散失'],
              answer: 0,
              displayAnswer: '植物蒸發水分散熱'
            },
            {
              type: 'options',
              question: '「盆地地形」的特徵是?',
              options: ['四周被山圍住的低窪地形', '地勢很高', '靠近海邊', '平坦的平原'],
              answer: 0,
              displayAnswer: '四周被山圍住的低窪地形'
            },
            {
              type: 'options',
              question: '「等溫線」是指?',
              options: ['溫度相同的點連成的線', '時間相同的線', '高度相同的線', '距離相同的線'],
              answer: 0,
              displayAnswer: '溫度相同的點連成的線'
            },
            {
              type: 'options',
              question: '下列哪個詞語的用法「正確」?',
              options: [
                '台北盆地熱島效應明顯',
                '輻射需要空氣才能傳播',
                '對流是接觸傳熱',
                '綠覆蓋率越低越涼爽'
              ],
              answer: 0,
              displayAnswer: '台北盆地熱島效應明顯'
            },
            {
              type: 'options',
              question: '「蒸發冷卻」的原理是?',
              options: ['水蒸發時吸收熱能', '水結冰時放出熱能', '水加熱時產生蒸氣', '水冷卻時變成冰'],
              answer: 0,
              displayAnswer: '水蒸發時吸收熱能'
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
                content: '今天開始時,我們帶著兩個問題進入課程:\n\n① 為什麼都市比鄉村熱?熱島效應是怎麼形成的?\n② 台灣哪些地方的熱島效應特別明顯?為什麼?\n\n現在,用今天學到的概念,試著各寫2～3句話回答。\n\n可以用到的概念:人造表面、廢熱來源、盆地地形、海風調節、傳導、對流、輻射、蒸散……'
              }
            ]
          },
          {
            title: '今日學習小結',
            blocks: [
              {
                type: 'text',
                content: '今天我們把焦點拉回台灣,探討「台灣哪裡特別熱」:\n\n• 社會:都市熱島效應的形成與台灣各地的差異\n• 數學:綠覆蓋率計算、溫度統計、比例尺應用\n• 科學:熱的三種傳遞方式在城市中的應用\n• 語文:都市與氣候的專業詞彙\n\n明天,我們將探討更極端的氣候現象——熱浪與聖嬰現象,還有台灣的霸王寒流!'
              }
            ]
          }
        ]
      },
      practice: null
    }

  ]
}

export default day2
