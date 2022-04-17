import React, {useState} from 'react'
import { Modal } from 'react-bootstrap'
import {Row} from "react-bootstrap"
import {Col} from "react-bootstrap"

function RecipeModal({setRecipeCardClicked, clickedRecipe}) {
  const [show, setShow] = useState(true);
  const {id, cuisine, title, image, meal_type, serving, prep_time, cook_time} = clickedRecipe
  const recipeDirections = clickedRecipe.directions 
  const recipeIngredients = clickedRecipe.ingredients

  const handleClose = () => setShow(false);

  //this is making the recipe card show state change back to false when you close the modal. 
function handleUpdateRecipeCardClickedState()  {
setRecipeCardClicked((value) => !value);
}
  return (
    <>
      <Modal
        className="modal"
        show={show}
        onHide={handleClose}
        onClick={handleUpdateRecipeCardClickedState}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="modal-body">
          <img className="modal-img" src={image} alt={title}></img>
          <h3 className="modal-title">{title}</h3>
          <div className="recipe-specs">
            <Col className='flex-container'>
                <p>Cuisine: {cuisine} | </p> 
                <p> Course: {meal_type} | </p>
                <p>Servings: {serving} | </p>
                <p>Prep Time: {prep_time} | </p>
                <p>Cook Time: {cook_time}</p>
            </Col>
          </div>
          <div className="recipe-ingredients">
            <h3>Ingredients</h3>
            {recipeIngredients.map((ingredient) => (
              <Row>
                <Col className="ingredients">
                  <ul key={ingredient.id}>
                    {ingredient.quantity} {ingredient.measurement}{" "}
                    {ingredient.each_ingredient} 
                  </ul>
                </Col>
              </Row>
            ))}
          </div>
          <div className="recipe-ingredients">
            <h3>Directions</h3>
            {recipeDirections.map((direction) => (
              <Row>
                <Col className="ingredients">
                  <ul key={direction.id}>
                    {direction.step}. {direction.instructions}
                  </ul>
                </Col>
              </Row>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RecipeModal