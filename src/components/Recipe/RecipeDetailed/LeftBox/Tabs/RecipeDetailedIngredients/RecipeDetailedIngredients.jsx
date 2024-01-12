import React from 'react';

import {Box, Typography} from '@mui/material';

import RecipeDetailedIngredientsItem from './RecipeDetailedIngredientsItem';

function RecipeDetailedIngredients(props) {
  const {value, index, recipe, ...other} = props;
  console.log('recipe', recipe);

  const hardCodedIngredient = recipe.ingredients[0];
  console.log('hc recipe', hardCodedIngredient);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 3}}>
          {recipe.ingredients.map((ingredient, index) => (
            <RecipeDetailedIngredientsItem
              key={index}
              ingredient={ingredient}
              onAddItemToCart={props.OnAddItemToCart}
            ></RecipeDetailedIngredientsItem>
          ))}
          {/* <RecipeDetailedIngredientsItem
          ingredient={hardCodedIngredient}>
          </RecipeDetailedIngredientsItem> */}
        </Box>
      )}
    </div>
  );
}

export default RecipeDetailedIngredients;
