import React from "react";
import { useHistory, Link } from "react-router-dom";
import { List, ListItemButton, ListItemText } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { styled } from "@mui/system";
import { useDispatch } from "react-redux";

const SideNav = styled("div")(({ theme }) => ({
  width: 240,
  backgroundColor: "red",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  paddingTop: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  height: "100vh", // Set the sidebar to full viewport height
  position: "fixed", // Fixed positioning to make it sticky
  top: 0, // Align to the top of the screen
}));

const ListItemHover = styled(ListItemButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "blue",
  },
}));

const LogoutButton = styled(ListItemButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "blue",
  },
}));

function AppNav() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleNavigation = (path) => {
    history.push(path);
  };

  const handleLogoutButton = () => {
    console.log("User logged out");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <SideNav>
      <List>
        <ListItemHover onClick={() => handleNavigation("/checklists")}>
          <ListItemText primary="Checklists" />
        </ListItemHover>
        <ListItemHover onClick={() => handleNavigation("/checklist-history")}>
          <ListItemText primary="History" />
        </ListItemHover>
        <ListItemHover onClick={() => handleNavigation("/journal")}>
          <ListItemText primary="Journal" />
        </ListItemHover>
        <ListItemHover onClick={() => handleNavigation("/about")}>
          <ListItemText primary="About" />
        </ListItemHover>
        <LogoutButton onClick={handleLogoutButton}>
          <span
            style={{
              marginRight: "10px",
            }}
          >
            Logout
          </span>
          <LogoutIcon />
        </LogoutButton>
      </List>
    </SideNav>
  );
}

export default AppNav;
