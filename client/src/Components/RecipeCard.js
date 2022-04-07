import React from 'react'

function RecipeCard({recipe}) {
  const {id, cuisine, title, image, meal_type, serving, prep_time, cook_time} = recipe
  return (
  
    <li className= 'card'> 
    <img src={image} alt={title}></img>
    <h4>{title}</h4>
    <p>Meal: {meal_type}</p>
    <p>Servings: {serving}</p>
    <p>Cook time: {cook_time}</p>
    <p>Prep time: {prep_time}</p>
    <button>Add to meal plan</button>
    </li>
  )
}

export default RecipeCard