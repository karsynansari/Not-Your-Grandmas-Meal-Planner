import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import {Container} from "react-bootstrap"

function NavBar({ onLogout, user }) {
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
        </Navbar>
        <Container className="nav-bar">Hello {user?.username}</Container>
      </div>
    </>
  );
}

export default NavBar;
