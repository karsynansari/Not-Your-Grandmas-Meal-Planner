import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import NavBar from "./NavBar";
import MealPlanPage from "./MealPlanPage";
import RecipeModal from "./RecipeModal";
import ContributeRecipePage from "./ContributeRecipePage";

function Header({ user, onLogout, userMealPlans, setUserMealPlans, setUserRecipeMealPlans }) {
  const [recipes, setRecipes] = useState([]);
  const [recipeCardClicked, setRecipeCardClicked] = useState(false);
  const [clickedRecipe, setClickedRecipe] = useState({});
  
  console.log(userMealPlans)
  // const [userRecipeMealPlans, setUserRecipeMealPlans] = useState([])

  console.log(userMealPlans);
  useEffect(() => {
    fetch("http://localhost:4000/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <>
      <NavBar onLogout={onLogout} user={user} />
      {recipeCardClicked ? (
        <RecipeModal
          setRecipeCardClicked={setRecipeCardClicked}
          clickedRecipe={clickedRecipe}
        />
      ) : null}
      <Switch>
        <Route exact path="/meal_plans">
          <MealPlanPage
            user={user}
            userMealPlans={userMealPlans}
            setUserMealPlans={setUserMealPlans}
            setUser={onLogout}
            setRecipeCardClicked={setRecipeCardClicked}
            setClickedRecipe={setClickedRecipe}
          />
        </Route>
        <Route exact path="/add_recipe">
          <ContributeRecipePage user={user} setRecipes={setRecipes} />
        </Route>
        <Route exact path="/">
          <Homepage
            user={user}
            userMealPlans={userMealPlans}
            onLogout={onLogout}
            recipes={recipes}
            setRecipeCardClicked={setRecipeCardClicked}
            setClickedRecipe={setClickedRecipe}
            setUserRecipeMealPlans={setUserRecipeMealPlans}
            setRecipes={setRecipes}
          />
        </Route>
      </Switch>
    </>
  );
}

export default Header;
