import React, {useState} from 'react'
import {Container} from "react-bootstrap"
import {Button} from "react-bootstrap"

function SignUp({onLogin}) {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); 
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((response) => response.json())
      .then(onLogin);
  }
  return (
    <div>
      <Container>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input
            type="password"
            id="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </Container>
    </div>
  );
}

export default SignUp