import React from "react";
import MealPlanForm from "./MealPlanForm";
import EachMealPlan from "./EachMealPlan";
import { Card } from "react-bootstrap";

function MealPlanPage({ user, setRecipeCardClicked, setClickedRecipe}) {
  const userMealPlansArr = user?.meal_plans.map((mealPlan) => mealPlan);
  const eachMealPlan = userMealPlansArr?.map((eachPlan) => (
    <Card style={{ width: "50rem" }}>
      <EachMealPlan
        eachPlan={eachPlan}
        setRecipeCardClicked={setRecipeCardClicked}
        setClickedRecipe={setClickedRecipe}
      />
    </Card>
  ));
  return (
    <>
      <MealPlanForm user={user} />
      <ul>{eachMealPlan}</ul>
      <div>MealPlanPage</div>
    </>
  );
}

export default MealPlanPage;
