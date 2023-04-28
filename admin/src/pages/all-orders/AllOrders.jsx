import { useState } from 'react'
import axios from 'axios'

import './AllOrders.scss'
import { useEffect } from 'react'

const AllOrders = () => {
  const [orders, setOrders] = useState(null)

  useEffect(() => {
    const getAllOrders = () => {
      axios.get(`${import.meta.env.VITE_SERVER_URL}/services/all-orders`).then((res) => {
        setOrders(res.data)
      }).catch((err) => {
        console.log(err)
      })
    }
    getAllOrders()
  }, [])

  return (
    <div className='all-orders'>
      <div className="orders-box">
        <h3>All Orders</h3>
        <div className="list-orders">
          {orders?.map((item) => (
            <div className="order-list">
              <div className="list-info">
                <span>ID: </span>
                <small>{item?._id}</small>
              </div>
              <div className="order-list-buttons">
                <button>View</button>
                <button>Set Completed</button>
                <button>Add Result</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllOrders