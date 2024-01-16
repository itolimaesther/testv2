import React from "react";
import Image from "next/image";

function PlanBeautySec() {
	return (
		<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
			<div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
				<div className="flex flex-col lg:w-full mx-auto max-w-lg">
					<div className=" p-6  text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
						<h3 className="mb-4 text-2xl font-semibold">Quarterly</h3>

						<div className="flex flex-col justify-center items-center my-3">
							<span className="mr-2 text-3xl font-extrabold">₦3000</span>
							<span className="text-[#36B3A5] dark:text-gray-400">
								Billed every 3 months
							</span>
						</div>

						<button
							type="button"
							className="inline-block text-white px-5 py-3 font-semibold tracki text-center bg-blue-500 rounded dark:bg-violet-400 dark:text-gray-900"
						>
							Choose Plan
						</button>
					</div>
					<ul role="list" className="mb-8 p-6 space-y-4 text-left">
						<h3>Standard Plan Features</h3>
						<li className="flex items-center space-x-3">
							<Image
								src="/checkbox.svg"
								alt="checkbox-icon"
								className="flex-shrink-0 w-5 h-5"
								width={50}
								height={50}
							/>
							<span>Individual configuration</span>
						</li>
						<li className="flex items-center space-x-3">
							<Image
								src="/checkbox.svg"
								alt="checkbox-icon"
								className="flex-shrink-0 w-5 h-5"
								width={50}
								height={50}
							/>
							<span>No setup, or hidden fees</span>
						</li>
						<li className="flex items-center space-x-3">
							<Image
								src="/checkbox.svg"
								alt="checkbox-icon"
								className="flex-shrink-0 w-5 h-5"
								width={50}
								height={50}
							/>
							<span>
								Team size: <span className="font-semibold">1 developer</span>
							</span>
						</li>
						<li className="flex items-center space-x-3">
							<Image
								src="/checkbox.svg"
								alt="checkbox-icon"
								className="flex-shrink-0 w-5 h-5"
								width={50}
								height={50}
							/>
							<span>
								Premium support: <span className="font-semibold">6 months</span>
							</span>
						</li>
						<li className="flex items-center space-x-3">
							<Image
								src="/checkbox.svg"
								alt="checkbox-icon"
								className="flex-shrink-0 w-5 h-5"
								width={50}
								height={50}
							/>
							<span>
								Free updates: <span className="font-semibold">6 months</span>
							</span>
						</li>
					</ul>
				</div>

				<div className="flex flex-col lg:w-full mx-auto max-w-lg">
					<div className=" flex flex-col  p-6 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
						<h3 className="mb-4 text-2xl font-semibold">Biannually</h3>

						<div className="flex flex-col justify-center items-center my-3">
							<span className="mr-2 text-3xl font-extrabold">₦3000</span>
							<span className="text-[#36B3A5] dark:text-gray-400">
								Billed every 6 months
							</span>
						</div>
						<button
							type="button"
							className="inline-block text-white px-5 py-3 font-semibold tracki text-center rounded bg-blue-500 dark:bg-violet-400 dark:text-gray-900"
						>
							Choose Plan
						</button>
					</div>
					<ul role="list" className="mb-8 p-6 space-y-4 text-left">
						<li className="flex items-center space-x-3">
							<Image
								src="/checkbox.svg"
								alt="checkbox-icon"
								className="flex-shrink-0 w-5 h-5"
								width={50}
								height={50}
							/>
							<span>Individual configuration</span>
						</li>
						<li className="flex items-center space-x-3">
							<Image
								src="/checkbox.svg"
								alt="checkbox-icon"
								className="flex-shrink-0 w-5 h-5"
								width={50}
								height={50}
							/>
							<span>No setup, or hidden fees</span>
						</li>
						<li className="flex items-center space-x-3">
							<Image
								src="/checkbox.svg"
								alt="checkbox-icon"
								className="flex-shrink-0 w-5 h-5"
								width={50}
								height={50}
							/>
							<span>
								Team size: <span className="font-semibold">1 developer</span>
							</span>
						</li>
						<li className="flex items-center space-x-3">
							<Image
								src="/checkbox.svg"
								alt="checkbox-icon"
								className="flex-shrink-0 w-5 h-5"
								width={50}
								height={50}
							/>
							<span>
								Premium support: <span className="font-semibold">6 months</span>
							</span>
						</li>
						<li className="flex items-center space-x-3">
							<Image
								src="/checkbox.svg"
								alt="checkbox-icon"
								className="flex-shrink-0 w-5 h-5"
								width={50}
								height={50}
							/>
							<span>
								Free updates: <span className="font-semibold">6 months</span>
							</span>
						</li>
					</ul>
				</div>

				<div className="flex flex-col lg:w-full mx-auto max-w-lg">
					<div className="flex flex-col lg:w-full p-6  text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
						<h3 className="mb-4 text-2xl font-semibold">Yearly</h3>

						<div className="flex flex-col justify-center items-center my-3">
							<span className="mr-2 text-3xl font-extrabold">₦3000</span>
							<span className="text-[#36B3A5] dark:text-gray-400">
								Billed every 6 months
							</span>
						</div>
						<button
							type="button"
							className="inline-block text-white px-5 py-3 font-semibold tracki text-center rounded bg-blue-500 dark:bg-violet-400 dark:text-gray-900"
						>
							Choose Plan
						</button>
					</div>
					<ul role="list" className="mb-8 p-6 space-y-4 text-left">
						<li className="flex items-center space-x-3">
							<Image
								src="/checkbox.svg"
								alt="checkbox-icon"
								className="flex-shrink-0 w-5 h-5"
								width={50}
								height={50}
							/>
							<span>Individual configuration</span>
						</li>
						<li className="flex items-center space-x-3">
							<Image
								src="/checkbox.svg"
								alt="checkbox-icon"
								className="flex-shrink-0 w-5 h-5"
								width={50}
								height={50}
							/>
							<span>No setup, or hidden fees</span>
						</li>
						<li className="flex items-center space-x-3">
							<Image
								src="/checkbox.svg"
								alt="checkbox-icon"
								className="flex-shrink-0 w-5 h-5"
								width={50}
								height={50}
							/>
							<span>
								Team size: <span className="font-semibold">1 developer</span>
							</span>
						</li>
						<li className="flex items-center space-x-3">
							<Image
								src="/checkbox.svg"
								alt="checkbox-icon"
								className="flex-shrink-0 w-5 h-5"
								width={50}
								height={50}
							/>
							<span>
								Premium support: <span className="font-semibold">6 months</span>
							</span>
						</li>
						<li className="flex items-center space-x-3">
							<Image
								src="/checkbox.svg"
								alt="checkbox-icon"
								className="flex-shrink-0 w-5 h-5"
								width={50}
								height={50}
							/>
							<span>
								Free updates: <span className="font-semibold">6 months</span>
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default PlanBeautySec;
