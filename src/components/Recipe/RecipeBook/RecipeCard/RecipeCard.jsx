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
  const recipe = props.recipe;

  return (
    <Card className="recipe-card" sx={{ boxShadow: 3, minHeight: "430px", minWidth: "250px" }}>
      <CardHeader title={recipe.title} subheader={recipe.category}></CardHeader>
      <CardMedia
        sx={{ height: 250, width: 250, objectFit: "cover"
        }}
        image={recipe.image_url}
      ></CardMedia>
      <CardContent>
      </CardContent>
      <CardActions>
        <div style={{marginLeft: "auto", marginRight: "auto"}}>
          <Button size="small" variant="contained">
            Add
          </Button>
        </div>

      </CardActions>
    </Card>
  );
}

export default RecipeCard;
