import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import RecipeNavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import RecipeBookContext from "./components/context/recipe-book-context";
import RecipeBookProvider from "./components/context/RecipeBookProvider";
import { useState } from "react";

function App() {

  return (
    <div className="App">
      <RecipeBookProvider>
        <RecipeNavBar></RecipeNavBar>
        <Home></Home>
      </RecipeBookProvider>
    </div>
  );
}

export default App;