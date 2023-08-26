// * - IMPORTING -
// React
import React, { useEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
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
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // Center horizontally
          margin: "30px 50px 3px",
        }}
      >
        <h1
          style={{
            fontFamily: "poppins, sans-serif",
            fontSize: "7rem",
            fontWeight: "800",
            marginRight: "1rem",
          }}
        >
          Checklists
        </h1>
        <div
          style={{
            width: "9rem",
          }}
        >
          <AddChecklistButton />
        </div>
      </header>
      {/* Conditional rendering based on allChecklists length */}
        {allChecklists.length === 0 ? (
          <EmptyChecklists />
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap",  justifyContent:"center",gap: "2rem" }}>
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
      </div>
  );
} // * end Checklists

// * - EXPORTING Checklists COMPONENT -
export default AllChecklists;

