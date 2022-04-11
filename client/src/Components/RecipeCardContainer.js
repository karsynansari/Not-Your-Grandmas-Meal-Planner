import React from 'react'
import RecipeCard from './RecipeCard'

function RecipeCardContainer({ recipes, setRecipeCardClicked, setClickedRecipe}) {
  const recipesArr = recipes.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} setRecipeCardClicked={setRecipeCardClicked} setClickedRecipe= {setClickedRecipe} />
  ));
  return <ul className="cards">{recipesArr}</ul>;
}

export default RecipeCardContainer