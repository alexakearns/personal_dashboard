import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Dashboard from './dashboard.js';

export class App extends Component {


  render() {
    
    return (
      <div>
        <h1>Dev Challenge</h1>
        <button>Login</button>
        <h3>New to the challenge? <button>Sign up</button></h3>
      </div>
    )
  }
}


export default App;