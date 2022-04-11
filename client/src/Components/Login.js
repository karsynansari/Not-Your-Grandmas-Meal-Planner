import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {Button} from "react-bootstrap"

function Login({ onLogin }) {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then((response) => response.json())
      .then((user) => onLogin(user));
  }
  return (
    <div>
      <Container>
            <p>Log In</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Button type="submit">Log In</Button>
            </form>
      </Container>
    </div>
  );
}

export default Login;
