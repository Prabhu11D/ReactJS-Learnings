import React, { useEffect, useState } from "react";

function ConditionallyRender() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect -> ");
    document.title = `You Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default ConditionallyRender;
