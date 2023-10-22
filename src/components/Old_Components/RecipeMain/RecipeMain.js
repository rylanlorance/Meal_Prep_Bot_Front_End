import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

export const RecipeMain = (props) => {


  return (
    <div className="recipe-main">
      <h2>Recipe Main</h2>
      <div className="recipe-display">
        <ul>
          {props.recipes.map((item) => (
            <li key={item.id}>
              <RecipeCard recipe={item.recipe} addRecipeHandler={props.addRecipeHandler}></RecipeCard>
            </li>
          ) )}
        </ul>
      </div>
    </div>
  );
};
