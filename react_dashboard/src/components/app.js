import React, { Component } from 'react';

import Weather from "./weather";
import News from './news';
import Sport from './sport';
import Photos from './photos';
import Tasks from './tasks';
import Clothes from './clothes';

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
        <div>
          <Sport />
        </div>
        <div>
          <Photos />
        </div>
        <div>
          <Tasks />
        </div>
        <div>
          <Clothes />
        </div>
      </div>

    );
  };
};

export default App;