import React, { useEffect, useState, FC } from 'react';
import firebase from '../Firebase/firebase';
export const AuthContext = React.createContext({});

export const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<string>(null);
  const [pending, setPending] = useState<boolean>(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);
  if (pending) {
    return <>Please wait...</>;
  }
  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
