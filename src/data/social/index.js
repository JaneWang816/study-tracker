// 社會科主題
// src/data/social/index.js
import taiwanbasic from './taiwanbasic'
export const socialModules = {
  taiwanbasic: {  
    id: 'taiwanbasic',
    name: '臺灣的基本資料',
    icon: '🇹🇼',
    color: '#4ecdc4',
    desc: '認識我們的家園',
    ...taiwanbasic
  }
}

export default socialModules