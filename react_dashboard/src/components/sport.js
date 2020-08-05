import React, { Component } from "react";
import Papa from "papaparse";

export class Sport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sportsresults: [],
    };
  }

  getFootballData() {
    let csvdata = [];

    let thisComponent = this;
    const corsProxy = "https://cors-anywhere.herokuapp.com/";

    Papa.parse(
      corsProxy + "http://www.football-data.co.uk/mmz4281/1718/I1.csv",
      {
        download: true,
        header: true,
        worker: true,
        step: function (results) {
          let line = {
            hometeam: results.data["HomeTeam"],
            awayteam: results.data["AwayTeam"],
            ftr: results.data["FTR"],
            fthg: results.data["FTHG"],
            ftag: results.data["FTAG"],
          };
          csvdata.push(line);
        },
        complete: function () {
          thisComponent.setState({ sportsresults: csvdata });
        },
      }
    );
  }

  componentDidMount() {
    this.getFootballData();
  }

  render() {
    let resultArr = this.state.sportsresults;

    let topResult = resultArr[0];
    let sportsHeadline = "";
    let sportsDetail = "";
    if (topResult !== undefined) {
      if (topResult.ftr === "H") {
        sportsHeadline = topResult.hometeam + " wins!";
        sportsDetail =
          "They won at home. They scored " + topResult.fthg + " goals.";
      } else if (topResult.ftr === "A") {
        sportsHeadline = topResult.awayteam + " wins!";
        sportsDetail =
          "They won away. They scored " + topResult.ftag + " goals.";
      } else {
        sportsHeadline =
          topResult.hometeam + " vs " + topResult.awayteam + " ends in draw!";
        sportsDetail = "Score was " + topResult.fthg + " - " + topResult.ftag;
      }
    }

    return (
      <div>
        <h1 className="thumbnail-title">Sport</h1>
        <h2>{sportsHeadline}</h2>
        <h3>{sportsDetail}</h3>
      </div>
    );
  }
}

export default Sport;
