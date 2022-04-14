import React from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import RecipeCard from "./RecipeCard";
import { Button } from "react-bootstrap";

function EachMealPlan({ eachPlan, setClickedRecipe, setRecipeCardClicked, setUserMealPlans}) {

  const recipesArr = eachPlan.recipes?.map((recipe) => (
    <Card style={{ width: "12rem" }} key={Math.random()}>
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

    setUserMealPlans((currentMealPlans) => currentMealPlans.filter((oneMealPlan) => oneMealPlan.id !== eachPlan.id)); 
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
