import React from "react";

function CTA() {
	return (
		<div className="linear-bg p-2 lg:p-4 text-center mx-auto bg-white border-gray-200 rounded-[51px] shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
			<div className="block lg:flex items-center justify-center md:flex-row w-full">
				<div className="w-full lg:w-[70%] p-8 lg:py-8 text-center">
					<h5 className="mb-2 text-xl lg:text-[44px] lg:leading-[54px] font-bold text-white dark:text-white">
						Effortless Control, Enhanced Efficiency, and Limitless Possibilities
					</h5>
					<div className="my-8 lg:my-12">
						<a href="#" className="btn-l-purple">
							Get Started
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CTA;
