import React, { useState } from "react";
import FlashCard from "./FlashCard";

function FlashCardList({ flashcards }) {
  const [selected, setSelected] = useState(-1);
  return (
    <div className="card-grid">
      {flashcards.map((flashcard, index) => (
        <FlashCard
          selected={index === selected}
          onClick={() => setSelected(index)}
          key={flashcard.id}
          flashcard={flashcard}
        />
      ))}
    </div>
  );
}

export default FlashCardList;
