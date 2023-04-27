import { useContext, useState } from "react";
import axios from 'axios'
import "./Signup.scss";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [inputs, setInputs] = useState({});
  const { setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  // get all inputs value
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/auth/register', inputs).then((res) => {
      setUser(res.data)
      navigate('/')
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="sign-up">
      <div className="sign-up-form">
        <h3>REGISTER</h3>
        <div className="sign-up-items">
          <label htmlFor="">Email:</label>
          <input
            type="email"
            placeholder="Email address"
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="sign-up-items">
          <label htmlFor="">Password:</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="sign-up-items">
          <label htmlFor="">Contact Number:</label>
          <input
            type="number"
            placeholder="Number"
            name="number"
            onChange={handleChange}
            required
          />
        </div>
        <div className="sign-up-items">
          <label htmlFor="">Age:</label>
          <input
            type="number"
            placeholder="Age"
            name="age"
            onChange={handleChange}
            required
          />
        </div>
        <div className="sign-up-items">
          <label htmlFor="">City:</label>
          <select name="city" id="" onChange={handleChange} required>
            <option value="balmatta">Balmatta</option>
            <option value="deralakatta">Deralakatta</option>
            <option value="attavar">Attavar</option>
            <option value="pandeshar">Pandeshar</option>
          </select>
        </div>
        <div className="sign-up-items">
          <label htmlFor="">Gender:</label>
          <div className="list-gender">
            <input
              type="radio"
              value="male"
              name="gender"
              onChange={handleChange}
              required
            />
            <span>Male</span>
            <input
              type="radio"
              value="female"
              name="gender"
              onChange={handleChange}
              required
            />
            <span>Female</span>
          </div>
        </div>
        <div className="sign-up-buttons">
          <button onClick={handleClick}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
