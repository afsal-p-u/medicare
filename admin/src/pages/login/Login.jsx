import { useState } from 'react'
import axios from 'axios'

import './login.scss'

const Login = () => {
  const [inputs, setInputs] = useState(null)

  const handleChange = (e) => {
    setInputs(prev => {
      return {...inputs, [e.target.name]: e.target.value}
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/admin-login`).then((res))
  }

  console.log(inputs)

  return (
    <div className='login'>
        <div className="login-form">
            <h3>Admin Panel</h3>
            <div className="login-items">
                <input type="email" name='email' placeholder='Email Address' onChange={handleChange} />
                <input type="password" name='password' placeholder='Password' onChange={handleChange} />
                <div className="login-buttons">
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login