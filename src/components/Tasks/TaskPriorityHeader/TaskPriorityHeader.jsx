// - IMPORTING -
// React
import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";

// - TaskPriorityHeader COMPONENT -
function TaskPriorityHeader({ priorityID }) {
  // * Declaring useDispatch hook as a variable
  const dispatch = useDispatch();

  // * Getting priorities from store based on priorityID
  const tasksData = useSelector((store) => store.tasksReducer);

  // * Declaring the array of tasks as variable
  const tasksForPriority = tasksData[priorityID] || [];

  // Conditional for priorityID payload dispatch
  useEffect(() => {
    if (priorityID) {
      dispatch({
        type: "FETCH_PRIORITY_TASKS",
        payload: { priorityID: priorityID },
      });
    }
  }, [dispatch, priorityID]);

  // - RENDERING -
  return (
    <div className="task-container">
      {[1, 2].map((taskNumber) => {
        const matchingTask = tasksForPriority.find(
          (task) => task.task_number === taskNumber
        );

        if (matchingTask) {
          return <h3 key={`task_${taskNumber}`}>{matchingTask.task_title}</h3>;
        } else {
          return <h3 key={`task_${taskNumber}`}>Add a task</h3>;
        }
      })}
    </div>
  );
} // - END TaskPriorityHeader COMPONENT -

// * Exporting TaskPriorityHeader component
export default TaskPriorityHeader;
