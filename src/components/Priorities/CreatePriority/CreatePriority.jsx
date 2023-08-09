// - IMPORTING -
// React
import React from "react";
// Redux
import { useDispatch } from "react-redux";
// MUI
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
// Components
import TasksList from "../../Tasks/TasksList/TasksList";

// - CreatePriority COMPONENT -
export default function CreatePriority({ checklistID, priorityNumber }) {
  // * States for modal open and close functionality
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //  * Declaring useDispatch Redux hook state as variable
  const dispatch = useDispatch();

  // * Function to dispatch new priority via save button click
  // Meant for update
  function handleSavePriorityClick() {
    console.log("\nSave Priority button clicked!");

    // If priority ID null and under checklistID dispatch ADD_PRIORITY
    // Else dispatch UPDATE
    // Dispatch an action to add a priority
    dispatch({
      type: "ADD_PRIORITY",
      payload: checklistID,
    });
  } // * end handleCreatePriorityClick

  // * Function to handle dispatch of new task
  const handleCreateTask = () => {
    console.log("Add new task button clicked!");
  }; // * end handleCreateTask

  return (
    <div>
      <Box
        sx={{
          top: "50%",
          left: "50%",
          width: 200,
          height: 300,
          bgcolor: "background.paper",
          borderRadius: 5,
          boxShadow: 24,
          pt: 2,
          px: 5,
          pb: 3,
        }}
        onClick={handleOpen}
      >
        <h2>Create Priority</h2>
        <div>
          <TasksList />
        </div>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%", // Center vertically
            left: "50%", // Center horizontally
            transform: "translate(-50%, -50%)", // Center both horizontally and vertically
            width: 300,
            height: 500,
            bgcolor: "background.paper",
            borderRadius: 5,
            boxShadow: 24,
            pt: 2,
            px: 5,
            pb: 3,
          }}
        >
          <h2 style={{ textAlign: "center" }} id="parent-modal-title">
            Priority {priorityNumber}
          </h2>
          <div>
            <TasksList />
          </div>
          <div>
            <ChildModal onClick={handleCreateTask} />
            <br />
            <ChildModal onClick={handleCreateTask} />
          </div>
          <div>
            <Button onClick={handleSavePriorityClick}>Save Priority</Button>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
} // - END CreatePriority COMPONENT -

// * MUI Child Modal
function ChildModal() {
  // * State for modal open/close appearance conditional rendering
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // * State for adding a task input field conditional rendering
  const [showTaskInput, setShowTaskInput] = React.useState(false);

  // State for input value
  const [taskInputValue, setTaskInputValue] = React.useState("");

  // * Function to handle task creation
  const handleCreateTask = (event) => {
    // Preventing default submit functionality
    event.preventDefault();

    // Logging
    console.log("Task save button clicked!");
    console.log("taskInputValue is:", taskInputValue);

    // Dispatch action to add a task

    // Setting input field back to text
    setShowTaskInput(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Add a Task</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          c
          sx={{
            position: "absolute",
            top: "50%", // Center vertically
            left: "50%", // Center horizontally
            transform: "translate(-50%, -50%)", // Center both horizontally and vertically
            width: 500,
            height: 300,
            bgcolor: "background.paper",
            borderRadius: 5,
            boxShadow: 24,
            textAlign: "center",
            pt: 2,
            px: 5,
            pb: 3,
          }}
        >
          {showTaskInput ? (
            <form onSubmit={handleCreateTask}>
              <label>Task 1</label>
              <input
                placeholder="Enter task 1 here"
                onChange={(event) => setTaskInputValue(event.target.value)}
                value={taskInputValue}
              />
              <Button type="submit">Save</Button>
              <Button
                type="button"
                onClick={() => {
                  setShowTaskInput(false);
                }}
              >
                Cancel
              </Button>
            </form>
          ) : (
            <div>
              {/* Checking if taskInputValue has text or not */}
              {taskInputValue !== "" ? (
                <div>
                  <p>Click task to edit</p>
                  <h2 onClick={() => setShowTaskInput(true)}>
                    {taskInputValue}
                  </h2>
                </div>
              ) : (
                <h2
                  id="child-modal-title"
                  onClick={() => setShowTaskInput(true)}
                >
                  Click here to add a task
                </h2>
              )}
            </div>
          )}
        </Box>
      </Modal>
    </React.Fragment>
  );
}

// * MUI Modal Styling
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
