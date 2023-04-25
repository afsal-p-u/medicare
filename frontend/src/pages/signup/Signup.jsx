import './Signup.scss'

const Signup = () => {
  return (
    <div className='sign-up'>
      <div className="sign-up-form">
        <h3>REGISTER</h3>
        <div className="sign-up-items">
          <label htmlFor="">Email:</label>
          <input type="email" placeholder='Email address'/>
        </div>
        <div className="sign-up-items">
          <label htmlFor="">Password:</label>
          <input type="password" placeholder='Password' />
        </div>
        <div className="sign-up-items">
          <label htmlFor="">Contact Number:</label>
          <input type="number" placeholder='Number' />
        </div>
        <div className="sign-up-items">
          <label htmlFor="">Age:</label>
          <input type="number" placeholder='Age' />
        </div>
        <div className="sign-up-items">
          <label htmlFor="">City:</label>
          <select name="" id="">
            <option value="">Balmatta</option>
            <option value="">Deralakatta</option>
            <option value="">Attavar</option>
            <option value="">Pandeshar</option>
          </select>
        </div>
        <div className="sign-up-items">
          <label htmlFor="">Gender:</label>
          <div className="list-gender">
            <input type="radio" /><span>Male</span>
            <input type="radio" /><span>Female</span>
          </div>
        </div>
        <div className="sign-up-buttons">
          <button>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Signup