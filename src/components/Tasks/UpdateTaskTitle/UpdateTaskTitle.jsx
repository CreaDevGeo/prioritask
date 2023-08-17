import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function UpdateTaskTitle({ taskTitle, onSave, onCancel }) {
  const [editedTitle, setEditedTitle] = useState(taskTitle);

  const handleTitleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  return (
    <div>
      <TextField
        label="Edit Task Title"
        variant="outlined"
        value={editedTitle}
        onChange={handleTitleChange}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => onSave(editedTitle)}
      >
        Save
      </Button>
      <Button variant="outlined" color="primary" onClick={onCancel}>
        Cancel
      </Button>
    </div>
  );
}

export default UpdateTaskTitle;
