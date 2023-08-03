// - IMPORTING -
// React
import React, { useEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";

// - Checklists COMPONENT-
function Checklists() {
  // Will take in checklist array from redux store, map through adding a checklist to DOM

  // * Declaring userID from store
  const user = useSelector((store) => store.user);
  
  // * Declaring checklists from store
  const checklists = useSelector((store) => store.checklists);
  // Logging
  console.log("checklists is:", checklists);
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
