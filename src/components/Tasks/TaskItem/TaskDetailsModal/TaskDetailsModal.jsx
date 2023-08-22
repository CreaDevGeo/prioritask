import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

// * - TaskDetailsModal COMPONENT -
function TaskDetailsModal({ open, handleClose, taskTitle }) {
  // * - RENDERING -
  return (
   <>
      <Box>
        {taskTitle}
      </Box>
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
          <h2 id="modal-title">Task Details</h2>
          <p>{taskTitle}</p>
        </Box>
      </Modal>
   </>
  );
}

export default TaskDetailsModal;
