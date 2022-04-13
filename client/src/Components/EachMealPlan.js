import React from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import RecipeCard from "./RecipeCard";
import { Button } from "react-bootstrap";

function EachMealPlan({ eachPlan, setClickedRecipe, setRecipeCardClicked}) {
  // console.log(eachPlan);

  const recipesArr = eachPlan.recipes?.map((recipe) => (
    <Card style={{ width: "12rem" }} key={recipe.id}>
      <RecipeCard
        recipe={recipe}
        setRecipeCardClicked={setRecipeCardClicked}
        setClickedRecipe={setClickedRecipe}
      />
    </Card>
  ));
//delete working but not resetting state. Need to figure this out. 
  function handleDelete() {
    console.log("click!", eachPlan.id);
    fetch(`/meal_plans/${eachPlan.id}`, {
      method: "DELETE",
    });
  
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
