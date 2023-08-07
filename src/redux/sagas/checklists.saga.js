// - IMPORTING -
import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// - LISTENER SAGA -
// * checklists listener saga
function* checklistsSaga() {
  yield takeLatest("FETCH_ALL_CHECKLISTS", fetchAllChecklists);
  yield takeLatest("ADD_CHECKLIST", addChecklist);
  yield takeLatest("DELETE_CHECKLIST", deleteChecklist);
} // * end checklistsSaga

// - ACTION SAGAS -
// Fetch Checklists
// * Gen function to get all checklists from the server
function* fetchAllChecklists(action) {
  try {
    // Declaring user's id as payload
    const userID = action.payload;

    // Declaring response as variable
    const checklists = yield axios.get(`/api/checklists/${userID}`);

    // Dispatch action to checklists reducer, setting the global state to data
    yield put({ type: "SET_CHECKLISTS", payload: checklists.data });
  } catch {
    console.log("\nError getting all checklists.");
  }
} // * end fetchAllChecklists

// Add Checklist
// * Gen function to add a checklist via POST
function* addChecklist(action) {
  try {
    // Declaring user's id as payload
    const userID = action.payload;
    console.log("userID is:", userID);

    // Making POST request to url with data
    yield axios.post("/api/checklists", {userID});

    // Dispatch action to fetch the updated checklist
    yield put({ type: "FETCH_ALL_CHECKLISTS", payload: userID });
  } catch {
    console.log("\nError adding checklist.");
  }
} // * end addChecklist

// - TO IMPLEMENT SOON -
// PUT request for updating rank of checklist
// GET request for order by feature maybe? Highest to lowest rank and vise versa

// Delete Checklist
// * Gen function to remove a checklist via DELETE
function* deleteChecklist(action) {
  try {
    // Declaring user's id as payload
    const userID = action.payload.userID;
    // Declaring user's checklist id as payload
    const checklistID = action.payload.checklistID;
    // Logging
    console.log("\nuserID is:", userID, "checklistID is:", checklistID);

    // Axios DELETE request
    yield axios.delete(
      `/api/checklists/${userID}/${checklistID}`,
      action.payload
    );

    // Dispatch action to re-fetch checklists
    yield put({ type: "FETCH_ALL_CHECKLISTS", payload: userID });
  } catch {
    console.log("\nError removing checklist.");
  }
} // * end deleteChecklist

// - EXPORTING userSaga -
export default checklistsSaga;
