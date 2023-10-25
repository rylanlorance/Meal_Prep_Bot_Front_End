import React from 'react'
import data from '../../../context/default-recipe-book-from-api';

function RecipeDetailed() {
    const recipe = data[3];
    console.log('recipe', recipe)

  return (
    <div>RecipeDetailed</div>
  )
}

export default RecipeDetailed 