// - IMPORTING -
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../ChecklistItem/ChecklistItem.css";
import PrioritiesList from "../../Priorities/PrioritiesList/PrioritiesList";
import ChecklistDeleteButton from "./ChecklistDeleteButton";

// - ChecklistItem COMPONENT -
function ChecklistItem({ checklist, checklistNumber }) {
  // const priorities = checklist.checklist_data.priorities;
  const checklistID = checklist.checklist_id;
  const priorities = checklist.priorities_data;

  // Logging
  console.log(
    `\nChecklist ${checklistNumber} with ChecklistID of ${checklistID} has ${priorities.length} priorities`
  );
  console.log("\tPriorities are:", priorities);

 

  // - RENDERING -
  return (
    <>
      <div className="checklist-item-box">
        <header className="checklist-item-header">
          <center>
            <h2 className="checklist-heading">Checklist {checklistNumber}</h2>
          </center>
        </header>

        <PrioritiesList checklistID={checklistID} priorities={priorities} />

        {/* Delete Button */}
        <ChecklistDeleteButton checklistID={checklistID} />
      </div>
    </>
  );
} // - END ChecklistItem COMPONENT -

// - EXPORTING ChecklistItem COMPONENT -
export default ChecklistItem;
