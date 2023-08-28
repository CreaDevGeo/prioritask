import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function CreateTask({ priorityID, taskNumber }) {
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

  // * Local state for showing text prompt of no text
  const [taskInputPrompt, setTaskInputPrompt] = useState(false);
  // * Local state for showing text prompt if input is too long
  const [taskInputLengthPrompt, setTaskInputLengthPrompt] = useState(false);

  // * Declaring user from store
  const user = useSelector((store) => store.user);
  // * Declaring userID from store
  const userID = user.id;

  // * Declaring useDispatch hook as variable
  const dispatch = useDispatch();

  // * Declaring checklists from store
  const allChecklists = useSelector((store) => store.checklistsReducer);

  // * Function to handle task input value change
  const handleTaskInputChange = (event) => {
    setTaskInput(event.target.value);
    if (taskInput.length >= 50) {
      setTaskInputLengthPrompt(true);
      setTaskInputPrompt(false)
    } else {
      setTaskInputLengthPrompt(false)
    }
  };

  // * Function to create a new checklist
  const handleCreateTaskButton = () => {
    // Logging
    console.log("Add new task button clicked!");

    // * Conditional
    // if taskInput != "" then run dispatch action with priorityID
    // Else show user taskInputPrompt true, which renders taskInput Prompt with text,
    // "Make sure you enter a task title first!";
    if (taskInput !== "") {
      if (taskInput.length <= 50) {
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
        setTaskInputLengthPrompt(false);
        
      } else {
        setTaskInputPrompt(false);
        setTaskInputLengthPrompt(true);
      }
    } else {
      setTaskInputPrompt(true);
      setTaskInputLengthPrompt(false);
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "10px auto" }}>
      <Button
        onClick={() => setOpen(true)}
        variant="contained"
        style={{
          backgroundColor: "#edf7c0",
          color: "black",
          fontFamily: "poppins, sans-serif",
          fontSize: "1rem",
          fontWeight: "500",
          boxShadow: "4px 10px 0.5rem -9px"
        }}
      >
        Add a new task
      </Button>
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
            textAlign: "center",
            margin: 10,
          }}
        >
          <h2 id="modal-title">Enter a new task</h2>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "50ch" },
            }}
            noValidate
            autoComplete="on"
          >
            {taskInputPrompt === true && (
              <p>Make sure you enter a task title first!</p>
            )}
            {taskInputLengthPrompt === true && (
              <p>
                Make sure your task title isn't too long! <br />
                (50 characters max)
              </p>
            )}
            <TextField
              id="filled-basic"
              label="Enter a new task"
              variant="outlined"
              onChange={handleTaskInputChange}
              value={taskInput}
            />
          </Box>
          <Button
            onClick={handleCreateTaskButton}
            variant="contained"
            color="primary"
          >
            Create Task
          </Button>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default CreateTask;
