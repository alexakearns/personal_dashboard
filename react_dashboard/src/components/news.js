import React, { Component } from 'react'
import Parser from 'rss-parser';

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: null
    }
  }

  async componentDidMount() {
    let parser = new Parser();
    const newsLink = "http://feeds.bbci.co.uk/news/rss.xml"
    const corsProxy = "https://cors-anywhere.herokuapp.com/"
    const feed = await parser.parseURL(corsProxy + newsLink);
    console.log(feed.items[0])
    
    this.setState({feed: feed.items[0]})
  }

  render() {
    return(
      <div>
        <h1>NEWS!!!</h1>

      </div>
    );
  };
};

export default News;
