import { useReducer } from "react";

import RecipeBookContext from "./recipe-book-context";
import defaultRecipeBookState from "./default-recipe-book-state.js";

function recipeBookReducer(state, action) {
  console.log('state', state)
  console.log('action', action)

  if (action.type === "add_recipe_to_cart"){
    const existingRecipeItemIndex = state.items.findIndex((item) => item.id === action.id);

    const existingRecipe = state.items[existingRecipeItemIndex]

    const updatedRecipe = {
      ...existingRecipe,
      in_cart: true
    }

    let updatedItems = [...state.items];

    updatedItems[existingRecipeItemIndex] = updatedRecipe;

    return {
      items: updatedItems,
      number_of_recipes: state.number_of_recipes
    }
  }

  // return state
}

const RecipeBookProvider = (props) => {
  const [recipeBookState, dispatchRecipeBookAction] = useReducer(
    recipeBookReducer,
    defaultRecipeBookState
  );

  const addRecipeToCartHandler = (id) => {
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
