import React from "react";
import Image from "next/image";

function HomeServiceSection() {
	return (
		<div className="flex flex-wrap lg:space-x-12 gap-x-0 md:gap-x-0 gap-y-12 md:gap-y-12 -ml-1 lg:-mx-2">
			<div className="my-1 px-1 py-3 lg:py-12 w-full md:w-full bg-[#CDE5FB] shadow rounded-lg  lg:my-4 lg:px-4 lg:w-[30%]">
				<div className="flex flex-col items-center pb-10">
					<Image
						src="/Glyph3.svg"
						alt="world-icon"
						width={50}
						height={50}
						className="w-28"
					/>

					<div className="mt-4 md:mt-6 text-center">
						<h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
							Need a help in Claim?
						</h5>
						<p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
							Go to this step by step guideline process on how to certify for
							your weekly benefits:
						</p>
					</div>
				</div>
			</div>
			<div className="my-1 px-1 py-3 lg:py-12 w-full md:w-full  bg-[#FAF0CC] shadow rounded-lg lg:my-4 lg:px-4 lg:w-[30%]">
				<div className="flex flex-col items-center pb-10">
					<Image
						src="/Glyph7.svg"
						alt="world-icon"
						width={50}
						height={50}
						className="w-28"
					/>

					<div className="mt-4 md:mt-6 text-center">
						<h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
							Need a help in Claim?
						</h5>
						<p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
							Go to this step by step guideline process on how to certify for
							your weekly benefits:
						</p>
					</div>
				</div>
			</div>
			<div className="my-1 px-1 py-3 lg:py-12 w-full md:w-full  bg-[#E1D6FA] rounded-lg shadow lg:my-4 lg:px-4 lg:w-[30%]">
				<div className="flex flex-col items-center pb-10">
					<Image
						src="/Glyph.svg"
						alt="world-icon"
						width={50}
						height={50}
						className="w-28"
					/>

					<div className="mt-4 md:mt-6 text-center">
						<h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
							Need a help in Claim?
						</h5>
						<p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
							Go to this step by step guideline process on how to certify for
							your weekly benefits:
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeServiceSection;
