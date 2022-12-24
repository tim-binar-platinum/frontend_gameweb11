/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable indent */

import React, { useState, useEffect } from "react";
import Title from "./components/Game/Title";
import Round from "./components/Game/Round";
import Playground from "./components/Game/Playground";
import Profile from "./components/Game/Profile";
import User from "./components/Game/User";
import Choice from "./components/Game/Choice";
import Computer from "./components/Game/Computer";
import Score from "./components/Game/Score";
import Message from "./components/Game/Message";
import Reset from "./components/Game/Reset";
import { settings } from "../configs/game";
import axiosConfig from "./api/axiosConfig";
import rock from "../public/Game/batu.png";
import paper from "../public/Game/kertas.png";
import scissors from "../public/Game/gunting.png";

import styles from "../styles/Game/GameSuit.module.css";

export default function GameDetailPages() {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  let [game, setGame] = useState({
    userSelection: "",
    botSelection: "",
    round: 0,
    userScore: 0,
    botScore: 0,
    message: "",
  });
  const reset = () => {
    setGame({
      ...game,
      userSelection: "",
      botSelection: "",
      round: 0,
      userScore: 0,
      botScore: 0,
      message: "",
    });
  };
  const { winMessage, tieMessage, lostMessage, winTarget } = settings;
  const { botScore, userScore } = game;
  let config;

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("token"));
    if (item) {
      config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      setToken(item);
    }
  });

  console.log("ini token", token);

  const userData = async () => {
    console.log("ini config", config);
    const { data } = await axiosConfig.get("/users/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUser(data.data);
  };
  useEffect(() => {
    if (!token) {
      return;
    } else {
      userData();
    }
  }, [token]);

  console.log("ini user", user);
  const play = async (e) => {
    if (botScore < winTarget) {
      const userSelection = e.target.parentNode.getAttribute("value");
      const botSelection = ["Rock", "Paper", "Scissors"][
        Math.floor(Math.random() * 3)
      ];

      userSelection === botSelection
        ? setGame({
            ...(game.message = tieMessage),
            ...(await axiosConfig.post("/game", { status: "tie" }, config)),
            ...userData(),
          })
        : (userSelection === "Rock" && botSelection === "Scissors") ||
          (userSelection === "Paper" && botSelection === "Rock") ||
          (userSelection === "Scissors" && botSelection === "Paper")
        ? setGame({
            ...(game.userScore += 1),
            ...(game.message = winMessage),
            ...(await axiosConfig.post("/game", { status: "win" }, config)),
            ...userData(),
          })
        : setGame({
            ...(game.botScore += 1),
            ...(game.message = lostMessage),
            ...(await axiosConfig.post("/game", { status: "lose" }, config)),
            ...userData(),
          });

      setGame({
        ...game,
        round: (game.round += 1),
        userSelection,
        botSelection,
      });
    }
  };
  if (user == undefined) {
    return <div>loading</div>;
  }
  return (
    <div id={styles.suit} className={styles.gamePages}>
      <Title />
      <Round {...game} />
      <Playground>
        <Profile>
          <User {...game} userName={user?.username} userPoints={user?.points}>
            <Choice {...game} value="Rock" onClick={play} choiceIcon={rock} />
            <Choice {...game} value="Paper" onClick={play} choiceIcon={paper} />
            <Choice
              {...game}
              value="Scissors"
              onClick={play}
              choiceIcon={scissors}
            />
          </User>
          <Score score={userScore} />
        </Profile>
        <Message {...game} />
        <Profile>
          <Computer
            {...game}
            rockIcon={rock}
            paperIcon={paper}
            scissorsIcon={scissors}
          />
          <Score score={botScore} />
        </Profile>
      </Playground>
      <Reset {...game} onClick={reset} />
    </div>
  );
}