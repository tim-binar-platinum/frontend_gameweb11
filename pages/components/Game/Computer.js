import { settings } from "./configs/game";
import styles from "../../../styles/Game/Computer.module.css";

export const Computer = ({
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
            <img
              src={
                botSelection === "Rock"
                  ? rockIcon
                  : botSelection === "Paper"
                  ? paperIcon
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
