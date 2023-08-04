// - IMPORTING -
// React
import React from "react";
// Components
import TasksList from "../Tasks/TasksList/TasksList";

// - PriorityItem COMPONENT -
function PriorityItem({ priority }) {
  // * Declaring tasks as variable from priority
  const tasks = priority.tasks;
  console.log(`\tTasks for Priority ${priority.priority_number} are:`, tasks);

  // - RENDERING -
  return (
    <React.Fragment>
      <center>
        <h3>Priority {priority.priority_number}</h3>
      </center>
      <div>
        <TasksList tasks={tasks} />
      </div>
    </React.Fragment>
  );
} // - END PriorityItem COMPONENT -

// * Exporting PriorityItem component
export default PriorityItem;
