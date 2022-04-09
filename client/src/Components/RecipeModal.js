import React, {useState} from 'react'
import { Modal } from 'react-bootstrap'

function RecipeModal({setRecipeCardClicked, clickedRecipe}) {
  const [show, setShow] = useState(true);
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
          <h3>
          {clickedRecipe.title}
          </h3>
          <p>the rest goes here</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RecipeModal