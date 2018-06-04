import React, {Component} from 'react';
import d3 from "d3";

window.d3 = d3;

export default class Chart extends Component {

  displayGraph = () => {
    const chart = document.querySelector("#chart");

    const functionPlot = require("function-plot");
    functionPlot({
      target: chart,
      yAxis: { domain: [-1, 9] },
      grid: true,
      data: [
        {
          x: "t * cos(t)",
          y: "t * sin(t)",
          range: [0, 4 * Math.PI],
          fnType: "parametric",
          graphType: "polyline"
        }
      ]
    });
  };

  render() {

    return (
        <div>
          {this.displayGraph()}
        </div>
    );
  }
}
