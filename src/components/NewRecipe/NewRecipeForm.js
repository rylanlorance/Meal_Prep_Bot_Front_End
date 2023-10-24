import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function NewRecipeForm() {
  const [ingredientInputs, setIngredientInputs] = useState([{ingredient: ""}]);

  const handleAddInput = () => {
    setIngredientInputs([...ingredientInputs, {ingredient: ""}])
    console.log('ingredientInputs', ingredientInputs)
  }

  const handleChangeInput = (event, index) => {
    const value = event.target.value; 
    const ingredientsChange = [...ingredientInputs];    
    
    // const value = event.target.value;
    // const ingredientsInputBeforeChange = ingredientInputs;

    // ingredientsInputBeforeChange[index].ingredient = value;
    
    // setIngredientInputs(ingredientsInputBeforeChange);
    // console.log('ingredients', ingredientInputs)
  }

  const handleRemoveInput = (index) => {
    const ingredientsBeforeRemove = [...ingredientInputs];
    ingredientsBeforeRemove.splice(index, 1);
    setIngredientInputs(...ingredientsBeforeRemove)
  }


  return (
    <Form>
      <Form.Group className="mb-3" controlId="addRecipeForm.RecipeName">
        <Form.Label>Recipe Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="addRecipeForm.RecipeLink">
        <Form.Label>Recipe Link</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <h3>Recipe Ingredients</h3>
      <Form.Group className="mb-3" controlId="addRecipeForm.Ingredients">
        {ingredientInputs.map((item, index) => (
          <div>
            <Form.Control type="text" onChange={(event)=> handleChangeInput(event, index)}/>
            <Button onClick={(index)=> handleRemoveInput(index) }>Delete</Button>
          </div>
        ))}
      </Form.Group>

      <Button onClick={handleAddInput}>Add Row</Button>
    </Form>
  );
}

export default NewRecipeForm;
