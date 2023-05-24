import { Link } from 'react-router-dom'
import { useContext } from 'react'

import './Navbar.scss'
import {AuthContext} from '../../context/AuthContext'

const Navbar = () => {
  const {admin, setAdmin} = useContext(AuthContext)

  return (
    <div className='navbar'>
        <Link to="/">All Orders</Link>
        <Link to="/all-doctors">All Doctors</Link>
        <Link to="/all-services">All Services</Link>
        {admin && (
          <button onClick={() => setAdmin(null)}>Logout</button>
        )}
    </div>
  )
}

export default Navbar