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
        <div className="page-title">
          <Row>
            <h1>Your Meal Planner</h1>
          </Row>
          <Row>
            <h3>Log In or Sign Up to Get Started </h3>
          </Row>
        </div>
        <Container className="loginsignupcardscontainer">
          <div className="vertical-center">
            <Row>
              <Col >
                <Card
                  className="login-signup"
                  style={{ width: "18rem", height: "90%" }}
                >
                  <Login onLogin={onLogin} />
                </Card>
              </Col>
              <Col >
                <Card
                  className="login-signup"
                  style={{ width: "18rem", height: "90%" }}
                >
                  <SignUp onLogin={onLogin} />
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default WelcomePage;
