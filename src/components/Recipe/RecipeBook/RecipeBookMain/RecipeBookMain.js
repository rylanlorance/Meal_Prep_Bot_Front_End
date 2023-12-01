import {Box, Button, Grid} from '@mui/material';
import React from 'react';

import RecipeCard from '../RecipeCard/RecipeCard';

export default function RecipeBookMain(props) {
  console.log('props', props);

  return (
    <Box ml="10px">
      <Grid container spacing="20px">
        {props.recipes.map((recipe) => (
          <Grid item key={recipe.recipe_id}>
            <RecipeCard key={recipe.recipe_id} recipe={recipe}></RecipeCard>
          </Grid>
        ))}
      </Grid>
      <Box mt="20px" sx={{textAlign: 'center'}}>
        <Button variant="outlined">Load More</Button>
      </Box>
    </Box>
  );
}
