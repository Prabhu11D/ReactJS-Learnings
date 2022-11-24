import React, { useEffect, useState } from "react";
import "./style.css";

const Counter = ({counterName, color}) => {
  console.log(`${counterName} -> Counter `);
  const [count, setCount] = useState(0);

  const handleCounter = (operation) => {
    setCount(preValue => {
      if(operation === "dec") return --preValue;
      return ++preValue;
    })
  }

  return (
    <div className={`counter ${color}`}>
      <button onClick={() => handleCounter("dec")}>-</button>
      <p>{count}</p>
      <button onClick={() => handleCounter("inc")}>+</button>
    </div>
  )
}

const WindowsCounter = () => {
  console.log("--- Windows Counter ----");

  return (
    <div className="windows-counter">
      <Counter counterName={"A"} color={"crimson"} />
      <Counter counterName={"B"} color={"indigo"} />
      <Counter counterName={"C"} color={"darkorange"} />
      <Counter counterName={"D"} color={"teal"} />
    </div>
  )
}

export default WindowsCounter;