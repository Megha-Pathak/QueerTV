import { createContext, useContext, useState } from "react";
import { AUTH_DATA, AUTH_TOKEN } from "../constants";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    status: localStorage.getItem(AUTH_TOKEN) ? true : false,
    token: localStorage.getItem(AUTH_TOKEN),
    user: JSON.parse(localStorage.getItem(AUTH_DATA)),
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};

export { AuthProvider, useAuth };
