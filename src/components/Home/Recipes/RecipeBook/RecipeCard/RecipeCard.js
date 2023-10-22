import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const RecipeCard = (props) => {
  const recipe = props.recipe;

  const onButtonClick = () => {
    props.addRecipeToCart(recipe.id);
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="../../../assets/turkey-burger.png" />
      <Card.Body>
        <Card.Title>{recipe.recipe.human_readable_name}</Card.Title>
        <Card.Text>{recipe.recipe.description}</Card.Text>
        <Button variant="primary" onClick={onButtonClick}>Add</Button>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
