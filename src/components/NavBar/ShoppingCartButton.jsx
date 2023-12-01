import React from 'react';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

import './ShoppingCartButton.css';

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
