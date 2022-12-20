
import React from "react";
import "../styles/landing.css";
import { Navbar } from "reactstrap";
import art from "../public/image/landingpage-art.png";

function HomePage() {
  return (
    <div>
      <Navbar>
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
                <a className="color">Last of Game</a>
              </h1>
            </div>
            <div id="menu" className="col-8 text-uppercase pt-2 pl-5 pr-5">
              <ul className="d-lg-flex d-md-block justify-content-between">
                <li>About</li>
                <li>Game List</li>
                <li>Profile</li>
                <li>Score</li>
              </ul>
            </div>
          </div>
        </div>
      </Navbar>
      <aside>
        <div className="container pt-5">
          <div className="row justify-content-between">
            <div className="col col-lg-6 col-md-12">
              <p>
                THE POPULER GAME WEBSITE IN THE WORLD, EASY TO JOIN AND PLAY
                GAME FROM YOUR DEVICE
              </p>
              <button className="rounded-5 btn-lg">PLAY NOW</button>
            </div>
            <div id="art-game" className="col col-1 col-lg-5">
              <img className="img-fluid pt-5" src={art} alt="" />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default HomePage;
