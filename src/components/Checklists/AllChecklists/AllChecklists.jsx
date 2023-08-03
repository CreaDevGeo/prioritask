// - IMPORTING -
// React
import React, { useEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Components
import ChecklistItem from "../ChecklistItem/ChecklistItem";

// - Checklists COMPONENT-
function AllChecklists() {
  // Will take in checklist array from redux store, map through adding a checklist to DOM

  // * Declaring userID from store
  const user = useSelector((store) => store.user);
  
  // * Declaring checklists from store
  const allChecklists = useSelector((store) => store.allChecklists);
  // Logging
  console.log("\nallChecklists is:", allChecklists);
  // Will have to do object traversal to get the data you want

  // * Declaring useDispatch hook as variable
  const dispatch = useDispatch();

  // * Function to create a new checklist
  const handleNewChecklistButton = () => {
    // Logging
    console.log("Add new checklist button clicked.");
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
        Add new checklist: {allChecklists.length}
      </button>
      <button>Sort by recent</button>

      {/* Mapping through checklist to create component */}
      <div>
      {allChecklists.map((checklist) => {
        return (
          <ChecklistItem key={checklist.checklist_id} checklist={checklist}/>
        )
      })} 
      </div>
    </React.Fragment>
  );
} // * end Checklists

// - EXPORTING Checklists COMPONENT -
export default AllChecklists;
