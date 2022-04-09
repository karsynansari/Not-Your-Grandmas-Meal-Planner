import React, {useState} from 'react'
import { Modal } from 'react-bootstrap'

function RecipeModal({setRecipeCardClicked, clickedRecipe}) {
  const [show, setShow] = useState(true);
 const recipeDirections = clickedRecipe.directions 
const eachDirection = recipeDirections.map((direction) => (direction.instructions))
console.log(eachDirection)

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
          <h3>
          {clickedRecipe.title}
          </h3>
          <li>Directions {eachDirection}</li>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RecipeModal