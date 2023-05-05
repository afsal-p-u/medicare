import axios from 'axios'

import "./AddResult.scss";
import { useState } from 'react';

const AddResult = ({ manageResult, id }) => {
    const [inputs, setInputs] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${import.meta.env.VITE_SERVER_URL}/services/${id}`, {
        result: inputs
    }).then((res) => {
        manageResult(false)
    }).catch((err) => {
        console.log(err)
    })
  };

  return (
    <div className="add-result">
      <div className="result-container">
        <h3>Add Result</h3>
        <textarea
          name="result"
          cols="30"
          rows="10"
          placeholder="add result"
          onChange={(e) => setInputs(e.target.value)}
        ></textarea>
        <div className="result-buttons">
          <button onClick={() => manageResult(false)}>Cancel</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddResult;
