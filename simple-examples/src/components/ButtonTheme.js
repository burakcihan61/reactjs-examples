import React, { useContext } from "react";
import ThemeContext from "../ContextAPI/ThemeContext";

const ButtonTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      Active Theme: {theme}
      <br />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
};

export default ButtonTheme;
