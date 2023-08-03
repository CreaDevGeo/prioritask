// - IMPORTING -
// React
import React from "react";
// Components
import PriorityTasks from "../PriorityTasks/PriorityTasks";

// - PriorityItem COMPONENT -
function PriorityItem({ priority }) {
  // * Declaring tasks as variable from priority
  const tasks = priority.tasks;

  // - RENDERING -
  return (
    <React.Fragment>
      <center>
        <h3>Priority {priority.priority_number}</h3>
      </center>
      {/* Map through an array of tasks, rendering new component for each */}
      <div>
        {tasks === null || tasks.length === 0 ? (
          <p>add a task</p>
        ) : (
          tasks.map((task) => {
            return (
              <div key={task.task_id}>
                <PriorityTasks />
              </div>
            );
          })
        )}
      </div>
    </React.Fragment>
  );
} // - END PriorityItem COMPONENT -

// * Exporting PriorityItem component
export default PriorityItem;
