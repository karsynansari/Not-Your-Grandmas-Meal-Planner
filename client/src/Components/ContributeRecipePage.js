import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";

function ContributeRecipePage({ user, setRecipes }) {
  const newRecipeObj = {
    title: " ",
    cuisine: " ",
    image: " ",
    meal_type: " ",
    serving: "",
    prep_time: "",
    cook_time: "",
    user_id: user?.id,
  };
  const [newRecipe, setNewRecipe] = useState(newRecipeObj);

  function handleSelect(e) {
    setNewRecipe((currentRecipeState) => ({
      ...currentRecipeState,
      meal_type: e,
    }));
  }
  function handleChange(e) {
    console.log(e.target.value);
    setNewRecipe((currentRecipeState) => ({
      ...currentRecipeState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((response) => response.json())
      .then((data) =>
        setRecipes((existingRecipes) => [...existingRecipes, data])
      );
    setNewRecipe(newRecipeObj);
  }
  return (
    <div>
      <h2>Add a Recipe</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <input
            placeholder="Recipe Title"
            type="text"
            id="recipe_title"
            name="title"
            value={newRecipe.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <input
            placeholder="Cuisine"
            type="text"
            id="cuisine"
            name="cuisine"
            value={newRecipe.cuisine}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <input
            placeholder="Servings"
            type="text"
            id="servings"
            name="serving"
            value={newRecipe.serving}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <input
            placeholder="Prep time"
            type="text"
            id="prep-time"
            name="prep_time"
            value={newRecipe.prep_time}
            onChange={handleChange}
          />
        </Form.Group>
        <input
          placeholder="Cook time"
          type="text"
          id="cook-time"
          name="cook_time"
          value={newRecipe.cook_time}
          onChange={handleChange}
        />
        <Form.Group>
          <input
            placeholder="Recipe image"
            type="text"
            id="image"
            name="image"
            value={newRecipe.image}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Dropdown onSelect={(e) => handleSelect(e)}>
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
        </Form.Group>
        <Button type="submit">Submit Recipe</Button>
      </Form>
    </div>
  );
}

export default ContributeRecipePage;
