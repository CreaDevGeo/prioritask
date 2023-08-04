// - IMPORTING -
// React
import React from "react";
// Components
import TasksList from "../Tasks/TasksList/TasksList";

// - PriorityItem COMPONENT -
function PriorityItem({ priority }) {
  // * Declaring tasks as variable from priority
  const tasks = priority.tasks;

  // Logging Priorities and tasks
  const taskCount = tasks === null || tasks.length === 0 ? 0 : tasks.length;
  const pluralize = taskCount === 1 ? "" : "s";
  console.log(
    `\t Priority ${priority.priority_number} has ${taskCount} task${pluralize}`
  );



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
