import {
  Box,
  Button,
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
    <Grid container mt="5px">
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

      {/* <Select
          id="recipe-category-selector-tool"
          labelId="select-recipe-category-label"
          value={categoryFilter}
          label="Category"
          onChange={setCategoryFilter}
        >
          <MenuItem value="entree">Entree</MenuItem>
          <MenuItem value="side">Side</MenuItem>
        </Select> */}

      {/* <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}
      {/* <Select
          label-id="select-protein-category"
          id="protein-category-selector-tool"
          value={proteinCategoryFilter}
          label="Category"
        ></Select>
        <Button variant="contained">Search</Button> */}
      {/* </FormControl> */}
    </Grid>
  );
}

export default RecipeSearchBox;
