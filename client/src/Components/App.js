import React, {useState, useEffect} from "react"
import WelcomePage from "./WelcomePage";
import Header from "./Header";
import '../App.css';

function App() {
  const userObject = 
    {
        "id": " ",
        "username": " ",
        "password_digest": " ",
        "meal_plans": [
          
        ]
    }
  
const [user, setUser] = useState(userObject); 
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((theuser) => setUser(theuser))
      } else {
        response.json().then((theerror) => console.log(theerror));
      }
    }); 
  }, []); 

  return (
    <>
      <Header user={user} onLogout={setUser} />
      <WelcomePage onLogin={setUser} />
    </>
  );
  }

export default App;
