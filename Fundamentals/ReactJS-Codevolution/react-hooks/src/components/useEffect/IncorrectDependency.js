import React, { useEffect, useState } from "react";

function IncorrectDependency() {
  const [count, setCount] = useState(0);

  function tick() {
    console.log("tick -->");
    setCount((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    console.log("Set Interval");
    const interval = setInterval(tick, 1000);

    setTimeout(() => clearInterval(interval), 4000);

    return () => {
      console.log("Clearing Interval");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
}

export default IncorrectDependency;
