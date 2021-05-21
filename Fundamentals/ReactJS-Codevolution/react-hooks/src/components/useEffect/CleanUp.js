import React, { useState } from "react";
import RunOnce from "./RunOnce";

function CleanUp() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <RunOnce />}
    </div>
  );
}

export default CleanUp;
