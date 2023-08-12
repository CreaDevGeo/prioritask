// - IMPORTING -
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PriorityCard from "../PriorityCard/PriorityCard";
import CreatePriority from "../CreatePriority/CreatePriority";

// - PrioritiesList COMPONENT -
function PrioritiesList({ checklistID, priorities }) {
  // * Declaring useDispatch hook as a variable
  const dispatch = useDispatch();

  // * Getting userID from store
  const user = useSelector((store) => store.user);


  // * Getting priorities from store based on checklistID
  const prioritiesData = useSelector((store) => store.prioritiesReducer);
  console.log("prioritiesData in PrioritiesList is:", prioritiesData);

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

        let priorityID = null;

        if (matchingPriority) {
          priorityID = matchingPriority.priority_id;
        }

        return matchingPriority ? (
          <PriorityCard
            key={matchingPriority.priority_id}
            checklistID={checklistID}
            priority={matchingPriority}
            priorityID={matchingPriority.priority_id}
            priorityNumber={priorityNumber}
          />
        ) : (
          <CreatePriority
            key={priorityNumber}
            checklistID={checklistID}
            priorityID={priorityID}
            priorityNumber={priorityNumber}
          />
        );
      })}
    </div>
  );
}

// - EXPORTING -
export default PrioritiesList;
