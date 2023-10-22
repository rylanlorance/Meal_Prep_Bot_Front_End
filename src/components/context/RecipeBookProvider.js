import RecipeBookContext from "./recipe-book-context";

const RecipeBookProvider = (props) => {
  const defaultRecipeBookContext = {
    items: [
      {
        id: 530147055217345,
        recipe: {
          name: "turkey_burgers",
          human_readable_name: "Turkey Burgers",
          category: "entree",
          description: "Turkey Burgers",
          photo_path: "../../../assets/turkey-burger.png",
        },
      },
      {
        id: 530147055217347,
        recipe: {
          name: "bibimbap",
          human_readable_name: "Bibimbap",
          category: "entree",
          description:
            "Korean rice dish with ground beef, carrots, and spinach.",
          photo_path: "../../../assets/bibimbap.png",
        },
      },
      {
        id: 530147055217348,
        recipe: {
          name: "balsamic_sheet_pan_chicken",
          human_readable_name: "Balsamic Sheet Pan Chicken",
          category: "breakfast",
          description: "Rice bowl with balsamic chicken and veggies.",
          photo_path: "",
        },
      },
      {
        id: 530147055217348,
        recipe: {
          name: "Bagel with Lox and Cream Cheese",
          human_readable_name: "Balsamic Sheet Pan Chicken",
          description: "Rice bowl with balsamic chicken and veggies.",
          photo_path: "",
        },
      },
    ],
    number_of_recipes: 0,
  };

  return (
    <RecipeBookContext.Provider value={defaultRecipeBookContext}>
      {props.children}
    </RecipeBookContext.Provider>
  );
};

export default RecipeBookProvider;
