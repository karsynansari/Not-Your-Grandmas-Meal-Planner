import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {Container} from "react-bootstrap"; 
import {Dropdown} from "react-bootstrap"
 
function ContributeRecipePage() {
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);
 
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { Step: "", Instruction: "" }]);
  };
 
  return (
    <div>
      <Container>
        <Form>
          <input
            placeholder="Recipe title"
            type="text"
            id="recipe_title"
            name="title"
            value=""
          />
          <input
            placeholder="Cuisine"
            type="text"
            id="cuisine"
            name="cuisine"
            value=""
          />
          <input
            placeholder="Servings"
            type="text"
            id="servings"
            name="serving"
            value=""
          />
          <input
            placeholder="Prep time"
            type="text"
            id="prep-time"
            name="prep_time"
            value=""
          />
          <input
            placeholder="Cook time"
            type="text"
            id="cook-time"
            name="cook_time"
            value=""
          />
          <input
            placeholder="Recipe image"
            type="text"
            id="image"
            name="image"
            value=""
          />
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Meal Type
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="Breakfast">Breakfast</Dropdown.Item>
              <Dropdown.Item eventKey="Lunch">Lunch</Dropdown.Item>
              <Dropdown.Item eventKey="Dinner">Dinner</Dropdown.Item>
              <Dropdown.Item eventKey="Snack">Snack</Dropdown.Item>
              <Dropdown.Item eventKey="Desert">Desert</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {inputList.map((x, i) => {
            return (
              <div>
                <p>Directions</p>
                <input
                  name="step"
                  placeholder="Enter Step #"
                  value={x.Step}
                  onChange={(e) => handleInputChange(e, i)}
                />
                <input
                  name="instruction"
                  placeholder="Enter Instruction"
                  value={x.Instruction}
                  onChange={(e) => handleInputChange(e, i)}
                />

                <div>
                  {inputList.length !== 1 && (
                    <button
                      className="mr10"
                      onClick={() => handleRemoveClick(i)}
                    >
                      -
                    </button>
                  )}
                  {inputList.length - 1 === i && (
                    <button onClick={handleAddClick}>+</button>
                  )}
                </div>
              </div>
            );
          })}
          
        </Form>
      </Container>
    </div>
  );
}

export default ContributeRecipePage