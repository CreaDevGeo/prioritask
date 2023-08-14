import React from "react";
import { useDispatch } from "react-redux";
import "../../../App/App.css"
import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function TaskItemComplete({ priorityID, taskNumber, task }) {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Box
        sx={{
          width: "90%",
          bgcolor: "background.paper",
          borderRadius: 5,
          boxShadow: 5,
          p: 4,
        }}
      >
        <header
        style= {{fontFamily: "poppins, sans-serif",
          fontSize: "1rem",
          fontWeight: "600",
          color: "black",
          lineHeight: "35px",}}
        >
          <center>
            <CheckCircleIcon />
            <h2
              className={task.is_completed ? "strikethrough" : ""}
              style={{
                margin: "3px auto 3px",
              }}
            >
              Task {taskNumber}
            </h2>
            <h3
              className={task.is_completed ? "strikethrough" : ""}
              style={{
                margin: "3px auto 3px",
                
              }}
            >
              {task.task_title}
            </h3>
          </center>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "3px auto 3px",
            }}
          ></div>
          <div className="due-date-container">
            <p>
              Completed on: <br />
              {task.completion_date_formatted}
            </p>
          </div>
        </header>
      </Box>
    </div>
  );
}

export default TaskItemComplete;
