import './View.scss'

const View = ({items, manageView}) => {
  delete items.__v
  
  return (
    <div className='view'>
      <div className="view-container">
        <div className="view-items">
          {Object.keys(items).map((item) => (
            <div className="item-info" key={item._id}>
              <span>{item}:</span>
              <small>{items[item]}</small>
            </div>
          ))}
          <div className="view-buttons">
            <button onClick={() => manageView(false)}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View