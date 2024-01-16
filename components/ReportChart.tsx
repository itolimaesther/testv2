'use client'
import {useState} from 'react'

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	Tooltip,
	PointElement,
	LineElement,
	ChartData,
	ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip
);

type RecentOrdersProps = {
	dataAvailable: boolean;
};

type ChartProps = {
	data: ChartData;
	options?: ChartOptions;
};

// type ChartOptions = {
// 	scales: {
// 		x: {
// 			grid: {
// 				display: boolean;
// 			};
// 		};
// 		y: {
// 			grid: {
// 				display: boolean;
// 			};
// 			ticks: {
// 				stepSize: number;
// 				max: number;
// 				callback: (value: number, index: number, values: number[]) => string;
// 			};
// 		};
// 	};
// 	elements: {
// 		point: {
// 			radius: number;
// 		};
// 	};
// };

const ReportChart = ({ dataAvailable }: RecentOrdersProps) => {
	// const [dataAvailable, setDataAvailable] = useState(false)

	// const options: ChartOptions = {
	// 	scales: {
	// 		x: {
	// 			grid: {
	// 				display: false, // Disable x-axis grid lines
	// 			},
	// 		},
	// 		y: {
	// 			grid: {
	// 				display: false, // Disable y-axis grid lines
	// 			},
	// 			ticks: {
	// 				stepSize: 10,
	// 				max: 50,
	// 				callback: function (value: number, index: any, values: any) {
	// 					return value === 0 ? "0k" : `${value}k`;
	// 				},
	// 			},
	// 		},
	// 	},
	// 	elements: {
	// 		point: {
	// 			radius: 0, // Set the point radius to 0 to hide points
	// 		},
	// 	},
	// };

	return (
		<div>
			{/* {dataAvailable ? (
				<div className="h-full">
					<Line
						data={{
							labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
							datasets: [
								{
									data: [6, 18, 8, 28, 32, 20, 24, 30, 38, 20],
									borderColor: "blue", // Set the line color
									borderWidth: 4, // Set the line width
									fill: false,
								},
							],
						}}
						options={options}
					/>
				</div>
			) : (
				<div className="h-full">
					<Line
						data={{
							labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
							datasets: [
								{
									data: [6, 18, 8, 28, 32, 20, 24, 30, 38, 20],
									borderColor: "white", // Set the line color
									borderWidth: 4, // Set the line width
									fill: false,
								},
							],
						}}
						options={options}
					/>
				</div>
			)} */}
			Hello...
		</div>
	);
};

export default ReportChart;
