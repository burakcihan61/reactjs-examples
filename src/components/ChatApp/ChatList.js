import React from "react";
import styles from "./styles.module.css";
import { useChat } from "./ChatContext";
import ChatItem from "./ChatItem";

const ChatList = () => {
  const { messages } = useChat();

  return (
    <div className={styles.chatlist}>
      {messages.map((item, key) => {
        return <ChatItem key={key} item={item} />;
      })}
    </div>
  );
};

export default ChatList;
