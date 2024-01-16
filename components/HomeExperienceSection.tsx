import React from "react";
import Image from "next/image";

function HomeExperienceSection() {
	return (
		<div className="flex flex-wrap md:flex-nowrap md:flex-grow gap-x-0 md:gap-x-8 gap-y-12 md:gap-y-12 -ml-1 lg:-mx-2 md:-mx-0">
			<div className="my-1 px-1 py-3 lg:py-12 bg-[#CDE5FB] shadow rounded-lg w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-2/3">
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
			<div className="flex flex-grow flex-col gap-y-3 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
				<div className="block max-w-sm p-6 lg:py-4 border border-[#D9D9D9] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
					<p className="font-normal text-[#F2F2F2] dark:text-gray-400">
						Duis officia magna ad irure. Sunt magna consequat pariatur est
						ipsum. Reprehenderit incididunt quis enim ea. Ea commodo duis
						incididunt minim commodo consectetur commodo nulla commodo .
					</p>
					<div className="my-4">
						<p className="text-[#36B3A5] text-lg ">Opeyemi Ariyo</p>
						<p className="text-[#36B3A5] text-xs">CEO, Opylo Tech Nig. Ltd.</p>
					</div>
				</div>
				<div className="block max-w-sm p-6 lg:py-4 border border-[#D9D9D9] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
					<p className="font-normal text-[#F2F2F2] dark:text-gray-400 leading-6">
						Duis officia magna ad irure. Sunt magna consequat pariatur est
						ipsum. Reprehenderit incididunt quis enim ea. Ea commodo duis
						incididunt minim commodo consectetur commodo nulla commodo .
					</p>
					<div className="my-4">
						<p className="text-[#36B3A5] text-lg ">Daniel Tochukwu</p>
						<p className="text-[#36B3A5] text-xs">CEO, Mama Put</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeExperienceSection;
