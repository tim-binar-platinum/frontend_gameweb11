import styles from "../../../styles/Game/Round.module.css";

const Round = ({ userSelection, round }) => {
  return (
    <h1 className={styles.round}>
      {userSelection === "" ? "Round:0" : `Round: ${round}`}
    </h1>
  );
};

export default Round;
