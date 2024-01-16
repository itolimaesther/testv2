import React from "react";

function AnalyticsTemplate() {
	return (
		<div className="grid grid-cols-1 py-5 xl:grid-cols-1 p-5 xl:gap-4 mt-3 dark:bg-gray-900 bg-white rounded-lg">
			<div className="xl:col-span-1 w-full md:w-full mt-6 py-7 px-5 xl:mt-0 lg:col-auto bg-white rounded-lg">
				<h3 className=" text-lg text-[#36B3A5]">Analytics</h3>
				<form action="">
					<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
						<div className="sm:col-span-2">
							<label
								htmlFor="google-analytics"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								Google Analytics
							</label>
							<div className="mt-2.5">
								<textarea
									name="google-analytics"
									id="google-analytics"
									placeholder="Add your google analytics script from Google"
									rows={4}
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									defaultValue={""}
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label
								htmlFor="facebook-pixels"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								Facebook Pixels
							</label>
							<div className="mt-2.5">
								<textarea
									name="facebook-pixels"
									id="facebook-pixels"
									placeholder="Add your google analytics script from Google"
									rows={4}
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									defaultValue={""}
								/>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AnalyticsTemplate;
