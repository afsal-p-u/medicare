import DoctorCategories from '../../components/doctor-categories/DoctorCategories'
import DoctorMembers from '../../components/doctor-members/DoctorMembers'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <div className="img-box">
        <div className="left">
          <p>
            Your Health is our <br /> <small>Priority!</small>
            <button>Book</button>
          </p>
        </div>
      </div> 
      <DoctorCategories />
      <DoctorMembers />
    </div>
  )
}

export default Home