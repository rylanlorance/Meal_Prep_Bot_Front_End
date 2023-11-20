import * as React from "react";

import Container from "@mui/material/Container";

import NavBar from "./components/NavBar/NavBar";
import RecipeCard from "./components/Recipe/RecipeBook/RecipeCard/RecipeCard";
import SearchBox from "./components/SearchBox/SearchBox";
import Subheader from "./components/Subheader/Subheader";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./static/theme";

import RecipeBook from "./components/Recipe/RecipeBook/RecipeBook";

function App() {
  return (
    <ThemeProvider theme={theme}>

      <Container>
        <NavBar />
        <SearchBox></SearchBox>
        {/* <Subheader /> */}
        <RecipeBook></RecipeBook>

        {/* <RecipeCard></RecipeCard> */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
