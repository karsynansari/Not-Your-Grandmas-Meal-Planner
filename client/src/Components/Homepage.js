import React, { useState, useEffect } from "react";
import Search from "./Search";

import RecipeCardContainer from "./RecipeCardContainer";

function Homepage({ user, onLogout }) {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("")
  console.log(recipes);

  useEffect(() => {
    fetch("http://localhost:4000/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  //make this also include cuisine, meal type, etc
  const searchedRecipes = recipes.filter((recipe)=>
  recipe.title.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <>
    
      <div>Homepage</div>
      <Search search={search} setSearch={setSearch} />
      <RecipeCardContainer recipes={searchedRecipes} />
    </>
  );
}

export default Homepage;
