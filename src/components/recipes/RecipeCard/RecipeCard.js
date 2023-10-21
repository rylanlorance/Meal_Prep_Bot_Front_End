import React from "react";
import './RecipeCard.css';

// import turkey_burger from "../../../assets/turkey-burger.png";

const RecipeCard = (props) => {
  const recipe = props.recipe;

  return (
    <div className="recipe-card">
      <h3>{recipe.human_readable_name}</h3>
      <h4>{recipe.description}</h4>
      <button>Add</button>
    </div>  
  );
};

export default RecipeCard;
