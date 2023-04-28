import './AllDoctors.scss'

const AllDoctors = () => {
  return (
    <div className='all-doctors'>
      <div className="doctors-container">
        <h3>All Doctors</h3>
        <button className='add-new-doctor'>Add New Doctor</button>
        <div className="doctors-lists">
          <div className="list-doctor">
            <div className="doctor-img">
              <img src="" alt="" />
            </div>
            <div className="doctor-info">
              <span>Name & Category: </span>
              <small>Afsal & Dermetologist</small>
            </div>
            <div className="doctor-buttons">
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllDoctors