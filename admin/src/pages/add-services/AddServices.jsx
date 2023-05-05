import axios from 'axios'

import './AddServices.scss'
import { useState } from 'react'

const AddServices = () => {
  const [data, setData] = useState(null)

  const handleChange = (e) => {
    setData((prev) => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:5000/api/p/service`, data).then((res) => {
      window.location.reload()
    }).catch((err) => {
      console.log(err)
    })
  }

  // console.log(VITE_SERVER_URL)

  return (
    <div className='add-services'>
        <div className="add-services-form">
            <h3>Add New Services</h3>

            <div className="add-new-services">
                <input name='serviceName' type="text" placeholder='Services Name' onChange={handleChange} />
                <input name='imgUrl' type="text" placeholder='img url' onChange={handleChange} />
                <button onClick={handleClick}>Submit</button> 
            </div>
        </div>
    </div>
  )
}

export default AddServices