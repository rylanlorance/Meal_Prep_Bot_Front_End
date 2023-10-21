import React from "react";
import './RecipeCard.css';

import turkey_burger from "../../../assets/turkey-burger.png";

const RecipeCard = (props) => {
  return (
    <div className="recipe-card">
      <img className="recipe-image" src={turkey_burger} alt="turkey-burger"></img>
      <h3>Turkey Burgers !</h3>
      <button>Add</button>
    </div>
  );
};

export default RecipeCard;
