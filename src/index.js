import d3 from "d3";
window.d3 = d3;

const functionPlot = require("function-plot");

const root = document.querySelector("#root");

functionPlot({
  target: root,
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

