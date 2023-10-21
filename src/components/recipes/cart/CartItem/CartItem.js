import React from 'react'
import { FaBeer } from 'react-icons/fa';


export const CartItem = (props) => {
    
    return (
    <div className='cart-item'>
        <p>{props.recipe.name}</p>
    </div>
  )
}
