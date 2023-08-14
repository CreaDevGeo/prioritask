import React from "react";
import { useHistory } from "react-router-dom";
import { List, ListItemButton, ListItemText } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";

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
      <List>
        <ListItemButton
          className="list-item-hover"
          onClick={() => handleNavigation("/checklists")}
        >
          <ListItemText primary="Checklists" />
        </ListItemButton>
        <ListItemButton
          className="list-item-hover"
          onClick={() => handleNavigation("/checklist-history")}
        >
          <ListItemText primary="History" />
        </ListItemButton>
        <ListItemButton
          className="list-item-hover"
          onClick={() => handleNavigation("/about")}
        >
          <ListItemText primary="About" />
        </ListItemButton>
        <ListItemButton className="logout-button" onClick={handleLogoutButton}>
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
  );
}

export default AppNav;
