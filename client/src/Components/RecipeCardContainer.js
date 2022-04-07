import React from 'react'
import RecipeCard from './RecipeCard'

function RecipeCardContainer({recipes}) {
  console.log(recipes)
  const recipesArr = recipes.map((recipe) => (
  <RecipeCard key={recipe.id} recipe={recipe} />));
  return <ul className="cards" >{recipesArr}</ul>
    
}

export default RecipeCardContainer