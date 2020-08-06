import React, { Component } from 'react'
import axios from 'axios';


export class Signup extends Component {
  constructor(props)


  handleSubmit() {

  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label >Username</label>
        </form>
      </div>
    )
  }
}

export default Signup;
