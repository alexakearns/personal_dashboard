import React, { Component } from 'react';
import Weather from "./weather";
import News from './news';
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
        <div>
          <News />
        </div>
      </div>

    );
  };
};

export default App;