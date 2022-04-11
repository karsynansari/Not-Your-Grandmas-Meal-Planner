import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";


function WelcomePage({ onLogin }) {
  return (
    <>
      <Container>
        <Row>
          <h1 className="page-title">Welcome Page</h1>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Login onLogin={onLogin} />
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <SignUp onLogin={onLogin} />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WelcomePage;
