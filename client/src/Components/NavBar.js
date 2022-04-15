import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import {Container} from "react-bootstrap"

function NavBar({ onLogout, user }) {
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
    }).then(() => onLogout(null));
  }

  return (
    <>
      <div>
        <Navbar bg="navBar" className="nav-bar">
          <header>
            <Button onClick={handleLogout}>Log out</Button>
          </header>

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
          <Container className="nav-bar">
            Hello {user?.username}, here's your foodspiration
            <div className="nav-bar-img">
              <img src={foodImage.image}></img>
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar;
