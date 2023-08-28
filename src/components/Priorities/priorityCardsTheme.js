import { createTheme } from "@mui/material/styles";

const priorityCardsTheme = createTheme({
  components: {
    MuiBox: {
      styleOverrides: {
        root: {
          width: 230,
          height: 400,
          margin: "auto",
          backgroundColor: "#d03c1b",
          borderRadius: 5,
          boxShadow: 24,
          color: "white",
          lineHeight: "35px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center", // Center horizontally
          pt: 3,
          px: 5,
          pb: 10,
          fontFamily: "poppins, sans-serif",
          fontSize: "1.5rem",
          fontWeight: 600,
        },
      },
    },
  },
});

export default priorityCardsTheme;
