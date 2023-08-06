// - IMPORTING -
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../ChecklistItem/ChecklistItem.css";
import PrioritiesList from "../../Priorities/PrioritiesList/PrioritiesList";

// - ChecklistItem COMPONENT -
function ChecklistItem({ checklist, checklistNumber }) {
  const priorities = checklist.checklist_data.priorities;
  const checklistID = checklist.checklist_id;

  // Logging
  console.log(
    `Checklist ${checklistNumber} has ${priorities.length} priorities`
  );

  // Declaring useDispatch hook as a variable
  const dispatch = useDispatch();

  // Getting userID from store
  const user = useSelector((store) => store.user);

  // Function to dispatch action with user id to remove selected checklist
  const handleDeleteChecklist = () => {
    console.log("Delete checklist button clicked");

    // Dispatch an action to the redux saga, with a payload of user id and checklist id
    dispatch({
      type: "DELETE_CHECKLIST",
      payload: { userID: user.id, checklistID: checklistID },
    });
  };

  // - RENDERING -
  return (
    <div className="checklist-item-box">
      <header className="checklist-item-header">
        <center>
          <h2>Checklist {checklistNumber}</h2>
        </center>
        <button className="edit-button" type="button">
          ...
        </button>
      </header>

      {/* Priorities */}
      <PrioritiesList checklistID={checklistID} priorities={priorities} />

      {/* Delete Button */}
      <div>
        <button onClick={handleDeleteChecklist} type="button">
          Delete
        </button>
      </div>
    </div>
  );
} // - END ChecklistItem COMPONENT -

// - EXPORTING ChecklistItem COMPONENT -
export default ChecklistItem;
