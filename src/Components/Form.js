import React, { useState } from "react";

function Form() {
  const [FormData, setFormData] = useState([]);
  const [formState, setFormState] = useState({
    name: "",
    department: "",
    rating: "",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleChangeState = () => {
    const tempObj = [...FormData];
    tempObj.push(formState);
    setFormData(tempObj);
    setFormState({ name: "", department: "", rating: "" });
  };

  return (
    <div className="MainContainer">
      <form>
        <label>Name :</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          placeholder="enter name"
          onChange={handleChange}
          className="inputText"
        />
        <br />
        <label>Department :</label>
        <input
          type="text"
          name="department"
          placeholder="enter department"
          value={formState.department}
          onChange={handleChange}
          className="inputText"
        />
        <br />
        <label>Rating :</label>
        <input
          type="number"
          name="rating"
          value={formState.rating}
          placeholder="enter rating"
          onChange={handleChange}
          className="inputText"
        />
        <br />

        <button onClick={handleChangeState} type="button">
          Submit
        </button>
      </form>
      <br />

      <div className="smallContainer">
        <div className="containerBox">
          {FormData.map((value, index) => {
            return (
              <div className="boxes" key={index}>
                Name: {value.name} | Department : {value.department} | Rating :{" "}
                {value.rating}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Form;
