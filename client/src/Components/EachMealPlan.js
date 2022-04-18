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
  recipeCardsOnMealPlan
}) {

  //need to get this to rerender on delete. need a piece of state.
  function handleRecipeCardDelete(recipe_id, meal_plan_id) {
    fetch(`/recipe_meal_plans/${recipe_id}/${meal_plan_id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      
    //   setUserRecipeMealPlans((currentMealPlans) =>
    //   currentMealPlans.filter((oneMealPlan) => oneMealPlan.id !== data.id)
    // ));
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
      <h3 className= "each-mp-title"> {eachPlan.title} </h3>
      <Button className = "mp-btn"onClick={handleDelete}>Delete This Meal Plan</Button>
      <ul className="cards">{recipesArr}</ul>
    </Container>
  );
}

export default EachMealPlan;
