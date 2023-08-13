import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// MUI
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
// Components
import DeleteTaskButton from "./DeleteTaskButton";



function TaskItem({ priorityID, taskNumber, task }) {
  // * Local state for modal
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // * Local state for taskInput
  const [taskInput, setTaskInput] = useState("");

  // * Local state for showing text prompt
  const [taskInputPrompt, setTaskInputPrompt] = useState(false);

  // * Declaring user from store
  const user = useSelector((store) => store.user);
  // * Declaring userID from store
  const userID = user.id;

  // * Declaring useDispatch hook as variable
  const dispatch = useDispatch();

  // * Declaring checklists from store
  const allChecklists = useSelector((store) => store.checklistsReducer);

  // * Function to create a new checklist
  const handleCreateTaskButton = () => {
    // Logging
    console.log("Add new task button clicked!");

    // * Conditional
    // if taskInput != "" then run dispatch action with priorityID
    // Else show user taskInputPrompt true, which renders taskInput Prompt with text,
    // "Make sure you enter a task title first!";
    if (taskInput != "") {
      dispatch({
        type: "ADD_TASK",
        payload: {
          userID: userID,
          priorityID: priorityID,
          taskInput: taskInput,
          taskNumber: taskNumber,
        },
      });

      setTaskInputPrompt(false);
      // handleClose();
    } else {
      setTaskInputPrompt(true);
    }
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)} variant="contained">
        {task.task_title}
      </Button>
      <DeleteTaskButton priorityID={priorityID} taskNumber={taskNumber} />
      {/* Delete Button Component Here */}
      {/* <DeleteTaskButton/> */}
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
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2 id="modal-title">Task Details</h2>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "50ch" },
            }}
            noValidate
            autoComplete="on"
          >
            <h3>{task.task_title}</h3>
            {taskInputPrompt === true && (
              <p>Make sure you enter a task title first!</p>
            )}
            <TextField
              id="filled-basic"
              label="Enter a new task"
              variant="outlined"
              onChange={(event) => setTaskInput(event.target.value)}
              value={taskInput}
            />
          </Box>
          <Button
            onClick={handleCreateTaskButton}
            variant="contained"
            color="secondary"
          >
            Edit Task
          </Button>
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default TaskItem;
