import React, { createContext, useReducer } from "react";
import Notification, { NotificationWrapper } from "./Notification";

export const NotificationContext = createContext();

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return [...state, { ...action.payload }];
    case "REMOVE_NOTIFICATION":
      return state.filter((el) => el.id !== action.id);
    default:
      return state;
  }
};

const NotificationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notificationReducer, []);

  return (
    <NotificationContext.Provider value={dispatch}>
      <NotificationWrapper>
        {state.map((note) => {
          return <Notification dispatch={dispatch} key={note.id} {...note} />;
        })}
      </NotificationWrapper>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
