import React from "react";
import useInput from "./hooks/useInput";

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  }

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first-name">First Name</label>
          <input id="first-name" {...bindFirstName} />
        </div>
        <div>
          <label htmlFor="last-name">Last Name</label>
          <input id="last-name" {...bindLastName} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
