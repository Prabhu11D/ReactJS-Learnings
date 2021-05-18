import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import FlashCardList from "./components/FlashCardList";
import axios from "axios";

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [categories, setCategories] = useState([]);

  const categoryEl = useRef();
  const amountEl = useRef();

  useEffect(() => {
    console.log("Getting");
    axios.get("https://opentdb.com/api_category.php").then((res) => {
      setCategories(res.data.trivia_categories);
    });
  }, []);

  function decodeStr(str) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = str;
    return textarea.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get("https://opentdb.com/api.php/amount=10", {
        params: {
          amount: amountEl.current.value,
          category: categoryEl.current.value,
        },
      })
      .then((res) => {
        setFlashcards(
          res.data.results.map((ques, index) => {
            const answer = decodeStr(ques.correct_answer);
            const options = [
              ...ques.incorrect_answers.map((opt) => decodeStr(opt)),
              answer,
            ];
            return {
              id: `${index}_${Date.now()}`,
              question: decodeStr(ques.question),
              answer: answer,
              options: options.sort(() => Math.random() - 0.5),
            };
          })
        );
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <form className="header" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryEl}>
            {categories.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Number of Questions</label>
          <input
            type="number"
            id="amount"
            min="1"
            step="1"
            defaultValue={10}
            ref={amountEl}
          />
        </div>
        <div className="form-group">
          <button className="btn" type="submit">
            Generate
          </button>
        </div>
      </form>
      <div className="container">
        <FlashCardList flashcards={flashcards} />
      </div>
    </>
  );
}

export default App;
