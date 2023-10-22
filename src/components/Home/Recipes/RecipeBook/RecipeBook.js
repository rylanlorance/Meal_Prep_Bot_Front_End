import React, { useContext } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import RecipeBookContext from "../../../context/recipe-book-context";
import RecipeBookSection from "./RecipeBookSection/RecipeBookSection";

const RecipeBook = () => {
  const recipeBook = useContext(RecipeBookContext);

  const recipeBookSegregated = {
    breakfast: recipeBook.items.filter(
      (item) => item.recipe.category === "breakfast"
    ),
    entree: recipeBook.items.filter(
      (item) => item.recipe.category === "entree"
    ),
  };

  const handleAddRecipeToCart = (recipeId) => {
    recipeBook.addRecipeToCart(recipeId)
  };

  return (
    <div className="recipe-book">
      <Tabs defaultActiveKey="breakfast" id="tab-example" className="mb-3">
        <Tab eventKey="breakfast" title="Breakfast">
          <RecipeBookSection
            recipes={recipeBookSegregated.breakfast}
            addRecipeToCart={handleAddRecipeToCart}
          ></RecipeBookSection>
        </Tab>
        <Tab eventKey="entree" title="Entree">
          <RecipeBookSection
            recipes={recipeBookSegregated.entree}
            addRecipeToCart={handleAddRecipeToCart}
          ></RecipeBookSection>
        </Tab>
      </Tabs>
    </div>
  );
};

export default RecipeBook;
