import React, { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE_USER = JSON.parse(localStorage.getItem("user")) || {
  id: null,
  username: null,
  email: null,
};

const INITIAL_STATE_SESSION = {
  onlineUsers: [],
  gdpr: false,
  token: false,
};

const COMBINED_STATE = {
  user: INITIAL_STATE_USER,
  session: INITIAL_STATE_SESSION,
};

export const AuthContext = createContext(COMBINED_STATE);

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return COMBINED_STATE;
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, COMBINED_STATE);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
