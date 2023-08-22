// * - IMPORTING -
// React
import React, { useState } from "react";
// Redux
import { useSelector } from "react-redux";
// MUI
import { Button, Modal, Box, TextField } from "@mui/material";
// CSS
import "../../App/App.css";
// Components
import DeleteTaskButton from "./DeleteTaskButton";
import TaskDeadline from "./TaskDeadline/TaskDeadline";
import TaskComplete from "./TaskComplete/TaskComplete";
import TaskDetailsModal from "../TaskDetailsModal/TaskDetailsModal";
import TaskDueDate from "./TaskDeadline/TaskDueDate/TaskDueDate";

// * - TaskItem COMPONENT -
function TaskItem({ priorityID, taskNumber, task }) {
  // * - DECLARATIONS -
  // Declaring user from store
  const user = useSelector((store) => store.user);
  // Declaring userID from store
  const userID = user.id;

  // * - STATE -

  // - NEW TASK FORM -
  // Local state for newTask
  const [taskInput, setTaskInput] = useState("");
  // Local state for showing text prompt
  const [taskInputPrompt, setTaskInputPrompt] = useState(false);

  // - PAST DUE -
  // Get the current date
  const currentDate = new Date();
  // Check if the task's deadline exceeds the current date
  const isPastDue = task.deadline && new Date(task.deadline) < currentDate;


  // * - RENDERING -
  return (
    // * Task Item Card
    <Box
      sx={{
        width: "90%",
        bgcolor: "background.paper",
        borderRadius: 5,
        boxShadow: 9,
        p: 4,
        margin: "10px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "black",
        fontSize: "1.27rem",
      }}
    >
      {/* - HEADER OF TaskItem CARD -  */}
      {/* Task number, event buttons, and due date */}
      <header>
        <center>
          <h3
            style={{
              margin: "3px auto 3px",
              cursor: "pointer",
            }}
          >
            {`Task ${taskNumber}`}
          </h3>
        </center>

        {/* Task Event Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "3px auto",
          }}
        >
          {/* Task Complete Button */}
          <TaskComplete
            priorityID={priorityID}
            taskNumber={taskNumber}
            taskCompletion={task.is_completed}
          />
          {/* Set Task Deadline Button */}
          <TaskDeadline priorityID={priorityID} taskNumber={taskNumber} />
          {/* Task Delete Button */}
          <DeleteTaskButton priorityID={priorityID} taskNumber={taskNumber} />
        </div>

        {/* Task Due Date Component to show due date */}
        <TaskDueDate
          isPastDue={isPastDue}
          taskDueDate={task.due_date_formatted}
        />
      </header>
      {/* - END HEADER OF TaskItem CARD - */}

      {/* - MAIN OF TaskItem CARD-  */}
      {/* Modal of Task */}
      <main>
      </main>
      {/* - END MAIN OF TaskItem CARD - */}
    </Box>
    // * End Task Item Card
  );
}

export default TaskItem;
