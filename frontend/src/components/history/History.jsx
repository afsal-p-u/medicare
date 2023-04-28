import { useEffect, useState } from 'react'
import axios from 'axios'

import './History.scss'

const History = () => {
  const [completedData, setCompletedData] = useState(null)

  useEffect(() => {
    const getCompletedLists = () => {
      axios.get(`${import.meta.env.VITE_SERVER_URL}/services/completed`).then((res) => {
        setCompletedData(res.data)
      }).catch((err) => {
        console.log(err)
      })
    }
    getCompletedLists()
  }, [])

  console.log(completedData)
  return (
    <div className='history'>
      <h5>History</h5>
      <div className="h-items">
        {completedData?.map((item, index) => (
          <div className="h-i-item" key={index}>
            <div className="item-text">
              <small>ID:</small>
              <p>{item?._id}</p>
            </div>

            <div className="h-i-i-buttons">
              <button>View</button>
              <button>Result</button>
              <button className='delete'>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default History