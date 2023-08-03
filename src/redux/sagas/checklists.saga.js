// - IMPORTING -
import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// * checklists listener saga
function* checklistsSaga() {
  yield takeLatest("FETCH_CHECKLISTS", fetchAllChecklists);
} // * end checklists

// - SAGAS -
// * Gen function to get all movies from the DB
function* fetchAllChecklists(action) {
  try {
    // Declaring user's id as payload
    const userID = action.payload;

    // Declaring response as movie genres
    const checklists = yield axios.get(`/api/checklists/${userID}`);

    // Logging response
    console.log("GET all checklists:", checklists.data);

    // Dispatch action to checklists reducer, setting the global state to data
    yield put({ type: "SET_CHECKLISTS", payload: checklists.data });
  } catch {
    console.log("\nError getting all checklists.");
  }
} // * end fetchAllChecklists

// - EXPORTING userSaga -
export default checklistsSaga;