import React from "react";

function BannerTemplate() {
	return (
		<div className="grid grid-cols-1 py-5 xl:grid-cols-1 p-5 xl:gap-4 mt-3 dark:bg-gray-900 bg-white rounded-lg">
			<div className="xl:col-span-1 w-full md:w-full mt-6 py-7 px-5 xl:mt-0 lg:col-auto bg-white rounded-lg">
				<h3 className=" text-lg text-[#36B3A5]">Banner Media</h3>
				<p>Upload images for your store banners</p>
				<div className="xl:flex gap-y-3 gap-x-2 mb-8 w-full">
					<div className="bg-gray-200 xl:w-1/2 rounded-md p-6 flex flex-col justify-center items-center">
						<h3 className="text-3xl text-gray-400">Hero Banner</h3>
						<div className="mt-2 px-6">
							<div className="flex flex-col justify-center items-center text-center">
								<svg
									width="41"
									height="41"
									viewBox="0 0 41 41"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M23.9167 15.375C22.9732 15.375 22.2083 16.1399 22.2083 17.0833C22.2083 18.0268 22.9732 18.7917 23.9167 18.7917C24.8602 18.7917 25.625 18.0268 25.625 17.0833C25.625 16.1399 24.8602 15.375 23.9167 15.375ZM12.3854 11.1042C11.6778 11.1042 11.1042 11.6778 11.1042 12.3854V28.6146C11.1042 29.3222 11.6778 29.8958 12.3854 29.8958H28.6146C29.3222 29.8958 29.8958 29.3222 29.8958 28.6146V12.3854C29.8958 11.6778 29.3222 11.1042 28.6146 11.1042H12.3854ZM17.782 21.6258L13.6667 25.7412V13.6667H27.3333V25.7412L23.218 21.6258C21.7168 20.1247 19.2832 20.1247 17.782 21.6258ZM21.4059 23.4378L25.3016 27.3333H15.6985L19.5941 23.4378C20.0944 22.9375 20.9056 22.9375 21.4059 23.4378ZM10.6771 5.125C7.61074 5.125 5.125 7.61074 5.125 10.6771V30.3229C5.125 33.3892 7.61074 35.875 10.6771 35.875H30.3229C33.3892 35.875 35.875 33.3892 35.875 30.3229V10.6771C35.875 7.61074 33.3892 5.125 30.3229 5.125H10.6771ZM7.6875 10.6771C7.6875 9.02598 9.02598 7.6875 10.6771 7.6875H30.3229C31.974 7.6875 33.3125 9.02598 33.3125 10.6771V30.3229C33.3125 31.974 31.974 33.3125 30.3229 33.3125H10.6771C9.02598 33.3125 7.6875 31.974 7.6875 30.3229V10.6771Z"
										fill="#828282"
									/>
								</svg>

								<div className="mt-4 text-sm text-center leading-6 text-gray-600">
									<p className="pl-1">
										Drag and drop images here or click add image
									</p>
									<label
										htmlFor="file-upload"
										className="mt-5 relative cursor-pointer rounded-md flex flex-col items-center   font-semibold"
									>
										<span className="flex flex-col items-center justify-center flex-shrink-0 px-7 py-3 text-sm font-medium text-white bg-[#C4E8E8] border border-[#C4E8E8] rounded-lg focus:outline-none hover:bg-[#C4E8E8] hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
											+ Add Image
										</span>
										<input
											id="file-upload"
											name="file-upload"
											type="file"
											className="sr-only"
										/>
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-gray-200 xl:w-1/2 rounded-md p-6 flex flex-col items-center">
						<h3 className="text-3xl text-gray-400">Promo Banner</h3>
						<div className="mt-2 px-6">
							<div className="flex flex-col justify-center items-center text-center">
								<svg
									width="41"
									height="41"
									viewBox="0 0 41 41"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M23.9167 15.375C22.9732 15.375 22.2083 16.1399 22.2083 17.0833C22.2083 18.0268 22.9732 18.7917 23.9167 18.7917C24.8602 18.7917 25.625 18.0268 25.625 17.0833C25.625 16.1399 24.8602 15.375 23.9167 15.375ZM12.3854 11.1042C11.6778 11.1042 11.1042 11.6778 11.1042 12.3854V28.6146C11.1042 29.3222 11.6778 29.8958 12.3854 29.8958H28.6146C29.3222 29.8958 29.8958 29.3222 29.8958 28.6146V12.3854C29.8958 11.6778 29.3222 11.1042 28.6146 11.1042H12.3854ZM17.782 21.6258L13.6667 25.7412V13.6667H27.3333V25.7412L23.218 21.6258C21.7168 20.1247 19.2832 20.1247 17.782 21.6258ZM21.4059 23.4378L25.3016 27.3333H15.6985L19.5941 23.4378C20.0944 22.9375 20.9056 22.9375 21.4059 23.4378ZM10.6771 5.125C7.61074 5.125 5.125 7.61074 5.125 10.6771V30.3229C5.125 33.3892 7.61074 35.875 10.6771 35.875H30.3229C33.3892 35.875 35.875 33.3892 35.875 30.3229V10.6771C35.875 7.61074 33.3892 5.125 30.3229 5.125H10.6771ZM7.6875 10.6771C7.6875 9.02598 9.02598 7.6875 10.6771 7.6875H30.3229C31.974 7.6875 33.3125 9.02598 33.3125 10.6771V30.3229C33.3125 31.974 31.974 33.3125 30.3229 33.3125H10.6771C9.02598 33.3125 7.6875 31.974 7.6875 30.3229V10.6771Z"
										fill="#828282"
									/>
								</svg>

								<div className="mt-4 text-sm text-center leading-6 text-gray-600">
									<p className="pl-1">
										Drag and drop images here or click add image
									</p>
									<label
										htmlFor="file-upload"
										className="mt-5 relative cursor-pointer rounded-md flex flex-col items-center font-semibold"
									>
										<span className="flex flex-col items-center justify-center flex-shrink-0 px-7 py-3 text-sm font-medium text-white bg-[#C4E8E8] border border-[#C4E8E8] rounded-lg focus:outline-none hover:bg-[#C4E8E8] hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
											+ Add Image
										</span>
										<input
											id="file-upload"
											name="file-upload"
											type="file"
											className="sr-only"
										/>
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<form action="">
					<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
						<div className="sm:col-span-2">
							<label
								htmlFor="hero-text"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								Hero Text
							</label>
							<div className="mt-2.5">
								<textarea
									name="hero-text"
									id="hero-text"
									placeholder="Add Headline Text for your website hero section"
									rows={4}
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									defaultValue={""}
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label
								htmlFor="promo-text"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								Promo Text
							</label>
							<div className="mt-2.5">
								<textarea
									name="promo-text"
									id="promo-text"
									placeholder="Add text for your website promo section"
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

export default BannerTemplate;
