// * - IMPORTING -
import React from "react";
import { Modal, Box, Button, TextField } from "@mui/material";

// * - TaskDetailsModal COMPONENT -
function TaskDetailsModal({
  open,
  handleClose,
  isEditingTitleInModal,
  taskInput,
  setTaskInput,
  handleSaveEditedTitleInModal,
  handleCancelEditButton,
  task,
  taskInputPrompt,
  taskInputLengthPrompt,
}) {

    // * - RENDERING -
  return (
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
        {/* Modal Heading */}
        <h2
          style={{
            fontFamily: "poppins, sans-serif",
            fontSize: "2rem",
          }}
          id="modal-title"
        >
          Task Details
        </h2>
        {/* Conditional Prompt messaging */}
        <h3
          style={{
            fontFamily: "poppins, sans-serif",
            fontSize: "1.3rem",
          }}
        >
          {/* False on default to show text field */}
          {isEditingTitleInModal ? (
            <div>
              <TextField
                id="filled-basic"
                label={"Update your task title"}
                variant="outlined"
                onChange={(event) => setTaskInput(event.target.value)}
                value={taskInput}
              />

              <Button variant="outlined" onClick={handleSaveEditedTitleInModal}>
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
          {open && taskInputPrompt && (
            <p>Make sure you enter a task title first!</p>
          )}
          {open && taskInputLengthPrompt && (
            <p>
              Make sure your task title isn't too long! <br />
              (50 characters max)
            </p>
          )}
        </h3>
      </Box>
    </Modal>
  );
}; // * - END TaskDetailsModal COMPONENT -

// * - EXPORTING TaskDetailsModal -
export default TaskDetailsModal;
