// - IMPORTING -
// React
import React from "react";
import { useState } from "react";
// Router
import { Link } from "react-router-dom";
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

  // * Declaring useState local states
  // MUI
  const [color, setColor] = useState('neutral');
  
  // - RENDERING -
  return (
    <div>
      {/* MUI */}
      <List
        sx={{
          maxWidth: 320,
        }}
      >
        <ListItem>
          <ListItemButton selected>
            <ListItemDecorator>
              <Home />
            </ListItemDecorator>
            Home
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemDecorator>
              <Apps />
            </ListItemDecorator>
            Apps
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemDecorator />
            Settings
          </ListItemButton>
        </ListItem>
      </List>

      <Link className="navLink" to="/user">
        Home
      </Link>

      <Link className="navLink" to="/checklists">
        Checklists
      </Link>

      <Link className="navLink" to="/info">
        Info Page
      </Link>

      <LogOutButton className="navLink" />

      <Link className="navLink" to="/about">
        About
      </Link>
    </div>
  );
} // * end AppNav

// - EXPORTING AppNav COMPONENT -
export default AppNav;
