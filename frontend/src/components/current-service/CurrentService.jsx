import './CurrentService.scss'

const CurrentService = () => {
  return (
    <div className='current-service'>
      <h3>Current Service</h3>
      <div className="c-s-lists">
        <div className="c-s-l-item">
          <small>ID:</small>
          <p>234234hkh</p>
        </div>
        <div className="c-s-l-item">
          <small>Name:</small>
          <p>Abubakar</p>
        </div>
        <div className="c-s-l-item">
          <small>Contact No:</small>
          <p>555 5555 555</p>
        </div>
        <div className="c-s-l-item">
          <small>Age:</small>
          <p>25</p>
        </div>
        <div className="c-s-l-item">
          <small>Address:</small>
          <p>Morgan's Gate, 575001, flat 504, room 134</p>
        </div>
        <div className="c-s-l-item">
          <small>City:</small>
          <p>Morgan's Gate</p>
        </div>
        <div className="c-s-l-item">
          <small>Category:</small>
          <p>Dermatologists</p>
        </div>
        <div className="c-s-l-item">
          <small>Doctor:</small>
          <p>Thomas Alva</p>
        </div>
        <div className="c-s-l-item">
          <small>Gender:</small>
          <p>Male</p>
        </div>
        <div className="c-s-l-item">
          <small>Status:</small>
          <p className='status'>Pending</p>
        </div>
        <div className="c-s-l-item">
          <small>Arrival Time (estimated) :</small>
          <p>15 Minutes</p>
        </div>
        <div className="c-s-l-buttons">
          <button>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default CurrentService