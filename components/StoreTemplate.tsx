import React from "react";
import Image from "next/image";

function StoreTemplate() {
	return (
		<div className="grid grid-cols-1 py-5 xl:grid-cols-1 p-5 xl:gap-4 mt-3 dark:bg-gray-900 bg-white rounded-lg">
			<div className="xl:col-span-1 w-full md:w-full mt-6 py-7 px-5 xl:mt-0 lg:col-auto bg-white rounded-lg">
				<h3 className=" text-lg text-[#36B3A5]">Select Store Template</h3>
				<div className="xl:flex mt-8 gap-x-2 mb-8 w-full xl:h-36">
					<div className="xl:w-1/4 w-full ">
						<Image
							src="/store-photo1.svg"
							width={300}
							height={300}
							className="w-full h-full object-cover object-center xl:h-full xl:w-full rounded-lg"
							alt={"Store template photo"}
						/>
					</div>
					<div className="xl:w-1/4 w-full ">
						<Image
							src="/store-photo2.svg"
							width={300}
							height={300}
							className="w-full h-full object-cover object-center xl:h-full xl:w-full rounded-lg"
							alt={"Store template photo"}
						/>
					</div>
					<div className="xl:w-1/4 w-full">
						<Image
							src="/store-photo3.svg"
							width={300}
							height={300}
							className="w-full h-full object-cover object-center xl:h-full xl:w-full rounded-lg"
							alt={"Store template photo"}
						/>
					</div>
					<div className="xl:w-1/4 w-full">
						<Image
							src="/store-photo4.svg"
							width={300}
							height={300}
							className="w-full h-full object-cover object-center xl:h-full xl:w-full rounded-lg"
							alt={"Store template photo"}
						/>
					</div>
				</div>

				<div className="flex justify-center items-center">
					<button
						type="button"
						className="w-full xl:w-80 flex items-center justify-center px-7 py-3 text-sm font-medium text-white bg-[#36B3A5] border border-[#36B3A5] rounded-lg focus:outline-none hover:bg-[#36B3A5] hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-[#36B3A5] dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
					>
						Select
					</button>
				</div>
			</div>
		</div>
	);
}

export default StoreTemplate;
