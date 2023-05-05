import { Link } from 'react-router-dom'
import axios from 'axios'

import './AllServices.scss'
import { useEffect, useState } from 'react'

const AllServices = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const getAllServices = () => {
            axios.get(`http://localhost:5000/api/p/service`).then((res) => {
                setData(res.data)
            }).catch((err) => {
                console.log(err)
            })
        }
        getAllServices()
    }, [])

    const handleDelete = (e, id) => {
        e.preventDefault()

        axios.delete(`http://localhost:5000/api/p/service/${id}`).then((res) => {
            window.location.reload()
        }).catch((err) => {
            console.log(err)
        })
    }
    
  return (
    <div className='all-services'>
        <div className="services-container">
            <h3>All Services</h3>
            <Link to="/add-services">
                <button className="add-new-services">New Services</button>
            </Link>
            <div className="services-lists">
                {data?.map((item) => (
                    <div className="services-list" key={item._id}>
                        <div className="list-services-info">
                            <span>Name: </span>
                            <small>{item.serviceName}</small>
                        </div>
                        <div className="list-services-buttons">
                            <button onClick={(e) => handleDelete(e, item._id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AllServices