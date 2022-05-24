import React, { useState } from "react";
import Op from "./Op";


function Tip() {
  const [op, setOp] = useState([]);

  const [state, setState] = useState({
    tip: " ",
    percentage: " ",
    name: " ",

  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  function Cal() {
    state.tip = parseInt(state.tip * state.percentage)/ 100 ;
    setOp([...op, state]);
    console.log(state);

    setState({
        tip: " ",
        percentage: " ",
        name: " ",
    
      });
  }

  return (
    <div>
      <div
        className=" container mx-50  border border-success"
        style={{
          textAlign: "center",
          backgroundColor: "skyblue",
          fontFamily: "monospace",
          fontSize: "40px",
        }}
      >
        Tip Calculator <br />
        <span style={{ textAlign: "center", fontSize: "20px" }}>
          Build in React
        </span>
      </div>

      <br />

      <div className=" container mx-50  border border-success">
        <h4 style={{ textAlign: "center" }}>Enter your bill amount</h4>

        <input
          name="tip"
          className="form-control"
          onChange={handleChange}
          type={Number}
          style={{ textAlign: "center" }}
          placeholder="Enter Amount"
          value={state.tip}
        ></input>
        <hr />
        <br />

        <p>
          How was the Service?
          <select name="percentage" value={state.percentage} onChange={handleChange} >
            <option disabled selected value="0">
              Choose
            </option>

            <option value="20">Excellent</option>

            <option value="10">Medium</option>

            <option value="5"> Not so good</option>
          </select>
          <span>
            <input
              name="name"
              value={state.name}
              onChange={handleChange}
              type="text"
              placeholder="Customer Name"
            ></input>
          </span>
          <span>
            <button onClick={Cal} type="button" className="btn btn-primary">
              Add Customer
            </button>
          </span>
          <Op array={op} />
        </p>
      </div>

      <div
        name="footer"
        className="container mx-50  border border-success  "
        style={{ textAlign: "center", backgroundColor: "skyblue" }}
      >
        {" "}
        <h4> @2022 TIP CALCULATOR</h4>
      </div>
    </div>
  );
}

export default Tip;
