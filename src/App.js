import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import RecipeNavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import RecipeBookContext from "./components/context/recipe-book-context";
import RecipeBookProvider from "./components/context/RecipeBookProvider";
import { useState } from "react";
import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import RecipeDetailed from "./components/Home/Recipes/RecipeDetailed/RecipeDetailed";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/cart", element: <Cart></Cart> },
    {
      path: "/recipe",
      element: <RecipeDetailed />,
    },
  ]);

  return (
    <div className="App">
      <RecipeBookProvider>
        <RouterProvider router={router}>
          <RecipeNavBar>
            {/* <Switch>
            <Route exact path="/">
            <Home></Home>
            </Route>
          </Switch> */}
          </RecipeNavBar>
        </RouterProvider>
      </RecipeBookProvider>
    </div>
  );
}

export default App;
