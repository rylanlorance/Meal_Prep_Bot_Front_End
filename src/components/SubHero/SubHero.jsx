import { Container, Grid } from "@mui/material";
import React from "react";
import SubHeroItem from "./SubHeroItem";

export default function SubHero() {
  const subHeroItemProcess = [
    {
      header: "Select Recipes",
      subheader: "Choose Recipes from the RecipeBook Database.",
    },
    {
      header: "Add Ingredients",
      subheader: "Add ingredients to the ",
    },
    {
      header: "Create a Shopping List",
      subheader: "Integrate shopping list with Weekday Planner.",
    },
  ];

  return (
    <Grid container>
      {
        subHeroItemProcess.map((item) => (
          <Grid item xs={4}>
            <SubHeroItem processData={item}></SubHeroItem>
          </Grid>
        ))
        }
      
      {/* <Grid item xs={12}>1</Grid>      <Grid item xs={4}>3</Grid>
      // <Grid item xs={4}>4</Grid>
      // <SubHeroItem></SubHeroItem> */}
    </Grid>
  );
}
