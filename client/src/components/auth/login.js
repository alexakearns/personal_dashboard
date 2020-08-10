import React, { Component } from "react";
import Axios from "axios";
import { BrowserRouter as Route, Link, Redirect } from "react-router-dom";
import Signup from "./signUp";
import Dashboard from "../dashboard";
import "./auth.scss";

const URL = "http://localhost:4000";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const data = this.state;
    Axios.post(`${URL}/users/login`, {
      username: data.username,
      password: data.password,
    })
      .then((res) => {
        console.log(res);
        if (res.data.message === "Success") {
          this.setState({ redirect: true})
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };


  render() {
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to='/dashboard'/>
    }

    return (
      <div>
        <div>
          <h1 className="title">Dev Challenge</h1>
        </div>
        <form onSubmit={this.handleSubmit}>



          <div className="row justify-content-center">
            <div className="col-4 ml-1">
              <input
                className="text-area"
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="col-4">
              <input
                className="text-area"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>
          </div>
            <div id=""className="align-button-no-image">

              <input type="submit" value="Login"/>
            </div>
        </form>
        <div>
        <div className="container" id="sign-up-link">

          <h3>New to the Challenge? 
          <Link to="/signup">
            <h3 className="yellow-text"> Sign up</h3>
          </Link>
          </h3>
        </div>
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    );
  }
}

export default Login;
