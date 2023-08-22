// * - IMPORTING -
// React
import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Components
import TaskItem from "../TaskItem/TaskItem";
import CreateTask from "../CreateTask/CreateTask";
import TaskItemComplete from "../TaskItem/TaskItemComplete/TaskItemComplete";

// * - TasksList COMPONENT -
function TasksList({ priorityID }) {
  // * Declaring useDispatch hook as a variable
  const dispatch = useDispatch();

  // * Getting priorities from store based on priorityID
  const tasksData = useSelector((store) => store.tasksReducer);

  // * Declaring the array of tasks as variable
  const tasksForPriority = tasksData[priorityID] || [];
  console.log("tasksData in TaskList is:", tasksForPriority);

  // Conditional for priorityID payload dispatch
  useEffect(() => {
    if (priorityID) {
      dispatch({
        type: "FETCH_TASKS",
        payload: { priorityID: priorityID },
      });
    }
  }, [dispatch, priorityID]);

  // * - RENDERING -
  return (
    <div className="task-container" style={{ textAlign: "center", overflowY: "auto", maxHeight: "100%" }}>
      {[1, 2].map((taskNumber) => {
        const matchingTask = tasksForPriority.find(
          (task) => task.task_number === taskNumber
        );

        if (matchingTask) {
          return (
            <div key={matchingTask.task_id} style={{ margin: "20px auto" }}>
              {matchingTask.is_completed ? (
                <TaskItemComplete
                  key={matchingTask.task_id}
                  priorityID={priorityID}
                  task={matchingTask}
                  taskNumber={taskNumber}
                />
              ) : (
                <TaskItem
                  key={matchingTask.task_id}
                  priorityID={priorityID}
                  task={matchingTask}
                  taskNumber={taskNumber}
                />
              )}
            </div>
          );
        } else {
          return (
            <CreateTask
              key={`createTask_${priorityID}_${taskNumber}`}
              priorityID={priorityID}
              taskNumber={taskNumber}
            />
          );
        }
      })}
    </div>
  );
}

export default TasksList;
