import { Link } from 'react-router-dom'

import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to="/">All Orders</Link>
        <Link to="/all-doctors">All Doctors</Link>
        <Link to="/all-services">All Services</Link>
        <Link to="/">Logout</Link>
    </div>
  )
}

export default Navbar