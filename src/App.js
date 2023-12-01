import * as React from "react";

import Container from "@mui/material/Container";
import NavBar from "./components/NavBar/NavBar";
import RecipeCard from "./components/Recipe/RecipeBook/RecipeCard/RecipeCard";
import SearchBox from "./components/SearchBox/SearchBox";
import Subheader from "./components/Subheader/Subheader";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./static/theme";
import Home from "./components/Pages/Home/HomePage";
import { RouterProvider } from "react-router-dom";
import RecipeBook from "./components/Recipe/RecipeBook/RecipeBook";
import { createBrowserRouter } from "react-router-dom";
import RecipePage from "./components/Pages/Recipes/RecipePage";
import RecipeDetailed from "./components/Recipe/RecipeDetailed/RecipeDetailed";
import CartProvider from "./context/Cart/CartProvider";
import { CartContextProvider } from "./context/Cart/CartContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/recipes",
      element: <RecipePage />,
    },
    {
      path: "recipe-detailed/:recipe_id",
      element: <RecipeDetailed />,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <NavBar />
        <RouterProvider router={router}>
          {/* <SearchBox></SearchBox>
        <RecipeBook></RecipeBook>
      <RecipeCard></RecipeCard> */}
        </RouterProvider>
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default App;
