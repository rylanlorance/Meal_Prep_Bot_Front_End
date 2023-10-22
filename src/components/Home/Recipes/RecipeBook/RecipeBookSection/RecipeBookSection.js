import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

function RecipeBookSection(props) {
  return (
    <div>
      {props.recipes.map((item) => (
        <RecipeCard
          recipe={item}
          addRecipeToCart={props.addRecipeToCart}
        ></RecipeCard>
      ))}
    </div>
  );
}

export default RecipeBookSection;
