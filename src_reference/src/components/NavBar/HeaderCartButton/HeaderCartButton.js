import RecipeBookContext from '../../context/recipe-book/recipe-book-context'

import React, { useContext } from 'react'

function HeaderCartButton() {
    const recipeBookContext = useContext(RecipeBookContext);

    const items = recipeBookContext.items;

    var recipesInCartCount = 0;

    items.forEach(element => {
        if (element.in_cart){
            recipesInCartCount += 1;
        }
    })

  return (
    <div>Cart
        <div>Number of Items: [{recipesInCartCount}]</div>
    </div>
  )
}

export default HeaderCartButton