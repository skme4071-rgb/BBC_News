

import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // First render থেকে server injected user
  const [user, setUser] = useState(() => {
    return (typeof window !== "undefined" && window.__USER__) || { loggedIn: false };
  });

  const login = (userData) => setUser({ ...userData, loggedIn: true });
  const logout = () => setUser({ loggedIn: false });
  const isLogin = (userData) => { setUser({ ...userData, loggedIn: true }) };



  return (
    <AuthContext.Provider value={{ user, login, logout, isLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);





