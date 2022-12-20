import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook, FaTwitter, FaInstagram, FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer pb-3 pt-4">
      <Container data-aos="fade-right">
        <Row>
          <Col>
            <h3 className="fw-bold text-white">Last of Game</h3>
          </Col>
          <Col className="text-end">
            <a href="facebook.com" className="fs-1 text-white mx-lg-3">
              <FaFacebook />
            </a>
            <a
              href="twitter.com"
              className="fa-brands fa-twitter fs-1 text-white mx-lg-3"
            >
              <FaTwitter />
            </a>
            <a
              href="instagram.com"
              className="fa-brands fa-instagram fs-1 text-white mx-lg-3"
            >
              <FaInstagram />
            </a>
            <a
              href="youtube.com"
              className="fa-brands fa-youtube fs-1 text-white mx-lg-3"
            >
              <FaYoutube />
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-white-50 text-center">
              &copy; Copyright by Last of Game.inc
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
