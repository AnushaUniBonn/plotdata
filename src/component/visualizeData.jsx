import React, { Component } from "react";
import Plot from "react-plotly.js";
import Data from "./db.json";

export default class VisualizeData extends Component {
  constructor(props) {
    super(props);
    //console.log(Data.points[1].row, this.state.xarray);
    this.state = {
      xarray: [Data.points.map((item) => item.row)],
      yarray: [Data.points.map((item) => item.col)],
      data: [
        {
          //x: xarray,
          //y: yarray,
          x: [1, 2, 3],
          y: [2, 4, 6],
          type: "scatter",
          name: "scatter",
          mode: "lines+markers",
          marker: { color: "red" },
        },
      ],
      layout: { width: 600, height: 500, title: "Visualize Data" },
    };
    //this.state.data.x = this.state.xarray;
    //this.state.data.y = this.state.yarray;
    //console.log(this.state.data.x, this.state.data.y);
  }
  handleClick = () => {
    alert("You clicked point");
  };
  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <Plot
          data={this.state.data}
          layout={this.state.layout}
          onInitialized={(figure) => this.setState(figure)}
          onUpdate={(figure) => this.setState(figure)}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
