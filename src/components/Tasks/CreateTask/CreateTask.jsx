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
  const prioritiesData = useSelector((store) => store.prioritiesReducer);

  // Logging
  console.log("\npriorities state data is:", prioritiesData);

  // * Run on DOM load
  useEffect(() => {
    dispatch({
      type: "FETCH_CHECKLIST_PRIORITIES",
      payload: { userID: user.id, checklistID: checklistID },
    });
  }, []);

  // - RENDERING -
  return (
    <div className="priorities-container">
      {[1, 2, 3].map((priorityNumber) => {
        const matchingPriority = prioritiesData[checklistID]?.find(
          (priority) => priority.priority_number === priorityNumber
        );

        if (matchingPriority) {
          return (
            <PriorityItem
              key={matchingPriority.priority_id}
              checklistID={checklistID}
              priority={matchingPriority}
              priorityNumber={priorityNumber}
            />
          );
        } else {
          return (
            <CreatePriority
              key={priorityNumber}
              checklistID={checklistID}
              priorityNumber={priorityNumber}
            />
          );
        }
      })}
    </div>
  );
} // - END CreateTask COMPONENT -

// * Exporting CreateTask component
export default CreateTask;
