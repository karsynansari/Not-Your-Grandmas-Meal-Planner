import React from 'react'
import MealPlanForm from './MealPlanForm'
import EachMealPlan from './EachMealPlan';

function MealPlanPage({user}) {
  console.log(user)
//   const userMealPlans = user.meal_plans.map((mealPlan) => console.log(mealPlan))
// console.log(userMealPlans)
  return (
    <>
      <div>MealPlanPage</div>
      <MealPlanForm />
      <EachMealPlan/>
    </>
  );
}

export default MealPlanPage