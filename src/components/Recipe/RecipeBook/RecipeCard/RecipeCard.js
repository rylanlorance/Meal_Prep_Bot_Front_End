import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import './RecipeCard.css';

function RecipeCard(props) {
  return (
    <Card className="recipe-card" sx={{ boxShadow:3 }}>
      <CardHeader title="Turkey Burgers" subheader="September 14, 2016"></CardHeader>
      <CardMedia
        sx={{height: 200, width: 200}}
        image="recipe_images/turkey-burger.png"
      ></CardMedia>
      <CardContent>
      </CardContent>
      <CardActions>
        <Button size="small">
          Open
        </Button>
      </CardActions>
    </Card>
  );
}

export default RecipeCard;
