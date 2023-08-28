// * - IMPORTING -
// React
import React, {useState} from "react";
// MUI
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Input } from "@mui/material";
// CSS
import "./TaskDetailsModal.css"
// Components
import TaskTitleCancelButton from "./TaskTitleCancelButton/TaskTitleCancelButton";

// * - TaskDetailsModal COMPONENT -
function TaskDetailsModal({ taskTitle }) {
  // * - STATE -
  // - TaskDetailsModal -
  const [openTaskDetailsModal, setOpenTaskDetailsModal] = useState(false); // Modal
  const [openTaskTitleUpdateInput, setOpenTaskTitleUpdateInput] = useState(false) // Open/close input field of task title update
  const [taskTitleUpdateInput, setTaskTitleUpdateInput] = useState(taskTitle) // Task title input value
  
 
  // * - RENDERING -
  return (
    <>
      {/* Task Title w/ onClick function to open modal */}
      <p
        onClick={() => setOpenTaskDetailsModal(true)}
        className="task-title-closed-modal"
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
        <Box className="task-open-modal-container">
          <h2 id="modal-title">Task Details</h2>
          {/* Task Title Functionality */}
            {/* Conditionally render input field if openTaskTitleUpdateInput is true */}
            {openTaskTitleUpdateInput ? (
              <form>
                <Input
                  value={taskTitleUpdateInput}
                  onChange={(event) =>
                    setTaskTitleUpdateInput(event.target.value)
                  }
                />
                {/* Save button component to update input field */}
                
                <TaskTitleCancelButton
                  setOpenTaskTitleUpdateInput={setOpenTaskTitleUpdateInput}
                />
                {/* Cancel Button */}
              </form>
            ) : (
              <p
                onClick={() => setOpenTaskTitleUpdateInput(true)}
                style={{ cursor: "pointer" }}
              >
                {taskTitle}
              </p>
            )}
        </Box>
      </Modal>
    </>
  );
}

export default TaskDetailsModal;
