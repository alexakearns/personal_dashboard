import React, { Component } from 'react'
import Parser from 'rss-parser';
import Axios from 'axios';
// import { BrowserRouter as Route, Link } from 'react-router-dom';
// import Newspage from './newsPage';

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      content: null
    }
  }

  // async componentDidMount() {
  //   let parser = new Parser();
  //   const newsLink = "http://feeds.bbci.co.uk/news/rss.xml"
  //   const corsProxy = "https://cors-anywhere.herokuapp.com/"
  //   const feed = await parser.parseURL(corsProxy + newsLink);
  //   const topStory = feed.items[0];
    
  //   this.setState({
  //     title: topStory.title,
  //     content: topStory.content
  //   })
    
  // }
  
  getNews() {
    const newsLink = "http://feeds.bbci.co.uk/news/rss.xml"
    const corsProxy = "https://cors-anywhere.herokuapp.com/"
    
    Axios.get(newsLink) 
    .then((res) => {
      console.log(res);
      const topStory = res.items[0]
      console.log(topStory)
    })
    .catch((error) =>  {
      console.log(error)
    })
  } 
  

  componentDidMount() {
    this.getNews();
  }

  render() {
    let news = this.state
    return(
      <div>

        <h1 className="thumbnail-title">News</h1>
        
        <h2 className="thumbnail-headline">{news.title}</h2>
        <h2 className="thumbnail-content">{news.content}</h2>
      </div>
    );
  };
};

export default News;
