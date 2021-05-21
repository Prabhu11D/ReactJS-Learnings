import React, { useState } from "react";

function ObjectState() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  return (
    <div>
      <input
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>
        {name.firstName} {name.lastName}
      </h2>
    </div>
  );
}

export default ObjectState;
