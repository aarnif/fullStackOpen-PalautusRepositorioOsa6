export const filterChange = (filter) => {
  console.log(filter);
  return {
    type: "SET_FILTER",
    payload: filter,
  };
};

const filterReducer = (state = "ALL", action) => {
  console.log("state now: ", state);
  console.log("action", action);

  switch (action.type) {
    case "SET_FILTER":
      return action.payload;

    default:
      return state;
  }
};

export default filterReducer;
