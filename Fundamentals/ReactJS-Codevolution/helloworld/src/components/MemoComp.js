import React from "react";

function MemoComp({ name }) {
  console.log("Memo Component");
  return <h2>MemoComp {name}</h2>;
}

export default React.memo(MemoComp);
