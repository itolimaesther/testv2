"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LineUserDataProps, ChartOptionsProps } from "@/types";
import LineChart from "./charts/LineChart";

function TotalAnalysis() {
	const options: ChartOptionsProps = {
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
					callback: function (value: any, index: any, values: any) {
						return value === 0 ? "0k" : `${value}k`;
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

	const [lineuserData, setLineUserData] = useState<LineUserDataProps>({
		labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		datasets: [
			{
				data: [6, 18, 8, 28, 32, 20, 24, 30, 38, 20],
				borderColor: "blue", // Set the line color
				borderWidth: 4, // Set the line width
				fill: false,
				// backgroundColor: "#ED3434",
			},
		],
	});

	return (
		<>
			<div className="grid grid-cols-1 pt-6 xl:grid-cols-5 xl:gap-4 dark:bg-gray-900">
				<div className="w-full md:w-full col-span-3 bg-white rounded-lg">
					<div className=" xl:flex gap-6 p-12">
						<div className=" justify-center items-center xl:w-[40%] ">
							<h3 className=" text-lg font-semibold ">Total Sales & Costs</h3>
							<span className=" text-sm text-gray-20 ">Last 7 days</span>

							<div className="xl:mt-6 flex gap-x-4 items-center">
								<h3 className="text-[32px] font-semibold">₦350K</h3>
								<h4 className="text-lg text-[#36B3A5]">₦235K</h4>
							</div>
							<div className=" flex gap-x-2 items-center">
								<svg
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6.00023 0.950162C6.08912 0.950162 6.17245 0.96394 6.25023 0.991496C6.32801 1.01905 6.40023 1.06639 6.4669 1.1335L10.8669 5.5335C11.0002 5.66683 11.0669 5.82505 11.0669 6.00816C11.0669 6.19127 11.0002 6.34972 10.8669 6.4835C10.7336 6.61683 10.578 6.6835 10.4002 6.6835C10.2225 6.6835 10.0669 6.61683 9.93356 6.4835L6.6669 3.21683L6.66689 10.6835C6.66689 10.8724 6.60289 11.0279 6.47489 11.1502C6.34689 11.2724 6.18867 11.3335 6.00023 11.3335C5.81134 11.3335 5.65289 11.2695 5.52489 11.1415C5.39689 11.0135 5.33312 10.8553 5.33356 10.6668L5.33356 3.21683L2.06689 6.4835C1.93356 6.61683 1.77801 6.6835 1.60023 6.6835C1.42245 6.6835 1.26689 6.61683 1.13356 6.4835C1.00023 6.35016 0.933561 6.19172 0.933561 6.00816C0.933561 5.82461 1.00023 5.66638 1.13356 5.5335L5.53356 1.1335C5.60023 1.06683 5.67245 1.0195 5.75023 0.991496C5.82801 0.963496 5.91134 0.949718 6.00023 0.950162Z"
										fill="#1EB564"
									/>
								</svg>

								<p className="text-sm font-semibold">8.56K</p>
								<span className="text-sm text-gray-20 ">vs last 7 days</span>
							</div>
						</div>
						<div className="xl:w-[60%]">
							<LineChart lineUserData={lineuserData} options={options} />
						</div>
					</div>
				</div>
				<div className="xl:col-span-2 w-full md:w-full mt-6 xl:mt-0 lg:col-auto bg-white rounded-lg">
					<div className="xl:flex xl:items-center gap-6 py-12 px-5">
						<div className=" justify-center items-center xl:w-[40%] ">
							<h3 className=" text-lg font-semibold ">Sessions</h3>
							<span className=" text-sm text-gray-20 ">Last 7 days</span>

							<div className="xl:mt-6 flex gap-x-4 items-center">
								<h3 className="text-[32px] font-semibold">16.5K</h3>
							</div>
							<div className=" flex gap-x-2 items-center">
								<svg
									width="11"
									height="12"
									viewBox="0 0 11 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M5.5486 11.0498C5.45971 11.0498 5.37638 11.0361 5.2986 11.0085C5.22082 10.9809 5.1486 10.9336 5.08193 10.8665L0.681933 6.4665C0.5486 6.33317 0.481934 6.17495 0.481934 5.99184C0.481934 5.80873 0.5486 5.65028 0.681933 5.5165C0.815267 5.38317 0.970822 5.3165 1.1486 5.3165C1.32638 5.3165 1.48193 5.38317 1.61527 5.5165L4.88193 8.78317L4.88193 1.3165C4.88193 1.12761 4.94593 0.97206 5.07393 0.849837C5.20193 0.727615 5.36016 0.666504 5.5486 0.666504C5.73749 0.666504 5.89593 0.730504 6.02393 0.858504C6.15193 0.986504 6.21571 1.14473 6.21527 1.33317L6.21527 8.78317L9.48193 5.5165C9.61527 5.38317 9.77082 5.3165 9.9486 5.3165C10.1264 5.3165 10.2819 5.38317 10.4153 5.5165C10.5486 5.64984 10.6153 5.80828 10.6153 5.99184C10.6153 6.17539 10.5486 6.33361 10.4153 6.4665L6.01527 10.8665C5.9486 10.9332 5.87638 10.9805 5.7986 11.0085C5.72082 11.0365 5.63749 11.0503 5.5486 11.0498Z"
										fill="#D02626"
									/>
								</svg>

								<p className="text-sm font-semibold">3%</p>
								<span className="text-sm text-gray-20 ">vs last 7 days</span>
							</div>
						</div>
						<div className="xl:w-[60%]">
							<Image
								src="/vector1.svg"
								alt="vector-line"
								className="w-full"
								width={50}
								height={50}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-1 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
				<div className="xl:col-span-1 w-full md:w-full mt-6 py-12 px-5 xl:mt-0 lg:col-auto bg-white rounded-lg">
					<div className="xl:flex xl:items-center gap-6 ">
						<div className=" justify-center items-center xl:w-[50%] ">
							<h3 className=" text-lg font-semibold ">Total Orders</h3>
							<span className=" text-sm text-gray-20 ">Last 7 days</span>

							<div className="xl:mt-6 flex gap-x-4 items-center">
								<h3 className="text-[32px] font-semibold">25.7K</h3>
							</div>
							<div className=" flex gap-x-2 items-center">
								<svg
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6.00023 0.950162C6.08912 0.950162 6.17245 0.96394 6.25023 0.991496C6.32801 1.01905 6.40023 1.06639 6.4669 1.1335L10.8669 5.5335C11.0002 5.66683 11.0669 5.82505 11.0669 6.00816C11.0669 6.19127 11.0002 6.34972 10.8669 6.4835C10.7336 6.61683 10.578 6.6835 10.4002 6.6835C10.2225 6.6835 10.0669 6.61683 9.93356 6.4835L6.6669 3.21683L6.66689 10.6835C6.66689 10.8724 6.60289 11.0279 6.47489 11.1502C6.34689 11.2724 6.18867 11.3335 6.00023 11.3335C5.81134 11.3335 5.65289 11.2695 5.52489 11.1415C5.39689 11.0135 5.33312 10.8553 5.33356 10.6668L5.33356 3.21683L2.06689 6.4835C1.93356 6.61683 1.77801 6.6835 1.60023 6.6835C1.42245 6.6835 1.26689 6.61683 1.13356 6.4835C1.00023 6.35016 0.933561 6.19172 0.933561 6.00816C0.933561 5.82461 1.00023 5.66638 1.13356 5.5335L5.53356 1.1335C5.60023 1.06683 5.67245 1.0195 5.75023 0.991496C5.82801 0.963496 5.91134 0.949718 6.00023 0.950162Z"
										fill="#1EB564"
									/>
								</svg>

								<p className="text-sm font-semibold">6%</p>
								<span className="text-sm text-gray-20 ">vs last 7 days</span>
							</div>
						</div>
						<div className="xl:w-[50%]">
							<Image
								src="/vec2.svg"
								alt="vector-line"
								className="w-full"
								width={50}
								height={50}
							/>
						</div>
					</div>
				</div>

				<div className="xl:col-span-1 w-full md:w-full py-12 px-5 mt-6 xl:mt-0 lg:col-auto bg-white rounded-lg">
					<div className="xl:flex xl:items-center gap-6">
						<div className=" justify-center items-center xl:w-[50%] ">
							<h3 className=" text-lg font-semibold ">Total Profit</h3>
							<span className=" text-sm text-gray-20 ">Last 7 days</span>

							<div className="xl:mt-6 flex gap-x-4 items-center">
								<h3 className="text-[32px] font-semibold">50K</h3>
							</div>
						</div>
						<div className="xl:w-[50%]">
							<Image
								src="/vec3.svg"
								alt="vector-line"
								className="w-full"
								width={50}
								height={50}
							/>
						</div>
					</div>
					<div className="xl:flex w-full gap-x-2 items-center">
						<div className="xl:flex w-full xl:w-[50%] gap-x-1 items-center ">
							<svg
								width="12"
								height="12"
								viewBox="0 0 12 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6.00023 0.950162C6.08912 0.950162 6.17245 0.96394 6.25023 0.991496C6.32801 1.01905 6.40023 1.06639 6.4669 1.1335L10.8669 5.5335C11.0002 5.66683 11.0669 5.82505 11.0669 6.00816C11.0669 6.19127 11.0002 6.34972 10.8669 6.4835C10.7336 6.61683 10.578 6.6835 10.4002 6.6835C10.2225 6.6835 10.0669 6.61683 9.93356 6.4835L6.6669 3.21683L6.66689 10.6835C6.66689 10.8724 6.60289 11.0279 6.47489 11.1502C6.34689 11.2724 6.18867 11.3335 6.00023 11.3335C5.81134 11.3335 5.65289 11.2695 5.52489 11.1415C5.39689 11.0135 5.33312 10.8553 5.33356 10.6668L5.33356 3.21683L2.06689 6.4835C1.93356 6.61683 1.77801 6.6835 1.60023 6.6835C1.42245 6.6835 1.26689 6.61683 1.13356 6.4835C1.00023 6.35016 0.933561 6.19172 0.933561 6.00816C0.933561 5.82461 1.00023 5.66638 1.13356 5.5335L5.53356 1.1335C5.60023 1.06683 5.67245 1.0195 5.75023 0.991496C5.82801 0.963496 5.91134 0.949718 6.00023 0.950162Z"
									fill="#1EB564"
								/>
							</svg>

							<p className="text-sm font-semibold">12%</p>
							<span className="text-sm text-gray-20">vs last 7 days</span>
						</div>

						<button className="py-2 px-1 text-xs xl:w-[50%] text-[#36B3A5] rounded-lg bg-[#C4E8E8]">
							View Profit Analysis
						</button>
					</div>
				</div>

				<div className="xl:col-span-1 w-full md:w-full mt-6 py-12 px-5 xl:mt-0 lg:col-auto bg-white rounded-lg">
					<div className="xl:flex xl:items-center gap-6 ">
						<div className=" justify-center items-center xl:w-[50%] ">
							<h3 className=" text-lg font-semibold ">Total Expenses</h3>
							<span className=" text-sm text-gray-20 ">Last 7 days</span>

							<div className="xl:mt-6 flex gap-x-4 items-center">
								<h3 className="text-[32px] font-semibold">12K</h3>
							</div>
							<div className=" flex gap-x-2 items-center">
								<svg
									width="11"
									height="12"
									viewBox="0 0 11 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M5.5486 11.0498C5.45971 11.0498 5.37638 11.0361 5.2986 11.0085C5.22082 10.9809 5.1486 10.9336 5.08193 10.8665L0.681933 6.4665C0.5486 6.33317 0.481934 6.17495 0.481934 5.99184C0.481934 5.80873 0.5486 5.65028 0.681933 5.5165C0.815267 5.38317 0.970822 5.3165 1.1486 5.3165C1.32638 5.3165 1.48193 5.38317 1.61527 5.5165L4.88193 8.78317L4.88193 1.3165C4.88193 1.12761 4.94593 0.97206 5.07393 0.849837C5.20193 0.727615 5.36016 0.666504 5.5486 0.666504C5.73749 0.666504 5.89593 0.730504 6.02393 0.858504C6.15193 0.986504 6.21571 1.14473 6.21527 1.33317L6.21527 8.78317L9.48193 5.5165C9.61527 5.38317 9.77082 5.3165 9.9486 5.3165C10.1264 5.3165 10.2819 5.38317 10.4153 5.5165C10.5486 5.64984 10.6153 5.80828 10.6153 5.99184C10.6153 6.17539 10.5486 6.33361 10.4153 6.4665L6.01527 10.8665C5.9486 10.9332 5.87638 10.9805 5.7986 11.0085C5.72082 11.0365 5.63749 11.0503 5.5486 11.0498Z"
										fill="#D02626"
									/>
								</svg>

								<p className="text-sm font-semibold">2%</p>
								<span className="text-sm text-gray-20 ">vs last 7 days</span>
							</div>
						</div>
						<div className="xl:w-[50%]">
							<Image
								src="/vector1.svg"
								alt="vector-line"
								className="w-full"
								width={50}
								height={50}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default TotalAnalysis;
