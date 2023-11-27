import { Typography, Box } from "@mui/material";
import React from "react";

function RecipeDetailedInstructions(props) {
  const { value, index, recipe, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {recipe.directions.map((step, index) => (
            <div id={index}>
              <Typography variant="h6" color="primary">
                Step {index + 1}
              </Typography>
              <Typography variant="h7">
                {step}
              </Typography>
            </div>
          ))}

          {/* <Typography variant="h6" color="primary">
            Step 1
          </Typography> */}
        </Box>
      )}
    </div>
  );
}

export default RecipeDetailedInstructions;
