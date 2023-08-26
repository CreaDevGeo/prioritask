// React
import React, { useEffect } from "react";
// Router
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Navigation
import PreLoginNav from "../Navigation/PreLoginNav/PreLoginNav";
import AppNav from "../Navigation/AppNav/AppNav";
import Footer from "../Footer/Footer";
// Protected routes for user
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

// Material UI
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
// CSS
import "./App.css";
// Components
import AboutPage from "../AboutPage/AboutPage";
import InfoPage from "../InfoPage/InfoPage";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import AllChecklists from "../Checklists/AllChecklists/AllChecklists";
import ChecklistHistory from "../ChecklistHistory/ChecklistHistory";

function App() {
  // Redux dispatch and selector setup
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  // Fetch user data on component load
  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  // Check if user is logged in
  const isUserLoggedIn = !!user.id;
  console.log("User logged in:", isUserLoggedIn);

  return (
    // Main app container
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xlg" sx={{ height: "100" }}>
        <Router>
          <div
            className={`app-container ${
              isUserLoggedIn ? "horizontal-layout" : ""
            }`}
          >
            {!user.id && <PreLoginNav />}
            <div className="application-container">
              {user.id && <AppNav />}
              <div
                className={`content-container ${
                  isUserLoggedIn ? "content-margin" : ""
                }`}
              >
                <Switch>
                  {/* If the user is already logged in, redirect to /checklists, else show RegisterPage */}
                  <Route exact path="/">
                    {isUserLoggedIn && <Redirect to="/checklists" /> }
                    {!isUserLoggedIn && <Redirect to="/home" /> }
                  </Route>

                  {/* Show AboutPage */}
                  <Route
                    // shows AboutPage at all times (logged in or not)
                    exact
                    path="/about"
                  >
                    <AboutPage />
                  </Route>

                  {/* Show AllChecklists if logged in */}
                  <ProtectedRoute
                    // logged in shows Checklists else shows LoginPage
                    exact
                    path="/checklists"
                  >
                    <AllChecklists />
                  </ProtectedRoute>

                  {/* Show ChecklistHistory if logged in */}
                  <ProtectedRoute
                    // logged in shows Checklists else shows LoginPage
                    exact
                    path="/checklist-history"
                  >
                    <ChecklistHistory />
                  </ProtectedRoute>

                  {/* Show InfoPage if logged in */}
                  <ProtectedRoute
                    // logged in shows InfoPage else shows LoginPage
                    exact
                    path="/info"
                  >
                    <InfoPage />
                  </ProtectedRoute>

                  {/* If the user is already logged in, redirect to /user, else show LoginPage */}
                  <Route exact path="/login">
                    {user.id ? <Redirect to="/checklists" /> : <LoginPage />}
                  </Route>

                  {/* If the user is already logged in, redirect to /user, else show RegisterPage */}
                  <Route exact path="/registration">
                    {user.id ? <Redirect to="/checklists" /> : <RegisterPage />}
                  </Route>

                  {/* If the user is already logged in, redirect to /user, else show LandingPage */}
                  <Route exact path="/home">
                    {user.id ? <Redirect to="/home" /> : <LandingPage />}
                  </Route>

                  {/* If none of the other routes matched, show a 404 */}
                  <Route>
                    <h1>404</h1>
                  </Route>
                </Switch>
                <Footer />
              </div>
            </div>
          </div>
        </Router>
      </Container>
    </React.Fragment>
  );
}

export default App;
