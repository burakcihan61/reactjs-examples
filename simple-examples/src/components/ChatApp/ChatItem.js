import React from "react";
import styles from "./styles.module.css";

const ChatItem = ({ item }) => {
  return (
    <div className={styles.chatItem}>
      <div>{item.message}</div>
    </div>
  );
};

export default ChatItem;
