import React, { createContext, useState } from "react";
import { useEffect } from "react";
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || [];
  });
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
