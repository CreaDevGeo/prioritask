// * - IMPORTING -
// React
import React from "react";
// MUI
import { Button } from "@mui/material";
// CSS
import "../../../../App/App.css"

// * - TaskTitleCancelButton COMPONENT -
function TaskTitleCancelButton({ setOpenTaskTitleUpdateInput }) {
  // * - RENDERING -
  return (
    // Button to close input field of task title
    <Button
      variant="outlined"
      color="primary"
      className="cancel-button"
      onClick={() => setOpenTaskTitleUpdateInput(false)}
    >
      Cancel
    </Button>
  );
} // * - TaskTitleCancelButton -

// * Exporting TaskTitleCancelButton
export default TaskTitleCancelButton;
