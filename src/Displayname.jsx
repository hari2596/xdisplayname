import React from "react";
import { useState } from "react";

function Displayname() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
  if (firstName.trim() === "" || lastName.trim() === "") {
    alert("Please fill in both first name and last name.");
    return;
  }
  setFullName(`${firstName} ${lastName}`);
  setFirstName("");
  setLastName("");
};


  return (
    <div>
      
      <form>
        <div onSubmit={handleSubmit}> 
      <h1>Full Name Display</h1>
        <label htmlFor="firstName">
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </label>
        <br />

        <label htmlFor="lastName">
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </label>
        <br />

        <button type="submit"> Submit </button> 
        </div>
      </form>

      {fullName && <h2>Full Name: {fullName}</h2>}
    </div>
  );
}

export default Displayname;
