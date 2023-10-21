import React, { useState } from 'react'
import Cart from './recipes/cart/Cart'
import { RecipeMain } from './recipes/RecipeMain/RecipeMain'

import './Homepage.css'

export default function HomePage() {
  const [selectedRecipes, setSelectedRecipes] = useState([]); 

  const hardCodedRecipes = [
    {
      id: 530147055217345,
      recipe: {
        name: "turkey_burgers",
        human_readable_name: "Turkey Burgers",
        description: "Turkey Burgers with Sweet Potatoes and Green Beans ",
        photo_path: "../../../assets/turkey-burger.png",
      },
    },
    {
      id: 530147055217347,
      recipe: {
        name: "bibimbap",
        human_readable_name: "Bibimbap",
        description: "Korean rice dish with ground beef, carrots, and spinach.",
        photo_path: "../../../assets/bibimbap.png",
      },
    },
    {
      id: 530147055217348,
      recipe: {
        name: "balsamic_sheet_pan_chicken",
        human_readable_name: "Balsamic Sheet Pan Chicken",
        description: "Rice bowl with balsamic chicken and veggies.",
        photo_path: "",
      },
    },
  ];

  const addRecipeHandler = (recipe) => {
    console.log('recipe added!', recipe)
  };

  


  return (
    <div className='homepage'>
      <header>
        <h1>Meal Prep Bot</h1>
      </header>
      <div className='recipe-box'>
      <RecipeMain recipes={hardCodedRecipes} addRecipeHandler={addRecipeHandler}></RecipeMain>
      <Cart></Cart>

      </div>
      <div className='main-box'>      
      </div>
    </div>
  )
}
