// * - IMPORTING -
// React
import React from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// MUI
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
// Components
import priorityCardsTheme from "../priorityCardsTheme";

// * - CreatePriority COMPONENT -
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
    <ThemeProvider theme={priorityCardsTheme}>
      <Box
        sx={priorityCardsTheme.components.MuiBox.styleOverrides.root}
        component="div"
        onClick={handleAddNewPriority}
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
    </ThemeProvider>
  );
} // * - END CreatePriority COMPONENT -
