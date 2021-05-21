import React, { useEffect, useState } from "react";

function ArrayState() {
  const [num, setNum] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => setList((list) => [...list, num]), [num]);

  return (
    <div>
      {/* {console.log(list)} */}
      <button
        onClick={() => {
          setNum((n) => n + 1);
        }}
      >
        Add Number
      </button>
      <div>
        {list.map((i) => (
          <p key={i}>{i}</p>
        ))}
      </div>
    </div>
  );
}

export default ArrayState;
