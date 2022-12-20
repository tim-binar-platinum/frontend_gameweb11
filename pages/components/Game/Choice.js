import styles from "../../../styles/Game/Choice.module.css";
import Image from "next/image";

export const Choice = ({ value, choiceIcon, onClick }) => {
  return (
    <div classname={styles.choice} value={value} onClick={onClick}>
      <Image className={styles.choiceIcon} src={choiceIcon} alt="icon" />
    </div>
  );
};
