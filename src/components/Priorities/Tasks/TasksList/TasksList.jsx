// - IMPORTING -
// React
import React from "react";
import TaskItem from "../TaskItem/TaskItem";

// - PriorityTasks COMPONENT -
function TasksList({tasks}) {

  // - RENDERING -
  {
    /* Map through an array of tasks, rendering a new component for each */
  }
  return (
    <div>
      {tasks === null || tasks.length === 0 ? (
        <TaskItem />
      ) : (
        tasks.map((task) => {
          return (
            <div key={task.task_id}>
              <TaskItem task={task} /> {/* Corrected this line */}
            </div>
          );
        })
      )}
    </div>
  );
} // - END PriorityTasks COMPONENT -

// * Exporting PriorityTasks component
export default TasksList;
