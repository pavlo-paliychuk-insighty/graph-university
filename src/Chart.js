import React, {Component} from 'react';
import d3 from "d3";

window.d3 = d3;

export default class Chart extends Component {
state = {r: 1};
  displayGraph = () => {
    const chart = document.querySelector("#chart");

    const functionPlot = require("function-plot");
    functionPlot({
      target: chart,
      yAxis: { domain: [-1, 9] },
      grid: true,
      data: [
        {
          x: `${this.state.r}*t * cos(t)`,
          y: `${this.state.r}t * sin(t)`,
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
          <label>Enter r:    </label>
          <input type="number" onChange={e => e.target.value && this.setState({r: e.target.value})
          } value={this.state.r} />
          {this.displayGraph()}
        </div>
    );
  }
}
