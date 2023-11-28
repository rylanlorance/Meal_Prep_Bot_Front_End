import { useReducer } from "react";

function cartReducer(state, action){
  console.log('state', state)
  console.log('action', action)

}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
      cartReducer, 
      defaultCartState
  )
}

export default CartProvider();