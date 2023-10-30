import { createContext, useReducer } from "react";

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "SHOW":
      return action.payload;
    case "REMOVE":
      return null;
  }
};

const NotificationContext = createContext();

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(
    notificationReducer,
    null
  );

  const setNotification = (message) => {
    notificationDispatch({
      type: "SHOW",
      payload: message,
    });

    setTimeout(() => {
      notificationDispatch({
        type: "REMOVE",
        payload: message,
      });
    }, 5000);
  };

  return (
    <NotificationContext.Provider value={[notification, setNotification]}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
