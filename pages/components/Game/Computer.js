/* eslint-disable indent */
import { settings } from "./configs/game";
import styles from "../../../styles/Game/Computer.module.css";
import Image from "next/image";

const Computer = ({
  botScore,
  userSelection,
  botSelection,
  rockIcon,
  paperIcon,
  scissorsIcon,
}) => {
  return (
    <div className={styles.computerCard}>
      <h1>Computer</h1>
      {botScore < settings.winTarget ? (
        userSelection === "" ? (
          <h3 className={styles.waitingMessage}>{settings.waitingMessage}</h3>
        ) : (
          <>
            <Image
              src={
                botSelection === "Rock"
                  ? rockIcon
                  : botSelection === "Paper"
                  ? // eslint-disable-next-line indent
                    paperIcon
                  : scissorsIcon
              }
              alt="icon"
            />
            <h3>bot selected: {botSelection}</h3>
          </>
        )
      ) : (
        <>
          <h3>Victory!</h3>
        </>
      )}
    </div>
  );
};

export default Computer;
