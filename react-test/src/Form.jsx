import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { postTasks } from "./api/handlingAPI";

const Form = () => {
  const [task, setTask] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleClick = () => {
    postTasks(task).then((data) => {
      setTask(data);
    });
  };

  return (
    <form>
      <div className="form-row align-items-center">
        <div >
          <input
            type="text"
            onChange={handleChange}
            className="form-control mb-2"
            id="inlineFormInput"
            placeholder="To do"
          ></input>
        </div>

        <div className="col-auto">
          <button
            onClick={handleClick}
            type="submit"
            className="btn btn-primary mb-2"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
