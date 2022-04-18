import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {Container} from "react-bootstrap"; 
import {Dropdown} from "react-bootstrap"
import {Button} from "react-bootstrap"
 
function ContributeRecipePage() {

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
          <Button>Submit Recipe</Button>
        </Form>
      </Container>
    </div>
  );
}

export default ContributeRecipePage