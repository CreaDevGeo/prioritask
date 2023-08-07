const prioritiesReducer = (state = [], action) => {
  switch (action.type) {
    // Set state as all of user's checklist priorities
    case "SET_PRIORITIES":
      return action.payload;
    default:
      return state;
  }
};

// - EXPORTING prioritiesReducer -
export default prioritiesReducer;
