import React from "react";
import MealPlanForm from "./MealPlanForm";
import EachMealPlan from "./EachMealPlan";
import { Card } from "react-bootstrap";

function MealPlanPage({ user, userMealPlans, setUserMealPlans, setRecipeCardClicked, setClickedRecipe}) {
  
  const eachMealPlan = userMealPlans?.map((eachPlan) => (
    <Card style={{ width: "50rem" }} key={Math.random()}>
      <EachMealPlan
        key={Math.random()}
        setUserMealPlans={setUserMealPlans}
        eachPlan={eachPlan}
        setRecipeCardClicked={setRecipeCardClicked}
        setClickedRecipe={setClickedRecipe}
        userMealPlans={userMealPlans}
      />
    </Card>
  ));
  return (
    <>
      <MealPlanForm user={user} setUserMealPlans={setUserMealPlans} />
      <ul>{eachMealPlan}</ul>
      <div>MealPlanPage</div>
    </>
  );
}

export default MealPlanPage;
