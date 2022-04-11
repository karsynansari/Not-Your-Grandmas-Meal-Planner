import React from 'react'
import {NavLink} from "react-router-dom"
import {Button} from "react-bootstrap"

function NavBar({onLogout}) {
   function handleLogout() {
     fetch("/logout", {
       method: "DELETE",
     }).then(() => onLogout(null));
   }

   const linkStyles = {
     display: "inline-block",
     width: "50px",
     padding: "12px",
     margin: "0 6px 6px",
     background: "blue",
     textDecoration: "none",
     color: "white",
   };
  return (
    <>
      <p>Nav Bar</p>
      <header>
        <Button onClick={handleLogout}>Log out</Button>
      </header>
      <div>
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="meal_plans"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Meal Plans
        </NavLink>
        <NavLink
          to="/add_recipe"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Add Recipe
        </NavLink>
      </div>
    </>
  );
}

export default NavBar