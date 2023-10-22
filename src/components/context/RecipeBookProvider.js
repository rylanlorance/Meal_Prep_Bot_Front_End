import { useReducer } from "react";

import RecipeBookContext from "./recipe-book-context";
import defaultRecipeBookState from "./default-recipe-book-state.js";

function recipeBookReducer(state, action) {
  console.log("using reducer", state, action);
  console.log("looking for id", action.id);

  switch (action.type) {
    case "add_recipe_to_cart":
        state.items.map((recipe) => {
          if (recipe.id === action.id) {
            recipe.in_cart = true;
          }
          return recipe;
        });
      break;
    default:
      console.log("error!");
  }

  console.log('state new', state)
  return state
}

const RecipeBookProvider = (props) => {
  const [recipeBookState, dispatchRecipeBookAction] = useReducer(
    recipeBookReducer,
    defaultRecipeBookState
  );

  console.log("recipeBookState", recipeBookState);

  const addRecipeToCartHandler = (id) => {
    console.log("idddd", id);
    dispatchRecipeBookAction({ type: "add_recipe_to_cart", id: id });
  };

  const recipeBookContext = {
    items: recipeBookState.items,
    numbers_of_recipes: recipeBookState.number_of_recipes,
    addRecipeToCart: addRecipeToCartHandler,
  };

  return (
    <RecipeBookContext.Provider value={recipeBookContext}>
      {props.children}
    </RecipeBookContext.Provider>
  );
};

export default RecipeBookProvider;
