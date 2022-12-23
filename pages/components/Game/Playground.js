import styles from "../../../styles/Game/Playground.module.css";

const Playground = ({ children }) => {
  return <div className={styles.playArea}>{children}</div>;
};

export default Playground;
