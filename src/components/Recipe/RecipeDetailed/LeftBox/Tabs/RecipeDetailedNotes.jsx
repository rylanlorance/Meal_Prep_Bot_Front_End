import {Box, Typography} from '@mui/material';
import React from 'react';

function RecipeDetailedNotes(props) {
  const {value, index, ...other} = props;

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
          <Typography>Notes</Typography>
        </Box>
      )}
    </div>
  );
}

export default RecipeDetailedNotes;
