import {
  Box,
  Button,
  Chip,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

function RecipeSearchBox(props) {
  const [categoryFilter, setCategoryFilter] = React.useState("");
  const [proteinCategoryFilter, setProteinCategoryFilter] = React.useState("");

  function onChangeCategoryFilterHandler(event) {
    setCategoryFilter(event.target.value);
  }

  const hardCodedProteins = ["chicken", "beef", "pork", "duck"];

  return (
    <Box>
      <Grid container mt="5px" className="recipe-searchbox-form">
        <Grid item xs={5}>
          <FormControl fullWidth>
            <TextField
              id="recipe-search-bar"
              label="Search Recipes Here"
              labelid="recipe-search-bar-label"
              variant="outlined"
            ></TextField>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl fullWidth>
            <InputLabel id="select-recipe-category-label">Category</InputLabel>
            <Select
              id="recipe-category-selector-tool"
              labelid="select-recipe-category-label"
              value={categoryFilter}
              label="Category"
              onChange={setCategoryFilter}
            >
              <MenuItem value="entree">Entree</MenuItem>
              <MenuItem value="side">Side</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl fullWidth>
            <InputLabel id="select-recipe-protein-label">Protein</InputLabel>

            <Select
              label-id="select-protein-category"
              id="protein-category-selector-tool"
              value={proteinCategoryFilter}
              label="Category"
            ></Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid className="recipe-searchbox-tags">
        <Chip label="Dinner"></Chip>
      </Grid>

    </Box>
  );
}

export default RecipeSearchBox;
