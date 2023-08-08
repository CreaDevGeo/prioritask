// - IMPORTING -
import { put, takeLatest, takeEvery } from "redux-saga/effects";
import axios from "axios";

// - LISTENER SAGA -
// * priorities listener saga
function* prioritiesSaga() {
  yield takeEvery("FETCH_CHECKLIST_PRIORITIES", fetchPriorities);
  yield takeLatest("ADD_PRIORITY", addPriority);
  yield takeLatest("DELETE_PRIORITY", deletePriority);
} // * end prioritiesSaga

// - ACTION SAGAS -
// Fetch Priorities
// * Gen function to get all priorities from the server
function* fetchPriorities(action) {
  try {
    // Declaring user's checklistID as payload
    const checklistID = action.payload.checklistID;

    // Declaring response as variable
    const priorities = yield axios.get(
      `/priorities/${checklistID}`
    );

    // Logging
    console.log("\nPriorities received! Priorities data is:", priorities.data)

    // Dispatch action to priorities reducer, setting the global state to data
    yield put({
      type: "SET_PRIORITIES",
      payload: {
        checklistID: checklistID,
        priorities: priorities.data,
      },
    });
  } catch (error) {
    console.log("Error fetching priorities:", error);
  }
} // * end fetchPriorities

// Add Priority
// * Gen function to add a priority via POST
function* addPriority(action) {
  try {
    console.log("action.payload is:", action.payload);
    // Declaring checklist id and priority data as payload
    // const { checklistID: checklistID, priorities: priorityData } = action.payload;

    // Making POST request to url with data
    yield axios.post(`/priorities/${checklistID}`, priorityData);

    // Dispatch action to fetch priorities
    yield put({ type: "FETCH_PRIORITIES", payload: checklistID });
  } catch (error) {
    console.log("Error adding priority:", error);
  }
} // * end addPriority

// Possibly a PUT request to update priority
// But what would I be updating??
// I can only update the task description and to do text so maybe don't need it?
// Maybe priority completion?

// Delete Priority
// * Gen function to remove a priority via DELETE
function* deletePriority(action) {
  try {
    // Declaring user's id as payload
    const { checklistID, priorityID } = action.payload;

    yield axios.delete(`/priorities/${checklistID}/${priorityID}`);
    yield put({ type: "FETCH_PRIORITIES", payload: checklistID });
  } catch (error) {
    console.log("Error deleting priority:", error);
  }
}

export default prioritiesSaga;
