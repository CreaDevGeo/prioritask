// * - IMPORTING -
// React
import React, {useState} from "react";
// MUI
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

// * - TaskDetailsModal COMPONENT -
function TaskDetailsModal({ taskTitle }) {
  // * - STATE -
  // - TaskDetailsModal -
  const [openTaskDetailsModal, setOpenTaskDetailsModal] = useState(false);

  // * - RENDERING -
  return (
    <>
      {/* Task Title w/ onClick function to open modal */}
      <p 
      onClick={() => setOpenTaskDetailsModal(true)}
      style={{cursor: "pointer"}}
      >
        {taskTitle}
        </p>

      {/* Modal Showing Task Details */}
      <Modal
        open={openTaskDetailsModal} // Determining modal open/close
        onClose={() => setOpenTaskDetailsModal(false)} // Setting modal close
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
