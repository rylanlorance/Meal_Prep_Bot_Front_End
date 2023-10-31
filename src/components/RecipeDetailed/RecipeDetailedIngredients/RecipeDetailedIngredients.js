import React, { useEffect, useState } from "react";

function parseIngredientData(recipe) {
  let ingredients = [];

  ingredients = Object.keys(recipe).filter((item) => new RegExp(""));

  return ingredients;
}

function RecipeDetailedIngredients(props) {
  const [catFact, setCatFact] = useState('');

  const recipe = props.recipe;

  const ingredients = parseIngredientData(recipe);

  /// practice useEffect

  return (
    <div>
      <h3>Main Ingredients</h3>
      <h3>Staple Ingredients</h3>
      <p>{catFact}</p>
    </div>
  );
}

export default RecipeDetailedIngredients;
