// * - IMPORTING -
// React
import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Components
import TasksList from "../../Tasks/TasksList/TasksList";
import DeletePriorityButton from "./DeletePriorityButton";
import "../../App/App.css";
// MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Modal } from "@mui/material";

// * - PriorityCard COMPONENT -
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

  // * - RENDERING -
  return (
    <div>
      <Box
        sx={{
          top: "50%",
          left: "50%",
          width: 300,
          height: 400,
          bgcolor: "#d03c1b",
          borderRadius: 5,
          boxShadow: 24,
          pt: 2,
          px: 5,
          pb: 3,
          fontFamily: "poppins, sans-serif",
          fontSize: "1.5rem",
          fontWeight: "600",
          color: "white",
          lineHeight: "35px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start", // Align the content to the left
        }}
      >
        <center>
          <h2>Priority {priorityNumber}</h2>
        </center>

        {/* Want to make a render here for all task titles */}
        <div
          className="scrollable-container"
          style={{
            maxHeight: "230px", // Set the maximum height
            overflowY: "auto", // Enable vertical scrolling
          }}
        >
          {/* TasksList component */}
          <TasksList priorityID={priorityID} />
        </div>
        <div
          style={{
            // Adjust margin and padding as needed
            margin: "10px", // Add some margin
            padding: "10px", // Add some padding
            display: "flex",
            justifyContent: "flex-end", // Move content to the right
            alignItems: "flex-end", // Align content to the bottom
          }}
        >
          {/* Delete priority button */}
          <DeletePriorityButton
            priorityID={priorityID}
            priorityNumber={priorityNumber}
            checklistID={checklistID}
          />
        </div>
      </Box>
    </div>
  );
} // * - END PriorityCard COMPONENT -
