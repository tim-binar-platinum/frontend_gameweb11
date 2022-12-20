
import React, { useState } from "react";

import axios from "axios";
import { Title } from "./components/Game/Title";
import { Round } from "./components/Game/Round";
import { Playground } from "./components/Game/Playground";
import { Profile } from "./components/Game/Profile";
import { User } from "./components/Game/User";
import { Choice } from "./components/Game/Choice";
import { Computer } from "./components/Game/Computer";
import { Score } from "./components/Game/Score";
import { Message } from "./components/Game/Message";
import { Reset } from "./components/Game/Reset";
import { settings } from "./components/Game/configs/game";

import rock from "../public/Game/batu.png";
import paper from "../public/Game/kertas.png";
import scissors from "../public/Game/gunting.png";

import styles from "../styles/Game/GameSuit.module.css";

export default function GameDetailPages() {
  const [game, setGame] = useState({
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

  const {
    winMessage, tieMessage, lostMessage, winTarget,
  } = settings;
  const { botScore, userScore } = game;

  const token = sessionStorage.getItem("accessToken");
  console.log(token);

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const play = async (e) => {
    if (botScore < winTarget) {
      const userSelection = e.target.parentNode.getAttribute("value");
      const botSelection = ["Rock", "Paper", "Scissors"][
        Math.floor(Math.random() * 3)
      ];

      userSelection === botSelection
        ? setGame({
          ...(game.message = tieMessage),
          ...(await axios.post(
            "http://103.181.143.76:4000/game",
            { status: "tie" },
            config,
          )),
        })
        : (userSelection === "Rock" && botSelection === "Scissors")
          || (userSelection === "Paper" && botSelection === "Rock")
          || (userSelection === "Scissors" && botSelection === "Paper")
          ? setGame({
            ...(game.userScore += 1),
            ...(game.message = winMessage),
            ...(await axios.post(
              "http://103.181.143.76:4000/game",
              { status: "win" },
              config,
            )),
          })
          : setGame({
            ...(game.botScore += 1),
            ...(game.message = lostMessage),
            ...(await axios.post(
              "http://103.181.143.76:4000/game",
              { status: "lose" },
              config,
            )),
          });

      setGame({
        ...game,
        round: (game.round += 1),
        userSelection,
        botSelection,
      });
    }
  };

  return (
    <div id={styles.suit} className={styles.gamePages}>
      <Title />
      <Round {...game} />
      <Playground>
        <Profile>
          <User {...game}>
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
