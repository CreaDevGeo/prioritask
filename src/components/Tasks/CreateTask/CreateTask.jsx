// - IMPORTING -
// React
import React, {useEffect, useState} from "react";
// Redux
import { useDispatch } from "react-redux";

// Components


// - CreateTask COMPONENT -
function CreateTask({priorityID}) {
  // * Declaring useDispatch hook as a variable
  const dispatch = useDispatch();

  // * Getting priorities from store based on checklistID

  // Logging

  // - RENDERING -
  return (
  <h3>Add Task</h3>
  );
} // - END CreateTask COMPONENT -

// * Exporting CreateTask component
export default CreateTask;
