import styles from "../../../styles/Game/Score.module.css";

const Score = ({ score }) => {
  return <h1 className={styles.score}>{score}</h1>;
};

export default Score;
