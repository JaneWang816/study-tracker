// src/pages/Login.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { signIn } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await signIn(email, password)
    
    if (error) {
      setError(error.message || '登入失敗')
      setLoading(false)
    } else {
      navigate('/')
    }
  }

  return (
    <div className="login-container">
      <div className="login-decoration login-decoration-1"></div>
      <div className="login-decoration login-decoration-2"></div>
      
      <div className="login-card">
        <div className="login-logo">📚</div>
        <h1>歡迎回來</h1>
        <p>登入以繼續學習旅程</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>電子郵件</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="請輸入您的電子郵件"
              required
            />
          </div>
          
          <div className="form-group">
            <label>密碼</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="請輸入您的密碼"
              required
            />
          </div>
          
          <button type="submit" className="btn-login" disabled={loading}>
            {loading ? '登入中...' : '登入'}
          </button>
        </form>
        
        <div className="login-footer">
          小六學習系統 © 2024
        </div>
      </div>
    </div>
  )
}
