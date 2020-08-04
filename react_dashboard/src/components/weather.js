import React, { Component } from 'react';

export class Weather extends Component {
  constructor(props) {
    super(props);
    this.state ={
      forecast: null,
      location: null
    };
  }
  
  getLocation() {
    let forecast
    let lat = 50
    let lon = 10
    let bla = this
    let location 
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = Math.floor(position.coords.latitude)
      lon = Math.floor(position.coords.longitude)

      const weatherAPI = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=da6424f2d1b1c96b8ad2199aa0ac26e5`
      console.log(weatherAPI)
      fetch(weatherAPI)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        forecast = data.main.temp
        location = data.name
        console.log(forecast)
        bla.setState({forecast: forecast,
        location: location})
        console.log(this.state.forecast)
      }) 
      .catch(error => console.log(error))
    });
    
  }
  
  
  componentDidMount() {
    this.getLocation()
  }
  
  render() {
    let weather = this.state
      
    return(
      <div>
        <h2>{weather.forecast}</h2>
        <h2>{weather.location}</h2>
        <h1>WEATHER!!!</h1>
      </div>
    );
  };
};

export default Weather;