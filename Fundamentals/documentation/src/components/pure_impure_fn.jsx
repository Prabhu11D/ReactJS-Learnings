import React from "react";

function Pure(props) {
  return <h3>{props.name}</h3>;
}

function Impure(props) {
  // props.name = "Ammu";
  return <h3>{props.name}</h3>;
}

export { Pure, Impure };
