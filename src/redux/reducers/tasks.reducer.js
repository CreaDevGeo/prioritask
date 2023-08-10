const tasksReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_TASKS":
      const { priorityID, tasks } = action.payload;
      return {
        ...state,
        [priorityID]: [...tasks],
      };
    default:
      return state;
  }
};

// - EXPORTING prioritiesReducer -
export default tasksReducer;
