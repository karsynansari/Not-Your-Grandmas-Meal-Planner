import React from 'react'
import {Route, Switch} from "react-router-dom"
import Homepage from './Homepage'
import NavBar from './NavBar';
import MealPlanPage from "./MealPlanPage";
import ContributeRecipePage from "./ContributeRecipePage";

function Header({user, onLogout}) {
  return (
    <>
      <div>Header</div>
      <NavBar onLogout={onLogout} user={user} />
      <Switch>
        <Route exact path="/meal_plans">
          <MealPlanPage />
        </Route>
        <Route exact path="/add_recipe">
          <ContributeRecipePage />
        </Route>
        <Route exact path="/">
          <Homepage user={user} onLogout={onLogout} />
        </Route>
      </Switch>
    </>
  );
}

export default Header