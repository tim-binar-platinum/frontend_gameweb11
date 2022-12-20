import { settings } from "./configs/game";
import styles from "../../../styles/Game/User.module.css";

export const User = ({ userScore, userSelection, children }) => {
  return (
    <div className={styles.userCard}>
      <h1>{settings.userName}</h1>
      {userScore < settings.winTarget ? (
        <>
          <div className={styles.choiceGrid}>{children}</div>
          <h3>
            {userSelection === ""
              ? "Pick one!"
              : `Your choice: ${userSelection}`}
          </h3>
        </>
      ) : (
        <>
          <h3>Victory Royale!</h3>
        </>
      )}
    </div>
  );
};
