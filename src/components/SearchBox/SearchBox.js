import React from 'react'

import "./SearchBox.css";
import SearchBoxText from './SearchBoxText/SearchBoxText';

function SearchBox() {
  return (
    <div className='search-box'>
      <SearchBoxText></SearchBoxText>
    </div>
  )
}

export default SearchBox