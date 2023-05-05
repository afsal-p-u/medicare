import axios from 'axios'

import "./AddDoctor.scss";
import { useEffect, useState } from 'react';

const AddDoctor = () => {
  const [services, setServices] = useState(null)
  const [inputs, setInputs] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    const getAllServices = () => {
      axios.get(`http://localhost:5000/api/p/service`).then((res) => {
        setServices(res.data)
      }).catch((err) => {
        console.log(err)
      })
    }
    getAllServices()
  }, [])

  const handleChange = (e) => {
    setInputs((prev) => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const handleAdd = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:5000/api/doctor`, inputs).then((res) => {
      navigate('/all-doctors')
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="add-doctor">
      <div className="doctor-new">
        <h3>Add New Doctor</h3>
        <div className="doctor-new-forms">
          <input name='name' type="text" placeholder="name" onChange={handleChange} />
          <select name="category" id="" onChange={handleChange}>
            {services?.map((item) => (
              <option value={item.serviceName} key={item._id}>{item.serviceName}</option>
            ))}
          </select>
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
