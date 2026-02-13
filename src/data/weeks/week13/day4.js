// W13 Day 4: 我們能做什麼?

const day4 = {
  id: 'day4',
  name: '第4天',
  icon: '🛡️',
  color: '#059669',
  title: '我們能做什麼?',
  
  units: [
    {
      id: 'w13d4-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '當地球發燒的時候(四)',
        sections: [
          {
            title: '氣象預報的力量',
            blocks: [
              { type: 'text', content: '2019年,歐洲又迎來一次熱浪,溫度甚至比2003年更高。但這一次,死亡人數大幅減少。為什麼?' },
              { type: 'text', content: '因為這次,歐洲有了準備。氣象單位提前一週發布高溫警報,政府開放有冷氣的圖書館、體育館讓民眾避暑;社工定期探訪獨居老人,確認他們的狀況;醫院增加急診人力,準備好應對中暑病患。' },
              { type: 'text', content: '鄭明典說:「氣象預報最重要的價值,不是告訴你會不會下雨,而是讓你有時間準備。」提前知道極端天氣要來,我們就可以:取消戶外活動、準備防災物資、疏散危險地區的居民、調度醫療資源。' },
              { type: 'text', content: '台灣的氣象預報技術在亞洲名列前茅。中央氣象署的超級電腦,每天處理數百億筆資料,模擬未來一週的天氣變化。颱風路徑預測的準確度,已經從20年前的「可能差200公里」進步到「誤差小於70公里」。' },
              { type: 'text', content: '但是,再精確的預報,如果民眾不重視、不準備,就沒有意義。這就是為什麼,氣象教育和防災演練如此重要。' }
            ]
          },
          {
            title: '從危機到轉機',
            blocks: [
              { type: 'text', content: '面對氣候變遷,我們不能只是被動防禦,更要主動調適。' },
              { type: 'text', content: '荷蘭是一個很好的例子。這個國家有四分之一的土地低於海平面,隨時面臨海水倒灌的威脅。但荷蘭人沒有放棄,反而發展出世界最先進的水利工程和防洪技術,甚至把「與水共存」變成國家特色。' },
              { type: 'text', content: '台灣也在學習調適。莫拉克風災後,政府投入大量資源改善山坡地水土保持,建立土石流預警系統。現在,當雨量達到警戒值,系統會自動發送警報到村長和居民手機,讓他們及時疏散。' },
              { type: 'text', content: '在都市,台北市推動「海綿城市」計畫:讓路面可以吸水、公園能夠滯洪、屋頂可以蓄水。這些設計讓城市在暴雨時不容易淹水,在乾旱時有儲備水源。' },
              { type: 'text', content: '每個人也都可以行動。節約用電(減少火力發電的碳排放)、搭乘大眾運輸(減少汽車廢氣)、減少食物浪費(生產食物需要很多能源)、支持環保政策。這些看似微小的行動,累積起來就是巨大的力量。' },
              { type: 'text', content: '鄭明典常說:「我們不能阻止地球發燒,但我們可以減緩發燒的速度,也可以學會在發燒的地球上更好地生存。」' }
            ]
          }
        ]
      },
      practice: null
    },
    
    {
      id: 'w13d4-social',
      name: '社會:防災與調適',
      icon: '🌍',
      lesson: {
        title: '台灣的氣候調適',
        sections: [
          {
            title: '台灣的防災系統',
            blocks: [
              { type: 'text', content: '**中央氣象署**:提供天氣預報、颱風警報、豪雨特報、高溫警示。透過電視、廣播、手機、網站多管道發布。' },
              { type: 'text', content: '**災害應變中心**:當颱風、豪雨來襲時,各縣市會成立災害應變中心,整合警察、消防、軍隊、醫療等資源,協調救災工作。' },
              { type: 'text', content: '**土石流預警系統**:在易發生土石流的山區,裝設雨量監測站。當雨量達到警戒值,系統會自動發送簡訊給村長和居民,通知他們準備疏散。' },
              { type: 'text', content: '**防災公園**:台北、台中等都市設立防災公園,平常是休閒空間,災害時可以作為避難場所和救援據點。公園內有儲水槽、發電機、通訊設備、醫療站。' }
            ]
          },
          {
            title: '個人防災準備',
            blocks: [
              { type: 'text', content: '**緊急避難包**:準備三天份的飲用水、食物、手電筒、電池、急救用品、重要文件影本、現金。放在容易拿取的地方。' },
              { type: 'text', content: '**避難路線**:知道住家、學校附近的避難場所在哪裡,如何前往。與家人約定好緊急集合地點。' },
              { type: 'text', content: '**氣象資訊**:養成習慣,在颱風季、梅雨季關注氣象預報。下載中央氣象署APP,可以即時收到警報。' },
              { type: 'text', content: '**保險規劃**:了解住宅火險、地震險、颱風險等保障。氣候災害造成的損失,保險可以減輕經濟負擔。' }
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
            }
          ]
          return questions[Math.floor(Math.random() * questions.length)]
        },
        checkAnswer: (question, userAnswer) => parseInt(userAnswer) === question.answer
      }
    },
    
    {
      id: 'w13d4-math',
      name: '數學:綜合應用',
      icon: '📊',
      lesson: {
        title: '用數學規劃防災',
        sections: [
          {
            title: '避難容量計算',
            blocks: [
              { type: 'text', content: '防災公園需要規劃避難空間。假設每人需要2平方公尺的空間,一個10000平方公尺的公園,扣除道路、設施(占30%),能容納多少人?' },
              { type: 'text', content: '可用空間 = 10000 × (1-0.3) = 10000 × 0.7 = 7000平方公尺' },
              { type: 'text', content: '容納人數 = 7000 ÷ 2 = 3500人' }
            ]
          },
          {
            title: '救援物資分配',
            blocks: [
              { type: 'text', content: '颱風過後,需要分配救援物資。如果有600箱物資,要分配給5個村莊,按照受災戶數比例分配:' },
              { type: 'text', content: 'A村50戶、B村80戶、C村40戶、D村60戶、E村70戶,總計300戶。' },
              { type: 'text', content: 'A村分配: 600 × (50÷300) = 600 × 1/6 = 100箱\nB村分配: 600 × (80÷300) = 600 × 4/15 = 160箱\n...(依此類推)' }
            ]
          }
        ]
      },
      practice: {
        questionCount: 6,
        generator: () => {
          const questions = [
            {
              type: 'fill',
              question: '某避難所面積5000平方公尺,扣除設施(占25%),每人需2平方公尺,可容納多少人?',
              answer: '1875',
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
              type: 'fill',
              question: '某地區有x戶受災,每戶發放3箱物資,共需540箱,x等於多少?',
              answer: '180',
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
              type: 'fill',
              question: '某家庭4口人,準備3天避難物資,每人每天需2公升水,共需多少公升?',
              answer: '24',
              displayAnswer: '24公升 (4×3×2=24)'
            },
            {
              type: 'options',
              question: '某村300戶,準備率80%,實際準備避難包的有多少戶?',
              options: ['200戶', '220戶', '240戶', '260戶'],
              answer: 2,
              displayAnswer: '240戶 (300×0.8=240)'
            }
          ]
          return questions[Math.floor(Math.random() * questions.length)]
        },
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
    
    {
      id: 'w13d4-science',
      name: '科學:氣候預報',
      icon: '🔬',
      lesson: {
        title: '如何預測天氣?',
        sections: [
          {
            title: '氣象觀測',
            blocks: [
              { type: 'text', content: '氣象預報的第一步是觀測。台灣有完整的氣象觀測網:' },
              { type: 'text', content: '**地面測站**:全台有數百個自動氣象站,每小時測量溫度、濕度、風速、風向、雨量、氣壓。' },
              { type: 'text', content: '**高空觀測**:用氣象氣球升到3萬公尺高空,測量不同高度的大氣狀態。' },
              { type: 'text', content: '**氣象雷達**:發射電磁波,偵測雲層中的雨滴,可以看到雨帶的移動和強度。' },
              { type: 'text', content: '**氣象衛星**:從太空拍攝地球,可以看到雲的分布、颱風的結構。' }
            ]
          },
          {
            title: '數值預報',
            blocks: [
              { type: 'text', content: '觀測到數據後,要用超級電腦進行「數值預報」。電腦把大氣分成無數個小格子,在每個格子裡計算空氣的溫度、壓力、濕度如何變化,然後推算未來的天氣。' },
              { type: 'text', content: '這個計算非常複雜,需要處理數百億筆數據。中央氣象署的超級電腦,每秒可以進行數兆次計算,但還是需要好幾個小時才能完成一次預報。' },
              { type: 'text', content: '預報越遠,不確定性越大。一般來說,3天內的預報相對準確,5-7天的預報有參考價值,超過10天就很不確定了。' }
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
            }
          ]
          return questions[Math.floor(Math.random() * questions.length)]
        },
        checkAnswer: (question, userAnswer) => parseInt(userAnswer) === question.answer
      }
    },
    
    {
      id: 'w13d4-writing',
      name: '語文:環境觀察報告',
      icon: '✍️',
      lesson: {
        title: '我的環境觀察筆記',
        sections: [
          {
            title: '寫作引導',
            blocks: [
              { type: 'text', content: '過去幾週,你已經觀察了周遭環境。現在,讓我們把觀察整理成一份完整的報告。' },
              { type: 'text', content: '**報告架構**:\n1. 標題:簡潔有力,點出主題\n2. 觀察對象:你觀察了什麼?(社區綠地、交通排放、能源使用...)\n3. 觀察記錄:你看到、聽到、測量到什麼?\n4. 分析思考:為什麼會這樣?有什麼問題?\n5. 建議方案:個人和社會可以怎麼改善?\n6. 結論反思:你學到了什麼?' },
              { type: 'text', content: '**寫作提示**:\n• 使用具體數據(溫度、數量、比例)\n• 加入圖表或照片\n• 連結這週學到的概念(熱島效應、碳排放、調適...)\n• 提出可行的建議,不要只是空談' },
              { type: 'text', content: '**字數建議**: 600-800字\n\n**範例標題**:\n• 我家社區的熱島效應觀察\n• 上學路上的碳足跡調查\n• 學校能源使用改善建議\n• 社區綠地減少的問題與對策' }
            ]
          },
          {
            title: '今天的任務',
            blocks: [
              { type: 'text', content: '今天請完成報告的前半部:標題、觀察對象、觀察記錄、分析思考。' },
              { type: 'text', content: '明天(Day 5)我們會完成建議方案和結論,並進行修改潤飾,最後產出完整的環境觀察報告。' },
              { type: 'text', content: '記得:好的報告不是華麗的文字,而是真實的觀察、深入的思考、可行的建議。' }
            ]
          }
        ]
      },
      practice: null
    },
    
    {
      id: 'w13d4-review',
      name: '今日回顧',
      icon: '🎯',
      lesson: {
        title: '今天我們學到了什麼?',
        sections: [
          {
            title: '重點整理',
            blocks: [
              { type: 'text', content: '今天的主題是「我們能做什麼」——從被動承受到主動調適。' },
              { type: 'text', content: '**社會方面**:我們認識了台灣的防災系統,從中央氣象署的預報、土石流預警、到防災公園的設置。也學會了個人防災準備:避難包、避難路線、氣象資訊、保險規劃。' },
              { type: 'text', content: '**數學方面**:我們用數學規劃防災:計算避難容量、分配救援物資、規劃儲備需求。這些計算看似簡單,但在災害現場,每一個數字都關係到人命。' },
              { type: 'text', content: '**科學方面**:我們理解了氣象預報的原理,知道預報不是猜測,而是基於觀測和計算的科學推論。也明白為什麼提前知道天氣變化如此重要。' },
              { type: 'text', content: '**語文方面**:我們開始整理環境觀察,準備寫成報告。觀察、思考、表達——這是公民參與環境議題的基本能力。' },
              { type: 'text', content: '最重要的是:面對氣候變遷,我們不是無能為力的。每個人都可以行動,每個小行動都有意義。' }
            ]
          }
        ]
      },
      practice: null
    }
  ]
};

export default day4;
