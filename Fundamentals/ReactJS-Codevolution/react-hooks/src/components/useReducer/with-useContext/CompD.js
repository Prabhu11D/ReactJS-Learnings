import React, { useContext } from "react";
import { CountContext } from "./MainComp";

function CompD() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h4>
        CompD - <span>{countContext.countState}</span>
      </h4>
      <div>
        <button onClick={() => countContext.countDispatch("increment")}>
          increment
        </button>
        <button onClick={() => countContext.countDispatch("decrement")}>
          decrement
        </button>
        <button onClick={() => countContext.countDispatch("reset")}>
          reset
        </button>
      </div>
    </div>
  );
}

export default CompD;
