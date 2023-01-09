import React from "react";
import Container from "./components/Container";

import { ThemeProvider } from "./ContextAPI/ThemeContext";
import { UserProvider } from "./ContextAPI/UserContext";
import { TodoProvider } from "./ContextAPI/TodoContext";

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <TodoProvider>
          <Container />
        </TodoProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
