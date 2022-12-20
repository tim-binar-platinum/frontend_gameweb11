import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Service() {
  return (
    <div className="service min-vh-50 d-flex align-items-center" id="service">
      <Container data-aos="fade-up">
        <Row>
          <Col>
            <h2 className="text-center fw-bold mb-5">
              Different from other web games
            </h2>
          </Col>
        </Row>
        <Row className="mb-5 row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
          <Col className="text-center py-5 px-3">
            <i className="fa-solid fa-coins fs-3 mb-4" />
            <h3 className="fw-bold">In-App Purchase</h3>
            <p>You can customize your avatar and many things.</p>
          </Col>
          <Col className="text-center py-5 px-3">
            <i className="fa-solid fa-award fs-3 mb-4" />
            <h3 className="fw-bold">Trophy Systems</h3>
            <p>Share your achievment to your social media.</p>
          </Col>
          <Col className="text-center py-5 px-3">
            <i className="fa-solid fa-gamepad fs-3 mb-4" />
            <h3 className="fw-bold">Game Pass</h3>
            <p>Enjoy free Perks including in-game add-ons.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Service;
