const tasksReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return {
        ...state,
        [action.payload.priorityID]: action.payload?.priorityTasks,
      };
    default:
      return state;
  }
};

// - EXPORTING prioritiesReducer -
export default tasksReducer;
