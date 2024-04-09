import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  return (
    <UserContextProvider value={(user, setUser)}>
      {children}
    </UserContextProvider>
  );
};

export default UserContextProvider;
