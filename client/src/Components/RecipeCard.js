import React, { useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

function RecipeCard({
  recipe,
  setRecipeCardClicked,
  setClickedRecipe,
  userMealPlans,
}) {
  const { id, title, image, meal_type, serving, prep_time, cook_time } = recipe;
  const newRecipeMealPlanObj = {
    recipe_id: " ",
    meal_plan_id: "",
  };
  const [addRecipeToMealPlan, setAddRecipeToMealPlan] = useState(newRecipeMealPlanObj);
  console.log(addRecipeToMealPlan)

  //make sure you understand why this works.

  //currently, state is updating when a card is clicked.
  function handleRecipeCardclick() {
    setRecipeCardClicked((value) => !value);
    setClickedRecipe(recipe);
  }

  function handleSelect(e) {
    setAddRecipeToMealPlan((newRecipeMealPlanState) => ({
      ...newRecipeMealPlanState,
      recipe_id: recipe.id,
      meal_plan_id: e,
    }));
  }
// useEffect(() => {
// console.log("clicked");
// fetch("/recipe_meal_plans", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(addRecipeToMealPlan),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// }, [addRecipeToMealPlan])


  return (
    <Container>
      <li>
        <img onClick={handleRecipeCardclick} src={image} alt={title}></img>
        <h4>{title}</h4>
        <p>Meal: {meal_type}</p>
        <p>Servings: {serving}</p>
        <p>Cook time: {cook_time}</p>
        <p>Prep time: {prep_time}</p>
        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Add to Meal Plan
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {userMealPlans?.map((mealPlan) => (
              <Dropdown.Item eventKey={mealPlan.id}>
                {mealPlan.title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </li>
    </Container>
  );
}

export default RecipeCard;
