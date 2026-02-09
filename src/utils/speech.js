// src/utils/speech.js
// 文字轉語音工具

// 快取可用的語音
let cachedVoices = []

/**
 * 取得可用的語音列表
 */
function getVoices() {
  return new Promise((resolve) => {
    if (cachedVoices.length > 0) {
      resolve(cachedVoices)
      return
    }

    const voices = window.speechSynthesis.getVoices()
    if (voices.length > 0) {
      cachedVoices = voices
      resolve(voices)
      return
    }

    // 有些瀏覽器需要等待 voiceschanged 事件
    window.speechSynthesis.onvoiceschanged = () => {
      cachedVoices = window.speechSynthesis.getVoices()
      resolve(cachedVoices)
    }

    // 超時保護
    setTimeout(() => {
      cachedVoices = window.speechSynthesis.getVoices()
      resolve(cachedVoices)
    }, 1000)
  })
}

/**
 * 根據語言代碼找到最佳的語音
 */
async function findBestVoice(lang) {
  const voices = await getVoices()
  
  if (voices.length === 0) return null

  // 語言代碼對照（處理不同格式）
  const langMappings = {
    "zh-TW": ["zh-TW", "zh_TW", "zh-Hant", "zh"],
    "zh-CN": ["zh-CN", "zh_CN", "zh-Hans", "zh"],
    "en-US": ["en-US", "en_US", "en-GB", "en"],
    "es-ES": ["es-ES", "es_ES", "es-MX", "es"],
    "ja-JP": ["ja-JP", "ja_JP", "ja"],
    "ko-KR": ["ko-KR", "ko_KR", "ko"],
    "fr-FR": ["fr-FR", "fr_FR", "fr"],
    "de-DE": ["de-DE", "de_DE", "de"],
  }

  const possibleLangs = langMappings[lang] || [lang]

  // 1. 先嘗試精確匹配
  for (const tryLang of possibleLangs) {
    const exactMatch = voices.find(v => 
      v.lang === tryLang || v.lang.replace("_", "-") === tryLang
    )
    if (exactMatch) return exactMatch
  }

  // 2. 嘗試前綴匹配（例如 "en" 匹配 "en-US"）
  const baseLang = lang.split("-")[0]
  const prefixMatch = voices.find(v => v.lang.startsWith(baseLang))
  if (prefixMatch) return prefixMatch

  // 3. 返回預設語音
  return voices.find(v => v.default) || voices[0] || null
}

/**
 * 朗讀文字
 * @param {string} text 要朗讀的文字
 * @param {string} lang 語言代碼 (zh-TW, en-US, es-ES 等)
 * @param {number} rate 語速 (0.5 - 2，預設 1)
 */
export async function speak(text, lang = "zh-TW", rate = 1) {
  return new Promise(async (resolve, reject) => {
    // 檢查瀏覽器支援
    if (!("speechSynthesis" in window)) {
      reject(new Error("瀏覽器不支援語音功能"))
      return
    }

    // 停止之前的朗讀
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    
    // 嘗試找到最佳語音
    const voice = await findBestVoice(lang)
    if (voice) {
      utterance.voice = voice
      utterance.lang = voice.lang
    } else {
      utterance.lang = lang
    }
    
    utterance.rate = rate
    utterance.pitch = 1

    utterance.onend = () => resolve()
    utterance.onerror = (event) => {
      // 某些錯誤可以忽略
      if (event.error === "interrupted" || event.error === "canceled") {
        resolve()
      } else {
        reject(event.error)
      }
    }

    // iOS Safari 需要這個 hack
    try {
      window.speechSynthesis.speak(utterance)
      
      // iOS 修復：確保開始播放
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume()
      }
    } catch (e) {
      reject(e)
    }
  })
}

/**
 * 停止朗讀
 */
export function stopSpeaking() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel()
  }
}

/**
 * 檢查是否正在朗讀
 */
export function isSpeaking() {
  if ("speechSynthesis" in window) {
    return window.speechSynthesis.speaking
  }
  return false
}
