import React from "react";
import style from './recipe.module.css';

const Recipe = ({title, image, ingredient, calories}) => {
  return (
    <div className={style.container}>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>Calories : <span>{Math.round(calories)}</span></p>
      <p>Ingredients :</p>
      <ol>
        {ingredient.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
