import React from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import NewRecipeCard from "./NewRecipeCard";

function EachMealPlan({
  eachPlan,
  setClickedRecipe,
  setRecipeCardClicked,
  setUserMealPlans,
  userMealPlans,
  recipeCardsOnMealPlan,
}) {
  //need to get this to rerender on delete. need a piece of state.
  function handleRecipeCardDelete(recipe_id, meal_plan_id) {
    fetch(`/recipe_meal_plans/${recipe_id}/${meal_plan_id}`, {
      method: "DELETE",
    });
    setUserMealPlans((currentMealPlans) =>
      currentMealPlans.map((mealPlan) => {
        // if the mealPlan in the array is the meal plan you deleted recipe from
        if (mealPlan.id === meal_plan_id) {
          const updatedRecipes = mealPlan.recipes.filter(
            (recipe) => recipe.id !== recipe_id
          );
          return { ...mealPlan, recipes: updatedRecipes };
        } else {
          // didn't delete recipe from this mealPlan
          return mealPlan;
        }
      })
    );
  }

  const recipesArr = eachPlan.recipes?.map((recipe) => (
    <Card style={{ width: "12rem" }} key={Math.random()}>
      <NewRecipeCard
        recipe={recipe}
        setRecipeCardClicked={setRecipeCardClicked}
        setClickedRecipe={setClickedRecipe}
        handleRecipeCardDelete={handleRecipeCardDelete}
        userMealPlans={userMealPlans}
        eachPlan={eachPlan}
        recipeCardsOnMealPlan={recipeCardsOnMealPlan}
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
      <Container>
        <h3 className="each-mp-title"> {eachPlan.title} </h3>
        <Button className="mp-btn" onClick={handleDelete}>
          Delete This Meal Plan
        </Button>
      </Container>
      <ul className="cards">{recipesArr}</ul>
    </Container>
  );
}

export default EachMealPlan;
