import React, { useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import data from '../../../recipe_harcoded/recipe.json'
import RecipeCard from './RecipeCard/RecipeCard';
import RecipeSearchBox from './RecipeSearchBox/RecipeSearchBox';
import RecipeBookMain from './RecipeBookMain/RecipeBookMain';

function RecipeBook(props) {
    const [searchResults, setSearchResults] = useState(data)
    
    return (
        <div>
            <RecipeSearchBox></RecipeSearchBox>
            <hr></hr>
            <RecipeBookMain recipes={searchResults}></RecipeBookMain>
        </div>
    );
}

export default RecipeBook;