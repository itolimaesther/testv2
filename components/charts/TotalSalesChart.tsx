"use client";
import { useState } from "react";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	Tooltip,
	PointElement,
	LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip
);

function TotalSalesChart() {
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
					stepSize: 10,
					max: 50,
					// callback: function (value, index, values) {
					// 	return value === 0 ? "0k" : `${value}k`;
					// },
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
			<div className="h-full">
				<Line
					data={{
						labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
						datasets: [
							{
								label: "Sales",
								data: [6, 18, 8, 28, 32, 20, 24, 30, 38, 20],
								borderColor: "blue", // Set the line color
								borderWidth: 4, // Set the line width
								fill: false,
								backgroundColor: "#0170E3",
							},
						],
					}}
					options={options}
				/>
			</div>
		</>
	);
}

export default TotalSalesChart;
