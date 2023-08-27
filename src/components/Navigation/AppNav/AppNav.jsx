// - IMPORTING -
// React
import React from "react";
// Router
import { useHistory } from "react-router-dom";
// MUI
import { List, ListItemButton, ListItemText } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
// Redux
import { useDispatch } from "react-redux";
// CSS
import "../AppNav/AppNav.css"

// - AppNav COMPONENT -
function AppNav() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleNavigation = (path) => {
    history.push(path);
  };

  const handleLogoutButton = () => {
    console.log("User logged out");
    dispatch({ type: "LOGOUT" });
    history.push("/home"); // Redirect to home page after logout
  };

  return (
    <div className="side-nav">
      <div
      className="nav-buttons"
      >
        <List>
          <ListItemButton
            onClick={() => handleNavigation("/checklists")}
          >
            <ListItemText primary="Checklists" />
          </ListItemButton>
          {/* <ListItemButton
            onClick={() => handleNavigation("/checklist-history")}
          >
            <ListItemText primary="History" />
          </ListItemButton> */}
          <ListItemButton
            onClick={() => handleNavigation("/about")}
          >
            <ListItemText primary="About" />
          </ListItemButton>
          <ListItemButton onClick={handleLogoutButton}>
            <span
              style={{
                marginRight: "10px",
              }}
            >
              Logout
            </span>
            <LogoutIcon />
          </ListItemButton>
        </List>
      </div>
    </div>
  );
}; // - END AppNav COMPONENT -

export default AppNav;
