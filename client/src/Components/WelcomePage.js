import React from 'react'
import Login from './Login';
import SignUp from './SignUp'

function WelcomePage({onLogin}) {
  return (
    <>
    
      <div>WelcomePage</div>
      <Login onLogin={onLogin}/>
      <SignUp onLogin={onLogin}/>
    </>
  );
}

export default WelcomePage