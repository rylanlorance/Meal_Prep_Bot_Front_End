import { Box, Typography } from '@mui/material'
import React from 'react'
import recipeImage from '../../../../assets/bolognese.jpg';

function RecipeDetailedRightBox() {
  return (
    <Box>
      <Box
        height={300}
        width={300}
        component="img"
        alt="Food Image."
        src={recipeImage}
      ></Box>

      <div className='image-subheader'>
        <di
      </div>
    </Box>
  )
}

export default RecipeDetailedRightBox