import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

export const RecipeMain = () => {
  const hardCodedRecipes = [
    {
      id: 530147055217345,
      recipe: {
        name: "turkey_burgers",
        human_readable_name: "Turkey Burgers",
        description: "Turkey Burgers with Sweet Potatoes and Green Beans ",
        photo_path: "../../../assets/turkey-burger.png",
      },
    },
    {
      id: 530147055217347,
      recipe: {
        name: "bibimbap",
        human_readable_name: "Bibimbap",
        description: "Korean rice dish with ground beef, carrots, and spinach.",
        photo_path: "../../../assets/bibimbap.png",
      },
    },
    {
      id: 530147055217348,
      recipe: {
        name: "balsamic_sheet_pan_chicken",
        human_readable_name: "Balsamic Sheet Pan Chicken",
        description: "Rice bowl with balsamic chicken and veggies.",
        photo_path: "",
      },
    },
  ];

  return (
    <div className="recipe-main">
      <h2>Recipe Main</h2>
      <div className="recipe-display">
        <ul>
          {hardCodedRecipes.map((item) => (
            <li key={item.id}>
              <RecipeCard recipe={item.recipe}></RecipeCard>
            </li>
          ) )}
        </ul>
      </div>
    </div>
  );
};
