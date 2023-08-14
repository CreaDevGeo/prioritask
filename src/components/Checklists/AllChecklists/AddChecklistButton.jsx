import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

function AddChecklistButton() {
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // * Declaring userID from store
  const user = useSelector((store) => store.user);

  // * Declaring useDispatch hook as variable
  const dispatch = useDispatch();

  // * Declaring checklists from store
  const allChecklists = useSelector((store) => store.checklistsReducer);

  // * Function to create a new checklist
  const handleNewChecklistButton = () => {

    if (allChecklists.length < 4) {
      // Logging
      console.log("Add new checklist button clicked.");

      // Dispatching action to create new checklist
      dispatch({
        type: "ADD_CHECKLIST",
        payload: user.id,
      });

    } else {
      // Logging and opening modal
      console.log("Cant create more than 4 checklists.");
      setOpen(true)
    }
  }; // * end handleNewChecklistButton

  return (
    <div>
      <Button onClick={handleNewChecklistButton} variant="contained" color="secondary">
         Add new checklist: {allChecklists.length}/4
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
          <h2 id="modal-title">Slow your road!</h2>
          <p id="modal-description">Don't get too ahead of your self with the checklist! You can only have 4 max.</p>
          <Button onClick={handleClose} color="secondary">
            Okay
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default AddChecklistButton;
