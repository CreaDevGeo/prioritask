// * - IMPORTING -
// React
import React, { useState } from "react";
// Redux
import { useDispatch } from "react-redux";
// MUI
import { Button } from "@mui/material";

// * - TaskTitleSaveButton COMPONENT -
function TaskTitleSaveButton({
  setTaskInputPrompt,
  setTaskInputLengthPrompt,
  setOpenTaskTitleUpdateInput,
  taskTitleUpdateInput,
  taskNumber,
  priorityID,
}) {
  // * - DECLARATIONS -
  const dispatch = useDispatch();

  // * Function to create a new checklist
  const handleUpdateTaskTitleButton = () => {
    // Logging
    console.log("Update task title button clicked!");

    // * Conditional
    // if taskInput != "" then run dispatch action with priorityID
    // Else show user taskInputPrompt true, which renders taskInput Prompt with text,
    // "Make sure you enter a task title first!";
    if (taskTitleUpdateInput !== "") {
      if (taskTitleUpdateInput.length <= 50) {
        dispatch({
          type: "UPDATE_TASK",
          payload: {
            priorityID: priorityID,
            taskTitleUpdateInput: taskTitleUpdateInput,
            taskNumber: taskNumber,
          },
        });

        setTaskInputPrompt(false);
        setTaskInputLengthPrompt(false);
        setOpenTaskTitleUpdateInput(false)
      } else {
        setTaskInputPrompt(false);
        setTaskInputLengthPrompt(true);
      }
    } else {
      setTaskInputPrompt(true);
      setTaskInputLengthPrompt(false);
    }
  };

  // * - RENDERING -
  return <Button onClick={handleUpdateTaskTitleButton}>Save</Button>;
} // * - END TaskTitleSaveButton COMPONENT -

// * - END TaskTitleSaveButton COMPONENT -
export default TaskTitleSaveButton;
