import React from "react";

function Count({ text, num }) {
  console.log(`Count -> ${text}`);
  return (
    <div>
      <p>
        {text} - {num}
      </p>
    </div>
  );
}

export default React.memo(Count);
