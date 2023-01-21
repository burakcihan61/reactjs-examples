import React from "react";

const Header = ({ number, increment }) => {
  console.log("header Rerenderad");
  return (
    <div>
      <h1>Header - {number}</h1>
      <br />
      <button onClick={increment}>Click</button>
    </div>
  );
};

export default React.memo(Header);
