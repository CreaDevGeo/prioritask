const prioritiesReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_PRIORITIES":
      return {
        ...state,
        [action.payload.checklistID]: action.payload?.priorities,
      };
    default:
      return state;
  }
};

// - EXPORTING prioritiesReducer -
export default prioritiesReducer;
