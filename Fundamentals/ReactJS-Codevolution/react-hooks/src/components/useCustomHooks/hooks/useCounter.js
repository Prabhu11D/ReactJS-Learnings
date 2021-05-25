import { useState } from "react";

function useCounter(initialValue = 0, value = 1) {
  const [count, setCount] = useState(initialValue, value);

  function increment() {
    setCount((n) => n + value);
  }

  function decrement() {
    setCount((n) => n - value);
  }

  function reset() {
    setCount(initialValue);
  }

  return [count, increment, decrement, reset];
}

export default useCounter;
