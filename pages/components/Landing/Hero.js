import React from "react";
import {
  Container, Row, Col, Button,
} from "react-bootstrap";
import "animate.css";

function Hero() {
  return (
    <div className="hero min-vh-100 w-100" id="home">
      <div>
        <Container className="text-center d-flex justify-content-center align-items-center mt-100">
          <Row>
            <Col>
              <div>
                <h1 className="text-white text-center fs-1 animate__animated animate__fadeInUp">
                  THE POPULER WEB GAME IN THE WORLD, EASY TO JOIN AND PLAY GAME
                  FROM YOUR DEVICE, ANYWHERE AND ANYTIME.
                </h1>
              </div>
              <div className="mt-4 text-center animate__animated animate__fadeInUp">
                <Button type="Button" class="btn btn-primary btn-lg">
                  Play Games
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Hero;
