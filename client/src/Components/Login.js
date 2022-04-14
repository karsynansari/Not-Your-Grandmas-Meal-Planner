import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null)


  function handleSubmit(e) {
    console.log(e)
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
       if (response.ok)  {
         response.json().then((user) => onLogin(user));
       } else {
        response.json().then((theerror) => setError(theerror));
       }
  })
}
  return (
    <div>
      <Container>
        <p>Log In</p>
        <form onSubmit={handleSubmit}>
          {error == null ? null : (
            <label className="errStyle">Username or Password {error.error}</label>
          )}
         <label htmlFor="username">Username:</label>
          <input
            type="text"
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
          <Button type="submit">Log In</Button>
        </form>
      </Container>
    </div>
  );
}

export default Login;
