import settings from "./configs/game";
import styles from "../../../styles/Game/Title.module.css";

const Title = () => {
  return <h1 className={styles.title}>{settings.gameName}</h1>;
};

export default Title;
