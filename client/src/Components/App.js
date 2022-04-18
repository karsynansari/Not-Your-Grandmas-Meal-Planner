import React, {useState, useEffect} from "react"
import WelcomePage from "./WelcomePage";
import Header from "./Header";
import '../App.css';

function App() {
  const [user, setUser] = useState(null);
  const [userMealPlans, setUserMealPlans] = useState([]);
  const [userRecipeMealPlans, setUserRecipeMealPlans] = useState([]); 
  console.log(userMealPlans);

console.log(userRecipeMealPlans)
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((theuser) => {
          setUser(theuser);
          setUserMealPlans(theuser?.meal_plans);
        });
        
      } else {
        response.json().then((theerror) => console.log(theerror));
      }
    });
  }, []);

  useEffect(()=> {
const userRecipeMealPlansArr = userMealPlans.map(
  (eachmp) => (eachmp.recipe_meal_plans)); 
  setUserRecipeMealPlans(userRecipeMealPlansArr);
  }, [userMealPlans]); 

  return (
    <>
      {user == null ? (
        <WelcomePage onLogin={setUser} />
      ) : (
        <Header
          user={user}
          onLogout={setUser}
          userMealPlans={userMealPlans}
          setUserMealPlans={setUserMealPlans}
          setUserRecipeMealPlans={setUserRecipeMealPlans}
        />
      )}
    </>
  );
}

export default App;
