import React, { useState } from "react";
import '../App.css';

function Output(props) {
  const [view, setview] = useState("none");

  let change = () => {
    if (view == "block") {
      setview("none");
    } else {
      setview("block");
    }
  };

  let data = props.array;
  let sum = 0;
  let num = data.map((ele) => {
    sum += parseInt(ele.tip);
    return sum;
  });
  console.log(data);
  return (
    <div >
      <div className="container mx-50  border border-success">
        {data.map((ele) => {
          return (
            <ul>
              <li>{`${ele.name} offring a tip of ${ele.tip}`}</li>
            </ul>
          );
        })}
      </div>

      <button className="btn1 btn btn-success" onClick={change}> Calculate Tip & Customer</button>
        <hr/>
      <div className="container" style={{ display: `${view}` }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Total Person</th>
              <th scope="col">Tip </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.length}</td>
              <td>{num[num.length - 1]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Output;
