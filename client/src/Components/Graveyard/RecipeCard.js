// import React from "react";
// import { Container } from "react-bootstrap";
// import { Dropdown } from "react-bootstrap";

// function RecipeCard({
//   recipe,
//   setRecipeCardClicked,
//   setClickedRecipe,
//   userMealPlans,
// }) {
//   const { id, title, image, meal_type, serving, prep_time, cook_time } = recipe;
//   function handleRecipeCardclick() {
//     setRecipeCardClicked((value) => !value);
//     setClickedRecipe(recipe);
//   }

//   function handleSelect(e) {
//     let addRecipetoMealPlan = {
//       recipe_id: id,
//       meal_plan_id: e,
//     };
//     console.log(addRecipetoMealPlan);
//     fetch("/recipe_meal_plans", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(addRecipetoMealPlan),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   }

//   return (
//     <Container className="modal-body">
//       <li>
//         <img onClick={handleRecipeCardclick} src={image} alt={title}></img>
//         <h4 className="card-title">{title}</h4>
//         <div className="card-body">
//           <p>Meal: {meal_type}</p>
//           <p>Servings: {serving}</p>
//           <p>Cook time: {cook_time}</p>
//           <p>Prep time: {prep_time}</p>
//         </div>
//         <Dropdown onSelect={handleSelect}>
//           <Dropdown.Toggle variant="success" id="dropdown-basic">
//             Add to Meal Plan
//           </Dropdown.Toggle>
//           <Dropdown.Menu>
//             {userMealPlans?.map((mealPlan) => (
//               <Dropdown.Item key={Math.random()} eventKey={mealPlan.id}>
//                 {mealPlan.title}
//               </Dropdown.Item>
//             ))}
//           </Dropdown.Menu>
//         </Dropdown>
//       </li>
//     </Container>
//   );
// }

// export default RecipeCard;
