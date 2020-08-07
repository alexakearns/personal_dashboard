import React, { Component } from 'react'

export class Newspage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.content}</h3>
      </div>
    );
  };
};

export default Newspage;