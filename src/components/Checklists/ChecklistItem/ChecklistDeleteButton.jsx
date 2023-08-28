// * - IMPORTING -
// React
import React, { useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// MUI
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
// CSS
import "../../App/App.css"

function ChecklistDeleteButton({checklistID, checklistNumber}) {
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
      payload: { userID: user.id, checklistID: checklistID },
    });

    handleClose();
  };
  // * - RENDERING -
  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{ backgroundColor: "#145c67" }}
      >
        Delete Checklist
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box className="open-modal">
          <h2>Delete Confirmation</h2>
          <p>
            Are you sure you want to delete{" "}
            <strong>Checklist {checklistNumber}</strong>?
          </p>
          <Button
            onClick={handleDeleteChecklist}
            color="error"
          >
            Delete
          </Button>
          <Button
            onClick={handleClose}
            className="cancel-button"
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ChecklistDeleteButton;
