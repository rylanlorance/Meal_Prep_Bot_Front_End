import React from "react";
import RecipeBook from "./Recipes/RecipeBook/RecipeBook";

function Home() {
  return (
    <div className="home-page">
        <h2> Recipe Book</h2>
        <RecipeBook></RecipeBook>
    </div>
  );
}

export default Home;
