import React from 'react'
import RecipeCard from './RecipeCard'

function RecipeCardContainer({ recipes, setRecipeCardClicked}) {
  console.log(recipes);
  const recipesArr = recipes.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} setRecipeCardClicked={setRecipeCardClicked} />
  ));
  return <ul className="cards">{recipesArr}</ul>;
}

export default RecipeCardContainer