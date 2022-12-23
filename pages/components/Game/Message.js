import styles from "../../../styles/Game/Message.module.css";

const Message = ({ userSelection, message }) => {
  return (
    <div className={styles.messageBox}>
      <h2>{userSelection === "" ? "VS" : message}</h2>
    </div>
  );
};

export default Message;
