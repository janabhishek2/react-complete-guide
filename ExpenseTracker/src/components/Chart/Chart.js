import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  let maximumValue = Math.max(...props.dataPoints.map((dp) => dp.value));
  console.log(maximumValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            value={dataPoint.value}
            maxValue={maximumValue}
            label={dataPoint.label}
            key={dataPoint.label}
          />
        );
      })}
    </div>
  );
}

export default Chart;
