import React, { useState } from "react";

function TextFiledwithLabel(props) {
  const [length, setLength] = useState(0);
  const [value, setValue] = useState("");
  const { maxChar, label, placeholder, returnBack, required } = props;
  return (
    <div>
      <p className="label">{label}</p>
      <textarea
        placeholder={placeholder}
        required={required}
        maxLength={maxChar}
        value={value}
        rows="4"
        onChange={(e) => {
          let text = e.target.value;
          setValue(text);
          setLength(text.length);
          returnBack(text);
        }}
      />
      <p className="charCount">{length + "/" + maxChar}</p>
    </div>
  );
}

export default TextFiledwithLabel;
