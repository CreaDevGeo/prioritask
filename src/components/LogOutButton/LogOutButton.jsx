// * - IMPORTING -
// React
import React from "react";
// Redux
import { useDispatch } from "react-redux";

// * - LogOutButton Component -
function LogOutButton(props) {
  // * Declaring useDispatch as variable
  const dispatch = useDispatch();

  // * Function to dispatch 'LOGOUT' action and route user to landing page
  const handleLogoutButton = () => {
    // Logging
    console.log("User logged out");

    // Dispatching 'LOGOUT' action
    dispatch({ type: "LOGOUT" });

    //  

  }; // * end handleLogoutButton

  // * - RENDERING -
  return (
    <button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={handleLogoutButton}
    >
      Log Out
    </button>
  );
}

export default LogOutButton;
