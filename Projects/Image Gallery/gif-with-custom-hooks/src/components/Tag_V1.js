import React, { useState } from "react";
import useGif from "./hooks/useGif";

function Tag() {
  const [query, setQuery] = useState("dogs");
  const [gif, fetchGifs, loading] = useGif(query);

  return (
    <div className="container">
      <h1>Random {query} Gif</h1>
      {loading ? "Loading..." : <img src={gif} alt="git" height="500" />}
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={() => fetchGifs(query)}>random gif</button>
    </div>
  );
}

export default Tag;
