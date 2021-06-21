import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import JournalScreen from "../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";
import { firebase } from "../firebase/firebase-config";
import { login } from "../actions/auth";
import { useDispatch } from "react-redux";
import { useState } from "react";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { startLoadingNotes } from "../actions/notes";
function AppRouter() {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);

        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1>Espere...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            isAuthenticated={isLoggedIn}
            component={AuthRouter}
          />

          <PrivateRoute
            path="/"
            isAuthenticated={isLoggedIn}
            component={JournalScreen}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
