import React, { useState } from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const MasteringUseLayoutEffect = () => {
  const [show, setShow] = useState(false);
  const popdown1 = useRef(null);
  const popdown2 = useRef(null);

  const handleShow = () => {
    setShow(s => !s)
  }

  useEffect(() => {
    console.log("useEffect");
    if(show){
      let {top} = popdown1.current.getBoundingClientRect();
      popdown1.current.style.top = `${top + 100}px`;
    }

  }, [show])


    useLayoutEffect(() => {
      console.log("useLayoutEffect");
    if(show){
      let {top} = popdown2.current.getBoundingClientRect();
      popdown2.current.style.top = `${top + 100}px`;
    }

  }, [show])

  return (
    <>
      <div style={{
        display: "flex",
        width: "100vw",
        height: "100%",
        justifyContent: "space-evenly",
      }}>
        <div style={{
          display: "grid",
          placeItems: "center",
        }}>
          <h2>useEffect</h2>
          <button onClick={handleShow}>Show Pop Down</button>
          {show && <div className="popdown" ref={popdown1}>Pop Down Message</div>}
        </div>
        <div style={{
          display: "grid",
          placeItems: "center"
        }}>          
          <h2>useLayoutEffect</h2>
          <button onClick={handleShow}>Show Pop Down</button>
          {show && <div className="popdown" ref={popdown2}>Pop Down Message</div>}
        </div>
      </div>
    </>
  )
}

export default MasteringUseLayoutEffect;