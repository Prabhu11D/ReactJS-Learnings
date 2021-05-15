import React, { useState } from "react";
import TextField from "./TextField";

function TextFiledwithLabel(props) {
  const [length, setLength] = useState(0);
  const { type, maxChar, label, placeholder, returnBack, required } = props;
  return (
    <div>
      <p className="label">{label}</p>
      <TextField
        type={type}
        placeholder={placeholder}
        returnBack={returnBack}
        required={required}
        maxChar={maxChar}
        count={setLength}
        width={"80"}
        height={props.height}
      />
      <p className="charCount">{length + "/" + maxChar}</p>
    </div>
  );
}

export default TextFiledwithLabel;
