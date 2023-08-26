// * - IMPORTING -
// React
import React, { useEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
// CSS
import "./AllChecklists.css";
// Components
import ChecklistItem from "../ChecklistItem/ChecklistItem";
import AddChecklistButton from "./AddChecklistButton";
import EmptyChecklists from "../EmptyChecklists/EmptyChecklists";

// * - Checklists COMPONENT-
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

  // * - RENDERING -
  return (
    <div>
      <header className="all-checklists-header">
        <h1>Checklists</h1>
        <div className="add-new-checklist-button">
          <AddChecklistButton />
        </div>
      </header>

      <main
        style={{
          width: "100%",
          overflowX: "auto",
        }}
      >
        {/* Conditional rendering based on allChecklists length */}
        {allChecklists.length === 0 ? (
          <EmptyChecklists />
        ) : (
          // Holding all checklists
          <div
            className={
              allChecklists.length > 3
                ? "all-checklists-container-flex-start"
                : "all-checklists-container"
            }
          >
            {allChecklists.map((checklist) => {
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
        )}
      </main>
    </div>
  );
} // * end Checklists

// * - EXPORTING Checklists COMPONENT -
export default AllChecklists;
