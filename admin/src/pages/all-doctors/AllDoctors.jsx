import { Link } from 'react-router-dom'
import axios from 'axios'

import './AllDoctors.scss'
import { useEffect, useState } from 'react'

const AllDoctors = () => {
  const [doctors, setDoctors] = useState(null)

  useEffect(() => {
    const getAllDoctors = () => {
      axios.get(`http://localhost:5000/api/doctor`).then((res) => {
        setDoctors(res.data)
      }).catch((err) => {
        console.log(err)
      })
    }
    getAllDoctors()
  })

  return (
    <div className='all-doctors'>
      <div className="doctors-container">
        <h3>All Doctors</h3>
        <Link to='/add-doctor'>
          <button className='add-new-doctor'>Add New Doctor</button>
        </Link>
        <div className="doctors-lists">
          {doctors?.map((item) => (
            <div className="list-doctor" key={item._id}>
              <div className="doctor-img">
                <img src={item?.img} alt="" />
              </div>
              <div className="doctor-info">
                <span>Name & Category: </span>
                <small>{item.name} & {item.category}</small>
              </div>
              <div className="doctor-buttons">
                <button>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllDoctors