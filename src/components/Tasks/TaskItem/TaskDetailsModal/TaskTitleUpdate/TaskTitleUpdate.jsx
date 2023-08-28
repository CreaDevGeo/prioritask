// * - IMPORTING -
// React
import React, { useState } from "react";
// MUI
import { TextField } from "@mui/material";
// Components
import TaskTitleSaveButton from "../TaskTitleSaveButton/TaskTitleSaveButton";

// * - TaskTitleUpdateInput COMPONENT -
function TaskTitleUpdate({
  setTaskTitleUpdateInput,
  taskTitleUpdateInput,
  setOpenTaskTitleUpdateInput,
  taskNumber,
  priorityID,
}) {
  // * - STATE -
  // Local state for showing text prompt of no text
  const [taskInputPrompt, setTaskInputPrompt] = useState(false);
  // Local state for showing text prompt if input is too long
  const [taskInputLengthPrompt, setTaskInputLengthPrompt] = useState(false);

  // * Function to handle task title input value change
  const handleTaskInputChange = (event) => {
    setTaskTitleUpdateInput(event.target.value);
    if (taskTitleUpdateInput.length >= 50) {
      setTaskInputLengthPrompt(true);
      setTaskInputPrompt(false);
    } else {
      setTaskInputLengthPrompt(false);
    }
  };

  // * - RENDERING -
  return (
    <>
      {taskInputPrompt === true && (
        <p>Make sure you enter a task title first!</p>
      )}
      {taskInputLengthPrompt === true && (
        <p>
          Make sure your task title isn't too long! <br />
          (50 characters max)
        </p>
      )}
      <TextField
        id="filled-basic"
        label="Update your task title"
        variant="outlined"
        onChange={handleTaskInputChange}
        value={taskTitleUpdateInput}
      />
      {/* Save Button */}
      <TaskTitleSaveButton
        taskTitleUpdateInput={taskTitleUpdateInput}
        setTaskInputPrompt={setTaskInputPrompt}
        setTaskInputLengthPrompt={setTaskInputLengthPrompt}
        setOpenTaskTitleUpdateInput={setOpenTaskTitleUpdateInput}
        taskNumber={taskNumber}
        priorityID={priorityID}
      />
    </>
  );
}

// * Exporting TaskTitleUpdateInput COMPONENT
export default TaskTitleUpdate;
