import React from 'react';
import './Cart.css';
import { CartItem } from './CartItem/CartItem';


function Cart(props) {
  // const cartItems = [    {
  //     id: 530147055217345,
  //     recipe: {
  //       name: "turkey_burgers",
  //       human_readable_name: "Turkey Burgers",
  //       description: "Turkey Burgers with Sweet Potatoes and Green Beans ",
  //       photo_path: "../../../assets/turkey-burger.png",
  //     },
  //   }]

  return (
    <div className='cart'>
      <h4>Cart</h4>
      <ul>
        {props.selectedRecipes.map(item => (
          <CartItem recipe={item.recipe}></CartItem>
        ))}

      </ul>
      
      </div>
  )
}


export default Cart
