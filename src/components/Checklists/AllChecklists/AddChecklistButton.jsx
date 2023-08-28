// * - IMPORTING -
// React
import React, { useState } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
// MUI
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CheckIcon from "@mui/icons-material/Check";

// * - AddChecklistButton COMPONENT -
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
      <Button
        style={{
          backgroundColor: "#edf7c0",
          color: "black",
          fontFamily: "poppins, sans-serif",
          fontSize: "1rem",
          fontWeight: "600",
        }}
        onClick={handleNewChecklistButton}
        variant="contained"
        color="primary"
      >
        Add new checklist: {allChecklists.length}/4
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box className="open-modal">
          <h2 id="modal-title">Slow your road!</h2>
          <p id="modal-description">You can only have 4 checklists max.</p>
          <Button
            onClick={handleClose}
            style={{ color: "#26abc0" }}
            startIcon={<CheckIcon />}
          >
            Okay
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default AddChecklistButton;
