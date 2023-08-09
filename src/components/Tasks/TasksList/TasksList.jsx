// - IMPORTING -
// React
import React, {useEffect} from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Components
import TaskItem from "../TaskItem/TaskItem";
import CreateTask from "../CreateTask/CreateTask";

// - TasksList COMPONENT -
function TasksList({ priorityID }) {
  // * Declaring useDispatch hook as a variable
  const dispatch = useDispatch();

  // * Getting priorities from store based on priorityID
  const tasksData = useSelector((store) => store.tasksReducer);

  // Logging
  console.log(
    "\ntasks state data is:",
    tasksData,
    "with priorityID:",
    priorityID
  );

  // Conditional for priorityID payload dispatch
  useEffect(() => {
    if (priorityID) {
      dispatch({
        type: "FETCH_PRIORITY_TASKS",
        payload: { priorityID: priorityID },
      });
    }
  }, [priorityID]);

  // - RENDERING -
  return (
    <div className="task-container">
      {tasksData[priorityID]?.length > 0 ? (
        tasksData[priorityID].map((task) => (
          <TaskItem key={task.task_id} priorityID={priorityID} task={task} />
        ))
      ) : (
        <CreateTask key={`createTask_${priorityID}`} priorityID={priorityID} />
      )}
      <h2>TasksList</h2>
    </div>
  );


} // - END TasksList COMPONENT -

// * Exporting TasksList component
export default TasksList;
