import React from "react";
import { Card } from "react-bootstrap";
import NewRecipeCard from "./NewRecipeCard";

function RecipeCardContainer({
  recipes,
  setRecipeCardClicked,
  setClickedRecipe,
  userMealPlans,
  setUserMealPlans,
}) {
  function handleSelect(recipe_id, meal_plan_id) {
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
      .then((recipe) =>
        setUserMealPlans((currentMealPlans) =>
          currentMealPlans?.map((mealPlan) => {
            console.log("before conditional");
            console.log(typeof mealPlan.id.toString());
            console.log(typeof meal_plan_id);
            if (mealPlan.id.toString() === meal_plan_id) {
              console.log("after conditional");
              const updatedRecipes = mealPlan.recipes;
              console.log("updatedRecipes:");
              console.log(updatedRecipes);
              updatedRecipes.push(recipe);
              return { ...mealPlan, recipes: updatedRecipes };
            } else {
              return mealPlan;
            }
          })
        )
      );
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
