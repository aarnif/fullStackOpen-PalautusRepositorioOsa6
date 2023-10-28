import {
  showNotification,
  removeNotification,
} from "../reducers/notificationReducer.js";

const setNotification = (dispatch, message) => {
  dispatch(showNotification(message));
  setTimeout(() => dispatch(removeNotification()), 5000);
};

export default setNotification;
