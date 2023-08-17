import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { IconButton } from "@mui/material";

// Turning into a task completed button
function TaskComplete({ priorityID, taskNumber, taskCompletion }) {
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

  // * Function to complete a task
  const handleCompleteTaskButton = () => {
    // Logging
    console.log("Complete task button clicked!");

    // Dispatch action to delete the priority
    dispatch({
      type: "COMPLETE_TASK",
      payload: {
        userID: userID,
        priorityID: priorityID,
        taskNumber: taskNumber,
      },
    });

    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleOpen} color="default">
        <CheckCircleOutlineIcon />
      </IconButton>
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
          <h2 id="modal-title">Complete Confirmation</h2>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "50ch" },
            }}
            noValidate
            autoComplete="on"
          ></Box>
          <p>
            Are you sure you would like to mark{" "}
            <strong>Task {taskNumber}</strong> as complete?
          </p>
          <Button
            onClick={handleCompleteTaskButton}
            variant="contained"
            color="primary"
            startIcon={<CheckCircleIcon/>}
          >
            Complete
          </Button>
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default TaskComplete;
