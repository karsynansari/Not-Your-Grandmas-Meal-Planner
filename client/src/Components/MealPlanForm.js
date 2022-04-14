import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

function MealPlanForm({ user, setUserMealPlans }) {
  // console.log(user.id);
  const newMealPlanObj = {
    title: " ",
    user_id: user?.id,
  };
  const [newMealPlan, setNewMealPlan] = useState(newMealPlanObj);

  function handleChange(e) {
    setNewMealPlan((newMealPlanState) => ({
      ...newMealPlanState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    newMealPlan.user_id = user.id;
    fetch("/meal_plans", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMealPlan),
    })
      .then((response) => response.json())
      //Posting to database, but need refresh to get new meal plan to render. need to fix. 
      .then((data) => setUserMealPlans((currentMealPlans) => [...currentMealPlans, data]));
      setNewMealPlan(newMealPlanObj)
  }
  return (
    <Container>
      <p>Add a Meal Plan</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="meal_plan"
          name="title"
          value={newMealPlan.title}
          onChange={handleChange}
        />
        <Button type="submit">Add Meal Plan</Button>
      </form>
    </Container>
  );
}

export default MealPlanForm;
