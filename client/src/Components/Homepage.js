import React, { useState} from "react";
import Search from "./Search";
import RecipeCardContainer from "./RecipeCardContainer";
import RecipeModal from "./RecipeModal";

function Homepage({recipes, recipeCardClicked, setRecipeCardClicked, clickedRecipe, setClickedRecipe}) {
 const [search, setSearch] = useState("")
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
