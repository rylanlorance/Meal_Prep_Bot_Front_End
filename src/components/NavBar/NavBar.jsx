import * as React from 'react';

import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import {Toolbar, Typography} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import ShoppingCartButton from './ShoppingCartButton';

function NavBar() {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static" color="background">
        <Toolbar>
          <RestaurantMenuIcon color="primary"/>
          <Typography variant="h4" color="primary">Moca</Typography>
          <Button key="recipes" sx={{ }}>Recipes</Button>

          <ShoppingCartButton></ShoppingCartButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
