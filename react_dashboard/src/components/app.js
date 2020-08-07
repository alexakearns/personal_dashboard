import React, { Component } from "react";
import Login from "./auth/login";
import Signup from "./auth/signUp";
import Dashboard from "../components/dashboard";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import "../app.scss";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "Not Logged In",
    };
  }

  checkLoggedInStatus() {}

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
