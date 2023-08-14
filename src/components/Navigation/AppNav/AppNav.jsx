// - IMPORTING -
// React
import React from "react";
import { useState } from "react";
// Router
import { Link, useHistory } from "react-router-dom";
// Components
import LogOutButton from "../../LogOutButton/LogOutButton"; // LogoutButton
// Material UI
import CssBaseline from "@mui/material/CssBaseline"; // MUI CssBaseline
import Box from "@mui/material/Box"; // MUI Box
import Grid from "@mui/material/Grid"; // Import Grid from MUI
import Stack from "@mui/material/Stack"; // MUI Stack
import Button from "@mui/material/Button"; // MUI Basic Button
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemButton from "@mui/joy/ListItemButton";
import Home from "@mui/icons-material/Home";
import Apps from "@mui/icons-material/Apps";

// - AppNav COMPONENT -
function AppNav() {
  // * Declaring useHistory
  const history = useHistory();

  // - RENDERING -
  return (
    <React.Fragment>
      {/* MUI */}
      <List
        sx={{
          maxWidth: 320,
        }}
      >
        <ListItem>
          <ListItemButton
            onClick={() => {
              history.push("/checklists");
            }}
          >
            Checklists
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            onClick={() => {
              history.push("/checklist-history");
            }}
          >
            History
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            onClick={() => {
              history.push("/journal");
            }}
          >
            Journal
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            onClick={() => {
              history.push("/about");
            }}
          >
            About
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>Logout</ListItemButton>
        </ListItem>
      </List>

      <Link className="navLink" to="/user">
        Home
      </Link>

      <Link className="navLink" to="/info">
        Info Page
      </Link>

      <LogOutButton className="navLink" />

      <Link className="navLink" to="/about">
        About
      </Link>
    </React.Fragment>
  );
} // * end AppNav

// - EXPORTING AppNav COMPONENT -
export default AppNav;
