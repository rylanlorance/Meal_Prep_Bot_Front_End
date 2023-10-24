import React from 'react'


export const CartItem = (props) => {
    
    return (
    <div className='cart-item'>
        <p>{props.recipe.name}</p>
    </div>
  )
}
