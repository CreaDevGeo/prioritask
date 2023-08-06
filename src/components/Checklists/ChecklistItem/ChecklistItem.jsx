// - IMPORTING -
// React
import React from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Css
import "../ChecklistItem/ChecklistItem.css";
import PriorityItem from "../../Priorities/PriorityItem/PriorityItem";
// Components

// - ChecklistItem COMPONENT -
function ChecklistItem({ checklist, checklistNumber }) {
  // Priorities of checklist
  const priorities = checklist.checklist_data.priorities;
  // * Logging
  console.log(
    `\nchecklist ${checklistNumber} has ${priorities.length} priorities`
  );
  console.log(
    `Checklist with number: ${checklistNumber} has ${priorities.length} priorities`
  );

  // * Declaring useDispatch hook as variable
  const dispatch = useDispatch();

  // * Declaring userID from store
  const user = useSelector((store) => store.user);

  // Function to dispatch action with user id to remove selected checklist
  const handleDeleteChecklist = () => {
    console.log("Delete checklist button clicked");

    /*  On click of delete button plan
      1.  Dispatch an action to the redux saga, with a payload of user id and checklist id ✅
      2.  In redux saga, send DELETE request with dynamic url using user id to server ✅
      3.  In server checklists router...
        - want to make delete request that will target user id and checklist id for deletion with query
        - query to update the checklist number for the user
    */

    // Dispatch an action to the redux saga, with a payload of user id and checklist id
    dispatch({
      type: "DELETE_CHECKLIST",
      payload: { userID: user.id, checklistID: checklist.checklist_id },
    });
  }; // * end handleDeleteChecklist

  // - RENDERING -
  return (
    <React.Fragment>
      <div className="checklist-item-box">
        <header className="checklist-item-header">
          <button className="rank-button" type="button">
            Rank:{checklist.checklist_ranking}
          </button>
          <center>
            <h2>Checklist {checklistNumber}</h2>
          </center>
          <button className="edit-button" type="button">
            ...
          </button>
        </header>
        {/* Map checklist, creating a component for each priority */}
        {/* Priorities */}
        <section className="priorities-container">
          {priorities.map((priority) => {
            return (
              <div key={priority.priority_id} className="priorities-card">
                <PriorityItem priority={priority} />
              </div>
            );
          })}
        </section>

        {/* Delete Button */}
        <div>
          <button onClick={handleDeleteChecklist} type="submit">
            Delete
          </button>
        </div>
      </div>
    </React.Fragment>
  );
} // - END ChecklistItem COMPONENT -

// - EXPORTING ChecklistItem COMPONENT -
export default ChecklistItem;
