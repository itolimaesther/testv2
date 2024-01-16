"use client";

import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	Tooltip,
	PointElement,
	LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { LineUserDataProps, ChartOptionsProps } from "@/types";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip
);

type ChildProps = {
	lineUserData: LineUserDataProps;
	options: ChartOptionsProps;
};

function LineChart({ lineUserData, options }: ChildProps): JSX.Element {
	return <Line data={lineUserData} />;
}

export default LineChart;
