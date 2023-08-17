// - IMPORTING -
import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import axios from "axios";

// - LISTENER SAGA -
// * priorities listener saga
function* tasksSaga() {
  yield takeEvery("FETCH_TASKS", fetchTasks);
  yield takeLatest("ADD_TASK", addTask);
  yield takeLatest("COMPLETE_TASK", completeTask);
  yield takeLatest("UPDATE_TASK_DEADLINE", updateTaskDeadline);
  yield takeLatest("DELETE_TASK", deleteTask);
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

    // Dispatch action to fetch tasks and wait for its completion
    yield call(fetchTasks, { payload: { priorityID } });

    // Dispatch action to fetch checklists
    yield put({ type: "FETCH_ALL_CHECKLISTS", payload: userID });
  } catch (error) {
    console.log("Error adding priority:", error);
  }
} // * end addTask

// Update task completion
// * Gen function to update a task's completion via PUT
function* completeTask(action) {
  console.log("Gen function completeTask running due to action: ", action.type);
  try {
    // Declaring userID from payload
    const userID = action.payload.userID;
    // Declaring priorityID from payload
    const priorityID = action.payload.priorityID;
    // Declaring taskNumber from payload
    const taskNumber = action.payload.taskNumber;

    // PUT request
    yield axios.put(`/tasks/${priorityID}/${taskNumber}/completed`);

    // Dispatch action to fetch tasks and wait for its completion
    yield call(fetchTasks, { payload: { priorityID } });

    // Dispatch action to fetch checklists
    // yield put({ type: "FETCH_ALL_CHECKLISTS", payload: userID });
  } catch (error) {
    console.log("Error completing task:", error);
  }
} // * end completeTask

// Update Task Deadline
// * Gen function to update a task's deadline via PUT
function* updateTaskDeadline(action) {
  console.log(
    "Gen function updateTaskDeadline running due to action: ",
    action.type
  );
  try {
    // Declaring userID from payload
    const userID = action.payload.userID;
    // Declaring priorityID from payload
    const priorityID = action.payload.priorityID;
    // Declaring taskNumber from payload
    const taskNumber = action.payload.taskNumber;
    // Declaring task deadline from payload
    const taskDeadline = action.payload.taskDeadline;

    // PUT request
    yield axios.put(`/tasks/${priorityID}/${taskNumber}`, { taskDeadline });

    // Dispatch action to fetch tasks and wait for its completion
    yield call(fetchTasks, { payload: { priorityID } });

    // Dispatch action to fetch checklists
    // yield put({ type: "FETCH_ALL_CHECKLISTS", payload: userID });
  } catch (error) {
    console.log("Error deleting task:", error);
  }
} // * end updateTaskDeadline

// Delete Task
// * Gen function to delete a task via POST
function* deleteTask(action) {
  console.log("Gen function deleteTask running due to action: ", action.type);
  try {
    // Declaring userID from payload
    const userID = action.payload.userID;
    // Declaring priorityID from payload
    const priorityID = action.payload.priorityID;
    // Declaring taskNumber from payload
    const taskNumber = action.payload.taskNumber;

    // DELETE request
    yield axios.delete(`/tasks/${priorityID}/${taskNumber}`);

    // Dispatch action to fetch tasks and wait for its completion
    yield call(fetchTasks, { payload: { priorityID } });

    // Dispatch action to fetch checklists
    yield put({ type: "FETCH_ALL_CHECKLISTS", payload: userID });
  } catch (error) {
    console.log("Error deleting task:", error);
  }
} // * end deleteTask

// // Possibly a PUT request to update priority
// // But what would I be updating??
// // I can only update the task description and to do text so maybe don't need it?
// // Maybe priority completion?

export default tasksSaga;
