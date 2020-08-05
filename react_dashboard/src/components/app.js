import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Weather from "./weather";
import News from "./news";
import Sport from "./sport";
import Photos from "./photos";
import Tasks from "./tasks";
import Clothes from "./clothes";

import "../app.scss";
import "./dash.scss";

export class App extends Component {
  render() {
    return (
      <div>
      <Container id="greeting">
        <div>
          <h1 id="title">Good day</h1>
        </div>
      </Container>
        <div>
          <Container>
            <Row>
              <Col>
                <div>
                  <Weather />
                </div>
              </Col>
              <Col>
                <div>
                  <News />
                </div>
              </Col>
              <Col>
                <div>
                  <Sport />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <Photos />
                </div>
              </Col>
              <Col>
                <div>
                  <Tasks />
                </div>
              </Col>
              <Col>
                <div>
                  <Clothes />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
