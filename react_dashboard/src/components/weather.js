import React, { Component } from 'react';


export class Weather extends Component {
  constructor(props) {
    super(props);

  }

  getLocation(){
    let lat
    let lon
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = Math.floor(position.coords.latitude)
      lon = Math.floor(position.coords.longitude)
    });
    console.log(lat)
    console.log(lon)
  }

  getWeather() {
    const weatherAPI = "api.openweathermap.org/data/2.5/weather?lat=51&lon=-1&appid=da6424f2d1b1c96b8ad2199aa0ac26e5"

    fetch(weatherAPI)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(error => console.log(error))
  }

  componentDidMount() {
  }

  render() {

    return(
      <div>
        <h1>WEATHER!!!</h1>
      </div>
    );
  };
};

export default Weather;