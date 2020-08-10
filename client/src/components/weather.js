import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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

      const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=da6424f2d1b1c96b8ad2199aa0ac26e5`;
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
        <Container>
        <Row>
          <Col>

        <div id="weather-icon">
          
            <img src={icon} alt="cloud" />

        </div>
          </Col>
          <Col>
        <h2 id="weather-temp">{weather.temperature} degrees</h2>

          </Col>
        </Row>
        <Row>
          <Col>

        <h2 id="weather-location">{weather.location}</h2>
          </Col>
        </Row>
          
        </Container>
      </div>
    );
  }
}

export default Weather;
