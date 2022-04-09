import React from "react";

function RecipeCard({ recipe, setRecipeCardClicked, setClickedRecipe}) {
  const { id, title, image, meal_type, serving, prep_time, cook_time } = recipe;

  //make sure you understand why this works.
  //currently, state is updating when a card is clicked. 
function handleRecipeCardclick() {
setRecipeCardClicked((value) => !value)
setClickedRecipe(recipe)
}

  return (
    <li className="card" onClick={handleRecipeCardclick}>
      <img src={image} alt={title}></img>
      <h4>{title}</h4>
      <p>Meal: {meal_type}</p>
      <p>Servings: {serving}</p>
      <p>Cook time: {cook_time}</p>
      <p>Prep time: {prep_time}</p>
      <button>Add to meal plan</button>
    </li>
  );
}

export default RecipeCard;
