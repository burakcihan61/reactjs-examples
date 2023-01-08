import React from "react";

const Header = ({ number, data }) => {
  console.log("header Rerenderad");
  return (
    <div>
      <h1>Header - {number}</h1>
      <br />
      <code>{JSON.stringify(data)}</code>
    </div>
  );
};

export default React.memo(Header);
