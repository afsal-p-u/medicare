import './AddServices.scss'

const AddServices = () => {
  return (
    <div className='add-services'>
        <div className="add-services form">
            <h3>Add New Services</h3>

            <div className="add-new-services">
                <input type="text" placeholder='Services Name' />
                <button>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default AddServices