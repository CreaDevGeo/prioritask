// - IMPORTING -
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PriorityItem from "../../Priorities/PriorityItem/PriorityItem";
import CreatePriority from "../CreatePriority/CreatePriority";

// - PrioritiesList COMPONENT -
function PrioritiesList({ checklistID }) {
  // * Declaring useDispatch hook as a variable
  const dispatch = useDispatch();

  // * Getting userID from store
  const user = useSelector((store) => store.user);

  // * Getting priorities from store based on checklistID
  const prioritiesData = useSelector((store) => store.prioritiesReducer);


  // Logging
  console.log("\npriorities state data is:", prioritiesData[checklistID].prioritiesData);

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
            />
          );
        } else {
          return (
            <CreatePriority
              key={`create-priority-${checklistID}-${priorityNumber}`}
              checklistID={checklistID}
              priorityNumber={priorityNumber}
            />
          );
        }
      })}
    </div>
  );
}

// - EXPORTING -
export default PrioritiesList;
