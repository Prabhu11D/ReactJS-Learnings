import React, { useEffect, useState } from "react";

function AfterRender() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You Clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default AfterRender;
