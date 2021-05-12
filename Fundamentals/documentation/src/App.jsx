import React, { useState } from "react";
import { Pure, Impure } from "./components/pure_impure_fn";
import State from "./components/setstate_async";

function App() {
  // const [name, setName] = useState('Prabhu');
  const name = "Prabhu";

  // Pure Functions
  return (
    <div>
      <Pure name={name} />
      <Impure name={name} />

      <State />
    </div>
  );
}

export default App;
