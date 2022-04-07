import React, {useState} from 'react'

function SignUp({onLogin}) {
  const [username, setUsername] = useState(""); 

  function handleSubmit(e) {
    e.preventDefault(); 
    fetch("/users", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify ({
        username
      }),
    })
    .then((response) => response.json())
    .then(onLogin)
  }
  return (
    <div>
      <p>Sign Up</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id ="username"
          value= {username}
         onChange ={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp