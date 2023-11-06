import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Typography
          variant="h3">
          Moca
        </Typography>
        <Box>
          <p>Cart</p>
        </Box>
      </AppBar>
    </Box>

  );
}

export default NavBar;
