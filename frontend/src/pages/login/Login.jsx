import { useContext, useState } from "react";
import axios from "axios";

import "./Login.scss";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({});
  const { setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/auth/login', inputs).then((res) => {
        setUser(res.data)
        navigate('/')
    }).catch((err) => {
        console.log(err)
    })
  };

  return (
    <div className="login">
      <div className="login-form">
        <div className="login-items">
          <h4>LOGIN</h4>
          <div className="login-item">
            <label htmlFor="">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              onChange={handleChange}
              required
            />
          </div>
          <div className="login-item">
            <label htmlFor="">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="login-buttons">
            <button onClick={handleClick}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
