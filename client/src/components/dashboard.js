import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Route, Link } from "react-router-dom";

import Weather from "./weather";
import News from "./news";
import Sport from "./sport";
import Photos from "./photos";
import Tasks from "./tasks";
import Clothes from "./clothes";
import Newspage from "./newsPage";

import "../app.scss";
import "./dash.scss";

export class Dashboard extends Component {


  render() {
    return (
      <div>
      <Container id="greeting">
        <div>
          <h1 id="title">Good day {this.props.username}</h1>
        </div>
      </Container>
        <div>
          <Container>
            <Row>
              <Col>
                <div className="dashboard-thumbnail">
                  <Weather />
                </div>
              </Col>
              <Col>
                <div className="dashboard-thumbnail">
                  <Link to='/newspage'>
                  <News />
                  </Link>
                </div>
              </Col>
              <Col>
                <div className="dashboard-thumbnail">
                  <Sport />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="dashboard-thumbnail">
                  <Photos />
                </div>
              </Col>
              <Col>
                <div className="dashboard-thumbnail">
                  <Tasks />
                </div>
              </Col>
              <Col>
                <div className="dashboard-thumbnail full-img">
                  <Clothes />
                </div>
              </Col>
            </Row>
          </Container>
          <Route path="/newspage" component={Newspage} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
