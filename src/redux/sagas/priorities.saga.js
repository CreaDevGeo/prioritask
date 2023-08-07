// - IMPORTING -
import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// - LISTENER SAGA -
// * priorities listener saga
function* prioritiesSaga() {
  yield takeLatest("FETCH_PRIORITIES", fetchPriorities);
  yield takeLatest("ADD_PRIORITY", addPriority);
  yield takeLatest("DELETE_PRIORITY", deletePriority);
} // * end prioritiesSaga

// - ACTION SAGAS -
// Fetch Priorities
// * Gen function to get all priorities from the server
function* fetchPriorities(action) {
  try {
    // Declaring user's id as payload
    const checklistID = action.payload;

    // Declaring response as variable
    const priorities = yield axios.get(`/api/priorities/${checklistID}`);

    // Dispatch action to priorities reducer, setting the global state to data
    yield put({ type: "SET_PRIORITIES", payload: priorities.data });
  } catch (error) {
    console.log("Error fetching priorities:", error);
  }
} // * end fetchPriorities

// Add Priority
// * Gen function to add a priority via POST
function* addPriority(action) {
  try {

    console.log("action.payload is:", action.payload)
    // Declaring checklist id and priority data as payload
    // const { checklistID: checklistID, priorities: priorityData } = action.payload;

    // Making POST request to url with data
    yield axios.post(`/api/priorities/${checklistID}`, priorityData);

    // Dispatch action to fetch priorities
    yield put({ type: "FETCH_PRIORITIES", payload: checklistID });
  } catch (error) {
    console.log("Error adding priority:", error);
  }
} // * end addPriority

// Possibly a PUT request to update priority
// But what would I be updating??
// I can only update the task description and to do text so maybe don't need it?

// Delete Priority
// * Gen function to remove a priority via DELETE
function* deletePriority(action) {
  try {
    // Declaring user's id as payload
    const { checklistID, priorityID } = action.payload;


    yield axios.delete(`/api/priorities/${checklistID}/${priorityID}`);
    yield put({ type: "FETCH_PRIORITIES", payload: checklistID });
  } catch (error) {
    console.log("Error deleting priority:", error);
  }
}

export default prioritiesSaga;
