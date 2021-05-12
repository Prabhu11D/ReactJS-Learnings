import React, { useState } from "react";
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "0d458b1c";
  const API_KEY = "b68190d68c33afc52a12639904393ddc";
  const [recipes, setRecipes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  const getRecipes = async () => {
    if (searchText) {
      setLoading(true);
      const response = await fetch(
        `https://api.edamam.com/search?q=${searchText}&app_id=${APP_ID}&app_key=${API_KEY}`
      );
      const data = await response.json();
      setLoading(false);
      setRecipes(data.hits);
    }
  };

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipes();
    setSearchText("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          className="search-bar"
          type="text"
          placeholder="Recipe Name"
          required
          value={searchText}
          onChange={handleSearchText}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>

      <div className="container">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredient={recipe.recipe.ingredientLines}
          />
        ))}
      </div>
      <div className={loading ? "loading" : ""}></div>
    </div>
  );
};

export default App;
