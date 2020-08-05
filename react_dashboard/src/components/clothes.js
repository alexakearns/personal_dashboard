import React, { Component } from 'react'
import { PieChart } from "react-minimal-pie-chart";
// import { Route } from 'react-router-dom';

export class Clothes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: []
    }
  }

  getWarmer() {
    let thisComponent = this
    const corsProxy = "https://cors-anywhere.herokuapp.com/"
    const warmerJSON = "https://therapy-box.co.uk/hackathon/clothing-api.php?username=swapnil"
    fetch(corsProxy + warmerJSON)
    .then((response) => response.json())
    .then((data) => {
      let objects = data.payload
      
      let counts = {}
      let val

      for(let i=0, j = objects.length; i < j; i++) {
        val = objects[i].clothe;
        if(typeof counts[val] === 'undefined') {
          counts[val] = 1;
        } else{
          counts[val] += 1;
        }
      }
      console.log(counts)
      let chartData = []
      for (const [key, value] of Object.entries(counts)) {
        let color = this.generateRandomColor()
        let obj = {title: key, value: value, color: color }
        chartData.push(obj)
      }
      thisComponent.setState({
        clothes: chartData});
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getWarmer()
  }

  generateRandomColor() {
      let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
      return randomColor;
  }

  render() {
    let clothes = this.state.clothes

    return(
      <div>
        <h1 className="thumbnail-title">Clothes</h1>
        <div>

        <PieChart
        data ={clothes}
        viewBoxSize
        />
        </div>
        {/* <Route path="/" exact component={Clothes} /> */}
      </div>
    );
  };
};

export default Clothes;