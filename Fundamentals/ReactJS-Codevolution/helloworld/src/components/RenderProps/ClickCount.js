import React, { useState } from "react";

function ClickCount({ count, incrementCount }) {
  return (
    <div>
      <h3 onClick={incrementCount}>Clicked {count} times</h3>
    </div>
  );
}

export default ClickCount;
