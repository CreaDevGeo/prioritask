// - IMPORTING -
// React
import React, { useEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Components
import ChecklistItem from "../ChecklistItem/ChecklistItem";

// - Checklists COMPONENT-
function AllChecklists() {
  // * Declaring useDispatch hook as variable
  const dispatch = useDispatch();

  // * Declaring userID from store
  const user = useSelector((store) => store.user);

  // * Declaring checklists from store
  const allChecklists = useSelector((store) => store.allChecklists);
  // Logging
  console.log("\nallChecklists is:", allChecklists);
  // Will have to do object traversal to get the data you want

  // Variable to keep track of the checklist number
  let checklistNumber = 0;

  // * Function to create a new checklist
  const handleNewChecklistButton = () => {
    // Logging
    console.log("Add new checklist button clicked.");

    // Dispatching action to create new checklist
    dispatch({
      type: "ADD_CHECKLIST",
      payload: { userID: user.id },
    });
  }; // * end handleNewChecklistButton

  // * Run on DOM load
  useEffect(() => {
    dispatch({ type: "FETCH_CHECKLISTS", payload: user.id });
  }, []);

  // - RENDERING -
  return (
    <React.Fragment>
      <center>
        <h1>Checklists</h1>
      </center>
      {/* Display the length of checklist array */}
      <button onClick={handleNewChecklistButton}>
        Add new checklist: {allChecklists.length}/4
      </button>
      <button>Sort by recent</button>

      {/* Mapping through checklist to create component */}
      <div>
        {allChecklists.map((checklist) => {
          { /* Increment checklistNumber */}
          checklistNumber++;

          return (
            <ChecklistItem
              key={checklist.checklist_id}
              checklist={checklist}
              checklistNumber={checklistNumber}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
} // * end Checklists

// - EXPORTING Checklists COMPONENT -
export default AllChecklists;
