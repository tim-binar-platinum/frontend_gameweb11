import { settings } from "./configs/game";
import styles from "../../../styles/Game/Reset.module.css";

export const Reset = ({ onClick, userSelection, userScore, botScore }) => {
  return (
    userSelection !== "" && (
      <div onClick={onClick} className={styles.reset}>
        <h3>
          {userScore === settings.winTarget || botScore === settings.winTarget
            ? "Play again"
            : "Reset"}
        </h3>
      </div>
    )
  );
};
