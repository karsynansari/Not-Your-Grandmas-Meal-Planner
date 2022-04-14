import React from "react";
import RecipeCard from "./RecipeCard";
import { Card } from "react-bootstrap";

function RecipeCardContainer({
  recipes,
  setRecipeCardClicked,
  setClickedRecipe,
  userMealPlans,
}) {
  console.log(recipes);
  console.log(userMealPlans);

  const recipesArr = recipes.map((recipe) => (
    <Card style={{ width: "12rem" }} key={Math.random()}>
      <RecipeCard
        key={Math.random()}
        recipe={recipe}
        setRecipeCardClicked={setRecipeCardClicked}
        setClickedRecipe={setClickedRecipe}
        userMealPlans={userMealPlans}
      />
    </Card>
  ));
  return <ul className="cards">{recipesArr}</ul>;
}

export default RecipeCardContainer;
