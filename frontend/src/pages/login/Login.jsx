import './Login.scss'

const Login = () => {
  return (
    <div className='login'>
        <div className="login-form">
            <div className="login-items">
                <h4>LOGIN</h4>
                <div className="login-item">
                    <label htmlFor="">Email:</label>
                    <input type="email" placeholder='Email address' />
                </div>
                <div className="login-item">
                    <label htmlFor="">Password:</label>
                    <input type="password" placeholder='Password' />
                </div>
                <div className="login-buttons">
                    <button>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login