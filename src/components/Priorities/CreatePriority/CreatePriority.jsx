// - IMPORTING -
// React
import React from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// MUI
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
// Components

// - CreatePriority COMPONENT -
export default function CreatePriority({ checklistID, priorityNumber }) {
  //  * Declaring useDispatch Redux hook state as variable
  const dispatch = useDispatch();

  // * Declaring user id from redux store to send refresh of checklists
  const user = useSelector((store) => store.user);
  // * Declaring user's id as variable
  const userID = user.id;

  // * Function to dispatch new priority via save button click
  // Meant for update
  function handleAddNewPriority() {
    console.log("\nAdd new priority button clicked!");

    // Dispatch an action to add a priority and refresh DOM
    dispatch({
      type: "ADD_PRIORITY",
      payload: {
        checklistID: checklistID,
        priorityNumber: priorityNumber,
        userID: userID,
      },
    });
  } // * end handleCreatePriorityClick

  // * Function to handle dispatch of new task
  const handleCreateTask = () => {
    console.log("Add new task button clicked!");
  }; // * end handleCreateTask

  return (
    <div>
      <Box
        onClick={handleAddNewPriority}
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
        }}
      >
        <h2>Create Priority {priorityNumber}</h2>
        <div>
          <Button
            style={{
              color: "white",
            }}
            onClick={handleAddNewPriority}
          >
            Create a new priority
          </Button>
        </div>
      </Box>
    </div>
  );
} // - END CreatePriority COMPONENT -
