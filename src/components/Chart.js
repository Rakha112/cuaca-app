import React from "react";
import { Line } from "react-chartjs-2";

const Chart = (props) => {
  console.log(props.labels);
  console.log(props.suhu);
  const data = {
    labels: props.labels,
    datasets: [
      {
        data: props.suhu,
        fill: true,
        backgroundColor: "rgba(150, 191, 206, 0.8)",
        borderColor: "#96bfce",
        lineTension: 0.3,
      },
    ],
  };
  const option = {
    responsive: true,
    maintainAspectRatio: true,
    scaleShowLabels: false,
    animation: true,
    legend: {
      display: false,
    },
    scales: {
      x: {
        grid: {
          color: "transparent",
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "INFO CUACA",
        color: "#9DC8D7",
        font: {
          size: 20,
        },
      },
    },
  };
  return (
    <>
      <Line data={data} options={option} />
    </>
  );
};

export default Chart;
