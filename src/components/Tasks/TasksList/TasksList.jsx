// - IMPORTING -
// React
import React, {useEffect} from "react";

// Components
import TaskItem from "../TaskItem/TaskItem";

// - TasksList COMPONENT -
function TasksList({priorityID}) {
  
  
  
  // * Run on DOM load
  // useEffect(() => {
  //   dispatch({
  //     type: "FETCH_PRIORITY_TASKS",
  //     payload: { priorityID: priority.priority_id },
  //   });
  // }, []);

  // - RENDERING -
  // {
    /* Map through an array of tasks, rendering a new component for each */
  // }
  return (
    <div>
      <h2>In Tasks List</h2>
      {/* CONDITION RENDER FOR TASKS HER */}
    </div>
  );
} // - END TasksList COMPONENT -

// * Exporting TasksList component
export default TasksList;
