import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }
  return <div>{props.children(count, incrementCount)}</div>;
}

export default Counter;
