import React, { useState, useMemo } from "react";
import Header from "./components/Header";

const App = () => {
  const [number, setNumber] = useState(0);

  const data = useMemo(() => {
    return calculateObject(number);
  }, [number]);

  return (
    <div>
      <Header data={data} />
      <hr />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  );
};

function calculateObject(number) {
  console.log("calculating...");
  for (let i = 0; i < 100000; i++) {}
  console.log("calculating comp");
  return { name: "Burak", number };
}

export default App;
