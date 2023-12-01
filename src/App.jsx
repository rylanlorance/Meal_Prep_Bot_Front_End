import * as React from 'react';
import {RouterProvider} from 'react-router-dom';
import {createBrowserRouter} from 'react-router-dom';

import {ThemeProvider} from '@mui/material/styles';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Pages/Home/HomePage';
import RecipePage from './components/Pages/Recipes/RecipePage';
import RecipeDetailed from './components/Recipe/RecipeDetailed/RecipeDetailed';
import {CartContextProvider} from './context/Cart/CartContext';
import {theme} from './Theme';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/recipes',
      element: <RecipePage />,
    },
    {
      path: 'recipe-detailed/:recipe_id',
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
