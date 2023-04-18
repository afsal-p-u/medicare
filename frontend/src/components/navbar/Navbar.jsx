import { Link } from 'react-router-dom'

import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        Medicare <span>•</span>
      </div>
      <div className="right">
        <ul>
          <Link to="/">
            <li className='active'>Home</li>
          </Link>
          {/* <Link to="/booked">
            <li>Booked Services</li>
          </Link>
          <Link to="/book-new">
            <li>Book New Service</li>
          </Link>
          <Link to="/all-services">
            <li>All Services</li>
          </Link>
          <Link to="/">
            <li>Logout</li>
          </Link> */}
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/signup">
            <li>Sign Up</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar