import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

function FlashCard({ flashcard, selected, onClick }) {
  const [height, setHeight] = useState(100);

  const frontEl = useRef();
  const backEl = useRef();

  const setMaxHeight = () => {
    const frontHeight = frontEl.current.getBoundingClientRect().height;
    const backHeight = backEl.current.getBoundingClientRect().height;
    setHeight(Math.max(frontHeight, backHeight, 100));
  };

  useEffect(setMaxHeight, [
    flashcard.question,
    flashcard.answer,
    flashcard.options,
  ]);

  function flipCard(e) {
    if (e.target.className === "card flip") {
      ReactDOM.findDOMNode(e.target).classList.remove("flip");
    } else {
      ReactDOM.findDOMNode(e.target).classList.add("flip");
    }
  }

  return (
    <div
      className={`card ${selected ? "flip" : ""}`}
      style={{ height: height }}
      onClick={(e) => {
        onClick();
        flipCard(e);
      }}
    >
      <div className="front" ref={frontEl}>
        <p>{flashcard.question}</p>
        <div className="options">
          {flashcard.options.map((option) => (
            <div className="option" key={option}>
              {option}
            </div>
          ))}
        </div>
      </div>
      <div className="back" ref={backEl}>
        {flashcard.answer}
      </div>
    </div>
  );
}

export default FlashCard;
