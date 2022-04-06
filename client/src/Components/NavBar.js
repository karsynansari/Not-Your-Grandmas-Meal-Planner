import React from 'react'

function NavBar({onLogout, user}) {
  console.log(user)
   function handleLogout() {
     fetch("/logout", {
       method: "DELETE",
     }).then(() => onLogout());
   }
  return (
    <>
    <p>Nav Bar</p>
      <header>
        <button onClick={handleLogout}>Log out</button>
      </header>
    </>
  );
}

export default NavBar