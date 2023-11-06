import React, { useEffect, useState } from "react";
import RecipeDetailedIngredientsItem from "./RecipeDetailedIngredientsItem/RecipeDetailedIngredientsItem";

function parseIngredientData(recipe) {
  let ingredients1 = [];
  

  for (const [key, value] of Object.entries(recipe)){
    const regex = new RegExp('^strIngredient');
    
    if (regex.test(key)){
      if (value.length > 0){
        ingredients1.push({value})
      }
    }
  }
  const ingredients2 = []

  ingredients1.forEach((element, index) => {
    const newKey = `strMeasure${index}`

    const newObj = {
      "ingredient": element.value,
      "measurement": recipe[newKey]
    }
    ingredients2.push(newObj)
  }
  )
  return ingredients2
  
}

function RecipeDetailedIngredients(props) {

  const recipe = props.recipe;
  console.log('recipe', recipe)

  const ingredients = parseIngredientData(recipe);

  /// practice useEffect

  return (
    <div>
      <h3>Main Ingredients</h3>
      {ingredients.map((ingredient, i) => (
          <RecipeDetailedIngredientsItem ingredient={ingredient} key={i}></RecipeDetailedIngredientsItem>
      )
      )}
      <h3>Staple Ingredients</h3>
    </div>
  );
}

export default RecipeDetailedIngredients;
