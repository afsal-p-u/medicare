import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

import './DoctorCategories.scss'
import Anesthesiologists from '../../assets/Anesthesiologists.jpg'
import Cardiologists from '../../assets/Cardiologists.webp'
import Dermatologists from '../../assets/Dermatologists.webp'
import Gastroenterologists from '../../assets/Gastroenterologists.jpg'

const DoctorCategories = () => {
  return (
    <div className='doctor-categories'>
        <h3>Our Services</h3>
        <Link to='/all-services'>
            <button className='more'>More</button>
        </Link>
        <div className="categories">
            <div className="categories-item">
                <div className="categories-img-box">
                    <img src={Anesthesiologists} alt="" />
                    <div className="gradient">
                        <BsSearch size={30} />
                    </div>
                </div>
                <div className="categories-desc">
                    <p>Anesthesiologists</p>
                    <small>Monday - Friday 08:00 - 19:00</small>
                </div>
            </div>
            <div className="categories-item">
                <div className="categories-img-box">
                    <img src={Cardiologists} alt="" />
                    <div className="gradient">
                        <BsSearch size={30} />
                    </div>
                </div>
                <div className="categories-desc">
                    <p>Cardiologists</p>
                    <small>Monday - Friday 08:00 - 19:00</small>
                </div>
            </div>
            <div className="categories-item">
                <div className="categories-img-box">
                    <img src={Dermatologists} alt="" />
                    <div className="gradient">
                        <BsSearch size={30} />
                    </div>
                </div>
                <div className="categories-desc">
                    <p>Dermatologists</p>
                    <small>Monday - Friday 08:00 - 19:00</small>
                </div>
            </div>
            <div className="categories-item">
                <div className="categories-img-box">
                    <img src={Gastroenterologists} alt="" />
                    <div className="gradient">
                        <BsSearch size={30} />
                    </div>
                </div>
                <div className="categories-desc">
                    <p>Gastroenterologists</p>
                    <small>Monday - Friday 08:00 - 19:00</small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DoctorCategories