const defaultRecipeBookState = {
  items: [
    {
      id: 530147055217345,
      recipe: {
        name: "turkey_burgers",
        human_readable_name: "Turkey Burgers",
        category: "entree",
        description: "Turkey Burgers",
        photo_path: "turkey-burger.png",
      },
      ingredients: [
        {
          id: 1444785091,
          name: "gluten free hamburger buns",
          amount: "4 units",
        },
        {
          id: 1444785091,
          name: "swiss cheese",
          amount: "4 slices",
        },
        {
          id: 5130806487,
          name: '"Worcestershire Sauce',
        }
      ],
      in_cart: true,
    },
    {
      id: 530147055217347,
      recipe: {
        name: "bibimbap",
        human_readable_name: "Bibimbap",
        category: "entree",
        description: "Korean rice dish with ground beef, carrots, and spinach.",
        photo_path: "bibimbap.png",
      },
      in_cart: false,
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
      in_cart: false,
    },
    {
      id: 530147055217349,
      recipe: {
        name: "bagel_lox_and_cream_cheese",
        human_readable_name: "Bagel with Lox and Cream Cheese",
        category: "breakfast",
        description: "Bagel with Lox and Cream Cheese",
        photo_path: "",
      },
      in_cart: false,
    },
  ],
  number_of_recipes: 4,
};

export default defaultRecipeBookState;
