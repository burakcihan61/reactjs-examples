import React from "react";
import { ChatProvider } from "./ChatContext";
import Container from "./Container";

const App = () => {
  return (
    <ChatProvider>
      <Container />
    </ChatProvider>
  );
};

export default App;
