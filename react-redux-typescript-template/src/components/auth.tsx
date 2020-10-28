import React, { useState, useEffect } from "react";
import firebase from "../config/config";

type ContextProps = {
  currentUser: firebase.User | null;
  authenticated: boolean;
  setCurrentUser: any;
  loadingAuthState: boolean;
};

export const AuthContext = React.createContext<Partial<ContextProps>>({});

export const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null as firebase.User | null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
