import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

import './RecipedDetailedIngredientsItem.css'

function RecipeDetailedIngredientsItem(props) {
  return (
    <div className="detailed-recipe-item">
      <div className="detailed-recipe-item-text-box">
        <h4>{props.ingredient.ingredient}</h4>
        <h5>{props.ingredient.measurement}</h5>
      </div>
      <div className="detailed-recipe-item-button-box">
        <Button variant="primary">Add</Button>
      </div>
    </div>
  );
}

RecipeDetailedIngredientsItem.propTypes = {};

export default RecipeDetailedIngredientsItem;
