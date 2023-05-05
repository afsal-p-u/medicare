import axios from 'axios'

import './CurrentService.scss'
import { useEffect, useState } from 'react'

const CurrentService = () => {
  const [currentData, setCurrentData] = useState(null)

  useEffect(() => {
    const getCurrentService = () => {
      axios.get(`${import.meta.env.VITE_SERVER_URL}/services/current`).then((res) => {
        setCurrentData(res.data)
      }).catch((err) => {
        console.log(err)
      })
    }
    getCurrentService()
  }, [])

  return (
    <>
      {currentData === null ? (
        <div className="">No data Available</div>
      ) : (
        <div className='current-service'>
          <h3>Current Service</h3>
          <div className="c-s-lists">
            <div className="c-s-l-item">
              <small>ID:</small>
              <p>{currentData?._id}</p>
            </div>
            <div className="c-s-l-item">
              <small>Name:</small>
              <p>{currentData?.fullname}</p>
            </div>
            <div className="c-s-l-item">
              <small>Contact No:</small>
              <p>{currentData?.contact}</p>
            </div>
            <div className="c-s-l-item">
              <small>Age:</small>
              <p>{currentData?.age}</p>
            </div>
            <div className="c-s-l-item">
              <small>Address:</small>
              <p>{currentData?.address}</p>
            </div>
            <div className="c-s-l-item">
              <small>City:</small>
              <p>{currentData?.city}</p>
            </div>
            <div className="c-s-l-item">
              <small>Category:</small>
              <p>{currentData?.category}</p>
            </div>
            <div className="c-s-l-item">
              <small>Gender:</small>
              <p>{currentData?.gender}</p>
            </div>
            <div className="c-s-l-item">
              <small>Status:</small>
              <p className='status'>{currentData?.status}</p>
            </div>
            <div className="c-s-l-item">
              <small>Arrival Time (estimated) :</small>
              <p>15 Minutes</p>
            </div>
            <div className="c-s-l-buttons">
              <button>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CurrentService