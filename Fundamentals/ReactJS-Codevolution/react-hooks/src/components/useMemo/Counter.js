import React, { useMemo, useState } from "react";

function Counter() {
  console.log("Counter Component");
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  function incrementOne() {
    console.log("Increment One Fn");
    setCounter1(counter1 + 1);
  }

  function incrementTwo() {
    console.log("Increment Two Fn");
    setCounter2(counter2 + 1);
  }

  const isEven = useMemo(() => {
    console.log("isEven Fn");
    let i = 0;
    while (i < 1000000000) i++;
    return counter1 % 2 === 0;
  }, [counter1]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count - {counter1}</button>
        <span>{isEven ? " Even" : " Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count - {counter2}</button>
      </div>
    </div>
  );
}

export default Counter;
