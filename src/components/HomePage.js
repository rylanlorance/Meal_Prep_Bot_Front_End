import React from 'react'
import Cart from './cart/Cart'
import { RecipeMain } from './recipes/RecipeMain'

export default function HomePage() {
  return (
    <div>
      <header>
        <h1>Meal Prep Bot</h1>
      </header>
      <RecipeMain></RecipeMain>
      <Cart></Cart>
      <div className='main-box'>      
      </div>
    </div>
  )
}
