import React, {useState} from 'react'
import { Modal } from 'react-bootstrap'

function RecipeModal({setRecipeCardClicked, clickedRecipe}) {
  const [show, setShow] = useState(true);
  const {id, cuisine, title, image, meal_type, serving, prep_time, cook_time} = clickedRecipe
  const recipeDirections = clickedRecipe.directions 
  const recipeIngredients = clickedRecipe.ingredients
  console.log(recipeIngredients)
  console.log(clickedRecipe)

  const handleClose = () => setShow(false);

  //this is making the recipe card show state change back to false when you close the modal. 
function handleUpdateRecipeCardClickedState()  {
setRecipeCardClicked((value) => !value);
}
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        onClick={handleUpdateRecipeCardClickedState}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img src={image} alt={title}></img>
          <h3>{title}</h3>
          <p>Cuisine: {cuisine}</p>
          <p>Course: {meal_type}</p>
          <p>Servings: {serving}</p>
          <p>Prep Time: {prep_time}</p>
          <p>Cook Time: {cook_time}</p>
          <p>Ingredients</p>
          {recipeIngredients.map((ingredient) => (
            <ul>
              {ingredient.quantity} {ingredient.measurement}{" "}
              {ingredient.each_ingredient}
            </ul>
          ))}
          <p>Directions</p>
          {recipeDirections.map((direction) => (
            <ul key={direction.id}>
              {direction.step}. {direction.instructions}
            </ul>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RecipeModal