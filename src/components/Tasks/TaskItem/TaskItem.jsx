import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal, Box, TextField } from "@mui/material";
import DeleteTaskButton from "./DeleteTaskButton";
import TaskDeadline from "./TaskDeadline/TaskDeadline";
import TaskComplete from "./TaskComplete/TaskComplete";
import "../../App/App.css";

function TaskItem({ priorityID, taskNumber, task }) {
  // Local state for modal
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // - TASK INPUT -
  // Local state for taskInput
  const [taskInput, setTaskInput] = useState("");
  // Local state for showing text prompt
  const [taskInputPrompt, setTaskInputPrompt] = useState(false);

  // - PAST DUE -
  // Get the current date
  const currentDate = new Date();
  // Check if the task's deadline exceeds the current date
  const isPastDue = task.deadline && new Date(task.deadline) < currentDate;

  // Declaring user from store
  const user = useSelector((store) => store.user);
  // Declaring userID from store
  const userID = user.id;

  // Declaring checklists from store
  const allChecklists = useSelector((store) => store.checklistsReducer);

  // Function to create a new checklist
  const handleCreateTaskButton = () => {
    console.log("Add new task button clicked!");

    // Conditional
    if (taskInput !== "") {
      // Dispatch action to add a new task
      // Update the redux store as needed
      setTaskInputPrompt(false);
    } else {
      setTaskInputPrompt(true);
    }
  };

  // State to track whether the title is being edited or not in the modal
  const [isEditingTitleInModal, setIsEditingTitleInModal] = useState(false);
  // Local state for showing text prompt if input is too long
  const [taskInputLengthPrompt, setTaskInputLengthPrompt] = useState(false);

  // Function to handle saving the edited title in the modal
  const handleSaveEditedTitleInModal = () => {
    console.log("handleSaveEditedTitleInModal button clicked!");

    if (taskInput !== "") {
      // Dispatch action or perform your update logic here
      setIsEditingTitleInModal(false);
      setTaskInputPrompt(false);
    } else {
      setTaskInputPrompt(true);
    }
  };

  // Function to handle the task closing button
  const handleCancelEditButton = () => {
    console.log("Cancel button clicked!");
    setIsEditingTitleInModal(false);
    setOpen(false);
  };

  return (
    <div>
      <Box
        sx={{
          width: "90%",
          bgcolor: "background.paper",
          borderRadius: 5,
          boxShadow: 9,
          p: 4,
          margin: "10px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "black",
          fontSize: "1.27rem",
        }}
      >
        {/* Task number header and delete button */}
        <header>
          <center>
            <h3
              style={{
                margin: "3px auto 3px",
                cursor: "pointer",
              }}
            >
              {`Task ${taskNumber}`}
            </h3>
          </center>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "3px auto",
            }}
          >
            <TaskComplete
              priorityID={priorityID}
              taskNumber={taskNumber}
              taskCompletion={task.is_completed}
            />
            <TaskDeadline priorityID={priorityID} taskNumber={taskNumber} />
            <DeleteTaskButton priorityID={priorityID} taskNumber={taskNumber} />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
            className="due-date-container"
          >
            {isPastDue && (
              <div>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "500",
                    margin: "5px 0 -20px",
                  }}
                  className="past-due-text past-due"
                >
                  Past due:
                </p>
              </div>
            )}
            <div>
              <p
                className={isPastDue ? "past-due" : ""}
                style={{
                  fontSize: "1rem",
                  fontWeight: "400",
                }}
              >
                {task.due_date_formatted}
              </p>
            </div>
          </div>
        </header>

        {/* Modal and pop up modal */}
        <div
          style={{
            marginTop: "5px",
          }}
        >
          <Button
            onClick={() => setOpen(true)}
            variant="contained"
            style={{
              backgroundColor: "#26abc0",
            }}
          >
            {isEditingTitleInModal ? (
              <div>
                <TextField
                  id="filled-basic"
                  label="Update your task title"
                  variant="outlined"
                  onChange={(event) => setTaskInput(event.target.value)}
                  value={taskInput}
                />

                <div>
                  <Button
                    variant="outlined"
                    onClick={handleSaveEditedTitleInModal}
                  >
                    Save
                  </Button>
                  <Button variant="contained" onClick={handleCancelEditButton}>
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setIsEditingTitleInModal(true)}
                style={{ cursor: "pointer" }}
              >
                {task.task_title}
              </span>
            )}
            {/* Rendering prompts */}
            {taskInputPrompt && <p>Make sure you enter a task title first!</p>}
            {taskInputLengthPrompt && (
              <p>
                Make sure your task title isn't too long! <br />
                (50 characters max)
              </p>
            )}
          </Button>
        </div>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 300,
            bgcolor: "background.paper",
            borderRadius: 5,
            boxShadow: 24,
            p: 4,
            margin: 10,
          }}
        >
          <h2
            style={{
              fontFamily: "poppins, sans-serif",
              fontSize: "2rem",
            }}
            id="modal-title"
          >
            Task Details
          </h2>
          <h3
            style={{
              fontFamily: "poppins, sans-serif",
              fontSize: "1.3rem",
            }}
          >
            {isEditingTitleInModal ? (
              <div>
                <TextField
                  id="filled-basic"
                  label="Update your task title"
                  variant="outlined"
                  onChange={(event) => setTaskInput(event.target.value)}
                  value={taskInput}
                />

                <Button
                  variant="outlined"
                  onClick={handleSaveEditedTitleInModal}
                >
                  Save
                </Button>
                <Button variant="contained" onClick={handleCancelEditButton}>
                  Cancel
                </Button>
              </div>
            ) : (
              <span
                onClick={() => setIsEditingTitleInModal(true)}
                style={{ cursor: "pointer" }}
              >
                {task.task_title}
              </span>
            )}
            {/* Rendering prompts */}
            {taskInputPrompt && <p>Make sure you enter a task title first!</p>}
            {taskInputLengthPrompt && (
              <p>
                Make sure your task title isn't too long! <br />
                (50 characters max)
              </p>
            )}
          </h3>
        </Box>
      </Modal>
    </div>
  );
}

export default TaskItem;
