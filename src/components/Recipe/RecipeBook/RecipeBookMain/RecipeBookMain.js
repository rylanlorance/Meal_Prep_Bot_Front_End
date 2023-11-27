import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { Box, Grid } from "@mui/material";

export default function RecipeBookMain(props) {
  // console.log("props", props);

  return (
    <Box ml="10px">
      <Grid container spacing="20px">
        {props.recipes.map((recipe, index) => (
          <Grid item>
            <RecipeCard key={index} recipe={recipe}></RecipeCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
