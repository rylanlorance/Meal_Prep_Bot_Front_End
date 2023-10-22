import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./RecipeCard.css";

// import turkey_burger from "../../../assets/turkey-burger.png";

const RecipeCard = (props) => {
  const recipe = props.recipe;

  const recipeCardAddHandler = () => {
    props.addRecipeHandler(recipe);
  };

  return (
    <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src="../../../assets/turkey-burger.png" />
      <Card.Body>
        <Card.Title>{recipe.human_readable_name}</Card.Title>
        <Card.Text>
          {recipe.description}
        </Card.Text>
        <Button variant="primary" onClick={recipeCardAddHandler}>Add</Button>
      </Card.Body>
    </Card>
  )

  // return (
  //   <div className="recipe-card">
  //     <h3>{recipe.human_readable_name}</h3>
  //     <h4>{recipe.description}</h4>
  //     <button onClick={recipeCardAddHandler}>Add</button>
  //   </div>
  // );
};

export default RecipeCard;
