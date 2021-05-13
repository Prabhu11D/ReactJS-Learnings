import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>Hello Portal</h1>,
    document.getElementById("portal-root")
  );
}

export default PortalDemo;
