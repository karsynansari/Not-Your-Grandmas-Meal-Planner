import React, {useState} from 'react'
import { Modal } from 'react-bootstrap'

function RecipeModal({setRecipeCardClicked}) {
  const [show, setShow] = useState(true);

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
          body
          </h3>
          <p>body</p>
          <p>body </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RecipeModal