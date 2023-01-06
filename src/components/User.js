import React from "react";
import { PropTypes } from "prop-types";

const User = ({ isLoggedIn, name, surname, friends }) => {
  return (
    <div>
      <h1>
        {isLoggedIn
          ? `Benim adım ${name}, soyadım ${surname}`
          : "Giriş yapmadınız"}
      </h1>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  isLoggedIn: PropTypes.bool,
};

export default User;
