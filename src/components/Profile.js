import React, { useContext, useState } from "react";

import UserContext from "../ContextAPI/UserContext";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  const [loadings, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({ id: 1, name: "Burak", bio: "Javascript" });
      setLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {!user && (
        <button onClick={handleLogin}>
          {loadings ? "loadings.." : "Login"}
        </button>
      )}

      <br />
      {JSON.stringify(user)}
      <br />
      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default Profile;
