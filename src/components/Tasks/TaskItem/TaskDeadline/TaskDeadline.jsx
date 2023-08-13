import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { IconButton } from "@mui/material";

function TaskDeadline({ priorityID, taskNumber }) {
  const [open, setOpen] = useState(false);
  const [deadlineDate, setDeadlineDate] = useState("");
  const [deadlineTime, setDeadlineTime] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSetDeadline = () => {
    // Dispatch a PUT request to update the deadline in Redux Saga
    dispatch({
      type: "UPDATE_TASK_DEADLINE",
      payload: {
        priorityID: priorityID,
        taskNumber: taskNumber,
        deadline: `${deadlineDate} ${deadlineTime}`,
      },
    });

    setOpen(false);
  };

  const dispatch = useDispatch();

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <AccessTimeIcon />
      </IconButton>
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
            width: 300,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: "1rem", // Adds spacing between elements
            alignItems: "center", // Centers the elements horizontally
          }}
        >
          <h2 id="modal-title">Set Deadline</h2>
          <TextField
            id="date"
            label="Date"
            type="date"
            value={deadlineDate}
            onChange={(e) => setDeadlineDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="time"
            label="Time"
            type="time"
            value={deadlineTime}
            onChange={(e) => setDeadlineTime(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            onClick={handleSetDeadline}
            variant="contained"
            color="primary"
          >
            Set Deadline
          </Button>
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default TaskDeadline;
