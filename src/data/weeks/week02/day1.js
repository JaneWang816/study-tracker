// src/data/weeks/week02/day1.js
// W2 Day 1：大地的輪廓

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 數學:公因數
// ==========================================
const mathQuestions = [
  // 最大公因數題型
  {
    type: 'options',
    question: '12 和 18 的最大公因數是多少?',
    options: ['6', '7', '12', '5'],
    answer: 0,
    displayAnswer: '6'
  },
  {
    type: 'options',
    question: '8 和 12 的最大公因數是多少?',
    options: ['4', '2', '6', '8'],
    answer: 0,
    displayAnswer: '4'
  },
  {
    type: 'options',
    question: '6 和 9 的最大公因數是多少?',
    options: ['3', '2', '6', '9'],
    answer: 0,
    displayAnswer: '3'
  },
  {
    type: 'options',
    question: '15 和 10 的最大公因數是多少?',
    options: ['5', '3', '10', '15'],
    answer: 0,
    displayAnswer: '5'
  },
  {
    type: 'options',
    question: '4 和 6 的最大公因數是多少?',
    options: ['2', '1', '3', '4'],
    answer: 0,
    displayAnswer: '2'
  },
  {
    type: 'options',
    question: '9 和 12 的最大公因數是多少?',
    options: ['3', '4', '6', '9'],
    answer: 0,
    displayAnswer: '3'
  },
  {
    type: 'options',
    question: '14 和 21 的最大公因數是多少?',
    options: ['7', '14', '3', '21'],
    answer: 0,
    displayAnswer: '7'
  },
  {
    type: 'options',
    question: '8 和 20 的最大公因數是多少?',
    options: ['4', '2', '8', '10'],
    answer: 0,
    displayAnswer: '4'
  },
  {
    type: 'options',
    question: '12 和 16 的最大公因數是多少?',
    options: ['4', '2', '8', '12'],
    answer: 0,
    displayAnswer: '4'
  },
  {
    type: 'options',
    question: '18 和 24 的最大公因數是多少?',
    options: ['6', '3', '9', '12'],
    answer: 0,
    displayAnswer: '6'
  },
  {
    type: 'options',
    question: '20 和 30 的最大公因數是多少?',
    options: ['10', '5', '15', '20'],
    answer: 0,
    displayAnswer: '10'
  },
  {
    type: 'options',
    question: '16 和 24 的最大公因數是多少?',
    options: ['8', '4', '12', '16'],
    answer: 0,
    displayAnswer: '8'
  },
  // 公因數判斷題型
  {
    type: 'options',
    question: '以下哪個數是 12 和 18 的公因數?',
    options: ['6', '4', '5', '9'],
    answer: 0,
    displayAnswer: '6'
  },
  {
    type: 'options',
    question: '以下哪個數是 8 和 12 的公因數?',
    options: ['4', '3', '6', '8'],
    answer: 0,
    displayAnswer: '4'
  },
  {
    type: 'options',
    question: '以下哪個數是 15 和 20 的公因數?',
    options: ['5', '3', '4', '10'],
    answer: 0,
    displayAnswer: '5'
  },
  {
    type: 'options',
    question: '以下哪個數是 9 和 12 的公因數?',
    options: ['3', '4', '6', '9'],
    answer: 0,
    displayAnswer: '3'
  },
  {
    type: 'options',
    question: '以下哪個數是 10 和 15 的公因數?',
    options: ['5', '2', '3', '10'],
    answer: 0,
    displayAnswer: '5'
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
// 社會:台灣地形
// ==========================================
const socialQuestions = [
  {
    type: 'options',
    question: '台灣地形分布的主要特徵是什麼?',
    options: ['東高西低,山脈縱貫南北', '西高東低,平原廣布', '中部低窪,四周高山', '全島地勢平坦'],
    answer: 0,
    displayAnswer: '東高西低,山脈縱貫南北'
  },
  {
    type: 'options',
    question: '台灣面積最大的平原是哪一個?',
    options: ['嘉南平原', '屏東平原', '台北盆地', '宜蘭平原'],
    answer: 0,
    displayAnswer: '嘉南平原'
  },
  {
    type: 'options',
    question: '台灣五大山脈中,最西邊的是哪一條?',
    options: ['阿里山山脈', '中央山脈', '玉山山脈', '海岸山脈'],
    answer: 0,
    displayAnswer: '阿里山山脈'
  },
  {
    type: 'options',
    question: '台灣最高峰玉山高度約為多少公尺?',
    options: ['3952 公尺', '3886 公尺', '3797 公尺', '4000 公尺'],
    answer: 0,
    displayAnswer: '3952 公尺'
  },
  {
    type: 'options',
    question: '台灣東部海岸的地形以什麼為主?',
    options: ['斷崖與礫石海岸', '廣闊沙灘', '泥灘與紅樹林', '廣闊平原'],
    answer: 0,
    displayAnswer: '斷崖與礫石海岸'
  },
  {
    type: 'options',
    question: '台灣的「花東縱谷」位於哪兩條山脈之間?',
    options: ['中央山脈與海岸山脈', '玉山山脈與中央山脈', '阿里山山脈與玉山山脈', '雪山山脈與中央山脈'],
    answer: 0,
    displayAnswer: '中央山脈與海岸山脈'
  },
  {
    type: 'options',
    question: '台灣西部平原主要是由什麼作用形成的?',
    options: ['河流沖積', '火山噴發', '海浪侵蝕', '地殼上升'],
    answer: 0,
    displayAnswer: '河流沖積'
  },
  {
    type: 'options',
    question: '台灣的山脈大多呈什麼方向延伸?',
    options: ['南北走向', '東西走向', '東北到西南', '西北到東南'],
    answer: 0,
    displayAnswer: '南北走向'
  },
  // 五大地形類型
  {
    type: 'options',
    question: '台灣的地形依高低起伏可分為五大類型,以下哪一項不屬於這五大類型?',
    options: ['火山', '平原', '盆地', '臺地'],
    answer: 0,
    displayAnswer: '火山（五大地形為：平原、盆地、臺地、丘陵、山地）'
  },
  {
    type: 'options',
    question: '「臺地」是什麼樣的地形?',
    options: ['四周有陡坡、頂部平坦的高地', '四周被山包圍的低窪地', '河流沖積而成的平坦土地', '山脈之間的狹長谷地'],
    answer: 0,
    displayAnswer: '四周有陡坡、頂部平坦的高地'
  },
  {
    type: 'options',
    question: '「盆地」是什麼樣的地形?',
    options: ['四周被山地或高地包圍的低窪地', '四周有陡坡、頂部平坦的高地', '坡度平緩的低矮山丘', '河流沖積而成的廣大平原'],
    answer: 0,
    displayAnswer: '四周被山地或高地包圍的低窪地'
  },
  {
    type: 'options',
    question: '桃園臺地、林口臺地、大肚臺地主要分布在台灣的哪一側?',
    options: ['西側', '東側', '南側', '北側'],
    answer: 0,
    displayAnswer: '西側'
  },
  {
    type: 'options',
    question: '「台北盆地」的形成，主要是因為?',
    options: ['四周被山地包圍，中間地勢低窪', '河流長期沖積堆積而成', '火山噴發後地表下陷', '海水退去後形成的低地'],
    answer: 0,
    displayAnswer: '四周被山地包圍，中間地勢低窪'
  },
  {
    type: 'options',
    question: '以下哪一個是台灣的「盆地」地形?',
    options: ['台北盆地', '嘉南平原', '桃園臺地', '竹東丘陵'],
    answer: 0,
    displayAnswer: '台北盆地'
  },
  {
    type: 'options',
    question: '「丘陵」和「山地」的主要差別是?',
    options: ['丘陵坡度較緩、海拔較低，山地海拔高、坡度陡', '丘陵在東部，山地在西部', '丘陵是人工堆積，山地是天然形成', '丘陵面積比山地大'],
    answer: 0,
    displayAnswer: '丘陵坡度較緩、海拔較低，山地海拔高、坡度陡'
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

// ==========================================
// 閱讀理解:排灣族
// ==========================================
const readingQuestions = [
  {
    type: 'options',
    question: '排灣族的「百步蛇」在族人心中代表什麼?',
    options: ['祖靈與尊崇的象徵', '危險與邪惡的象徵', '豐收與喜悅的象徵', '雨水與河流的象徵'],
    answer: 0,
    displayAnswer: '祖靈與尊崇的象徵'
  },
  {
    type: 'options',
    question: '排灣族石板屋的建築技法,據說是從哪裡得到啟示的?',
    options: ['百步蛇身上鱗片的排列', '大武山的岩層排列', '竹子的節節生長', '太陽光的照射方向'],
    answer: 0,
    displayAnswer: '百步蛇身上鱗片的排列'
  },
  {
    type: 'options',
    question: '在「太陽卵生說」中,排灣族的祖先是如何誕生的?',
    options: ['蛇卵經太陽照射孵化出人', '神靈從大海中創造人', '大洪水後從山中誕生', '竹子裂開後生出人'],
    answer: 0,
    displayAnswer: '蛇卵經太陽照射孵化出人'
  },
  {
    type: 'options',
    question: '「蛇生說」中,排灣族牡丹社的祖先是怎麼來的?',
    options: ['竹子裂開生出蛇,成長後化為人', '蛇蛋孵化出人形嬰兒', '太陽光照在山石上生出人', '女神從天而降生下後代'],
    answer: 0,
    displayAnswer: '竹子裂開生出蛇,成長後化為人'
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

export { generateMathQuestion, generateSocialQuestion, generateReadingQuestion }

// ==========================================
// Day 1 主體
// ==========================================
const day1 = {
  id: 'day1',
  name: '第1天',
  icon: '🏔️',
  color: '#8B6914',
  title: '大地的輪廓',

  units: [
    {
      id: 'w2d1-reading',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '臺灣原住民族與蛇：排灣族的故事',
        sections: [
          {
            title: '本週貫穿文本',
            blocks: [
              {
                type: 'text',
                content: '這週我們要一起閱讀一篇介紹臺灣原住民族蛇文化的文章。臺灣有許多族群，每個族群都有關於蛇的神話傳說，這些故事不只是想像力的產物，更藏著祖先對大自然的深刻觀察與智慧。'
              },
              {
                type: 'text',
                content: '對大自然充滿好奇的臺灣原住民族祖先，將生活中的事物化為想像力豐富的故事；其中透露出來的共通原則是：人類透過這些神話、傳說故事，不斷尋求與蛇和平共存的原則。',
                author: '《臺灣原住民族與蛇》，《原住民族》雜誌 580 期，2013'
              }
            ]
          },
          {
            title: '今日閱讀：排灣族的故事',
            blocks: [
              {
                type: 'text',
                content: '對排灣族人而言，「百步蛇」是祖靈的象徵，稱其為 tasalad（夥伴）、kavulungan（祖先）、mamazangilan（王），可見蛇在排灣族社會當中極受尊崇。'
              },
              {
                type: 'subtitle',
                content: '太陽卵生說'
              },
              {
                type: 'text',
                content: '古代的一場大洪水淹死所有人畜，當時有一位神靈入山，從蛇卵當中看到人形的影子，而後蛇卵經由太陽光的照射而破裂，人由蛋中出現，此即為排灣族祖先。'
              },
              {
                type: 'subtitle',
                content: '蛇生說'
              },
              {
                type: 'text',
                content: '大武山上曾經生長著一根竹子，竹子裂開生出許多蛇，成長後化為人，是為祖先。'
              },
              {
                type: 'subtitle',
                content: '啟發石板屋建築'
              },
              {
                type: 'text',
                content: '排灣族祖先原本創造的石板屋，遇雨必漏水，一日，聖獸百步蛇告訴族人，屋頂需用其身上鱗片的排列方式建築。百步蛇將自己的身體撐大，讓排灣族人依循著蛇鱗的排列，井然有序地堆砌石板，這項技法與啟示便流傳至今。'
              },
              {
                type: 'text',
                content: '🔍 今日思考：蛇鱗的排列有什麼規律？大自然中還有哪些東西排列得很有規律？帶著這個問題繼續今天的學習！'
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
      id: 'w2d1-social',
      name: '社會',
      icon: '🗺️',
      lesson: {
        title: '台灣的地形分布',
        sections: [
          {
            title: '台灣的地形輪廓',
            blocks: [
              {
                type: 'image',
                src: '/images/TaiwanMountains.jpg',
                alt: '台灣地形分布圖，顯示五大山脈、平原、盆地、臺地、丘陵的分布',
                caption: '台灣地形分布圖——橘紅色為山地，由中央向西依序為丘陵、臺地、平原'
              },
              {
                type: 'text',
                content: '台灣是一座多山的島嶼，地形複雜多樣。最大的特徵是「東高西低」：山脈集中在東側，西側則是廣闊的平原。台灣的五大山脈由西向東依序排列，就像蛇鱗一樣層層疊疊，分別是：阿里山山脈、玉山山脈、中央山脈、雪山山脈、海岸山脈。'
              },
              {
                type: 'text',
                content: '其中，中央山脈最長、最高，從北到南貫穿全島，被稱為「台灣的屋脊」。台灣最高峰玉山（3952 公尺）就屬於玉山山脈，是東亞最高的山峰之一。'
              }
            ]
          },
          {
            title: '台灣的五大地形類型',
            blocks: [
              {
                type: 'text',
                content: '對照地圖的顏色圖例，台灣的地形可分為五大類型：\n\n🟠 山地：海拔高、坡度陡，占全島面積約三分之一，集中在中東部。\n🟤 丘陵：坡度較緩的低矮山丘，海拔多在 100～500 公尺，例如竹東丘陵、苗栗丘陵。\n🟡 臺地：頂部平坦、四周有陡坡的高地，例如桃園臺地、林口臺地、大肚臺地、八卦臺地，多分布在西部。\n🟨 盆地：四周被山地包圍的低窪地，例如台北盆地、台中盆地、埔里盆地。\n🟢 平原：地勢平坦開闊，主要由河流沖積而成，集中在西部與東部縱谷。'
              },
              {
                type: 'text',
                content: '🔍 觀察地圖：從西到東看，台灣的地形高度如何變化？你能從顏色深淺找出規律嗎？'
              }
            ]
          },
          {
            title: '平原、盆地與縱谷',
            blocks: [
              {
                type: 'text',
                content: '台灣的平原主要分布在西部，是由河流長期沖積而成的肥沃土地。嘉南平原是台灣面積最大的平原，自古以來就是重要的農業區，盛產稻米和甘蔗。屏東平原和宜蘭平原也是重要的農業生產地。'
              },
              {
                type: 'text',
                content: '東部的花東縱谷夾在中央山脈與海岸山脈之間，是一條狹長的平坦谷地，也是台灣東部最主要的農業區域。台北盆地則是北部最重要的盆地，四周被大屯山、基隆山等丘陵包圍，現已發展成台灣首都圈。'
              }
            ]
          },
          {
            title: '東西海岸的差異',
            blocks: [
              {
                type: 'text',
                content: '台灣東西兩側的海岸地形截然不同。西部海岸地勢平緩，多沙灘與潟湖，適合養殖漁業；東部海岸則是山脈直接面海，形成壯觀的斷崖與礫石海岸，花蓮的清水斷崖就是著名例子。'
              },
              {
                type: 'text',
                content: '地形影響了人的生活方式：排灣族、魯凱族主要居住在南部山區，阿美族沿著花東縱谷生活，達悟族則在外海的蘭嶼島上世代安居。大地的輪廓，也塑造了人的故事。'
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

    {
      id: 'w2d1-math',
      name: '數學',
      icon: '🔢',
      lesson: {
        title: '公因數與最大公因數',
        sections: [
          {
            title: '什麼是因數？',
            blocks: [
              {
                type: 'text',
                content: '因數就是「能整除某個數的數」。例如 12 的因數有：1、2、3、4、6、12，因為這些數都能被 12 整除（餘數為 0）。'
              },
              {
                type: 'text',
                content: '找因數的小技巧：從 1 開始，一對一對地找。12 ÷ 1 = 12 ✓，12 ÷ 2 = 6 ✓，12 ÷ 3 = 4 ✓，12 ÷ 4 = 3（已出現過，停止！）所以 12 的因數是 1、2、3、4、6、12，共 6 個。'
              }
            ]
          },
          {
            title: '什麼是公因數與最大公因數？',
            blocks: [
              {
                type: 'text',
                content: '公因數是「兩個數共同擁有的因數」。例如：\n12 的因數：1、2、3、4、6、12\n18 的因數：1、2、3、6、9、18\n12 和 18 的公因數：1、2、3、6\n其中最大的 6，就叫做最大公因數（GCF）。'
              }
            ]
          },
          {
            title: '短除法：快速找最大公因數',
            blocks: [
              {
                type: 'text',
                content: '短除法步驟：用質數一直除兩個數，直到找不到共同的質因數為止，再把用過的質數全部相乘。\n\n例：求 12 和 18 的最大公因數\n÷ 2：得 6 和 9\n÷ 3：得 2 和 3（互質，停止）\n最大公因數 = 2 × 3 = 6 ✓'
              },
              {
                type: 'text',
                content: '生活應用：有 12 個蘋果和 18 個橘子，要平均分裝成幾袋，每袋蘋果和橘子數量整除，且袋數最多？\n答：最多可分 6 袋，每袋 2 個蘋果、3 個橘子。'
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
      id: 'w2d1-review',
      name: '今日回顧',
      icon: '🌅',
      lesson: {
        title: '規律，無所不在',
        sections: [
          {
            title: '今天學了什麼？',
            blocks: [
              {
                type: 'text',
                content: '今天我們從排灣族的石板屋故事出發，發現「規律」這個概念無所不在：蛇鱗的排列是規律、山脈由西向東的分布是規律、數字裡的公因數也是尋找共同規律的方法。'
              },
              {
                type: 'text',
                content: '📌 閱讀：排灣族百步蛇是祖靈象徵，石板屋技法來自蛇鱗啟示。\n📌 社會：台灣地形東高西低，五大山脈由西向東排列；地形五大類型——山地、丘陵、臺地、盆地、平原，從東向西高度遞減。\n📌 數學：公因數是兩個數共同的因數，最大公因數可用短除法快速求得。'
              },
              {
                type: 'text',
                content: '百步蛇告訴族人，屋頂需用其身上鱗片的排列方式建築……依循著蛇鱗的排列，井然有序地堆砌石板，這項技法與啟示便流傳至今。',
                author: '《臺灣原住民族與蛇》'
              },
              {
                type: 'text',
                content: '🔮 明天預告：魯凱族的蛇卵傳說，以及植物的種子與生命的起點。蛋和種子，有什麼共同點呢？'
              }
            ]
          }
        ]
      },
      practice: null
    }
  ]
}

export default day1
