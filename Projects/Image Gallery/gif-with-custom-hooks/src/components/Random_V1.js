import React from "react";
import useGif from "./hooks/useGif";

function Random() {
  const [gif, fetchGifs, loading] = useGif("");

  return (
    <div className="container">
      <h1>Random Gif</h1>
      {loading ? "Loading..." : <img src={gif} alt="git" height="500" />}
      <button onClick={() => fetchGifs()}>random gif</button>
    </div>
  );
}

export default Random;
