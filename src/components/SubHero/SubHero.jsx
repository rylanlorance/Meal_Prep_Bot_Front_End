import { Container, Grid } from '@mui/material'
import React from 'react'
import SubHeroItem from './SubHeroItem'

export default function SubHero() {
  const SubheroItemProcess = [
    {
      header: "Select Recipes",
      subheader: "Choose Recipes from the RecipeBook Database."
    }
    {
      header: "Add Ingredients",
      subheader: "Add ingredients to the "
    }
  ]


  return (
    <Grid container>
      <Grid item xs={12}>1</Grid>
      <Grid item xs={4}>2</Grid>
      <Grid item xs={4}>3</Grid>
      <Grid item xs={4}>4</Grid>
      <SubHeroItem></SubHeroItem>
    </Grid>

  )
}
