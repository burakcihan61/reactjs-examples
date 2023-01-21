import React, { useContext } from "react";
import ThemeContext from "../ContextAPI/ThemeContext";

const Button = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      Active Tema:{theme}
      <br />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
      <hr />
      <br />
    </div>
  );
};

export default Button;
