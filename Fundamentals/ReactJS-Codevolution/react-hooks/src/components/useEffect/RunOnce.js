import React, { useEffect, useState } from "react";

function RunOnce() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function logMouseMove(e) {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(() => {
    console.log("useEffect -> ");
    window.addEventListener("mousemove", logMouseMove);

    return () => {
      console.log("Component Unmounted");
      window.removeEventListener("mousemove", logMouseMove);
    };
  }, []);
  return (
    <div>
      <h2>X: {x}</h2>
      <h2>Y: {y}</h2>
    </div>
  );
}

export default RunOnce;
