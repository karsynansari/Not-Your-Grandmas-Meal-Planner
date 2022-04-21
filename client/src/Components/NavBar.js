import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

function NavBar({ onLogout, user, setUserMealPlans }) {
const [foodImage, setFoodImage] = useState({})
console.log(foodImage)
  useEffect(() => {
    fetch("https://foodish-api.herokuapp.com/api/")
      .then((response) => response.json())
      .then((data) => setFoodImage(data));
      
  }, [user]);

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      onLogout(null)
      setUserMealPlans([])
      })
  }

  return (
    <>
      <div>
        <Navbar bg="navBar">
          <div className="nav-links">
            <Button onClick={handleLogout}>Log out</Button>
            <NavLink
              className="nav-bar-link"
              exact
              activeClassName="active"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="nav-bar-link"
              exact
              activeClassName="active"
              to="meal_plans"
            >
              Meal Plans
            </NavLink>
            <NavLink
              className="nav-bar-link"
              exact
              activeClassName="active"
              to="/add_recipe"
            >
              Add Recipe
            </NavLink>
              Hello {user?.username}, here's your foodspiration
              <img src={foodImage.image}></img>
          </div>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar;
