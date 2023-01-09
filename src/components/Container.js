import React, { useContext } from "react";
import Button from "./Button";
import ButtonTheme from "./ButtonTheme";

import ThemeContext from "../ContextAPI/ThemeContext";
import UserContext from "../ContextAPI/UserContext";
import Profile from "./Profile";
import TodoContexExam from "./TodoContexExam";

const Container = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === "dark" ? theme : "light"}`}>
      <Button />
      <ButtonTheme />
      <hr />
      <Profile />
      <hr />
      <TodoContexExam />
    </div>
  );
};

export default Container;
