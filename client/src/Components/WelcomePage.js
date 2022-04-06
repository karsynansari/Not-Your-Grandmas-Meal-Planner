import React from 'react'
import Login from './Login';


function WelcomePage({onLogin}) {
  return (
    <>
    
      <div>WelcomePage</div>
      <Login onLogin={onLogin}/>
    </>
  );
}

export default WelcomePage