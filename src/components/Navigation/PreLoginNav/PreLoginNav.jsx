import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../../LogOutButton/LogOutButton";
import "../PreLoginNav/PreLoginNav.css";
import { useSelector } from "react-redux";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import AppNav from "../AppNav/AppNav";

const TopNav = styled(AppBar)(({ theme }) => ({
  backgroundColor: "rgb(26, 26, 26)",
}));

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <TopNav position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            <Link to="/home" className="nav-title">
              Prioritask
            </Link>
          </Typography>
          <div style={{ marginLeft: "auto" }}>
            {!user.id && (
              <Link to="/login">
                <p style={{ marginLeft: "auto", color: "white" }}>
                  Login / Register
                </p>
              </Link>
            )}
            {user.id && <AppNav />}
          </div>
        </Toolbar>
      </TopNav>
    </div>
  );
}

export default Nav;
