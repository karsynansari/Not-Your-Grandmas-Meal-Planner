import React from 'react'
import RecipeCard from './RecipeCard'
import {Card} from "react-bootstrap"

function RecipeCardContainer({ recipes, setRecipeCardClicked, setClickedRecipe}) {
  const recipesArr = recipes.map((recipe) => (
    <Card style={{ width: "12rem" }}>
      <RecipeCard
        key={recipe.id}
        recipe={recipe}
        setRecipeCardClicked={setRecipeCardClicked}
        setClickedRecipe={setClickedRecipe}
      />
    </Card>
  ));
  return <ul className="cards">{recipesArr}</ul>;
}

export default RecipeCardContainer