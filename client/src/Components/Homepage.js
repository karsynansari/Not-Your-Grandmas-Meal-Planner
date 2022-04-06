import React from 'react'
import NavBar from "./NavBar";

function Homepage({user, onLogout}) {
  console.log(user)
  return (
    <>
      <NavBar onLogout={onLogout} user={user} />
      <div>Homepage</div>
    </>
  );
}

export default Homepage