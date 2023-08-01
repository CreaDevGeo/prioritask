// - IMPORTING -
// React
import React from "react";

// - Checklists COMPONENT-
function Checklists() {
  // Will take in checklist array from redux store, map through adding a checklist to DOM

  // Function to create a new checklist
  const handleNewChecklistButton = () => {
    // Logging 
    console.log("Add new checklist button clicked.");
  }; // * end handleNewChecklistButton

  return (
    <React.Fragment>
      <center>
        <h1>Checklists</h1>
      </center>
      {/* Display the length of checklist array */}
      <button onClick={handleNewChecklistButton}>Add new checklist: 1/4</button>
      <button>Sort by recent</button>
    </React.Fragment>
  );
} // * end Checklists

// - EXPORTING Checklists COMPONENT -
export default Checklists;
