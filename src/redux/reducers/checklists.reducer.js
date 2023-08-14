const checklistsReducer = (state = [], action) => {
  switch (action.type) {
    // Set state as all of user's checklists
    case "SET_CHECKLISTS":
      return action.payload;
    default:
      return state;
  }
};

// - EXPORTING checklistsReducer -
export default checklistsReducer;
