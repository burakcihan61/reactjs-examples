import React from "react";
import Container from "./components/Container";

import { ThemeProvider } from "./ContextAPI/ThemeContext";
import { UserProvider } from "./ContextAPI/UserContext";

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <Container />
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
