import React from "react";
import RecipeBook from "./Recipes/RecipeBook/RecipeBook";

function Home() {
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
    <div className="home-page">
        <h2> Recipe Book</h2>
        <RecipeBook></RecipeBook>
    </div>
  );
}

export default Home;
