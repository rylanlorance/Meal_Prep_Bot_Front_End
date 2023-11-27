import React, { useState } from 'react';
import { Typography } from '@mui/material';
import data from '../../../recipe_harcoded/recipe.json'
import RecipeCard from './RecipeCard/RecipeCard';
import RecipeSearchBox from './RecipeSearchBox/RecipeSearchBox';

function RecipeBook(props) {
    const [searchResults, setSearchResults] = useState(data)
    
    return (
        <div>
            <RecipeSearchBox></RecipeSearchBox>
        </div>
    );
}

export default RecipeBook;