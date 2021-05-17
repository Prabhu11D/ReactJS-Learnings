import React, { useState } from "react";

function HoverCount({ count, incrementCount }) {
  return (
    <div>
      <h3 onMouseOver={incrementCount}>Hovered {count} times</h3>
    </div>
  );
}

export default HoverCount;
