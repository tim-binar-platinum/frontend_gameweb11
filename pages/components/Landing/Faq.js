import React from "react";
import {
  Container, Row, Col, Accordion,
} from "react-bootstrap";

function Faq() {
  return (
    <div className="faq" id="faq">
      <Container data-aos="fade-up">
        <Row className="mb-3">
          <Col>
            <h2 className="text-center fw-bold">
              Frequently Answer & Question
            </h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-md-2 row-cols-1 g-4 mb-5 fs-3">
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Cara Bermain?</Accordion.Header>
                <Accordion.Body>
                  Apakah anda sudah membuat akun? Jika ya silahkan klik login
                  dan web games sudah bisa dimainkan. Jika belum memiliki akun
                  harap membuat dahulu dengan meng-klik register.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Apakah untuk bermain games memerlukan internet?
                </Accordion.Header>
                <Accordion.Body>
                  Ya, untuk bermain games memerlukan akses internet.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Bagaimana dengan fitur yang disediakan?
                </Accordion.Header>
                <Accordion.Body>
                  Kami menyediakan fitur Leaderboard dan bisa dishare ke akun
                  sosial media anda dan tunggu untuk fitur - fitur lainnya.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Faq;
