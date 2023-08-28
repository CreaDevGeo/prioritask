// * - IMPORTING -
// React
import React, { useState } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
// MUI
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
// CSS
import "./PriorityCard.css";

// Turning into a DeletePriorityButton
function DeletePriorityButton({ priorityID, priorityNumber, checklistID }) {
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
  const handleDeletePriorityButton = () => {
    // Logging
    console.log("Delete priority button clicked!");

    // Dispatch action to delete the priority
    dispatch({
      type: "DELETE_PRIORITY",
      payload: {
        userID: userID,
        priorityID: priorityID,
        checklistID: checklistID,
      },
    });

    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="error"
        className="delete-priority-button"
      >
        Delete
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
            margin: 10,
          }}
        >
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
            <strong>priority {priorityNumber}</strong>?
          </p>
          <Button
            onClick={handleDeletePriorityButton}
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default DeletePriorityButton;
