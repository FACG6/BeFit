import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import "./App.css";
import Login from "./Components/Pages/Login";
import Home from "./Components/Pages/Home";
import Days from "./Components/Pages/Days";
import SelectedDays from "./Components/Pages/SelectedDays";
import Exercises from "./Components/Pages/Exercises";
import Logout from "./Components/Pages/Logout/Logout";
import Nav from "./Components/MainComponents/Nav";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
library.add(faTrashAlt, faPlusCircle);

class App extends Component {
  render() {
    return (
        <Router>
          <Nav />
          <Switch>
            <Route
              exact
              path="/login"
              render={() =>
                localStorage.login ? <Redirect to="/" /> : <Login />
              }
            />
            <Route
              exact
              path="/"
              render={() =>
                localStorage.login ? <Home /> : <Redirect to="/login" />
              }
            />
            <Route
              exact
              path="/days"
              render={() =>
                localStorage.days ? (
                  <Redirect to="/select-days" />
                ) : !localStorage.login ? (
                  <Redirect to="/login" />
                ) : (
                  <Days />
                )
              }
            />
            <Route exact path="/logout" component={Logout} />
            <Route
              exact
              path="/select-days"
              render={() =>
                localStorage.login ? <SelectedDays /> : <Redirect to="/login" />
              }
            />
            <Route
              exact
              path="/exercises"
              render={() =>
                localStorage.login ? <Exercises /> : <Redirect to="/login" />
              }
            />
            <Route
              render={() => (
                <h1
                  style={{
                    color: "white",
                    textAlign: "center",
                    margin: "5rem 0"
                  }}
                >
                  Page Not Found
                </h1>
              )}
            />
          </Switch>
        </Router>
    );
  }
}

export default App;
