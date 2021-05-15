import React, { useEffect, useState } from "react";

function TextField(props) {
  const [value, setValue] = useState("");

  useEffect(() => {
    props.returnBack(value);
    if (props.count) {
      props.count(value.length);
    }
  }, [value]);

  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <input
      type={props.type}
      maxLength={props.maxChar ? props.maxChar : ""}
      placeholder={props.placeholder}
      value={value}
      onChange={handleChange}
      required={props.required}
      style={{
        width: props.width ? props.width + "%" : "30%",
        height: props.height ? props.height + "%" : "",
        display: "block",
      }}
    />
  );
}

export default TextField;
