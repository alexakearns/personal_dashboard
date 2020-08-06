import React, { Component } from 'react'
import axios from 'axios'

const URL = 'http://localhost:4000'

import './auth.scss'

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // location: 

    }
  }

  handleSubmit() {

  }

  submitLogin() {
    axios.post(`${URL}/users/`)
  }

  // componentWillUnmount()
  
    render() {
      return(
        <div>
        <div id="home">
          <h1 id="title">Dev Challenge</h1>
        </div>

          <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" name="username"/>
          </label>
          <label>
            Username:
            <input type="text" name="username"/>
          </label>
            <input type="image" src="../../assets/Login_button.png" alt="login" class="yellow-button"/>
          </form>

        <div>
        <h3>New to the challenge? <button>Sign up</button></h3>
      </div>
      </div>
    );
  };

}

export default Login;

