import React, { Component } from 'react'

export class Newspage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      content: this.props.content
    }
  }


  render() {
    const news = this.state
    return(
      <div>
        <h1>Have we made it to the right page?</h1>
        <h1>{news.title}</h1>
        <h3>{news.content}</h3>
        <h1>Did we get any props?</h1>
        <h1>{this.props.title}</h1>
        <h3>{this.props.content}</h3>
      </div>
    );
  };
};

export default Newspage;