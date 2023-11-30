import React, { useState } from "react";
import recipeHardcoded from "../../../recipe_harcoded/recipe.json";
import { Box, Container, Grid, Paper, Tab, Tabs, Typography } from "@mui/material";
import RecipeDetailedIngredients from "./LeftBox/Tabs/RecipeDetailedIngredients/RecipeDetailedIngredients";
import RecipeDetailedInstructions from "./LeftBox/Tabs/RecipeDetailedInstructions";
import RecipeDetailedNotes from "./LeftBox/Tabs/RecipeDetailedNotes";

import './RecipeDetailed.css';
import RecipeDetailedRightBox from "./RightBox/RecipeDetailedRightBox";

function RecipeDetailed(props) {
  const recipe = recipeHardcoded[0];

  const [tabValue, setTabValue] = useState(0);

  function handleTabChange(event, newValue) {
    setTabValue(newValue);
  }

  return (
    <Box mt={2} className="recipe-detailed-box">
      <Grid container>
        <Grid item xs={7}>
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
            <RecipeDetailedIngredients value={tabValue} index={0} recipe={recipe} />
            <RecipeDetailedInstructions value={tabValue} index={1} recipe={recipe} />
            <RecipeDetailedNotes value={tabValue} index={2} />
          </Box>
        </Grid>
        <Grid item xs={5}>
          <RecipeDetailedRightBox></RecipeDetailedRightBox>

        </Grid>
      </Grid>
    </Box>
  );
}

export default RecipeDetailed;
