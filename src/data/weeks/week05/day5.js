// src/data/weeks/week05/day5.js
// W5 Day5：藝術收尾——《KANO》電影日
// 貫穿文本：吳念真〈琵琶鼠〉結尾（四十年後重逢）

// ===== 輕量複習題（觀影前暖身）=====
const generateReviewQuestion = () => {
  const questions = [
    // 數學複習
    {
      type: 'choice',
      question: '一個圓形的半徑是 7 公分，它的圓周長約是多少公分？（π ≈ 3.14）',
      options: ['43.96', '21.98', '153.86', '14'],
      answer: 0,
      explanation: 'C = 2πr = 2 × 3.14 × 7 = 43.96 公分'
    },
    {
      type: 'choice',
      question: '半徑 10 公分、圓心角 90° 的扇形，弧長是多少公分？（π ≈ 3.14）',
      options: ['15.7', '62.8', '31.4', '7.85'],
      answer: 0,
      explanation: '弧長 = 2 × 3.14 × 10 × (90÷360) = 62.8 × 0.25 = 15.7 公分'
    },
    // 社會複習
    {
      type: 'choice',
      question: '縱貫鐵路完工的年份是？',
      options: ['1908年', '1895年', '1934年', '1945年'],
      answer: 0,
      explanation: '縱貫鐵路在1908年全線通車，從基隆連接到高雄，貫穿台灣西部。'
    },
    {
      type: 'choice',
      question: '日月潭水力發電廠完工於哪一年？',
      options: ['1934年', '1908年', '1895年', '1920年'],
      answer: 0,
      explanation: '日月潭水力發電廠（第一發電所）於1934年完工，是當時東亞最大的水力發電廠之一。'
    },
    // 科學複習
    {
      type: 'choice',
      question: '定滑輪的主要功能是？',
      options: ['改變施力方向', '省力一半', '讓重物自動上升', '增加速度'],
      answer: 0,
      explanation: '定滑輪固定不動，不省力，但可以改變施力方向。例如升旗桿讓你往下拉，旗子往上升。'
    },
    {
      type: 'choice',
      question: '用一根長棍撬起大石頭，支點應該靠近哪裡？',
      options: ['靠近石頭（抗力點）', '靠近手（施力點）', '在中間', '支點位置沒有影響'],
      answer: 0,
      explanation: '支點靠近抗力點（石頭），施力臂（支點到施力點的距離）就越長，越省力。'
    }
  ]
  const q = questions[Math.floor(Math.random() * questions.length)]
  const shuffled = [...q.options].sort(() => Math.random() - 0.5)
  return { ...q, options: shuffled, answer: shuffled.indexOf(q.options[q.answer]) }
}

// ===== Day 5 主體 =====
const day5 = {
  id: 'day5',
  name: '第5天',
  icon: '⚾',
  color: '#B71C1C',
  title: '《KANO》電影日',

  units: [
    // ── 開場：貫穿文本結尾 ──
    {
      id: 'w5d5-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '〈琵琶鼠〉結尾',
        sections: [
          {
            title: '四十年後',
            blocks: [
              {
                type: 'quote',
                content: '那年弟弟意外過世，大體移進殯儀館之後，我茫然地走到外頭抽菸，一個中年人走到我身邊……他低聲地說：「吳先生……要節哀哦……我認識你，小時候，我們一起摘過一葉草……，不過，你不一定記得。」\n\n他遞給我一張名片，然後就默默地走了。\n\n職稱是殯葬社負責人的名字下打了括弧寫著他的外號：琵琶鼠。\n\n四十年後我才知道老鼠子真正的姓和名字。',
                author: '吳念真〈琵琶鼠〉'
              },
              {
                type: 'text',
                content: '又過了很久之後，跳朋友才說：「琵琶鼠」是一種魚，說養魚的人都知道，它不是魚缸裡的主角，卻不能少。'
              },
              {
                type: 'text',
                content: '📍 這就是〈琵琶鼠〉的結局。\n\n那個從未上過學、在芒草叢裡教你摘一葉草、嘴裡唸著「九九八十一」走入霧裡的孩子，四十年後成了殯葬社的負責人——一個不是主角、卻不能少的人。\n\n現在，把書合起來。今天我們一起看《KANO》。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // ── 輕量複習題 ──
    {
      id: 'w5d5-review',
      name: '觀影前複習',
      icon: '🧠',
      lesson: {
        title: '本週重點快速複習',
        sections: [
          {
            title: '快速複習',
            blocks: [
              {
                type: 'text',
                content: '在開始看電影之前，快速回顧本週學到的東西：\n\n⭕ 圓的幾何：\nC = 2πr（圓周長）\n弧長 = 2πr × (圓心角 ÷ 360°)\n扇形周長 = 弧長 + 2r\n\n⚖️🔩🪝 三種簡單機械：\n槓桿（支點、施力點、抗力點）\n輪軸（大輪帶小軸，省力）\n滑輪（定滑輪改向，動滑輪省力）\n\n🚂⚡ 日治建設：\n縱貫鐵路（1908）、日月潭電廠（1934）\n礦業（北部）、糖業（南部）\n\n做幾道題目暖暖身，然後開始看電影！'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 4,
        generator: generateReviewQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },

    // ── 藝術欣賞：音樂 ──
    {
      id: 'w5d5-music',
      name: '音樂',
      icon: '🎵',
      lesson: {
        title: '鄧雨賢〈月夜愁〉',
        sections: [
          {
            title: '日治台灣最美的歌聲',
            blocks: [
              {
                type: 'text',
                content: '在看《KANO》之前，先聽一首歌——鄧雨賢的〈月夜愁〉（1933年）。\n\n鄧雨賢是日治時代最重要的台灣音樂家，他創作了四首台灣歌謠的經典名作：〈望春風〉、〈雨夜花〉、〈月夜愁〉、〈四季紅〉，被稱為「台灣歌謠四月天」。\n\n這些歌誕生的年代，正是KANO棒球隊在球場上奮鬥的年代，也是〈琵琶鼠〉礦工村的年代。'
              },
              {
                type: 'video',
                videoId: 'bq_0YKxwkb8',
                title: '鄧雨賢〈月夜愁〉'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // ── 藝術欣賞：電影《KANO》 ──
    {
      id: 'w5d5-film',
      name: '電影',
      icon: '🎬',
      lesson: {
        title: '《KANO》（2014）',
        sections: [
          {
            title: '關於這部電影',
            blocks: [
              {
                type: 'text',
                content: '《KANO》是2014年的台灣電影，由馬志翔導演、魏德聖監製。\n\n它講述的是1931年，嘉義農林學校（KANO）棒球隊的真實故事：一支由台灣漢人、台灣原住民、日本人組成的混合球隊，在嚴格的近藤兵太郎教練帶領下，一路打進甲子園（日本高中棒球最高殿堂）決賽的故事。\n\n電影的背景，就是日治時代的嘉義——嘉南大圳剛完工的年代。'
              }
            ]
          },
          {
            title: '邊看邊思考',
            blocks: [
              {
                type: 'text',
                content: '這不是考試，只是讓你在觀影時心裡有些問題：\n\n🏟️ 片中出現了哪些日治時代的建設場景？（鐵路、球場、農田……）\n\n👥 球隊由哪些族群組成？他們之間怎麼溝通、怎麼合作？\n\n⚾ 近藤教練為什麼說「你們生長在一個水果比賽還要多的土地上」？\n\n💭 〈琵琶鼠〉裡的老鼠子，和KANO的球員，有什麼相似的地方？'
              }
            ]
          },
          {
            title: '電影連結',
            blocks: [
              {
                type: 'text',
                content: '《KANO》不只是一部棒球電影。它是關於：\n\n• 一個被認為「不可能贏」的隊伍，如何打進甲子園\n• 不同族群的人，如何找到共同的語言（棒球）\n• 日治時代的台灣青年，如何在殖民體制下尋找尊嚴\n• 嘉南大圳和農業，如何成為球員力量的土壤\n\n這部電影的時代，正是我們這週社會課學習的時代。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // ── 週末回顧 ──
    {
      id: 'w5d5-weekreview',
      name: '本週回顧',
      icon: '🌟',
      lesson: {
        title: 'W5：構造與能量——本週學了什麼？',
        sections: [
          {
            title: '本週知識地圖',
            blocks: [
              {
                type: 'text',
                content: '🏗️ 社會地理：\n日治基礎建設——縱貫鐵路（1908）、自來水道、公學校\n日治糖業——製糖廠機械化、五分仔車\n日月潭水力發電廠（1934）——電力改變台灣工業\n背景：礦業（北部）與糖業（南部）是台灣兩大支柱'
              },
              {
                type: 'text',
                content: '⭕ 數學：\n圓周長 C = 2πr（π ≈ 3.14）\n弧長 = 2πr × (圓心角 ÷ 360°)\n扇形周長 = 弧長 + 2r\n應用：齒輪、輪胎、礦坑滑輪、鼓輪'
              },
              {
                type: 'text',
                content: '⚖️ 科學——三種簡單機械：\n槓桿：支點、施力點、抗力點；省力必費距離\n輪軸：大輪帶小軸；方向盤、螺絲起子\n滑輪：定滑輪改向、動滑輪省力一半；礦坑提升機'
              },
              {
                type: 'text',
                content: '📮 語文（應用文）：\n書信格式：稱謂、正文、祝語、署名、日期\n寫作任務：給老師的信——說說自學生活\n\n📖 貫穿文本：\n吳念真〈琵琶鼠〉——老鼠子，那個沒上過學卻把九九乘法背得俐落的孩子，走入霧裡。四十年後，他成了琵琶鼠——不是主角，卻不能少。'
              }
            ]
          },
          {
            title: '跨週銜接',
            blocks: [
              {
                type: 'quote',
                content: '圓周長是圓的「外圍」。下週（W6），我們要學圓的「內部」——圓面積。從周長到面積，從外到內，圓的幾何還有更多故事。',
                author: '預告W6'
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
