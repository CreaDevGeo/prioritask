// - IMPORTING -
// React
import React, { useEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Components
import ChecklistItem from "../ChecklistItem/ChecklistItem";
import AddChecklistButton from "./AddChecklistButton";

// - Checklists COMPONENT-
function AllChecklists() {
  // * Declaring useDispatch hook as variable
  const dispatch = useDispatch();

  // * Declaring userID from store
  const user = useSelector((store) => store.user);

  // * Declaring checklists from store
  const allChecklists = useSelector((store) => store.checklistsReducer);
  // Logging
  console.log("\nallChecklists is:", allChecklists);
  // Will have to do object traversal to get the data you want

  // Variable to keep track of the checklist number
  let checklistNumber = 0;

  // * Run on DOM load
  useEffect(() => {
    dispatch({ type: "FETCH_ALL_CHECKLISTS", payload: user.id });
  }, []);

  // - RENDERING -
  return (
    <div >
      <center>
        <h1>Checklists</h1>
      </center>
      {/* Display the length of checklist array */}
      <AddChecklistButton />
      {/* <button>Sort by rank</button> */}
      {/* Mapping through checklist to create component */}
      <div>
        {allChecklists.map((checklist) => {
          // Increment checklistNumber
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
    </div>
  );
} // * end Checklists

// - EXPORTING Checklists COMPONENT -
export default AllChecklists;
