// W13 Day 1: 地球為什麼發燒?

const day1 = {
  id: 'day1',
  name: '第1天',
  icon: '🌡️',
  color: '#EF4444',
  title: '地球為什麼發燒?',
  
  units: [
    {
      id: 'w13d1-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '當地球發燒的時候(一)',
        sections: [
          {
            title: '一個不尋常的夏天',
            blocks: [
              {
                type: 'text',
                content: '2023年7月,台北測得攝氏39.7度的高溫,創下126年來的紀錄。同一個月,義大利西西里島測到攝氏48.8度,歐洲多國發布紅色高溫警報。世界氣象組織宣布:這是人類有紀錄以來最熱的7月。'
              },
              {
                type: 'text',
                content: '氣象專家鄭明典站在中央氣象署的辦公室裡,看著螢幕上不斷更新的全球溫度地圖。紅色、深紅色、紫色——這些代表高溫的顏色,像野火一樣在地圖上蔓延。他知道,這不是偶然,而是一個訊號:地球正在發燒。'
              },
              {
                type: 'text',
                content: '「地球發燒」這個說法,聽起來像是童話故事,但它確實正在發生。從工業革命以來,人類大量使用煤炭、石油等化石燃料,排放出巨量的二氧化碳。這些二氧化碳像一層厚厚的棉被,把地球包裹起來,讓太陽的熱量無法散出去。科學家稱這種現象為「溫室效應」。'
              },
              {
                type: 'text',
                content: '溫室效應本來是地球的保護機制。如果沒有大氣層中的溫室氣體,地球的平均溫度會是攝氏零下18度,根本無法住人。但是,當溫室氣體太多,就像蓋了太厚的棉被,地球開始過熱,氣候系統開始失衡。'
              },
              {
                type: 'text',
                content: '科學家測量發現,從1880年到現在,全球平均溫度已經上升了約攝氏1.1度。你可能會想:才1度多,有什麼好擔心的?我們每天早晚的溫差都超過10度啊!但鄭明典提醒我們,這裡說的是「全球平均」——當全球平均溫度上升1度,代表某些地方可能上升3度、5度,甚至更多。'
              },
              {
                type: 'text',
                content: '更重要的是,這1度的改變,會讓整個氣候系統產生連鎖反應。氣流的方向改變了,降雨的模式不同了,原本該冷的地方不夠冷,該熱的地方更熱。於是我們看到:該下雨的季節鬧乾旱,不該有颱風的地方出現強烈風暴,北極的冰層融化速度加快,海平面持續上升。'
              },
              {
                type: 'text',
                content: '「不一樣」這三個字,才是真正的威脅。當氣候變得跟過去不一樣,我們數千年來累積的農業經驗、建築方式、生活習慣,可能都不再適用。這就是為什麼,科學家如此關注這看似微小的溫度變化。'
              }
            ]
          }
        ]
      },
      practice: null
    },
    
    {
      id: 'w13d1-social',
      name: '社會:氣候變遷與1.5°C目標',
      icon: '🌍',
      lesson: {
        title: '為什麼是1.5°C?',
        sections: [
          {
            title: '2°C到1.5°C的故事',
            blocks: [
              {
                type: 'text',
                content: '在國際氣候談判中,你經常會聽到「2°C」和「1.5°C」這兩個數字。這不是隨便訂的,而是科學家經過大量研究評估出來的「臨界點」。'
              },
              {
                type: 'text',
                content: '首先是「2°C」。科學家比較工業革命前(約1850-1900年)和現在的全球平均溫度,發現如果升溫超過攝氏2度,地球的氣候系統會產生難以逆轉的改變。冰川大量融化、海平面顯著上升、極端氣候頻繁發生、許多生態系統崩潰。因此,國際社會在多次氣候峰會中,都以「避免升溫超過2°C」作為目標。'
              },
              {
                type: 'text',
                content: '但是,2015年《巴黎氣候協定》簽署時,一些小島國家站出來說話了。馬爾地夫、吐瓦魯、吉里巴斯等國家,他們的國土海拔非常低,有些地方只比海平面高1-2公尺。對他們來說,等不到2°C,可能在1.5°C時,大部分國土就會被海水淹沒。'
              },
              {
                type: 'text',
                content: '這些國家的代表在會議上懇切地說:「當你們在討論2°C時,對我們來說已經是滅國的威脅。」他們要求把目標訂得更嚴格。經過激烈討論,各國終於同意:「將全球平均升溫控制在遠低於2°C,並努力限制在1.5°C以內。」'
              },
              {
                type: 'text',
                content: '這0.5°C的差異,對一些國家來說,就是生存或滅亡的分界線。'
              }
            ]
          },
          {
            title: '我們還有多少時間?',
            blocks: [
              {
                type: 'text',
                content: '那麼,現在地球溫度升高多少了?答案是:約1.1°C到1.2°C。距離1.5°C,只剩下0.3-0.4°C的空間。'
              },
              {
                type: 'text',
                content: '根據聯合國跨政府氣候變遷專門委員會(IPCC)的報告,如果人類繼續以目前的速度排放溫室氣體,最快在2030-2035年之間,就會突破1.5°C的門檻。也就是說,我們只剩下不到10年的時間來扭轉局勢。'
              },
              {
                type: 'text',
                content: '要守住1.5°C,需要做到什麼?科學家計算,全球必須在2030年前將溫室氣體排放量減少到2010年的一半,並在2050年達到「淨零排放」——也就是排放出去的溫室氣體,要能夠被森林、海洋或科技方法吸收回來,達到平衡。'
              },
              {
                type: 'text',
                content: '這是一個艱鉅的挑戰。我們需要改變能源結構(從化石燃料轉向再生能源)、改變交通方式(發展電動車、大眾運輸)、改變產業模式(循環經濟、綠色製造)、改變生活習慣(減少浪費、節約能源)。每一項改變,都需要政府、企業和每一個人的參與。'
              },
              {
                type: 'text',
                content: '台灣也在2023年通過《氣候變遷因應法》,宣示2050年達到淨零排放的目標。這意味著,現在的小學生長大成人時,將會生活在一個與現在非常不同的世界——一個必須學會與氣候變遷共存,並努力修復地球的世界。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: () => {
          const questions = [
            {
              type: 'options',
              question: '《巴黎氣候協定》為什麼將目標從2°C調整到1.5°C?',
              options: [
                '因為科學家計算錯誤',
                '因為小島國家面臨被海水淹沒的威脅',
                '因為2°C太容易達成',
                '因為所有國家都同意'
              ],
              answer: 1,
              displayAnswer: '因為小島國家面臨被海水淹沒的威脅'
            },
            {
              type: 'options',
              question: '目前全球平均溫度比工業革命前上升了多少?',
              options: [
                '約0.5°C',
                '約1.1°C',
                '約2.0°C',
                '約3.5°C'
              ],
              answer: 1,
              displayAnswer: '約1.1°C'
            },
            {
              type: 'options',
              question: '要守住1.5°C目標,全球必須在哪一年達到淨零排放?',
              options: [
                '2025年',
                '2030年',
                '2050年',
                '2100年'
              ],
              answer: 2,
              displayAnswer: '2050年'
            },
            {
              type: 'options',
              question: '「淨零排放」的意思是什麼?',
              options: [
                '完全不排放任何溫室氣體',
                '排放的溫室氣體能被吸收回來,達到平衡',
                '只使用零污染能源',
                '減少50%的排放量'
              ],
              answer: 1,
              displayAnswer: '排放的溫室氣體能被吸收回來,達到平衡'
            },
            {
              type: 'options',
              question: '台灣的《氣候變遷因應法》宣示在哪一年達到淨零排放?',
              options: [
                '2030年',
                '2040年',
                '2050年',
                '2060年'
              ],
              answer: 2,
              displayAnswer: '2050年'
            }
          ]
          return questions[Math.floor(Math.random() * questions.length)]
        },
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },
    
    {
      id: 'w13d1-math',
      name: '數學:溫度與數線',
      icon: '📊',
      lesson: {
        title: '用數學理解氣候變遷',
        sections: [
          {
            title: '溫度變化在數線上',
            blocks: [
              {
                type: 'text',
                content: '我們在W1學過數線和負數。現在,讓我們用數線來理解全球暖化。'
              },
              {
                type: 'text',
                content: '假設工業革命前的全球平均溫度是0°C(這是我們設定的基準點)。目前全球平均溫度比基準高了1.1°C,我們可以在數線上標示為 +1.1。'
              },
              {
                type: 'text',
                content: '《巴黎氣候協定》的目標是控制在 +1.5°C以內,最多不超過 +2.0°C。如果我們不努力,科學家預測到2100年可能升溫 +3.0°C到 +5.0°C。'
              },
              {
                type: 'text',
                content: '在數線上:+1.1 → +1.5 → +2.0 → +3.0 → +5.0,每一個刻度,都代表地球氣候系統的重大改變。'
              }
            ]
          },
          {
            title: '比例與成長率',
            blocks: [
              {
                type: 'text',
                content: '大氣中二氧化碳濃度的變化,可以用「百分比成長率」來表示。'
              },
              {
                type: 'text',
                content: '1800年,大氣中CO₂濃度約280 ppm(百萬分之280)。2023年,CO₂濃度達到420 ppm。'
              },
              {
                type: 'text',
                content: '成長率 = (420-280)÷280 × 100% = 140÷280 × 100% = 0.5 × 100% = 50%'
              },
              {
                type: 'text',
                content: '換句話說,大氣中的CO₂濃度在200多年間增加了50%,這是非常驚人的增幅。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 6,
        generator: () => {
          const questions = [
            {
              type: 'options',
              question: '如果工業革命前全球平均溫度是基準0,目前上升1.1°C,目標是控制在1.5°C以內,那麼我們還有多少「溫度空間」?',
              options: [
                '0.3°C',
                '0.4°C',
                '0.5°C',
                '1.5°C'
              ],
              answer: 1,
              displayAnswer: '0.4°C'
            },
            {
              type: 'fill',
              question: '如果2010年全球溫室氣體排放量是500億噸,要在2030年減少到一半,應該減少到多少億噸?',
              answer: '250',
              displayAnswer: '250億噸'
            },
            {
              type: 'fill',
              question: '1800年CO₂濃度280 ppm,2023年420 ppm,增加了多少ppm?',
              answer: '140',
              displayAnswer: '140 ppm'
            },
            {
              type: 'options',
              question: '承上題,這個增幅相當於成長了百分之幾?(四捨五入到整數)',
              options: [
                '40%',
                '50%',
                '60%',
                '70%'
              ],
              answer: 1,
              displayAnswer: '50%'
            },
            {
              type: 'options',
              question: '如果某國2020年碳排放10億噸,每年減少5%,2021年的排放量是多少?',
              options: [
                '9億噸',
                '9.5億噸',
                '9.8億噸',
                '10.5億噸'
              ],
              answer: 1,
              displayAnswer: '9.5億噸'
            },
            {
              type: 'options',
              question: '科學家認為大氣CO₂安全濃度是350 ppm,但2023年已達420 ppm,超出了百分之幾?(四捨五入到整數)',
              options: [
                '15%',
                '20%',
                '25%',
                '30%'
              ],
              answer: 1,
              displayAnswer: '20%'
            }
          ]
          return questions[Math.floor(Math.random() * questions.length)]
        },
        checkAnswer: (question, userAnswer) => {
          if (question.type === 'options') {
            return parseInt(userAnswer) === question.answer
          } else {
            return String(userAnswer).trim() === String(question.answer).trim()
          }
        }
      }
    },
    
    {
      id: 'w13d1-science',
      name: '科學:溫室效應',
      icon: '🔬',
      lesson: {
        title: '地球的溫室',
        sections: [
          {
            title: '溫室效應如何運作?',
            blocks: [
              {
                type: 'text',
                content: '想像一下,你在冬天的陽光下,穿著一件厚外套。陽光照在外套上,外套吸收熱能,你的身體產生的熱也被外套包住,不容易散出去,所以你覺得暖和。'
              },
              {
                type: 'text',
                content: '地球的溫室效應,原理就像這件外套。太陽的光線穿過大氣層,照射到地表,地表吸收熱能後,會向外輻射出紅外線(一種熱輻射)。如果沒有大氣層,這些紅外線會直接射向太空,地球會非常寒冷。'
              },
              {
                type: 'text',
                content: '但是,大氣中有一些氣體——主要是水蒸氣、二氧化碳(CO₂)、甲烷(CH₄)、氧化亞氮(N₂O)等——它們像外套一樣,能夠吸收並保留這些紅外線。這些氣體被稱為「溫室氣體」。'
              },
              {
                type: 'text',
                content: '溫室氣體吸收熱能後,又會向四面八方輻射,其中一部分又輻射回地表,讓地表保持溫暖。這個過程就叫「溫室效應」。'
              }
            ]
          },
          {
            title: 'CO₂為什麼這麼重要?',
            blocks: [
              {
                type: 'text',
                content: '在所有溫室氣體中,為什麼CO₂最受關注?'
              },
              {
                type: 'text',
                content: '第一,CO₂的排放量最大。全球每年排放的溫室氣體,約有76%是CO₂。'
              },
              {
                type: 'text',
                content: '第二,CO₂在大氣中停留的時間很長。甲烷在大氣中約停留10-12年就會分解,但CO₂可以停留數百年甚至上千年。今天排放的CO₂,我們的曾曾曾孫還會感受到它的影響。'
              },
              {
                type: 'text',
                content: '第三,CO₂的來源廣泛。發電、開車、製造業、取暖、煮飯——幾乎所有使用化石燃料的活動都會產生CO₂。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: () => {
          const questions = [
            {
              type: 'options',
              question: '如果沒有自然的溫室效應,地球平均溫度會是多少?',
              options: [
                '攝氏零下18度',
                '攝氏0度',
                '攝氏15度',
                '攝氏30度'
              ],
              answer: 0,
              displayAnswer: '攝氏零下18度'
            },
            {
              type: 'options',
              question: '下列哪一種不是主要的溫室氣體?',
              options: [
                '二氧化碳(CO₂)',
                '甲烷(CH₄)',
                '氧氣(O₂)',
                '氧化亞氮(N₂O)'
              ],
              answer: 2,
              displayAnswer: '氧氣(O₂)'
            },
            {
              type: 'options',
              question: 'CO₂在大氣中可以停留多久?',
              options: [
                '約10年',
                '約50年',
                '數百年到上千年',
                '只有幾個月'
              ],
              answer: 2,
              displayAnswer: '數百年到上千年'
            },
            {
              type: 'options',
              question: '全球溫室氣體排放中,CO₂約占多少比例?',
              options: [
                '約30%',
                '約50%',
                '約76%',
                '約90%'
              ],
              answer: 2,
              displayAnswer: '約76%'
            },
            {
              type: 'options',
              question: '下列哪一項活動不會直接產生CO₂?',
              options: [
                '開汽車',
                '火力發電',
                '風力發電',
                '燒煤取暖'
              ],
              answer: 2,
              displayAnswer: '風力發電'
            }
          ]
          return questions[Math.floor(Math.random() * questions.length)]
        },
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },
    
    {
      id: 'w13d1-review',
      name: '今日回顧',
      icon: '🎯',
      lesson: {
        title: '今天我們學到了什麼?',
        sections: [
          {
            title: '重點整理',
            blocks: [
              {
                type: 'text',
                content: '今天我們探討了「地球為什麼發燒」這個重要問題。讓我們回顧一下:'
              },
              {
                type: 'text',
                content: '**社會方面**:我們了解到《巴黎氣候協定》為何訂定1.5°C目標,以及這個目標對小島國家的重要性。我們還知道台灣也承諾在2050年達到淨零排放。'
              },
              {
                type: 'text',
                content: '**數學方面**:我們用數線理解溫度變化,計算CO₂濃度的成長率,學會解讀氣候變遷的關鍵數據。數學幫助我們把抽象的氣候變遷,變成可以衡量和追蹤的具體數字。'
              },
              {
                type: 'text',
                content: '**科學方面**:我們理解了溫室效應的運作原理,知道CO₂為何如此重要,以及碳循環如何失衡。科學知識讓我們明白,氣候變遷不是猜測,而是有證據、有邏輯的科學事實。'
              },
              {
                type: 'text',
                content: '最重要的是,我們開始理解:氣候變遷不是遙遠的未來,而是正在發生的現在。我們每個人都會受到影響,也都能夠採取行動。'
              }
            ]
          },
          {
            title: '思考問題',
            blocks: [
              {
                type: 'text',
                content: '今天學完後,請你想一想:\n\n1. 如果你是小島國家的領導人,你會在氣候峰會上說什麼?\n\n2. 你家裡有哪些活動會產生CO₂?有哪些可以減少?\n\n3. 為什麼「1.1°C」這個看起來很小的數字,會讓科學家如此擔心?'
              },
              {
                type: 'text',
                content: '明天,我們將把視角拉回台灣,探討:台灣哪裡特別熱?為什麼台北的夏天感覺比以前更熱了?敬請期待!'
              }
            ]
          }
        ]
      },
      practice: null
    }
  ]
};

export default day1;
