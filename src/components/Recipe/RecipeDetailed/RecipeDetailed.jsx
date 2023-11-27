import React, { useState } from "react";
import recipeHardcoded from "../../../recipe_harcoded/recipe.json";
import { Box, Container, Paper, Tab, Tabs, Typography } from "@mui/material";
import RecipeDetailedIngredients from "./RightBox/Tabs/RecipeDetailedIngredients/RecipeDetailedIngredients";
import RecipeDetailedInstructions from "./RightBox/Tabs/RecipeDetailedInstructions";
import RecipeDetailedNotes from "./RightBox/Tabs/RecipeDetailedNotes";

import './RecipeDetailed.css';
import RecipeDetailedRightBox from "./LeftBox/RecipeDetailedRightBox";

function RecipeDetailed(props) {
  const recipe = recipeHardcoded[0];

  const [tabValue, setTabValue] = useState(0);

  function handleTabChange(event, newValue) {
    setTabValue(newValue);
  }

  return (
    <Box mt={2} className="recipe-detailed-box">
      <Box className="recipe-detailed-left-box">
        <Typography variant="h4">{recipe.title}</Typography>
        <Box>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab
              label="Ingredients"
              id="simple-tab-0"
              aria-controls="simple-tabpanel-0"
            ></Tab>
            <Tab
              label="Instructions"
              id="simple-tab-1"
              aria-controls="simple-tabpanel-1"
            ></Tab>
            <Tab
              label="Notes"
              id="simple-tab-2"
              aria-controls="simple-tabpanel-2"
            ></Tab>
          </Tabs>
        </Box>
        <RecipeDetailedIngredients value={tabValue} index={0} />
        <RecipeDetailedInstructions value={tabValue} index={1} />
        <RecipeDetailedNotes value={tabValue} index={2} />
      </Box>
      <Box className="recipe-detailed-right-box">
        <RecipeDetailedRightBox></RecipeDetailedRightBox>
      </Box>
    </Box>
  );
}

export default RecipeDetailed;
