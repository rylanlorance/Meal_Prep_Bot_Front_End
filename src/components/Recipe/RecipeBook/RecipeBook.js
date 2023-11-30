import React, { useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import data from "../../../recipe_harcoded/recipe.json";
import RecipeCard from "./RecipeCard/RecipeCard";
import RecipeSearchBox from "./RecipeSearchBox/RecipeSearchBox";
import RecipeBookMain from "./RecipeBookMain/RecipeBookMain";
import useFetch from "../../../hooks/useFetch";

function RecipeBook(props) {
  const [searchResults, setSearchResults] = useState(data);

  const { isLoading, serverError, apiData } = useFetch(
    "GET",
    "http://localhost:8585/recipes",
    ""
  );

  console.log("apiData", apiData);
  console.log("serverError", serverError);

  // setSearchResults()

  return (
    <div>
      {!isLoading && serverError ? (
        <span>Error in fetching data ...</span>
      ) : (
        <div>
          <RecipeSearchBox></RecipeSearchBox>
          <hr></hr>
          <RecipeBookMain recipes={searchResults}></RecipeBookMain>
        </div>
      )}
    </div>
  );
}

export default RecipeBook;
