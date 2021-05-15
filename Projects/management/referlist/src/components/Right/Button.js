import React, { useState } from "react";

function Button(props) {
  const [click, setClick] = useState(false);
  const [pos, setPos] = useState({
    X: 0,
    Y: 0,
  });
  function rippleEffect(e) {
    const X = e.clientX - e.target.offsetLeft;
    const Y = e.clientY - e.target.offsetTop;
    setClick(true);
    setPos({ X, Y });
    setTimeout(() => setClick(false), 600);
  }
  return (
    <button onClick={rippleEffect}>
      {props.name}
      {click && (
        <span
          className="ripple"
          style={{ top: `${pos.Y}px`, left: `${pos.X}px` }}
        ></span>
      )}
    </button>
  );
}

export default Button;
