import React, {Component} from 'react';
import d3 from "d3";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

window.d3 = d3;

export default class Chart extends Component {
state = {r: 1};
  saveDocument = (elementId) => {
    const input = document.getElementById(elementId);
    console.log(input);
    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF('', 'mm', [canvas.width, canvas.height]);
      const imgData = canvas.toDataURL('image/png', 1.0);
      pdf.addImage(imgData, 'png', 0, 0, canvas.width * .5, canvas.height * 0.8);
      pdf.save('test.pdf');
    });
  };
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
          <div id="divToPrint">
          {this.displayGraph()}
          </div>
          <button style={{marginRight: 10}} className="button" type="button" onClick={() => this.saveDocument('chart')}>saveDocument</button>

        </div>
    );
  }
}
