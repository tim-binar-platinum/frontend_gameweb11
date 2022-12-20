
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Link from "next/link";
import Image from "next/image";
import styles from "../styles/game-list.module.css";
import Gallery1 from "../public/image/suit.jpg";
import Gallery2 from "../public/image/tictactoe.jpg";
import Gallery3 from "../public/image/dadu.jpg";
import Gallery4 from "../public/image/dummy.jpg";
import Gallery5 from "../public/image/typing.jpg";
import Gallery6 from "../public/image/strategy.jpg";

function Gallery() {
  return (
    <div className="gallery min-vh-100 d-flex align-items-center" id={styles.gallery}>
      <Container>
        <Row
          className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4"
          data-aos="fade-right"
        >
          <Col>
            <Link href="/game-suit">
              <Image
                src={Gallery1}
                alt="game suit"
                className="w-100"
                height={200}
              />
              <p className="text-center text-white fw-bold fs-1">Rock Paper Scisor</p>
            </Link>
          </Col>
          <Col>
            <Image
              src={Gallery2}
              alt="https://playtictactoe.org/"
              className="w-100"
              height={200}
            />
            <p className="text-center text-white fw-bold fs-1">Tic Tac Toe</p>
          </Col>
          <Col>
            <Image
              src={Gallery3}
              alt="/"
              className="w-100"
              height={200}
            />
            <p className="text-center text-white fw-bold fs-1">Tebak Dadu</p>
          </Col>
          <Col>
            <Image
              src={Gallery4}
              alt="/"
              className="w-100"
              height={200}
            />
            <p className="text-center text-white fw-bold fs-1">Kick Dummy</p>
          </Col>
          <Col>
            <Image
              src={Gallery5}
              alt="/"
              className="w-100"
              height={200}
            />
            <p className="text-center text-white fw-bold fs-1">Type Attack</p>
          </Col>
          <Col>
            <Image
              src={Gallery6}
              alt="/"
              className="w-100"
              height={200}
            />
            <p className="text-center text-white fw-bold fs-1">Punish & Enslave</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Gallery;
