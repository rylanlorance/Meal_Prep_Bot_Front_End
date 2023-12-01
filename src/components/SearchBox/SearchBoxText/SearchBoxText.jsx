import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import {Button, TextField} from '@mui/material';

import './SearchBoxText.css';

function SearchBoxText() {
  return (
    <div className="search-box-text">
      <SearchIcon />
      <TextField id="standard-basic" label="Recipe" variant="standard" />
      <Button variant="contained" size="medium" className="search-button">
        Search
      </Button>
    </div>
  );
}

export default SearchBoxText;
