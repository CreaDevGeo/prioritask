import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

// Turning into a DeleteTaskButton
function DeleteTaskButton({ priorityID, taskNumber }) {
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

  // * Function to create a new checklist
  const handleDeleteTaskButton = () => {
    // Logging
    console.log("Delete task button clicked!");

    // Dispatch action to delete the task
    dispatch({
      type: "DELETE_TASK",
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
        <DeleteIcon color="error" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box className="open-modal">
          <h2 id="modal-title">Delete Confirmation</h2>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "50ch" },
            }}
            noValidate
            autoComplete="on"
          ></Box>
          <p>
            Are you sure you would like to delete{" "}
            <strong>task {taskNumber}</strong>?
          </p>
          <Button
            onClick={handleDeleteTaskButton}
            color="error"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Button onClick={handleClose} className="cancel-button">
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default DeleteTaskButton;
