// - IMPORTING -
import { put, takeLatest, takeEvery } from "redux-saga/effects";
import axios from "axios";

// - LISTENER SAGA -
// * priorities listener saga
function* tasksSaga() {
  yield takeEvery("FETCH_PRIORITY_TASKS", fetchTasks);
  yield takeLatest("ADD_TASK", addTask);
  //   yield takeLatest("DELETE_PRIORITY", deletePriority);
} // * end prioritiesSaga

// - ACTION SAGAS -
// Fetch Tasks
// * Gen function to get all priorities from the server
function* fetchTasks(action) {
  try {
    // Declaring user's priorityID as payload
    const priorityID = action.payload.priorityID; // Destructure priorityID from action.payload
    console.log("priorityID is:", priorityID);

    // Declaring response as variable
    const priorityTasks = yield axios.get(`/tasks/${priorityID}`);

    // Logging
    console.log("Tasks received! priorityTasks data is:", priorityTasks?.data);

    // Dispatch action to priorities reducer, setting the global state to data
    yield put({
      type: "SET_TASKS",
      payload: { priorityID: priorityID, tasks: priorityTasks.data },
    });
  } catch (error) {
    console.log("Error fetching priorities:", error);
  }
} // * end fetchPriorities

// Add Task
// * Gen function to add a task via POST
function* addTask(action) {
  console.log("Gen function addTask running due to action: ", action.type);
  try {
    // Declaring userID from payload
    const userID = action.payload.userID;

    // Declaring priorityID from payload
    const priorityID = action.payload.priorityID;

    // Declaring taskInput from payload
    const taskInput = action.payload.taskInput;

    // Declaring taskInput from payload
    const taskNumber = action.payload.taskNumber;

    // Making POST request to url with data
    yield axios.post("/tasks", {
      priorityID: priorityID,
      taskInput: taskInput,
      taskNumber: taskNumber,
    });

    // Dispatch action to fetch priorities
    yield put({ type: "FETCH_PRIORITY_TASKS", payload: priorityID });

    // Dispatch action to fetch checklists
    yield put({ type: "FETCH_ALL_CHECKLISTS", payload: userID });
  } catch (error) {
    console.log("Error adding priority:", error);
  }
} // * end addTask

// // Possibly a PUT request to update priority
// // But what would I be updating??
// // I can only update the task description and to do text so maybe don't need it?
// // Maybe priority completion?

// // Delete Priority
// // * Gen function to remove a priority via DELETE
// function* deletePriority(action) {
//   try {
//     // Declaring user's id as payload
//     const { checklistID, priorityID } = action.payload;

//     yield axios.delete(`/priorities/${checklistID}/${priorityID}`);
//     yield put({ type: "FETCH_PRIORITIES", payload: checklistID });
//   } catch (error) {
//     console.log("Error deleting priority:", error);
//   }
// }

export default tasksSaga;
