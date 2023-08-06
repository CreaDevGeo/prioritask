// - IMPORTING -
// React
import React from "react";
// Components
import PriorityItem from "../../Priorities/PriorityItem/PriorityItem";
import CreatePriority from "../CreatePriority/CreatePriority";

// - PrioritiesList COMPONENT -
function PrioritiesList({ checklistID, priorities }) {
  // - RENDERING -
  return (
    <section className="priorities-container">
      {/* Mapping through priorities */}
      {priorities.map((priority) => {
        const priorityNumber = priority.priority_number;
        {/* Want next priority, if also null  */}


        return (
          <div key={priority.priority_id} className="priorities-card">
            {/* Conditional rendering based on priorityNumber */}
            {priorityNumber === null ? (
              <CreatePriority checklistID={checklistID} />
            ) : (
              <div>
                  <PriorityItem priority={priority} />
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default PrioritiesList;
