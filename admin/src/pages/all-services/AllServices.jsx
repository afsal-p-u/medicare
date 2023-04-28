import './AllServices.scss'

const AllServices = () => {
  return (
    <div className='all-services'>
        <div className="services-container">
            <h3>All Services</h3>
            <button className="add-new-services">New Services</button>
            <div className="services-lists">
                <div className="services-list">
                    <div className="list-services-info">
                        <span>Name: </span>
                        <small>Dermatologists</small>
                    </div>
                    <div className="list-services-buttons">
                        <button>Delete</button>
                    </div>
                </div>
                <div className="services-list">
                    <div className="list-services-info">
                        <span>Name: </span>
                        <small>Dermatologists</small>
                    </div>
                    <div className="list-services-buttons">
                        <button>Delete</button>
                    </div>
                </div>
                <div className="services-list">
                    <div className="list-services-info">
                        <span>Name: </span>
                        <small>Dermatologists</small>
                    </div>
                    <div className="list-services-buttons">
                        <button>Delete</button>
                    </div>
                </div>
                <div className="services-list">
                    <div className="list-services-info">
                        <span>Name: </span>
                        <small>Dermatologists</small>
                    </div>
                    <div className="list-services-buttons">
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllServices