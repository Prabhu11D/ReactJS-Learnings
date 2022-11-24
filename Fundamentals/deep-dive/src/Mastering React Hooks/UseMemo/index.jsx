import React, {useState, memo, useMemo, useCallback} from "react";

const Swatch = ({color}) => {
  console.log("Swatch Rendering ...");

  return (
    <>
      <div style={{
        width: 75,
        height: 75,
        backgroundColor: color,
      }}></div>
    </>
  )
}

const MemoSwatch = memo(Swatch);

let redParam = null;
let blueParam = null;

const MasteringUseMemo = () => {
  console.log("Mastering UseMemo Rendering ...");
  const [index, setIndex] = useState(0);
  const [color, setColor] = useState("red");

  // same object is returned for same color
  // it is also not cache all value but only previous value
  const params = useMemo(() => ({color}), [color]);
  console.log("redParam", redParam === params);
  console.log("blueParam", blueParam === params);
  if(params.color === "red" && redParam === null){
    console.log("redParam changed");
    redParam = params;
  }else if(params.color === "blue" && blueParam === null){
    console.log("blueParam changed");
    blueParam = params;
  }

  return (
    <>
      <button onClick={() => setIndex(v => ++v)}>{index} ++</button>
      <button onClick={() => setColor(c => c === "red" ? "blue" : "red")}>Change Color</button>
      <MemoSwatch color={color} onClick={useCallback(() => {}, [])} />
    </>
  )
}

export default MasteringUseMemo;