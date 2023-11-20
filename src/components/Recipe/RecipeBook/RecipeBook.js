import React, { useState } from 'react';
import { Typography } from '@mui/material';
import data from '../../../recipe_harcoded/recipe.json'

function RecipeBook(props) {
    const [searchResults, setSearchResults] = useState(data)

    console.log('search_results', searchResults);
    
    return (
        <div>
        </div>
    );
}

export default RecipeBook;