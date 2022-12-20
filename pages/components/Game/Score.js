import styles from "../../../styles/Game/Score.module.css";

export const Score = ({ score }) => {
  return <h1 className={styles.score}>{score}</h1>;
};
