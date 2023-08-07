// - IMPORTING -
// React
import React from "react";
// Components
import TasksList from "../../Tasks/TasksList/TasksList";
import CreatePriority from "../CreatePriority/CreatePriority";

// - PriorityItem COMPONENT -
function PriorityItem({ priority }) {
  // * Declaring tasks as variable from priority
  const tasks = priority.tasks;
  

  // Logging priorities and tasks
  const taskCount = tasks === null || tasks.length === 0 ? 0 : tasks.length;
  const pluralize = taskCount === 1 ? "" : "s";
  console.log(
    `\t Priority ${priorityNumber} has ${taskCount} task${pluralize}`
  );



  // - RENDERING -
  return (
    <React.Fragment>
      <header>
        <center>
          <h3>Priority {priorityNumber}</h3>
        </center>
      </header>
    </React.Fragment>
  );
} // - END PriorityItem COMPONENT -

// * Exporting PriorityItem component
export default PriorityItem;
