import './SearchBox.css';

import React from 'react';

import SearchBoxText from './SearchBoxText/SearchBoxText';

function SearchBox() {
  return (
    <div className='search-box'>
      <SearchBoxText></SearchBoxText>
    </div>
  );
}

export default SearchBox;
