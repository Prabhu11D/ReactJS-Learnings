import React, { createContext, useReducer } from "react";
import CompA from "./CompA";
import CompB from "./CompB";
import CompC from "./CompC";

export const CountContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function MainComp() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count : {count}</h2>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <CompA />
        <CompB />
        <CompC />
      </CountContext.Provider>
    </div>
  );
}

export default MainComp;
