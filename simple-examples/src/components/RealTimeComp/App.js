import React, { useEffect, useState } from "react";
import Palette from "./components/RealTimeComp/Palette";
import { initSocket, subscribe } from "./socketApi";

const App = () => {
  const [activeColor, setActiveColor] = useState("#282c34");
  useEffect(() => {
    initSocket();
    subscribe((color) => {
      setActiveColor(color);
    });
  }, []);
  return (
    <div className="App" style={{ backgroundColor: activeColor }}>
      <h1>{activeColor}</h1>
      <Palette activeColor={activeColor} />
    </div>
  );
};

export default App;
