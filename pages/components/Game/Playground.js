import styles from "../../../styles/Game/Playground.module.css";

export const Playground = ({ children }) => {
  return <div className={styles.playArea}>{children}</div>;
};
