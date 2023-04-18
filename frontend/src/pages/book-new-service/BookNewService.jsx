import './BookNewService.scss'

const BookNewService = () => {
  return (
    <div className='book-new-service'>
      <div className="form">
        <h3>Book New Services</h3>
        <div className="items">
          <div className="list">
            <label htmlFor="">Full Name</label>
            <input placeholder='Full name' type="text" />
          </div>
          <div className="list">
            <label htmlFor="">Age</label>
            <input placeholder='Age' type="number" />
          </div>
          <div className="list">
            <label htmlFor="">Contact Number</label>
            <input placeholder='Phone Number' type="number" />
          </div>
          <div className="list">
            <label htmlFor="">Location/Address</label>
            <input placeholder='Location' type="text" />
          </div>
          <div className="list">
            <label htmlFor="">Category</label>
            <select name="" id="">
              <option value="">Gastroenterologists</option>
              <option value="">Dermatologists</option>
              <option value="">Anesthesiologists</option>
              <option value="">Cardiologists</option>
            </select>
          </div>
          <div className="list">
            <label htmlFor="">Choose Doctor (optional)</label>
            <select name="" id="">
              <option value="">Thomas Shelby</option>
            </select>
          </div>
          <div className="list area">
            <label htmlFor="">Describe</label>
            <textarea placeholder='Describe your problem'></textarea>
          </div>
          <div className="list">
            <label htmlFor="">Gender</label>
            <div className="list-gender">
              <input type="radio" /><span>Male</span>
              <input type="radio" /><span>Female</span>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default BookNewService