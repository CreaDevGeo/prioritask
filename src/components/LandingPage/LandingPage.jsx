//  - IMPORTING -
// React
import React, { useState } from "react";
// Router
import { useHistory } from "react-router-dom";
// Material UI
import CssBaseline from "@mui/material/CssBaseline"; // MUI CssBaseline
import Box from "@mui/material/Box"; // MUI Box
import Grid from "@mui/material/Grid"; // Import Grid from MUI
import Stack from "@mui/material/Stack"; // MUI Stack
import Button from "@mui/material/Button"; // MUI Basic Button

// - LandingPage COMPONENT -
function LandingPage() {
  // * Declaring useHistory as variable
  const history = useHistory();

  // * Function to send user to login page
  const handleLoginButton = () => {
    // Logging
    console.log("Login button clicked");

    // Go to '/login' url
    history.push("/login");
  }; // * end handleLoginButton

  // * Function to send user to login page
  const handleRegisterButton = () => {
    // Logging
    console.log("Login button clicked");

    // Go to '/login' url
    history.push("/registration");
  }; // * end handleLoginButton

  //  - RENDERING -
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100%" // Make the Grid take the full height of the Container
      >
        <Grid item>
          <Box component="header">
            <h1 style={{ fontSize: "5rem" }}>PRIORITASK</h1>
          </Box>
        </Grid>

        <Grid
          item
          sx={{
            width: "500px", // Set your desired width for the Box elements here
            height: "40px",
            marginBottom: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack spacing={5} direction="row">
            <Box
              sx={{
                width: "10rem", // Set your desired width for the Box elements here
                height: "5rem",
                backgroundColor: "black",
                color: "white",
                textAlign: "center",
              }}
            >
              <p>Create and edit checklists</p>
            </Box>

            <Box
              sx={{
                width: "10rem", // Set your desired width for the Box elements here
                height: "5rem",
                backgroundColor: "black",
                color: "white",
                textAlign: "center",
              }}
            >
              <p>Make priorities</p>
            </Box>

            <Box
              sx={{
                width: "10rem", // Set your desired width for the Box elements here
                height: "5rem",
                backgroundColor: "black",
                color: "white",
                textAlign: "center",
              }}
            >
              <p>Checkoff completed tasks</p>
            </Box>
          </Stack>
        </Grid>

        <Grid item>
          <Stack spacing={5} direction="row">
            <Button
              onClick={handleLoginButton}
              type="button"
              variant="contained"
            >
              Login
            </Button>
            <Button
              onClick={handleRegisterButton}
              type="button"
              variant="contained"
            >
              Register
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default LandingPage;
