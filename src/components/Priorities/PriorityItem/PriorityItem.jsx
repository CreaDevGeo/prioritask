// - IMPORTING -
// React
import React, {useEffect} from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Components
import TasksList from "../../Tasks/TasksList/TasksList";
import TaskPriorityHeader from "../../Tasks/TaskPriorityHeader/TaskPriorityHeader";
// MUI
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";


// - PriorityItem COMPONENT -
export default function PriorityItem({ checklistID, priority, priorityNumber, priorityID }) {
  // * States for modal open and close functionality
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // * Getting priorities from store based on priorityID
  const tasksData = useSelector((store) => store.tasksReducer);
  // * Declaring the array of tasks as variable
  const tasksForPriority = tasksData[priorityID] || [];

  // * Declaring tasks as variable from priority
  const tasks = priority.tasks;

  // * Function to dispatch new priority via save button click
  // Meant for update
  function handleSavePriorityClick() {
    console.log("\nSave Priority button clicked!");

    // If priority ID null and under checklistID dispatch ADD_PRIORITY
    // Else dispatch UPDATE
    // Dispatch an action to add a priority
    dispatch({
      type: "ADD_PRIORITY",
      payload: checklistID,
    });
  } // * end handleCreatePriorityClick

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
        onClick={handleOpen}
      >
        <h2>Priority {priorityNumber}</h2>
        {/* Want to make a render here for all task titles */}
        <div className="task-container">
          {/* TaskPriorityHeader component */}
          <TaskPriorityHeader priorityID={priorityID} />
        </div>
        <div>
          {/* Delete priority button will go here */}
          <Button>Delete</Button>
        </div>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%", // Center vertically
            left: "50%", // Center horizontally
            transform: "translate(-50%, -50%)", // Center both horizontally and vertically
            width: 300,
            height: 500,
            bgcolor: "background.paper",
            borderRadius: 5,
            boxShadow: 24,
            pt: 2,
            px: 5,
            pb: 3,
          }}
        >
          <h2 style={{ textAlign: "center" }} id="parent-modal-title">
            Priority {priorityNumber}
            {/* TasksList component */}
            <TasksList priorityID={priorityID} />
          </h2>
          {/* Delete and cancel buttons */}
          <div>
            {/* <Button onClick={handleSavePriorityClick}>Save Priority</Button> */}
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
} // - END CreatePriority COMPONENT -


// * MUI Modal Styling
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
