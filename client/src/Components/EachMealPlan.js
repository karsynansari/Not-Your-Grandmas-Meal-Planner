import React from "react";
import { Container } from "react-bootstrap";
import {Card} from "react-bootstrap"
import RecipeCard from "./RecipeCard";

function EachMealPlan({ eachPlan, setClickedRecipe, setRecipeCardClicked }) {
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

  return (
    <Container>
      <div>EachMealPlan</div>
      <p>Title: {eachPlan.title} </p>
      <ul className="cards">{recipesArr}</ul>
    </Container>
  );
}

export default EachMealPlan;
