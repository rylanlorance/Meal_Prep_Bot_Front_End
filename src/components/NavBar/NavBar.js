import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Toolbar, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartButton from "./ShoppingCartButton";

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" color="inherit" aria-label="menu">
            <MenuIcon></MenuIcon>
          </IconButton>
          <Typography variant="h4">Moca</Typography>
          <ShoppingCartButton></ShoppingCartButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
