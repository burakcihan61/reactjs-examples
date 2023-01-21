import React, { useEffect } from "react";
import ChatForm from "./ChatForm";
import ChatList from "./ChatList";
import { init, subscribeChat } from "./socketApi";
import { useChat } from "./ChatContext";

const Container = () => {
  const { setMessages } = useChat();
  useEffect(() => {
    init();
    subscribeChat((message) => {
      setMessages((prev) => [...prev, { message }]);
    });
  }, []);
  return (
    <div className="App ">
      <ChatList />
      <ChatForm />
    </div>
  );
};

export default Container;
