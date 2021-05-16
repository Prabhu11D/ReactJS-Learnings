import React, { useState } from "react";

function ImageSearch(props) {
  const [text, setText] = useState("");

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={(e) => setText(e.target.value)}
          placeholder="Search Image"
          type="text"
        />
        <button onClick={() => props.searchText(text)} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default ImageSearch;
