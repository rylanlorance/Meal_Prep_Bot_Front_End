import React from 'react';

import {Box, Button, Divider} from '@mui/material';

function RecipeDetailedIngredientsItem(props) {
  console.log('proppsy', props);

  return (
    <Box display="flex">
      <Box>
        <h5>{props.ingredient}</h5>
      </Box>
      <Box ml="20px">
        <Button
          variant="outlined"
          onClick={()=> props.onAddItemToCart(props.ingredient)}>Add</Button>
      </Box>
      <Divider></Divider>
    </Box>
  );
}


export default RecipeDetailedIngredientsItem;
