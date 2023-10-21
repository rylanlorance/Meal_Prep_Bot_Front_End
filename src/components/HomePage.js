import React from 'react'
import Cart from './recipes/cart/Cart'
import { RecipeMain } from './recipes/RecipeMain/RecipeMain'

import './Homepage.css'

export default function HomePage() {
  return (
    <div className='homepage'>
      <header>
        <h1>Meal Prep Bot</h1>
      </header>
      <div className='recipe-box'>
      <RecipeMain></RecipeMain>
      <Cart></Cart>

      </div>
      <div className='main-box'>      
      </div>
    </div>
  )
}
