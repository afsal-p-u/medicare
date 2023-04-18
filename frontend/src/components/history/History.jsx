import './History.scss'

const History = () => {
  return (
    <div className='history'>
      <h5>History</h5>
      <div className="h-items">
        <div className="h-i-item">
          <div className="item-text">
            <small>ID:</small>
            <p>234o29093</p>
          </div>

          <div className="h-i-i-buttons">
            <button>View</button>
            <button>Result</button>
            <button className='delete'>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History