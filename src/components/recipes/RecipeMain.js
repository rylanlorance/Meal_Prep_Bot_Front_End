import React from "react";
import RecipeCard from "./RecipeCard/RecipeCard";

export const RecipeMain = () => {
  const hardCodedRecipes = [
    {
      turkey_burgers: {
        human_readable_name: "Turkey Burgers",
      },
    },
    {
      bibimbap: {
        human_readable_name: "Bibimbap"
      }
    }
  ];

  return (
    <div className="recipe-main">
      <h2>Recipe Main</h2>
      <RecipeCard></RecipeCard>
    </div>
  );
};
