import { useReducer } from "react";
import defaultCartState from "./default/defaultCartState";
import CartContext from "./cart-context";

function cartReducer(state, action) {
  console.log("state", state);
  console.log("action", action);
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const cartContext = {
    items: cartState.items,
    number_of_items: cartState.number_of_items
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>

  )
};

export default CartProvider;
