import './DoctorMembers.scss'

import doctor1 from '../../assets/doctor-1.jpg'
import doctor2 from '../../assets/doctor-2.jpg'
import doctor3 from '../../assets/doctor-3.avif'
import doctor4 from '../../assets/doctor-4.jpg'

const DoctorMembers = () => {
  return (
    <div className='doctor-members'>
        <h3>Our Team</h3>
        <button className='more'>More</button>
        <div className="members-cards">
          <div className="cards-item">
            <div className="c-i-img-box">
              <img src={doctor1} alt="" />
            </div>

            <div className="c-i-desc">
              <p>SUSSIE WOLFF</p>
              <small>Dermatologists</small>
            </div>
          </div>
          <div className="cards-item">
            <div className="c-i-img-box">
              <img src={doctor2} alt="" />
            </div>

            <div className="c-i-desc">
              <p>ALEX ANDRO</p>
              <small>Cardiologists</small>
            </div>
          </div>
          <div className="cards-item">
            <div className="c-i-img-box">
              <img src={doctor3} alt="" />
            </div>

            <div className="c-i-desc">
              <p>WILSON AGUERO</p>
              <small>Anesthesiologists</small>
            </div>
          </div>
          <div className="cards-item">
            <div className="c-i-img-box">
              <img src={doctor4} alt="" />
            </div>

            <div className="c-i-desc">
              <p>EMEL TESSA</p>
              <small>Gastroenterologists</small>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DoctorMembers