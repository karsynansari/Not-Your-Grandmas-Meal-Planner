import React, {useState, useEffect} from "react"
import WelcomePage from "./WelcomePage";
import Homepage from "./Homepage";
import '../App.css';

function App() {
const [user, setUser] = useState(null); 
console.log(user)
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user))
      }
    }); 
  }, []); 

  return (
    <>
      <Homepage user={user} onLogout={setUser}/>
      <WelcomePage onLogin={setUser} />
    </>
  );
  }

export default App;