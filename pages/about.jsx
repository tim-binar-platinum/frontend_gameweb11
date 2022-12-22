import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Accordion } from "react-bootstrap";
import ReactPlayer from "react-player";
import Navbar from "./components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <section className="section bg-light mt-5" id="about">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6} md={8}>
              <div className="title text-center mb-5">
                <h3 className="fs-1 text-warning">
                  Our Team
                </h3>
                <p className="text-muted fs-2">
                  This is Our Members from The Last of Game
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Row>
              <Col md={6}>
                <h6 className="text-dark fs-2 mb-3">
                  Ilfan Alwilludin
                </h6>
                <p className="text-muted fs-3">
                  Our tribal chief, the man behind the wheel of this project.
                </p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark fs-3 mb-3">
                  Emillo Kanz
                </h6>
                <p className="text-muted fs-3">
                  Our Backend Engineer, the man behind the structure from this project
                </p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark fs-2 mb-3">
                  Shafar Yulianto Nugroho
                </h6>
                <p className="text-muted fs-3">
                  Our Frontend Engineer, the man behind the structure and design of web pages
                  and making them as user-friendly as possible.
                </p>
              </Col>
            </Row>
          </Row>
        </Container>
      </section>
      <Container>
        <Row className="row-cols-lg-2 row-cols-md-2 row-cols-1 g-4 mb-5 fs-3">
          <Col>
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  History our games
                </Accordion.Header>
                <Accordion.Body>
                  <ReactPlayer url="https://www.youtube.com/watch?v=dvoy3wCjdEY" width="100%" />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
