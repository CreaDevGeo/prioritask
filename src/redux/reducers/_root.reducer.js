// * - IMPORTING -
import { combineReducers } from 'redux';
// User Reducers
import errors from './errors.reducer';
import user from './user.reducer';
// APP Reducers
import checklistsReducer from './checklists.reducer';
import prioritiesReducer from './priorities.reducer';
import tasksReducer from './tasks.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  checklistsReducer,
  prioritiesReducer,
  tasksReducer,
});

export default rootReducer;
