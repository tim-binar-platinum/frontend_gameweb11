
import React from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className="container pt-3">
          <div className="row">
            <div className="col col-md-12 col-lg-4 d-flex">
              <img
                id="menubar-icon"
                src="menubar.svg"
                alt=""
                className="img-fluid"
              />
              <h1>
                <Link href="/">Last of Game</Link>
              </h1>
            </div>
            <div id="menu" className="col-8 d-flex text-uppercase pl-5 pr-3">
              <ul className="d-lg-flex d-md-block justify-content-between">
                <Link href="/about">about</Link>
                <Link href="/game-list">game list</Link>
                <Link href="/login">login</Link>
                <Link href="/register">register</Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
