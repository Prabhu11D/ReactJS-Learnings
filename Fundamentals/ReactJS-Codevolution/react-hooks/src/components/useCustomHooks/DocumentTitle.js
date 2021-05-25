import React, { useState } from "react";
import useDocumentTitle from "./hooks/useDocumentTitle";

function DocumentTitle() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <div>
      <h2>Document Title</h2>
      <button onClick={() => setCount((n) => n + 1)}>Click - {count}</button>
    </div>
  );
}

export default DocumentTitle;
