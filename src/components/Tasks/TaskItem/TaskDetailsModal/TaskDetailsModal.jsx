// * - IMPORTING -
// React
import React, { useState } from "react";
// MUI
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Input } from "@mui/material";
// CSS
import "./TaskDetailsModal.css";
// Components
import TaskTitleCancelButton from "./TaskTitleCancelButton/TaskTitleCancelButton";
import TaskTitleUpdate from "./TaskTitleUpdate/TaskTitleUpdate";

// * - TaskDetailsModal COMPONENT -
function TaskDetailsModal({ taskTitle, taskNumber, priorityID }) {
  // * - STATE -
  // - TaskDetailsModal -
  // Modal open/close
  const [openTaskDetailsModal, setOpenTaskDetailsModal] = useState(false);
  // Open/close input field of task title update
  const [openTaskTitleUpdateInput, setOpenTaskTitleUpdateInput] =
    useState(false);
  // Task title input value
  const [taskTitleUpdateInput, setTaskTitleUpdateInput] = useState(taskTitle);

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
              {/* Component to update task title */}
              <TaskTitleUpdate
                setTaskTitleUpdateInput={setTaskTitleUpdateInput}
                taskTitleUpdateInput={taskTitleUpdateInput}
                setOpenTaskTitleUpdateInput={setOpenTaskTitleUpdateInput}
                taskNumber={taskNumber}
                priorityID={priorityID}
              />

              {/* Cancel Button */}
              <TaskTitleCancelButton
                setOpenTaskTitleUpdateInput={setOpenTaskTitleUpdateInput}
                setTaskTitleUpdateInput={setTaskTitleUpdateInput}
                taskTitle={taskTitle}
              />
            </form>
          ) : (
            <p
              onClick={() => setOpenTaskTitleUpdateInput(true)}
              className="task-title-open-modal"
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
