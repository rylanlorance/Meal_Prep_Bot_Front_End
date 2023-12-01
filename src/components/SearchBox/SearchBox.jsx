import React from 'react';

import SearchBoxText from './SearchBoxText/SearchBoxText';

import './SearchBox.css';

function SearchBox() {
  return (
    <div className="search-box">
      <SearchBoxText></SearchBoxText>
    </div>
  );
}

export default SearchBox;
