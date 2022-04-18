import React, { useState, useEffect } from "react";
import MealPlanForm from "./MealPlanForm";
import EachMealPlan from "./EachMealPlan";
import { Container } from "react-bootstrap";

function MealPlanPage({
  user,
  userMealPlans,
  setUserMealPlans,
  setRecipeCardClicked,
  setClickedRecipe,
}) {
  const [recipeCardsOnMealPlan, setRecipeCardsOnMealPlan] = useState(false);
  useEffect(() => setRecipeCardsOnMealPlan(true), []);
  const eachMealPlan = userMealPlans?.map((eachPlan) => (
    <Container className ="meal-plan-containers"style={{ width: "45rem" }} key={Math.random()}>
      <EachMealPlan
        key={Math.random()}
        setUserMealPlans={setUserMealPlans}
        eachPlan={eachPlan}
        setRecipeCardClicked={setRecipeCardClicked}
        setClickedRecipe={setClickedRecipe}
        userMealPlans={userMealPlans}
        recipeCardsOnMealPlan={recipeCardsOnMealPlan}
      />
    </Container>
  ));
  return (
    <>
      <h2>Your Meal Plans</h2>
      <MealPlanForm user={user} setUserMealPlans={setUserMealPlans} />
      <ul>{eachMealPlan}</ul>
    </>
  );
}

export default MealPlanPage;
