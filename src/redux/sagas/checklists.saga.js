// - IMPORTING -
import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// * checklists listener saga
function* checklistsSaga() {
  yield takeLatest("FETCH_CHECKLISTS", fetchAllChecklists);
  yield takeLatest("ADD_CHECKLIST", addChecklist);
} // * end checklists

// - SAGAS -
// * Gen function to get all checklists from the server
function* fetchAllChecklists(action) {
  try {
    // Declaring user's id as payload
    const userID = action.payload;

    // Declaring response as variable
    const checklists = yield axios.get(`/api/checklists/${userID}`);

    // Logging response
    console.log("GET all checklists:", checklists.data);

    // Dispatch action to checklists reducer, setting the global state to data
    yield put({ type: "SET_CHECKLISTS", payload: checklists.data });
  } catch {
    console.log("\nError getting all checklists.");
  }
} // * end fetchAllChecklists

// * Gen function to add a checklist via POST
function* addChecklist(action) {
  try {
    // Declaring user's id as payload
    const userID = action.payload
    console.log("userID is:", userID);

    // Declaring response as movie genres
    yield axios.post("/api/checklists", userID);

    // Dispatch action to re-fetch checklists
    yield put({ type: "FETCH_CHECKLISTS", payload: userID.userID });
  } catch {
    console.log("\nError adding checklist.");
  }
} // * end addChecklist

// - EXPORTING userSaga -
export default checklistsSaga;
