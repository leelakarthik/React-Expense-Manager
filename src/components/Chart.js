import React from "react";
import "../css/Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const Max = Math.max(...props.dataItems.map(x=>x.value));
  return (
    <div className="chart">
      {props.dataItems.map((dp) => (
        <ChartBar
          key={dp.label}
          value={dp.value}
          maxValue={Max}
          label={dp.label}
        />
      ))}
    </div>
  );
};

export default Chart;
