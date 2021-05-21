import React, { useState } from "react";

function PrevState() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  function incrementFive() {
    for (let i = 0; i < 5; i++) {
      console.log("i => " + i);
      setCount((prevCount) => {
        console.log("PrevCount : " + prevCount);
        return prevCount + 1;
      });
      // setCount(() => {
      //   console.log("count : " + count);
      //   return count + 1;
      // });
    }
  }

  return (
    <div>
      <h2>useState - Prev State</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(initialCount)}>reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}

export default PrevState;
