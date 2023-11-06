import * as React from "react";

import Container from "@mui/material/Container";

import NavBar from "./components/NavBar/NavBar";
import RecipeCard from "./components/Recipe/RecipeBook/RecipeCard/RecipeCard";
import SearchBox from "./components/SearchBox/SearchBox";
import Subheader from "./components/Subheader/Subheader";

import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  return (
    <StyledEngineProvider>
      <Container>
        <NavBar />
        <Subheader />
        <SearchBox></SearchBox>
        <RecipeCard></RecipeCard>
      </Container>
    </StyledEngineProvider>
  );
}

export default App;
