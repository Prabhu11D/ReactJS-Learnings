import React from "react";
// import PrevState from "./components/useState/PrevState";
// import ObjectState from "./components/useState/ObjectState";
// import ArrayState from "./components/useState/ArrayState";

// import AfterRender from "./components/useEffect/AfterRender";
// import ConditionallyRender from "./components/useEffect/ConditionallyRender";
// import RunOnce from "./components/useEffect/RunOnce";
// import CleanUp from "./components/useEffect/CleanUp";
// import IncorrectDependency from "./components/useEffect/IncorrectDependency";

import Color from "./components/useContext/Color";

function App() {
  return (
    <div>
      <h1>App Component</h1>

      {/* +++++++++++++++ useState  +++++++++++++++++++++++++ */}
      {/* <PrevState /> */}
      {/* <ObjectState /> */}
      {/* <ArrayState /> */}

      {/*++++++++++++++++ useEffect ++++++++++++++++++++++ */}
      {/* <AfterRender /> */}
      {/* <ConditionallyRender /> */}
      {/* <RunOnce /> */}
      {/* <CleanUp /> */}
      {/* <IncorrectDependency /> */}

      {/* ++++++++++++++++ useContext ++++++++++++++++++++++ */}
      <Color />
    </div>
  );
}

export default App;
