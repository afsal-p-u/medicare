import { useState } from 'react'
import axios from 'axios'

import './BookNewService.scss'

const BookNewService = () => {
  const [inputs, setInputs] = useState({})

  const handleChange = (e) => {
    setInputs(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    axios.post(`${import.meta.env.VITE_SERVER_URL}/services/new`, inputs).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className='book-new-service'>
      <div className="form">
        <h3>Book New Services</h3>
        <div className="items">
          <div className="list">
            <label htmlFor="">Full Name</label>
            <input placeholder='Full name' type="text" name='fullname' onChange={handleChange} />
          </div>
          <div className="list">
            <label htmlFor="">Age</label>
            <input placeholder='Age' type="number" name='age' onChange={handleChange} />
          </div>
          <div className="list">
            <label htmlFor="">Contact Number</label>
            <input placeholder='Phone Number' type="number" name='contact' onChange={handleChange} />
          </div>
          <div className="list">
            <label htmlFor="">Address</label>
            <input placeholder='Address' type="text" name='address' onChange={handleChange} />
          </div>
          <div className="list">
            <label htmlFor="">Category</label>
            <select name="category" id="" onChange={handleChange}>
              <option value="gastroenterologists">Gastroenterologists</option>
              <option value="dermatologists">Dermatologists</option>
              <option value="anesthesiologists">Anesthesiologists</option>
              <option value="cardiologists">Cardiologists</option>
            </select>
          </div>
          <div className="list">
            <label htmlFor="">City</label>
            <select name="city" id="" onChange={handleChange}>
              <option value="balmatta">Balmatta</option>
              <option value="deralakatta">Deralakatta</option>
            </select>
          </div>
          <div className="list area">
            <label htmlFor="">Describe</label>
            <textarea name='describe' placeholder='Describe your problem' onChange={handleChange}></textarea>
          </div>
          <div className="list">
            <label htmlFor="">Gender</label>
            <div className="list-gender">
              <input type="radio" value="male" name='gender' onChange={handleChange}/><span>Male</span>
              <input type="radio" value="female" name='gender' onChange={handleChange}/><span>Female</span>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button onClick={handleClick}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default BookNewService