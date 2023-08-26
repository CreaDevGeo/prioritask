// * - IMPORTING -
// React
import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Components
import TasksList from "../../Tasks/TasksList/TasksList";
import DeletePriorityButton from "./DeletePriorityButton";
import priorityCardsTheme from "../priorityCardsTheme";
// CSS
import "../../App/App.css";
// MUI
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
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
    <ThemeProvider theme={priorityCardsTheme}>
      <Box
        sx={priorityCardsTheme.components.MuiBox.styleOverrides.root}
        component="div" 
      >
        <center>
          <h2>Priority {priorityNumber}</h2>
        </center>

        {/* Want to make a render here for all task titles */}
        <Box
          component="div"
          // className="scrollable-container"
          style={{
            flex: 1, // Fill available vertical space
            overflowY: "auto", // Enable vertical scrolling
            width: "120%", // Occupy full width
          }}
        >
          {/* TasksList component */}
          <TasksList priorityID={priorityID} />
        </Box>

        {/* Delete priority button */}
        <DeletePriorityButton
          priorityID={priorityID}
          priorityNumber={priorityNumber}
          checklistID={checklistID}
        />
      </Box>
    </ThemeProvider>
  );
} // * - END PriorityCard COMPONENT -
