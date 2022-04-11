import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

function RecipeCard({ recipe, setRecipeCardClicked, setClickedRecipe }) {
  const { id, title, image, meal_type, serving, prep_time, cook_time } = recipe;

  //make sure you understand why this works.
  //currently, state is updating when a card is clicked.
  function handleRecipeCardclick() {
    setRecipeCardClicked((value) => !value);
    setClickedRecipe(recipe);
  }

  return (
    <Container>
      <li>
        <img onClick={handleRecipeCardclick} src={image} alt={title}></img>
        <h4>{title}</h4>
            <p>Meal: {meal_type}</p>
          <p>Servings: {serving}</p>
          <p>Cook time: {cook_time}</p>
          <p>Prep time: {prep_time}</p>
        <Button>Add to meal plan</Button>
      </li>
    </Container>
  );
}

export default RecipeCard;
