import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function LandingPage() {
  const history = useHistory();

  const handleLoginButton = () => {
    console.log("Login button clicked");
    history.push("/login");
  };

  const handleRegisterButton = () => {
    console.log("Register button clicked");
    history.push("/registration");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid
        container
        sx={{
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto"
        }}
      >
        <Grid item>
          <Box component="header">
            <h1 className="landing-page-h1">Prioritask</h1>
          </Box>
        </Grid>

        <Grid
          item
          sx={{
            width: "100%",
            marginBottom: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack
            spacing={5}
            direction="row"
            sx={{
              fontFamily: "poppins, sans-serif",
              fontSize: "1.6rem",
              lineHeight: "1.5",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#26abc0",
                color: "white",
                textAlign: "center",
                padding: "1rem",
                borderRadius: "4px",
              }}
            >
              <p>Create and edit checklists</p>
            </Box>

            <Box
              sx={{
                backgroundColor: "#26abc0",
                color: "white",
                textAlign: "center",
                padding: "1rem",
                borderRadius: "4px",
              }}
            >
              <p>Make priorities</p>
            </Box>

            <Box
              sx={{
                backgroundColor: "#26abc0",
                color: "white",
                textAlign: "center",
                padding: "1rem",
                borderRadius: "4px",
              }}
            >
              <p>Check off completed tasks</p>
            </Box>
          </Stack>
        </Grid>

        <Grid item>
          <Stack spacing={5} direction="row">
            <Button
              onClick={handleLoginButton}
              type="button"
              variant="contained"
              sx={{
                backgroundColor: "#d03c1b",
                color: "white",
              }}
            >
              Login
            </Button>
            <Button
              onClick={handleRegisterButton}
              type="button"
              variant="contained"
              sx={{
                backgroundColor: "#d03c1b",
                color: "white",
              }}
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
