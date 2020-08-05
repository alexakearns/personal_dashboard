import React, { Component } from "react";
// import Container from "react-bootstrap/Container";
// import cloud from 'assets'
import Cloud from "./Clouds_icon.png";
import Sun from "./Sun_icon.png";
import Rain from "./Rain_icon.png";
import "./dash.scss";

export class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: null,
      location: null,
      forecast: null,
    };
  }

  getLocation() {
    let thisComponent = this;
    let lat = 50;
    let lon = 10;
    let location;
    let temperature;
    let forecast;
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;

      const weatherAPI = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=da6424f2d1b1c96b8ad2199aa0ac26e5`;
      fetch(weatherAPI)
        .then((response) => response.json())
        .then((data) => {
          temperature = Math.floor(data.main.temp - 273.15);
          location = data.name;
          forecast = data.weather[0].main;
          thisComponent.setState({
            temperature: temperature,
            location: location,
            forecast: forecast,
          });
        })
        .catch((error) => console.log(error));
    });
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    let weather = this.state;
    let icon;

    if (weather.forecast === "Clouds") {
      icon = Cloud;
    } else if (weather.forecast === "Clear") {
      icon = Sun;
    } else if (weather.forecast === "Rain") {
      icon = Rain;
    } else {
      icon = "forecast unavailable";
    }

    return (
      <div>
        <h1 className="thumbnail-title">Weather</h1>
        <h2>{weather.location}</h2>
        <h2>{weather.temperature}</h2>
        <div>
          <section>
            <img src={icon} alt="cloud" />
          </section>
        </div>
      </div>
    );
  }
}

export default Weather;
