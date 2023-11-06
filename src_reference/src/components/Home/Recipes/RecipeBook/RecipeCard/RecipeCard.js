import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const RecipeCard = (props) => {
  const recipe = props.recipe;

  const onButtonClick = () => {
    props.addRecipeToCart(recipe.id);
  }
  const recipeImageStr = `./recipe_images/${recipe.recipe.photo_path}`;
  
  console.log('recipe', recipe)

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={recipeImageStr} />
      <Card.Body>
        <Card.Title>{recipe.recipe.human_readable_name}</Card.Title>
        <Card.Text>{recipe.recipe.description}</Card.Text>
        <Button variant="primary" onClick={onButtonClick} disabled={recipe.in_cart}>Add</Button>
        <Button variant="secondary">Expand</Button>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
