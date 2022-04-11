import React from 'react'
import MealPlanForm from './MealPlanForm'
import EachMealPlan from './EachMealPlan';
import {Card} from "react-bootstrap"

function MealPlanPage({user}) {

const userMealPlansArr = user?.meal_plans.map((mealPlan) => (mealPlan))
console.log(userMealPlansArr)
const eachMealPlan = userMealPlansArr.map((eachPlan) => (
  <Card style={{ width: "50rem" }}>
    <EachMealPlan eachPlan={eachPlan} />
  </Card>
));
  return (
    <>
    <ul>{eachMealPlan}</ul>
      <div>MealPlanPage</div>
      <MealPlanForm />
     
    </>
  );
}

export default MealPlanPage