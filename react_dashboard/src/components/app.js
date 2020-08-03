import React, { Component } from 'react';
import Weather from "./weather";
import "../app.scss"




export class App extends Component {

  render() {
    
    return (
      <div>
        <div>
          <h1 id="title">Good day</h1>
        </div>
        <div>
          <Weather />
        </div>
      </div>

    );
  };
};

export default App;