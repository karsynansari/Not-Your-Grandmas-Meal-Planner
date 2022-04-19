import React from "react";
import { Container } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function NewRecipeCard({
  recipe,
  setRecipeCardClicked,
  setClickedRecipe,
  userMealPlans,
  handleSelect,
  eachPlan,
  handleRecipeCardDelete,
  recipeCardsOnMealPlan
}) {
  console.log(recipeCardsOnMealPlan)
  const { id, title, image, meal_type, serving, prep_time, cook_time } = recipe;
  function handleRecipeCardclick() {
    setRecipeCardClicked((value) => !value);
    setClickedRecipe(recipe);
  }
  return (
    <Container className="modal-body">
      <li>
        <img onClick={handleRecipeCardclick} src={image} alt={title}></img>
        <h4 className="card-title">{title}</h4>
        <div className="card-body">
          <p>Meal: {meal_type}</p>
          <p>Servings: {serving}</p>
          <p>Cook time: {cook_time}</p>
          <p>Prep time: {prep_time}</p>
        </div>
        {recipeCardsOnMealPlan ? (
          <Button onClick={() => handleRecipeCardDelete(id, eachPlan.id)}>
            Remove Recipe From Meal Plan
          </Button>
        ) : (
          <Dropdown onSelect={(e) => handleSelect(id, e)}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Add to Meal Plan
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {userMealPlans?.map((mealPlan) => (
                <Dropdown.Item key={Math.random()} eventKey={mealPlan.id}>
                  {mealPlan.title}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        )}
      </li>
    </Container>
  );
}
