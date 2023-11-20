function RecipeDetailed() {
    // const recipe = data[3];

  return (
    <div>
      <h2>{recipe.strMeal}</h2>
      <Tabs defaultActiveKey="ingredients">
        <Tab eventKey="ingredients" title="Ingredients">
          {/* <RecipeDetailedIngredients recipe={recipe}/> */}
        </Tab>
        <Tab eventKey="instructions" title="Instructions">
          <p>Instructions</p>
        </Tab>
        <Tab eventKey="notes" title="Notes">
          <p>Notes</p>
        </Tab>
      </Tabs>
    </div>
  )
}

export default RecipeDetailed 