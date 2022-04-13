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

  //trying to map through the meal plans currently in state to get each title to pass down to recipe card to use in the dropdown.
  // const eachUserMealPlan = userMealPlans?.map((oneMealPlan) => (oneMealPlan))
  // console.log(eachUserMealPlan)
  const recipesArr = recipes.map((recipe) => (
    <Card style={{ width: "12rem" }} key={recipe.id}>
      <RecipeCard
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
