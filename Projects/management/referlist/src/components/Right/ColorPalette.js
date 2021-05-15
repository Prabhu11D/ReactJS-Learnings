import React, { useEffect, useState } from "react";

function ColorPalette(props) {
  const [show, setShow] = useState(false);
  const { isChanged, color, setColor } = props;

  useEffect(() => {
    if (show) {
      document.addEventListener("click", showOff, true);
    }
    if (!show) {
      document.removeEventListener("click", showOff, true);
    }
  }, [show]);

  function showOff(e) {
    if (e.target.className !== "palette" && e.target.nodeName !== "BUTTON") {
      setShow(false);
    }
  }
  function handleClick() {
    setShow(!show);
  }

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <button style={{ backgroundColor: color }} onClick={handleClick}></button>
      {show ? (
        <Palette isChanged={isChanged} setColor={setColor} hide={handleClick} />
      ) : (
        ""
      )}
    </div>
  );
}

function Palette(props) {
  const colorArray = [
    "#d9e3f0",
    "#fff",
    "#f47373",
    "#697689",
    "#37d67a",
    "#2ccce4",
    "#dce775",
    "#ff8a65",
    "#ba68c8",
    "#000",
  ];
  return (
    <div className="palette">
      {colorArray.map((color) => (
        <button
          key={color}
          onClick={() => {
            props.setColor(color);
            props.hide();
            props.isChanged(true);
          }}
          style={{ backgroundColor: color }}
        ></button>
      ))}
    </div>
  );
}

export default ColorPalette;
