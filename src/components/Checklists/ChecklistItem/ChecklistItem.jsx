// - IMPORTING -
// React
import React from "react";
// Css
import "../ChecklistItem/ChecklistItem.css";
import PriorityItem from "../../PriorityItem/PriorityItem";
// Components

// - ChecklistItem COMPONENT -
function ChecklistItem({ checklist }) {
  // Priorities of checklist
  const priorities = checklist.checklist_item_priorities;

  // * Logging
  console.log(`\nchecklist ${checklist.checklist_id} is:`, checklist);
  console.log(`priorities are:`, priorities);
  // Probably gotta store priorities in ChecklistItem objects as property values and store in indiviual redux states

  // - RENDERING -
  return (
    <React.Fragment>
      <div className="checklist-item-box">
        <header className="checklist-item-header">
          <button className="rank-button" type="button">Rank:{checklist.checklist_ranking} </button>
          <center>
            <h2>Checklist {checklist.checklist_id}</h2>
          </center>
          <button className="edit-button" type="button">
            ⚪️⚪️⚪️
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
      </div>
    </React.Fragment>
  );
} // - END ChecklistItem COMPONENT -

// - EXPORTING ChecklistItem COMPONENT -
export default ChecklistItem;
