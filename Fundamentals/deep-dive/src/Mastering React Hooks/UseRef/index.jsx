import React, { useEffect, useRef } from "react";

const MasteringUseRef = () => {
  const ref1 = useRef(null);

  useEffect(()=>{
    const dom = document.getElementById("dom");
    dom.innerHTML = "DOM mutated";
    ref1.current.innerHTML = "Ref mutated"

    console.dir(dom);
    console.log(ref1);
  }, [])

  return (
    <>
      <div ref={ref1}>Ref</div>
      <div id="dom">DOM</div>
    </>
  )
}

export default MasteringUseRef;