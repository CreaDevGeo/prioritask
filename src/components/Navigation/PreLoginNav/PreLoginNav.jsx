import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../../LogOutButton/LogOutButton";
import "../PreLoginNav/PreLoginNav.css";
import { useSelector } from "react-redux";
// Components
import AppNav from "../AppNav/AppNav";

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links and title
          <div>
             <Link to="/home">
          <h2 className="nav-title">Prime Solo Project</h2>
        </Link>
            <Link className="navLink" to="/login">
              Login / Register
            </Link>
          </div>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <AppNav />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
