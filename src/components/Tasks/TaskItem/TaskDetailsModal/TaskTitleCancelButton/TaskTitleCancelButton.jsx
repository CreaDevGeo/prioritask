// * - IMPORTING -
// React
import React from "react";
// MUI
import { Button } from "@mui/material";
// CSS
import "../../../../App/App.css";

// * - TaskTitleCancelButton COMPONENT -
function TaskTitleCancelButton({
  setOpenTaskTitleUpdateInput,
  setTaskTitleUpdateInput,
  taskTitle,
}) {
  // Function to cancel input field and reset text input to task title
  const handleCancelButton = () => {
    setOpenTaskTitleUpdateInput(false);
    setTaskTitleUpdateInput(taskTitle);
  };

  // * - RENDERING -
  return (
    // Button to close input field of task title
    <Button
      variant="outlined"
      color="primary"
      className="cancel-button"
      onClick={handleCancelButton}
    >
      Cancel
    </Button>
  );
} // * - TaskTitleCancelButton -

// * Exporting TaskTitleCancelButton
export default TaskTitleCancelButton;
