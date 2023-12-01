import React, { useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import data from "../../../recipe_harcoded/recipe.json";
import RecipeCard from "./RecipeCard/RecipeCard";
import RecipeSearchBox from "./RecipeSearchBox/RecipeSearchBox";
import RecipeBookMain from "./RecipeBookMain/RecipeBookMain";
import useFetch from "../../../hooks/useFetch";

function RecipeBook(props) {
  const [searchResults, setSearchResults] = useState();

  const {
    isLoading,
    serverError,
    apiData = [],
  } = useFetch("GET", "http://localhost:8585/recipes", "");

  console.log('isLoading', isLoading)
  console.log('serverError', serverError)
  console.log('blah')
  console.log('apiData', apiData)

  // setSearchResults()
  return (
    <div>
      <RecipeSearchBox></RecipeSearchBox>
      <hr></hr>
      {/* {isLoading && <span>Loading.....</span>}
      {!isLoading && serverError ? (
        <span>Error in fetching data ...</span>
      ) : (
        <div>
          {/* <span>{JSON.stringify(recipes)}</span>} */}
          {/* <span>{JSON.stringify(apiData)}</span>
          <span>{JSON.stringify(recipes)}</span> */}
          <RecipeBookMain recipes={apiData.recipes}></RecipeBookMain>
        </div>
      )} */}

      {/* {(recipes && recipes.length > 0) && (
        <RecipeBookMain></RecipeBookMain>
      )} */}
    </div>
  );
}
// {/* /* {!isLoading && serverError ? (
//   <span>Error in fetching data ...</span>
// ) : (
//   <div>
//
//     <hr></hr>
//     <RecipeBookMain recipes={searchResults}></RecipeBookMain>
//   </div>
// )} */ */}
export default RecipeBook;
