import React, { Component } from "react";
import Login from "./auth/login";
// import Signup from './auth/signUp'

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
    this.checkLoggedInStatus();
  }

  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default App;
