import React, { useState, useEffect } from "react";
import Search from "./Search";
import RecipeCardContainer from "./RecipeCardContainer";
import RecipeModal from "./RecipeModal";

function Homepage() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [recipeCardClicked, setRecipeCardClicked] = useState(false);
  const [clickedRecipe, setClickedRecipe] = useState({});
  console.log(clickedRecipe);
  console.log(recipeCardClicked);

  useEffect(() => {
    fetch("http://localhost:4000/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);
  //make this also include cuisine, meal type, etc
  const searchedRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div>Homepage</div>
      <Search search={search} setSearch={setSearch} />
      <RecipeCardContainer
        recipes={searchedRecipes}
        setRecipeCardClicked={setRecipeCardClicked}
        setClickedRecipe={setClickedRecipe}
      />
      {recipeCardClicked ? (
        <RecipeModal
          setRecipeCardClicked={setRecipeCardClicked}
          clickedRecipe={clickedRecipe}
        />
      ) : null}
    </>
  );
}

export default Homepage;
