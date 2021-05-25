import React from "react";
import useCounter from "./hooks/useCounter";

function Buttons({ fn }) {
  return (
    <>
      <button onClick={fn.increment}>Increment</button>
      <button onClick={fn.decrement}>Decrement</button>
      <button onClick={fn.reset}>Reset</button>
    </>
  );
}

function CounterOne() {
  const [count, increment, decrement, reset] = useCounter(0, 2);
  return (
    <div>
      <h3>Counter 1</h3>
      <p>Count : {count}</p>
      <Buttons fn={{ increment, decrement, reset }} />
    </div>
  );
}

function CounterTwe() {
  const [count, increment, decrement, reset] = useCounter(5, 10);
  return (
    <div>
      <h3>Counter 2</h3>
      <p>Count : {count}</p>
      <Buttons fn={{ increment, decrement, reset }} />
    </div>
  );
}

function Counter() {
  return (
    <div>
      <CounterOne />
      <CounterTwe />
    </div>
  );
}

export default Counter;
