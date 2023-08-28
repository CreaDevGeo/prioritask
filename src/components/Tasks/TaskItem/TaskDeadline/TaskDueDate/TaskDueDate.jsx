// * - IMPORTING -
// React
import React from "react";
// Components
import PastDueIndicator from "../PastDueIndicator/PastDueIndicator";

// * - TaskDueDate COMPONENT -
function TaskDueDate({ isPastDue, taskDueDate }) {
 
// * - RENDERING -
    return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2px"
      }}
      className="due-date-container"
    >
    {/* Component to indicate past due text */}
      <PastDueIndicator isPastDue={isPastDue} />
      <div>
        {/* Past due true, render class */}
        <p
          className={isPastDue ? "past-due" : ""}
          style={{
            fontSize: "1rem",
            fontWeight: "400",
            marginTop: "-35px"
          }}
        >
          {taskDueDate}
        </p>
      </div>
    </div>
  );
}; // * - END TaskDueDate COMPONENT -

// * Exporting TaskDueDate Component
export default TaskDueDate;
