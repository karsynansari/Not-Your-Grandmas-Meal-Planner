import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import RecipeCardContainer from "./RecipeCardContainer";

function Homepage({ user, onLogout }) {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);

  useEffect(() => {
    fetch("http://localhost:4000/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <>
      <NavBar onLogout={onLogout} user={user} />
      <div>Homepage</div>
      <RecipeCardContainer recipes={recipes} />
    </>
  );
}

export default Homepage;
