import React, {useState, useEffect} from 'react'
import NavBar from "./NavBar";
import RecipeCardContainer from './RecipeCardContainer';

function Homepage({user, onLogout}) {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/recipes")
    .then((response) => response.json())
    .then((data) => console.log(data))
  }, [])
  return (
    <>
      <NavBar onLogout={onLogout} user={user} />
      <div>Homepage</div>
    </>
  );
}

export default Homepage