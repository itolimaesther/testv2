'use client'

import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

function WeeklySummChart() {

  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Disable x-axis grid lines
        },
      },
      y: {
        grid: {
          display: false, // Disable y-axis grid lines
        },
        ticks: {
          stepSize: 25,
          max: 100,
          callback: function (value, index, values) {
            return value === 0 ? "0" : `${value}`;
          },
        },
      },
    },
    elements: {
      point: {
        radius: 0, // Set the point radius to 0 to hide points
      },
    },
  };

  return (
    <>
      <div className='h-full'>
        <Line
          data={{
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
              {
                label: 'Inflow',
                data: [20, 25, 20, 50, 20, 80, 60, 25],
                borderColor: "green", // Set the line color for inflow
                borderWidth: 2, // Set the line width
                fill: false,
                cubicInterpolationMode: 'monotone',
                borderJoinStyle: 'round', // Make line joins rounded
              },
              {
                label: 'Outflow',
                data: [30, 25, 50, 30, 40, 30, 50],
                borderColor: "red", // Set the line color for outflow
                borderWidth: 2, // Set the line width
                fill: false,
                cubicInterpolationMode: 'monotone', // Make line caps rounded
                borderJoinStyle: 'round', // Make line joins rounded
              },
            ],
          }}
          options={options}
        />
      </div>
    </>

  )
}

export default WeeklySummChart;
