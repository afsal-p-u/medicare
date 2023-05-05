import { useState } from 'react'
import axios from 'axios'

import './AllOrders.scss'
import { useEffect } from 'react'
import AddResult from '../../components/add-result/AddResult'
import View from '../../components/view/View'

const AllOrders = () => {
  const [orders, setOrders] = useState(null)
  const [showAddResult, setShowAddResult] = useState(null)
  const [showViewInfo, setShowViewInfo] = useState(null)

  const _setShowAddResult = (value) => {
    setShowAddResult(value)
  }

  const _setShowViewInfo = (value) => {
    setShowViewInfo(value)
  }

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


  const handleCompleted = (e, id) => {
    e.preventDefault()
    axios.put(`${import.meta.env.VITE_SERVER_URL}/services/${id}`, {
      status: "completed"
    }).then((res) => {
      window.location.reload()
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <div className='all-orders'>
        <div className="orders-box">
          <h3>All Orders</h3>
          <div className="list-orders">
            {orders?.map((item) => (
              <div className="order-list" key={item._id}>
                <div className="list-info">
                  <span>ID: </span>
                  <small>{item?._id}</small>
                </div>
                <div className="order-list-buttons">
                  <button onClick={() => setShowViewInfo(item)}>View</button>
                  {item?.status === 'pending' && (
                    <button onClick={(e) => handleCompleted(e, item._id)}>Set Completed</button>
                  )}
                  <button onClick={() => setShowAddResult(item)}>Add Result</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showAddResult && (
        <AddResult manageResult={_setShowAddResult} id={showAddResult._id} />
      )}
      {showViewInfo && (
        <View items={showViewInfo} manageView={_setShowViewInfo} />
      )}
    </>
  )
}

export default AllOrders