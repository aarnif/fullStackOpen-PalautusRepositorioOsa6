import {
  showNotification,
  removeNotification,
} from "../reducers/notificationReducer.js";

const setNotification = (dispatch, message) => {
  dispatch(showNotification(message));
  setInterval(() => dispatch(removeNotification()), 5000);
};

export default setNotification;
