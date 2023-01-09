import React, { useState, useCallback } from "react";
import Header from "./components/Header";

const App = () => {
  const [number, setNumber] = useState(0);

  const increment = useCallback(() => {
    setNumber((prev) => prev + 1);
  }, []);

  return (
    <div>
      <Header increment={increment} />
      <hr />
      <h1>{number}</h1>
    </div>
  );
};

export default App;
