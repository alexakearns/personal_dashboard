import React, { Component } from "react";
import Axios from "axios";
// import './auth.scss'

const URL = "http://localhost:4000";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const data = this.state;
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
    } else {
      Axios.post(`${URL}/users/signup`, {
        username: data.username,
        password: data.password,
      })
        .then((res) => {
          console.log(res);
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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
          ></input>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" onChange={this.handleChange} />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
