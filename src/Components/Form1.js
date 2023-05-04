import React, { useState } from "react";

function Form1() {
  const [formData, setFormData] = useState();
  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="Name" />
        </label>
        <br />
        <label>
          Department:
          <input type="text" name="Department" />
        </label>
        <br />
        <label>
          Rating:
          <input type="number" name="Rating" />
        </label>
        <br />
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form1;
