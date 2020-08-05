import React, { Component } from 'react'
import Parser from 'rss-parser';
// import { Route } from 'react-router-dom'
// import Newspage from './newsPage'

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      content: null
    }
  }

  async componentDidMount() {
    let parser = new Parser();
    const newsLink = "http://feeds.bbci.co.uk/news/rss.xml"
    const corsProxy = "https://cors-anywhere.herokuapp.com/"
    const feed = await parser.parseURL(corsProxy + newsLink);
    const topStory = feed.items[0];
    
    this.setState({
      title: topStory.title,
      content: topStory.content
    })

  }

  render() {
    let news = this.state
    return(
      <div>
        <h1><a href="/news">NEWS!!!</a></h1>
        {/* <Route path="/news" component={Newspage} /> */}
        <h2>{news.title}</h2>
        <h2>{news.content}</h2>
      </div>
    );
  };
};

export default News;
