import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import RecipeCard from "./RecipeCard";
import { Button } from "react-bootstrap";

function EachMealPlan({
  eachPlan,
  setClickedRecipe,
  setRecipeCardClicked,
  setUserMealPlans,
}) {
  const [deletedMealPlanRecipe, setDeletedMealPlanRecipe] = useState({
  });

  console.log(deletedMealPlanRecipe);

  // if (deletedMealPlanRecipe ==! {}) {
  //   fetch(
  //     `/recipe_meal_plans/${deletedMealPlanRecipe.recipe_id}/${deletedMealPlanRecipe.meal_plan_id}`,
  //     {
  //       method: "DELETE",
  //     }
  //   );
  // } 
  const recipesArr = eachPlan.recipes?.map((recipe) => (
    <Card
      onClick={() =>
        setDeletedMealPlanRecipe((currentmealplanrecipe) => ({
          ...currentmealplanrecipe,
          recipe_id: recipe.id,
          meal_plan_id: eachPlan.id,
        })) 
      }
      style={{ width: "12rem" }}
      key={Math.random()}
    >
      <RecipeCard
        recipe={recipe}
        setRecipeCardClicked={setRecipeCardClicked}
        setClickedRecipe={setClickedRecipe}
      />
    </Card>
  ));

  function handleDelete() {
    console.log("click!", eachPlan.id);
    fetch(`/meal_plans/${eachPlan.id}`, {
      method: "DELETE",
    });

    setUserMealPlans((currentMealPlans) =>
      currentMealPlans.filter((oneMealPlan) => oneMealPlan.id !== eachPlan.id)
    );
  }

  return (
    <Container>
      <Button onClick={handleDelete}>Delete Meal Plan</Button>
      <div>EachMealPlan</div>
      <p>Title: {eachPlan.title} </p>
      <ul className="cards">{recipesArr}</ul>
    </Container>
  );
}

export default EachMealPlan;
