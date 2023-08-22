import { createTheme } from "@mui/material/styles";

const taskItemTheme = createTheme({
  overrides: {
    MuiBox: {
      root: {
        width: "100%",
        backgroundColor: "background.paper",
        borderRadius: 5,
        boxShadow: 7,
        padding: 3,
        margin: "10px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "black",
        fontSize: "1.27rem",
      },
    },
  },
});

export default taskItemTheme;
