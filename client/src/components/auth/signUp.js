import React, { Component } from "react";
import { BrowserRouter as Route, Redirect, Link } from "react-router-dom";
import Axios from "axios";
import Login from "./login";
import "./auth.scss";

const URL = "https://tb-personal-dash.herokuapp.com/" || "http://localhost:4000";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      redirectLogin: false
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const data = this.state;
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
    } else {
      Axios.post(`/api/users/signup`, {
        username: data.username,
        email: data.email,
        password: data.password,
      })
        .then((res) => {
          console.log(res);
          if (res.data > 0) {
            this.setState({ redirect: true })
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to='/login' />
    }

    return (
      <div>
        <h1 className="title">Dev Challenge</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row justify-content-center row-padding">
            <div className="col-4">
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
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="row justify-content-center row-padding">
            <div className="col-4">
              <input
                className="text-area"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>
            <div className="col-4">
              <input
                className="text-area"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="container layout-image">
            <div className="add-picture">
              <h5 id="picture-text">
                Add Picture <br></br>(Not currently available)
              </h5>
            </div>
          </div>
          <div className="align-button-no-image">
            <input type="submit" />
          </div>
          <div>
            <Link to="./login">
              <h3>To Login</h3>
            </Link>
          </div>
        </form>
        <Route path="/login" exact component={Login} />
      </div>
    );
  }
}

export default Signup;
