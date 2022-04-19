import React from "react";
import { Card } from "react-bootstrap";
import NewRecipeCard from "./NewRecipeCard";

function RecipeCardContainer({
  recipes,
  setRecipeCardClicked,
  setClickedRecipe,
  userMealPlans,
  setUserMealPlans
}) {
  console.log(recipes);
  console.log(userMealPlans);

  function handleSelect(recipe_id, meal_plan_id) {
    console.log(recipe_id, meal_plan_id);
    let addRecipetoMealPlan = {
      recipe_id: recipe_id,
      meal_plan_id: meal_plan_id,
    };
    fetch("/recipe_meal_plans", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addRecipetoMealPlan),
    })
      .then((response) => response.json())
     .then((data) => console.log(data))
  }
  const recipesArr = recipes.map((recipe) => (
    <Card style={{ width: "12rem" }} key={Math.random()}>
      <NewRecipeCard
        recipe={recipe}
        setRecipeCardClicked={setRecipeCardClicked}
        setClickedRecipe={setClickedRecipe}
        handleSelect={handleSelect}
        userMealPlans={userMealPlans}
      />
    </Card>
  ));
  return <ul className="cards">{recipesArr}</ul>;
}

export default RecipeCardContainer;
