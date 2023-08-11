
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

function ChecklistDeleteButton(checklistID) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  // Declaring useDispatch hook as a variable
  const dispatch = useDispatch();

  // Getting userID from store
  const user = useSelector((store) => store.user);

  // Function to dispatch action with user id to remove selected checklist
  const handleDeleteChecklist = () => {
    console.log("Delete checklist button clicked");

    // Dispatch an action to the redux saga, with a payload of user id and checklist id
    dispatch({
      type: "DELETE_CHECKLIST",
      payload: { userID: user.id, checklistID: checklistID.checklistID },
    });

    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
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
            width: 300,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2 id="modal-title">Delete Confirmation</h2>
          <p id="modal-description">Are you sure you want to delete?</p>
          <Button onClick={handleDeleteChecklist} color="primary">
            Delete
          </Button>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ChecklistDeleteButton;
