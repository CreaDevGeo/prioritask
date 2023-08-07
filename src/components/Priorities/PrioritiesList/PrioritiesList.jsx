// - IMPORTING -
// React
import React from "react";
// Components
import PriorityItem from "../../Priorities/PriorityItem/PriorityItem";
import CreatePriority from "../CreatePriority/CreatePriority";

// - PrioritiesList COMPONENT -
function PrioritiesList({ checklistID, priorities }) {
// * Declaring priorities' values as object with properties


  // - RENDERING -
  // return (
  //   <div className="priorities-container">
  //     {priorities.map((priority, index) =>
  //       priority.priority_number !== null ? (
  //         <PriorityItem
  //           key={priority.id}
  //           checklistID={checklistID}
  //           priority={priority}
  //         />
  //       ) : (
  //         <CreatePriority
  //           key={index}
  //           checklistID={checklistID}
  //           priorityNumber={`Priority ${index + 1}`}
  //         />
  //       )
  //     )}
  //   </div>
  // );
}

export default PrioritiesList;
