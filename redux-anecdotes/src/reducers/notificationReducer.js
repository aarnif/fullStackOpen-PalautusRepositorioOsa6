import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification(state, action) {
      return action.payload;
    },
    removeNotification(state, action) {
      return null;
    },
  },
});

export const setNotification = (message, time) => {
  return (dispatch) => {
    console.log("Show notification");
    dispatch(showNotification(message));
    setTimeout(() => {
      console.log("Remove notification");
      dispatch(removeNotification());
    }, time * 1000);
  };
};

export const { showNotification, removeNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
