import React from "react";

const Box = (props) => {
  console.log(props);
  const {children, ...newprops} = props;
  console.log({newprops, children});
  return (
    <div {...newprops}>
      <p>Box</p>
      {children}
    </div>
  )

}

export default Box;