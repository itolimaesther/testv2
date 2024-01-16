import React, { useState } from "react";
import Image from "next/image";
import ReportChart from "./ReportChart";
import CustomCard from "./CustomCard";

function Cashflow() {
	const [dataAvailable, setDataAvailable] = useState<boolean>(true);

	return (
		<>
			<div className="grid grid-cols-1 pt-6 xl:grid-cols-2 xl:gap-4 dark:bg-gray-900">
				<div className="xl:col-span-1 w-full md:w-full mt-6 xl:mt-0 py-4 px-4 lg:col-auto bg-white rounded-lg">
					<div className="xl:flex xl:items-center justify-between gap-6 ">
						<div>
							<div className=" justify-center items-center">
								<h3 className=" text-lg font-semibold ">Revenue</h3>
								<span className=" text-sm text-gray-20 ">This menu </span>
							</div>
							<h3 className="text-[32px] font-semibold">15.5K</h3>
						</div>
						<div>
							<h3 className="text-[22px] font-semibold">49K</h3>
							<Image
								src="/vec5.svg"
								alt="vector-line"
								className="w-full"
								width={50}
								height={50}
							/>
						</div>
					</div>
				</div>
				<div className="xl:col-span-1 w-full md:w-full mt-6 py-4 px-4 xl:mt-0 lg:col-auto bg-white rounded-lg">
					<div className="xl:flex xl:items-center justify-between gap-6 ">
						<div>
							<div className=" justify-center items-center">
								<h3 className=" text-lg font-semibold ">Orders</h3>
								<span className=" text-sm text-gray-20 ">This menu </span>
							</div>
							<h3 className="text-[32px] font-semibold">15.5K</h3>
						</div>
						<div>
							<h3 className="text-[22px] font-semibold">49K</h3>
							<Image
								src="/vec4.svg"
								alt="vector-line"
								className="w-full"
								width={50}
								height={50}
							/>
						</div>
					</div>
					{/* <div className="xl:col-span-1 w-full md:w-full mt-6 xl:mt-0 lg:col-auto bg-white rounded-lg">
          </div> */}
				</div>
			</div>

			<div className="grid grid-cols-1 pt-6 xl:grid-cols-2 xl:gap-4 dark:bg-gray-900">
				<div className="xl:col-span-1 w-full md:w-full mt-6 py-12 px-5 xl:mt-0 lg:col-auto bg-white rounded-lg">
					<div className="xl:flex xl:items-center gap-6 ">
						<div className=" justify-center items-center xl:w-[50%] ">
							<h3 className=" text-lg font-semibold ">Session</h3>
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
			</div>

			<div className="grid grid-cols-1 pt-6 xl:grid-cols-1 xl:gap-4 dark:bg-gray-900">
				<div className="xl:col-span-1 w-full md:w-full mt-6 py-7 px-5 xl:mt-0 lg:col-auto bg-white rounded-lg">
					<div className="xl:flex w-full justify-center items-center space-x-4 ">
						<h3 className=" text-lg w-full font-semibold ">Traffic</h3>
					</div>
					<div className="xl:flex w-full gap-x-20 justify-center items-center">
						<div className="w-full flex flex-col space-y-4">
							<CustomCard
								width="full"
								justifyContent="start"
								alignItems="start"
								shadow="lg"
							>
								<div className="w-full">
									<div className="xl:flex justify-center items-center space-x-4 ">
										<div className="xl:flex xl:w-[70%] xl:justify-start w-full gap-x-2 items-center justify-center ">
											<p className="text-[#828282] text-[20px]">Store Visits</p>
											<svg
												width="20"
												height="20"
												viewBox="0 0 10 10"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M5.00029 -0.000976562C7.76214 -0.000976562 10.001 2.23794 10.001 4.9998C10.001 7.76165 7.76214 10.0005 5.00029 10.0005C2.23843 10.0005 -0.000488281 7.76165 -0.000488281 4.9998C-0.000488281 2.23794 2.23843 -0.000976562 5.00029 -0.000976562ZM5.00029 0.749023C2.65265 0.749023 0.749512 2.65216 0.749512 4.9998C0.749512 7.34745 2.65265 9.25055 5.00029 9.25055C7.34794 9.25055 9.25104 7.34745 9.25104 4.9998C9.25104 2.65216 7.34794 0.749023 5.00029 0.749023ZM4.99844 4.2493C5.18829 4.2492 5.34529 4.39015 5.37024 4.5732L5.37369 4.62405L5.37549 7.37485C5.37564 7.58195 5.20784 7.75 5.00074 7.7501C4.81089 7.75025 4.65389 7.60925 4.62894 7.42625L4.62549 7.37535L4.62369 4.62455C4.62359 4.41745 4.79134 4.24945 4.99844 4.2493ZM5.00049 2.50043C5.27629 2.50043 5.49984 2.72399 5.49984 2.99976C5.49984 3.27553 5.27629 3.49909 5.00049 3.49909C4.72474 3.49909 4.50119 3.27553 4.50119 2.99976C4.50119 2.72399 4.72474 2.50043 5.00049 2.50043Z"
													fill="#BDBDBD"
												/>
											</svg>
										</div>
										<div className="xl:w-[30%]">
											<span className="text-[#4BDE97] text-[18px]">+ 22%</span>
										</div>
									</div>
									<p className="text-[32px] text-gray-90">1520</p>
								</div>
							</CustomCard>
							<CustomCard
								width="full"
								justifyContent="start"
								alignItems="start"
								shadow="lg"
							>
								<div className="w-full">
									<div className="xl:flex justify-center items-center space-x-4 ">
										<div className="xl:flex xl:w-[70%] xl:justify-start w-full gap-x-2 items-center justify-center ">
											<p className="text-[#828282] text-[20px]">Vistors</p>
											<svg
												width="20"
												height="20"
												viewBox="0 0 10 10"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M5.00029 -0.000976562C7.76214 -0.000976562 10.001 2.23794 10.001 4.9998C10.001 7.76165 7.76214 10.0005 5.00029 10.0005C2.23843 10.0005 -0.000488281 7.76165 -0.000488281 4.9998C-0.000488281 2.23794 2.23843 -0.000976562 5.00029 -0.000976562ZM5.00029 0.749023C2.65265 0.749023 0.749512 2.65216 0.749512 4.9998C0.749512 7.34745 2.65265 9.25055 5.00029 9.25055C7.34794 9.25055 9.25104 7.34745 9.25104 4.9998C9.25104 2.65216 7.34794 0.749023 5.00029 0.749023ZM4.99844 4.2493C5.18829 4.2492 5.34529 4.39015 5.37024 4.5732L5.37369 4.62405L5.37549 7.37485C5.37564 7.58195 5.20784 7.75 5.00074 7.7501C4.81089 7.75025 4.65389 7.60925 4.62894 7.42625L4.62549 7.37535L4.62369 4.62455C4.62359 4.41745 4.79134 4.24945 4.99844 4.2493ZM5.00049 2.50043C5.27629 2.50043 5.49984 2.72399 5.49984 2.99976C5.49984 3.27553 5.27629 3.49909 5.00049 3.49909C4.72474 3.49909 4.50119 3.27553 4.50119 2.99976C4.50119 2.72399 4.72474 2.50043 5.00049 2.50043Z"
													fill="#BDBDBD"
												/>
											</svg>
										</div>
										<div className="xl:w-[30%]">
											<span className="text-[#4BDE97] text-[18px]">+ 22%</span>
										</div>
									</div>
									<p className="text-[32px] text-gray-90">1520</p>
								</div>
							</CustomCard>
						</div>

						<div className="w-full">
							<ReportChart dataAvailable={dataAvailable} />
						</div>
					</div>
					{/* <ReportChart dataAvailable={dataAvailable} /> */}
				</div>
			</div>

			<div className="grid grid-cols-1 pt-6 xl:grid-cols-1 xl:gap-4 dark:bg-gray-900">
				<div className="xl:col-span-1 w-full md:w-full mt-6 py-7 px-5 xl:mt-0 lg:col-auto bg-white rounded-lg">
					<div className="xl:flex w-full justify-center items-center space-x-4 ">
						<h3 className=" text-lg w-full font-semibold ">
							Revenue by device
						</h3>
						<div className="xl:flex xl:justify-end w-full gap-x-2 items-center justify-center ">
							<span className=" text-sm text-gray-20 ">More</span>
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M3.3335 8.00016H12.6668M12.6668 8.00016L8.00016 3.3335M12.6668 8.00016L8.00016 12.6668"
									stroke="#8E95A9"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
					</div>
					<div className="mx-auto w-1/2 py-7 justify-center items-center">
						<ReportChart dataAvailable={dataAvailable} />
					</div>
				</div>
			</div>
		</>
	);
}

export default Cashflow;
