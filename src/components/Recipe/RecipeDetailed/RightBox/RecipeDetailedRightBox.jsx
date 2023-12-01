import '../RecipeDetailed.css';

import {Box, Typography} from '@mui/material';
import React from 'react';

function RecipeDetailedRightBox() {
  const recipeImageUrl = `http://localhost:8585/images/mushroom-risotto.jpg`;

  return (
    <Box className="recipe-detailed-img">
      <Box
        height={450}
        width={450}
        component="img"
        alt="Food Image."
        src={recipeImageUrl}
        sx={{
          borderRadius: '16px',
        }}
      ></Box>

      <div className="recipe-info-box">
        <Typography variant="h7" display="block">
          Category: Entree
        </Typography>
        <Typography variant="h7" display="block">
          Ingredients: 6
        </Typography>
        <Typography variant="h7" display="block">
          URL: INSERT HERE
        </Typography>
      </div>
    </Box>
  );
}

export default RecipeDetailedRightBox;
