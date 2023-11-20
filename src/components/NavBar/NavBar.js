import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Toolbar, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartButton from "./ShoppingCartButton";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="background">
        <Toolbar>
          <RestaurantMenuIcon color="primary"/>
          <Typography variant="h4" color="primary">Moca</Typography>
          <ShoppingCartButton></ShoppingCartButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
