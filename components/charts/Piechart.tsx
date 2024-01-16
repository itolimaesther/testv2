"use client";

import React, { useEffect } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	Tooltip,
	PointElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { PieUserDataProps, PieOptionsProps } from "@/types";

ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip);

type ChildProps = {
	pieUserData: PieUserDataProps;
	options: PieOptionsProps;
};

function Piechart({ pieUserData, options }: ChildProps): JSX.Element {
	return <Pie data={pieUserData} />;
}

export default Piechart;
