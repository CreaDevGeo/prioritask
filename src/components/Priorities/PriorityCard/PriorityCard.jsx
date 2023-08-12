// - IMPORTING -
// React
import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Components
import TasksList from "../../Tasks/TasksList/TasksList";
import TaskPriorityHeader from "../../Tasks/TaskPriorityHeader/TaskPriorityHeader";
import DeletePriorityButton from "./DeletePriorityButton";
// MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Modal } from "@mui/material";

// - PriorityCard COMPONENT -
export default function PriorityCard({
  checklistID,
  priority,
  priorityNumber,
  priorityID,
}) {
  // * Function to dispatch new priority via save button click
  // Meant for update
  const handleSavePriorityClick = () => {
    console.log("\nSave Priority button clicked!");

    // If priority ID null and under checklistID dispatch ADD_PRIORITY
    // Else dispatch UPDATE
    // Dispatch an action to add a priority
    dispatch({
      type: "ADD_PRIORITY",
      payload: checklistID,
    });
  }; // * end handleCreatePriorityClick

  // * Function to handle dispatch of new task
  const handleCreateTask = () => {
    console.log("Add new task button clicked!");
  }; // * end handleCreateTask

  // - RENDERING -
  return (
    <div>
      <Box
        sx={{
          top: "50%",
          left: "50%",
          width: 200,
          height: 300,
          bgcolor: "background.paper",
          borderRadius: 5,
          boxShadow: 24,
          pt: 2,
          px: 5,
          pb: 3,
        }}

      >
        <h2>Priority {priorityNumber}</h2>
        {/* Want to make a render here for all task titles */}
        <div className="task-container">
          {/* TasksList component */}
          <TasksList priorityID={priorityID} />
        </div>
        <div>
          {/* Delete priority button will go here */}
          <DeletePriorityButton priorityID={priorityID} priorityNumber={priorityNumber} />
        </div>
      </Box>
    </div>
  );
} // - END PriorityCard COMPONENT -
