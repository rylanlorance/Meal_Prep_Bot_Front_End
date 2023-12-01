import './ShoppingCartButton.css';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import React from 'react';

function ShoppingCartButton() {
  return (
    <div className="shopping-cart-btn">
      <IconButton size="large" color="inherit" aria-label="menu">
        <span className="cart-ctr">1</span>
        <ShoppingCartIcon className="moca-cart-icon"></ShoppingCartIcon>
      </IconButton>
    </div>
  );
}

export default ShoppingCartButton;
